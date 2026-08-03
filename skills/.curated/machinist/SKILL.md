---
name: machinist
description: Use when editing BeScript game logic via TS views, modifying Canvas layouts via HTML views, calling patch_mech_view or refactor tools, or implementing 弹幕互动游戏 features on CreatAI platform
---

# BeScript 工程开发知识库

## 术语规范

### 翻译固定

| 英文 | 唯一正确翻译 | 禁止用法 |
|------|-------------|---------|
| Device | 零件 | ❌ 设备 |
| Mech | 机械 | ❌ 机甲 |

### 概念边界

| 概念A | 概念B | 区分要点 |
|-------|-------|---------|
| 机械 | 单位 | 机械是底层载体；单位是抽象概念，借用机械作为壳子，单位消失后机械可回收复用 |
| Player 类型 | 弹幕玩家 | Player 是平台内置类型；弹幕玩家是游戏内参与者数据，用 Dict/Struct 存储 |
| 弹幕互动游戏 | 弹幕游戏 | 本工程做的是"直播弹幕互动游戏"；禁止与射击类"弹幕游戏"混淆 |
| TS 视图 | BeScript 源码 | TS 视图是映射视图，用于阅读和编辑；BeScript 源码是底层格式 |
| HTML 视图 | Canvas 二进制 | HTML 视图是映射视图；Canvas 二进制是底层格式 |

## 平台核心概念

### 数据结构层级

- **地图 Map**：场景入口，固定结构，通过"机械产生器"导入机械
- **机械 Mech**：组合载体，挂载多个零件；可表示单位/投射物/特效/建筑等
- **零件 Device**：功能部件，脚本的实际挂载点

### 实体标识符

| 实体类型 | 唯一标识符 | 来源 |
|---------|-----------|------|
| 地图 Map | GUID | `.map.guid` 伴随文件 |
| 机械 Mech | GUID | `.mech.guid` 伴随文件 |
| 零件 Device | 数字 ID | 目录名 |
| 代码仓库脚本 | GUID | `.code.guid` 伴随文件 |
| 内联脚本 | 无 | - |
| Canvas | GUID | `.canvas.guid` 伴随文件 |

MCP 的 `entityGuids` 参数仅支持有 GUID 的实体；零件只有数字 ID，需用 `namePattern` 或路径查询。

### 逻辑驱动

- **事件 Event**：底层触发点，类型固定，参数固定，无返回值；任何调用栈必起源于事件
- **脚本 Script**：所有游戏逻辑的载体，必须依附于零件
  - 事件脚本：由事件触发，不可手动调用
  - 自定义脚本：可被其他脚本调用，支持私有权限
  - 动态调用：通过函数签名+目标引用调用其他零件方法

### 数据存储

- **持久化数据**：在线存储，用于存档/排行榜，必须显式读写，无自动存档机制
- **局内数据**：运行时状态，不应持久化

### 概念关系

```
持久化数据 ←→ Script ←→ Event ←→ Mech / Device / Map
```

## 核心目标

- 在 Mech 平台的规则约束下，使用内置工具和 Toolkit 进行开发和辅助调试工作
- 优先用"示例工程"和"常用模板"对照写法与结构，再把内容迁移到目标工程

## 平台硬约束

- 封闭世界：不能调用外部库/外部系统，只能使用内置库
- 技术栈固定：只能使用 BeScript 平台提供的内置库与工程已有内容
- TS 视图不是标准 TS 项目：`temp/toolkit/tsconfig.json` 用于类型检查，但不存在 package.json 或 node_modules
- IO 入口有限：不能做任意文件/网络 IO
- 单线程顺序执行：不存在真正并行，不要编造线程、锁等概念
- 刚创建的机械存在生成稳定期：`G.createAIMech` / `G.createPlayerMech` 的坐标和朝向参数是生成位姿；不要在同一调用栈里立刻用移动/旋转逻辑二次覆盖新机械(很可能被系统底层静默吞掉导致难以排查)，需要二次校正时放到后续 `update` / `mechUpdate`
- 语言选择由平台基座负责：工程脚本只能按当前语言做翻译，禁止编造"自选语言/切换语言"的入口
- 无 `try/catch`：需让真实错误暴露
- 返回值固定指向一个标识符：禁止多分支多返回值
- **return/break 规范**：
  - 有效 while 内（至少一层未禁用的 while）只能用 `break`，禁止用 `return`
  - 非有效 while 内（脚本顶层或全部 while 均被禁用）只能用 `return <retVarName>`，禁止用 `break`
  - `return` 后的标识符必须与脚本声明的返回变量名一致
- 禁止递归：用循环或显式展开
- 自定义脚本禁止与零件 Act 重名
- 事件类型已固定：禁止编造不存在的事件
- 不存在测试脚本/测试框架：测试只能做成游戏内正式逻辑的一部分（常用约定：启动按住 `G` 进入测试模式）
- `setting.json` 结构固定：禁止修改
- 表格就是 Excel(`.xlsx`),不是 json,也不是 Markdown;禁止把表格说成或写成 json;格式约定见 `references/tips/table-based-attribute.md`
- **布尔条件规范**：
  - 直接用 `if (cond)` 或 `if (G.create.bool(cond))` 表示肯定条件
  - 用 `if (G.bool.not(cond))` 表示否定条件（等同于 `if (!cond)`）
  - 禁止滥用 `bool.equal(x, true)` 或 `bool.and(x, y)` 做条件判断
- **Canvas/UI 对象无 GC**：禁止随意丢弃 UI 对象或机械对象引用，丢弃即内存泄漏；频繁复用对象走对象池（隐藏/复用），不再使用的对象用 `del` 显式清理
- **delay 是关键字不是函数**：`delay(常规调用)` 是正确格式，禁止写 `delay(BeFloat.fromBeConst("1"))` 这种直接塞常量的错误格式
- **异步阻塞规则**：只有带返回值的异步方法才阻塞调用者；`BeScriptAsync`/`async` 本身不强制等待，无返回值异步方法立即返回；若需控制时序应通过返回值制造阻塞（可占位）
- **物理帧 vs 图形帧**：`每帧循环` 是图形帧，`物理帧循环` 才是物理帧；物理计算必须移到物理帧；物理帧率必须 ≥ 图形帧率否则严重 bug；2D 场景使用 XY 轴而非 Z 轴
- **机械功能开关**：`Mech.setActive` 是独立开关，关闭后图形/物理/逻辑均关闭，无需反复单独开关其他功能
- **Null 模拟**（非推荐，非必要禁止）：声明全局变量但不赋值，别处只读不写；是对底层缺陷的代偿 hack，禁止滥用
- **富文本**：仅 UILabel 支持，`<size=XXX>文本</size>` 和 `<color=#RRGGBB>文本</color>`；`#RRGGBB` 格式仅限富文本标签内使用

## 按需查阅

| 任务 | 文档 |
|------|------|
| 编写/修改 TS 视图 | `references/concepts/tsview-writing-spec.md` |
| 理解视图目录布局 | `references/concepts/view-directory-structure.md` |
| 事件与脚本机制 | `references/concepts/script-event-mechanism.md` |
| UI 组件运行时操作 | `references/concepts/canvas-component-guide.md` |
| 测试/调试/日志 | `references/concepts/test-debug-log.md` |
| Airtest 黑盒测试剧本规则 | `references/concepts/airtest-script-rules.md` |
| 持久化数据与存档 | `references/concepts/persistence-save.md` |
| 弹幕互动游戏设计 | `references/concepts/danmu-game-concepts.md` |
| 单位/弹幕玩家/怪物 | `references/concepts/unit-player-streamer-monster.md` |
| 技能与特效设计 | `references/concepts/effect-skill-design.md` |
| 机械复用 | `references/tips/mech-reuse-guide.md` |
| 投射物与碰撞 | `references/tips/projectile-collision-detector.md` |
| UI 动画机制 | `references/tips/canvas-animation-mechanism.md` |
| 读表管理属性 | `references/tips/table-based-attribute.md` |
| 性能优化 | `references/tips/performance-optimization.md` |
| 图片与动图 | `references/tips/image-animation-guide.md` |
| Shader 材质属性 | `references/tips/shader-material-properties.md` |
| 本地化实现 | `references/tips/localization-implementation.md` |
| 调色板表格 | `references/tips/palette-table-usage.md` |
| 代码模板参考 | `assets/README.md` |
| 完整文档索引 | `references/index.md` |

## 文档入口

- **SDK 参考文档**：`temp/toolkit/bescript_reference/sdk.ts`，包含平台全部 API 的类型声明与调用签名，是实现功能时的首要取证来源。**不确定 API 用法时必须先查此文件**，禁止凭印象猜测

### 草稿文件与错误恢复

`patch_mech_view` / `patch_mech_view_multiedit` 校验失败时自动保存 `.draft` 草稿文件（全量目标文本 + 基线哈希）。草稿不会干扰 `patch_mech_view` / `patch_mech_view_multiedit` 的正常使用。恢复流程：
1. 读取草稿文件理解修改内容并修正问题
2. 用 `commit_draft` 重新提交或重新`patch_mech_view`/`patch_mech_view_multiedit`从头开始修改
3. 若放弃修改，直接忽略该草稿，不要主动调用 `cleanup_drafts`

### 创建独立 Canvas 文件

创建独立 `.canvas` 文件有两种方式，按场景选择：

1. **内联后导出**：先在脚本内联编写 canvas，再用 `refactor_canvas_extract` 抽出为独立文件。
2. **直接新建**：用 `patch_mech_view` 直接新建——`view_path` 指向不存在的 `.html`、`old_string` 留空、`new_string` 给出完整合法 HTML。

**直接新建的前提**（不满足则拒绝，不写盘）：父目录须已存在（在编辑器中创建目录/零件结构）；HTML 主体须通过校验（转码 + Layout Lint + 渲染）。

**新建成功**：返回结果含 `created_canvas_guid`，可直接用于 `refactor_canvas_import` 导入或脚本内 `guid:` 引用，无需再读。

`.ts` 视图不支持新建——零件须先在编辑器中创建，再编辑其脚本。

详细文档索引见 `references/index.md`，包含：

- **概念文档** (`references/concepts/`)：视图结构、TS 视图规范、脚本事件、UI 管理、弹幕游戏等核心概念
- **技巧文档** (`references/tips/`)：机械复用、投射物碰撞、UI 动画、读表、本地化、性能优化等实现技巧
- **代码模板** (`assets/`)：从示例工程摘录的 TS 视图片段，用于对照写法

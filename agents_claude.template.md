<!-- mechtoolkit: 以下是mechtoolkit文档 -->
# CreatAI 平台开发指引

## 开发场景

- 本工作区是 CreatAI 平台的游戏工程（弹幕互动游戏或单机小游戏）
- 协助策划完成工程开发，表述简洁实用，禁止报告式风格和企业场景假设
- Skill 参考：`machinist` 提供完整的开发指引、平台约束和代码模板
- 技术栈固定且封闭：只有 CreatAI 平台提供的标准库 SDK，无外部依赖，禁止 DevOps/环境变量/配置等脱离实际的表述
- SDK 参考文档：`temp/toolkit/bescript_reference/sdk.ts`，一切设计必须有事实依据
- **不确定 API 用法时必须先查 SDK**：SDK 文件包含平台全部 API 的类型声明和调用签名，是唯一的权威来源；禁止凭印象猜测 API 名称、参数或行为

## 文件类型与操作方式

| 文件类型 | 格式 | 操作方式 |
|---------|------|---------|
| `.code` (BeScript) | 原始脚本 | 禁止直接编辑，通过 TS 视图 + `patch_mech_view` 间接修改 |
| `.canvas` | 二进制布局 | 禁止直接编辑，通过 HTML 视图 + `patch_mech_view` 间接修改 |
| `.ts` (TS 视图) | 可读视图 | 通过 `patch_mech_view` 编辑，禁止直接编辑（会被抹平） |
| `.html` (HTML 视图) | 可读布局视图 | 通过 `patch_mech_view` 编辑，禁止直接编辑（会被抹平） |
| `.json` / `.guid` | Hjson | 禁止直接编辑 |
| `.png` | Canvas 预览图 | 只读 |

- 读操作：无约束，可自由使用原生工具
- 写操作（专用格式）：必须使用 `patch_mech_view` 和 `refactor_*` 等工具
- 写操作（普通文本）：可使用原生工具

## 绝对禁区

- 严禁直接编辑 `.code` / `.canvas` 文件——无论遇到任何困难
- 严禁使用 Python 和 sed 编辑 code/canvas/ts/html 文件——会导致严重破坏
- 严禁假设地图包含机械——`XXX.map_/XXX.mech_/123` 这种嵌套结构不存在
- 严禁编造不存在的事件、外部依赖、测试框架、try/catch、递归
- 严禁修改 `setting.json` / `*.map` / `*.mech` / `map.json` / `mech.json` / `vars.json` / `list.json` / `device.json`
- 草稿文件（`.draft`）是校验失败时的自动保存，不会干扰正常操作；不要主动调用 `cleanup_drafts`

## MCP 自动行为（无需操心）

- Host 持续维护 `temp/toolkit/views` 下视图与原始 `*.code` / `*.canvas` 的一致性
- MCP 正常运行时文件不会不同步，无需假设"不同步"
- `patch_mech_view` 校验失败时自动保存 `.draft` 草稿文件（全量目标文本 + 基线哈希）
- 草稿恢复：读取草稿理解内容 → 修正后用 `commit_draft` 重提；放弃则直接忽略

## MCP 操作要点

- 视图路径（ViewPath）：相对 `temp/toolkit/views/`，用 `/`，用于 `patch_mech_view` 的 `viewRelativePath`
- 工程路径（WorkspacePath）：相对工程根目录，用 `/`，禁止 `..` 和绝对路径，用于 `refactor_*` 的各种 `*Path`
- 修改顺序：必须先有脚本才能添加调用
- 写回后必须复读确认修改生效
- 删除脚本：先删所有调用处，再一次性删掉整个方法定义（装饰器+签名+花括号+方法体），禁止留空壳
- 更名脚本：用 `refactor_*` 工具，`patch_mech_view` 不支持在脚本被引用时更名

## 写代码前的必读文档

**写任何代码之前，必须先通读以下文档，否则产出的代码几乎必然不符合平台格式要求：**

- TS 视图格式：`machinist` Skill → `references/concepts/tsview-writing-spec.md`
  - 装饰器写法、调用关键字体系（fun/varf/act）、变量声明与赋值规则、while/条件表达式写法
- Canvas/HTML 视图格式：`machinist` Skill → `references/concepts/canvas-component-guide.md`
  - 视图语法、数据类型写法（color/vector/palette）、CSS 映射规则、写回约束
  - **组件属性的权威定义**在 Host 生成的渲染引擎声明文件 `temp/toolkit/canvas_render/CanvasTypesNodes.ts`，包含 CanvasNodeModel / UIRect / UIButton / UILabel / TextPro / UIInput / UIRawImage / UISpine / ScrollRect 等全部组件的属性与类型声明；canvas-component-guide 只讲格式规则，具体属性和取值范围以此文件为准

## 代码风格

- 简洁优先：能完成工作的前提下用尽可能少的代码
- 性能敏感：BeScript 脚本语言中冗余会快速放大，禁止非必要的防御和重复检查
- DRY 原则：复用优先，禁止无意义的只增不减
- 面向 Agent 的详细规则和平台硬约束见 `machinist` Skill

<!-- mechtoolkit: 以上是mechtoolkit文档 -->

# TS 视图编写规范

TS 视图是"给编辑器看的脚本视图"：看起来像 TypeScript，但不是 JS/TS 程序。在这里写的内容会被校验后写回到原版 BeScript 脚本。

这份文档只说两件事：
- 在 TS 视图里**应该怎么改**，才能被接受并正确写回。
- 哪些信息是"定位/关联用"的，**不要乱动**，未被许可的修改会直接被拒。

## 本篇范围

- 只讲 TS 视图的结构、语法约束、写回边界与"禁止改动"的视图上定位信息。
- 机械复用、投射物对象池、碰撞层、UI/Canvas 运行时规则等特性和技巧不在此处,应该到相应位置查找。

## 1. TS 文件分类

### 1.1 零件 TS 聚合视图 (一个文件对应一个零件的整体视图)

- 一个零件对应一个 `export class Device_...`。
- **使用受限 TS 视图语法**：变量声明、赋值、调用、控制流，会被解析转换为 BeScript。
- 全局变量是 class 的 `private` 字段，位于 `// [Globals] BEGIN/END` 区段内，上一行用 `@bsVar({ name: "原名" })` 标记原名，初始化使用 `BeXxx.GlobalVarInitialize()`。
- 自定义脚本位于 `// [Script] BEGIN/END` 区段内，使用属性赋值形式声明。
- 事件脚本位于 `// [Events] BEGIN/END` 区段内的 `static { }` 块中，通过 `this.registerEvent_xxx(this, { ... })` 注册。
- 私有自定义脚本使用 `protected`（允许机械产生器虚拟核心继承访问）。

### 1.2 CodeRepo.ts（代码仓库视图：只读索引 + 原始命令行）

- `CodeRepo.ts` 用来**定位/引用**代码仓库脚本的符号。
- **仅限 CodeRepo**：方法体用 `//|` 原始命令行格式，不做 TS 语义转换。此规则不适用于零件视图。
- `//|` 后面直接跟原版整行文本，不做任何额外格式化；原版若是 `//_注释`，TS 里就应是 `//|//_注释`。
- 当前 `CodeRepo.ts` **禁止写回**；不要手改它。
- 需要"提取为代码仓库 / 关联到代码仓库 / 删除代码仓库脚本"时，用重构动作：
  - `script.toRepository`
  - `script.linkRepository`
  - `script.deleteRepository`

### 1.3 d.ts声明

- sdk.ts SDK声明
- custom-logic.d.ts 自定义内容索引: 这里是一个快速索引,用于解决循环依赖的问题和提供对外接口定义来源. 此处禁止主动修改,应随零件TS视图修改而被动更新.

## 2. 核心约束

### 2.0 写入范围

- 地图/机械/零件（实体本身）的增删改不在支持范围内；允许读取，但写入仅限于"零件 class 内部"的脚本/变量更新。
- 若需求涉及新增/删除/重命名零件、调整零件挂载、修改地图/机械结构等，必须明确告知用户由其手动完成后再继续。
- 禁止脱离实际而强行假设具有允许范围外的修改能力

### 2.1 禁止当成 JS/TS 写

- 禁止 JS/TS 标准库与外部库（例如 `Math.*`、`Array.*`）。
- 禁止基础运算符（`+ - * / == >` 等），必须改成平台调用（`G.*` 或变量方法）。
- 禁止对象/数组字面量（`{}`、`[]`）。
- 禁止 `new`、函数表达式、`let`/`const`。
- 禁止主动使用 `as` 强转。如果视图中出现 `as`，说明底层存在类型不一致，应分析原因并尽量消除。
- 控制流只允许 `if` / `while` / `break` / `continue` / `return`；禁止 `else` / `switch` / `try/catch` / `for` 等。

### 2.1.1 调用关键字体系

BeScript 有三类调用关键字，在 TS 视图中映射为不同语法：

| 关键字 | TS 视图写法 | 用途 |
|--------|-----------|------|
| fun | `G.*` | 平台内置函数（含泛型和可变参数优化） |
| varf | `变量.成员方法()` | 变量类型的成员方法，如 `time.addEqual(timeD)` |
| act | `Act.*` | 调用零件方法（底层 Act + 自定义方法） |

**act 调用的三种形式：**

| 形式 | 写法 | 可见范围 |
|------|------|---------|
| 调用自身 | `Act.self<Device_类型>(this).方法名` | 底层 Act + 私有自定义 + 非私有自定义 |
| 按别名调用 | `Act.byName<Device_类型>("零件别名").方法名` | 底层 Act + 非私有自定义 |
| 按 ID 调用 | `Act.byId<Device_类型>(id号).方法名` | 底层 Act + 非私有自定义 |

**动态调用参数规则：** 指定零件动态调用方法时填**原始 BeScript 名称**（如 `UI'清空`），不是 TS 属性名。调用地图方法（如 `callClientMapRet`）使用 `零件逻辑名.原始BeScript名称` 格式。

**varf 补充说明：** 部分功能缺少静态 Act 路径时，可先用静态 Act 获取 `BeDevice` 对象，再用其 varf 成员方法完成操作。varf 提供了静态 Act 不具备的查询方法存在性、循环调用、禁用方法等能力。

**SDK 查找引导：** 具体 `G.*` 函数名、`BeXxx` 类型成员方法、目标 Device 的可用 Act 方法名，均在 `temp/toolkit/bescript_reference/sdk.ts` 中有完整声明；不确定时先查 SDK，禁止凭印象猜测。

### 2.2 局部变量声明

方法体里如果需要局部变量：
- 用 `var 名称: Be类型` 声明，禁止 `let`/`const`
- 返回值变量：非形参时固定在方法体首行声明 `var ret: BeType;`，表达返回契约
- 普通局部变量：在首次赋值行内联声明 `var a: BeType = call(...)`
- 后续赋值只写 `a = call(...)`，不重复声明
- 局部变量禁止与全局变量或形参重名

示例（零件 TS 视图片段：自定义脚本 + coderepo 链接）：
```ts
        public X_工具_x27_昵称简化 = BeScript({ name: "工具'昵称简化", repo: "092f7874c1f54dc19287189d1a2e76ee", color: [255, 255, 255], comment: "限制为只保留6字符", retVar: "r" })((w: BeString) => {
            var r: BeString
            var N: BeFloat = w.length();
            if (G.float.gt(N, BeFloat.fromBeConst("8"))) {
                w = w.substring(BeFloat.fromBeConst("0"), BeFloat.fromBeConst("6"));
                w = G.string.add(w, BeString.fromBeConst("..."));
            }
            r = G.create.string(w);
            return r;
        });
```

示例（零件 TS 视图片段：`while` + `if` 嵌套）：
```ts
            time = G.create.float(BeFloat.fromBeConst("0"));
            X_continue = G.create.bool(BeBool.fromBeConst("1"));
            first = G.create.bool(BeBool.fromBeConst("1"));
            while (G.create.bool(X_continue)) {
                if (G.bool.not(first)) {
                    timeD = G.time.deltaTime();
                    time.addEqual(timeD);
                }
                rate = G.float.division(time, duration);
                index = G.long.lerp(start, end, rate);
                name = G.create.string(index);
                length = name.length();
                if (G.float.Approximately(length, BeFloat.fromBeConst("1"))) {
                    name = G.string.add(BeString.fromBeConst("000"), name);
                }
                name = G.string.add(prefix, name, BeString.fromBeConst(".png"));
                UI.loadPic(name);
                first = G.create.bool(BeBool.fromBeConst("0"));
                X_continue = G.float.lt(time, duration);
                G.delay(G.create.float(BeFloat.fromBeConst("0")));
            }
```

### 2.3 常量写法

- 常量写法：有语义值类型（Bool/Float/Long/Color/Vector3/String）填具体值如 `BeFloat.fromBeConst("1")`；空值占位类型（UI/Bytes/Canvas/Device/Mech/Player/ListN/Dict/Any/Icon/Struct）无参写作 `BeUI.fromBeConst()`。不要直接写 `8`、`true`、`"abc"`。
- 例外：内联 Canvas 会出现反引号包起来的 XML 文本。

### 2.4 返回值与分支

- 返回值固定指向一个标识符：不要在不同分支里 `return` 不同的变量/表达式。
- 也不要做"未赋值就使用"的分支写法（原版局部变量有状态，行为会变得不可预测）。

### 2.5 局部变量有状态的处理

原版局部变量跨调用保持状态，TS 视图中会出现 TS2454 警告。按以下规则处理：

**安全初始化**：纯计算用途的临时变量，不涉及 UI/Canvas，不需要跨调用保持值，可直接初始化：
```ts
var 临时计算: BeFloat = BeFloat.fromBeConst("0")
```

**禁止初始化**：
- UI 类型变量：随便初始化会创建多余的 UI 对象
- 需要跨调用保持值的变量：应提升为全局变量而不是初始化

### 2.6 尾部隐式返回

每个方法体末尾固定一个 `return` 语句，代表原版的隐式返回：

```ts
            return;
        });
```

- 这是原版隐式返回的体现，反向映射时固定剥离末尾 `return`。
- 有返回值时为 `return 变量名;`，无返回值时为 `return;`。
- 若正向映射产生双重 `return`（原脚本末尾已有手动 return），应移除冗余的那一个。

## 3. 禁止修改的部分

### 3.1 区段边界不要动

- `// [Globals] BEGIN/END`、`// [Script] BEGIN/END`、`// [Events] BEGIN/END` 这些边界必须保留。
- `static { }` 中的 `this.registerEvent_xxx(this, { ... })` 外层结构不要动，只允许在其内部增删事件脚本成员。
- 禁止新增/删除/重命名事件组本身。

### 3.2 "来源标记"不要乱改

每个脚本的 JSDoc 注释块里会带用于定位来源的信息（常见是 `name:`，以及 `guid:` 或 `sourcePath:` 之一）。
- 这些字段不是"重命名/换路径"的入口；改了很容易导致写回找不到目标，或者直接被拒绝。
- 实际上不需要改这里,而是只需要让其自动刷新

### 3.3 全局变量标记不要乱改

全局变量必须是 class 的 `private` 字段，上一行用 `@bsVar({ name: "原名" })` 标记原名：
```ts
        @bsVar({ name: "map_handler" })
        private map_handler: BeDevice = BeDevice.GlobalVarInitialize();
```
如需修改,应该二者同步修改,否则很可能被拒绝

## 4. 脚本声明格式

### 4.1 自定义脚本

自定义脚本使用属性赋值 + `BeScript`/`BeScriptAsync` 柯里化调用的形式：

```ts
        // [Script] BEGIN
        public 方法名 = BeScript({ name: "原名", color: [R, G, B], comment: "说明" })((参数: 类型, ...) => {
            // 方法体...
            return;
        });
        // [Script] END
```

- `BeScript({...})` 中的 `name` 是脚本原名（未转义），必须与 JSDoc 中的 `name:` 一致
- `color`、`comment`、`private`、`skip`、`debug` 等为可选元数据
- `retVar` 指定返回值变量名（BeScript 原名）
- `repo` 指定代码仓库 GUID（链接脚本时使用）
- 含 `delay` 调用的异步脚本使用 `BeScriptAsync` + `async` 箭头函数
- 私有脚本使用 `protected`，公开脚本使用 `public`

### 4.2 事件脚本

事件脚本位于 `static { }` 块中，按事件类型通过 `this.registerEvent_xxx` 注册：

```ts
      // [Events] BEGIN
      static {
        /**
        * event: clientUpdate
        * 客户端更新事件
        */
        this.registerEvent_clientUpdate(this, {
          /**
          * name: tick
          * sourcePath: 地图.map_/1/event_clientUpdate/tick.code
          */
          tick: BeScript({ name: "tick" })(function (this: Device_地图_1) {
            var x: BeFloat = G.time.deltaTime();
            return;
          })
        });
      }
      // [Events] END
```

- `function (this: DeviceName, 事件参数: 类型, ...)` 中的 `this` 是注入的设备类型声明，用于使方法体内 `this.xxx` 的泛型调用获得正确类型。**不要移除、不要改名、不要改类型**
- 事件参数必须与事件签名一致，禁止自造签名
- 事件脚本成员名是转义后的脚本名（无前缀）
- 空事件注册写为 `this.registerEvent_xxx(this, { });`
- 声明顺序即执行顺序

### 4.3 代码仓库链接

链接代码仓库的脚本在 `BeScript({...})` 中带 `repo` 字段（值为 GUID）：

```ts
        public X_工具_x27_得到上下文id = BeScript({ name: "工具'得到上下文id", repo: "b6e38169506d470e96aa8abf48076e36", color: [255, 255, 255], retVar: "value" })(() => {
            var value: BeLong
            value = G.map.getCustom<BeLong>(BeString.fromBeConst("context"));
            return value;
        });
```

- 链接脚本在零件视图中展开为完整可编辑代码，与普通脚本写法一致
- `repo` 字段的 GUID 必须能匹配到代码仓库中的脚本

## 5. 命名与转义

### 5.1 脚本原名

- 脚本的"唯一真名"来自 BeScript 源
- 在 TS 视图中，原名出现在 `BeScript({ name: "原名" })` 和 JSDoc 的 `name:` 中，二者必须一致
- `<原名>` 是**未转义**的名字，可以包含 `'`、中文等：
  - 不要把 `'` 手动写成 `_x27_`
  - 不要在原名里加前缀

### 5.2 TS 属性名（转义）

- TS 属性名只负责"在 TypeScript 里合法且可读"，不会改变脚本原名。
- 转义规则：按 `ToBaseIdentifier` 把不合法字符编码，例如把 `'` 变成 `_x27_`：

```text
Utils'MoveByCameraLocal -> X_Utils_x27_MoveByCameraLocal
Generic'PlayAnimation   -> X_Generic_x27_PlayAnimation
```

- 写回只依赖 `BeScript({ name })` 还原脚本，不依赖属性名本身
- 但 `patch_mech_view` 会用"脚本原名 + 转义规则"推导出期望的属性名，若不一致会直接拒绝写回
- 上述各类拒绝场景中，若文本匹配成功但校验失败，MCP 会自动保存 `.draft` 草稿文件到视图同目录。草稿不会干扰 `patch_mech_view` / `patch_mech_view_multiedit` 的正常使用。若要继续修改，用 `commit_draft` 重新提交；若放弃此次修改，直接忽略该草稿即可，不要主动清理

## 6. 注释与禁用行

**重要区分**：零件视图中的普通注释直接使用 `//`，代码语句使用受限 TS 视图语法。

- 零件视图中的用户注释用 `//注释内容`
  - 不要出现 `@3@3...`
  - 例：原版 `//@3@3@3@3@3` 在 TS 视图中显示为 `//=====`
- CodeRepo 的原始命令行用 `//|<原版命令行>`
  - 仅限 CodeRepo，零件视图不适用
  - `//|` 后直接跟原版整行文本，不补空格，不裁空格
  - 这不是 TS 语句，只用于展示原版命令行文本
- 禁用行用 `/* <一行可解析的 TS 语句> */`
  - 一行只写一条 TS 语句
  - 写回时会自动转换为原版格式

示例，禁用行写法。来源为内置测试工程 TS 视图节选：
```ts
            while (G.float.lt(列表编号_横, 循环次数_横)) {
                布尔_碰撞开关 = G.readExcel2<BeBool>(对象层序号_整数, 列名, BeString.fromBeConst("碰撞层级设置"));
                G.layer.enableCollide(列表编号_纵, 列表编号_横, 布尔_碰撞开关);
                /* const a: BeString = G.string.add(列表编号_纵, BeString.fromBeConst("和"), 列表编号_横, 布尔_碰撞开关) */
                /* G.debug.print(a, BeColor.fromBeConst("255,255,255,255"), BeBool.fromBeConst("0")) */
                列表编号_横 = G.float.add(列表编号_横, BeFloat.fromBeConst("1"));
            }
```

## 其他相关内容应查找对应文档

- 单位/投射物复用、对象池与碰撞层规则：见 `../tips/projectile-collision-detector.md`
- 机械生成器与注入机制：见 `../tips/mech-reuse-guide.md`
- UI/Canvas 运行时规则与组件管理：见 `canvas-component-guide.md`
- UI 动画机制：见 `../tips/canvas-animation-mechanism.md`

## 相关文档

- `view-directory-structure.md`
- `canvas-component-guide.md`
- `../tips/projectile-collision-detector.md`
- `../tips/mech-reuse-guide.md`

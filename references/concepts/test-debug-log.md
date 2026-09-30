# 测试、调试与日志

## 本篇范围

- BeScript/TS 视图可用的调试方式与常见流程
- 日志输出与调试开关的组织方式

## 核心认知

- 游戏逻辑侧通常以“可复现的手测”为主：先做一个最小复现，再用日志/提示把路径和关键变量打出来。
- TS 视图的“代码”本质上是对 BeScript 的可读映射；调试手段也应按 BeScript 的能力来设计（而不是按纯 TypeScript 运行时去想象）。
- 模板惯例通常是：启动时按住 `G` 进入测试模式；也常见用“特定用户 ID / 白名单”直接打开测试分支。
- 不同工程会在这个惯例上做细微调整（例如换按键、改成规则表/变量/UI 入口）；但默认先按“启动按住 `G` / 用户 ID 开关”的思路去找入口，效率最高。

## 常用调试输出：`G.debug.print`

最常用的是在关键分支打印变量/文本。下面片段来自真实 TS 视图（示例展示：读表找不到行时，拼接字符串并输出高亮颜色）：

```ts
ID = G.findExcel2<"BeString">(BeString.fromBeConst("name"), n, BeString.fromBeConst("规则"))
if (G.long.lt(ID, BeLong.fromBeConst("0"))) {
  文字 = G.create.string(BeString.fromBeConst("表格中找不到"))
  文字 = G.string.translate(文字)
  s = G.string.Format2(BeString.fromBeConst("%1 %2"), 文字, n)
  G.debug.print(s, BeColor.fromBeConst("255,50,50,205"), BeBool.fromBeConst("0"))
}
```

## 方法调用/变量跟踪：`G.debug.enable*`

需要“看执行路径”或“盯某个对象的变量变化”时，优先用统一的 debug 开关，而不是到处堆 `print`。

下面片段来自真实 TS 视图（示例把常见开关集中放到 `event_clientStart` 里，便于一键开关）：

```ts
G.debug.enable(BeBool.fromBeConst("1"))
G.debug.enableNetLog(BeBool.fromBeConst("1"))
G.debug.enableUIMemLog(BeBool.fromBeConst("1"))
G.debug.focusUILog(BeUI.fromBeConst())
G.debug.enableMethodCallLog(BeString.fromBeConst(""))
G.debug.methodProfile()
G.debug.finishMethodProfile()
G.debug.enablePlayerVarLog(BePlayer.fromBeConst(), BeString.fromBeConst(""))
G.debug.enableMechVarLog(BeMech.fromBeConst(), BeString.fromBeConst(""))
G.debug.enableStructLog(BeStruct.fromBeConst(), BeString.fromBeConst(""))
G.debug.setColor(BeColor.fromBeConst("0,0,0,255"))
G.debug.clear()
G.debug.pause(BeBool.fromBeConst("1"))
G.debug.maxRunTime(BeFloat.fromBeConst("0"))
G.debug.errorStop(BeBool.fromBeConst("1"))
G.debug.enableAStarDebug(BeBool.fromBeConst("1"))
G.debug.enableMapCullingDebug(BeBool.fromBeConst("1"))
```

## 用按键触发调试输出（示例）

为了避免“每帧刷屏”，常见做法是：按一下键才输出一次关键信息。下面片段来自真实 TS 视图（示例：按键抬起时弹提示并打印摄像机信息）：

```ts
if (G.keyboard.keyUp2(BeEnum.fromBeConst("6"))) {
  输出 = G.string.add(BeString.fromBeConst("摄像机角度"), this.CameraAngle, BeString.fromBeConst("摄像机距离"), this.CameraDistance)
  G.string.popNotify(输出, BeFloat.fromBeConst("3"))
  G.debug.print(this.CameraAngle, BeColor.fromBeConst("255,255,255,255"), BeBool.fromBeConst("0"))
  G.debug.print(this.CameraDistance, BeColor.fromBeConst("255,255,255,255"), BeBool.fromBeConst("0"))
}
```

## 关于“异常处理”和“防御代码”

- BeScript 没有 `try/catch` 这类异常捕获；TS 视图也不应写这类结构（写了也没有对应的落地能力）。
- 不要用大量“看似安全”的无意义检查把真实错误掩盖掉：调试阶段更需要让错误尽快暴露，再配合 `G.debug.*` 把问题定位到具体分支/具体变量。
- 但对“明确可能出错”的点（例如读表失败、规则缺失、关键引用为空）允许做少量提示日志，帮助快速定位配置问题；示例见上面的“表格中找不到”。

## 推荐调试流程（最小闭环）

1. 先做一个最小复现（能稳定触发）。
2. 在入口处集中开 debug 开关（方法调用/变量跟踪/错误停止等）。
3. 在关键分支加少量 `G.debug.print`，必要时改成“按键触发输出”避免刷屏。
4. 修复后关掉/收敛调试输出，再验一遍复现路径。

## 相关文档

- `tsview-writing-spec.md`
- `../tips/table-based-attribute.md`
- `../tips/performance-optimization.md`

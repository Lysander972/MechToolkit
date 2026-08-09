# 调试输出示例

摘录自示例工程的 TS 视图片段，用于对照"调试输出与开关"的写法。

## 基本调试输出

```ts
ID = G.findExcel2<"BeString">(BeString.fromBeConst("name"), n, BeString.fromBeConst("规则"))
if (G.long.lt(ID, BeLong.fromBeConst("0"))) {
  文字 = G.create.string(BeString.fromBeConst("表格中找不到"))
  文字 = G.string.translate(文字)
  s = G.string.Format2(BeString.fromBeConst("%1 %2"), 文字, n)
  G.debug.print(s, BeColor.fromBeConst("255,50,50,205"), BeBool.fromBeConst("0"))
}
```

## 调试开关集中管理

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

## 按键触发调试输出

```ts
if (G.keyboard.keyUp2(BeEnum.fromBeConst("6"))) {
  输出 = G.string.add(BeString.fromBeConst("摄像机角度"), this.CameraAngle, BeString.fromBeConst("摄像机距离"), this.CameraDistance)
  G.string.popNotify(输出, BeFloat.fromBeConst("3"))
  G.debug.print(this.CameraAngle, BeColor.fromBeConst("255,255,255,255"), BeBool.fromBeConst("0"))
  G.debug.print(this.CameraDistance, BeColor.fromBeConst("255,255,255,255"), BeBool.fromBeConst("0"))
}
```

要点：
- 调试开关建议集中放在 `event_clientStart` 里
- 按键触发输出避免每帧刷屏
- 错误信息用红色高亮

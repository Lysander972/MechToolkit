# UI动画时间推进

摘录自示例工程的 TS 视图片段，用于对照"按时间推进 + 渐变 + 结束删除"的写法。

```ts
/**
  * name: Generic'PlayVideo
  * sourcePath: 机械/玩家入场.mech_/312/scripts/Generic'PlayVideo.code
  */
public X_Generic_x27_PlayVideo = BeScriptAsync({ name: "Generic'PlayVideo", retVar: "ret" })((name1: BeString, UI: BeUIRawImage) => {
  var ret: BeBool
  var 当前颜色: BeColor
  var 视频信息: BeStruct
  var duration: BeFloat
  var timeStart: BeFloat
  var X_continue: BeBool
  var time: BeFloat
  var timeUsed: BeFloat
  var 按住按键: BeBool
  ret = G.create.bool(BeBool.fromBeConst("0"))
  if (Act.self<Device_玩家入场_312>(this).callClientMapRet<"BeBool">(BeString.fromBeConst("弹幕.IsInGame"))) {
    当前颜色 = G.create.color(BeColor.fromBeConst("255,255,255,0"))
    视频信息 = UI.setVideo(name1)
    duration = 视频信息.get<"BeFloat">(BeString.fromBeConst("time"), BeBool.fromBeConst("0"))
    timeStart = G.time.time()
    X_continue = G.create.bool(BeBool.fromBeConst("1"))
    while (G.create.bool(X_continue)) {
      time = G.time.time()
      timeUsed = G.float.minus(time, timeStart)
      按住按键 = G.keyboard.keyHeld2(BeEnum.fromBeConst("6"))
      if (G.create.bool(按住按键)) {
        当前颜色 = 当前颜色.lerp(BeColor.fromBeConst("255,255,255,0"), BeFloat.fromBeConst("0.1"))
      }
      if (G.bool.not(按住按键)) {
        当前颜色 = 当前颜色.lerp(BeColor.fromBeConst("255,255,255,255"), BeFloat.fromBeConst("0.1"))
      }
      UI.setColor(当前颜色)
      X_continue = G.float.lt(timeUsed, duration)
      await G.delay(G.create.float(BeFloat.fromBeConst("0")))
    }
    await G.delay(G.create.float(BeFloat.fromBeConst("0")))
  }
  UI.del(BeFloat.fromBeConst("0"))
  return ret
});
```

要点：
- 含 `G.delay` 的脚本使用 `BeScriptAsync`
- 用 `G.time.time()` 获取当前时间推进进度
- 用 `lerp` 做颜色渐变
- 循环末尾 `del` 收尾并结束
- `G.delay(...)` 用于让出执行

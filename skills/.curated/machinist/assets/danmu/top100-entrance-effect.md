# 百强入场动图特效

摘录自示例工程的 TS 视图片段，用于对照"玩家入场时按世界排名触发入场动图，并绑定头像与动图图标维护"的写法。

## 玩家入场判断

```ts
/**
  * name: UI_局内'事件_玩家加入
  * sourcePath: map.map_/54/scripts/UI_局内'事件_玩家加入.code
  */
public X_UI_局内_x27_事件_玩家加入 = BeScript({ name: "UI_局内'事件_玩家加入", color: [255, 255, 255], comment: "此处玩家结构已经确保是已下场", retVar: "ok" })((玩家: BeStruct, 队伍: BeStruct) => {
  var ok: BeBool
  var 世界榜周榜: BeLong
  var 动态模拟排行: BeFloat
  var 动态模拟排行开关: BeFloat
  var 未上榜: BeBool
  var 百名以外: BeBool
  var M: BeMech
  var core: BeDevice
  ok = G.create.bool(BeBool.fromBeConst("1"));
  Act.self<Device_弹幕_54>(this).X_UI_局内风格接口封装_x27_玩家互动事件(玩家, 队伍, 队伍, BeLong.fromBeConst("1"), BeDict.fromBeConst(), BeLong.fromBeConst("0"));
  //读取排行
  世界榜周榜 = Act.self<Device_弹幕_54>(this).X_玩家结构_x27_读取_globalRank(玩家);
  //仅百强需要播放入场动画
  未上榜 = G.long.lt(世界榜周榜, BeLong.fromBeConst("0"));
  百名以外 = G.long.gte(世界榜周榜, BeLong.fromBeConst("100"));
  if (G.bool.or(未上榜, 百名以外)) {
    Act.self<Device_弹幕_54>(this).X_播报_检查或新建_x27_非百强玩家加入(玩家);
    return ok;
  }
  //百强动画通过一个马甲完成,不占用主循环
  M = G.createAIMech(BeString.fromBeConst("玩家入场"), BeFloat.fromBeConst("99"), BeVector3.fromBeConst("0,-100,0"), BeVector3.fromBeConst("0,0,1"), BeEnum.fromBeConst<CreateMechPositionAlignment>(CreateMechPositionAlignment.Core), BeBool.fromBeConst("0"));
  core = M.getCoreDevice();
  core.callFun(BeString.fromBeConst("设置排名"), 世界榜周榜, 玩家, 队伍);
  return ok;
});
```

## 入场动图播放

```ts
/**
  * name: 入场动图
  * sourcePath: map.map_/312/scripts/入场动图.code
  */
public 入场动图 = BeScript({ name: "入场动图", retVar: "ok" })((rank: BeLong) => {
  var ok: BeBool
  var VER: BeString
  var 切换: BeBool
  var 动图布局: BeCanvas
  var 局内通用组件: BeCanvas
  var 父UI节点: BeUIRect
  var 动图: BeUIRawImage
  var b1: BeBool
  var b2: BeBool
  G.ui.X_2dmode(BeBool.fromBeConst("1"), undefined);
  动图布局 = G.create.canvas(BeCanvas.fromBase64Const(`
    <BeCanvas name="" width="1080" height="2160">
      <BeUIRawImage name="动图" pos="0,0,0" parentanchor="MIDDLE_CENTER" anchor="MIDDLE_CENTER" widthextend="PERCENT" heightextend="PERCENT" size="1,1,1" color="rgba(255,255,255,255)"></BeUIRawImage>
    </BeCanvas>

  `));
  局内通用组件 = G.findCanvas(BeString.fromBeConst("局内通用组件_2D"));
  父UI节点 = 局内通用组件.read<BeUIRect>(BeString.fromBeConst("根节点_2D/百强全屏特效图层"));
  动图 = 动图布局.read<BeUIRawImage>(BeString.fromBeConst("动图"));
  父UI节点.addSon(动图);
  //1
  if (G.long.equal(rank, BeLong.fromBeConst("0"))) {
    Act.self<Device_玩家入场_312_VirtualCore>(this).X_Generic_x27_PlayVideo(BeString.fromBeConst("02-185-.mp4"), 动图);
  }
  //2~3
  b1 = G.long.gt(rank, BeLong.fromBeConst("0"));
  b2 = G.long.lte(rank, BeLong.fromBeConst("2"));
  if (G.bool.and(b1, b2)) {
    Act.self<Device_玩家入场_312_VirtualCore>(this).X_Generic_x27_PlayVideo(BeString.fromBeConst("02-242-.mp4"), 动图);
  }
  // ... 其他排名段
  动图.del(BeFloat.fromBeConst("0"));
  return ok;
});
```

## 视频播放

```ts
/**
  * name: Generic'PlayVideo
  * sourcePath: map.map_/312/scripts/Generic'PlayVideo.code
  */
public X_Generic_x27_PlayVideo = BeScript({ name: "Generic'PlayVideo", retVar: "ret" })((name1: BeString, UI: BeUIRawImage) => {
  var ret: BeBool
  var 当前颜色: BeColor
  var 视频信息: BeStruct
  var duration: BeFloat
  var timeStart: BeFloat
  var X_continue: BeBool
  var time: BeFloat
  var timeUsed: BeFloat
  var 按住按键: BeBool
  ret = G.create.bool(BeBool.fromBeConst("0"));
  当前颜色 = G.create.color(BeColor.fromBeConst("255,255,255,0"));
  视频信息 = UI.setVideo(name1, undefined);
  duration = 视频信息.get<BeFloat>(BeString.fromBeConst("time"), BeBool.fromBeConst("0"));
  timeStart = G.time.time();
  X_continue = G.create.bool(BeBool.fromBeConst("1"));
  while (G.create.bool(X_continue)) {
    time = G.time.time();
    timeUsed = G.float.minus(time, timeStart);
    按住按键 = G.keyboard.keyHeld2(BeEnum.fromBeConst<KeyCode>(KeyCode.Space));
    if (G.create.bool(按住按键)) {
      当前颜色 = 当前颜色.lerp(BeColor.fromBeConst("255,255,255,0"), BeFloat.fromBeConst("0.1"));
    }
    if (G.bool.not(按住按键)) {
      当前颜色 = 当前颜色.lerp(BeColor.fromBeConst("255,255,255,255"), BeFloat.fromBeConst("0.1"));
    }
    UI.setColor(当前颜色);
    X_continue = G.float.lt(timeUsed, duration);
    await G.delay(G.create.float(BeFloat.fromBeConst("0")));
  }
  await G.delay(G.create.float(BeFloat.fromBeConst("0")));
  UI.del(BeFloat.fromBeConst("0"));
  return ret;
});
```

要点：
- 脚本声明使用 `BeScript({ name: "...", color: [...] })` 赋值格式
- 根据排名判断是否触发入场特效
- `G.createAIMech` 创建临时机械用于播放入场动画
- `UI.setVideo(name, undefined)` 播放视频
- 动图播放完成后删除 UI 元素

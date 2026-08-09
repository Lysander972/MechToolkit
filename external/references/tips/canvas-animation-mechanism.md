# UI 动画实现（运行时）

平台没有“自动补间”的动画系统。UI 动画通常靠脚本在循环里逐帧（或按固定间隔）修改 UI 实例属性来实现。

## 本篇范围

- UI 动画的驱动方式、状态保存与收尾
- 常见插值/缓动的写法与注意点

## 不包含

- UI 组件引用与运行时规则（见"canvas-component-guide"）
- 图片/动图素材制作与帧序列（见"image-animation-guide"）

## 触发与驱动方式

- 事件驱动：把动画更新逻辑写在 `update` / `mechUpdate` 等事件中，每帧执行一次。
- 循环驱动：用 `loopFun(函数名, 间隔秒)` 把某个函数挂到循环里；间隔为 `0` 时可视作每帧调用。

动画结束时需要主动停止：要么解除循环（如 `DisableFun(...)`），要么在函数末尾 `script.skip()` 退出。

## 常见“可动画”的属性（示例中出现过）

- `pos(Vector3 ...)`：位置
- `rot(Float ...)`：2D 旋转（Z 轴）
- `rot3D(Vector3 ...)`：3D 旋转
- `scale(Float ...)`：缩放
- `setColor(Color ...)`：颜色/透明度（通常通过 `Color.setA(...)` 或 `Color.lerp(...)` 做淡入淡出）
- `active(Bool ...)`：显示/隐藏（严格说不是补间，但经常配合动效一起用）

## 基本思路（最小闭环）

1. 存状态：起始时间 / 当前进度 / 起点终点 / 目标 UI 引用等。
2. 每帧（或固定间隔）计算进度 `t`（0~1），并做 `clamp`。
3. 把 `t` 送进插值或缓动，再写回 UI 属性。
4. 收尾：到达终点时删除 UI / 还原属性 / 停止循环 / 清理状态。

## 动画状态放哪里

常见几种放法，按“最少污染”为先：

- **全局变量/零件变量**：适合单个 UI 或少量状态。
- **UI 节点自定义数据**：适合“每个实例各一套状态”（例如每个点赞图标都有自己的 `start` / `color`）。
  - `setCustomFloat("start", ...)` / `customFloat("start")`
  - `setCustomColor("color", ...)` / `customColor("color")`
  - `customList("likes")`：用 UI 节点挂一个列表，统一管理它的子元素

## 示例：按时间推进 + 渐变 + 结束删除
示例片段（展示“按时间推进 + 渐变 + 结束删除”的写法）：

```ts
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

要点：用 `time.time()` 推进进度；用 `lerp` 做渐变；循环末尾 `del` 收尾并结束。

## 示例：翻转缓动（SmoothStep）+ 动画结束退出
示例片段（展示 `SmoothStep` + `clamp` + 结束退出）：

```ts
public X_UI_Tip_x27_Animation = BeScript({ name: "UI_Tip'Animation" })(() => {
  var 当前时间: BeFloat
  var 已用时间: BeFloat
  var 比例: BeFloat
  var 插值: BeFloat
  var 转动: BeVector3
  当前时间 = G.time.time();
  已用时间 = G.float.minus(当前时间, this.X_Tip_x27_AniStart);
  比例 = G.float.division(已用时间, BeFloat.fromBeConst("0.5"));
  比例 = G.float.clamp(比例, BeFloat.fromBeConst("0"), BeFloat.fromBeConst("1"));
  插值 = G.float.SmoothStep(BeFloat.fromBeConst("-180"), BeFloat.fromBeConst("0"), 比例);
  if (G.float.lt(比例, BeFloat.fromBeConst("0.5"))) {
    插值 = G.float.add(插值, BeFloat.fromBeConst("180"));
  }
  转动 = G.creatVariable.Vector3(BeFloat.fromBeConst("0"), 插值, BeFloat.fromBeConst("0"));
  this.X_Tip_x27_MainPanel.rot3D(转动);
  if (G.float.gte(比例, BeFloat.fromBeConst("1"))) {
    this.X_Tip_x27_AniActivate = G.create.bool(BeBool.fromBeConst("0"));
    G.script.skip();
  }
  return;
});
```

要点：`clamp` 先把进度锁在 0~1；`SmoothStep` 负责非线性；结束后 `script.skip()` 防止“无限挂循环”。

## 示例：三角函数做“抖动/呼吸”旋转与缩放
示例片段（展示“sin 映射到 0~1，再 lerp 到区间”的写法）：

```ts
temp1 = G.float.multiply(delta, BeFloat.fromBeConst("360"))
temp1 = G.float.triangle.sin(temp1)
temp2 = G.float.multiply(delta, BeFloat.fromBeConst("35"))
temp2 = G.float.triangle.sin(temp2)
temp2 = G.float.pow(temp2, BeFloat.fromBeConst("5"))
temp1 = G.float.multiply(temp1, temp2)
temp1 = G.float.add(temp1, BeFloat.fromBeConst("1"))
temp1 = G.float.division(temp1, BeFloat.fromBeConst("2"))
temp1 = G.float.lerp(BeFloat.fromBeConst("-5"), BeFloat.fromBeConst("5"), temp1)
结算提示框.rot(temp1)

temp1 = G.float.multiply(delta, BeFloat.fromBeConst("360"))
temp1 = G.float.triangle.sin(temp1)
temp1 = G.float.add(temp1, BeFloat.fromBeConst("1"))
temp1 = G.float.division(temp1, BeFloat.fromBeConst("2"))
temp1 = G.float.lerp(BeFloat.fromBeConst("1.25"), BeFloat.fromBeConst("1.33"), temp1)
结算提示框.scale(temp1)
```

## 注意事项

- 动画只影响运行时 UI 实例，不修改布局文件本体。
- 多个动画同时跑时，优先“集中管理状态 + 统一循环更新”，别到处散落。
- 频繁改 UI 属性会吃性能：能用间隔更新就用间隔（例如 `loopFun(..., 0.25)`）。
- 动画结束要清理：停循环、删节点、移出 List/Dict、自定义数据归零等。

## 相关文档

- `../concepts/canvas-component-guide.md`
- `image-animation-guide.md`
- `performance-optimization.md`


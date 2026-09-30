# UI缓动与抖动

摘录自示例工程的 TS 视图片段，用于对照"SmoothStep 缓动"和"三角函数抖动"的写法。

## SmoothStep 缓动 + 动画结束退出

```ts
/**
  * name: UI_Tip'Animation
  * sourcePath: map.map_/54/scripts/UI_Tip'Animation.code
  */
public X_UI_Tip_x27_Animation = BeScript({ name: "UI_Tip'Animation" })(() => {
  var 当前时间: BeFloat
  var 已用时间: BeFloat
  var 比例: BeFloat
  var 插值: BeFloat
  var 转动: BeVector3
  当前时间 = G.time.time()
  已用时间 = G.float.minus(当前时间, this.X_Tip_x27_AniStart)
  比例 = G.float.division(已用时间, BeFloat.fromBeConst("0.5"))
  比例 = G.float.clamp(比例, BeFloat.fromBeConst("0"), BeFloat.fromBeConst("1"))
  插值 = G.float.SmoothStep(BeFloat.fromBeConst("-180"), BeFloat.fromBeConst("0"), 比例)
  if (G.float.lt(比例, BeFloat.fromBeConst("0.5"))) {
    插值 = G.float.add(插值, BeFloat.fromBeConst("180"))
  }
  转动 = G.creatVariable.Vector3(BeFloat.fromBeConst("0"), 插值, BeFloat.fromBeConst("0"))
  this.X_Tip_x27_MainPanel.rot3D(转动)
  if (G.float.gte(比例, BeFloat.fromBeConst("1"))) {
    this.X_Tip_x27_AniActivate = G.create.bool(BeBool.fromBeConst("0"))
    G.script.skip()
  }
  return
});
```

## 三角函数做抖动/呼吸效果

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

要点：
- `clamp` 把进度锁在 0~1
- `SmoothStep` 负责非线性缓动
- 结束后 `script.skip()` 防止无限循环
- sin 映射到 0~1 再 lerp 到目标区间

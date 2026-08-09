# 下载弹幕数据和上传数据

摘录自示例工程的 TS 视图片段，用于对照"存档上传节流、配置下载与应用"的写法。

```ts
/**
  * name: 存档'上传
  * sourcePath: map.map_/54/scripts/存档'上传.code
  */
public X_存档_x27_上传 = BeScript({ name: "存档'上传" })((强制: BeBool) => {
  var 当前时间: BeFloat
  var 时间间隔: BeFloat
  var 可上传: BeBool
  var 满足强制间隔: BeBool
  当前时间 = G.time.time()
  时间间隔 = G.float.minus(当前时间, this.X_存档_x27_上次上传)
  可上传 = G.float.gte(时间间隔, BeFloat.fromBeConst("100"))
  满足强制间隔 = G.float.gte(时间间隔, BeFloat.fromBeConst("1"))
  if (G.bool.or(可上传, 强制)) {
    if (G.create.bool(满足强制间隔)) {
      this.X_存档_x27_上次上传 = G.time.time()
      G.map.save()
    }
    if (G.bool.not(满足强制间隔)) {
      G.delay(G.create.float(BeFloat.fromBeConst("2")))
      this.X_存档_x27_上次上传 = G.time.time()
      G.map.save()
    }
  }
  return
});

/**
  * name: 功能设置持久化'下载攻略提示并应用
  * sourcePath: map.map_/54/scripts/功能设置持久化'下载攻略提示并应用.code
  */
public X_功能设置持久化_x27_下载攻略提示并应用 = BeScript({ name: "功能设置持久化'下载攻略提示并应用" })(() => {
  var data: BeDict
  this.X_功能开关_x27_攻略提示 = G.create.bool(BeBool.fromBeConst("1"))
  data = G.map.load()
  if (data.contains(BeString.fromBeConst("攻略提示存档标志位"))) {
    this.X_功能开关_x27_攻略提示 = data.read<"BeBool">(BeString.fromBeConst("攻略提示存档标志位"), BeBool.fromBeConst("0"))
  }
  Act.self<Device_弹幕_54>(this).X_UI_功能面板_x27_应用并刷新攻略提示显示()
  return
});

/**
  * name: 功能设置持久化'上传攻略提示
  * sourcePath: map.map_/54/scripts/功能设置持久化'上传攻略提示.code
  */
public X_功能设置持久化_x27_上传攻略提示 = BeScript({ name: "功能设置持久化'上传攻略提示" })(() => {
  var data: BeDict
  data = G.map.load()
  data.insert(BeString.fromBeConst("攻略提示存档标志位"), this.X_功能开关_x27_攻略提示)
  Act.self<Device_弹幕_54>(this).X_存档_x27_上传(BeBool.fromBeConst("1"))
  return
});
```

要点：
- 脚本声明使用 `BeScript({ name: "..." })` 赋值格式
- `G.map.save()` 上传存档
- `G.map.load()` 下载存档
- 上传节流：检查时间间隔避免频繁上传

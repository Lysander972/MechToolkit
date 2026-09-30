# 机械绑定与投射物

摘录自水果切切切工程 map.map_/331 的 TS 视图片段，用于对照"投射物放置时携带玩家结构"的写法。

```ts
/**
  * name: Launcher'指定坐标放置
  * sourcePath: map.map_/331/scripts/Launcher'指定坐标放置.code
  */
public X_Launcher_x27_指定坐标放置 = BeScript({ name: "Launcher'指定坐标放置", comment: "发射飞刀用", retVar: "ret" })((position: BeVector3, direction: BeVector3, type: BeLong, player: BeStruct, HPMul: BeFloat, crit: BeFloat, initHp: BeFloat, useManualSpeed: BeBool, manualSpeed: BeFloat) => {
  var ret: BeBool
  ret = Act.self<Device_基地_331_VirtualCore>(this).X_Launcher_x27_AbstractSetBullet(position, direction, type, this.X_Attr_x27_Faction, player, HPMul, crit, initHp, useManualSpeed, manualSpeed);
  return ret;
});

/**
  * name: Launcher'AbstractSetBullet
  * guid: bcd55d0251534fe1a88f90d4bf771183
  */
public X_Launcher_x27_AbstractSetBullet = BeScript({ name: "Launcher'AbstractSetBullet", repo: "bcd55d0251534fe1a88f90d4bf771183", color: [255, 0, 0], comment: "放置子弹的抽象接口", retVar: "ret" })((position: BeVector3, direction: BeVector3, type: BeLong, faction: BeLong, player: BeStruct, HPMul: BeFloat, crit: BeFloat, initHp: BeFloat, useManualSpeed: BeBool, manualSpeed: BeFloat) => {
  var ret: BeBool
  position = G.vector3.add(position, this.BulletOffset);
  if (G.bool.not(useManualSpeed)) {
    manualSpeed = G.create.float(BeFloat.fromBeConst("-1"));
  }
  ret = this.map_handler.callReturn<BeBool>(BeString.fromBeConst("Bullet'SetBullet"), position, direction, type, faction, player, HPMul, crit, initHp, manualSpeed);
  return ret;
});

/**
  * name: Public'AddBullet
  * sourcePath: map.map_/331/scripts/Public'AddBullet.code
  */
public X_Public_x27_AddBullet = BeScript({ name: "Public'AddBullet", comment: "注入各种子弹" })((key: BeString, amount: BeLong, player: BeStruct) => {
  var 当前时间: BeFloat
  Act.self<Device_基地_331_VirtualCore>(this).X_Skills_x27_Increase(key, amount, player);
  if (G.string.equal(key, BeString.fromBeConst("2000"))) {
    Act.self<Device_基地_331_VirtualCore>(this).X_UI_x27_守方刷新弹药数();
  }
  if (G.string.equal(key, BeString.fromBeConst("1000"))) {
    Act.self<Device_基地_331_VirtualCore>(this).X_UI_x27_攻方刷新弹药数();
  }
  /* 当前时间 = G.time.scaleTime(); */
  /* this.自动暖场时间 = G.float.add(当前时间, BeFloat.fromBeConst("5")); */
  return;
});
```

要点：
- 属性赋值格式 `public 方法名 = BeScript({ name: "...", retVar: "..." })((params) => { body });`
- 投射物放置时携带 `player: BeStruct` 参数
- 通过 `map_handler.callReturn` 调用地图脚本
- 代码仓库脚本通过 `repo: "guid"` 标记

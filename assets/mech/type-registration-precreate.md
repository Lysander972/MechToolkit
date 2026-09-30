# 类型注册与预创建

摘录自示例工程的 TS 视图片段，用于对照"注册同时预创建"的写法。

```ts
<!-- Model'RegisterType 在当前测试工程视图中不存在，以下代码来自其他工程版本，仅供参考 -->
/**
  * name: Model'RegisterType
  * sourcePath: map.map_/329/scripts/Model'RegisterType.code
  */
public X_Model_x27_RegisterType = BeScript({ name: "Model'RegisterType", color: [104, 0, 255], comment: "注册类型" })((modelKey: BeString, amount: BeLong) => {
  var bullet: BeList
  var bulletUnused: BeList
  var exist: BeBool
  var created: BeLong
  var model: BeMech
  var core: BeDevice
  bullet = G.create.listN();
  bulletUnused = G.create.listN();
  exist = this.X_Model_x27_All.contains(modelKey);
  if (G.bool.not(exist)) {
    this.X_Model_x27_All.set(modelKey, bullet);
    this.X_Model_x27_Unused.set(modelKey, bulletUnused);
  }
  created = G.create.long(BeLong.fromBeConst("0"));
  while (G.long.lt(created, amount)) {
    model = Act.self<Device_Scenario_329>(this).X_Model_x27_SetModel(BeVector3.fromBeConst("0,-1e+06,0"), BeVector3.fromBeConst("1,0,0"), modelKey);
    core = model.getCoreDevice();
    core.callFun(BeString.fromBeConst("Public'AutoReclaim"), modelKey);
    created.addEqual(BeLong.fromBeConst("1"));
  }
  return;
});

/**
  * name: Wall'New
  * sourcePath: map.map_/329/scripts/Wall'New.code
  */
protected X_Wall_x27_New = BeScript({ name: "Wall'New", color: [8, 0, 255], private: true, retVar: "$obj" })(($pos: BeVector3, $direction: BeVector3) => {
  var $obj: BeMech
  $obj = G.createAIMech(BeString.fromBeConst("边界"), BeFloat.fromBeConst("0"), $pos, $direction, BeEnum.fromBeConst<CreateMechPositionAlignment>(CreateMechPositionAlignment.Core), BeBool.fromBeConst("0"));
  Act.self<Device_Scenario_329>(this).X_Generic_x27_MechPhysics($obj, BeBool.fromBeConst("1"), BeFloat.fromBeConst("1"));
  this.WallUsing.add($obj);
  return $obj;
});

/**
  * name: Wall'SetWall
  * sourcePath: map.map_/329/scripts/Wall'SetWall.code
  */
public X_Wall_x27_SetWall = BeScript({ name: "Wall'SetWall", color: [8, 0, 255], retVar: "$obj" })(($pos: BeVector3, $direction: BeVector3) => {
  var $obj: BeMech
  var $index: BeFloat
  var $exist: BeBool
  $index = this.WallUnused.count();
  $exist = G.float.gt($index, BeFloat.fromBeConst("0"));
  if (G.create.bool($exist)) {
    $index.minusEqual(BeFloat.fromBeConst("1"));
    $obj = this.WallUnused.read<BeMech>($index);
    $obj.setActive(BeBool.fromBeConst("1"));
    $obj.move($pos, BeEnum.fromBeConst<MechPositionAlignment>(MechPositionAlignment.Core));
    $obj.rot($direction, BeVector3.fromBeConst("0,1,0"));
    this.WallUnused.remove($index);
    this.WallUsing.add($obj);
  }
  if (G.bool.not($exist)) {
    $obj = Act.self<Device_Scenario_329>(this).X_Wall_x27_New($pos, $direction);
  }
  return $obj;
});
```

生成位姿注意：

- `G.createAIMech(..., $pos, $direction, ...)` 已经是新建机械的初始位姿设置
- 新建分支不要在返回前再补一次移动/旋转(很可能被系统底层静默吞掉导致难以排查)
- 上面复用分支处理的是已存在对象，不等同于刚创建的新机械

要点：
- 使用 `BeScript({ name: "...", color: [...], comment: "..." })` 赋值格式
- 注册时创建两个列表：All 和 Unused
- 预创建时循环调用 SetModel 并立即回收

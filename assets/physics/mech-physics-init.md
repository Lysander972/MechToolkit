# 机械物理效果初始化

摘录自示例工程的 TS 视图片段，用于对照"机械/投射物物理参数初始化与通用入口"的写法。

```ts
/**
  * name: Generic'MechPhysics
  * sourcePath: map.map_/329/scripts/Generic'MechPhysics.code
  */
public X_Generic_x27_MechPhysics = BeScript({ name: "Generic'MechPhysics", color: [8, 0, 255] })(($obj: BeMech, $closePhysics: BeBool, 弹性: BeFloat) => {
  if (G.create.bool($closePhysics)) {
    $obj.enablePhysics(BeBool.fromBeConst("0"));
  }
  $obj.setPhysicsMaterial(弹性, BeFloat.fromBeConst("0"), BeFloat.fromBeConst("0"));
  $obj.setDrag(BeFloat.fromBeConst("0"));
  $obj.setAngularDrag(BeFloat.fromBeConst("1"));
  return;
});

/**
  * name: Generic'BulletInitialize
  * sourcePath: map.map_/329/scripts/Generic'BulletInitialize.code
  */
public X_Generic_x27_BulletInitialize = BeScript({ name: "Generic'BulletInitialize", color: [8, 0, 255], comment: "通用子弹初始化接口再封装" })(($obj: BeMech, $pos: BeVector3, $direction: BeVector3, $type: BeLong, $faction: BeLong, $height: BeFloat, $player: BeStruct) => {
  $obj.callFun(BeString.fromBeConst("Public'Initialize"), $pos, $direction, $type, $faction, $height, $player, this.ScenarioOffset);
  return;
});

/**
  * name: Bullet'New
  * sourcePath: map.map_/329/scripts/Bullet'New.code
  */
protected X_Bullet_x27_New = BeScript({ name: "Bullet'New", color: [0, 138, 255], private: true, comment: "创建一个普通子弹", retVar: "$obj" })(($modelKey: BeString, $pos: BeVector3, $dir: BeVector3) => {
  var $obj: BeMech
  var $modelName: BeString
  var $bulletList: BeList
  $modelName = G.string.add(BeString.fromBeConst("子弹"), $modelKey, BeString.fromBeConst(".mech"));
  $bulletList = this.Bullet.get<BeList>($modelKey, BeBool.fromBeConst("0"));
  Act.byName<Device_子弹_334>("子弹").changeMech($modelName);
  $obj = G.createAIMech(BeString.fromBeConst("子弹"), BeFloat.fromBeConst("0"), $pos, $dir, BeEnum.fromBeConst<CreateMechPositionAlignment>(CreateMechPositionAlignment.Bottom), BeBool.fromBeConst("0"));
  Act.self<Device_Scenario_329>(this).X_Generic_x27_MechPhysics($obj, BeBool.fromBeConst("0"), BeFloat.fromBeConst("1"));
  $bulletList.add($obj);
  return $obj;
});
```

要点：
- 使用 `BeScript({ name: "...", color: [...], comment: "..." })` 赋值格式
- `enablePhysics(false)` 关闭物理
- `setPhysicsMaterial(弹性, 动摩擦, 静摩擦)` 设置物理材质
- `setDrag` / `setAngularDrag` 设置阻力

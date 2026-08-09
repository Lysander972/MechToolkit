# 回收与物理清理

摘录自示例工程的 TS 视图片段，用于对照"回收前的物理清理 + 回收进对象池"的写法。

## 回收模型

```ts
/**
  * name: Bullet'OnReclaim
  * sourcePath: map.map_/329/scripts/Bullet'OnReclaim.code
  */
public X_Bullet_x27_OnReclaim = BeScript({ name: "Bullet'OnReclaim", color: [0, 138, 255], comment: "回收模型" })(($obj: BeMech, $modelType: BeLong) => {
  var $key: BeString
  var $unused: BeList
  $key = G.create.string($modelType);
  $unused = this.BulletUnused.get<BeList>($key, BeBool.fromBeConst("0"));
  $unused.add($obj);
  $obj.setActive(BeBool.fromBeConst("0"));
  return;
});
```

## 回收礼物模型

```ts
/**
  * name: GiftModel'OnReclaim
  * sourcePath: map.map_/329/scripts/GiftModel'OnReclaim.code
  */
public X_GiftModel_x27_OnReclaim = BeScript({ name: "GiftModel'OnReclaim", color: [0, 138, 255], comment: "回收事件" })(($obj: BeMech, $modelKey: BeString) => {
  var $unused: BeList
  $unused = this.BulletUnused.get<BeList>($modelKey, BeBool.fromBeConst("0"));
  $unused.add($obj);
  $obj.setActive(BeBool.fromBeConst("0"));
  return;
});
```

## 强制回收子弹

```ts
/**
  * name: Bullet'ForceReclaimByModel
  * sourcePath: map.map_/329/scripts/Bullet'ForceReclaimByModel.code
  */
public X_Bullet_x27_ForceReclaimByModel = BeScript({ name: "Bullet'ForceReclaimByModel", comment: "按照使用的模型强制回收子弹" })(($key: BeString) => {
  var $bullet: BeList
  var $index: BeFloat
  var $obj: BeMech
  var $value: BeFloat
  var $faction: BeLong
  $bullet = this.Bullet.get<BeList>($key, BeBool.fromBeConst("0"));
  $index = $bullet.count();
  while (G.float.gt($index, BeFloat.fromBeConst("0"))) {
    $index.minusEqual(BeFloat.fromBeConst("1"));
    $obj = $bullet.read<BeMech>($index);
    /* $obj.callFun(BeString.fromBeConst("Public'ForceReclaim")); */
    $value = G.create.float(BeFloat.fromBeConst("99999"));
    $faction = G.create.long(BeLong.fromBeConst("0"));
    $obj.callFun(BeString.fromBeConst("Public'Damage"), $value, $faction);
  }
  return;
});
```

## 强制回收全部子弹

```ts
/**
  * name: Bullet'ForceReclaimAll
  * sourcePath: map.map_/329/scripts/Bullet'ForceReclaimAll.code
  */
public X_Bullet_x27_ForceReclaimAll = BeScript({ name: "Bullet'ForceReclaimAll", color: [0, 138, 255], comment: "强制回收全部子弹" })(() => {
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("0"));
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("1"));
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("20"));
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("30"));
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("40"));
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("41"));
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("50"));
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("51"));
  Act.self<Device_Scenario_329>(this).X_Bullet_x27_ForceReclaimByModel(BeString.fromBeConst("60"));
  return;
});
```

要点：
- 使用 `BeScript({ name: "...", color: [...], comment: "..." })` 赋值格式
- 回收时将对象加入 Unused 列表并设置 `setActive(false)`
- 强制回收通过调用 `Public'Damage` 触发死亡流程

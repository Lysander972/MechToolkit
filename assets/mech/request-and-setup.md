# 申请与设置

摘录自示例工程的 TS 视图片段，用于对照"从对象池申请并复位到目标状态"的写法。

## 设置子弹

```ts
/**
  * name: Bullet'SetBullet
  * sourcePath: map.map_/329/scripts/Bullet'SetBullet.code
  */
public X_Bullet_x27_SetBullet = BeScript({ name: "Bullet'SetBullet", color: [0, 138, 255], comment: "设置一个普通子弹", retVar: "$success" })(($pos: BeVector3, $direction: BeVector3, $type: BeLong, $faction: BeLong, $player: BeStruct) => {
  var $success: BeBool
  var $bulletKey: BeString
  var $info: BeStruct
  var $modelKey: BeString
  var $teamLimit: BeLong
  var $team1Current: BeLong
  var $team2Current: BeLong
  var $globalLimit: BeLong
  var $globalCurrent: BeLong
  var $b1: BeBool
  var $temp: BeLong
  var $b2: BeBool
  var $b3: BeBool
  var $b4: BeBool
  var $height: BeFloat
  var $unusedList: BeList
  var $index: BeFloat
  var $exist: BeBool
  var $obj: BeMech
  if (G.bool.not(this.GameStarted)) {
    $success = G.create.bool(BeBool.fromBeConst("0"));
    return $success;
  }
  $bulletKey = G.create.string($type);
  $info = this.BulletRegInfo.get<BeStruct>($bulletKey, BeBool.fromBeConst("0"));
  $modelKey = $info.get<BeString>(BeString.fromBeConst("modelKey"), BeBool.fromBeConst("0"));
  $teamLimit = $info.get<BeLong>(BeString.fromBeConst("teamLimit"), BeBool.fromBeConst("0"));
  $team1Current = $info.get<BeLong>(BeString.fromBeConst("team1Current"), BeBool.fromBeConst("0"));
  $team2Current = $info.get<BeLong>(BeString.fromBeConst("team2Current"), BeBool.fromBeConst("0"));
  $globalLimit = $info.get<BeLong>(BeString.fromBeConst("globalLimit"), BeBool.fromBeConst("0"));
  $globalCurrent = $info.get<BeLong>(BeString.fromBeConst("globalCurrent"), BeBool.fromBeConst("0"));
  $b1 = G.create.bool(BeBool.fromBeConst("0"));
  if (G.long.equal($faction, BeLong.fromBeConst("1"))) {
    $temp = G.long.add($team1Current, BeLong.fromBeConst("1"));
    $b1 = G.long.lte($temp, $teamLimit);
    $b2 = G.long.equal($teamLimit, BeLong.fromBeConst("-1"));
    $b1 = G.bool.or($b1, $b2);
  }
  if (G.long.equal($faction, BeLong.fromBeConst("2"))) {
    $temp = G.long.add($team2Current, BeLong.fromBeConst("1"));
    $b1 = G.long.lte($temp, $teamLimit);
    $b2 = G.long.equal($teamLimit, BeLong.fromBeConst("-1"));
    $b1 = G.bool.or($b1, $b2);
  }
  $temp = G.long.add($globalCurrent, BeLong.fromBeConst("1"));
  $b3 = G.long.lte($temp, $globalLimit);
  $b4 = G.long.equal($globalLimit, BeLong.fromBeConst("-1"));
  $b2 = G.bool.or($b3, $b4);
  $success = G.bool.and($b1, $b2);
  if (G.create.bool($success)) {
    $height = Act.self<Device_Scenario_329>(this).X_Bullet_x27_GetModelHeight($modelKey);
    $unusedList = this.BulletUnused.get<BeList>($modelKey, BeBool.fromBeConst("0"));
    $index = $unusedList.count();
    $exist = G.float.gt($index, BeFloat.fromBeConst("0"));
    if (G.create.bool($exist)) {
      $index.minusEqual(BeFloat.fromBeConst("1"));
      $obj = $unusedList.read<BeMech>($index);
      $obj.setActive(BeBool.fromBeConst("1"));
      $unusedList.remove($index);
    }
    if (G.bool.not($exist)) {
      $obj = Act.self<Device_Scenario_329>(this).X_Bullet_x27_New($modelKey, BeVector3.fromBeConst("1e+03,0,0"), $direction);
    }
    Act.self<Device_Scenario_329>(this).X_Generic_x27_BulletInitialize($obj, $pos, $direction, $type, $faction, $height, $player);
    $globalCurrent.addEqual(BeLong.fromBeConst("1"));
    if (G.long.equal($faction, BeLong.fromBeConst("1"))) {
      $team1Current.addEqual(BeLong.fromBeConst("1"));
    }
    if (G.long.equal($faction, BeLong.fromBeConst("2"))) {
      $team2Current.addEqual(BeLong.fromBeConst("1"));
    }
  }
  return $success;
});
```

## 设置礼物模型

```ts
/**
  * name: GiftModel'SetGiftModel
  * sourcePath: map.map_/329/scripts/GiftModel'SetGiftModel.code
  */
public X_GiftModel_x27_SetGiftModel = BeScript({ name: "GiftModel'SetGiftModel", color: [0, 138, 255], comment: "设置一个普通子弹" })(($modelKey: BeString, $text: BeString, $player: BeStruct, $skipUI: BeBool, $mode: BeLong) => {
  var $unusedList: BeList
  var $index: BeFloat
  var $exist: BeBool
  var $obj: BeMech
  $unusedList = this.BulletUnused.get<BeList>($modelKey, BeBool.fromBeConst("0"));
  $index = $unusedList.count();
  $exist = G.float.gt($index, BeFloat.fromBeConst("0"));
  if (G.create.bool($exist)) {
    $index.minusEqual(BeFloat.fromBeConst("1"));
    $obj = $unusedList.read<BeMech>($index);
    $obj.setActive(BeBool.fromBeConst("1"));
    $unusedList.remove($index);
  }
  if (G.bool.not($exist)) {
    $obj = Act.self<Device_Scenario_329>(this).X_GiftModel_x27_New($modelKey);
  }
  $obj.callFun(BeString.fromBeConst("Generic'PlayAnimation"), $modelKey, $text, $player, $skipUI, $mode);
  return;
});
```

要点：
- 使用 `BeScript({ name: "...", color: [...], comment: "..." })` 赋值格式
- 先从 Unused 列表尝试获取可复用对象
- 如果没有可复用对象，则创建新对象
- 获取后设置 `setActive(true)` 并从 Unused 列表移除

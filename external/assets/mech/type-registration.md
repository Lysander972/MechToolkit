# 类型注册

摘录自示例工程的 TS 视图片段，用于对照"类型注册"的写法。

## 注册子弹类型

```ts
/**
  * name: Bullet'RegisterBulletType
  * sourcePath: map.map_/329/scripts/Bullet'RegisterBulletType.code
  */
public X_Bullet_x27_RegisterBulletType = BeScript({ name: "Bullet'RegisterBulletType", comment: "注册子弹实体" })(($bulletType: BeString, $modelKey: BeString, $teamLimit: BeLong, $globalLimit: BeLong) => {
  var $zero: BeLong
  var $bulletInfo: BeStruct
  $zero = G.create.long(BeLong.fromBeConst("0"));
  $bulletInfo = G.create.struct();
  $bulletInfo.set(BeString.fromBeConst("modelKey"), $modelKey);
  $bulletInfo.set(BeString.fromBeConst("teamLimit"), $teamLimit);
  $bulletInfo.set(BeString.fromBeConst("team1Current"), $zero);
  $bulletInfo.set(BeString.fromBeConst("team2Current"), $zero);
  $bulletInfo.set(BeString.fromBeConst("globalLimit"), $globalLimit);
  $bulletInfo.set(BeString.fromBeConst("globalCurrent"), $zero);
  this.BulletRegInfo.set($bulletType, $bulletInfo);
  return;
});
```

## 注册模型类型

```ts
/**
  * name: Bullet'RegisterModelType
  * sourcePath: map.map_/329/scripts/Bullet'RegisterModelType.code
  */
public X_Bullet_x27_RegisterModelType = BeScript({ name: "Bullet'RegisterModelType", comment: "注册模型" })(($key: BeString) => {
  var $bullet: BeList
  var $bulletUnused: BeList
  var $exist: BeBool
  $bullet = G.create.listN();
  $bulletUnused = G.create.listN();
  $exist = this.Bullet.contains($key);
  if (G.bool.not($exist)) {
    this.Bullet.set($key, $bullet);
    this.BulletUnused.set($key, $bulletUnused);
  }
  return;
});
```

## 注册礼物模型类型

```ts
/**
  * name: GiftModel'RegisterType
  * sourcePath: map.map_/329/scripts/GiftModel'RegisterType.code
  */
public X_GiftModel_x27_RegisterType = BeScript({ name: "GiftModel'RegisterType", comment: "注册类型" })(($modelKey: BeString) => {
  var $bullet: BeList
  var $bulletUnused: BeList
  var $exist: BeBool
  $bullet = G.create.listN();
  $bulletUnused = G.create.listN();
  $exist = this.Bullet.contains($modelKey);
  if (G.bool.not($exist)) {
    this.Bullet.set($modelKey, $bullet);
    this.BulletUnused.set($modelKey, $bulletUnused);
  }
  return;
});
```

要点：
- 使用 `BeScript({ name: "...", comment: "..." })` 赋值格式
- 注册时创建两个列表：一个存放所有实例，一个存放未使用的实例
- 使用 `contains` 检查是否已注册，避免重复注册

# 属性读取与计算

摘录自水果切切切工程 map.map_/331 的 TS 视图片段，用于对照"读表刷新等级属性、HP/伤害/暴击等链路"的写法。

```ts
/**
  * name: 属性'更新等级属性
  * sourcePath: map.map_/331/scripts/属性'更新等级属性.code
  */
public X_属性_x27_更新等级属性 = BeScript({ name: "属性'更新等级属性", retVar: "$ret" })(() => {
  var $ret: BeLong
  var 下一级: BeLong
  下一级 = G.long.add(this.X_属性_x27_等级, BeLong.fromBeConst("1"));
  $ret = G.readExcel2<BeLong>(下一级, BeString.fromBeConst("升级总需求"), BeString.fromBeConst("升级需求"));
  //攻方属性列表
  this.X_属性_x27_攻方HP倍数 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("攻方HP倍数"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_攻方冷却 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("攻方冷却"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_攻方发射数 = G.readExcel2<BeLong>(this.X_属性_x27_等级, BeString.fromBeConst("攻方有效发射数"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_攻方暴击率 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("攻方暴击率"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_攻方暴击倍数 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("攻方暴击倍数"), BeString.fromBeConst("升级需求"));
  //守方属性列表
  this.X_属性_x27_守方点赞乘数 = G.readExcel2<BeLong>(this.X_属性_x27_等级, BeString.fromBeConst("守方点赞乘数"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_守方冷却 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("守方冷却"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_守方发射数 = G.readExcel2<BeLong>(this.X_属性_x27_等级, BeString.fromBeConst("守方有效发射数"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_守方暴击率 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("守方暴击率"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_守方暴击倍数 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("守方暴击倍数"), BeString.fromBeConst("升级需求"));
  //模型相关
  this.X_属性_x27_攻方炮塔缩放 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("攻方炮塔缩放"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_守方炮塔缩放 = G.readExcel2<BeFloat>(this.X_属性_x27_等级, BeString.fromBeConst("守方炮塔缩放"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_边框颜色 = G.readExcel2<BeColor>(this.X_属性_x27_等级, BeString.fromBeConst("边框颜色"), BeString.fromBeConst("升级需求"));
  this.X_属性_x27_边框自发光颜色 = G.readExcel2<BeColor>(this.X_属性_x27_等级, BeString.fromBeConst("边框自发光"), BeString.fromBeConst("升级需求"));
  if (G.long.equal(this.X_Attr_x27_Type, BeLong.fromBeConst("11"))) {
    Act.self<Device_基地_331_VirtualCore>(this).X_属性_x27_攻方炮塔更新属性();
  }
  if (G.long.equal(this.X_Attr_x27_Type, BeLong.fromBeConst("21"))) {
    Act.self<Device_基地_331_VirtualCore>(this).X_属性_x27_守方炮塔更新属性();
  }
  return $ret;
});

/**
  * name: Public'GetHP
  * sourcePath: map.map_/331/scripts/Public'GetHP.code
  */
public X_Public_x27_GetHP = BeScript({ name: "Public'GetHP", color: [8, 0, 255], comment: "得到此子弹的HP", retVar: "hp" })(() => {
  var hp: BeFloat
  hp = G.create.float(this.X_Attr_x27_HP);
  return hp;
});

/**
  * name: Public'Damage
  * sourcePath: map.map_/331/scripts/Public'Damage.code
  */
public X_Public_x27_Damage = BeScript({ name: "Public'Damage", color: [8, 0, 255], comment: "计算伤害并按需要回收", retVar: "counter" })((damage: BeFloat, faction: BeLong) => {
  var counter: BeFloat
  var hp: BeFloat
  if (G.long.equal(faction, this.X_Attr_x27_Faction)) {
    return counter;
  }
  hp = G.create.float(this.X_Attr_x27_HP);
  //预先计算反击伤害
  counter = G.create.float(BeFloat.fromBeConst("0"));
  if (G.float.gte(hp, damage)) {
    counter = G.create.float(damage);
  }
  if (G.float.lt(hp, damage)) {
    counter = G.create.float(hp);
  }
  hp = G.float.minus(hp, damage);
  Act.self<Device_基地_331_VirtualCore>(this).X_Private_x27_UpdateHP(hp);
  return counter;
});

/**
  * name: Private'UpdateHP
  * sourcePath: map.map_/331/scripts/Private'UpdateHP.code
  */
protected X_Private_x27_UpdateHP = BeScript({ name: "Private'UpdateHP", color: [8, 0, 255], private: true })((newHP: BeFloat) => {
  var currentHP: BeFloat
  currentHP = G.create.float(this.X_Attr_x27_HP);
  Act.self<Device_基地_331_VirtualCore>(this).X_Private_x27_BeforeChangeHP(currentHP, newHP);
  this.X_Attr_x27_HP = G.create.float(newHP);
  Act.self<Device_基地_331_VirtualCore>(this).X_Private_x27_AfterChangeHP(currentHP, newHP);
  return;
});

/**
  * name: Private'BeforeChangeHP
  * sourcePath: map.map_/331/scripts/Private'BeforeChangeHP.code
  */
protected X_Private_x27_BeforeChangeHP = BeScript({ name: "Private'BeforeChangeHP", color: [8, 0, 255], private: true, comment: "HP变更前" })((oldHP: BeFloat, newHP: BeFloat) => {
  if (G.float.lte(newHP, BeFloat.fromBeConst("0"))) {
    Act.self<Device_基地_331_VirtualCore>(this).X_Private_x27_OnDeath();
  }
  return;
  G.create.float(oldHP);
  G.create.float(newHP);
  return;
});

/**
  * name: Private'AfterChangeHP
  * sourcePath: map.map_/331/scripts/Private'AfterChangeHP.code
  */
protected X_Private_x27_AfterChangeHP = BeScript({ name: "Private'AfterChangeHP", color: [8, 0, 255], private: true, comment: "HP变更后" })((oldHP: BeFloat, newHP: BeFloat) => {
  var 血量比例: BeFloat
  return;
  G.create.float(oldHP);
  G.create.float(newHP);
  /* 血量比例 = G.float.division(newHP, maxHP); */
  /* if ((填充条组件 as BeUIRect).exist()) { */
    /* (填充条组件 as BeUIRect).fillMode(BeEnum.fromBeConst<UiFillMethod>(UiFillMethod.horizontal), 血量比例); */
  /* } */
  return;
});
```

要点：
- 属性赋值格式 `public 方法名 = BeScript({ name: "...", retVar: "..." })((params) => { body });`
- `G.readExcel2<类型>(行ID, 列名, 表名)` 读取表格数据
- HP 变更采用 Before/After 钩子模式
- `private` 脚本使用 `protected` + `private: true` 属性

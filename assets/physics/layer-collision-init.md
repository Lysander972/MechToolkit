# 层碰撞关系初始化

摘录自示例工程的 TS 视图片段，用于对照"机械/子弹设置 layer，以及按需提供碰撞检测层列表"的写法。

## 设置碰撞层

```ts
/**
  * name: Public'SetLayer
  * sourcePath: 机械/基地.mech_/0/scripts/Public'SetLayer.code
  */
protected X_Public_x27_SetLayer = BeScript({ name: "Public'SetLayer", private: true })(($layer: BeFloat) => {
  G.float.add($layer, BeFloat.fromBeConst("0"));
  //点击这里写注释
  return;
});
```

## 获取碰撞层列表

```ts
/**
  * name: 粒子'得到碰撞层列表
  * sourcePath: map.map_/329/scripts/粒子'得到碰撞层列表.code
  */
public X_粒子_x27_得到碰撞层列表 = BeScript({ name: "粒子'得到碰撞层列表", retVar: "$list" })(() => {
  var $list: BeList
  var $layer1: BeFloat
  var $layer2: BeFloat
  var $init: BeBool
  if (G.bool.not($init)) {
    $layer1 = G.create.float(BeFloat.fromBeConst("0"));
    $layer2 = G.create.float(BeFloat.fromBeConst("7"));
    $list = G.create.listN($layer1, $layer2);
    $init = G.create.bool(BeBool.fromBeConst("1"));
  }
  return $list;
});
```

要点：
- 使用 `BeScript({ name: "..." })` 赋值格式
- `setLayer` 设置零件的碰撞层
- 碰撞层列表用于粒子检测等场景

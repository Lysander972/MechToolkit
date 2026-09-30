# 积分榜刷新与分页

摘录自示例工程的 TS 视图片段，用于对照"积分榜列表刷新、分页控制、世界排名图标"的写法。

## 分页控制

```ts
/**
  * name: 按钮点击'排行榜上一页
  * sourcePath: map.map_/277/scripts/按钮点击'排行榜上一页.code
  */
public X_按钮点击_x27_排行榜上一页 = BeScript({ name: "按钮点击'排行榜上一页" })(() => {
  this.分页.minusEqual(BeLong.fromBeConst("1"))
  this.分页 = G.long.max(this.分页, BeLong.fromBeConst("0"))
  Act.self<Device_弹幕排行榜_277>(this).积分榜刷新()
  return
});

/**
  * name: 按钮点击'排行榜下一页
  * sourcePath: map.map_/277/scripts/按钮点击'排行榜下一页.code
  */
public X_按钮点击_x27_排行榜下一页 = BeScript({ name: "按钮点击'排行榜下一页" })(() => {
  this.分页.addEqual(BeLong.fromBeConst("1"))
  Act.self<Device_弹幕排行榜_277>(this).积分榜刷新()
  return
});
```

## 积分榜刷新（核心逻辑）

```ts
/**
  * name: 积分榜刷新
  * sourcePath: map.map_/277/scripts/积分榜刷新.code
  */
public 积分榜刷新 = BeScriptAsync({ name: "积分榜刷新" })(async () => {
  var dict: BeDict
  var Num: BeLong
  var ret: BeDict
  var Ranks: BeList
  var panel: BeUIRect
  var i: BeFloat
  var N: BeFloat
  var 有下一页: BeBool
  var button: BeUIButton
  var 有上一页: BeBool
  var 序号偏移: BeFloat
  var D: BeDict
  var name: BeString
  var 积分: BeLong
  var itemUI: BeCanvas
  var item: BeUIRect
  var 名次: BeUILabel
  var rank: BeFloat
  var rankIcon: BeUIRawImage
  var 是前三: BeBool
  var 组编号: BeLong
  var worldRankIcon: BeUIRawImage
  // 请求排行榜数据
  dict = G.create.dict();
  Num = G.create.long(BeLong.fromBeConst("100"));
  dict.insert(BeString.fromBeConst("PageIndex"), this.分页);
  dict.insert(BeString.fromBeConst("Num"), Num);
  ret = await G.dynamicCallRet(BeString.fromBeConst("DanmuGetAllRank"), dict);
  Ranks = ret.read<BeList>(BeString.fromBeConst("Ranks"), BeBool.fromBeConst("0"));

  // 分页按钮状态
  N = Ranks.count();
  有下一页 = G.float.gte(N, BeFloat.fromBeConst("100"));
  button = 界面.read<BeUIButton>(BeString.fromBeConst("结算界面/下一页"));
  button.active(有下一页);
  有上一页 = G.long.gt(this.分页, BeLong.fromBeConst("0"));
  button = 界面.read<BeUIButton>(BeString.fromBeConst("结算界面/上一页"));
  button.active(有上一页);

  // 计算序号偏移
  序号偏移 = G.float.multiply(this.分页.toFloat(), BeFloat.fromBeConst("100"));

  // 遍历渲染列表项
  i = G.create.float(BeFloat.fromBeConst("0"));
  while (G.float.lt(i, N)) {
    D = Ranks.read<BeDict>(i);
    name = D.read<BeString>(BeString.fromBeConst("name"), BeBool.fromBeConst("0"));
    积分 = D.read<BeLong>(BeString.fromBeConst("score"), BeBool.fromBeConst("0"));

    // 创建列表项
    itemUI = G.create.canvas(BeCanvas.fromBeConst("guid:ae8dcb62df264eafb590912f99069ec7"));
    item = itemUI.read<BeUIRect>(BeString.fromBeConst("item"));
    panel.addSon(item);

    // 名次与前三名图标
    名次 = itemUI.read<BeUILabel>(BeString.fromBeConst("item/名次"));
    rank = G.float.add(i, BeFloat.fromBeConst("1"), 序号偏移);
    名次.text(rank);
    rankIcon = itemUI.read<BeUIRawImage>(BeString.fromBeConst("item/rankIcon"));
    是前三 = G.float.gt(BeFloat.fromBeConst("4"), rank);
    rankIcon.active(是前三);

    // 世界排名动图图标
    组编号 = Act.byName<Device_弹幕_54>("弹幕").X_动图_x27_计算组编号(rank.toLong());
    worldRankIcon = itemUI.read<BeUIRawImage>(BeString.fromBeConst("item/worldRankIcon"));
    Act.byName<Device_弹幕_54>("弹幕").X_动图_x27_应用动图(worldRankIcon, 组编号);

    i.addEqual(BeFloat.fromBeConst("1"));
  }
  return;
});
```

要点：
- 脚本使用 `BeScript({ name: "..." })(arrow)` 属性赋值形式
- 异步脚本使用 `BeScriptAsync({ name: "..." })(async arrow)` 形式
- `DanmuGetAllRank` 是平台动态指令 Key，用 `G.dynamicCallRet` 异步读取排行榜分页数据
- 分页参数是 `PageIndex` 和 `Num`，返回 `Dict` 中的 `Ranks` 列表
- 列表项通过 `canvas.read` + `panel.addSon` 动态添加

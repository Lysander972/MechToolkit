# 读表API示例

摘录自示例工程的 TS 视图片段，用于对照"读表"的写法。

## 按 name 查行再读值

```ts
/**
  * name: 读取文字规则
  * sourcePath: map.map_/54/scripts/读取文字规则.code
  */
public 读取文字规则 = BeScript({ name: "读取文字规则", retVar: "r" })((n: BeString) => {
  var r: BeString
  var ID: BeLong
  var 文字: BeString
  var s: BeString
  ID = G.findExcel2<BeString>(BeString.fromBeConst("name"), n, BeString.fromBeConst("规则"));
  if (G.long.lt(ID, BeLong.fromBeConst("0"))) {
    文字 = G.create.string(BeString.fromBeConst("表格中找不到"));
    文字 = G.string.translate(文字);
    s = G.string.add(文字, n);
    G.debug.print(s, BeColor.fromBeConst("255,0,0,255"), BeBool.fromBeConst("0"));
  }
  r = G.readExcel2<BeString>(ID, BeString.fromBeConst("文字"), BeString.fromBeConst("规则"));
  return r;
});
```

## 遍历 ID 列表读取二维表

```ts
/**
  * 事件脚本: clientStart
  * sourcePath: map.map_/5
  */
private clientStart = EventGroup<[$mapIndex: BeFloat, $rule: BeString], void>({
  碰撞层关系设定: BeScript({ name: "碰撞层关系设定", color: [255, 255, 255] })(($mapIndex: BeFloat, $rule: BeString) => {
    var ID数据列表: BeList
    var 循环次数_纵: BeFloat
    var 列表编号_纵: BeFloat
    var 对象层序号_整数: BeLong
    var 列表编号_横: BeFloat
    var 循环次数_横: BeFloat
    var 对象层序号ID: BeLong
    var 列名: BeString
    var 布尔_碰撞开关: BeBool
    ID数据列表 = G.map.excelGetIDList2(BeString.fromBeConst("碰撞层级设置"));
    循环次数_纵 = ID数据列表.count();
    列表编号_纵 = G.create.float(BeFloat.fromBeConst("0"));
    while (G.float.lt(列表编号_纵, 循环次数_纵)) {
      对象层序号_整数 = ID数据列表.read<BeLong>(列表编号_纵);
      列表编号_横 = G.create.float(BeFloat.fromBeConst("0"));
      循环次数_横 = G.float.add(列表编号_纵, BeFloat.fromBeConst("1"));
      while (G.float.lt(列表编号_横, 循环次数_横)) {
        对象层序号ID = 列表编号_横.toLong();
        列名 = G.create.string(对象层序号ID);
        布尔_碰撞开关 = G.readExcel2<BeBool>(对象层序号_整数, 列名, BeString.fromBeConst("碰撞层级设置"));
        G.layer.enableCollide(列表编号_纵, 列表编号_横, 布尔_碰撞开关);
        列表编号_横 = G.float.add(列表编号_横, BeFloat.fromBeConst("1"));
      }
      列表编号_纵 = G.float.add(列表编号_纵, BeFloat.fromBeConst("1"));
    }
    return;
  }),
});
```

## GM 名单判断

```ts
/**
  * 事件脚本: clientStart
  * sourcePath: map.map_/5
  */
private clientStart = EventGroup<[$mapIndex: BeFloat, $rule: BeString], void>({
  GM判断: BeScript({ name: "GM判断", color: [255, 255, 255] })(($mapIndex: BeFloat, $rule: BeString) => {
    var playerObj: BePlayer
    var playerID: BeLong
    var GMlist: BeList
    var totalF: BeFloat
    var totalL: BeLong
    var index: BeLong
    var userID: BeLong
    var key: BeBool
    playerObj = G.getCurrentPlayer();
    playerID = playerObj.id();
    GMlist = G.map.excelGetIDList2(BeString.fromBeConst("GM名单"));
    totalF = GMlist.count();
    totalL = totalF.toLong();
    index = G.create.long(BeLong.fromBeConst("0"));
    while (G.long.lt(index, totalL)) {
      userID = G.readExcel2<BeLong>(index, BeString.fromBeConst("用户编号"), BeString.fromBeConst("GM名单"));
      if (G.long.equal(playerID, userID)) {
        this.是GM = G.create.bool(BeBool.fromBeConst("1"));
        break;
      }
      index = G.long.add(index, BeLong.fromBeConst("1"));
    }
    key = G.keyboard.keyHeld2(BeEnum.fromBeConst<KeyCode>(KeyCode.H));
    if (G.create.bool(key)) {
      this.是GM = G.create.bool(BeBool.fromBeConst("1"));
    }
    return;
  }),
});
```

要点：
- `G.readExcel2<类型>(ID, 列名, 表名)` 按行ID+列名读取
- `G.findExcel2<类型>(列名, 值, 表名)` 按列查找返回行ID
- `G.map.excelGetIDList2(表名)` 获取所有行ID列表
- 找不到时返回负数，需要检查
- 事件脚本使用 `EventGroup` 格式包裹
- **禁止用 `"id"` 作为 `findExcel2` 的搜索列**：该 API 返回的就是行 ID，用 id 列搜索属于逻辑错误，可能触发底层异常

# 收到礼物的处理

摘录自示例工程的 TS 视图片段，用于对照"礼物消息分发与礼物效果"的写法。

```ts
/**
  * name: BarrageHandler'Gift
  * sourcePath: map.map_/54/scripts/BarrageHandler'Gift.code
  */
public X_BarrageHandler_x27_Gift = BeScript({ name: "BarrageHandler'Gift" })((msgObj: BeDict, player: BeStruct) => {
  var context: BeLong
  var giftCount: BeLong
  var giftType: BeString
  context = Act.self<Device_弹幕_54>(this).GetContextId()
  player = Act.self<Device_弹幕_54>(this).X_Player_x27_InfoAutoFill(player)
  giftCount = msgObj.read<"BeLong">(BeString.fromBeConst("num"), BeBool.fromBeConst("0"))
  giftType = msgObj.read<"BeString">(BeString.fromBeConst("gift"), BeBool.fromBeConst("0"))
  if (G.long.equal(context, BeLong.fromBeConst("1"))) {
    if (G.string.equal(giftType, BeString.fromBeConst("仙女棒"))) {
      Act.self<Device_弹幕_54>(this).X_得到礼物_x27_1(giftCount, player)
    }
    if (G.string.equal(giftType, BeString.fromBeConst("能力药丸"))) {
      Act.self<Device_弹幕_54>(this).X_得到礼物_x27_2(giftCount, player)
    }
    // ... 其他礼物类型
  }
  return
});

/**
  * name: 得到礼物'点赞
  * sourcePath: map.map_/54/scripts/得到礼物'点赞.code
  */
public X_得到礼物_x27_点赞 = BeScript({ name: "得到礼物'点赞", color: [112, 0, 255] })((count: BeLong, player: BeStruct) => {
  var score: BeLong
  var team: BeLong
  var 升级强度: BeLong
  var 技能数: BeLong
  // 从结构中得到score后，直接修改score就会改变结构里的积分
  score = player.get<"BeLong">(BeString.fromBeConst("score"), BeBool.fromBeConst("0"))
  if (G.long.gt(count, BeLong.fromBeConst("0"))) {
    score.addEqual(count)
    this.ScorePool.addEqual(count)
    this.X_状态值_x27_自动保存积分需求 = G.create.bool(BeBool.fromBeConst("1"))
  }
  // 点赞的具体处理
  team = player.get<"BeLong">(BeString.fromBeConst("team"), BeBool.fromBeConst("1"))
  if (G.long.equal(team, BeLong.fromBeConst("1"))) {
    升级强度 = G.long.multiply(count, BeLong.fromBeConst("0"))
    Act.byName<Device_Scenario_329>("Scenario").X_炮塔_x27_攻方放置或升级(player, 升级强度)
    技能数 = G.long.multiply(count, BeLong.fromBeConst("2"))
    Act.byName<Device_Scenario_329>("Scenario").X_技能_x27_添加到攻方玩家炮塔(BeString.fromBeConst("1000"), 技能数, player)
  }
  if (G.long.equal(team, BeLong.fromBeConst("2"))) {
    升级强度 = G.long.multiply(count, BeLong.fromBeConst("0"))
    Act.byName<Device_Scenario_329>("Scenario").X_炮塔_x27_守方放置或升级(player, 升级强度)
    技能数 = G.long.multiply(count, BeLong.fromBeConst("1"))
    Act.byName<Device_Scenario_329>("Scenario").X_技能_x27_添加到守方玩家炮塔(BeString.fromBeConst("20001"), 技能数, player)
  }
  return
});

/**
  * name: 平台适配器'更新礼物图
  * sourcePath: map.map_/54/scripts/平台适配器'更新礼物图.code
  */
public X_平台适配器_x27_更新礼物图 = BeScript({ name: "平台适配器'更新礼物图" })((布局: BeCanvas, 路径: BeString, 级别: BeLong) => {
  var 图片: BeUIRawImage
  var 礼物图名: BeString
  if (布局.exist()) {
    图片 = 布局.read<"BeUIRawImage">(路径)
    if (图片.exist()) {
      礼物图名 = Act.self<Device_弹幕_54>(this).X_平台适配器_x27_得到礼物图名(级别)
      图片.loadPic(礼物图名)
    }
  }
  return
});

/**
  * name: 平台适配器'得到礼物图名
  * sourcePath: map.map_/54/scripts/平台适配器'得到礼物图名.code
  */
public X_平台适配器_x27_得到礼物图名 = BeScript({ name: "平台适配器'得到礼物图名", retVar: "name" })((level: BeLong) => {
  var name: BeString
  if (G.create.bool(this.X_模式_x27_抖音)) {
    if (G.long.equal(level, BeLong.fromBeConst("0"))) {
      name = G.create.string(BeString.fromBeConst("仙女棒.png"))
    }
    // ... 其他级别
  }
  if (G.create.bool(this.X_模式_x27_快手)) {
    if (G.long.equal(level, BeLong.fromBeConst("0"))) {
      name = G.create.string(BeString.fromBeConst("助威火炬.png"))
    }
    // ... 其他级别
  }
  return name
});
```

要点：
- 脚本声明使用 `BeScript({ name: "...", color: [...] })` 赋值格式
- 礼物消息从 `msgObj` 中读取 `gift` 和 `num`
- 根据平台模式返回不同的礼物图名
- 积分直接修改 `player.get<"BeLong">` 返回的引用即可更新结构

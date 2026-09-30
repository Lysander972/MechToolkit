# 弹幕游戏结算

摘录自示例工程的 TS 视图片段，用于对照"玩法结束与结算 UI"的写法。

```ts
/**
  * name: Button_Settlement'RestartGame
  * sourcePath: map.map_/54/scripts/Button_Settlement'RestartGame.code
  */
public X_Button_Settlement_x27_RestartGame = BeScript({ name: "Button_Settlement'RestartGame" })(() => {
  G.map.restartGame()
  return
});

/**
  * name: Game'Settlement
  * sourcePath: map.map_/54/scripts/Game'Settlement.code
  */
public X_Game_x27_Settlement = BeScript({ name: "Game'Settlement", color: [255, 243, 0], comment: "结算" })((winner: BeLong) => {
  var data: BeDict
  var panel: BeUIButton
  var v: BeVector3
  var settled: BeBool
  if (G.bool.not(settled)) {
    Act.byName<Device_Scenario_329>("Scenario").玩法结束()
    this.GameStart = G.create.bool(BeBool.fromBeConst("0"))
    data = G.map.load()
    panel = this.GameUI.read<"BeUIButton">(BeString.fromBeConst("root/rightpanel/skillPanel"))
    v = panel.getCanvasPos()
    data.insert(BeString.fromBeConst("礼物图坐标"), v)
    data.insert(BeString.fromBeConst("LastScorePool"), this.ScorePool)
    Act.self<Device_弹幕_54>(this).X_UI_x27_EnterSettlement(winner)
    settled = G.create.bool(BeBool.fromBeConst("1"))
  }
  return
});
```

创建结算页的核心部分：

```ts
// 创建结算页
exist = this.SettlementUI.exist()
if (G.bool.not(exist)) {
  G.ui._2dmode(BeBool.fromBeConst("1"))
  this.SettlementUI = G.create.canvas(BeCanvas.fromBeConst("guid:0e5ae075677c40ae878933b7dde99df4"))
}
totalScore = G.long.add(this.LastScorePool, this.ScorePool)
panel = this.SettlementUI.read<"BeUIRect">(BeString.fromBeConst("结算界面/scroll/panel"))
id列表 = this.PlayerMap.names()
```

要点：
- 脚本声明使用 `BeScript({ name: "...", color: [...], comment: "..." })` 赋值格式
- `G.map.restartGame()` 重启游戏
- `G.create.canvas(BeCanvas.fromBeConst("guid:..."))` 通过 GUID 创建 Canvas
- 结算时保存数据到存档

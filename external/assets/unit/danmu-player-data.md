# 弹幕玩家数据处理

摘录自示例工程的 TS 视图片段，用于对照"弹幕玩家数据读取与处理"的写法。

```ts
/**
  * name: 弹幕处理'点赞
  * sourcePath: map.map_/54/scripts/弹幕处理'点赞.code
  */
public X_弹幕处理_x27_点赞 = BeScript({ name: "弹幕处理'点赞", color: [255, 255, 255] })((点赞数量: BeLong, 玩家: BeStruct) => {
  if (G.create.bool(this.X_局内功能设置_x27_自动下场)) {
    Act.self<Device_弹幕_54>(this).X_玩家_x27_自动下场检查(玩家);
  }
  Act.self<Device_弹幕_54>(this).X_得到礼物_x27_点赞(点赞数量, 玩家);
  return;
});
```

要点：
- 弹幕玩家数据通常以 `uid` 为 key 存放在 `Dict` 或 `Struct` 中
- 从消息对象中读取 `uid`，再从 `PlayerMap` 中获取对应的玩家数据
- 推荐使用 `Dict` 类型，行为更可预测

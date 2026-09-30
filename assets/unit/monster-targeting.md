# 怪物索敌逻辑

摘录自示例工程的 TS 视图片段，用于对照"从作战机械列表中索敌"的写法。

```ts
角色机械 = Act.self<Device_木棒暴徒_1009>(this).getMech()
阵营 = 角色机械.team()
战斗数据集 = Act.self<Device_木棒暴徒_1009>(this).callClientMapRet<"BeStruct">(BeString.fromBeConst("游戏与战斗.数据'得到数据集"))
if (G.float.Approximately(阵营, BeFloat.fromBeConst("1"))) {
  列表0 = 战斗数据集.get<"BeList">(BeString.fromBeConst("红方作战机械"), BeBool.fromBeConst("1"))
}
if (G.float.Approximately(阵营, BeFloat.fromBeConst("2"))) {
  列表0 = 战斗数据集.get<"BeList">(BeString.fromBeConst("蓝方作战机械"), BeBool.fromBeConst("1"))
}

敌人 = G.creatVariable.mech(BeMech.fromBeConst())
while (G.float.lt(小数i, 小数0)) {
  机械0 = 列表0.read<"BeMech">(小数i)
  小数i.addEqual(BeFloat.fromBeConst("1"))
  if (机械0.alive()) {
    if (机械0.custom<"BeBool">(BeString.fromBeConst("存活"))) {
      坐标1 = 机械0.corePos()
      距离 = G.vector3.distance(坐标0, 坐标1)
      if (G.float.lte(距离, 最小距离)) {
        敌人 = G.creatVariable.mech(机械0)
        最小距离 = G.create.float(距离)
      }
    }
  }
}
this.数据集.set(BeString.fromBeConst("目标机械"), 敌人)
```

要点：
- 根据阵营从数据集中获取敌方作战机械列表
- 遍历列表，检查 `alive()` 和自定义的 `存活` 属性
- 按距离选择最近的目标
- 结果存入 `this.数据集`

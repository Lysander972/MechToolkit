# 单位数据初始化

摘录自示例工程的 TS 视图片段，用于对照"单位初始化时的数据放置"的写法。

```ts
向量0 = G.creatVariable.Vector3(BeFloat.fromBeConst("0"), BeFloat.fromBeConst("0"), BeFloat.fromBeConst("-1"))
this.数据集.set(BeString.fromBeConst("角色朝向"), 向量0)
向量0 = G.creatVariable.Vector3(BeFloat.fromBeConst("0"), BeFloat.fromBeConst("0"), BeFloat.fromBeConst("0"))
this.数据集.set(BeString.fromBeConst("移动向量"), 向量0)

机械0 = G.creatVariable.mech(BeMech.fromBeConst())
this.数据集.set(BeString.fromBeConst("目标机械"), 机械0)

角色机械 = Act.self<Device_木棒暴徒_1009>(this).getMech()
角色机械.setCustom<"BeFloat">(BeString.fromBeConst("雪量上限"), BeFloat.fromBeConst("2000"))
角色机械.setCustom<"BeFloat">(BeString.fromBeConst("雪量"), BeFloat.fromBeConst("2000"))
角色机械.setCustom<"BeFloat">(BeString.fromBeConst("移动速度"), BeFloat.fromBeConst("4"))
角色机械.setCustom<"BeBool">(BeString.fromBeConst("存活"), BeBool.fromBeConst("1"))
```

要点：
- 运行时状态放在 `this.数据集`：移动向量、目标机械引用、计时器等
- 跟随机械的属性放在 `BeMech.custom`：存活、移动速度、血量上限等
- 目标机械先放空 mech 占位，后续索敌时写入真实引用

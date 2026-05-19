# 投射物与碰撞（含对象池复用）

## 本篇范围

- 投射物/单位的复用与对象池思路
- 碰撞事件与碰撞层常见约束
- 回收与移动的硬性注意点

## 不包含

- 通用性能策略（见“性能优化考量”）

## 投射物（概念）

功能简单的实体，由机械扮演，频繁创建和销毁。用途：子弹、炮弹、魔法弹等。

投射物只需要简单的触发器和零件特效，生命周期短，数量多。

## 对象池思路（复用优先）

频繁创建销毁影响性能，使用对象池复用实体：

1. 初始化时预创建一定数量实体，全部设为非活跃状态
2. 需要时从池中获取非活跃实体，激活并初始化
3. 实体失效后回收（设为非活跃，可移到屏幕外）
4. 如果池满了仍需要新实体，可以创建额外的（或限制上限）

维护活跃实体列表便于遍历更新，非活跃实体在池中待用。

## 复用范式（TS 视图真实片段）

投射物常见写法是“先从 Unused 列表取一个能用的，不够再新建；回收时放回 Unused 并隐藏”。

示例：

- 申请与复位：`../../assets/mech/request-and-setup.md`
- 回收进 Unused：`../../assets/mech/recycle-physics-cleanup.md`

单位（高频/可重复）常见写法是“Key -> Map + Unused 列表”：Key 命中就复用，不命中才新建；回收时从 Map 移除并放回 Unused：

```ts
$key = G.create.string($pos);
$available = this.UnusedGrid.count();
$unusedExist = G.float.gt($available, BeFloat.fromBeConst("0"));
if (G.create.bool($unusedExist)) {
}
$index = G.float.minus($available, BeFloat.fromBeConst("1"));
$obj = this.UnusedGrid.read<BeMech>($index);
$obj.move($pos, BeEnum.fromBeConst<MechPositionAlignment>(MechPositionAlignment.Core));
this.UnusedGrid.remove($index);
this.GridMap.insert($key, $obj);
if (G.bool.not($unusedExist)) {
}
$obj = Act.self<Device_Scenario_329>(this).X_Grid_x27_New($pos);
```

```ts
$obj = this.GridMap.read<BeMech>($key, BeBool.fromBeConst("1"));
this.GridMap.remove($key);
this.UnusedGrid.add($obj);
$obj.callFun(BeString.fromBeConst("Public'OnReclaim"));
```

说明：上面的示例里出现的 `mech.move(...)` 属于旧写法展示，不要照搬移动方式；移动规则见“回收与移动（硬性注意点）”。

## 子弹更新逻辑

在 `update` 中：
1. 根据速度更新位置
2. 检查碰撞（通过碰撞零件或空间检测）
3. 命中后执行伤害逻辑，播放命中特效，回收子弹
4. 检查寿命，超出最大生存时间后回收
5. 检查是否超出场景边界，超出后回收

## 碰撞事件

- `beHit` - 受击事件，零件被碰撞时触发
- `enterTrigger` - 进入触发器区域
- `leaveTrigger` - 离开触发器区域
- `laserDetectEnemy` - 激光检测到目标

触发器零件用于区域检测：陷阱、拾取物品、安全区域等。

激光探测器用于自动瞄准、警戒系统、范围检测。

## 回收与移动（硬性注意点）

1) **回收机械时，不要把它们固定堆在同一个位置**（也不要“回收时什么都不动”）。
- 已知现象：大量机械长期重叠在同一坐标，即使彻底停用/隐藏，只要没有删除，仍可能持续触发大量不可见事件（例如碰撞相关/物理更新相关），导致性能明显下降。
- 建议做法：回收时除了 `setActive(0)`/放回 `Unused`，还要让“核心”移到一个**足够远的随机位置**（数值要大到不会和场景内任何东西重叠；例如 `1e+06` 量级，并带随机扰动，避免所有回收物仍重合在同一点）。

2) **任何“移动机械”的逻辑，只允许走核心零件的移动；禁止直接对 `BeMech` 变量调用移动方法**。
- 已知 bug：如果“机械的移动”和“零件的移动”混合使用，会导致两者坐标出现不稳定偏移，最终行为不可预测。
- 规则：脚本里只选一种移动口径，并且固定为"核心零件移动"。（上面示例代码里出现的 `mech.move(...)` 属于结构展示用的旧写法；不要照搬那一行的移动方式。）

3) **刚创建的新机械，不要立刻二次强制移动/旋转**（位姿窗口约束详见 `mech-reuse-guide.md` “刚创建机械的位姿窗口”）。
- 对象池取出的旧机械不属于”刚创建的新机械”，但仍应保持单一移动口径。

## 碰撞层与碰撞体（常见且高收益的约束）

1) **机械的“层”是整机覆盖式的**
- 常见行为：对 `BeMech` 设置层，等价于对该机械的每个零件设置层，会覆盖零件自己带的层。
- 不要期待“零件层优先级/混合层”的机制：通常不存在这种优先级。

2) **一个机械里通常只保留一个碰撞体零件开启碰撞**
- 常见做法：只让“负责碰撞/探测的那一个零件”开碰撞，其它零件都关碰撞，并且放到“无碰撞”的层上。
- 目的：减少无意义的碰撞对、降低不可见事件数量，避免性能被拖垮。

3) **层关系通常用读表初始化（建议在 `clientStart` 一次性做完）**

示例见：`table-based-attribute.md`

## 性能优化

- 限制同屏子弹数量上限
- 使用空间划分减少碰撞检测次数
- 子弹超出范围立即回收
- 距离过远的对象不做检测

## 相关文档

- `../concepts/tsview-writing-spec.md`
- `../concepts/unit-player-streamer-monster.md`
- `performance-optimization.md`

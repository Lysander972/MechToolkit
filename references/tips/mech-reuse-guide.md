# 机械复用机制（机械生成器 / 产生器）

这里的“复用”主要指：把**通用逻辑**放在地图上的“机械生成器”，然后通过它去导入/生成不同的机械文件；生成器的脚本与变量会在运行时**注入到所生成机械的核心零件**里。

## 本篇范围

- 机械生成器与注入机制
- 跨边界调用的稳定方式
- 切换导入机械的注意点

## 不包含

- 投射物对象池与碰撞层规则（见“投射物子弹碰撞探测器”）

## 核心关系（别混）

- 地图（Map）与机械（Mech）是平级关系：地图通过“机械生成器”去导入机械文件并生成实例
- 机械生成器只能放在地图上
- 注入是运行时行为：影响的是“生成出来的机械实例”，不会改机械文件的磁盘内容

## 在 TS 视图里怎么识别“注入”

生成器零件的类 **继承了目标机械核心零件的类**；并且生成器旁边会有明确注释说明"注入到核心零件并合并"。

示例（TS 视图片段）：

```ts
// 机械生成器：此处的脚本和变量将在使用此生成器创建机械时注入到所生成机械的核心零件上，
// 与该机械核心自带的脚本和变量合并在一起。
// 注入是单向的：此零件的内容会影响生成的机械，但反之不成立。
@events("beHit", "deviceDie", "mechDictChange", "mechDie", "mechfixedUpdate", "mechPathFindFinishLE", "mechStart", "mechUpdate", "start", "update")
export class Device_普通子弹_1 extends Mech_3589db8ae95d408ea0b7e85354f6b635.Device_anonymous_0 {
}
```

## 跨边界调用：用“公开脚本名 + 动态调用”

注入最终是“合并到核心零件”，但为了避免互相乱耦合，推荐把“可被外部调用”的脚本统一做成稳定的接口名（常见做法是用 `Public'...` 前缀），然后用 `BeMech.callFun` / `BeMech.callReturn` 去调用。

示例（TS 视图片段）：

```ts
public X_Public_x27_Damage = BeScript({ name: "Public'Damage" })(($damage: BeFloat, $faction: BeLong) => {
  var $counter: BeFloat
  $counter = this.Core.callReturn<"BeFloat">(BeString.fromBeConst("Public'Damage"), $damage, $faction)
  return $counter
});

public X_Public_x27_OnCollision = BeScript({ name: "Public'OnCollision" })((from: BeMech) => {
  this.Grid.callFun(BeString.fromBeConst("Public'OnCollision"), from)
});
```

再比如，在事件里拿到某个 `BeMech`，也可以直接按名字去调它的“公开脚本”：

```ts
from = $attacker.mech()
格子.callFun(BeString.fromBeConst("Public'OnCollision"), from, $pos)
```

## 切换导入的机械文件（只影响后续生成）

机械生成器所属的零件类型支持在运行时“更换机械文件”，常见流程是：

1) 先对生成器调用 `changeMech(...)`
2) 再触发生成（例如创建 AI 机械）

示例（TS 视图片段）：

```ts
modelFile = G.string.add(modelKey, BeString.fromBeConst(".mech"))
Act.byName<Device_模型创建器_395>("模型创建器").changeMech(modelFile)
obj = G.createAIMech(BeString.fromBeConst("模型创建器"), BeFloat.fromBeConst("0"), pos, dir, BeEnum.fromBeConst("1"), BeBool.fromBeConst("0"))
```

## 刚创建机械的位姿窗口

机械产生不是完全无状态的瞬时操作。生成器创建机械后会激活机械、注入脚本、触发机械初始化，并在后续更新里释放刚体状态。这个短窗口内，不要把“刚生成的新机械”当成普通已稳定机械处理。

硬规则：

- 新建机械的初始坐标和朝向，直接写进 `G.createAIMech` / `G.createPlayerMech` 的参数
- 不要先把机械创建到临时点，再在同一调用栈里立刻用 `Mech.move` / `Mech.rot` 或 `Device.setPosKinematic` / `Device.setRotKinematic` 二次覆盖
- 需要创建后再校正位姿时，放到后续 `update` / `mechUpdate`，或等对象进入对象池复用流程后再做

## 推荐落地方式（最少踩坑）

- 通用逻辑放生成器；不同机械的“差异点”留在机械核心里，通过 `Public'...` 形成稳定接口
- 约束命名：注入是“合并”，同一份核心内容里（核心自带 + 生成器注入）**不要重名**（变量/脚本名/事件脚本名等都算）
- 切换机械文件只影响后续生成：已经生成出来的实例不会被回写/替换

## 相关文档

- `../concepts/tsview-writing-spec.md`
- `projectile-collision-detector.md`

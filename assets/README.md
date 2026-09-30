# 代码模板

从示例工程的 TS 视图摘录的真实片段，用于对照写法与结构。

## 使用方式

1. 按需求打开对应模板，找到所需片段
2. 把结构与写法迁移到目标工程里
3. 模板里的变量名、方法名、表格名、UI 路径需要按目标工程替换

## 机械与对象池

| 模板 | 说明 |
|------|------|
| `mech/type-registration.md` | 注册子弹/模型类型，创建 All 和 Unused 列表 |
| `mech/type-registration-precreate.md` | 注册同时预创建一批实例 |
| `mech/request-and-setup.md` | 从对象池申请并复位到目标状态 |
| `mech/recycle-physics-cleanup.md` | 回收进对象池，设置非活跃 |

## 物理

| 模板 | 说明 |
|------|------|
| `physics/mech-physics-init.md` | 机械物理属性设置 |
| `physics/layer-collision-init.md` | 碰撞层关系读表初始化 |

## 单位

| 模板 | 说明 |
|------|------|
| `unit/unit-data-init.md` | 单位属性初始化 |
| `unit/attribute-read-calc.md` | 从表格读取属性并计算 |
| `unit/mech-binding-projectile.md` | 单位与机械绑定、投射物发射 |
| `unit/danmu-player-data.md` | 弹幕玩家数据结构与处理 |
| `unit/monster-targeting.md` | 怪物目标选择 |

## 弹幕

| 模板 | 说明 |
|------|------|
| `danmu/gift-receive-handling.md` | 礼物消息解析与效果触发 |
| `danmu/danmu-data-download-upload.md` | 弹幕数据读写 |
| `danmu/danmu-game-settlement.md` | 结算逻辑 |
| `danmu/leaderboard-refresh-pagination.md` | 排行榜 UI 刷新 |
| `danmu/top100-entrance-effect.md` | 入场特效播放 |

## Canvas

| 模板 | 说明 |
|------|------|
| `canvas/canvas-reference-callback.md` | Canvas 读取、引用存储、回调设置 |
| `canvas/inline-canvas-example.md` | 内联 Canvas HTML 写法 |
| `canvas/canvas-animation-time-advance.md` | 基于时间的动画推进 |
| `canvas/canvas-easing-shake.md` | 缓动函数与抖动效果 |

## 本地化

| 模板 | 说明 |
|------|------|
| `localization/string-concat-translation.md` | 字符串拼接与本地化 |

## 调试

| 模板 | 说明 |
|------|------|
| `debug/debug-output-example.md` | 调试输出写法 |

## 读表

| 模板 | 说明 |
|------|------|
| `excel/table-api-example.md` | 读表 API 使用示例 |


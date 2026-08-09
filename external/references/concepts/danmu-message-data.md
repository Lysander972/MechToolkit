# 弹幕消息处理和弹幕数据管理

## 本篇范围

- 弹幕消息如何转成“局内分数/胜场”等统计
- 礼物消息的常见字段与处理要点
- 弹幕排行榜与弹幕玩家跨直播间数据（脚本可用接口）

## 不包含

- 弹幕输入与玩法类型（见“弹幕游戏概念”）
- 术语与身份细分（见“单位、主播、弹幕玩家、怪物”）

## 分数与数据的层级

- **局内分数/胜场（脚本自定义）**：只服务本局玩法与展示，怎么计分由脚本决定。
- **弹幕排行榜（系统接口）**：用于跨对局的排名统计，通过 `danmu.*` 系列接口读写。
- **弹幕玩家跨直播间数据（系统接口）**：用于“观众维度”的长期数据，通过 `danmu.setDict/getDict` 读写。

## 职责边界（谁负责什么）

- **消息输入层**：把评论/礼物/点赞以 `onDanmu` 事件形式送进脚本，并按批次给出 `$list`。
- **脚本（玩法作者）**：解析 `$list`、维护局内统计、把 `uid -> 玩法内角色/资源` 做映射，并决定什么时候写入排行榜/跨直播间数据。
- **系统接口（`danmu.*`）**：只提供"排行榜/跨直播间数据"的读写能力；不会自动计算局内分数，也不会自动"结算/上传"。
- 正式游戏中全部的互动均来自于系统事件,而不是来自于任何的UI组件.绝对禁止

## 输入：`onDanmu` 事件

弹幕消息统一通过事件 `onDanmu` 进入脚本，参数：
- `$type`：`Comment`（评论）、`Gift`（礼物）、`Like`（点赞）
- `$list`：消息列表（列表元素是 `dict`）

本工程默认的 `$list` 元素字段如下（按 `$type` 区分）：

### `$type = Gift`（礼物）

- `uid`：观众 ID（字符串）
- `gift`：礼物标识（字符串，用于脚本侧映射到效果/数值）
- `num`：数量（整数）
- `name`：昵称（字符串）
- `avatarUrl`：头像 URL（字符串）

### `$type = Like`（点赞）

- `uid`：观众 ID（字符串）
- `likes`：本次点赞数（整数）
- `name`：昵称（字符串）
- `avatarUrl`：头像 URL（字符串）

### `$type = Comment`（评论）

- `uid`：观众 ID（字符串）
- `word`：评论内容（字符串）
- `name`：昵称（字符串）
- `avatarUrl`：头像 URL（字符串）

> 注意：以上字段是脚本侧能收到的“字典键”。不要再额外假设其它字段；需要什么信息就以实际字典里有的键为准。

## 局内计分（脚本侧）

- 局内分数建议按 `uid` 维护一份统计（例如：本局分数、胜场、资源、冷却等），玩法结束再决定是否写入排行榜/跨直播间数据。
- 点赞/评论通常只做“弱触发”（避免免费输入直接决定胜负）；礼物通常做“强触发”。这是玩法常见做法，不是硬规则。

## 弹幕排行榜（`danmu.*`）

### 写入：`danmu.addRank(list)`

`list` 的每个元素是 `dict`，字段要求：
- `uid`：观众 ID（字符串）
- `score`：要增加的分数（整数，必须 `>= 0`）
- `wins`：要增加的胜场（整数，可选；不填则按 `0`）

返回值是一个 `list`，元素包含：
- `uid`、`fromRank`、`toRank`、`fromScore`、`toScore`（用于获知名次/分数变化）

### 读取：`danmu.getByID(uid)`

返回一个 `struct`，包含：
- `uid`、`rank`、`score`、`wins`、`lastGiftTime`

### 清空：`danmu.clearRank()`

### 分页读取全榜：`DanmuGetAllRank`

`DanmuGetAllRank` 是平台动态指令 Key，用于分页读取弹幕排行榜全榜。调用方式是异步 `G.dynamicCallRet(Key, Data)`，返回 `Dict`。

`Data` 字段：
- `PageIndex`：页码，从 `0` 开始
- `Num`：每页数量

返回 `Dict` 中已知字段：
- `Ranks`：排行榜列表；模板示例中读取了列表项的 `name` 和 `score`

已有静态接口的能力优先使用 `danmu.*`。例如上传成绩用 `danmu.addRank`，读取单个观众成绩用 `danmu.getByID`，跨直播间数据用 `danmu.setDict/getDict/getDicts`。只有静态接口没有覆盖、且已确认平台支持的 Key，才使用 `G.dynamicCallRet` 或 `G.dynamicCall`。

## 弹幕玩家跨直播间数据（`danmu.setDict/getDict`）

用于存储“观众维度”的长期数据（例如累计分数、累计胜场、解锁/称号、局外资源等）：

- `danmu.setDict(uid, data:Dict)`：写入
- `danmu.getDict(uid)`：读取单个
- `danmu.getDicts(ids:List)`：批量读取

## 写入时机（建议）

- `danmu.addRank` / `danmu.setDict` 属于“局外数据写入”，通常放在玩法的阶段节点做聚合写入（例如：结算、阶段完成、关键奖励发放）。
- 避免把它们放进每帧逻辑或高频循环里；如果需要更实时的展示，用“局内统计”驱动 UI 即可。

## 相关文档

- `danmu-game-concepts.md`
- `unit-player-streamer-monster.md`
- `../tips/performance-optimization.md`

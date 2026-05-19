# 示例工程导览（machinist）

本文档说明如何理解一个典型的 BeScript 工程结构，以及如何利用 assets 中的模板片段。

## 典型工程结构

一个完整的 BeScript 工程通常包含以下目录结构：

```
工程根目录/
├── setting.json          # 工程配置文件（包含 guid/name/mainMap）
├── 玩法地图.map_/        # 地图目录
│   ├── map.json          # 地图入口
│   └── <零件ID>/         # 各零件的脚本目录
├── 机械/                 # 机械文件目录
├── 表格/                 # Excel 配置表
├── 图片/                 # 贴图资源
├── layouts/              # Canvas 布局文件（位置不固定，按实际需要放置）
└── 通用逻辑/             # 代码仓库脚本（位置不固定，按实际需要放置）
```

## 关键入口点

### 地图入口
- `*.map_/map.json`：地图的主入口，包含导入的机械与关键零件信息

### 零件脚本
- `*.map_/<零件ID>/scripts/`：自定义脚本
- `*.map_/<零件ID>/event_<事件名>/`：事件脚本

### 配置表格
- `表格/*.xlsx`：规则与数值配置

## 常见功能模块的查找方式

### 弹幕与礼物处理
- 查找包含 `onDanmu` 事件的零件
- 对照模板：`../assets/danmu/gift-receive-handling.md`、`../assets/danmu/danmu-data-download-upload.md`
- 深入阅读：`concepts/danmu-game-concepts.md`、`concepts/danmu-message-data.md`

### 对象复用与投射物
- 查找包含 `Unused`、`All` 等列表管理的脚本
- 对照模板：`../assets/mech/type-registration.md`、`../assets/mech/request-and-setup.md`、`../assets/mech/recycle-physics-cleanup.md`
- 深入阅读：`tips/mech-reuse-guide.md`、`tips/projectile-collision-detector.md`

### 排行榜与入场特效
- 查找调用 `danmu.addRank`、`danmu.getByID` 的脚本
- 对照模板：`../assets/danmu/leaderboard-refresh-pagination.md`、`../assets/danmu/top100-entrance-effect.md`
- 深入阅读：`concepts/danmu-game-concepts.md`

### UI 管理
- 查找 `G.findCanvas`、`canvas.read` 的调用
- 对照模板：`../assets/canvas/canvas-reference-callback.md`
- 深入阅读：`concepts/canvas-component-guide.md`、`tips/canvas-animation-mechanism.md`

### 读表与配置
- 查找 `G.readExcel2`、`G.findExcel2` 的调用
- 对照模板：`../assets/excel/table-api-example.md`
- 深入阅读：`tips/table-based-attribute.md`

## 常用模板与工程的关系

- `../assets/*.md` 放的是从真实工程的 TS 视图里摘出来的片段，用来对照写法与结构
- 模板是参照，不是要求照抄；需要把变量名、方法名、表格名、UI 路径按目标工程对齐
- 使用 MCP `mechtoolkit` 可以查询当前工程的实体、脚本、变量等信息

## 使用 MCP 查询工程信息

在开始修改前，建议先用 MCP 查询工程现状：

- `mechtoolkit.read_entities_by_name`：按名称模式查询实体（地图/机械/零件/脚本等）
- `mechtoolkit.read_entities_by_guid`：按 GUID 查询实体（仅地图/机械/canvas 有 GUID）
- `mechtoolkit.read_lint`：检查代码问题
- `mechtoolkit.read_sdk_docs`：查阅 SDK 文档


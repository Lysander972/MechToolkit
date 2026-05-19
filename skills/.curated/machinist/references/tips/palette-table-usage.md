# 调色板表格的使用

## 本篇范围

- 调色板表格在工程侧的用途与使用方式
- 颜色统一管理的思路

## 不包含

- 通用读表规则与字段约定（见 `table-based-attribute.md`）

## 用途

把常用颜色集中放在一张表里，通过 key 读取颜色值，避免在脚本里散落硬编码颜色。

适用场景：

- 统一替换主题色
- UI 色阶管理
- 阵营色区分

## Canvas HTML 中使用调色板

在 Canvas HTML 视图中，颜色属性可以使用 `palette(名称)` 格式引用调色板：

```xml
<UIRect name="panel" color="palette(主题色1)" />
<UILabel name="title" color="palette(警告色)" outlineColor="palette(边框色)" />
```

运行时会自动替换为调色板表中对应的颜色值。

## 使用建议

- 颜色 key 命名保持稳定，避免改名导致全工程失效
- 颜色一旦被 UI/特效/脚本依赖，不要随意挪列或变更类型
- 需要多套主题时，用"主题列"或"主题表"区分，不要混在同一列里塞多种含义

## 调色板表格 Schema

与普通 Excel 表格相同格式（详见 `table-based-attribute.md`），建议列结构：

| 列名 | 类型 | 说明 |
|------|------|------|
| id | long | 行 ID |
| name | string | 调色板 key（在 `palette(name)` 中引用） |
| cn | color | 颜色值（`255;255;255;255` 格式） |

## 脚本中读取调色板颜色

脚本中通过标准读表 API 读取颜色值（读表 API 详见 `table-based-attribute.md`，具体签名查 SDK）：

1. `G.findExcel2<BeString>(BeString.fromBeConst("name"), key, Excel_File)` 查到行 ID
2. `G.readExcel2<BeColor>(rowId, BeString.fromBeConst("cn"), Excel_File)` 读取颜色

Canvas HTML 中则直接用 `palette(名称)` 声明式引用，无需脚本介入。

## 相关文档

- `table-based-attribute.md`

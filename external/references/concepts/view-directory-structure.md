# 视图的目录结构

## 本篇范围

- 视图目录位置与结构
- TS 视图与 HTML 视图的文件分布
- support 文件与类型检查入口的位置

## 不包含

- TS 视图语法与写回规则
- UI/Canvas 的运行时使用方式

## 总体位置

视图产物固定在工程根目录下的 `temp/toolkit/`。

- 工程根目录通常是 `setting.json` 所在目录。
- 这些目录会在刷新视图时自动生成，初始状态可能不存在。

当前目录职责：

- `temp/toolkit/views/`：可编辑视图与只读 PNG 预览。
- `temp/toolkit/bescript_reference/`：TS 声明、脚本索引、代码仓库索引视图。
- `temp/toolkit/canvas_render/`：Canvas 渲染 support 文件。
- `temp/toolkit/tsconfig.json`：TS 类型检查入口。

## TS 视图

可编辑零件视图位于 `temp/toolkit/views/**/*.ts`。

- `temp/toolkit/views/<载体目录>/<零件ID>.ts`：零件 TS 视图文件。
- `temp/toolkit/bescript_reference/sdk.ts`：SDK声明，只读。
- `temp/toolkit/bescript_reference/custom-logic.d.ts`：全工程脚本索引，只读。
- `temp/toolkit/bescript_reference/CodeRepo.ts`：代码仓库索引视图，只读，不允许 patch。
- `temp/toolkit/tsconfig.json`：TS 配置文件。

### 零件视图路径

零件视图路径形如：

- `temp/toolkit/views/<载体目录>/<零件ID>.ts`

示例：

- `temp/toolkit/views/abc.map_/123.ts`：表示 `abc.map` 里 ID 为 `123` 的零件 TS 视图。
- `temp/toolkit/views/某个机械.mech_/0.ts`：表示某个机械里 ID 为 `0` 的零件 TS 视图。

说明：

- `views/` 下会按载体分组，载体目录名常见以 `.map_` 或 `.mech_` 结尾。
- 每个载体目录下是一批 `<零件ID>.ts` 文件。

## HTML 视图

独立 Canvas HTML 视图位于 `temp/toolkit/views/**/*.html`。

- `temp/toolkit/views/<canvasRelativePath>.html`：独立 Canvas 的 HTML 视图文件。
- `temp/toolkit/views/<canvasRelativePath>.png`：独立 Canvas 对应 HTML 视图的只读 PNG 预览图。
- `temp/toolkit/canvas_render/canvas-view.css`：Canvas 基础样式文件，只读。
- `temp/toolkit/canvas_render/canvas-palette.js`：Canvas 调色板索引，只读。
- `temp/toolkit/canvas_render/CanvasLayoutEngine.DO_NOT_READ_OR_EDIT.generated.js`：布局渲染引擎脚本，只读。
- `temp/toolkit/canvas_render/canvas-guid-map.js`：独立模式 GUID 图片映射索引，只读。

说明：

- support 文件与 HTML 视图文件已经分离。
- 写回仅针对 `views/**/*.html`。
- 内联 Canvas 不再生成独立 `*_inline_*.html` 文件，预览由插件临时生成。

### Canvas 视图路径的对应关系

- 对于独立 `.canvas` 文件：在 `views/` 下保留相对路径，并将扩展名改为 `.html`。
  - 示例：`UI_主UI.canvas` → `temp/toolkit/views/UI_主UI.html`
  - 示例：`layouts/A2.canvas` → `temp/toolkit/views/layouts/A2.html`
- 对于脚本中的内联 Canvas：不落盘 HTML 文件，预览由插件临时生成。
- `patch_mech_view` 的 `view_path` 指向**尚不存在**的 `.html` 时即触发新建语义（对应一个不存在的 `.canvas`），新建产物路径与上述映射一致；详见 `canvas-component-guide.md` 第 9 节。

## PNG 预览覆盖范围

- 独立 `.canvas` 文件：在 `temp/toolkit/views/` 下按相同相对路径生成同名 `.png` 预览。
- 脚本中的内联 Canvas：不生成可编辑 HTML 文件；预览按原始 `.code` 文件位置映射，并按脚本内 Canvas 出现顺序区分。TS 视图中出现内联 Canvas 时，应以视图里给出的预览路径为准。
- 除独立 Canvas 和脚本内联 Canvas 外，没有其他 Canvas 预览来源。

## 草稿文件

`temp/toolkit/views/` 下可能出现 `*.ts.draft` 和 `*.html.draft` 文件：

- **来源**：`patch_mech_view` / `patch_mech_view_multiedit` 校验失败时自动生成。修改场景为文本匹配成功但后续校验未通过；新建场景（`view_path` 指向不存在的 `.html`）为 HTML 主体校验未通过
- **格式**：全量目标文本 + 头部元数据（`baseline-hash` / `created`）
- **路径规则**：相对于视图根目录（`temp/toolkit/views/`），与 ViewPath 同源。即 `commit_draft` / `cleanup_drafts` 的参数使用与 `patch_mech_view.view_path` 相同的相对路径格式，仅末尾追加 `.draft` 后缀
- **命名**：与对应视图同路径 + `.draft` 后缀，如 `abc.map_/123.ts.draft`
- **生命周期**：
  - 草稿不会干扰 `patch_mech_view` / `patch_mech_view_multiedit` 的正常使用，后续的编辑操作照常进行即可
  - 视图重建时自动校验：基线哈希与当前视图一致则保留，否则丢弃
  - 成功提交后视图内容变化，下次重建时草稿自然淘汰
  - 若放弃此次修改，直接忽略该草稿即可，通常不需要主动清理
- **恢复**：修正问题后用 `commit_draft` 工具重新提交

## 相关文档

- `tsview-writing-spec.md`
- `canvas-component-guide.md`
- `../tips/palette-table-usage.md`

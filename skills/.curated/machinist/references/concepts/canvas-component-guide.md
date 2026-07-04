# UI 组件管理指引

这份指引面向 **TS 视图** 与 **HTML 视图**：说明 UI 引用管理、Canvas 运行时规则，以及静态布局字段的基础含义。

## 本篇范围

- UI 引用的获取、保存、更新与销毁
- Canvas/UI 运行时规则（避免常见踩坑）
- HTML 视图中常用布局字段与计算规则

## 不包含

- 动画逻辑与插值细节（见“UI 动画实现机制”）
- 图片/动图素材与帧动画实现（见“图片和动图的实现指引”）

## 0. 编辑范围与工具职责

- 编辑范围：TS 视图里的 `BeCanvas` / `BeUI*` 引用获取、保存、更新、销毁。
- 工具职责：把 TS 视图修改写回工程文件，并在写回前做语法与结构校验。
- 任何不合规的写法均会被驳回

## 1. UI 引用的两种来源（TS 视图写法）

两条路的共同点：**先拿引用，再操作引用**（显示/隐藏、改文本、挂回调、增删子节点、销毁）。

### 1.1 从 Canvas 布局读取（推荐）

核心是两步：

1) `G.findCanvas(...)` 拿到某个布局对应的 `BeCanvas` . 或者另一种方式是直接从字典或者自定义数据中读取出canvas,自行托管canvas实例引用是针对大量重复实例化的canvas实例的最好管理方式,因为其内部结构通常一致可按相同路径管理.
2) `canvas.read<"BeUIRect/BeUIButton/...">(...)` 按路径读出canvas实例的对应路径 UI 组件

示例片段（打开/关闭面板：找 Canvas → 读组件 → `active`）：

```ts
参数调节界面 = G.findCanvas(BeString.fromBeConst("HDT_参数调节界面"))
界面底板 = 参数调节界面.read<"BeUIRect">(BeString.fromBeConst("界面底板"))
按钮_呼出调参面板 = 参数调节界面.read<"BeUIButton">(BeString.fromBeConst("按钮_呼出调参面板"))
按钮_呼出调参面板.active(按钮显示)
界面底板.active(开启界面)
```

路径规则：

- 用 `/` 表示层级（例如 `"界面底板/按钮_关闭调参面板"`）。
- 旧脚本/日志里的 `@6` 通常等价于 `/`；在 TS 视图里路径一般直接写 `/`。

### 1.2 动态创建(不推荐)

这里是一种不推荐的做法,仅提供介绍
有些 UI 可以直接创建出引用（不依赖布局树）。示例片段：

```ts
底板 = G.ui.rect(BeVector3.fromBeConst("0.3,0.5,0"), 按钮尺寸, BeFloat.fromBeConst("0"), BeFloat.fromBeConst("0"), 底板颜色_常态)
文本框 = G.ui.text(BeVector3.fromBeConst("0,0,0"), 字号, 线框颜色_常态, 标题, BeEnum.fromBeConst("1"))
```

这类 UI **必须自己保存引用、自己销毁**，否则通常会一直留着。

## 2. 引用怎么存（避免丢、避免漏删）

### 2.1 用“根节点”管整棵 UI

- 固定面板：用布局里读出来的根节点（常见是某个 `BeUIRect`）做“窗口根”。
- 临时窗口：动态创建一个根 `BeUIRect`，再把内部子组件都挂到它下面。

这样销毁时只要处理根节点，少出错。

示例片段（把一个面板挂到容器下，必要时先清子节点）：

```ts
子节点 = $parent.sonNum()
if (G.float.gt(子节点, BeFloat.fromBeConst("1"))) {
  $parent.delSon(BeFloat.fromBeConst("0"))
}
$parent.addSon($panel)
```

### 2.2 窗口级引用放在 `this.*`

当 UI 会跨帧/跨事件使用，建议存到零件类成员上（`this.xxx`），避免只存在局部变量里用完就丢。

示例片段：

```ts
this.参数列表底板 = 参数调节界面.read<"BeUIRect">(BeString.fromBeConst("界面底板/参数列表底板"))
```

## 3. 交互回调：把“必要上下文”传进去

按钮回调一般用 `clickCB(...)`：第一个参数是要调用的脚本名，后面可以带参数（把 UI 引用/状态传进去，避免在回调里再到处找）。
- 常见做法方案1: UI组件本身不带数据,而只在回调上增加参数.状态数据单独管理,比如放在全局.这种更适合多处复用的数据
- 常见做法方案2: UI组件自身绑定自定义数据,在回调时可以减少参数,方法内直接到组件上拿就可以了.但相应的其他读取也变得困难,因为需要持有此UI对象的引用
- 两种做法各有优劣,需结合实际需求进行取舍

示例片段（传 `Bool`）：

```ts
布尔_真 = G.create.bool(BeBool.fromBeConst("1"))
按钮_呼出调参面板.clickCB(BeString.fromBeConst("开关调参面板"), 布尔_真)
```

示例片段（同时传 `Canvas` 与某个 `UIRect`，让回调直接拿到要用的引用）：

```ts
panel = ui.read<"BeUIRect">(BeString.fromBeConst("panel"))
b = ui.read<"BeUIButton">(BeString.fromBeConst("panel/okButton"))
b.clickCB(BeString.fromBeConst("按钮点击'补偿玩家"), ui)
b.clickCB(BeString.fromBeConst("按钮点击'关闭UI"), panel)
```

## 4. 销毁与有效性检查

需得到UI对象的引用才能删除,且可以设置一个延迟(为0则立即删除)
销毁用 `del(...)`，常见写法：

```ts
ui.del(BeFloat.fromBeConst("0"))
```

若删除时引用已失效，说明生命周期管理存在逻辑错误，应在源头修正而非在调用处防御。

## 5. 常见坑

- **别混淆“布局”和“运行时”**：布局负责初始形状；运行时一律用 `BeCanvas`/`BeUI*` 引用去控制。
- **别让引用丢在局部变量里**：跨帧/跨回调要用 `this.*` 或者其他的全局变量或者Dict 存起来。
- **别指望"自动消失"和"自动创建"**：需主动用脚本控制生命周期。动态创建的 UI 不删就会一直在；从布局读出来的节点也可能需要在合适时机 `del` 或 `active(BeBool.fromBeConst("0"))`。
- **注意级联特性**: 删除UI组件会级联删除全部子组件(包括任何的动态添加为子组件的那些对象);隐藏UI组件会级联隐藏全部的子组件;一个组件是否显示取决于自身及其全部父级是否均为显示

## 6. 内联 Canvas（反引号块）不要当模板字符串拼接

零件 TS 视图里可能出现这种写法：

```ts
$itemUI = G.create.canvas(BeCanvas.fromBase64Const(
`
<Canvas>
  <UIRect name="panel" Pos="110,850,0" size="450,145,1" color="rgba(1,1,1,0.78767)" BorderWidth="-1" Radius="10" slicedPicGuid="9ea2db5b6ad641d19815c9fe093eaa08" slicedBorderLB="58.5,75,0" slicedBorderRT="149.5,75,0" slicedRectLB="0,0,0" slicedRectRT="457,150,0">
    <UILabel name="label" Pos="-180,10,0" parentAnchor="8" anchor="8" widthExtend="2" size="40,75,1" color="rgba(1,1,1,1)" outlineColor="rgba(0,0.25497746,1,1)" outlineDistance="1,-1,0" text="?" FontSize="25" lineSpacing="0.79999995" />
    <UIRect name="mask" Pos="-16.5,0,0" parentAnchor="5" anchor="5" size="115.5,115.5,1" color="rgba(0.17842488,0.17842488,0.17842488,1)" BorderWidth="-1" Radius="143.99997" mask="1">
      <UIRawImage name="AvatarIcon" Pos="0,0,0" parentAnchor="4" anchor="4" size="130,130,1" color="rgba(1,1,1,1)" />
    </UIRect>
    <UIRawImage name="无名3" Pos="-100,12,0" parentAnchor="8" anchor="8" size="85,48,1" color="rgba(1,1,1,1)" fileGuid="a2130e381f3a4563b552daa74877696a" />
    <UILabel name="name" Pos="-150,80,0" parentAnchor="8" anchor="8" widthExtend="2" size="50,50,1" color="rgba(1,1,1,1)" outlineColor="rgba(0,0,0,1)" outlineDistance="3,-3,0" text="?" FontSize="34" lineSpacing="0.79999995" />
  </UIRect>
</Canvas>
`
))
```

反引号内容是 **Canvas 的 HTML 视图文本**，不是模板字符串拼接的入口：
- 不要把它改成 `${...}` 拼接。
- 要改布局时，按 Canvas/HTML 视图的工作方式去改（不要在这里凭空“手写 UI 逻辑”）。

## 7. Canvas 与 UI 树：运行时规则（必须按此理解）

下面这些是“原版就是这样”的行为边界。TS 视图里涉及 Canvas/UI 的写法必须按这些约束来理解，否则会在运行时踩坑：

1) **Canvas / UI 没有"自动回收"**
创建出来的 Canvas 和 UI 节点，不会因为"内容删空了"就自动消失；不需要时要显式 `del(...)`。

```ts
panel.del(BeFloat.fromBeConst("0"))
```

2) **按“布局名”搜索的结果只有一个，但布局名本身不保证唯一**  
`G.findCanvas("主UI")` 这种按名搜索，返回的是"某一个"匹配项；当场上存在多个同名 Canvas 时，不保证拿到的是哪一个。

```ts
主UI = G.findCanvas(BeString.fromBeConst("主UI"))
layer2 = 主UI.read<"BeUIRect">(BeString.fromBeConst("root/layer1"))
```

3) **因此：本来就不推荐按名搜索 Canvas**  
更稳妥的做法是：在“初始化/进入界面”阶段拿到 Canvas 引用并缓存起来，后续只对缓存的那棵 UI 树做 `read(...)` 和更新。

4) **路径规则：`/` 表示层级；路径是静态名组成的**  
在 TS 视图里常见的读取方式是 `canvas.read<...>("a/b/c")`，每一段都是布局里写死的节点名。

```ts
b = this.世界榜UI.read<"BeUIButton">(BeString.fromBeConst("panel/base/确认"))
```

5) **布局本身不防重名；但脚本侧必须把“同级重名”当成绝对禁止**  
因为路径解析依赖“父节点下的子节点名”，同一个父节点下出现同名控件，会导致“按路径拿到谁”变得不可控。

6) **跨 Canvas 的 UI 可以通过 `addSon(...)` 组合到同一父节点下**
可以把 A Canvas 里读到的控件，挂到 B Canvas 的某个容器下面，达到"父级统一刷新/统一裁剪/统一显示隐藏"等效果。

```ts
动图 = G.create.canvas(BeCanvas.fromBeConst("guid:fa10b4d5ee634d46836d86acca035d77"))
主UI = G.findCanvas(BeString.fromBeConst("主UI"))
layer2 = 主UI.read<"BeUIRect">(BeString.fromBeConst("root/layer1"))
t = 动图.read<"BeUIRawImage">(BeString.fromBeConst("无名0"))
layer2.addSon(t)
```

7) **父子关系 ≠ 路径归属：不要把“运行时挂载”理解成“加入了另一个 Canvas 的可读路径”**  
`addSon(...)` 改的是运行时父子关系，但 `Canvas.read(...)` 只对“这个 Canvas 自己那棵布局树”生效。  
也就是说：把别的 Canvas 的控件挂过来，并不会让当前 Canvas 能"用路径读到它"。

8) **布局名与控件名都是静态的：没有运行时改名机制**  
Canvas 的“布局名”、以及其中所有 UI 节点的 `name`/路径段，都是布局文件里写死的；不要在脚本里假设存在“重命名”能力。

9) **UI 可以被重复设置父级（重新挂载）**  
同一个 UI 节点可以多次被 `addSon(...)` 挂到不同父节点上；当它被挂到新父节点后，应视为**不再属于原父节点的子节点**。  
对同一个父节点重复 `addSon(...)` 不应依赖任何“额外效果”；而把它挂到新的父节点，通常会改变它在新父节点下的相对顺序。

```ts
layerA.addSon(t)
layerB.addSon(t) // t 重新挂到 layerB
```

10) **层级与顺序：父节点限制子节点层次；同父下按添加顺序决定相对顺序**  
新创建出来的 UI 往往会出现在更“上层”的绘制顺序中；但一旦把它挂到某个父节点下，它的层次就受父节点约束。  
同一个父节点范围内，子节点通常按“添加顺序”决定相对前后；父节点之外的整体顺序，则先由父节点之间的顺序决定。

11) **图层控制：用预设的“全屏透明父节点”分层挂载**  
常见做法是预先在布局里准备多个全屏透明容器（不同层），需要某个 UI 显示在某一层时，就把该 UI 挂到对应容器下，从而稳定控制图层关系。

## 8. UI 布局字段含义说明

Canvas HTML 视图中，每个 UI 节点可包含以下属性。属性分为几类：

### 通用属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `name` | String | 节点名称，用于 `canvas.read<...>(path)` 路径定位 |
| `guid` | Long | 节点唯一标识（运行时内部使用） |

### 位置与尺寸

| 属性 | 类型 | 格式 | 说明 |
|------|------|------|------|
| `Pos` / `pos` | Vector3 | `x,y,z` | 相对父节点的位置偏移 |
| `size` | Vector3 | `w,h,d` | 节点尺寸（宽、高、深度） |
| `anchor` | Long | 0-8 | 自身锚点（0=左下, 4=中心, 8=右上等九宫格） |
| `parentAnchor` | Long | 0-8 | 相对父节点的锚点位置 |
| `rot` | Float | 度数 | 旋转角度 |

### 布局计算规则

- 坐标与常见 HTML 坐标不同：x 轴向右，y 轴向上。位置、尺寸、旋转都以父级空间为基础计算。
- `parentAnchor` 决定父级空间里的参考点，`anchor` 决定自身原点。两个值都按九宫格枚举计算，写错会造成稳定但难察觉的偏移。
- `Pos` 是相对父级参考点的偏移；子级随父级旋转时，子级坐标轴也会跟着变化。
- 尺寸模式由 `widthExtend` / `heightExtend` 决定：`0` 为固定像素，`1` 为父级比例，`2` 为边距，`3` 为长宽比例。
- 全屏填充优先用比例或父级布局，不要把 `1080*2160` 这类屏幕尺寸硬编码成全屏。
- 格子排版会重排全部子节点并强制子节点使用固定单元尺寸；横向/纵向排版不约束子节点最终尺寸，但子节点尺寸模式必须是固定像素或比例。
- 旋转填顺时针角度，不是弧度。
- `BorderWidth` 为 `-1` 或 `0` 时通常表现为全填充；正数时按厚度向内描边，未覆盖区域透明。
- 颜色范围按 `0-255` 写。多层颜色叠加时通常按正片叠底理解：组件整体颜色会影响图片、文字和属性独有颜色的最终显示。

### 颜色与外观

| 属性 | 类型 | 格式 | 说明 |
|------|------|------|------|
| `color` | Color | `rgba(r,g,b,a)` 或 `palette(...)` | 主颜色 |
| `BorderWidth` | Float | 数值，-1=无边框 | 边框宽度 |
| `Radius` | Float | 像素 | 圆角半径 |
| `mask` | Bool | 0/1 | 是否作为遮罩 |
| `fillAmount` | Float | 0-1 | 填充比例（用于进度条等） |
| `fillMethod` | Long | 枚举值 | 填充方式 |

### 文本相关（UILabel / UIInput）

| 属性 | 类型 | 说明 |
|------|------|------|
| `text` | String | 显示文本内容 |
| `label` | String | 标签文本（UIInput 的占位符） |
| `FontSize` | Float | 字号 |
| `Alignment` | Long | 对齐方式（枚举值） |
| `fontStyle` | Long | 字体样式（枚举值） |
| `lightFont` | Bool | 是否使用细体 |
| `lineSpacing` | Float | 行距 |
| `characterSpacing` | Float | 字符间距 |
| `multiLine` | Bool | 是否多行 |
| `contentType` | Long | 输入类型（UIInput，枚举值） |

### 文本特效

| 属性 | 类型 | 说明 |
|------|------|------|
| `outlineColor` | Color | 描边颜色 |
| `outlineDistance` | Vector3 | 描边偏移 `x,y,0` |
| `outlineWidth` | Float | 描边宽度 |
| `shadowColor` | Color | 阴影颜色 |
| `shadewDistance` | Vector3 | 阴影偏移 |
| `labelColor` | Color | 标签颜色 |

### 渐变色（enableVertexGradient=1 时生效）

| 属性 | 类型 | 说明 |
|------|------|------|
| `enableVertexGradient` | Bool | 启用顶点渐变 |
| `topLeft` | Color | 左上角颜色 |
| `topRight` | Color | 右上角颜色 |
| `bottomLeft` | Color | 左下角颜色 |
| `bottomRight` | Color | 右下角颜色 |

### 图片相关（UIRawImage）

| 属性 | 类型 | 说明 |
|------|------|------|
| `fileGuid` | String | 图片资源 GUID |

### 九宫格切片（slicedPicGuid 存在时）

| 属性 | 类型 | 说明 |
|------|------|------|
| `slicedPicGuid` | String | 九宫格图片 GUID |
| `slicedBorderLB` | Vector3 | 左下边界 |
| `slicedBorderRT` | Vector3 | 右上边界 |
| `slicedRectLB` | Vector3 | 源图左下裁剪 |
| `slicedRectRT` | Vector3 | 源图右上裁剪 |

### 交互回调（UIButton）

| 属性 | 类型 | 说明 |
|------|------|------|
| `clickCBName` | String | 点击回调脚本名 |
| `pressCBName` | String | 按下回调脚本名 |
| `releaseCBName` | String | 释放回调脚本名 |

### 布局容器

| 属性 | 类型 | 说明 |
|------|------|------|
| `childAlignment` | Long | 子节点对齐方式 |
| `childExpendWidth` | Bool | 子节点自动扩展宽度 |
| `childExpendHeight` | Bool | 子节点自动扩展高度 |
| `widthExtend` | Long | 宽度扩展模式（0=Absolute, 1=Percent, 2=ToEdge, 3=Aspect） |
| `heightExtend` | Long | 高度扩展模式（0=Absolute, 1=Percent, 2=ToEdge, 3=Aspect） |
| `padding` | Vector3 | 内边距 |
| `spacing` | Vector3 | 子节点间距 |
| `cellSize` | Vector3 | 网格单元尺寸 |
| `horizontal_spacing` | Float | 水平间距 |
| `verticle_spacing` | Float | 垂直间距 |

### 滚动容器

| 属性 | 类型 | 说明 |
|------|------|------|
| `scrollHorizontal` | Bool | 允许水平滚动 |
| `scrollVertical` | Bool | 允许垂直滚动 |
| `softMaskGuid` | String | 软遮罩 GUID |

### 高级文本特效（TextMeshPro 风格）

| 属性 | 类型 | 说明 |
|------|------|------|
| `bBEVEL` | Bool | 启用斜面效果 |
| `bGLOW` | Bool | 启用发光效果 |
| `bUNDERLAY` | Bool | 启用底层阴影 |
| `Bevel` / `BevelWidth` / `BevelOffset` / `BevelRoundness` / `BevelClamp` | Float | 斜面参数 |
| `GlowColor` | Color | 发光颜色 |
| `GlowOffset` / `GlowInner` / `GlowOuter` / `GlowPower` | Float | 发光参数 |
| `UnderlayColor` | Color | 底层阴影颜色 |
| `UnderlayOffset` | Vector3 | 底层阴影偏移 |
| `UnderlaySoftness` | Float | 底层阴影柔和度 |
| `FaceDilate` | Float | 字体膨胀 |
| `Ambient` / `Diffuse` / `Reflectivity` / `SpecularColor` / `SpecularPower` / `LightAngle` | Float/Color | 光照参数 |

### 数据类型格式（唯一格式，禁止任何变体）

| 类型 | 唯一格式 | 示例 |
|------|----------|------|
| **Float** | 十进制浮点数 | `1.0`、`-3.14`、`1e-5` |
| **Long** | 十进制整数 | `12345`、`-1` |
| **Bool** | `0` 或 `1` | `0`、`1` |
| **String** | 普通文本 | `"Hello"` |
| **Vector3** | `x,y,z` 三个十进制数 | `"100,200,0"` |
| **Color (固定值)** | `rgba(r,g,b,a)` 四个十进制数 | `"rgba(255,128,0,255)"` |
| **Color (调色板)** | `palette(名称)` | `"palette(主题色1)"`，调色板表格结构见 `../tips/palette-table-usage.md` |

**Color rgba 说明**：
- r/g/b/a 均为十进制数，通常范围 0-255
- 允许超过 255，原版游戏底层会应用特殊机制转换

**重要约束**：
- 格式唯一，禁止任何变体（禁止 hex、禁止 true/false）
- 特殊字符使用 `*Utf8B64` 后缀属性（如 `textUtf8B64`）
- 格式转换由内部逻辑自动完成，Agent 只需使用可读格式

## 9. 独立 Canvas 文件创建流程

创建独立 `.canvas` 文件有两种方式，按场景选择：

### 方式一：内联后导出

适用于需要在脚本上下文里迭代布局的场景。

1. 先在某个方法里用 `patch_mech_view` 新增一段内联 Canvas，让布局先以内联形式存在。内联 Canvas 的写法见第 6 节（反引号包裹的 HTML 视图文本，不要当模板字符串拼接）。
2. 复读 TS 视图，确认内联 Canvas 的位置和内容已经写入。
3. 用 `refactor_canvas_extract` 将这段内联 Canvas 导出为独立 `.canvas` 文件：
   - `line` 参数是**原始 `.code` 文件的行号**，不是 TS 视图行号；若传错，工具会返回当前脚本里所有合法的 canvas 创建行号，按返回值重试即可。
   - 提取成功后，原脚本里那段内联 Canvas 会被**自动替换为对独立文件的 `guid:` 引用**，相应位置会变短——这是正常行为，不要误判为写回失败。独立 `.canvas` 文件固定落在 `ui/` 目录下，具体路径以返回值 `canvas_path` 为准。

### 方式二：直接新建

适用于已知完整 HTML 内容的场景。

1. 用 `patch_mech_view` 直接新建：`view_path` 指向不存在的 `.html`（对应目标 `.canvas`），`old_string` 留空，`new_string` 给出完整合法 HTML。
2. 前提：父目录须已在编辑器中创建（工具不代建目录/零件结构）；HTML 主体须通过校验（转码 + Layout Lint + 渲染）。不满足则拒绝，不写盘。
3. 成功后返回 `created_canvas_guid`，可直接用于 `refactor_canvas_import` 导入或脚本内 `guid:` 引用，无需再读。

`.ts` 视图不支持新建——零件须先在编辑器中创建，再编辑其脚本。

### 后续编辑

无论哪种方式创建，之后改布局一律走对应的 HTML 视图（目录映射规则见 `view-directory-structure.md`），不要直接编辑 `.canvas` 二进制文件。改完查看对应 PNG 预览，确认真实渲染没有错位或遮挡。

## 相关文档

- `tsview-writing-spec.md`
- `../tips/canvas-animation-mechanism.md`
- `../tips/image-animation-guide.md`

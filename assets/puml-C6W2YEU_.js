var e=e=>{switch(e){case`index`:return`@startuml
title "Landscape view"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Pure>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Product>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Tools>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Toolkit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Renderer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Documentation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Repository>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Specifications>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Fixtures>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Resources>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==业务纯计算\\n\\n无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。" <<Pure>> as Pure
rectangle "==Toolkit 产品源码参考文档" <<Product>> as Product
rectangle "==自举检查工具" <<Tools>> as Tools
rectangle "==Toolkit TypeScript 产品" <<Toolkit>> as Toolkit
rectangle "==Canvas 渲染引擎\\n\\nHTML 属性经显式 Option 解析为节点输入；节点按固定顺序应用特性，管线统一递归与排版，页面只有一次自动渲染。" <<Renderer>> as Renderer
rectangle "==产品规范与参考" <<Documentation>> as Documentation
rectangle "==仓库工程基础" <<Repository>> as Repository
rectangle "==工具链规范" <<Specifications>> as Specifications
rectangle "==跨组件夹具" <<Fixtures>> as Fixtures
rectangle "==共享静态资源" <<Resources>> as Resources

Pure .[#8D8D8D,thickness=2].> Specifications
Renderer .[#8D8D8D,thickness=2].> Resources : <color:#8D8D8D>字体与样式资源
Product .[#8D8D8D,thickness=2].> Renderer : <color:#8D8D8D>渲染行为测试
Tools .[#8D8D8D,thickness=2].> Repository
Tools .[#8D8D8D,thickness=2].> Specifications
Toolkit .[#8D8D8D,thickness=2].> Repository
Toolkit .[#8D8D8D,thickness=2].> Specifications
Toolkit .[#8D8D8D,thickness=2].> Fixtures
Product .[#8D8D8D,thickness=2].> Fixtures
Product .[#8D8D8D,thickness=2].> Resources
Product .[#8D8D8D,thickness=2].> Documentation
@enduml
`;case`bescript_first_layer`:return`@startuml
title "第一层：BEScript 文本与局部 AST"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ToolkitScriptConversionFirst>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptAstLocal_ast>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptTextCode_file>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptTextVocabulary>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsBescript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "局部 AST 层" <<ToolkitScriptAst>> as ToolkitScriptAst {
  skinparam RectangleBorderColor<<ToolkitScriptAst>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptAst>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptAst>> dashed

  rectangle "==局部 AST" <<ToolkitScriptAstLocal_ast>> as ToolkitScriptAstLocal_ast
}
rectangle "==BEScript 文本与局部 AST 转换\\n\\nIssue 45 的实现归属：唯一正文词法、控制结构、调用与反向序列化入口；依赖文本合同和局部 AST，不依赖 Host" <<ToolkitScriptConversionFirst>> as ToolkitScriptConversionFirst
rectangle "原版文本层" <<ToolkitScriptText>> as ToolkitScriptText {
  skinparam RectangleBorderColor<<ToolkitScriptText>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptText>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptText>> dashed

  rectangle "==.code 文件" <<ToolkitScriptTextCode_file>> as ToolkitScriptTextCode_file
  rectangle "==类型与转义" <<ToolkitScriptTextVocabulary>> as ToolkitScriptTextVocabulary
}
rectangle "==BEScript 内部格式" <<SpecificationsBescript>> as SpecificationsBescript

ToolkitScriptTextCode_file .[#8D8D8D,thickness=2].> ToolkitScriptTextVocabulary
ToolkitScriptAstLocal_ast .[#8D8D8D,thickness=2].> ToolkitScriptTextVocabulary
ToolkitScriptAstLocal_ast .[#8D8D8D,thickness=2].> ToolkitScriptTextCode_file
ToolkitScriptConversionFirst .[#8D8D8D,thickness=2].> SpecificationsBescript
ToolkitScriptTextVocabulary .[#8D8D8D,thickness=2].> SpecificationsBescript
ToolkitScriptTextCode_file .[#8D8D8D,thickness=2].> SpecificationsBescript
ToolkitScriptAstLocal_ast .[#8D8D8D,thickness=2].> SpecificationsBescript
@enduml
`;case`bescript_second_layer`:return`@startuml
title "第二层：零件 Context 与官方 TS AST 的转换边界"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitProject_modelTests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptConversionSecond>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptContextDevice_context>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitProject_modelLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptAstLocal_ast>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsBescript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 生命周期与工程 IO\\n\\n工作区读取、语义输入闭包与视图运行时缓存的唯一所有者；编排三层纯转换，缓存随 Host 生命周期释放" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "零件上下文层" <<ToolkitScriptContext>> as ToolkitScriptContext {
  skinparam RectangleBorderColor<<ToolkitScriptContext>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptContext>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptContext>> dashed

  rectangle "==全局变量、零件元数据与零件上下文" <<ToolkitScriptContextDevice_context>> as ToolkitScriptContextDevice_context
}
rectangle "==工程格式测试" <<ToolkitProject_modelTests>> as ToolkitProject_modelTests
rectangle "==Context 与官方 TS AST 业务转换\\n\\nIssue 46 的实现归属：引用身份、变量语义、平台方法和 Canvas 业务映射；仅消费 Context 与显式语义输入，不读取工程或缓存" <<ToolkitScriptConversionSecond>> as ToolkitScriptConversionSecond
rectangle "==工程设置解析" <<ToolkitProject_modelLogic>> as ToolkitProject_modelLogic
rectangle "局部 AST 层" <<ToolkitScriptAst>> as ToolkitScriptAst {
  skinparam RectangleBorderColor<<ToolkitScriptAst>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptAst>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptAst>> dashed

  rectangle "==局部 AST" <<ToolkitScriptAstLocal_ast>> as ToolkitScriptAstLocal_ast
}
rectangle "==BEScript 内部格式" <<SpecificationsBescript>> as SpecificationsBescript

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitScriptConversionSecond
ToolkitScriptContextDevice_context .[#8D8D8D,thickness=2].> ToolkitScriptAstLocal_ast
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitProject_modelTests .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitScriptConversionSecond .[#8D8D8D,thickness=2].> SpecificationsBescript
ToolkitScriptAstLocal_ast .[#8D8D8D,thickness=2].> SpecificationsBescript
ToolkitScriptContextDevice_context .[#8D8D8D,thickness=2].> SpecificationsBescript
@enduml
`;case`bescript_third_layer`:return`@startuml
title "第三层：官方 TS 解析、打印与 Host 视图缓存归属"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptConversionThird>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsBescript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "工作区 Host" <<ToolkitHost>> as ToolkitHost {
  skinparam RectangleBorderColor<<ToolkitHost>> #3b82f6
  skinparam RectangleFontColor<<ToolkitHost>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitHost>> dashed

  rectangle "==Host 生命周期与工程 IO\\n\\n工作区读取、语义输入闭包与视图运行时缓存的唯一所有者；编排三层纯转换，缓存随 Host 生命周期释放" <<ToolkitHostLogic>> as ToolkitHostLogic
}
rectangle "BEScript 纯计算包" <<ToolkitScript>> as ToolkitScript {
  skinparam RectangleBorderColor<<ToolkitScript>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScript>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScript>> dashed

  rectangle "==官方 TS 解析打印与局部装配\\n\\nIssue 47 的实现归属：官方 parser、factory、printer 和有独立差分依据的局部片段装配；缓存状态由 Host 显式传入，无进程全局状态，无 BEScript 业务解释" <<ToolkitScriptConversionThird>> as ToolkitScriptConversionThird
}
rectangle "==BEScript 内部格式" <<SpecificationsBescript>> as SpecificationsBescript

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitScriptConversionThird
ToolkitScriptConversionThird .[#8D8D8D,thickness=2].> SpecificationsBescript
@enduml
`;case`canvas_render`:return`@startuml
title "Canvas 渲染引擎"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<RendererEntry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererPipeline>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererNodes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererDom_schema>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererFeatures>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererSchema>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererLayout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererImages>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererFields>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererValues>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererContracts>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererState>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==字体就绪后的唯一入口\\n\\nCanvasLayoutEngine.ts：initialRender 等待字体后执行 render；入口启动状态，驱动管线，将同步错误传给状态与错误报告。" <<RendererEntry>> as RendererEntry
rectangle "==DOM 渲染管线\\n\\nCanvasRenderPipeline.ts：createNodeByType 创建节点，prepareTree 只准备当前节点，arrangeTree 按层准备直属子节点并确定最终矩形后递归，renderTree 统一投影样式并按固定顺序应用特性。" <<RendererPipeline>> as RendererPipeline
rectangle "==节点输入与能力顺序\\n\\nCanvasTypesNodes.ts：CanvasNodeModel 与八个节点构造器接收确定 Schema 输出；各节点持有唯一 DEFAULT，render 只顺序调用能力。" <<RendererNodes>> as RendererNodes
rectangle "==DOM 严格 Schema 提取\\n\\nCanvasDomSchema.extract 以节点专属 Zod strictObject 校验属性并输出确定类型对象；可选属性成为 Option，未知属性与必选缺失报错。" <<RendererDom_schema>> as RendererDom_schema
rectangle "==特性 DOM 应用\\n\\nCanvasRenderNode.ts：特性 Renderer 消费单一 Fields 与运行时只读快照；ChildLayoutRenderer 返回参数，由节点提交 layoutParams。Spine 复制独立图层后释放 renderer 与 stage。" <<RendererFeatures>> as RendererFeatures
rectangle "==使用者节点 Schema\\n\\nCanvasViewSchema.ts：八种节点 Schema 与 CanvasUISchemaOf 只向使用者公开持久化属性，不包含 DOM 与布局中间值。" <<RendererSchema>> as RendererSchema
rectangle "==布局计算与诊断\\n\\nCanvasRenderLayout.ts：LayoutRenderer.render 返回最终矩形，由节点原子提交 layout 与 resolvedLayoutSize；CanvasLayoutDiagnostics 记录失败输入，按需生成诊断快照。" <<RendererLayout>> as RendererLayout
rectangle "==图像合成与异步提交\\n\\nCanvasRenderImage.ts：ImageRenderUtils 处理图像尺寸、颜色乘法与图层清除；FourCornerGradient 逐列计算双线性插值。资源任务由 RenderSession 统一收束。" <<RendererImages>> as RendererImages
rectangle "==白名单与统一取值\\n\\nCanvasRenderBase.ts：FeatureValues.resolve 按显式启用条件选取输入或节点默认值；不制造动态字段表，不修改节点输入。" <<RendererFields>> as RendererFields
rectangle "==属性解析与渲染基础能力\\n\\nCanvasRuntimeUtils.ts：RuntimeNodeParser 精确识别 DOM 标签；CanvasEnumNameParser 校验枚举；CanvasColorValue、RichTextParser、GuidUtils 分别处理颜色、文本与资源；CanvasRenderEntry 报告错误。" <<RendererValues>> as RendererValues
rectangle "==特性与运行时契约\\n\\nCanvasTypesBase.ts：Fields 只描述持久化属性；CanvasRuntimeNode、RenderNodeContext 描述运行时上下文。" <<RendererContracts>> as RendererContracts
rectangle "==页面渲染状态\\n\\nCanvasRenderState.ts：RenderSession 先登记后启动任务，统一等待纹理加载与原生 Assets 卸载后结算；失败保留原因，终态不重置。" <<RendererState>> as RendererState

RendererContracts .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>会话类型
RendererSchema .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>持久化字段类型
RendererNodes .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>节点字段与上下文类型
RendererDom_schema .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>属性类型
RendererFields .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>字段类型
RendererValues .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>属性与诊断类型
RendererLayout .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>布局字段与结果
RendererFeatures .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>特性字段与上下文
RendererImages .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>颜色类型
RendererPipeline .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>上下文类型
RendererNodes .[#8D8D8D,thickness=2].> RendererSchema : <color:#8D8D8D>唯一节点输入类型
RendererDom_schema .[#8D8D8D,thickness=2].> RendererSchema : <color:#8D8D8D>确定输出契约
RendererNodes .[#8D8D8D,thickness=2].> RendererDom_schema : <color:#8D8D8D>确定类型的节点 Schema
RendererNodes .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>第一项布局能力
RendererNodes .[#8D8D8D,thickness=2].> RendererFeatures : <color:#8D8D8D>按节点类型固定顺序应用能力
RendererNodes .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>会话上下文类型
RendererPipeline .[#8D8D8D,thickness=2].> RendererNodes : <color:#8D8D8D>节点构造与能力顺序
RendererDom_schema .[#8D8D8D,thickness=2].> RendererValues : <color:#8D8D8D>颜色与枚举解析
RendererPipeline .[#8D8D8D,thickness=2].> RendererDom_schema : <color:#8D8D8D>唯一 DOM 属性提取
RendererLayout .[#8D8D8D,thickness=2].> RendererFields : <color:#8D8D8D>白名单与默认值
RendererFeatures .[#8D8D8D,thickness=2].> RendererFields : <color:#8D8D8D>启用字段与默认值
RendererPipeline .[#8D8D8D,thickness=2].> RendererFields : <color:#8D8D8D>子节点收集与逻辑路径
RendererLayout .[#8D8D8D,thickness=2].> RendererValues : <color:#8D8D8D>取值与颜色
RendererFeatures .[#8D8D8D,thickness=2].> RendererValues : <color:#8D8D8D>文本、颜色、资源与错误报告
RendererPipeline .[#8D8D8D,thickness=2].> RendererValues : <color:#8D8D8D>根尺寸、属性和标签
RendererEntry .[#8D8D8D,thickness=2].> RendererValues : <color:#8D8D8D>字体加载与错误报告
RendererFeatures .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>布局能力
RendererEntry .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>诊断读取
RendererFeatures .[#8D8D8D,thickness=2].> RendererImages : <color:#8D8D8D>图像合成与提交
RendererFeatures .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>异步资源登记与完成
RendererPipeline .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>显式会话类型
RendererEntry .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>启动与完成状态
RendererEntry .[#8D8D8D,thickness=2].> RendererPipeline : <color:#8D8D8D>驱动三阶段管线
@enduml
`;case`core`:return`@startuml
title "core"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Pure>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Product>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Tools>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Toolkit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Renderer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Documentation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Repository>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Specifications>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Fixtures>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Resources>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==业务纯计算\\n\\n无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。" <<Pure>> as Pure
rectangle "==Toolkit 产品源码参考文档" <<Product>> as Product
rectangle "==自举检查工具" <<Tools>> as Tools
rectangle "==Toolkit TypeScript 产品" <<Toolkit>> as Toolkit
rectangle "==Canvas 渲染引擎\\n\\nHTML 属性经显式 Option 解析为节点输入；节点按固定顺序应用特性，管线统一递归与排版，页面只有一次自动渲染。" <<Renderer>> as Renderer
rectangle "==产品规范与参考" <<Documentation>> as Documentation
rectangle "==仓库工程基础" <<Repository>> as Repository
rectangle "==工具链规范" <<Specifications>> as Specifications
rectangle "==跨组件夹具" <<Fixtures>> as Fixtures
rectangle "==共享静态资源" <<Resources>> as Resources

Pure .[#8D8D8D,thickness=2].> Specifications
Renderer .[#8D8D8D,thickness=2].> Resources : <color:#8D8D8D>字体与样式资源
Product .[#8D8D8D,thickness=2].> Renderer : <color:#8D8D8D>渲染行为测试
Tools .[#8D8D8D,thickness=2].> Repository
Tools .[#8D8D8D,thickness=2].> Specifications
Toolkit .[#8D8D8D,thickness=2].> Repository
Toolkit .[#8D8D8D,thickness=2].> Specifications
Toolkit .[#8D8D8D,thickness=2].> Fixtures
Product .[#8D8D8D,thickness=2].> Fixtures
Product .[#8D8D8D,thickness=2].> Resources
Product .[#8D8D8D,thickness=2].> Documentation
@enduml
`;case`tooling`:return`@startuml
title "自举检查工具"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ToolsTests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolsHooks>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolsCli>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolsCoding>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolsArchitecture>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolsAnchoring>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==自身回归测试" <<ToolsTests>> as ToolsTests
rectangle "==Git 钩子转发\\n\\n纯转发薄壳：零判定逻辑，全部判定经唯一入口 cli" <<ToolsHooks>> as ToolsHooks
rectangle "==CLI 与进程边界\\n\\n项目特有检查与逐锚点检视；标准工具由 pnpm scripts 直接执行" <<ToolsCli>> as ToolsCli
rectangle "==Java 风格规则" <<ToolsCoding>> as ToolsCoding
rectangle "==架构模型解析" <<ToolsArchitecture>> as ToolsArchitecture
rectangle "==规范与代码锚定" <<ToolsAnchoring>> as ToolsAnchoring

ToolsCli .[#8D8D8D,thickness=2].> ToolsArchitecture
ToolsCli .[#8D8D8D,thickness=2].> ToolsAnchoring
ToolsCli .[#8D8D8D,thickness=2].> ToolsCoding
ToolsTests .[#8D8D8D,thickness=2].> ToolsCli
ToolsHooks .[#8D8D8D,thickness=2].> ToolsCli
ToolsArchitecture .[#8D8D8D,thickness=2].> ToolsAnchoring
ToolsCoding .[#8D8D8D,thickness=2].> ToolsArchitecture
ToolsTests .[#8D8D8D,thickness=2].> ToolsArchitecture
ToolsCoding .[#8D8D8D,thickness=2].> ToolsAnchoring
ToolsTests .[#8D8D8D,thickness=2].> ToolsAnchoring
ToolsTests .[#8D8D8D,thickness=2].> ToolsCoding
@enduml
`;case`runtime`:return`@startuml
title "Toolkit TypeScript 产品"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ToolkitConfiguration>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConfig>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitVscode_plugin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPi_plugin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitFrontend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitMcp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHost>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitProject_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==产品类型检查配置" <<ToolkitConfiguration>> as ToolkitConfiguration
rectangle "==配置来源抽象与实现" <<ToolkitConfig>> as ToolkitConfig
rectangle "==VS Code 插件启动入口" <<ToolkitVscode_plugin>> as ToolkitVscode_plugin
rectangle "==Pi Agent 插件启动入口" <<ToolkitPi_plugin>> as ToolkitPi_plugin
rectangle "==前端容器栈" <<ToolkitFrontend>> as ToolkitFrontend
rectangle "==MCP 协议接入" <<ToolkitMcp>> as ToolkitMcp
rectangle "==工作区 Host" <<ToolkitHost>> as ToolkitHost
rectangle "==工程格式纯计算包" <<ToolkitProject_model>> as ToolkitProject_model
rectangle "==BEScript 纯计算包\\n\\n数据合同与三层纯转换设计分开登记；转换函数不读取工程或拥有跨请求缓存，Host 持有缓存状态并传入完整语义依据" <<ToolkitScript>> as ToolkitScript

ToolkitHost .[#8D8D8D,thickness=2].> ToolkitProject_model
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitScript
ToolkitMcp .[#8D8D8D,thickness=2].> ToolkitHost
ToolkitFrontend .[#8D8D8D,thickness=2].> ToolkitHost
ToolkitVscode_plugin .[#8D8D8D,thickness=2].> ToolkitHost
ToolkitVscode_plugin .[#8D8D8D,thickness=2].> ToolkitMcp
ToolkitPi_plugin .[#8D8D8D,thickness=2].> ToolkitMcp
ToolkitVscode_plugin .[#8D8D8D,thickness=2].> ToolkitFrontend
@enduml
`;case`repository`:return`@startuml
title "仓库工程基础"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<RepositoryBuild>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RepositoryInstructions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RepositoryGit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RepositoryEditor>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RepositoryDotnet>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==pnpm 与依赖锁定" <<RepositoryBuild>> as RepositoryBuild
rectangle "==开发指引" <<RepositoryInstructions>> as RepositoryInstructions
rectangle "==版本控制" <<RepositoryGit>> as RepositoryGit
rectangle "==编辑器配置" <<RepositoryEditor>> as RepositoryEditor
rectangle "==旧 .NET SDK 配置参考" <<RepositoryDotnet>> as RepositoryDotnet
@enduml
`;case`specifications`:return`@startuml
title "工具链规范"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<SpecificationsTooling>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsLayout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsDevelopment>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsRuntime>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsBescript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsCanvas_render>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsCanvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==治理契约" <<SpecificationsTooling>> as SpecificationsTooling
rectangle "==文件布局契约" <<SpecificationsLayout>> as SpecificationsLayout
rectangle "==开发与协作契约" <<SpecificationsDevelopment>> as SpecificationsDevelopment
rectangle "==Toolkit 运行时合同" <<SpecificationsRuntime>> as SpecificationsRuntime
rectangle "==BEScript 内部格式" <<SpecificationsBescript>> as SpecificationsBescript
rectangle "==Canvas 渲染规范" <<SpecificationsCanvas_render>> as SpecificationsCanvas_render
rectangle "==Canvas 四向转换合同" <<SpecificationsCanvas>> as SpecificationsCanvas
@enduml
`;case`product`:return`@startuml
title "Toolkit 产品源码参考文档"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ProductMcp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductHost>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductRenderer_tests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductFrontend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==MCP 协议入口" <<ProductMcp>> as ProductMcp
rectangle "==VSCode Host 入口" <<ProductHost>> as ProductHost
rectangle "==Canvas 渲染测试" <<ProductRenderer_tests>> as ProductRenderer_tests
rectangle "==前端" <<ProductFrontend>> as ProductFrontend
rectangle "==核心逻辑" <<ProductCore>> as ProductCore

ProductMcp .[#8D8D8D,thickness=2].> ProductCore
ProductHost .[#8D8D8D,thickness=2].> ProductCore
ProductFrontend .[#8D8D8D,thickness=2].> ProductCore
@enduml
`;case`product_core`:return`@startuml
title "核心逻辑"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ProductCoreComposition>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreAnalysis>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreBescript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreCanvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreInfra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreLint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCorePersistence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreRefactor>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreSdk>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreSearch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreTsview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreWorker>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ProductCoreTests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==核心服务装配" <<ProductCoreComposition>> as ProductCoreComposition
rectangle "==工程分析" <<ProductCoreAnalysis>> as ProductCoreAnalysis
rectangle "==BeScript 语法" <<ProductCoreBescript>> as ProductCoreBescript
rectangle "==Canvas 数据" <<ProductCoreCanvas>> as ProductCoreCanvas
rectangle "==基础设施" <<ProductCoreInfra>> as ProductCoreInfra
rectangle "==游戏工程静态检查" <<ProductCoreLint>> as ProductCoreLint
rectangle "==工程持久化" <<ProductCorePersistence>> as ProductCorePersistence
rectangle "==游戏逻辑重构" <<ProductCoreRefactor>> as ProductCoreRefactor
rectangle "==平台 SDK" <<ProductCoreSdk>> as ProductCoreSdk
rectangle "==工程检索" <<ProductCoreSearch>> as ProductCoreSearch
rectangle "==TS 视图" <<ProductCoreTsview>> as ProductCoreTsview
rectangle "==工作进程命令" <<ProductCoreWorker>> as ProductCoreWorker
rectangle "==核心回归" <<ProductCoreTests>> as ProductCoreTests
@enduml
`;case`documentation`:return`@startuml
title "产品规范与参考"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<DocumentationManual>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<DocumentationSpecs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<DocumentationDiagrams>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<DocumentationWorkflows>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==MechToolkit 发布与开发指南" <<DocumentationManual>> as DocumentationManual
rectangle "==产品规范" <<DocumentationSpecs>> as DocumentationSpecs
rectangle "==架构展示资产" <<DocumentationDiagrams>> as DocumentationDiagrams
rectangle "==ComfyUI 工作流" <<DocumentationWorkflows>> as DocumentationWorkflows
@enduml
`;case`pure_functions`:return`@startuml
title "业务纯计算"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PureCanvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Canvas 四向转换\\n\\n内联 Base64、内联 Hjson、Canvas 二进制与 HTML 视图之间的无状态转换" <<PureCanvas>> as PureCanvas
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
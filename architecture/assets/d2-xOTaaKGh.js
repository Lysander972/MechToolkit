var e=e=>{switch(e){case`bescript_first_layer`:return`direction: down

ToolkitScriptConversion: {
  label: "三层纯转换设计"

  First: {
    label: "BEScript 文本与局部 AST 转换"
  }
}
ToolkitScriptAst: {
  label: "局部 AST 层"

  Local_ast: {
    label: "局部 AST"
  }
}
ToolkitScriptText: {
  label: "原版文本层"

  Code_file: {
    label: ".code 文件"
  }
  Vocabulary: {
    label: "类型与转义"
  }
}
SpecificationsBescript: {
  label: "BEScript 内部格式"
}

ToolkitScriptConversion.First -> ToolkitScriptText.Vocabulary
ToolkitScriptConversion.First -> ToolkitScriptText.Code_file
ToolkitScriptText.Code_file -> ToolkitScriptText.Vocabulary
ToolkitScriptConversion.First -> ToolkitScriptAst.Local_ast
ToolkitScriptAst.Local_ast -> ToolkitScriptText.Vocabulary
ToolkitScriptAst.Local_ast -> ToolkitScriptText.Code_file
ToolkitScriptConversion.First -> SpecificationsBescript
ToolkitScriptText.Vocabulary -> SpecificationsBescript
ToolkitScriptText.Code_file -> SpecificationsBescript
ToolkitScriptAst.Local_ast -> SpecificationsBescript
`;case`bescript_second_layer`:return`direction: down

ToolkitScriptConversion: {
  label: "三层纯转换设计"

  Second: {
    label: "Context 与官方 TS AST 业务转换"
  }
}
ToolkitProject_modelTests: {
  label: "工程格式测试"
}
ToolkitProject_modelLogic: {
  label: "工程设置解析"
}
ToolkitScriptContext: {
  label: "零件上下文层"

  Device_context: {
    label: "全局变量、零件元数据与零件上下文"
  }
}
PureCanvasLogic: {
  label: "四向格式转换"
}
ToolkitScriptAst: {
  label: "局部 AST 层"

  Local_ast: {
    label: "局部 AST"
  }
}
SpecificationsBescript: {
  label: "BEScript 内部格式"
}

ToolkitScriptConversion.Second -> ToolkitScriptAst.Local_ast
ToolkitScriptConversion.Second -> ToolkitScriptContext.Device_context
ToolkitScriptContext.Device_context -> ToolkitScriptAst.Local_ast
ToolkitScriptConversion.Second -> PureCanvasLogic
ToolkitProject_modelTests -> ToolkitProject_modelLogic
ToolkitScriptConversion.Second -> SpecificationsBescript
ToolkitScriptAst.Local_ast -> SpecificationsBescript
ToolkitScriptContext.Device_context -> SpecificationsBescript
`;case`bescript_third_layer`:return`direction: down

ToolkitHost: {
  label: "工作区 Host"

  Logic: {
    label: "Host 生命周期与工程 IO"
  }
}
ToolkitScript: {
  label: "BEScript 纯计算包"

  ConversionThird: {
    label: "官方 TS 解析打印与局部装配"
  }
}
SpecificationsBescript: {
  label: "BEScript 内部格式"
}

ToolkitHost.Logic -> ToolkitScript.ConversionThird
ToolkitScript.ConversionThird -> SpecificationsBescript
`;case`canvas_render`:return`direction: down

RendererEntry: {
  label: "字体就绪后的唯一入口"
}
RendererPipeline: {
  label: "DOM 渲染管线"
}
RendererNodes: {
  label: "节点输入与能力顺序"
}
RendererDom_schema: {
  label: "DOM 严格 Schema 提取"
}
RendererFeatures: {
  label: "特性 DOM 应用"
}
RendererSchema: {
  label: "使用者节点 Schema"
}
RendererLayout: {
  label: "布局计算与诊断"
}
RendererImages: {
  label: "图像合成与异步提交"
}
RendererFields: {
  label: "白名单与统一取值"
}
RendererValues: {
  label: "属性解析与渲染基础能力"
}
RendererContracts: {
  label: "特性与运行时契约"
}
RendererState: {
  label: "页面渲染状态"
}

RendererContracts -> RendererState: "会话类型"
RendererSchema -> RendererContracts: "持久化字段类型"
RendererNodes -> RendererContracts: "节点字段与上下文类型"
RendererDom_schema -> RendererContracts: "属性类型"
RendererFields -> RendererContracts: "字段类型"
RendererValues -> RendererContracts: "属性与诊断类型"
RendererLayout -> RendererContracts: "布局字段与结果"
RendererFeatures -> RendererContracts: "特性字段与上下文"
RendererImages -> RendererContracts: "颜色类型"
RendererPipeline -> RendererContracts: "上下文类型"
RendererNodes -> RendererSchema: "唯一节点输入类型"
RendererDom_schema -> RendererSchema: "确定输出契约"
RendererNodes -> RendererDom_schema: "确定类型的节点 Schema"
RendererNodes -> RendererLayout: "第一项布局能力"
RendererNodes -> RendererFeatures: "按节点类型固定顺序应用能力"
RendererNodes -> RendererState: "会话上下文类型"
RendererPipeline -> RendererNodes: "节点构造与能力顺序"
RendererDom_schema -> RendererValues: "颜色与枚举解析"
RendererPipeline -> RendererDom_schema: "唯一 DOM 属性提取"
RendererLayout -> RendererFields: "白名单与默认值"
RendererFeatures -> RendererFields: "启用字段与默认值"
RendererPipeline -> RendererFields: "子节点收集与逻辑路径"
RendererLayout -> RendererValues: "取值与颜色"
RendererFeatures -> RendererValues: "文本、颜色、资源与错误报告"
RendererPipeline -> RendererValues: "根尺寸、属性和标签"
RendererEntry -> RendererValues: "字体加载与错误报告"
RendererFeatures -> RendererLayout: "布局能力"
RendererEntry -> RendererLayout: "诊断读取"
RendererFeatures -> RendererImages: "图像合成与提交"
RendererFeatures -> RendererState: "异步资源登记与完成"
RendererPipeline -> RendererState: "显式会话类型"
RendererEntry -> RendererState: "启动与完成状态"
RendererEntry -> RendererPipeline: "驱动三阶段管线"
`;case`index`:return`direction: down

Frontend: {
  label: "单一前端扩展"
}
Toolkit: {
  label: "Toolkit TypeScript 产品"
}
Pure: {
  label: "业务纯计算"
}
Canvas: {
  label: "Canvas 渲染产品"
}

Frontend -> Toolkit
Toolkit -> Frontend
Toolkit -> Pure
`;case`runtime`:return`direction: down

ToolkitConfiguration: {
  label: "产品类型检查配置"
}
ToolkitConfig: {
  label: "配置来源抽象与实现"
}
ToolkitPi_plugin: {
  label: "Pi Agent 插件启动入口"
}
ToolkitMcp: {
  label: "MCP 协议接入"
}
ToolkitHost: {
  label: "工作区 Host"
}
ToolkitProject_model: {
  label: "工程格式纯计算包"
}
ToolkitScript: {
  label: "BEScript 纯计算包"
}

ToolkitHost -> ToolkitProject_model
ToolkitHost -> ToolkitScript
ToolkitMcp -> ToolkitHost
ToolkitPi_plugin -> ToolkitMcp
`;case`frontend`:return`direction: down

FrontendPackaging: {
  label: "扩展清单与构建入口"
}
FrontendTests: {
  label: "前端行为与生命周期测试"
}
FrontendPlugin: {
  label: "VSCode 宿主与 Effect 组合根"
}
FrontendUi: {
  label: "单页侧栏、配置区与展开日志"
}
FrontendHost_client: {
  label: "只读合同与配置计划"
}

FrontendUi -> FrontendHost_client
FrontendPlugin -> FrontendHost_client
FrontendTests -> FrontendHost_client
FrontendPlugin -> FrontendUi
FrontendTests -> FrontendUi
FrontendTests -> FrontendPlugin
`;case`pure_functions`:return`direction: down

PureCanvas: {
  label: "Canvas 四向转换"
}
`;case`canvas`:return`direction: down

CanvasRenderer_tests: {
  label: "Canvas 渲染测试"
}
RendererEntry: {
  label: "字体就绪后的唯一入口"
}
RendererPipeline: {
  label: "DOM 渲染管线"
}
RendererNodes: {
  label: "节点输入与能力顺序"
}
RendererDom_schema: {
  label: "DOM 严格 Schema 提取"
}
RendererFeatures: {
  label: "特性 DOM 应用"
}
RendererSchema: {
  label: "使用者节点 Schema"
}
RendererLayout: {
  label: "布局计算与诊断"
}
RendererImages: {
  label: "图像合成与异步提交"
}
RendererFields: {
  label: "白名单与统一取值"
}
RendererValues: {
  label: "属性解析与渲染基础能力"
}
RendererContracts: {
  label: "特性与运行时契约"
}
RendererState: {
  label: "页面渲染状态"
}

RendererContracts -> RendererState: "会话类型"
RendererSchema -> RendererContracts: "持久化字段类型"
RendererNodes -> RendererContracts: "节点字段与上下文类型"
RendererDom_schema -> RendererContracts: "属性类型"
RendererFields -> RendererContracts: "字段类型"
RendererValues -> RendererContracts: "属性与诊断类型"
RendererLayout -> RendererContracts: "布局字段与结果"
RendererFeatures -> RendererContracts: "特性字段与上下文"
RendererImages -> RendererContracts: "颜色类型"
RendererPipeline -> RendererContracts: "上下文类型"
RendererNodes -> RendererSchema: "唯一节点输入类型"
RendererDom_schema -> RendererSchema: "确定输出契约"
RendererNodes -> RendererDom_schema: "确定类型的节点 Schema"
RendererNodes -> RendererLayout: "第一项布局能力"
RendererNodes -> RendererFeatures: "按节点类型固定顺序应用能力"
RendererNodes -> RendererState: "会话上下文类型"
RendererPipeline -> RendererNodes: "节点构造与能力顺序"
RendererDom_schema -> RendererValues: "颜色与枚举解析"
RendererPipeline -> RendererDom_schema: "唯一 DOM 属性提取"
RendererLayout -> RendererFields: "白名单与默认值"
RendererFeatures -> RendererFields: "启用字段与默认值"
RendererPipeline -> RendererFields: "子节点收集与逻辑路径"
RendererLayout -> RendererValues: "取值与颜色"
RendererFeatures -> RendererValues: "文本、颜色、资源与错误报告"
RendererPipeline -> RendererValues: "根尺寸、属性和标签"
RendererEntry -> RendererValues: "字体加载与错误报告"
RendererFeatures -> RendererLayout: "布局能力"
RendererEntry -> RendererLayout: "诊断读取"
RendererFeatures -> RendererImages: "图像合成与提交"
RendererFeatures -> RendererState: "异步资源登记与完成"
RendererPipeline -> RendererState: "显式会话类型"
RendererEntry -> RendererState: "启动与完成状态"
RendererEntry -> RendererPipeline: "驱动三阶段管线"
`;case`tooling`:return`direction: down

ToolsTests: {
  label: "自身回归测试"
}
ToolsHooks: {
  label: "Git 钩子转发"
}
ToolsTesting: {
  label: "真实 Git 审计夹具"
}
ToolsCli: {
  label: "CLI 与进程边界"
}
ToolsCoding: {
  label: "Java 风格规则"
}
ToolsArchitecture: {
  label: "架构模型解析"
}
ToolsAnchoring: {
  label: "规范与代码锚定"
}
ToolsReview_state: {
  label: "当前 Git tree 的审计终态"
}

ToolsCli -> ToolsArchitecture
ToolsCli -> ToolsAnchoring
ToolsCli -> ToolsCoding
ToolsTests -> ToolsCli
ToolsTesting -> ToolsCli
ToolsHooks -> ToolsCli
ToolsArchitecture -> ToolsAnchoring
ToolsCoding -> ToolsArchitecture
ToolsTests -> ToolsArchitecture
ToolsCoding -> ToolsAnchoring
ToolsTests -> ToolsAnchoring
ToolsTests -> ToolsCoding
ToolsTests -> ToolsTesting
`;case`repository`:return`direction: down

RepositoryBuild: {
  label: "pnpm 与依赖锁定"
}
RepositoryInstructions: {
  label: "开发指引"
}
RepositoryGit: {
  label: "版本控制"
}
RepositoryEditor: {
  label: "编辑器配置"
}
`;case`specifications`:return`direction: down

SpecificationsTooling: {
  label: "治理契约"
}
SpecificationsLayout: {
  label: "文件布局契约"
}
SpecificationsDevelopment: {
  label: "开发与协作契约"
}
SpecificationsRuntime: {
  label: "Toolkit 运行时合同"
}
SpecificationsHost_configuration: {
  label: "保留 Host 配置合同"
}
SpecificationsBescript: {
  label: "BEScript 内部格式"
}
SpecificationsCanvas_render: {
  label: "Canvas 渲染规范"
}
SpecificationsVscode_frontend: {
  label: "VS Code 前端职责"
}
SpecificationsCanvas: {
  label: "Canvas 四向转换合同"
}
SpecificationsPreview: {
  label: "静态预览与发布合同"
}
`;case`documentation`:return`direction: down

DocumentationManual: {
  label: "MechToolkit 发布与开发指南"
}
DocumentationSpecs: {
  label: "产品规范"
}
DocumentationWorkflows: {
  label: "ComfyUI 工作流"
}
`;case`legacy`:return`direction: down

LegacyMcp: {
  label: "MCP 协议入口"
}
LegacyHost: {
  label: "VSCode Host 入口"
}
LegacyCore: {
  label: "核心逻辑"
}

LegacyMcp -> LegacyCore
LegacyHost -> LegacyCore
`;case`legacy_core`:return`direction: down

LegacyCoreComposition: {
  label: "核心服务装配"
}
LegacyCoreAnalysis: {
  label: "工程分析"
}
LegacyCoreBescript: {
  label: "BeScript 语法"
}
LegacyCoreCanvas: {
  label: "Canvas 数据"
}
LegacyCoreInfra: {
  label: "基础设施"
}
LegacyCoreLint: {
  label: "游戏工程静态检查"
}
LegacyCorePersistence: {
  label: "工程持久化"
}
LegacyCoreRefactor: {
  label: "游戏逻辑重构"
}
LegacyCoreSdk: {
  label: "平台 SDK"
}
LegacyCoreSearch: {
  label: "工程检索"
}
LegacyCoreTsview: {
  label: "TS 视图"
}
LegacyCoreWorker: {
  label: "工作进程命令"
}
LegacyCoreTests: {
  label: "核心回归"
}
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};
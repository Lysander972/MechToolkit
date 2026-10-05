var e=e=>{switch(e){case`index`:return`---
title: "Landscape view"
---
graph TB
  Pure@{ shape: rectangle, label: "业务纯计算" }
  Canvas@{ shape: rectangle, label: "Canvas 渲染产品" }
  Tools@{ shape: rectangle, label: "自举检查工具" }
  Toolkit@{ shape: rectangle, label: "Toolkit TypeScript 产品" }
  Legacy@{ shape: rectangle, label: "旧产品参考区" }
  Renderer@{ shape: rectangle, label: "Canvas 渲染引擎" }
  Repository@{ shape: rectangle, label: "仓库工程基础" }
  Frontend@{ shape: rectangle, label: "单一前端扩展" }
  Fixtures@{ shape: rectangle, label: "跨组件夹具" }
  Specifications@{ shape: rectangle, label: "工具链规范" }
  Resources@{ shape: rectangle, label: "共享静态资源" }
  Documentation@{ shape: rectangle, label: "产品规范与参考" }
  Pure -.-> Specifications
  Renderer -. "\`字体与样式资源\`" .-> Resources
  Canvas -. "\`渲染行为测试\`" .-> Renderer
  Tools -.-> Repository
  Tools -.-> Specifications
  Toolkit -.-> Repository
  Toolkit -.-> Specifications
  Frontend -.-> Specifications
  Toolkit -.-> Frontend
  Toolkit -.-> Fixtures
  Frontend -.-> Toolkit
  Legacy -.-> Fixtures
  Frontend -.-> Resources
  Frontend -.-> Documentation
`;case`bescript_first_layer`:return`---
title: "第一层：BEScript 文本与局部 AST"
---
graph TB
  subgraph ToolkitScriptConversion["\`三层纯转换设计\`"]
    ToolkitScriptConversion.First@{ shape: rectangle, label: "BEScript 文本与局部 AST 转换" }
  end
  subgraph ToolkitScriptAst["\`局部 AST 层\`"]
    ToolkitScriptAst.Local_ast@{ shape: rectangle, label: "局部 AST" }
  end
  subgraph ToolkitScriptText["\`原版文本层\`"]
    ToolkitScriptText.Code_file@{ shape: rectangle, label: ".code 文件" }
    ToolkitScriptText.Vocabulary@{ shape: rectangle, label: "类型与转义" }
  end
  SpecificationsBescript@{ shape: rectangle, label: "BEScript 内部格式" }
  ToolkitScriptConversion.First -.-> ToolkitScriptText.Vocabulary
  ToolkitScriptConversion.First -.-> ToolkitScriptText.Code_file
  ToolkitScriptText.Code_file -.-> ToolkitScriptText.Vocabulary
  ToolkitScriptConversion.First -.-> ToolkitScriptAst.Local_ast
  ToolkitScriptAst.Local_ast -.-> ToolkitScriptText.Vocabulary
  ToolkitScriptAst.Local_ast -.-> ToolkitScriptText.Code_file
  ToolkitScriptConversion.First -.-> SpecificationsBescript
  ToolkitScriptText.Vocabulary -.-> SpecificationsBescript
  ToolkitScriptText.Code_file -.-> SpecificationsBescript
  ToolkitScriptAst.Local_ast -.-> SpecificationsBescript
`;case`bescript_second_layer`:return`---
title: "第二层：零件 Context 与官方 TS AST 的转换边界"
---
graph TB
  ToolkitHostLogic@{ shape: rectangle, label: "Host 生命周期与工程 IO" }
  subgraph ToolkitScriptContext["\`零件上下文层\`"]
    ToolkitScriptContext.Device_context@{ shape: rectangle, label: "全局变量、零件元数据与零件上下文" }
  end
  ToolkitProject_modelTests@{ shape: rectangle, label: "工程格式测试" }
  ToolkitScriptConversionSecond@{ shape: rectangle, label: "Context 与官方 TS AST 业务转换" }
  ToolkitProject_modelLogic@{ shape: rectangle, label: "工程设置解析" }
  subgraph ToolkitScriptAst["\`局部 AST 层\`"]
    ToolkitScriptAst.Local_ast@{ shape: rectangle, label: "局部 AST" }
  end
  SpecificationsBescript@{ shape: rectangle, label: "BEScript 内部格式" }
  ToolkitHostLogic -.-> ToolkitScriptConversionSecond
  ToolkitScriptContext.Device_context -.-> ToolkitScriptAst.Local_ast
  ToolkitHostLogic -.-> ToolkitProject_modelLogic
  ToolkitProject_modelTests -.-> ToolkitProject_modelLogic
  ToolkitScriptConversionSecond -.-> SpecificationsBescript
  ToolkitScriptAst.Local_ast -.-> SpecificationsBescript
  ToolkitScriptContext.Device_context -.-> SpecificationsBescript
`;case`bescript_third_layer`:return`---
title: "第三层：官方 TS 解析、打印与 Host 视图缓存归属"
---
graph TB
  subgraph ToolkitHost["\`工作区 Host\`"]
    ToolkitHost.Logic@{ shape: rectangle, label: "Host 生命周期与工程 IO" }
  end
  subgraph ToolkitScript["\`BEScript 纯计算包\`"]
    ToolkitScript.ConversionThird@{ shape: rectangle, label: "官方 TS 解析打印与局部装配" }
  end
  SpecificationsBescript@{ shape: rectangle, label: "BEScript 内部格式" }
  ToolkitHost.Logic -.-> ToolkitScript.ConversionThird
  ToolkitScript.ConversionThird -.-> SpecificationsBescript
`;case`canvas_render`:return'---\ntitle: "Canvas 渲染引擎"\n---\ngraph TB\n  RendererEntry@{ shape: rectangle, label: "字体就绪后的唯一入口" }\n  RendererPipeline@{ shape: rectangle, label: "DOM 渲染管线" }\n  RendererNodes@{ shape: rectangle, label: "节点输入与能力顺序" }\n  RendererDom_schema@{ shape: rectangle, label: "DOM 严格 Schema 提取" }\n  RendererFeatures@{ shape: rectangle, label: "特性 DOM 应用" }\n  RendererSchema@{ shape: rectangle, label: "使用者节点 Schema" }\n  RendererLayout@{ shape: rectangle, label: "布局计算与诊断" }\n  RendererImages@{ shape: rectangle, label: "图像合成与异步提交" }\n  RendererFields@{ shape: rectangle, label: "白名单与统一取值" }\n  RendererValues@{ shape: rectangle, label: "属性解析与渲染基础能力" }\n  RendererContracts@{ shape: rectangle, label: "特性与运行时契约" }\n  RendererState@{ shape: rectangle, label: "页面渲染状态" }\n  RendererContracts -. "`会话类型`" .-> RendererState\n  RendererSchema -. "`持久化字段类型`" .-> RendererContracts\n  RendererNodes -. "`节点字段与上下文类型`" .-> RendererContracts\n  RendererDom_schema -. "`属性类型`" .-> RendererContracts\n  RendererFields -. "`字段类型`" .-> RendererContracts\n  RendererValues -. "`属性与诊断类型`" .-> RendererContracts\n  RendererLayout -. "`布局字段与结果`" .-> RendererContracts\n  RendererFeatures -. "`特性字段与上下文`" .-> RendererContracts\n  RendererImages -. "`颜色类型`" .-> RendererContracts\n  RendererPipeline -. "`上下文类型`" .-> RendererContracts\n  RendererNodes -. "`唯一节点输入类型`" .-> RendererSchema\n  RendererDom_schema -. "`确定输出契约`" .-> RendererSchema\n  RendererNodes -. "`确定类型的节点 Schema`" .-> RendererDom_schema\n  RendererNodes -. "`第一项布局能力`" .-> RendererLayout\n  RendererNodes -. "`按节点类型固定顺序应用能力`" .-> RendererFeatures\n  RendererNodes -. "`会话上下文类型`" .-> RendererState\n  RendererPipeline -. "`节点构造与能力顺序`" .-> RendererNodes\n  RendererDom_schema -. "`颜色与枚举解析`" .-> RendererValues\n  RendererPipeline -. "`唯一 DOM 属性提取`" .-> RendererDom_schema\n  RendererLayout -. "`白名单与默认值`" .-> RendererFields\n  RendererFeatures -. "`启用字段与默认值`" .-> RendererFields\n  RendererPipeline -. "`子节点收集与逻辑路径`" .-> RendererFields\n  RendererLayout -. "`取值与颜色`" .-> RendererValues\n  RendererFeatures -. "`文本、颜色、资源与错误报告`" .-> RendererValues\n  RendererPipeline -. "`根尺寸、属性和标签`" .-> RendererValues\n  RendererEntry -. "`字体加载与错误报告`" .-> RendererValues\n  RendererFeatures -. "`布局能力`" .-> RendererLayout\n  RendererEntry -. "`诊断读取`" .-> RendererLayout\n  RendererFeatures -. "`图像合成与提交`" .-> RendererImages\n  RendererFeatures -. "`异步资源登记与完成`" .-> RendererState\n  RendererPipeline -. "`显式会话类型`" .-> RendererState\n  RendererEntry -. "`启动与完成状态`" .-> RendererState\n  RendererEntry -. "`驱动三阶段管线`" .-> RendererPipeline\n';case`core`:return`---
title: "core"
---
graph TB
  Pure@{ shape: rectangle, label: "业务纯计算" }
  Canvas@{ shape: rectangle, label: "Canvas 渲染产品" }
  Tools@{ shape: rectangle, label: "自举检查工具" }
  Toolkit@{ shape: rectangle, label: "Toolkit TypeScript 产品" }
  Legacy@{ shape: rectangle, label: "旧产品参考区" }
  Renderer@{ shape: rectangle, label: "Canvas 渲染引擎" }
  Repository@{ shape: rectangle, label: "仓库工程基础" }
  Frontend@{ shape: rectangle, label: "单一前端扩展" }
  Fixtures@{ shape: rectangle, label: "跨组件夹具" }
  Specifications@{ shape: rectangle, label: "工具链规范" }
  Resources@{ shape: rectangle, label: "共享静态资源" }
  Documentation@{ shape: rectangle, label: "产品规范与参考" }
  Pure -.-> Specifications
  Renderer -. "\`字体与样式资源\`" .-> Resources
  Canvas -. "\`渲染行为测试\`" .-> Renderer
  Tools -.-> Repository
  Tools -.-> Specifications
  Toolkit -.-> Repository
  Toolkit -.-> Specifications
  Frontend -.-> Specifications
  Toolkit -.-> Frontend
  Toolkit -.-> Fixtures
  Frontend -.-> Toolkit
  Legacy -.-> Fixtures
  Frontend -.-> Resources
  Frontend -.-> Documentation
`;case`tooling`:return`---
title: "自举检查工具"
---
graph TB
  ToolsTests@{ shape: rectangle, label: "自身回归测试" }
  ToolsHooks@{ shape: rectangle, label: "Git 钩子转发" }
  ToolsTesting@{ shape: rectangle, label: "真实 Git 审计夹具" }
  ToolsCli@{ shape: rectangle, label: "CLI 与进程边界" }
  ToolsCoding@{ shape: rectangle, label: "Java 风格规则" }
  ToolsArchitecture@{ shape: rectangle, label: "架构模型解析" }
  ToolsAnchoring@{ shape: rectangle, label: "规范与代码锚定" }
  ToolsReview_state@{ shape: rectangle, label: "当前 Git tree 的审计终态" }
  ToolsCli -.-> ToolsArchitecture
  ToolsCli -.-> ToolsAnchoring
  ToolsCli -.-> ToolsCoding
  ToolsTests -.-> ToolsCli
  ToolsTesting -.-> ToolsCli
  ToolsHooks -.-> ToolsCli
  ToolsArchitecture -.-> ToolsAnchoring
  ToolsCoding -.-> ToolsArchitecture
  ToolsTests -.-> ToolsArchitecture
  ToolsCoding -.-> ToolsAnchoring
  ToolsTests -.-> ToolsAnchoring
  ToolsTests -.-> ToolsCoding
  ToolsTests -.-> ToolsTesting
`;case`runtime`:return`---
title: "Toolkit TypeScript 产品"
---
graph TB
  ToolkitConfiguration@{ shape: rectangle, label: "产品类型检查配置" }
  ToolkitConfig@{ shape: rectangle, label: "配置来源抽象与实现" }
  ToolkitPi_plugin@{ shape: rectangle, label: "Pi Agent 插件启动入口" }
  ToolkitMcp@{ shape: rectangle, label: "MCP 协议接入" }
  ToolkitHost@{ shape: rectangle, label: "工作区 Host" }
  ToolkitProject_model@{ shape: rectangle, label: "工程格式纯计算包" }
  ToolkitScript@{ shape: rectangle, label: "BEScript 纯计算包" }
  ToolkitHost -.-> ToolkitProject_model
  ToolkitHost -.-> ToolkitScript
  ToolkitMcp -.-> ToolkitHost
  ToolkitPi_plugin -.-> ToolkitMcp
`;case`repository`:return`---
title: "仓库工程基础"
---
graph TB
  RepositoryBuild@{ shape: rectangle, label: "pnpm 与依赖锁定" }
  RepositoryInstructions@{ shape: rectangle, label: "开发指引" }
  RepositoryGit@{ shape: rectangle, label: "版本控制" }
  RepositoryEditor@{ shape: rectangle, label: "编辑器配置" }
`;case`specifications`:return`---
title: "工具链规范"
---
graph TB
  SpecificationsTooling@{ shape: rectangle, label: "治理契约" }
  SpecificationsLayout@{ shape: rectangle, label: "文件布局契约" }
  SpecificationsDevelopment@{ shape: rectangle, label: "开发与协作契约" }
  SpecificationsRuntime@{ shape: rectangle, label: "Toolkit 运行时合同" }
  SpecificationsHost_configuration@{ shape: rectangle, label: "保留 Host 配置合同" }
  SpecificationsBescript@{ shape: rectangle, label: "BEScript 内部格式" }
  SpecificationsCanvas_render@{ shape: rectangle, label: "Canvas 渲染规范" }
  SpecificationsVscode_frontend@{ shape: rectangle, label: "VS Code 前端职责" }
  SpecificationsCanvas@{ shape: rectangle, label: "Canvas 四向转换合同" }
`;case`legacy`:return`---
title: "旧产品参考区"
---
graph TB
  LegacyMcp@{ shape: rectangle, label: "MCP 协议入口" }
  LegacyHost@{ shape: rectangle, label: "VSCode Host 入口" }
  LegacyCore@{ shape: rectangle, label: "核心逻辑" }
  LegacyMcp -.-> LegacyCore
  LegacyHost -.-> LegacyCore
`;case`legacy_core`:return`---
title: "核心逻辑"
---
graph TB
  LegacyCoreComposition@{ shape: rectangle, label: "核心服务装配" }
  LegacyCoreAnalysis@{ shape: rectangle, label: "工程分析" }
  LegacyCoreBescript@{ shape: rectangle, label: "BeScript 语法" }
  LegacyCoreCanvas@{ shape: rectangle, label: "Canvas 数据" }
  LegacyCoreInfra@{ shape: rectangle, label: "基础设施" }
  LegacyCoreLint@{ shape: rectangle, label: "游戏工程静态检查" }
  LegacyCorePersistence@{ shape: rectangle, label: "工程持久化" }
  LegacyCoreRefactor@{ shape: rectangle, label: "游戏逻辑重构" }
  LegacyCoreSdk@{ shape: rectangle, label: "平台 SDK" }
  LegacyCoreSearch@{ shape: rectangle, label: "工程检索" }
  LegacyCoreTsview@{ shape: rectangle, label: "TS 视图" }
  LegacyCoreWorker@{ shape: rectangle, label: "工作进程命令" }
  LegacyCoreTests@{ shape: rectangle, label: "核心回归" }
`;case`documentation`:return`---
title: "产品规范与参考"
---
graph TB
  DocumentationManual@{ shape: rectangle, label: "MechToolkit 发布与开发指南" }
  DocumentationSpecs@{ shape: rectangle, label: "产品规范" }
  DocumentationDiagrams@{ shape: rectangle, label: "架构展示资产" }
  DocumentationWorkflows@{ shape: rectangle, label: "ComfyUI 工作流" }
`;case`pure_functions`:return`---
title: "业务纯计算"
---
graph TB
  PureCanvas@{ shape: rectangle, label: "Canvas 四向转换" }
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
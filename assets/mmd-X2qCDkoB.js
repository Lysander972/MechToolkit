var e=e=>{switch(e){case`index`:return`---
title: "Landscape view"
---
graph TB
  Tools@{ shape: rectangle, label: "自举检查工具" }
  Toolkit@{ shape: rectangle, label: "Toolkit TypeScript 产品" }
  Product@{ shape: rectangle, label: "Toolkit 产品源码参考文档" }
  Repository@{ shape: rectangle, label: "仓库工程基础" }
  Specifications@{ shape: rectangle, label: "工具链规范" }
  Fixtures@{ shape: rectangle, label: "跨组件夹具" }
  Resources@{ shape: rectangle, label: "共享静态资源" }
  Documentation@{ shape: rectangle, label: "产品规范与参考" }
  Tools -.-> Repository
  Tools -.-> Specifications
  Toolkit -.-> Repository
  Toolkit -.-> Specifications
  Toolkit -.-> Fixtures
  Product -.-> Fixtures
  Product -.-> Resources
  Product -.-> Documentation
`;case`core`:return`---
title: "core"
---
graph TB
  Tools@{ shape: rectangle, label: "自举检查工具" }
  Toolkit@{ shape: rectangle, label: "Toolkit TypeScript 产品" }
  Product@{ shape: rectangle, label: "Toolkit 产品源码参考文档" }
  Repository@{ shape: rectangle, label: "仓库工程基础" }
  Specifications@{ shape: rectangle, label: "工具链规范" }
  Fixtures@{ shape: rectangle, label: "跨组件夹具" }
  Resources@{ shape: rectangle, label: "共享静态资源" }
  Documentation@{ shape: rectangle, label: "产品规范与参考" }
  Tools -.-> Repository
  Tools -.-> Specifications
  Toolkit -.-> Repository
  Toolkit -.-> Specifications
  Toolkit -.-> Fixtures
  Product -.-> Fixtures
  Product -.-> Resources
  Product -.-> Documentation
`;case`tooling`:return`---
title: "自举检查工具"
---
graph TB
  ToolsTests@{ shape: rectangle, label: "自身回归测试" }
  ToolsHooks@{ shape: rectangle, label: "Git 钩子转发" }
  ToolsCli@{ shape: rectangle, label: "CLI 与进程边界" }
  ToolsCoding@{ shape: rectangle, label: "Java 风格规则" }
  ToolsArchitecture@{ shape: rectangle, label: "架构模型解析" }
  ToolsAnchoring@{ shape: rectangle, label: "规范与代码锚定" }
  ToolsCli -.-> ToolsArchitecture
  ToolsCli -.-> ToolsAnchoring
  ToolsCli -.-> ToolsCoding
  ToolsTests -.-> ToolsCli
  ToolsHooks -.-> ToolsCli
  ToolsArchitecture -.-> ToolsAnchoring
  ToolsCoding -.-> ToolsArchitecture
  ToolsTests -.-> ToolsArchitecture
  ToolsCoding -.-> ToolsAnchoring
  ToolsTests -.-> ToolsAnchoring
  ToolsTests -.-> ToolsCoding
`;case`runtime`:return`---
title: "Toolkit TypeScript 产品"
---
graph TB
  ToolkitConfiguration@{ shape: rectangle, label: "产品类型检查配置" }
  ToolkitConfig@{ shape: rectangle, label: "配置来源抽象与实现" }
  ToolkitVscode_plugin@{ shape: rectangle, label: "VS Code 插件启动入口" }
  ToolkitPi_plugin@{ shape: rectangle, label: "Pi Agent 插件启动入口" }
  ToolkitMcp@{ shape: rectangle, label: "MCP 协议接入" }
  ToolkitHost@{ shape: rectangle, label: "工作区 Host" }
  ToolkitProject_model@{ shape: rectangle, label: "工程格式纯计算包" }
  ToolkitHost -.-> ToolkitProject_model
  ToolkitMcp -.-> ToolkitHost
  ToolkitVscode_plugin -.-> ToolkitHost
  ToolkitVscode_plugin -.-> ToolkitMcp
  ToolkitPi_plugin -.-> ToolkitMcp
`;case`repository`:return`---
title: "仓库工程基础"
---
graph TB
  RepositoryBuild@{ shape: rectangle, label: "pnpm 与依赖锁定" }
  RepositoryInstructions@{ shape: rectangle, label: "开发指引" }
  RepositoryGit@{ shape: rectangle, label: "版本控制" }
  RepositoryEditor@{ shape: rectangle, label: "编辑器配置" }
  RepositoryDotnet@{ shape: rectangle, label: "旧 .NET SDK 配置参考" }
`;case`specifications`:return`---
title: "工具链规范"
---
graph TB
  SpecificationsTooling@{ shape: rectangle, label: "治理契约" }
  SpecificationsLayout@{ shape: rectangle, label: "文件布局契约" }
  SpecificationsDevelopment@{ shape: rectangle, label: "开发与协作契约" }
  SpecificationsRuntime@{ shape: rectangle, label: "Toolkit 运行时合同" }
`;case`product`:return`---
title: "Toolkit 产品源码参考文档"
---
graph TB
  ProductMcp@{ shape: rectangle, label: "MCP 协议入口" }
  ProductHost@{ shape: rectangle, label: "VSCode Host 入口" }
  ProductRenderer@{ shape: rectangle, label: "Canvas 渲染" }
  ProductFrontend@{ shape: rectangle, label: "前端" }
  ProductCore@{ shape: rectangle, label: "核心逻辑" }
  ProductMcp -.-> ProductCore
  ProductHost -.-> ProductCore
  ProductFrontend -.-> ProductCore
`;case`product_core`:return`---
title: "核心逻辑"
---
graph TB
  ProductCoreComposition@{ shape: rectangle, label: "核心服务装配" }
  ProductCoreAnalysis@{ shape: rectangle, label: "工程分析" }
  ProductCoreBescript@{ shape: rectangle, label: "BeScript 语法" }
  ProductCoreCanvas@{ shape: rectangle, label: "Canvas 数据" }
  ProductCoreInfra@{ shape: rectangle, label: "基础设施" }
  ProductCoreLint@{ shape: rectangle, label: "游戏工程静态检查" }
  ProductCorePersistence@{ shape: rectangle, label: "工程持久化" }
  ProductCoreRefactor@{ shape: rectangle, label: "游戏逻辑重构" }
  ProductCoreSdk@{ shape: rectangle, label: "平台 SDK" }
  ProductCoreSearch@{ shape: rectangle, label: "工程检索" }
  ProductCoreTsview@{ shape: rectangle, label: "TS 视图" }
  ProductCoreWorker@{ shape: rectangle, label: "工作进程命令" }
  ProductCoreTests@{ shape: rectangle, label: "核心回归" }
`;case`documentation`:return`---
title: "产品规范与参考"
---
graph TB
  DocumentationManual@{ shape: rectangle, label: "MechToolkit 发布与开发指南" }
  DocumentationSpecs@{ shape: rectangle, label: "产品规范" }
  DocumentationDiagrams@{ shape: rectangle, label: "架构展示资产" }
  DocumentationWorkflows@{ shape: rectangle, label: "ComfyUI 工作流" }
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
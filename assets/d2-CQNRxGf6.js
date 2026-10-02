var e=e=>{switch(e){case`index`:return`direction: down

Tools: {
  label: "自举检查工具"
}
Toolkit: {
  label: "Toolkit TypeScript 产品"
}
Product: {
  label: "Toolkit 产品源码参考文档"
}
Repository: {
  label: "仓库工程基础"
}
Specifications: {
  label: "工具链规范"
}
Fixtures: {
  label: "跨组件夹具"
}
Resources: {
  label: "共享静态资源"
}
Documentation: {
  label: "产品规范与参考"
}

Tools -> Repository
Tools -> Specifications
Toolkit -> Repository
Toolkit -> Specifications
Toolkit -> Fixtures
Product -> Fixtures
Product -> Resources
Product -> Documentation
`;case`core`:return`direction: down

Tools: {
  label: "自举检查工具"
}
Toolkit: {
  label: "Toolkit TypeScript 产品"
}
Product: {
  label: "Toolkit 产品源码参考文档"
}
Repository: {
  label: "仓库工程基础"
}
Specifications: {
  label: "工具链规范"
}
Fixtures: {
  label: "跨组件夹具"
}
Resources: {
  label: "共享静态资源"
}
Documentation: {
  label: "产品规范与参考"
}

Tools -> Repository
Tools -> Specifications
Toolkit -> Repository
Toolkit -> Specifications
Toolkit -> Fixtures
Product -> Fixtures
Product -> Resources
Product -> Documentation
`;case`tooling`:return`direction: down

ToolsTests: {
  label: "自身回归测试"
}
ToolsHooks: {
  label: "Git 钩子转发"
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

ToolsCli -> ToolsArchitecture
ToolsCli -> ToolsAnchoring
ToolsCli -> ToolsCoding
ToolsTests -> ToolsCli
ToolsHooks -> ToolsCli
ToolsArchitecture -> ToolsAnchoring
ToolsCoding -> ToolsArchitecture
ToolsTests -> ToolsArchitecture
ToolsCoding -> ToolsAnchoring
ToolsTests -> ToolsAnchoring
ToolsTests -> ToolsCoding
`;case`runtime`:return`direction: down

ToolkitConfiguration: {
  label: "产品类型检查配置"
}
ToolkitConfig: {
  label: "配置来源抽象与实现"
}
ToolkitVscode_plugin: {
  label: "VS Code 插件启动入口"
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

ToolkitHost -> ToolkitProject_model
ToolkitMcp -> ToolkitHost
ToolkitVscode_plugin -> ToolkitHost
ToolkitVscode_plugin -> ToolkitMcp
ToolkitPi_plugin -> ToolkitMcp
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
RepositoryDotnet: {
  label: "旧 .NET SDK 配置参考"
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
`;case`product`:return`direction: down

ProductMcp: {
  label: "MCP 协议入口"
}
ProductHost: {
  label: "VSCode Host 入口"
}
ProductRenderer: {
  label: "Canvas 渲染"
}
ProductFrontend: {
  label: "前端"
}
ProductCore: {
  label: "核心逻辑"
}

ProductMcp -> ProductCore
ProductHost -> ProductCore
ProductFrontend -> ProductCore
`;case`product_core`:return`direction: down

ProductCoreComposition: {
  label: "核心服务装配"
}
ProductCoreAnalysis: {
  label: "工程分析"
}
ProductCoreBescript: {
  label: "BeScript 语法"
}
ProductCoreCanvas: {
  label: "Canvas 数据"
}
ProductCoreInfra: {
  label: "基础设施"
}
ProductCoreLint: {
  label: "游戏工程静态检查"
}
ProductCorePersistence: {
  label: "工程持久化"
}
ProductCoreRefactor: {
  label: "游戏逻辑重构"
}
ProductCoreSdk: {
  label: "平台 SDK"
}
ProductCoreSearch: {
  label: "工程检索"
}
ProductCoreTsview: {
  label: "TS 视图"
}
ProductCoreWorker: {
  label: "工作进程命令"
}
ProductCoreTests: {
  label: "核心回归"
}
`;case`documentation`:return`direction: down

DocumentationManual: {
  label: "MechToolkit 发布与开发指南"
}
DocumentationSpecs: {
  label: "产品规范"
}
DocumentationDiagrams: {
  label: "架构展示资产"
}
DocumentationWorkflows: {
  label: "ComfyUI 工作流"
}
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};
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
skinparam rectangle<<Product>>{
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
skinparam rectangle<<Documentation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==自举检查工具" <<Tools>> as Tools
rectangle "==Toolkit TypeScript 产品" <<Toolkit>> as Toolkit
rectangle "==Toolkit 产品源码参考文档" <<Product>> as Product
rectangle "==仓库工程基础" <<Repository>> as Repository
rectangle "==工具链规范" <<Specifications>> as Specifications
rectangle "==跨组件夹具" <<Fixtures>> as Fixtures
rectangle "==共享静态资源" <<Resources>> as Resources
rectangle "==产品规范与参考" <<Documentation>> as Documentation

Tools .[#8D8D8D,thickness=2].> Repository
Tools .[#8D8D8D,thickness=2].> Specifications
Toolkit .[#8D8D8D,thickness=2].> Repository
Toolkit .[#8D8D8D,thickness=2].> Specifications
Toolkit .[#8D8D8D,thickness=2].> Fixtures
Product .[#8D8D8D,thickness=2].> Fixtures
Product .[#8D8D8D,thickness=2].> Resources
Product .[#8D8D8D,thickness=2].> Documentation
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
skinparam rectangle<<Product>>{
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
skinparam rectangle<<Documentation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==自举检查工具" <<Tools>> as Tools
rectangle "==Toolkit TypeScript 产品" <<Toolkit>> as Toolkit
rectangle "==Toolkit 产品源码参考文档" <<Product>> as Product
rectangle "==仓库工程基础" <<Repository>> as Repository
rectangle "==工具链规范" <<Specifications>> as Specifications
rectangle "==跨组件夹具" <<Fixtures>> as Fixtures
rectangle "==共享静态资源" <<Resources>> as Resources
rectangle "==产品规范与参考" <<Documentation>> as Documentation

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
rectangle "==产品类型检查配置" <<ToolkitConfiguration>> as ToolkitConfiguration
rectangle "==配置来源抽象与实现" <<ToolkitConfig>> as ToolkitConfig
rectangle "==VS Code 插件启动入口" <<ToolkitVscode_plugin>> as ToolkitVscode_plugin
rectangle "==Pi Agent 插件启动入口" <<ToolkitPi_plugin>> as ToolkitPi_plugin
rectangle "==MCP 协议接入" <<ToolkitMcp>> as ToolkitMcp
rectangle "==工作区 Host" <<ToolkitHost>> as ToolkitHost
rectangle "==工程格式纯计算包" <<ToolkitProject_model>> as ToolkitProject_model

ToolkitHost .[#8D8D8D,thickness=2].> ToolkitProject_model
ToolkitMcp .[#8D8D8D,thickness=2].> ToolkitHost
ToolkitVscode_plugin .[#8D8D8D,thickness=2].> ToolkitHost
ToolkitVscode_plugin .[#8D8D8D,thickness=2].> ToolkitMcp
ToolkitPi_plugin .[#8D8D8D,thickness=2].> ToolkitMcp
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
rectangle "==治理契约" <<SpecificationsTooling>> as SpecificationsTooling
rectangle "==文件布局契约" <<SpecificationsLayout>> as SpecificationsLayout
rectangle "==开发与协作契约" <<SpecificationsDevelopment>> as SpecificationsDevelopment
rectangle "==Toolkit 运行时合同" <<SpecificationsRuntime>> as SpecificationsRuntime
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
skinparam rectangle<<ProductRenderer>>{
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
rectangle "==Canvas 渲染" <<ProductRenderer>> as ProductRenderer
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
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
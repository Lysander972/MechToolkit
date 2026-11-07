var e=e=>{switch(e){case`asset_review_flow`:return`---
title: "07f · 同一候选的切片预览与评阅"
---
graph LR
  ToolkitMcpLogic@{ shape: rectangle, label: "工具合同与 HTTP 接入" }
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitAssets@{ shape: rectangle, label: "资产任务与确认业务" }
  ToolkitAsset_candidates@{ shape: rectangle, label: "候选存储与释放" }
  ToolkitAsset_processing@{ shape: rectangle, label: "产物确定性校验与切片预览" }
  ToolkitAsset_generation@{ shape: rectangle, label: "工作流绑定与远端生成执行" }
  ToolkitMcpLogic -. "\`renderSlice/review：taskId 与 artifactId\`" .-> ToolkitHostLogic
  ToolkitHostLogic -. "\`显式跨请求操作，不自动确认\`" .-> ToolkitAssets
  ToolkitAssets -. "\`读取同一候选\`" .-> ToolkitAsset_candidates
  ToolkitAssets -. "\`结构化 slice 与尺寸案例生成 PNG 预览\`" .-> ToolkitAsset_processing
  ToolkitAssets -. "\`有来源的工作流返回视觉评阅意见\`" .-> ToolkitAsset_generation
  ToolkitHostLogic -. "\`交付具名预览或意见，由调用方明确确认\`" .-> ToolkitMcpLogic
`;case`asset_generation_flow`:return`---
title: "07c · 生成、校验、候选与查询"
---
graph LR
  ToolkitMcpLogic@{ shape: rectangle, label: "工具合同与 HTTP 接入" }
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitAssets@{ shape: rectangle, label: "资产任务与确认业务" }
  ToolkitAsset_candidates@{ shape: rectangle, label: "候选存储与释放" }
  ToolkitAsset_generation@{ shape: rectangle, label: "工作流绑定与远端生成执行" }
  Runninghub@{ shape: rectangle, label: "RunningHub 远端 ComfyUI 执行" }
  ToolkitAsset_processing@{ shape: rectangle, label: "产物确定性校验与切片预览" }
  ToolkitMcpLogic -. "\`提交具名生成请求\`" .-> ToolkitHostLogic
  ToolkitHostLogic -. "\`submit：接受前接收具名上传输入\`" .-> ToolkitAssets
  ToolkitAssets -. "\`暂存输入流；成功后建立 Host Scope 的 pending 任务并返回 taskId\`" .-> ToolkitAsset_candidates
  ToolkitAssets -. "\`工作流绑定与原子远端执行\`" .-> ToolkitAsset_generation
  ToolkitAsset_generation -. "\`上传、prompt、history、view\`" .-> Runninghub
  ToolkitAsset_generation -. "\`具名产物字节流与执行事实\`" .-> ToolkitAssets
  ToolkitAssets -. "\`单次消费产物流，暂存未就绪内容\`" .-> ToolkitAsset_candidates
  ToolkitAssets -. "\`读取暂存字节供校验\`" .-> ToolkitAsset_candidates
  ToolkitAssets -. "\`按工作流输出绑定交付单文件或同组文件及明确要求\`" .-> ToolkitAsset_processing
  ToolkitAssets -. "\`将带产物身份的成功校验结果关联到同组候选，进入 ready\`" .-> ToolkitAsset_candidates
  ToolkitHostLogic -. "\`status/result：同 taskId 跨请求查询\`" .-> ToolkitAssets
`;case`asset_confirmation_flow`:return'---\ntitle: "07d · 明确确认、统一候选与实际提交"\n---\ngraph LR\n  ToolkitMcpLogic@{ shape: rectangle, label: "工具合同与 HTTP 接入" }\n  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }\n  ToolkitAssets@{ shape: rectangle, label: "资产任务与确认业务" }\n  ToolkitAsset_candidates@{ shape: rectangle, label: "候选存储与释放" }\n  ToolkitEditing@{ shape: rectangle, label: "编辑业务" }\n  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }\n  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }\n  ToolkitMcpLogic -. "`confirm：taskId、artifactId、目标 RelativePath`" .-> ToolkitHostLogic\n  ToolkitHostLogic -. "`固定选定产物与确认信息`" .-> ToolkitAssets\n  ToolkitAssets -. "`按校验结果读取所选产物及其关联文件`" .-> ToolkitAsset_candidates\n  ToolkitAssets -. "`importAsset：具名文件与目标准备统一 EntityChange，零写盘`" .-> ToolkitEditing\n  ToolkitEditing -. "`读取目标与引用基准，构造资源及 GUID 操作`" .-> ToolkitEntities\n  ToolkitAssets -. "`取得本次候选的只读预期结果，用于重读失败后的核对`" .-> ToolkitEditing\n  ToolkitEditing -. "`从同一候选取得文件、目录动作与预期内容`" .-> ToolkitEntities\n  ToolkitAssets -. "`commit：明确提交候选`" .-> ToolkitEditing\n  ToolkitEditing -. "`校验基准、提交并实际重读`" .-> ToolkitEntities\n  ToolkitEntities -. "`交付同次实际重读结果与读取基准`" .-> ToolkitEditing\n  ToolkitAssets -. "`提交与重读成功后释放候选`" .-> ToolkitAsset_candidates\n  ToolkitAssets -. "`分别交付写入与重读结果，重读失败时进入 reconciling 并保留候选`" .-> ToolkitHostLogic\n  ToolkitHostLogic -. "`重读成功时使用同次实际变化主动刷新派生视图`" .-> ToolkitView_service\n  ToolkitHostLogic -. "`交付实际资源身份及阶段错误；刷新失败保留已提交事实`" .-> ToolkitMcpLogic\n';case`asset_cancel_flow`:return`---
title: "07e · 取消、丢弃与资源释放"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitAssets@{ shape: rectangle, label: "资产任务与确认业务" }
  ToolkitAsset_generation@{ shape: rectangle, label: "工作流绑定与远端生成执行" }
  ToolkitAsset_candidates@{ shape: rectangle, label: "候选存储与释放" }
  ToolkitHostLogic -. "\`显式 cancel、discard 或关闭 Scope\`" .-> ToolkitAssets
  ToolkitAssets -. "\`中断本地执行，报告远端停止事实\`" .-> ToolkitAsset_generation
  ToolkitAssets -. "\`释放所属未完成或丢弃候选\`" .-> ToolkitAsset_candidates
`;case`asset_reconciliation_flow`:return`---
title: "07g · 重读失败后的实际状态核对"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitAssets@{ shape: rectangle, label: "资产任务与确认业务" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitEditing@{ shape: rectangle, label: "编辑业务" }
  ToolkitAsset_candidates@{ shape: rectangle, label: "候选存储与释放" }
  ToolkitHostLogic -. "\`源事件或 status 触发实体重建；status 返回当前阶段事实\`" .-> ToolkitAssets
  ToolkitHostLogic -. "\`按需完整重读实体，交付实际变化\`" .-> ToolkitEntities
  ToolkitHostLogic -. "\`交付已重建的实体状态供任务核对\`" .-> ToolkitAssets
  ToolkitHostLogic -. "\`按实际变化刷新派生视图，刷新错误独立交付\`" .-> ToolkitView_service
  ToolkitAssets -. "\`交付本次提交的只读预期结果\`" .-> ToolkitEditing
  ToolkitEditing -. "\`核对实际文件、目录、身份与预期结果\`" .-> ToolkitEntities
  ToolkitEntities -. "\`交付一致结果或具体冲突\`" .-> ToolkitEditing
  ToolkitEditing -. "\`交付核对结果\`" .-> ToolkitAssets
  ToolkitAssets -. "\`核对一致后释放候选\`" .-> ToolkitAsset_candidates
`;case`assets_context`:return`---
title: "07 · 资产管线系统上下文"
---
graph TB
  Frontend@{ shape: rectangle, label: "单一前端扩展" }
  Pi_agent@{ shape: rectangle, label: "Pi 官方运行时" }
  Asset_settings@{ shape: rectangle, label: "运行时配置与凭据来源" }
  Toolkit@{ shape: rectangle, label: "Toolkit TypeScript 产品" }
  Runninghub@{ shape: rectangle, label: "RunningHub 远端 ComfyUI 执行" }
  Asset_storage@{ shape: rectangle, label: "运行时用户候选暂存区" }
  Frontend -. "\`[...]\`" .-> Toolkit
  Pi_agent -. "\`官方扩展加载、会话事件、MCP 连接与结果交付\`" .-> Toolkit
  Toolkit -. "\`通过原生配置适配验证当前值、边界与读取失败\`" .-> Frontend
  Toolkit -. "\`原生远端执行与只读模型事实查询\`" .-> Runninghub
  Asset_settings -. "\`入口选择配置与凭据的唯一来源\`" .-> Toolkit
  Toolkit -. "\`工程外流式暂存与 Scope 释放\`" .-> Asset_storage
`;case`assets_pipeline`:return`---
title: "07a · 资产任务、执行与候选容器"
---
graph TB
  subgraph ToolkitMcp["\`MCP 协议接入\`"]
    ToolkitMcp.Logic@{ shape: rectangle, label: "工具合同与 HTTP 接入" }
  end
  subgraph ToolkitHost["\`工作区 Host\`"]
    ToolkitHost.Logic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  end
  ToolkitAssets@{ shape: rectangle, label: "资产任务与确认业务" }
  ToolkitAsset_candidates@{ shape: rectangle, label: "候选存储与释放" }
  ToolkitEditing@{ shape: rectangle, label: "编辑业务" }
  ToolkitAsset_processing@{ shape: rectangle, label: "产物确定性校验与切片预览" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  ToolkitAsset_generation@{ shape: rectangle, label: "工作流绑定与远端生成执行" }
  Renderer@{ shape: rectangle, label: "Canvas CPU 渲染引擎" }
  subgraph ToolkitConfig["\`配置来源抽象与实现\`"]
    ToolkitConfig.Logic@{ shape: rectangle, label: "只读配置来源" }
  end
  ToolkitMcp.Logic -.-> ToolkitHost.Logic
  ToolkitHost.Logic -. "\`同一 Workspace Layer 装配，Host 分发具名资产命令\`" .-> ToolkitAssets
  ToolkitAssets -. "\`任务绑定原子生成与评阅，不转移调度所有权\`" .-> ToolkitAsset_generation
  ToolkitAsset_generation -. "\`只读配置与调用边界凭据\`" .-> ToolkitConfig.Logic
  ToolkitHost.Logic -. "\`共享工作区处理服务\`" .-> ToolkitAsset_processing
  ToolkitAssets -. "\`产物校验与明确切片预览\`" .-> ToolkitAsset_processing
  ToolkitAsset_processing -. "\`只读原子执行交付的具名字节\`" .-> ToolkitAsset_generation
  ToolkitHost.Logic -. "\`共享工作区候选服务\`" .-> ToolkitAsset_candidates
  ToolkitAssets -. "\`任务关联候选标识、读取确认内容并释放\`" .-> ToolkitAsset_candidates
  ToolkitAsset_candidates -. "\`暂存具名产物字节\`" .-> ToolkitAsset_generation
  ToolkitAsset_candidates -. "\`保存同一产物的确定性校验结果\`" .-> ToolkitAsset_processing
  ToolkitHost.Logic -. "\`WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令\`" .-> ToolkitEditing
  ToolkitAssets -. "\`明确确认准备候选并提交，返回实际资源身份\`" .-> ToolkitEditing
  ToolkitHost.Logic -. "\`Host 主动重读实体；WorkspaceServices 读取状态\`" .-> ToolkitEntities
  ToolkitEditing -. "\`编辑候选经唯一实体入口提交\`" .-> ToolkitEntities
  ToolkitAsset_processing -. "\`切片预览复用唯一 CPU PNG 入口\`" .-> Renderer
`;case`assets_components`:return`---
title: "07b · 资产组件与代码端口"
---
graph TB
  subgraph ToolkitAssets["\`资产任务与确认业务\`"]
    ToolkitAssets.Scheduler@{ shape: rectangle, label: "唯一任务状态与有界调度" }
    ToolkitAssets.Confirmation@{ shape: rectangle, label: "明确确认与提交结果" }
    ToolkitAssets.Review@{ shape: rectangle, label: "跨请求切片预览与评阅" }
    ToolkitAssets.Contracts@{ shape: rectangle, label: "具名任务输入与结果" }
  end
  subgraph ToolkitAsset_generation["\`工作流绑定与远端生成执行\`"]
    ToolkitAsset_generation.Entry@{ shape: rectangle, label: "生成与评阅执行入口" }
    ToolkitAsset_generation.Workflows@{ shape: rectangle, label: "能力白名单与模型绑定" }
    ToolkitAsset_generation.Transport@{ shape: rectangle, label: "原生 ComfyUI 远端传输" }
  end
  subgraph ToolkitAsset_processing["\`产物确定性校验与切片预览\`"]
    ToolkitAsset_processing.Inspection@{ shape: rectangle, label: "结构化产物校验" }
    ToolkitAsset_processing.Slice@{ shape: rectangle, label: "九宫格预览装配" }
  end
  subgraph ToolkitAsset_candidates["\`候选存储与释放\`"]
    ToolkitAsset_candidates.Storage@{ shape: rectangle, label: "Scope 内的字节与产物索引" }
  end
  subgraph ToolkitEditing["\`编辑业务\`"]
    ToolkitEditing.Asset_import@{ shape: rectangle, label: "资产入库候选准备" }
  end
  ToolkitAssets.Scheduler -. "\`具名请求、状态与结果\`" .-> ToolkitAssets.Contracts
  ToolkitAssets.Confirmation -. "\`选定产物、相对目标和确认结果\`" .-> ToolkitAssets.Contracts
  ToolkitAssets.Review -. "\`选定候选、切片案例及评阅输入与输出\`" .-> ToolkitAssets.Contracts
  ToolkitAssets.Contracts -. "\`提交输入绑定原子生成合同\`" .-> ToolkitAsset_generation.Entry
  ToolkitAsset_generation.Workflows -. "\`绑定后的原生 ComfyUI graph\`" .-> ToolkitAsset_generation.Transport
  ToolkitAsset_generation.Entry -. "\`选择明确能力和工作流\`" .-> ToolkitAsset_generation.Workflows
  ToolkitAsset_generation.Entry -. "\`执行具名输入并读取实际结果\`" .-> ToolkitAsset_generation.Transport
  ToolkitAssets.Contracts -. "\`质量要求绑定唯一产物校验合同\`" .-> ToolkitAsset_processing.Inspection
  ToolkitAssets.Contracts -. "\`切片结果绑定唯一处理入口\`" .-> ToolkitAsset_processing.Slice
  ToolkitAssets.Contracts -. "\`结果复用候选存储合同\`" .-> ToolkitAsset_candidates.Storage
  ToolkitAssets.Contracts -. "\`确认输入绑定统一入库准备合同\`" .-> ToolkitEditing.Asset_import
`;case`canvas_render`:return'---\ntitle: "Canvas CPU 渲染引擎"\n---\ngraph TB\n  RendererEntry@{ shape: rectangle, label: "唯一渲染入口" }\n  RendererNodes@{ shape: rectangle, label: "节点能力调度" }\n  RendererFeatures@{ shape: rectangle, label: "节点绘制特性" }\n  RendererImages@{ shape: rectangle, label: "图片合成" }\n  RendererLayout@{ shape: rectangle, label: "确定性布局计算" }\n  RendererDom_schema@{ shape: rectangle, label: "文档输入校验" }\n  RendererFields@{ shape: rectangle, label: "特性有效值" }\n  RendererValues@{ shape: rectangle, label: "富文本解析" }\n  RendererState@{ shape: rectangle, label: "渲染会话与资源结算" }\n  RendererSchema@{ shape: rectangle, label: "结构化节点 Schema" }\n  RendererRaster@{ shape: rectangle, label: "CPU 光栅化与 PNG 编码（设计）" }\n  RendererContracts@{ shape: rectangle, label: "CanvasDocument 与渲染合同" }\n  RendererSchema -. "`文档节点类型`" .-> RendererContracts\n  RendererFields -. "`消费节点类型白名单`" .-> RendererContracts\n  RendererValues -. "`产生具名文本段`" .-> RendererContracts\n  RendererLayout -. "`交付唯一布局结果`" .-> RendererContracts\n  RendererRaster -. "`像素与 PNG 结果`" .-> RendererContracts\n  RendererState -. "`会话与资源状态`" .-> RendererContracts\n  RendererEntry -. "`唯一入口输入输出`" .-> RendererContracts\n  RendererDom_schema -. "`提取节点专属字段`" .-> RendererSchema\n  RendererFields -. "`消费唯一节点 Schema`" .-> RendererSchema\n  RendererLayout -. "`消费同次校验后的节点字段与身份`" .-> RendererDom_schema\n  RendererEntry -. "`文档校验`" .-> RendererDom_schema\n  RendererNodes -. "`消费确定布局节点`" .-> RendererLayout\n  RendererNodes -. "`递归顺序由调度拥有，节点投影由特性拥有`" .-> RendererFeatures\n  RendererNodes -. "`共享同次绘制会话`" .-> RendererState\n  RendererEntry -. "`能力调度`" .-> RendererNodes\n  RendererLayout -. "`持有节点有效值的唯一布局结果`" .-> RendererFields\n  RendererImages -. "`消费同一布局结果`" .-> RendererLayout\n  RendererImages -. "`使用会话拥有的资源`" .-> RendererState\n  RendererFeatures -. "`复用节点投影输入和同次会话合同`" .-> RendererImages\n  RendererLayout -. "`持有解析后的同次文本段`" .-> RendererValues\n  RendererLayout -. "`读取同次会话的固定字体`" .-> RendererState\n  RendererEntry -. "`布局阶段`" .-> RendererLayout\n  RendererState -. "`会话拥有独占软件 surface`" .-> RendererRaster\n  RendererEntry -. "`独占会话与资源结算`" .-> RendererState\n';case`pi_session_start`:return`---
title: "06c · Pi 会话启动与读取交付"
---
graph LR
  Pi_agent@{ shape: rectangle, label: "Pi 官方运行时" }
  ToolkitPi_pluginLogic@{ shape: rectangle, label: "扩展生命周期与接入" }
  ToolkitConfigLogic@{ shape: rectangle, label: "只读配置来源" }
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitMcpLogic@{ shape: rectangle, label: "工具合同与 HTTP 接入" }
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitPreview@{ shape: rectangle, label: "Canvas 预览业务" }
  Pi_agent -. "\`session_start：ctx.cwd 与 flags\`" .-> ToolkitPi_pluginLogic
  ToolkitPi_pluginLogic -. "\`读取显式配置\`" .-> ToolkitConfigLogic
  ToolkitPi_pluginLogic -. "\`建立 memory Host\`" .-> ToolkitHostLogic
  ToolkitPi_pluginLogic -. "\`启动回环 HTTP，取得 endpoint\`" .-> ToolkitMcpLogic
  ToolkitPi_pluginLogic -. "\`registerMcpServer：登记本会话 HTTP endpoint；连接与同名覆盖由 Pi 管理\`" .-> Pi_agent
  Pi_agent -. "\`具名工具请求与取消信号\`" .-> ToolkitMcpLogic
  ToolkitMcpLogic -. "\`受控读取或预览请求\`" .-> ToolkitHostLogic
  ToolkitHostLogic -. "\`取得 HTML/XML 具名视图\`" .-> ToolkitView_service
  ToolkitHostLogic -. "\`视图与完整资源到 PNG\`" .-> ToolkitPreview
  ToolkitMcpLogic -. "\`文本、PNG、结构化结果或实际错误\`" .-> Pi_agent
`;case`pi_session_shutdown`:return`---
title: "06d · Pi 关闭、替换与 reload"
---
graph LR
  Pi_agent@{ shape: rectangle, label: "Pi 官方运行时" }
  ToolkitPi_pluginLogic@{ shape: rectangle, label: "扩展生命周期与接入" }
  ToolkitMcpLogic@{ shape: rectangle, label: "工具合同与 HTTP 接入" }
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  Pi_agent -. "\`session_shutdown\`" .-> ToolkitPi_pluginLogic
  ToolkitPi_pluginLogic -. "\`unregisterMcpServer：结束连接与调用\`" .-> Pi_agent
  ToolkitPi_pluginLogic -. "\`关闭回环 HTTP\`" .-> ToolkitMcpLogic
  ToolkitPi_pluginLogic -. "\`关闭 Scope，取消调用并释放候选\`" .-> ToolkitHostLogic
`;case`pi_context`:return`---
title: "06 · Pi 系统上下文"
---
graph TB
  Pi_agent@{ shape: rectangle, label: "Pi 官方运行时" }
  Toolkit@{ shape: rectangle, label: "Toolkit TypeScript 产品" }
  subgraph Documentation["\`产品规范与参考\`"]
    Documentation.Manual@{ shape: rectangle, label: "MechToolkit 发布与开发指南" }
  end
  Pi_agent -. "\`官方扩展加载、会话事件、MCP 连接与结果交付\`" .-> Toolkit
  Toolkit -. "\`同树版本的 MechToolkit Skill\`" .-> Documentation.Manual
`;case`pi_integration`:return`---
title: "06a · Pi 容器与生命周期"
---
graph TB
  subgraph ToolkitPi_plugin["\`Pi 官方扩展适配\`"]
    subgraph ToolkitPi_plugin.Logic["\`扩展生命周期与接入\`"]
      ToolkitPi_plugin.Logic.Registration@{ shape: rectangle, label: "扩展工厂与 flags" }
      ToolkitPi_plugin.Logic.Lifecycle@{ shape: rectangle, label: "会话拥有的工作区资源" }
      ToolkitPi_plugin.Logic.Context@{ shape: rectangle, label: "Skills 与结果上下文" }
    end
  end
  ToolkitConfigLogicPi@{ shape: rectangle, label: "Pi 只读参数归一化" }
  subgraph ToolkitMcp["\`MCP 协议接入\`"]
    ToolkitMcp.Logic@{ shape: rectangle, label: "工具合同与 HTTP 接入" }
  end
  subgraph ToolkitHost["\`工作区 Host\`"]
    ToolkitHost.Logic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  end
  ToolkitInvocations@{ shape: rectangle, label: "调用记录与取消" }
  ToolkitPi_plugin.Logic.Registration -. "\`声明会话唯一工作区资源\`" .-> ToolkitPi_plugin.Logic.Lifecycle
  ToolkitPi_plugin.Logic.Registration -. "\`绑定官方上下文输入\`" .-> ToolkitPi_plugin.Logic.Context
  ToolkitPi_plugin.Logic.Lifecycle -. "\`绑定唯一 Host 生命周期合同\`" .-> ToolkitHost.Logic
  ToolkitMcp.Logic -.-> ToolkitHost.Logic
  ToolkitHost.Logic -. "\`外部请求登记结果与取消；状态刷新只读取\`" .-> ToolkitInvocations
  ToolkitPi_plugin.Logic -. "\`启动回环 HTTP，交由 Pi 官方 MCP 客户端消费\`" .-> ToolkitMcp.Logic
`;case`pi_components`:return`---
title: "06b · Pi 扩展组件与代码端口"
---
graph TB
  ToolkitPi_pluginLogicRegistration@{ shape: rectangle, label: "扩展工厂与 flags" }
  ToolkitPi_pluginLogicLifecycle@{ shape: rectangle, label: "会话拥有的工作区资源" }
  ToolkitPi_pluginLogicContext@{ shape: rectangle, label: "Skills 与结果上下文" }
  ToolkitPi_pluginLogicRegistration -. "\`声明会话唯一工作区资源\`" .-> ToolkitPi_pluginLogicLifecycle
  ToolkitPi_pluginLogicRegistration -. "\`绑定官方上下文输入\`" .-> ToolkitPi_pluginLogicContext
`;case`change_plan`:return`---
title: "04a · 变更计划纯计算（设计）"
---
graph TB
  PureChange_plan@{ shape: rectangle, label: "变更计划纯计算" }
  ToolkitScriptContextDevice_context@{ shape: rectangle, label: "全局变量、零件元数据与零件上下文" }
  PureCanvasLogic@{ shape: rectangle, label: "四向格式转换" }
  ToolkitAnalysis@{ shape: rectangle, label: "纯符号表与调用图" }
  ToolkitScriptAstLocal_ast@{ shape: rectangle, label: "局部 AST" }
  ToolkitProject_modelLogic@{ shape: rectangle, label: "工程设置、路径、GUID 与权威逻辑实体" }
  PureChange_plan -. "\`复用实体快照与统一操作合同\`" .-> ToolkitProject_modelLogic
  ToolkitScriptAstLocal_ast -.-> ToolkitProject_modelLogic
  ToolkitScriptContextDevice_context -.-> ToolkitProject_modelLogic
  ToolkitScriptContextDevice_context -.-> ToolkitScriptAstLocal_ast
  PureChange_plan -. "\`只读符号表与调用图\`" .-> ToolkitAnalysis
  ToolkitAnalysis -.-> ToolkitProject_modelLogic
  ToolkitAnalysis -.-> ToolkitScriptAstLocal_ast
`;case`frontend_canvas_display`:return`---
title: "02m · 前端 Canvas 与主干共享预览（设计）"
---
graph LR
  FrontendPlugin@{ shape: rectangle, label: "VSCode 宿主与 Effect 组合根" }
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitPreview@{ shape: rectangle, label: "Canvas 预览业务" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  Renderer@{ shape: rectangle, label: "Canvas CPU 渲染引擎" }
  FrontendPlugin -. "\`文档定位源身份；同一 Host.openPreview，面板持有 take/close 资源\`" .-> ToolkitHostLogic
  ToolkitHostLogic -. "\`读取具名 HTML/XML 与完整来源基准\`" .-> ToolkitView_service
  ToolkitHostLogic -. "\`同一 viewport、字体、显式时间与唯一 CPU 后端\`" .-> ToolkitPreview
  ToolkitPreview -. "\`读取本次实际引用资源及 revision\`" .-> ToolkitEntities
  ToolkitPreview -. "\`共用 CPU 渲染，交付 PNG 与最终基准\`" .-> Renderer
  ToolkitHostLogic -. "\`工程变化的同次影响驱动已有展示；前端只消费产物\`" .-> ToolkitView_service
`;case`initial_read`:return`---
title: "02i · 首次读取与格式交付"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  ToolkitSemantic@{ shape: rectangle, label: "语义装配（设计）" }
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitConversionTs@{ shape: rectangle, label: "零件与 TS 视图双向转换" }
  ToolkitConversionHtml@{ shape: rectangle, label: "独立 Canvas 与 HTML 视图双向转换" }
  ToolkitPreview@{ shape: rectangle, label: "Canvas 预览业务" }
  ToolkitHostLogic -. "\`建立监听并等待 ready；期间实际变化保持登记\`" .-> ToolkitFiles
  ToolkitHostLogic -. "\`首次完整装配与确定读取基准；后续批次复用同一实体服务按变化目录重读\`" .-> ToolkitEntities
  ToolkitEntities -. "\`按快照装配完整 Context 与转换依据\`" .-> ToolkitSemantic
  ToolkitHostLogic -. "\`按模式交付具名视图\`" .-> ToolkitView_service
  ToolkitView_service -. "\`零件到 TS 视图\`" .-> ToolkitConversionTs
  ToolkitView_service -. "\`Canvas 到 HTML/XML 视图\`" .-> ToolkitConversionHtml
  ToolkitHostLogic -. "\`files：枚举现存派生路径；memory 跳过\`" .-> ToolkitEntities
  ToolkitHostLogic -. "\`files：按完整源声明计算发布和删除；解析失败保留未确定范围，路径冲突交付诊断\`" .-> ToolkitView_service
  ToolkitHostLogic -. "\`files Canvas：以固定视口、字体和时间渲染同次视图\`" .-> ToolkitPreview
  ToolkitHostLogic -. "\`files Canvas：交回同次 PNG 与实际依赖，装配展示壳\`" .-> ToolkitView_service
  ToolkitView_service -. "\`files：执行派生发布和删除；期间监听变化仍由 Host 批次处理\`" .-> ToolkitEntities
`;case`diagnostics_read`:return`---
title: "02j · 主动诊断"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitDiagnostics@{ shape: rectangle, label: "诊断业务" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  ToolkitAnalysisLogic@{ shape: rectangle, label: "纯分析计算" }
  ToolkitLint@{ shape: rectangle, label: "脚本静态检查纯计算" }
  ToolkitHostLogic -. "\`inspect：明确基准与请求\`" .-> ToolkitDiagnostics
  ToolkitDiagnostics -. "\`主动读取确定快照\`" .-> ToolkitEntities
  ToolkitDiagnostics -. "\`复用同次实体读取已计算的符号与调用关系\`" .-> ToolkitAnalysisLogic
  ToolkitDiagnostics -. "\`按绑定执行 ScriptLint，再对同一完整图执行一次 CallGraphLint；交付具名诊断\`" .-> ToolkitLint
`;case`preview_read`:return`---
title: "02k · 具名视图到进程内 PNG"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitPreview@{ shape: rectangle, label: "Canvas 预览业务" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  Renderer@{ shape: rectangle, label: "Canvas CPU 渲染引擎" }
  ToolkitHostLogic -. "\`读取具名 HTML/XML 视图\`" .-> ToolkitView_service
  ToolkitHostLogic -. "\`交付结构化 Canvas 与明确渲染输入\`" .-> ToolkitPreview
  ToolkitPreview -. "\`按实际基准读取资源\`" .-> ToolkitEntities
  ToolkitPreview -. "\`进程内 CPU 渲染并返回 PNG 与诊断\`" .-> Renderer
`;case`source_refresh`:return`---
title: "02f · 文件变化的单侧主动驱动"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitConversionTs@{ shape: rectangle, label: "零件与 TS 视图双向转换" }
  ToolkitConversionHtml@{ shape: rectangle, label: "独立 Canvas 与 HTML 视图双向转换" }
  ToolkitPreview@{ shape: rectangle, label: "Canvas 预览业务" }
  ToolkitHostLogic -. "\`take：取得精确变化路径\`" .-> ToolkitFiles
  ToolkitHostLogic -. "\`批次刷新：单次许可内分类、重读并取得同次完整语义基准，交付派生路径及更新删除标识\`" .-> ToolkitEntities
  ToolkitHostLogic -. "\`refresh：交付实际变化、基准和展示依赖，取得受影响视图及展示\`" .-> ToolkitView_service
  ToolkitView_service -. "\`读取格式实体与实际资源\`" .-> ToolkitEntities
  ToolkitView_service -. "\`更新或删除 TS 派生结果\`" .-> ToolkitConversionTs
  ToolkitView_service -. "\`更新或删除 HTML 派生结果\`" .-> ToolkitConversionHtml
  ToolkitHostLogic -. "\`files Canvas：以固定视口、字体和时间渲染同次视图，取得 PNG 与实际依赖\`" .-> ToolkitPreview
  ToolkitHostLogic -. "\`files Canvas：交回 PNG 与依赖，装配 HTML 展示壳\`" .-> ToolkitView_service
  ToolkitView_service -. "\`files：发布或删除派生内容；TS 正文与索引同批交付\`" .-> ToolkitEntities
  ToolkitHostLogic -. "\`按实际影响刷新已打开的展示；memory 仅按展示请求生成视图\`" .-> ToolkitPreview
`;case`commit_refresh`:return`---
title: "02g · 候选提交与实际重读"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitEditing@{ shape: rectangle, label: "编辑业务" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitHostLogic -. "\`提交明确候选与原读取基准\`" .-> ToolkitEditing
  ToolkitEditing -. "\`commit：核对基准并提交\`" .-> ToolkitEntities
  ToolkitEntities -. "\`实际 IO；成功或失败均重读磁盘事实\`" .-> ToolkitFiles
  ToolkitEntities -. "\`交付同次实际重读结果及写入或重读错误\`" .-> ToolkitEditing
  ToolkitEditing -. "\`交付实际变化与错误；重读失败时不生成变化集合\`" .-> ToolkitHostLogic
  ToolkitHostLogic -. "\`重读成功时按实际变化刷新，包括写入失败或请求中断后的收尾\`" .-> ToolkitView_service
`;case`refactor_prepare`:return`---
title: "02l · 快速重构意图到统一候选（设计）"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitEditing@{ shape: rectangle, label: "编辑业务" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  PureChange_plan@{ shape: rectangle, label: "变更计划纯计算" }
  ToolkitAnalysisLogic@{ shape: rectangle, label: "纯分析计算" }
  ToolkitHostLogic -. "\`refactor：目标与原读取基准\`" .-> ToolkitEditing
  ToolkitEditing -. "\`读取目标、关联实体与完整语义基准\`" .-> ToolkitEntities
  ToolkitEditing -. "\`同次快照、分析与 RefactorChangePlanRequest\`" .-> PureChange_plan
  ToolkitEditing -. "\`物化统一 EntityChange，从候选及未改变依赖准备语义输入，零写入\`" .-> ToolkitEntities
  ToolkitEditing -. "\`分析候选语义并校验受影响绑定，提交复用 commit\`" .-> ToolkitAnalysisLogic
`;case`workspace_close`:return`---
title: "02h · 工作区关闭与取消"
---
graph LR
  ToolkitHostLogic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  ToolkitInvocations@{ shape: rectangle, label: "调用记录与取消" }
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }
  ToolkitHostLogic -. "\`结束调用与取消等待\`" .-> ToolkitInvocations
  ToolkitHostLogic -. "\`释放派生关联与转换资源\`" .-> ToolkitView_service
  ToolkitHostLogic -. "\`释放文件派生快照\`" .-> ToolkitEntities
  ToolkitHostLogic -. "\`关闭唯一监听与 IO Scope\`" .-> ToolkitFiles
`;case`workspace_lifecycle`:return`---
title: "02b · 工作区生命周期与所有权"
---
graph TB
  subgraph ToolkitHost["\`工作区 Host\`"]
    subgraph ToolkitHost.Logic["\`Host 组合根与受控入口\`"]
      ToolkitHost.Logic.Lifecycle@{ shape: rectangle, label: "唯一工作区生命周期" }
      ToolkitHost.Logic.Refresh@{ shape: rectangle, label: "唯一文件变化主动调度" }
      ToolkitHost.Logic.Composition@{ shape: rectangle, label: "服务组合根" }
    end
  end
  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }
  subgraph ToolkitEntities["\`第二层：工程实体\`"]
    ToolkitEntities.Assembly@{ shape: rectangle, label: "逻辑来源与单次归属装配" }
    ToolkitEntities.Refresh@{ shape: rectangle, label: "显式重读与基准交付" }
    ToolkitEntities.Transaction@{ shape: rectangle, label: "提交与实际重读" }
    ToolkitEntities.State@{ shape: rectangle, label: "文件派生实体快照" }
  end
  ToolkitInvocations@{ shape: rectangle, label: "调用记录与取消" }
  subgraph ToolkitView_service["\`第三层：视图关联与交付\`"]
    ToolkitView_service.Refresh@{ shape: rectangle, label: "唯一派生刷新" }
  end
  ToolkitHost.Logic.Lifecycle -. "\`建立与释放同一工作区服务\`" .-> ToolkitHost.Logic.Composition
  ToolkitHost.Logic.Lifecycle -. "\`启动工作区 Scope 内的单一监听消费\`" .-> ToolkitHost.Logic.Refresh
  ToolkitHost.Logic.Refresh -. "\`读取同一工作区共享实例\`" .-> ToolkitHost.Logic.Composition
  ToolkitHost.Logic.Refresh -. "\`按实际目录批次重读文件\`" .-> ToolkitEntities.Refresh
  ToolkitEntities.Refresh -. "\`比较实际重读前后的逻辑实体事实\`" .-> ToolkitEntities.State
  ToolkitEntities.Transaction -. "\`提交收尾重读实际文件并更新快照或错误结果\`" .-> ToolkitEntities.State
  ToolkitHost.Logic.Refresh -. "\`刷新端口复用实际视图及预览影响结果，执行保持 TODO\`" .-> ToolkitView_service.Refresh
  ToolkitHost.Logic -. "\`Host 装配并单一消费文件变化；工程业务 IO 归实体\`" .-> ToolkitFiles
  ToolkitHost.Logic -. "\`外部请求登记结果与取消；状态刷新只读取\`" .-> ToolkitInvocations
`;case`read_flow`:return`---
title: "02c · 读取、语义、转换与诊断"
---
graph TB
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  ToolkitLanguage@{ shape: rectangle, label: "语言查询业务" }
  subgraph ToolkitConversion["\`仅缓存状态的转换服务\`"]
    ToolkitConversion.Ts@{ shape: rectangle, label: "零件与 TS 视图双向转换" }
    ToolkitConversion.Html@{ shape: rectangle, label: "独立 Canvas 与 HTML 视图双向转换" }
    ToolkitConversion.Canvas@{ shape: rectangle, label: "Canvas 与 HTML 片段双向转换" }
  end
  ToolkitDiagnostics@{ shape: rectangle, label: "诊断业务" }
  ToolkitLint@{ shape: rectangle, label: "脚本静态检查纯计算" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }
  ToolkitSemantic@{ shape: rectangle, label: "语义装配（设计）" }
  subgraph ToolkitAnalysis["\`纯符号表与调用图\`"]
    ToolkitAnalysis.Logic@{ shape: rectangle, label: "纯分析计算" }
  end
  ToolkitEntities -. "\`实体层唯一业务 IO；读取与提交分别授权到文件\`" .-> ToolkitFiles
  ToolkitEntities -. "\`快照语义装配\`" .-> ToolkitSemantic
  ToolkitSemantic -. "\`符号表与调用图\`" .-> ToolkitAnalysis.Logic
  ToolkitConversion.Canvas -. "\`实体输入与资源依赖\`" .-> ToolkitEntities
  ToolkitConversion.Ts -. "\`转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付\`" .-> ToolkitEntities
  ToolkitConversion.Html -. "\`独立 Canvas 与视图实体\`" .-> ToolkitEntities
  ToolkitConversion.Ts -. "\`内部 Canvas 双向转换\`" .-> ToolkitConversion.Canvas
  ToolkitConversion.Html -. "\`共享片段服务的工作区装配\`" .-> ToolkitConversion.Canvas
  ToolkitView_service -. "\`视图主动读取实体；派生结果经实体入口交付\`" .-> ToolkitEntities
  ToolkitView_service -. "\`视图唯一驱动转换与缓存释放\`" .-> ToolkitConversion.Ts
  ToolkitView_service -.-> ToolkitConversion.Html
  ToolkitLint -. "\`分析结果\`" .-> ToolkitAnalysis.Logic
  ToolkitDiagnostics -. "\`诊断主动读取实体快照\`" .-> ToolkitEntities
  ToolkitDiagnostics -.-> ToolkitAnalysis.Logic
  ToolkitDiagnostics -. "\`调用纯检查，诊断状态归 Diagnostics\`" .-> ToolkitLint
  ToolkitLanguage -. "\`共享实体服务与完整读取基准\`" .-> ToolkitEntities
  ToolkitLanguage -. "\`共享诊断服务和唯一结果类型\`" .-> ToolkitDiagnostics
`;case`write_flow`:return`---
title: "02d · 编辑、候选、提交与刷新"
---
graph TB
  ToolkitEditing@{ shape: rectangle, label: "编辑业务" }
  subgraph ToolkitEntities["\`第二层：工程实体\`"]
    ToolkitEntities.Assembly@{ shape: rectangle, label: "逻辑来源与单次归属装配" }
    ToolkitEntities.Refresh@{ shape: rectangle, label: "显式重读与基准交付" }
    ToolkitEntities.Transaction@{ shape: rectangle, label: "提交与实际重读" }
    ToolkitEntities.State@{ shape: rectangle, label: "文件派生实体快照" }
  end
  subgraph ToolkitConversion["\`仅缓存状态的转换服务\`"]
    ToolkitConversion.Ts@{ shape: rectangle, label: "零件与 TS 视图双向转换" }
    ToolkitConversion.Html@{ shape: rectangle, label: "独立 Canvas 与 HTML 视图双向转换" }
  end
  PureChange_plan@{ shape: rectangle, label: "变更计划纯计算" }
  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }
  ToolkitAnalysisLogic@{ shape: rectangle, label: "纯分析计算" }
  ToolkitView_serviceRefresh@{ shape: rectangle, label: "唯一派生刷新" }
  ToolkitEditing -. "\`视图反向转换\`" .-> ToolkitConversion.Ts
  ToolkitEditing -. "\`独立 Canvas 反向转换\`" .-> ToolkitConversion.Html
  ToolkitEditing -. "\`统一变更计划与候选\`" .-> PureChange_plan
  PureChange_plan -. "\`只读符号表与调用图\`" .-> ToolkitAnalysisLogic
  ToolkitEntities.Refresh -. "\`比较实际重读前后的逻辑实体事实\`" .-> ToolkitEntities.State
  ToolkitEntities.Transaction -. "\`提交收尾重读实际文件并更新快照或错误结果\`" .-> ToolkitEntities.State
  ToolkitEntities -. "\`实体层唯一业务 IO；读取与提交分别授权到文件\`" .-> ToolkitFiles
`;case`preview_flow`:return`---
title: "02e · 具名视图与资源到 PNG"
---
graph TB
  FrontendPlugin@{ shape: rectangle, label: "VSCode 宿主与 Effect 组合根" }
  subgraph ToolkitHost["\`工作区 Host\`"]
    ToolkitHost.Logic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  end
  ToolkitPreview@{ shape: rectangle, label: "Canvas 预览业务" }
  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }
  Renderer@{ shape: rectangle, label: "Canvas CPU 渲染引擎" }
  ToolkitHost.Logic -. "\`WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令\`" .-> ToolkitPreview
  ToolkitHost.Logic -. "\`Host 主动重读实体；WorkspaceServices 读取状态\`" .-> ToolkitEntities
  ToolkitPreview -. "\`预览只读实体资源\`" .-> ToolkitEntities
  ToolkitPreview -. "\`复用唯一渲染引擎\`" .-> Renderer
  FrontendPlugin -.-> ToolkitHost.Logic
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
  subgraph ToolkitScriptConversion["\`三层纯转换设计\`"]
    ToolkitScriptConversion.Second@{ shape: rectangle, label: "Context 与官方 TS AST 业务转换" }
  end
  ToolkitProject_modelTests@{ shape: rectangle, label: "工程格式测试" }
  subgraph ToolkitScriptContext["\`零件上下文层\`"]
    ToolkitScriptContext.Device_context@{ shape: rectangle, label: "全局变量、零件元数据与零件上下文" }
  end
  PureCanvasLogic@{ shape: rectangle, label: "四向格式转换" }
  subgraph ToolkitScriptAst["\`局部 AST 层\`"]
    ToolkitScriptAst.Local_ast@{ shape: rectangle, label: "局部 AST" }
  end
  ToolkitProject_modelLogic@{ shape: rectangle, label: "工程设置、路径、GUID 与权威逻辑实体" }
  SpecificationsBescript@{ shape: rectangle, label: "BEScript 内部格式" }
  ToolkitScriptConversion.Second -.-> ToolkitScriptAst.Local_ast
  ToolkitScriptConversion.Second -.-> ToolkitScriptContext.Device_context
  ToolkitScriptContext.Device_context -.-> ToolkitScriptAst.Local_ast
  ToolkitScriptConversion.Second -.-> PureCanvasLogic
  ToolkitScriptConversion.Second -.-> ToolkitProject_modelLogic
  ToolkitScriptAst.Local_ast -.-> ToolkitProject_modelLogic
  ToolkitScriptContext.Device_context -.-> ToolkitProject_modelLogic
  ToolkitProject_modelTests -.-> ToolkitProject_modelLogic
  ToolkitScriptConversion.Second -.-> SpecificationsBescript
  ToolkitScriptAst.Local_ast -.-> SpecificationsBescript
  ToolkitScriptContext.Device_context -.-> SpecificationsBescript
`;case`bescript_third_layer`:return`---
title: "第三层：官方 TS 解析打印与 TS 转换服务"
---
graph TB
  subgraph ToolkitHost["\`工作区 Host\`"]
    ToolkitHost.Logic@{ shape: rectangle, label: "Host 组合根与受控入口" }
  end
  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }
  subgraph ToolkitConversion["\`仅缓存状态的转换服务\`"]
    ToolkitConversion.Ts@{ shape: rectangle, label: "零件与 TS 视图双向转换" }
    ToolkitConversion.Canvas@{ shape: rectangle, label: "Canvas 与 HTML 片段双向转换" }
  end
  subgraph ToolkitScript["\`BEScript 纯计算包\`"]
    ToolkitScript.ConversionThird@{ shape: rectangle, label: "官方 TS 解析打印与局部装配" }
  end
  SpecificationsBescript@{ shape: rectangle, label: "BEScript 内部格式" }
  ToolkitHost.Logic -. "\`WorkspaceServices.ts 仅装配；缓存由视图驱动\`" .-> ToolkitConversion.Ts
  ToolkitConversion.Ts -. "\`官方 TS 解析打印合同\`" .-> ToolkitScript.ConversionThird
  ToolkitHost.Logic -. "\`WorkspaceServices.ts 仅装配共享转换\`" .-> ToolkitConversion.Canvas
  ToolkitConversion.Ts -. "\`内部 Canvas 双向转换\`" .-> ToolkitConversion.Canvas
  ToolkitHost.Logic -. "\`Host 主动驱动视图；WorkspaceServices 装配\`" .-> ToolkitView_service
  ToolkitView_service -. "\`视图唯一驱动转换与缓存释放\`" .-> ToolkitConversion.Ts
  ToolkitScript.ConversionThird -.-> SpecificationsBescript
  ToolkitConversion.Ts -.-> SpecificationsBescript
`;case`index`:return`---
title: "01 · 产品总览"
---
graph TB
  Frontend@{ shape: rectangle, label: "单一前端扩展" }
  Toolkit@{ shape: rectangle, label: "Toolkit TypeScript 产品" }
  Canvas@{ shape: rectangle, label: "Canvas 渲染产品" }
  Pure@{ shape: rectangle, label: "业务纯计算" }
  Frontend -. "\`[...]\`" .-> Toolkit
  Toolkit -. "\`通过原生配置适配验证当前值、边界与读取失败\`" .-> Frontend
  Toolkit -. "\`[...]\`" .-> Pure
  Pure -. "\`[...]\`" .-> Toolkit
  Toolkit -. "\`[...]\`" .-> Canvas
  Canvas -. "\`由真实转换构造合法文档，以二进制前后比较验证输入保真\`" .-> Pure
`;case`runtime`:return'---\ntitle: "02 · Toolkit Runtime"\n---\ngraph TB\n  ToolkitPi_plugin@{ shape: rectangle, label: "Pi 官方扩展适配" }\n  ToolkitLint_tests@{ shape: rectangle, label: "脚本静态检查合同测试" }\n  ToolkitLanguage_tests@{ shape: rectangle, label: "语言查询合同测试" }\n  ToolkitHost@{ shape: rectangle, label: "工作区 Host" }\n  ToolkitAssets@{ shape: rectangle, label: "资产任务与确认业务" }\n  ToolkitLanguage@{ shape: rectangle, label: "语言查询业务" }\n  ToolkitInvocations@{ shape: rectangle, label: "调用记录与取消" }\n  ToolkitConfiguration@{ shape: rectangle, label: "产品类型检查配置" }\n  ToolkitPreview@{ shape: rectangle, label: "Canvas 预览业务" }\n  ToolkitMcp@{ shape: rectangle, label: "MCP 协议接入" }\n  ToolkitAsset_candidates@{ shape: rectangle, label: "候选存储与释放" }\n  ToolkitEditing@{ shape: rectangle, label: "编辑业务" }\n  ToolkitDiagnostics@{ shape: rectangle, label: "诊断业务" }\n  ToolkitAsset_processing@{ shape: rectangle, label: "产物确定性校验与切片预览" }\n  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }\n  ToolkitLint@{ shape: rectangle, label: "脚本静态检查纯计算" }\n  ToolkitAsset_generation@{ shape: rectangle, label: "工作流绑定与远端生成执行" }\n  ToolkitConversion@{ shape: rectangle, label: "仅缓存状态的转换服务" }\n  ToolkitConfig@{ shape: rectangle, label: "配置来源抽象与实现" }\n  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }\n  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }\n  ToolkitSemantic@{ shape: rectangle, label: "语义装配（设计）" }\n  ToolkitAnalysis@{ shape: rectangle, label: "纯符号表与调用图" }\n  ToolkitScript@{ shape: rectangle, label: "BEScript 纯计算包" }\n  ToolkitProject_model@{ shape: rectangle, label: "工程格式纯计算包" }\n  ToolkitAssets -. "`任务绑定原子生成与评阅，不转移调度所有权`" .-> ToolkitAsset_generation\n  ToolkitAssets -. "`产物校验与明确切片预览`" .-> ToolkitAsset_processing\n  ToolkitAssets -. "`任务关联候选标识、读取确认内容并释放`" .-> ToolkitAsset_candidates\n  ToolkitAssets -. "`明确确认准备候选并提交，返回实际资源身份`" .-> ToolkitEditing\n  ToolkitHost -. "`[...]`" .-> ToolkitAssets\n  ToolkitAsset_generation -. "`[...]`" .-> ToolkitConfig\n  ToolkitAsset_processing -. "`只读原子执行交付的具名字节`" .-> ToolkitAsset_generation\n  ToolkitAsset_candidates -. "`暂存具名产物字节`" .-> ToolkitAsset_generation\n  ToolkitHost -. "`真实产物字节输入`" .-> ToolkitAsset_generation\n  ToolkitAsset_candidates -. "`保存同一产物的确定性校验结果`" .-> ToolkitAsset_processing\n  ToolkitHost -. "`[...]`" .-> ToolkitAsset_processing\n  ToolkitHost -. "`[...]`" .-> ToolkitAsset_candidates\n  ToolkitPi_plugin -. "`官方显式参数进入统一只读配置`" .-> ToolkitConfig\n  ToolkitHost -. "`生成空壳接收明确公开参数和独立凭据端口`" .-> ToolkitConfig\n  ToolkitEditing -. "`编辑候选经唯一实体入口提交`" .-> ToolkitEntities\n  ToolkitEditing -. "`只读取具名视图；提交后的派生刷新由Host驱动`" .-> ToolkitView_service\n  ToolkitEditing -. "`[...]`" .-> ToolkitConversion\n  ToolkitHost -. "`WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令`" .-> ToolkitEditing\n  ToolkitPi_plugin -. "`[...]`" .-> ToolkitHost\n  ToolkitPi_plugin -. "`启动回环 HTTP，交由 Pi 官方 MCP 客户端消费`" .-> ToolkitMcp\n  ToolkitLint -. "`[...]`" .-> ToolkitScript\n  ToolkitLint -. "`分析结果`" .-> ToolkitAnalysis\n  ToolkitLint_tests -. "`调用纯检查空壳`" .-> ToolkitLint\n  ToolkitDiagnostics -. "`调用纯检查，诊断状态归 Diagnostics`" .-> ToolkitLint\n  ToolkitLint_tests -. "`提供真实逻辑实体输入`" .-> ToolkitProject_model\n  ToolkitLint_tests -. "`[...]`" .-> ToolkitScript\n  ToolkitLint_tests -. "`构建同次方法绑定及调用图`" .-> ToolkitAnalysis\n  ToolkitLanguage -. "`共享实体服务与完整读取基准`" .-> ToolkitEntities\n  ToolkitLanguage -. "`共享诊断服务和唯一结果类型`" .-> ToolkitDiagnostics\n  ToolkitLanguage_tests -. "`真实装配与四类请求执行`" .-> ToolkitLanguage\n  ToolkitHost -. "`[...]`" .-> ToolkitLanguage\n  ToolkitLanguage_tests -. "`独占测试工程生命周期`" .-> ToolkitHost\n  ToolkitLanguage_tests -. "`建立真实实体 Layer`" .-> ToolkitEntities\n  ToolkitLanguage_tests -. "`读取实际文件修订`" .-> ToolkitProject_model\n  ToolkitLanguage_tests -. "`建立真实文件边界`" .-> ToolkitFiles\n  ToolkitLanguage_tests -. "`注入真实诊断 Layer`" .-> ToolkitDiagnostics\n  ToolkitHost -. "`[...]`" .-> ToolkitInvocations\n  ToolkitHost -. "`[...]`" .-> ToolkitEntities\n  ToolkitHost -. "`[...]`" .-> ToolkitView_service\n  ToolkitHost -.-> ToolkitProject_model\n  ToolkitHost -. "`独立序列化验证实体反向语义`" .-> ToolkitScript\n  ToolkitHost -. "`[...]`" .-> ToolkitFiles\n  ToolkitHost -. "`实际调用验证语义空壳明确失败及输入保持原样`" .-> ToolkitSemantic\n  ToolkitHost -. "`[...]`" .-> ToolkitConversion\n  ToolkitHost -. "`WorkspaceServices.ts 装配诊断与受控业务入口`" .-> ToolkitDiagnostics\n  ToolkitHost -. "`[...]`" .-> ToolkitPreview\n  ToolkitHost -. "`实际调用 patch 匹配空壳验证明确失败与顺序输入保真`" .-> ToolkitMcp\n  ToolkitMcp -.-> ToolkitHost\n  ToolkitEntities -.-> ToolkitProject_model\n  ToolkitEntities -. "`零件实体携带显式转换依据`" .-> ToolkitScript\n  ToolkitEntities -. "`实体层唯一业务 IO；读取与提交分别授权到文件`" .-> ToolkitFiles\n  ToolkitEntities -. "`快照语义装配`" .-> ToolkitSemantic\n  ToolkitView_service -. "`视图主动读取实体；派生结果经实体入口交付`" .-> ToolkitEntities\n  ToolkitConversion -. "`[...]`" .-> ToolkitEntities\n  ToolkitDiagnostics -. "`诊断主动读取实体快照`" .-> ToolkitEntities\n  ToolkitPreview -. "`预览只读实体资源`" .-> ToolkitEntities\n  ToolkitView_service -. "`视图唯一驱动转换与缓存释放`" .-> ToolkitConversion\n  ToolkitScript -.-> ToolkitProject_model\n  ToolkitFiles -. "`文件边界使用统一相对路径校验与文件事实合同`" .-> ToolkitProject_model\n  ToolkitSemantic -. "`工程逻辑快照合同`" .-> ToolkitProject_model\n  ToolkitConversion -. "`[...]`" .-> ToolkitProject_model\n  ToolkitAnalysis -.-> ToolkitProject_model\n  ToolkitScript -.-> ToolkitConversion\n  ToolkitSemantic -. "`[...]`" .-> ToolkitScript\n  ToolkitConversion -. "`[...]`" .-> ToolkitScript\n  ToolkitAnalysis -.-> ToolkitScript\n  ToolkitSemantic -. "`符号表与调用图`" .-> ToolkitAnalysis\n  ToolkitDiagnostics -.-> ToolkitAnalysis\n';case`workspace_services`:return'---\ntitle: "02a · 工作区三层与业务服务"\n---\ngraph TB\n  subgraph ToolkitHost["`工作区 Host`"]\n    ToolkitHost.Logic@{ shape: rectangle, label: "Host 组合根与受控入口" }\n  end\n  ToolkitDiagnostics@{ shape: rectangle, label: "诊断业务" }\n  ToolkitPreview@{ shape: rectangle, label: "Canvas 预览业务" }\n  ToolkitAssets@{ shape: rectangle, label: "资产任务与确认业务" }\n  ToolkitEditing@{ shape: rectangle, label: "编辑业务" }\n  ToolkitView_service@{ shape: rectangle, label: "第三层：视图关联与交付" }\n  PureChange_plan@{ shape: rectangle, label: "变更计划纯计算" }\n  subgraph ToolkitConversion["`仅缓存状态的转换服务`"]\n    ToolkitConversion.Ts@{ shape: rectangle, label: "零件与 TS 视图双向转换" }\n    ToolkitConversion.Html@{ shape: rectangle, label: "独立 Canvas 与 HTML 视图双向转换" }\n    ToolkitConversion.Canvas@{ shape: rectangle, label: "Canvas 与 HTML 片段双向转换" }\n  end\n  ToolkitEntities@{ shape: rectangle, label: "第二层：工程实体" }\n  ToolkitFiles@{ shape: rectangle, label: "第一层：文件管理与监听" }\n  ToolkitSemantic@{ shape: rectangle, label: "语义装配（设计）" }\n  ToolkitAnalysis@{ shape: rectangle, label: "纯符号表与调用图" }\n  ToolkitHost.Logic -. "`Host 装配并单一消费文件变化；工程业务 IO 归实体`" .-> ToolkitFiles\n  ToolkitHost.Logic -. "`Host 主动重读实体；WorkspaceServices 读取状态`" .-> ToolkitEntities\n  ToolkitEntities -. "`实体层唯一业务 IO；读取与提交分别授权到文件`" .-> ToolkitFiles\n  ToolkitEntities -. "`快照语义装配`" .-> ToolkitSemantic\n  ToolkitHost.Logic -. "`Host 主动驱动视图；WorkspaceServices 装配`" .-> ToolkitView_service\n  ToolkitView_service -. "`视图主动读取实体；派生结果经实体入口交付`" .-> ToolkitEntities\n  ToolkitHost.Logic -. "`WorkspaceServices.ts 仅装配共享转换`" .-> ToolkitConversion.Canvas\n  ToolkitHost.Logic -. "`WorkspaceServices.ts 仅装配；缓存由视图驱动`" .-> ToolkitConversion.Ts\n  ToolkitHost.Logic -. "`WorkspaceServices.ts 仅装配 HTML 转换`" .-> ToolkitConversion.Html\n  ToolkitView_service -. "`视图唯一驱动转换与缓存释放`" .-> ToolkitConversion.Ts\n  ToolkitView_service -.-> ToolkitConversion.Html\n  ToolkitConversion.Canvas -. "`实体输入与资源依赖`" .-> ToolkitEntities\n  ToolkitConversion.Ts -. "`转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付`" .-> ToolkitEntities\n  ToolkitConversion.Html -. "`独立 Canvas 与视图实体`" .-> ToolkitEntities\n  ToolkitConversion.Ts -. "`内部 Canvas 双向转换`" .-> ToolkitConversion.Canvas\n  ToolkitConversion.Html -. "`共享片段服务的工作区装配`" .-> ToolkitConversion.Canvas\n  ToolkitSemantic -. "`符号表与调用图`" .-> ToolkitAnalysis\n  ToolkitHost.Logic -. "`WorkspaceServices.ts 装配诊断与受控业务入口`" .-> ToolkitDiagnostics\n  ToolkitDiagnostics -. "`诊断主动读取实体快照`" .-> ToolkitEntities\n  ToolkitDiagnostics -.-> ToolkitAnalysis\n  ToolkitHost.Logic -. "`WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令`" .-> ToolkitEditing\n  ToolkitEditing -. "`编辑候选经唯一实体入口提交`" .-> ToolkitEntities\n  ToolkitEditing -. "`只读取具名视图；提交后的派生刷新由Host驱动`" .-> ToolkitView_service\n  ToolkitEditing -. "`视图反向转换`" .-> ToolkitConversion.Ts\n  ToolkitEditing -. "`独立 Canvas 反向转换`" .-> ToolkitConversion.Html\n  ToolkitEditing -. "`统一变更计划与候选`" .-> PureChange_plan\n  PureChange_plan -. "`只引用格式实体和读取基准；不调用实体服务或建立 Tree`" .-> ToolkitEntities\n  PureChange_plan -. "`只读符号表与调用图`" .-> ToolkitAnalysis\n  ToolkitHost.Logic -. "`WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令`" .-> ToolkitPreview\n  ToolkitPreview -. "`预览只读实体资源`" .-> ToolkitEntities\n  ToolkitHost.Logic -. "`同一 Workspace Layer 装配，Host 分发具名资产命令`" .-> ToolkitAssets\n  ToolkitAssets -. "`明确确认准备候选并提交，返回实际资源身份`" .-> ToolkitEditing\n';case`frontend`:return`---
title: "03 · VS Code 前端"
---
graph TB
  FrontendPackaging@{ shape: rectangle, label: "扩展清单与构建入口" }
  FrontendTests@{ shape: rectangle, label: "前端行为与生命周期测试" }
  FrontendPlugin@{ shape: rectangle, label: "VSCode 宿主与 Effect 组合根" }
  FrontendLanguage@{ shape: rectangle, label: "标准语言服务端口（设计）" }
  FrontendUi@{ shape: rectangle, label: "单页侧栏、配置区与展开日志" }
  FrontendHost_client@{ shape: rectangle, label: "只读合同与配置计划" }
  FrontendUi -.-> FrontendHost_client
  FrontendPlugin -.-> FrontendHost_client
  FrontendTests -.-> FrontendHost_client
  FrontendPlugin -. "\`标准 LSP 客户端合同\`" .-> FrontendLanguage
  FrontendTests -. "\`真实 Host 验证标准客户端连接骨架\`" .-> FrontendLanguage
  FrontendPlugin -.-> FrontendUi
  FrontendTests -.-> FrontendUi
  FrontendTests -.-> FrontendPlugin
`;case`pure_functions`:return`---
title: "04 · 业务纯计算"
---
graph TB
  PureChange_plan@{ shape: rectangle, label: "变更计划纯计算" }
  PureCanvas@{ shape: rectangle, label: "Canvas 四向转换" }
`;case`canvas`:return'---\ntitle: "05 · Canvas 渲染产品"\n---\ngraph TB\n  CanvasRenderer_tests@{ shape: rectangle, label: "Canvas 渲染测试" }\n  CanvasRenderer_support@{ shape: rectangle, label: "CPU 后端测试支持" }\n  RendererEntry@{ shape: rectangle, label: "唯一渲染入口" }\n  RendererNodes@{ shape: rectangle, label: "节点能力调度" }\n  RendererFeatures@{ shape: rectangle, label: "节点绘制特性" }\n  RendererImages@{ shape: rectangle, label: "图片合成" }\n  RendererLayout@{ shape: rectangle, label: "确定性布局计算" }\n  RendererDom_schema@{ shape: rectangle, label: "文档输入校验" }\n  RendererFields@{ shape: rectangle, label: "特性有效值" }\n  RendererValues@{ shape: rectangle, label: "富文本解析" }\n  RendererState@{ shape: rectangle, label: "渲染会话与资源结算" }\n  RendererSchema@{ shape: rectangle, label: "结构化节点 Schema" }\n  RendererRaster@{ shape: rectangle, label: "CPU 光栅化与 PNG 编码（设计）" }\n  RendererContracts@{ shape: rectangle, label: "CanvasDocument 与渲染合同" }\n  CanvasRenderer_tests -. "`复用官方 CPU 后端初始化边界`" .-> CanvasRenderer_support\n  CanvasRenderer_tests -. "`核对失败前后的完整请求输入`" .-> RendererContracts\n  CanvasRenderer_tests -. "`验证唯一入口明确失败`" .-> RendererEntry\n  RendererSchema -. "`文档节点类型`" .-> RendererContracts\n  RendererFields -. "`消费节点类型白名单`" .-> RendererContracts\n  RendererValues -. "`产生具名文本段`" .-> RendererContracts\n  RendererLayout -. "`交付唯一布局结果`" .-> RendererContracts\n  RendererRaster -. "`像素与 PNG 结果`" .-> RendererContracts\n  RendererState -. "`会话与资源状态`" .-> RendererContracts\n  RendererEntry -. "`唯一入口输入输出`" .-> RendererContracts\n  RendererDom_schema -. "`提取节点专属字段`" .-> RendererSchema\n  RendererFields -. "`消费唯一节点 Schema`" .-> RendererSchema\n  RendererLayout -. "`消费同次校验后的节点字段与身份`" .-> RendererDom_schema\n  RendererEntry -. "`文档校验`" .-> RendererDom_schema\n  RendererNodes -. "`消费确定布局节点`" .-> RendererLayout\n  RendererNodes -. "`递归顺序由调度拥有，节点投影由特性拥有`" .-> RendererFeatures\n  RendererNodes -. "`共享同次绘制会话`" .-> RendererState\n  RendererEntry -. "`能力调度`" .-> RendererNodes\n  RendererLayout -. "`持有节点有效值的唯一布局结果`" .-> RendererFields\n  RendererImages -. "`消费同一布局结果`" .-> RendererLayout\n  RendererImages -. "`使用会话拥有的资源`" .-> RendererState\n  RendererFeatures -. "`复用节点投影输入和同次会话合同`" .-> RendererImages\n  RendererLayout -. "`持有解析后的同次文本段`" .-> RendererValues\n  RendererLayout -. "`读取同次会话的固定字体`" .-> RendererState\n  RendererEntry -. "`布局阶段`" .-> RendererLayout\n  RendererState -. "`会话拥有独占软件 surface`" .-> RendererRaster\n  RendererEntry -. "`独占会话与资源结算`" .-> RendererState\n';case`tooling`:return`---
title: "10 · 开发治理"
---
graph TB
  ToolsTests@{ shape: rectangle, label: "自身回归测试" }
  ToolsHooks@{ shape: rectangle, label: "Git 钩子转发" }
  ToolsTesting@{ shape: rectangle, label: "测试夹具" }
  ToolsCli@{ shape: rectangle, label: "CLI 与进程边界" }
  ToolsCoding@{ shape: rectangle, label: "Java 风格规则" }
  ToolsArchitecture@{ shape: rectangle, label: "架构模型解析" }
  ToolsRequirement_documents@{ shape: rectangle, label: "新版需求图与文档环境" }
  ToolsTest_metrics@{ shape: rectangle, label: "模块测试指标基线" }
  ToolsCli -.-> ToolsArchitecture
  ToolsCli -.-> ToolsCoding
  ToolsTests -.-> ToolsCli
  ToolsTesting -.-> ToolsCli
  ToolsHooks -.-> ToolsCli
  ToolsCoding -.-> ToolsArchitecture
  ToolsTests -.-> ToolsArchitecture
  ToolsTests -.-> ToolsCoding
  ToolsTests -.-> ToolsTesting
`;case`repository`:return`---
title: "11 · 仓库基础"
---
graph TB
  RepositoryBuild@{ shape: rectangle, label: "pnpm 与依赖锁定" }
  RepositoryInstructions@{ shape: rectangle, label: "开发指引" }
  RepositoryGit@{ shape: rectangle, label: "版本控制" }
  RepositoryEditor@{ shape: rectangle, label: "编辑器配置" }
`;case`specifications`:return`---
title: "12 · 工具链规范"
---
graph TB
  SpecificationsTooling@{ shape: rectangle, label: "治理契约" }
  SpecificationsLayout@{ shape: rectangle, label: "文件布局契约" }
  SpecificationsDevelopment@{ shape: rectangle, label: "开发与协作契约" }
  SpecificationsRuntime@{ shape: rectangle, label: "Toolkit 运行时合同" }
  SpecificationsWorkspace_files@{ shape: rectangle, label: "工程文件合同" }
  SpecificationsHjson@{ shape: rectangle, label: "Hjson 统一格式合同" }
  SpecificationsEntities@{ shape: rectangle, label: "第二层实体基础设施合同" }
  SpecificationsHost_configuration@{ shape: rectangle, label: "保留 Host 配置合同" }
  SpecificationsBescript@{ shape: rectangle, label: "BEScript 内部格式" }
  SpecificationsCanvas_render@{ shape: rectangle, label: "Canvas 渲染规范" }
  SpecificationsVscode_frontend@{ shape: rectangle, label: "VS Code 前端职责" }
  SpecificationsCanvas@{ shape: rectangle, label: "Canvas 转换合同" }
  SpecificationsPreview@{ shape: rectangle, label: "静态预览与发布合同" }
  SpecificationsAnalysis@{ shape: rectangle, label: "工程分析合同" }
`;case`documentation`:return`---
title: "13 · 产品文档"
---
graph TB
  DocumentationManual@{ shape: rectangle, label: "MechToolkit 发布与开发指南" }
`;case`legacy`:return`---
title: "90 · 历史参考"
---
graph TB
  LegacyMcp@{ shape: rectangle, label: "MCP 协议入口" }
  LegacyHost@{ shape: rectangle, label: "VSCode Host 入口" }
  LegacyCore@{ shape: rectangle, label: "核心逻辑" }
  LegacyMcp -.-> LegacyCore
  LegacyHost -.-> LegacyCore
`;case`legacy_core`:return`---
title: "91 · 历史核心参考"
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
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
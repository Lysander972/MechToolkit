var e=e=>{switch(e){case`asset_review_flow`:return`direction: right

ToolkitMcpLogic: {
  label: "工具合同与 HTTP 接入"
}
ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitAssets: {
  label: "资产任务与确认业务"
}
ToolkitAsset_candidates: {
  label: "候选存储与释放"
}
ToolkitAsset_processing: {
  label: "产物确定性校验与切片预览"
}
ToolkitAsset_generation: {
  label: "工作流绑定与远端生成执行"
}

ToolkitMcpLogic -> ToolkitHostLogic: "renderSlice/review：taskId 与 artifactId"
ToolkitHostLogic -> ToolkitAssets: "显式跨请求操作，不自动确认"
ToolkitAssets -> ToolkitAsset_candidates: "读取同一候选"
ToolkitAssets -> ToolkitAsset_processing: "结构化 slice 与尺寸案例生成 PNG 预览"
ToolkitAssets -> ToolkitAsset_generation: "有来源的工作流返回视觉评阅意见"
ToolkitHostLogic -> ToolkitMcpLogic: "交付具名预览或意见，由调用方明确确认"
`;case`asset_generation_flow`:return`direction: right

ToolkitMcpLogic: {
  label: "工具合同与 HTTP 接入"
}
ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitAssets: {
  label: "资产任务与确认业务"
}
ToolkitAsset_candidates: {
  label: "候选存储与释放"
}
ToolkitAsset_generation: {
  label: "工作流绑定与远端生成执行"
}
Runninghub: {
  label: "RunningHub 远端 ComfyUI 执行"
}
ToolkitAsset_processing: {
  label: "产物确定性校验与切片预览"
}

ToolkitMcpLogic -> ToolkitHostLogic: "提交具名生成请求"
ToolkitHostLogic -> ToolkitAssets: "submit：接受前接收具名上传输入"
ToolkitAssets -> ToolkitAsset_candidates: "暂存输入流；成功后建立 Host Scope 的 pending 任务并返回 taskId"
ToolkitAssets -> ToolkitAsset_generation: "工作流绑定与原子远端执行"
ToolkitAsset_generation -> Runninghub: "上传、prompt、history、view"
ToolkitAsset_generation -> ToolkitAssets: "具名产物字节流与执行事实"
ToolkitAssets -> ToolkitAsset_candidates: "单次消费产物流，暂存未就绪内容"
ToolkitAssets -> ToolkitAsset_candidates: "读取暂存字节供校验"
ToolkitAssets -> ToolkitAsset_processing: "按工作流输出绑定交付单文件或同组文件及明确要求"
ToolkitAssets -> ToolkitAsset_candidates: "将带产物身份的成功校验结果关联到同组候选，进入 ready"
ToolkitHostLogic -> ToolkitAssets: "status/result：同 taskId 跨请求查询"
`;case`asset_confirmation_flow`:return`direction: right

ToolkitMcpLogic: {
  label: "工具合同与 HTTP 接入"
}
ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitAssets: {
  label: "资产任务与确认业务"
}
ToolkitAsset_candidates: {
  label: "候选存储与释放"
}
ToolkitEditing: {
  label: "编辑业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}

ToolkitMcpLogic -> ToolkitHostLogic: "confirm：taskId、artifactId、目标 RelativePath"
ToolkitHostLogic -> ToolkitAssets: "固定选定产物与确认信息"
ToolkitAssets -> ToolkitAsset_candidates: "按校验结果读取所选产物及其关联文件"
ToolkitAssets -> ToolkitEditing: "importAsset：具名文件与目标准备统一 EntityChange，零写盘"
ToolkitEditing -> ToolkitEntities: "读取目标与引用基准，构造资源及 GUID 操作"
ToolkitAssets -> ToolkitEditing: "取得本次候选的只读预期结果，用于重读失败后的核对"
ToolkitEditing -> ToolkitEntities: "从同一候选取得文件、目录动作与预期内容"
ToolkitAssets -> ToolkitEditing: "commit：明确提交候选"
ToolkitEditing -> ToolkitEntities: "校验基准、提交并实际重读"
ToolkitEntities -> ToolkitEditing: "交付同次实际重读结果与读取基准"
ToolkitAssets -> ToolkitAsset_candidates: "提交与重读成功后释放候选"
ToolkitAssets -> ToolkitHostLogic: "分别交付写入与重读结果，重读失败时进入 reconciling 并保留候选"
ToolkitHostLogic -> ToolkitView_service: "重读成功时使用同次实际变化主动刷新派生视图"
ToolkitHostLogic -> ToolkitMcpLogic: "交付实际资源身份及阶段错误；刷新失败保留已提交事实"
`;case`asset_cancel_flow`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitAssets: {
  label: "资产任务与确认业务"
}
ToolkitAsset_generation: {
  label: "工作流绑定与远端生成执行"
}
ToolkitAsset_candidates: {
  label: "候选存储与释放"
}

ToolkitHostLogic -> ToolkitAssets: "显式 cancel、discard 或关闭 Scope"
ToolkitAssets -> ToolkitAsset_generation: "中断本地执行，报告远端停止事实"
ToolkitAssets -> ToolkitAsset_candidates: "释放所属未完成或丢弃候选"
`;case`asset_reconciliation_flow`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitAssets: {
  label: "资产任务与确认业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitEditing: {
  label: "编辑业务"
}
ToolkitAsset_candidates: {
  label: "候选存储与释放"
}

ToolkitHostLogic -> ToolkitAssets: "源事件或 status 触发实体重建；status 返回当前阶段事实"
ToolkitHostLogic -> ToolkitEntities: "按需完整重读实体，交付实际变化"
ToolkitHostLogic -> ToolkitAssets: "交付已重建的实体状态供任务核对"
ToolkitHostLogic -> ToolkitView_service: "按实际变化刷新派生视图，刷新错误独立交付"
ToolkitAssets -> ToolkitEditing: "交付本次提交的只读预期结果"
ToolkitEditing -> ToolkitEntities: "核对实际文件、目录、身份与预期结果"
ToolkitEntities -> ToolkitEditing: "交付一致结果或具体冲突"
ToolkitEditing -> ToolkitAssets: "交付核对结果"
ToolkitAssets -> ToolkitAsset_candidates: "核对一致后释放候选"
`;case`assets_context`:return`direction: down

Frontend: {
  label: "单一前端扩展"
}
Pi_agent: {
  label: "Pi 官方运行时"
}
Asset_settings: {
  label: "运行时配置与凭据来源"
}
Toolkit: {
  label: "Toolkit TypeScript 产品"
}
Runninghub: {
  label: "RunningHub 远端 ComfyUI 执行"
}
Asset_storage: {
  label: "运行时用户候选暂存区"
}

Frontend -> Toolkit: "[...]"
Pi_agent -> Toolkit: "官方扩展加载、会话事件、MCP 连接与结果交付"
Toolkit -> Frontend: "通过原生配置适配验证当前值、边界与读取失败"
Toolkit -> Runninghub: "原生远端执行与只读模型事实查询"
Asset_settings -> Toolkit: "入口选择配置与凭据的唯一来源"
Toolkit -> Asset_storage: "工程外流式暂存与 Scope 释放"
`;case`assets_pipeline`:return`direction: down

ToolkitMcp: {
  label: "MCP 协议接入"

  Logic: {
    label: "工具合同与 HTTP 接入"
  }
}
ToolkitHost: {
  label: "工作区 Host"

  Logic: {
    label: "Host 组合根与受控入口"
  }
}
ToolkitAssets: {
  label: "资产任务与确认业务"
}
ToolkitAsset_candidates: {
  label: "候选存储与释放"
}
ToolkitEditing: {
  label: "编辑业务"
}
ToolkitAsset_processing: {
  label: "产物确定性校验与切片预览"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitAsset_generation: {
  label: "工作流绑定与远端生成执行"
}
Renderer: {
  label: "Canvas CPU 渲染引擎"
}
ToolkitConfig: {
  label: "配置来源抽象与实现"

  Logic: {
    label: "只读配置来源"
  }
}

ToolkitMcp.Logic -> ToolkitHost.Logic
ToolkitHost.Logic -> ToolkitAssets: "同一 Workspace Layer 装配，Host 分发具名资产命令"
ToolkitAssets -> ToolkitAsset_generation: "任务绑定原子生成与评阅，不转移调度所有权"
ToolkitAsset_generation -> ToolkitConfig.Logic: "只读配置与调用边界凭据"
ToolkitHost.Logic -> ToolkitAsset_processing: "共享工作区处理服务"
ToolkitAssets -> ToolkitAsset_processing: "产物校验与明确切片预览"
ToolkitAsset_processing -> ToolkitAsset_generation: "只读原子执行交付的具名字节"
ToolkitHost.Logic -> ToolkitAsset_candidates: "共享工作区候选服务"
ToolkitAssets -> ToolkitAsset_candidates: "任务关联候选标识、读取确认内容并释放"
ToolkitAsset_candidates -> ToolkitAsset_generation: "暂存具名产物字节"
ToolkitAsset_candidates -> ToolkitAsset_processing: "保存同一产物的确定性校验结果"
ToolkitHost.Logic -> ToolkitEditing: "WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令"
ToolkitAssets -> ToolkitEditing: "明确确认准备候选并提交，返回实际资源身份"
ToolkitHost.Logic -> ToolkitEntities: "Host 主动重读实体；WorkspaceServices 读取状态"
ToolkitEditing -> ToolkitEntities: "编辑候选经唯一实体入口提交"
ToolkitAsset_processing -> Renderer: "切片预览复用唯一 CPU PNG 入口"
`;case`assets_components`:return`direction: down

ToolkitAssets: {
  label: "资产任务与确认业务"

  Scheduler: {
    label: "唯一任务状态与有界调度"
  }
  Confirmation: {
    label: "明确确认与提交结果"
  }
  Review: {
    label: "跨请求切片预览与评阅"
  }
  Contracts: {
    label: "具名任务输入与结果"
  }
}
ToolkitAsset_generation: {
  label: "工作流绑定与远端生成执行"

  Entry: {
    label: "生成与评阅执行入口"
  }
  Workflows: {
    label: "能力白名单与模型绑定"
  }
  Transport: {
    label: "原生 ComfyUI 远端传输"
  }
}
ToolkitAsset_processing: {
  label: "产物确定性校验与切片预览"

  Inspection: {
    label: "结构化产物校验"
  }
  Slice: {
    label: "九宫格预览装配"
  }
}
ToolkitAsset_candidates: {
  label: "候选存储与释放"

  Storage: {
    label: "Scope 内的字节与产物索引"
  }
}
ToolkitEditing: {
  label: "编辑业务"

  Asset_import: {
    label: "资产入库候选准备"
  }
}

ToolkitAssets.Scheduler -> ToolkitAssets.Contracts: "具名请求、状态与结果"
ToolkitAssets.Confirmation -> ToolkitAssets.Contracts: "选定产物、相对目标和确认结果"
ToolkitAssets.Review -> ToolkitAssets.Contracts: "选定候选、切片案例及评阅输入与输出"
ToolkitAssets.Contracts -> ToolkitAsset_generation.Entry: "提交输入绑定原子生成合同"
ToolkitAsset_generation.Workflows -> ToolkitAsset_generation.Transport: "绑定后的原生 ComfyUI graph"
ToolkitAsset_generation.Entry -> ToolkitAsset_generation.Workflows: "选择明确能力和工作流"
ToolkitAsset_generation.Entry -> ToolkitAsset_generation.Transport: "执行具名输入并读取实际结果"
ToolkitAssets.Contracts -> ToolkitAsset_processing.Inspection: "质量要求绑定唯一产物校验合同"
ToolkitAssets.Contracts -> ToolkitAsset_processing.Slice: "切片结果绑定唯一处理入口"
ToolkitAssets.Contracts -> ToolkitAsset_candidates.Storage: "结果复用候选存储合同"
ToolkitAssets.Contracts -> ToolkitEditing.Asset_import: "确认输入绑定统一入库准备合同"
`;case`canvas_render`:return`direction: down

RendererEntry: {
  label: "唯一渲染入口"
}
RendererNodes: {
  label: "节点能力调度"
}
RendererFeatures: {
  label: "节点绘制特性"
}
RendererImages: {
  label: "图片合成"
}
RendererLayout: {
  label: "确定性布局计算"
}
RendererDom_schema: {
  label: "文档输入校验"
}
RendererFields: {
  label: "特性有效值"
}
RendererValues: {
  label: "富文本解析"
}
RendererState: {
  label: "渲染会话与资源结算"
}
RendererSchema: {
  label: "结构化节点 Schema"
}
RendererRaster: {
  label: "CPU 光栅化与 PNG 编码（设计）"
}
RendererContracts: {
  label: "CanvasDocument 与渲染合同"
}

RendererSchema -> RendererContracts: "文档节点类型"
RendererFields -> RendererContracts: "消费节点类型白名单"
RendererValues -> RendererContracts: "产生具名文本段"
RendererLayout -> RendererContracts: "交付唯一布局结果"
RendererRaster -> RendererContracts: "像素与 PNG 结果"
RendererState -> RendererContracts: "会话与资源状态"
RendererEntry -> RendererContracts: "唯一入口输入输出"
RendererDom_schema -> RendererSchema: "提取节点专属字段"
RendererFields -> RendererSchema: "消费唯一节点 Schema"
RendererLayout -> RendererDom_schema: "消费同次校验后的节点字段与身份"
RendererEntry -> RendererDom_schema: "文档校验"
RendererNodes -> RendererLayout: "消费确定布局节点"
RendererNodes -> RendererFeatures: "递归顺序由调度拥有，节点投影由特性拥有"
RendererNodes -> RendererState: "共享同次绘制会话"
RendererEntry -> RendererNodes: "能力调度"
RendererLayout -> RendererFields: "持有节点有效值的唯一布局结果"
RendererImages -> RendererLayout: "消费同一布局结果"
RendererImages -> RendererState: "使用会话拥有的资源"
RendererFeatures -> RendererImages: "复用节点投影输入和同次会话合同"
RendererLayout -> RendererValues: "持有解析后的同次文本段"
RendererLayout -> RendererState: "读取同次会话的固定字体"
RendererEntry -> RendererLayout: "布局阶段"
RendererState -> RendererRaster: "会话拥有独占软件 surface"
RendererEntry -> RendererState: "独占会话与资源结算"
`;case`pi_session_start`:return`direction: right

Pi_agent: {
  label: "Pi 官方运行时"
}
ToolkitPi_pluginLogic: {
  label: "扩展生命周期与接入"
}
ToolkitConfigLogic: {
  label: "只读配置来源"
}
ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitMcpLogic: {
  label: "工具合同与 HTTP 接入"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitPreview: {
  label: "Canvas 预览业务"
}

Pi_agent -> ToolkitPi_pluginLogic: "session_start：ctx.cwd 与 flags"
ToolkitPi_pluginLogic -> ToolkitConfigLogic: "读取显式配置"
ToolkitPi_pluginLogic -> ToolkitHostLogic: "建立 memory Host"
ToolkitPi_pluginLogic -> ToolkitMcpLogic: "启动回环 HTTP，取得 endpoint"
ToolkitPi_pluginLogic -> Pi_agent: "registerMcpServer：登记本会话 HTTP endpoint；连接与同名覆盖由 Pi 管理"
Pi_agent -> ToolkitMcpLogic: "具名工具请求与取消信号"
ToolkitMcpLogic -> ToolkitHostLogic: "受控读取或预览请求"
ToolkitHostLogic -> ToolkitView_service: "取得 HTML/XML 具名视图"
ToolkitHostLogic -> ToolkitPreview: "视图与完整资源到 PNG"
ToolkitMcpLogic -> Pi_agent: "文本、PNG、结构化结果或实际错误"
`;case`pi_session_shutdown`:return`direction: right

Pi_agent: {
  label: "Pi 官方运行时"
}
ToolkitPi_pluginLogic: {
  label: "扩展生命周期与接入"
}
ToolkitMcpLogic: {
  label: "工具合同与 HTTP 接入"
}
ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}

Pi_agent -> ToolkitPi_pluginLogic: "session_shutdown"
ToolkitPi_pluginLogic -> Pi_agent: "unregisterMcpServer：结束连接与调用"
ToolkitPi_pluginLogic -> ToolkitMcpLogic: "关闭回环 HTTP"
ToolkitPi_pluginLogic -> ToolkitHostLogic: "关闭 Scope，取消调用并释放候选"
`;case`pi_context`:return`direction: down

Pi_agent: {
  label: "Pi 官方运行时"
}
Toolkit: {
  label: "Toolkit TypeScript 产品"
}
Documentation: {
  label: "产品规范与参考"

  Manual: {
    label: "MechToolkit 发布与开发指南"
  }
}

Pi_agent -> Toolkit: "官方扩展加载、会话事件、MCP 连接与结果交付"
Toolkit -> Documentation.Manual: "同树版本的 MechToolkit Skill"
`;case`pi_integration`:return`direction: down

ToolkitPi_plugin: {
  label: "Pi 官方扩展适配"

  Logic: {
    label: "扩展生命周期与接入"

    Registration: {
      label: "扩展工厂与 flags"
    }
    Lifecycle: {
      label: "会话拥有的工作区资源"
    }
    Context: {
      label: "Skills 与结果上下文"
    }
  }
}
ToolkitConfigLogicPi: {
  label: "Pi 只读参数归一化"
}
ToolkitMcp: {
  label: "MCP 协议接入"

  Logic: {
    label: "工具合同与 HTTP 接入"
  }
}
ToolkitHost: {
  label: "工作区 Host"

  Logic: {
    label: "Host 组合根与受控入口"
  }
}
ToolkitInvocations: {
  label: "调用记录与取消"
}

ToolkitPi_plugin.Logic.Registration -> ToolkitPi_plugin.Logic.Lifecycle: "声明会话唯一工作区资源"
ToolkitPi_plugin.Logic.Registration -> ToolkitPi_plugin.Logic.Context: "绑定官方上下文输入"
ToolkitPi_plugin.Logic.Lifecycle -> ToolkitHost.Logic: "绑定唯一 Host 生命周期合同"
ToolkitMcp.Logic -> ToolkitHost.Logic
ToolkitHost.Logic -> ToolkitInvocations: "外部请求登记结果与取消；状态刷新只读取"
ToolkitPi_plugin.Logic -> ToolkitMcp.Logic: "启动回环 HTTP，交由 Pi 官方 MCP 客户端消费"
`;case`pi_components`:return`direction: down

ToolkitPi_pluginLogicRegistration: {
  label: "扩展工厂与 flags"
}
ToolkitPi_pluginLogicLifecycle: {
  label: "会话拥有的工作区资源"
}
ToolkitPi_pluginLogicContext: {
  label: "Skills 与结果上下文"
}

ToolkitPi_pluginLogicRegistration -> ToolkitPi_pluginLogicLifecycle: "声明会话唯一工作区资源"
ToolkitPi_pluginLogicRegistration -> ToolkitPi_pluginLogicContext: "绑定官方上下文输入"
`;case`change_plan`:return`direction: down

PureChange_plan: {
  label: "变更计划纯计算"
}
ToolkitScriptContextDevice_context: {
  label: "全局变量、零件元数据与零件上下文"
}
PureCanvasLogic: {
  label: "四向格式转换"
}
ToolkitAnalysis: {
  label: "纯符号表与调用图"
}
ToolkitScriptAstLocal_ast: {
  label: "局部 AST"
}
ToolkitProject_modelLogic: {
  label: "工程设置、路径、GUID 与权威逻辑实体"
}

PureChange_plan -> ToolkitProject_modelLogic: "复用实体快照与统一操作合同"
ToolkitScriptAstLocal_ast -> ToolkitProject_modelLogic
ToolkitScriptContextDevice_context -> ToolkitProject_modelLogic
ToolkitScriptContextDevice_context -> ToolkitScriptAstLocal_ast
PureChange_plan -> ToolkitAnalysis: "只读符号表与调用图"
ToolkitAnalysis -> ToolkitProject_modelLogic
ToolkitAnalysis -> ToolkitScriptAstLocal_ast
`;case`frontend_canvas_display`:return`direction: right

FrontendPlugin: {
  label: "VSCode 宿主与 Effect 组合根"
}
ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitPreview: {
  label: "Canvas 预览业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
Renderer: {
  label: "Canvas CPU 渲染引擎"
}

FrontendPlugin -> ToolkitHostLogic: "文档定位源身份；同一 Host.openPreview，面板持有 take/close 资源"
ToolkitHostLogic -> ToolkitView_service: "读取具名 HTML/XML 与完整来源基准"
ToolkitHostLogic -> ToolkitPreview: "同一 viewport、字体、显式时间与唯一 CPU 后端"
ToolkitPreview -> ToolkitEntities: "读取本次实际引用资源及 revision"
ToolkitPreview -> Renderer: "共用 CPU 渲染，交付 PNG 与最终基准"
ToolkitHostLogic -> ToolkitView_service: "工程变化的同次影响驱动已有展示；前端只消费产物"
`;case`initial_read`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitSemantic: {
  label: "语义装配（设计）"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitConversionTs: {
  label: "零件与 TS 视图双向转换"
}
ToolkitConversionHtml: {
  label: "独立 Canvas 与 HTML 视图双向转换"
}
ToolkitPreview: {
  label: "Canvas 预览业务"
}

ToolkitHostLogic -> ToolkitFiles: "建立监听并等待 ready；期间实际变化保持登记"
ToolkitHostLogic -> ToolkitEntities: "首次完整装配与确定读取基准；后续批次复用同一实体服务按变化目录重读"
ToolkitEntities -> ToolkitSemantic: "按快照装配完整 Context 与转换依据"
ToolkitHostLogic -> ToolkitView_service: "按模式交付具名视图"
ToolkitView_service -> ToolkitConversionTs: "零件到 TS 视图"
ToolkitView_service -> ToolkitConversionHtml: "Canvas 到 HTML/XML 视图"
ToolkitHostLogic -> ToolkitEntities: "files：枚举现存派生路径；memory 跳过"
ToolkitHostLogic -> ToolkitView_service: "files：按完整源声明计算发布和删除；解析失败保留未确定范围，路径冲突交付诊断"
ToolkitHostLogic -> ToolkitPreview: "files Canvas：以固定视口、字体和时间渲染同次视图"
ToolkitHostLogic -> ToolkitView_service: "files Canvas：交回同次 PNG 与实际依赖，装配展示壳"
ToolkitView_service -> ToolkitEntities: "files：执行派生发布和删除；期间监听变化仍由 Host 批次处理"
`;case`diagnostics_read`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitDiagnostics: {
  label: "诊断业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitAnalysisLogic: {
  label: "纯分析计算"
}
ToolkitLint: {
  label: "脚本静态检查纯计算"
}

ToolkitHostLogic -> ToolkitDiagnostics: "inspect：明确基准与请求"
ToolkitDiagnostics -> ToolkitEntities: "主动读取确定快照"
ToolkitDiagnostics -> ToolkitAnalysisLogic: "复用同次实体读取已计算的符号与调用关系"
ToolkitDiagnostics -> ToolkitLint: "按绑定执行 ScriptLint，再对同一完整图执行一次 CallGraphLint；交付具名诊断"
`;case`preview_read`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitPreview: {
  label: "Canvas 预览业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
Renderer: {
  label: "Canvas CPU 渲染引擎"
}

ToolkitHostLogic -> ToolkitView_service: "读取具名 HTML/XML 视图"
ToolkitHostLogic -> ToolkitPreview: "交付结构化 Canvas 与明确渲染输入"
ToolkitPreview -> ToolkitEntities: "按实际基准读取资源"
ToolkitPreview -> Renderer: "进程内 CPU 渲染并返回 PNG 与诊断"
`;case`source_refresh`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitConversionTs: {
  label: "零件与 TS 视图双向转换"
}
ToolkitConversionHtml: {
  label: "独立 Canvas 与 HTML 视图双向转换"
}
ToolkitPreview: {
  label: "Canvas 预览业务"
}

ToolkitHostLogic -> ToolkitFiles: "take：取得精确变化路径"
ToolkitHostLogic -> ToolkitEntities: "批次刷新：单次许可内分类、重读并取得同次完整语义基准，交付派生路径及更新删除标识"
ToolkitHostLogic -> ToolkitView_service: "refresh：交付实际变化、基准和展示依赖，取得受影响视图及展示"
ToolkitView_service -> ToolkitEntities: "读取格式实体与实际资源"
ToolkitView_service -> ToolkitConversionTs: "更新或删除 TS 派生结果"
ToolkitView_service -> ToolkitConversionHtml: "更新或删除 HTML 派生结果"
ToolkitHostLogic -> ToolkitPreview: "files Canvas：以固定视口、字体和时间渲染同次视图，取得 PNG 与实际依赖"
ToolkitHostLogic -> ToolkitView_service: "files Canvas：交回 PNG 与依赖，装配 HTML 展示壳"
ToolkitView_service -> ToolkitEntities: "files：发布或删除派生内容；TS 正文与索引同批交付"
ToolkitHostLogic -> ToolkitPreview: "按实际影响刷新已打开的展示；memory 仅按展示请求生成视图"
`;case`commit_refresh`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitEditing: {
  label: "编辑业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}

ToolkitHostLogic -> ToolkitEditing: "提交明确候选与原读取基准"
ToolkitEditing -> ToolkitEntities: "commit：核对基准并提交"
ToolkitEntities -> ToolkitFiles: "实际 IO；成功或失败均重读磁盘事实"
ToolkitEntities -> ToolkitEditing: "交付同次实际重读结果及写入或重读错误"
ToolkitEditing -> ToolkitHostLogic: "交付实际变化与错误；重读失败时不生成变化集合"
ToolkitHostLogic -> ToolkitView_service: "重读成功时按实际变化刷新，包括写入失败或请求中断后的收尾"
`;case`refactor_prepare`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitEditing: {
  label: "编辑业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
PureChange_plan: {
  label: "变更计划纯计算"
}
ToolkitAnalysisLogic: {
  label: "纯分析计算"
}

ToolkitHostLogic -> ToolkitEditing: "refactor：目标与原读取基准"
ToolkitEditing -> ToolkitEntities: "读取目标、关联实体与完整语义基准"
ToolkitEditing -> PureChange_plan: "同次快照、分析与 RefactorChangePlanRequest"
ToolkitEditing -> ToolkitEntities: "物化统一 EntityChange，从候选及未改变依赖准备语义输入，零写入"
ToolkitEditing -> ToolkitAnalysisLogic: "分析候选语义并校验受影响绑定，提交复用 commit"
`;case`workspace_close`:return`direction: right

ToolkitHostLogic: {
  label: "Host 组合根与受控入口"
}
ToolkitInvocations: {
  label: "调用记录与取消"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}

ToolkitHostLogic -> ToolkitInvocations: "结束调用与取消等待"
ToolkitHostLogic -> ToolkitView_service: "释放派生关联与转换资源"
ToolkitHostLogic -> ToolkitEntities: "释放文件派生快照"
ToolkitHostLogic -> ToolkitFiles: "关闭唯一监听与 IO Scope"
`;case`workspace_lifecycle`:return`direction: down

ToolkitHost: {
  label: "工作区 Host"

  Logic: {
    label: "Host 组合根与受控入口"

    Lifecycle: {
      label: "唯一工作区生命周期"
    }
    Refresh: {
      label: "唯一文件变化主动调度"
    }
    Composition: {
      label: "服务组合根"
    }
  }
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}
ToolkitEntities: {
  label: "第二层：工程实体"

  Assembly: {
    label: "逻辑来源与单次归属装配"
  }
  Refresh: {
    label: "显式重读与基准交付"
  }
  Transaction: {
    label: "提交与实际重读"
  }
  State: {
    label: "文件派生实体快照"
  }
}
ToolkitInvocations: {
  label: "调用记录与取消"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"

  Refresh: {
    label: "唯一派生刷新"
  }
}

ToolkitHost.Logic.Lifecycle -> ToolkitHost.Logic.Composition: "建立与释放同一工作区服务"
ToolkitHost.Logic.Lifecycle -> ToolkitHost.Logic.Refresh: "启动工作区 Scope 内的单一监听消费"
ToolkitHost.Logic.Refresh -> ToolkitHost.Logic.Composition: "读取同一工作区共享实例"
ToolkitHost.Logic.Refresh -> ToolkitEntities.Refresh: "按实际目录批次重读文件"
ToolkitEntities.Refresh -> ToolkitEntities.State: "比较实际重读前后的逻辑实体事实"
ToolkitEntities.Transaction -> ToolkitEntities.State: "提交收尾重读实际文件并更新快照或错误结果"
ToolkitHost.Logic.Refresh -> ToolkitView_service.Refresh: "刷新端口复用实际视图及预览影响结果，执行保持 TODO"
ToolkitHost.Logic -> ToolkitFiles: "Host 装配并单一消费文件变化；工程业务 IO 归实体"
ToolkitHost.Logic -> ToolkitInvocations: "外部请求登记结果与取消；状态刷新只读取"
`;case`read_flow`:return`direction: down

ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitLanguage: {
  label: "语言查询业务"
}
ToolkitConversion: {
  label: "仅缓存状态的转换服务"

  Ts: {
    label: "零件与 TS 视图双向转换"
  }
  Html: {
    label: "独立 Canvas 与 HTML 视图双向转换"
  }
  Canvas: {
    label: "Canvas 与 HTML 片段双向转换"
  }
}
ToolkitDiagnostics: {
  label: "诊断业务"
}
ToolkitLint: {
  label: "脚本静态检查纯计算"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}
ToolkitSemantic: {
  label: "语义装配（设计）"
}
ToolkitAnalysis: {
  label: "纯符号表与调用图"

  Logic: {
    label: "纯分析计算"
  }
}

ToolkitEntities -> ToolkitFiles: "实体层唯一业务 IO；读取与提交分别授权到文件"
ToolkitEntities -> ToolkitSemantic: "快照语义装配"
ToolkitSemantic -> ToolkitAnalysis.Logic: "符号表与调用图"
ToolkitConversion.Canvas -> ToolkitEntities: "实体输入与资源依赖"
ToolkitConversion.Ts -> ToolkitEntities: "转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付"
ToolkitConversion.Html -> ToolkitEntities: "独立 Canvas 与视图实体"
ToolkitConversion.Ts -> ToolkitConversion.Canvas: "内部 Canvas 双向转换"
ToolkitConversion.Html -> ToolkitConversion.Canvas: "共享片段服务的工作区装配"
ToolkitView_service -> ToolkitEntities: "视图主动读取实体；派生结果经实体入口交付"
ToolkitView_service -> ToolkitConversion.Ts: "视图唯一驱动转换与缓存释放"
ToolkitView_service -> ToolkitConversion.Html
ToolkitLint -> ToolkitAnalysis.Logic: "分析结果"
ToolkitDiagnostics -> ToolkitEntities: "诊断主动读取实体快照"
ToolkitDiagnostics -> ToolkitAnalysis.Logic
ToolkitDiagnostics -> ToolkitLint: "调用纯检查，诊断状态归 Diagnostics"
ToolkitLanguage -> ToolkitEntities: "共享实体服务与完整读取基准"
ToolkitLanguage -> ToolkitDiagnostics: "共享诊断服务和唯一结果类型"
`;case`write_flow`:return`direction: down

ToolkitEditing: {
  label: "编辑业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"

  Assembly: {
    label: "逻辑来源与单次归属装配"
  }
  Refresh: {
    label: "显式重读与基准交付"
  }
  Transaction: {
    label: "提交与实际重读"
  }
  State: {
    label: "文件派生实体快照"
  }
}
ToolkitConversion: {
  label: "仅缓存状态的转换服务"

  Ts: {
    label: "零件与 TS 视图双向转换"
  }
  Html: {
    label: "独立 Canvas 与 HTML 视图双向转换"
  }
}
PureChange_plan: {
  label: "变更计划纯计算"
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}
ToolkitAnalysisLogic: {
  label: "纯分析计算"
}
ToolkitView_serviceRefresh: {
  label: "唯一派生刷新"
}

ToolkitEditing -> ToolkitConversion.Ts: "视图反向转换"
ToolkitEditing -> ToolkitConversion.Html: "独立 Canvas 反向转换"
ToolkitEditing -> PureChange_plan: "统一变更计划与候选"
PureChange_plan -> ToolkitAnalysisLogic: "只读符号表与调用图"
ToolkitEntities.Refresh -> ToolkitEntities.State: "比较实际重读前后的逻辑实体事实"
ToolkitEntities.Transaction -> ToolkitEntities.State: "提交收尾重读实际文件并更新快照或错误结果"
ToolkitEntities -> ToolkitFiles: "实体层唯一业务 IO；读取与提交分别授权到文件"
`;case`preview_flow`:return`direction: down

FrontendPlugin: {
  label: "VSCode 宿主与 Effect 组合根"
}
ToolkitHost: {
  label: "工作区 Host"

  Logic: {
    label: "Host 组合根与受控入口"
  }
}
ToolkitPreview: {
  label: "Canvas 预览业务"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
Renderer: {
  label: "Canvas CPU 渲染引擎"
}

ToolkitHost.Logic -> ToolkitPreview: "WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令"
ToolkitHost.Logic -> ToolkitEntities: "Host 主动重读实体；WorkspaceServices 读取状态"
ToolkitPreview -> ToolkitEntities: "预览只读实体资源"
ToolkitPreview -> Renderer: "复用唯一渲染引擎"
FrontendPlugin -> ToolkitHost.Logic
`;case`bescript_first_layer`:return`direction: down

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
ToolkitProject_modelLogic: {
  label: "工程设置、路径、GUID 与权威逻辑实体"
}
SpecificationsBescript: {
  label: "BEScript 内部格式"
}

ToolkitScriptConversion.Second -> ToolkitScriptAst.Local_ast
ToolkitScriptConversion.Second -> ToolkitScriptContext.Device_context
ToolkitScriptContext.Device_context -> ToolkitScriptAst.Local_ast
ToolkitScriptConversion.Second -> PureCanvasLogic
ToolkitScriptConversion.Second -> ToolkitProject_modelLogic
ToolkitScriptAst.Local_ast -> ToolkitProject_modelLogic
ToolkitScriptContext.Device_context -> ToolkitProject_modelLogic
ToolkitProject_modelTests -> ToolkitProject_modelLogic
ToolkitScriptConversion.Second -> SpecificationsBescript
ToolkitScriptAst.Local_ast -> SpecificationsBescript
ToolkitScriptContext.Device_context -> SpecificationsBescript
`;case`bescript_third_layer`:return`direction: down

ToolkitHost: {
  label: "工作区 Host"

  Logic: {
    label: "Host 组合根与受控入口"
  }
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitConversion: {
  label: "仅缓存状态的转换服务"

  Ts: {
    label: "零件与 TS 视图双向转换"
  }
  Canvas: {
    label: "Canvas 与 HTML 片段双向转换"
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

ToolkitHost.Logic -> ToolkitConversion.Ts: "WorkspaceServices.ts 仅装配；缓存由视图驱动"
ToolkitConversion.Ts -> ToolkitScript.ConversionThird: "官方 TS 解析打印合同"
ToolkitHost.Logic -> ToolkitConversion.Canvas: "WorkspaceServices.ts 仅装配共享转换"
ToolkitConversion.Ts -> ToolkitConversion.Canvas: "内部 Canvas 双向转换"
ToolkitHost.Logic -> ToolkitView_service: "Host 主动驱动视图；WorkspaceServices 装配"
ToolkitView_service -> ToolkitConversion.Ts: "视图唯一驱动转换与缓存释放"
ToolkitScript.ConversionThird -> SpecificationsBescript
ToolkitConversion.Ts -> SpecificationsBescript
`;case`index`:return`direction: down

Frontend: {
  label: "单一前端扩展"
}
Toolkit: {
  label: "Toolkit TypeScript 产品"
}
Canvas: {
  label: "Canvas 渲染产品"
}
Pure: {
  label: "业务纯计算"
}

Frontend -> Toolkit: "[...]"
Toolkit -> Frontend: "通过原生配置适配验证当前值、边界与读取失败"
Toolkit -> Pure: "[...]"
Pure -> Toolkit: "[...]"
Toolkit -> Canvas: "[...]"
Canvas -> Pure: "由真实转换构造合法文档，以二进制前后比较验证输入保真"
`;case`runtime`:return`direction: down

ToolkitPi_plugin: {
  label: "Pi 官方扩展适配"
}
ToolkitLint_tests: {
  label: "脚本静态检查合同测试"
}
ToolkitLanguage_tests: {
  label: "语言查询合同测试"
}
ToolkitHost: {
  label: "工作区 Host"
}
ToolkitAssets: {
  label: "资产任务与确认业务"
}
ToolkitLanguage: {
  label: "语言查询业务"
}
ToolkitInvocations: {
  label: "调用记录与取消"
}
ToolkitConfiguration: {
  label: "产品类型检查配置"
}
ToolkitPreview: {
  label: "Canvas 预览业务"
}
ToolkitMcp: {
  label: "MCP 协议接入"
}
ToolkitAsset_candidates: {
  label: "候选存储与释放"
}
ToolkitEditing: {
  label: "编辑业务"
}
ToolkitDiagnostics: {
  label: "诊断业务"
}
ToolkitAsset_processing: {
  label: "产物确定性校验与切片预览"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
ToolkitLint: {
  label: "脚本静态检查纯计算"
}
ToolkitAsset_generation: {
  label: "工作流绑定与远端生成执行"
}
ToolkitConversion: {
  label: "仅缓存状态的转换服务"
}
ToolkitConfig: {
  label: "配置来源抽象与实现"
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}
ToolkitSemantic: {
  label: "语义装配（设计）"
}
ToolkitAnalysis: {
  label: "纯符号表与调用图"
}
ToolkitScript: {
  label: "BEScript 纯计算包"
}
ToolkitProject_model: {
  label: "工程格式纯计算包"
}

ToolkitAssets -> ToolkitAsset_generation: "任务绑定原子生成与评阅，不转移调度所有权"
ToolkitAssets -> ToolkitAsset_processing: "产物校验与明确切片预览"
ToolkitAssets -> ToolkitAsset_candidates: "任务关联候选标识、读取确认内容并释放"
ToolkitAssets -> ToolkitEditing: "明确确认准备候选并提交，返回实际资源身份"
ToolkitHost -> ToolkitAssets: "[...]"
ToolkitAsset_generation -> ToolkitConfig: "[...]"
ToolkitAsset_processing -> ToolkitAsset_generation: "只读原子执行交付的具名字节"
ToolkitAsset_candidates -> ToolkitAsset_generation: "暂存具名产物字节"
ToolkitHost -> ToolkitAsset_generation: "真实产物字节输入"
ToolkitAsset_candidates -> ToolkitAsset_processing: "保存同一产物的确定性校验结果"
ToolkitHost -> ToolkitAsset_processing: "[...]"
ToolkitHost -> ToolkitAsset_candidates: "[...]"
ToolkitPi_plugin -> ToolkitConfig: "官方显式参数进入统一只读配置"
ToolkitHost -> ToolkitConfig: "生成空壳接收明确公开参数和独立凭据端口"
ToolkitEditing -> ToolkitEntities: "编辑候选经唯一实体入口提交"
ToolkitEditing -> ToolkitView_service: "只读取具名视图；提交后的派生刷新由Host驱动"
ToolkitEditing -> ToolkitConversion: "[...]"
ToolkitHost -> ToolkitEditing: "WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令"
ToolkitPi_plugin -> ToolkitHost: "[...]"
ToolkitPi_plugin -> ToolkitMcp: "启动回环 HTTP，交由 Pi 官方 MCP 客户端消费"
ToolkitLint -> ToolkitScript: "[...]"
ToolkitLint -> ToolkitAnalysis: "分析结果"
ToolkitLint_tests -> ToolkitLint: "调用纯检查空壳"
ToolkitDiagnostics -> ToolkitLint: "调用纯检查，诊断状态归 Diagnostics"
ToolkitLint_tests -> ToolkitProject_model: "提供真实逻辑实体输入"
ToolkitLint_tests -> ToolkitScript: "[...]"
ToolkitLint_tests -> ToolkitAnalysis: "构建同次方法绑定及调用图"
ToolkitLanguage -> ToolkitEntities: "共享实体服务与完整读取基准"
ToolkitLanguage -> ToolkitDiagnostics: "共享诊断服务和唯一结果类型"
ToolkitLanguage_tests -> ToolkitLanguage: "真实装配与四类请求执行"
ToolkitHost -> ToolkitLanguage: "[...]"
ToolkitLanguage_tests -> ToolkitHost: "独占测试工程生命周期"
ToolkitLanguage_tests -> ToolkitEntities: "建立真实实体 Layer"
ToolkitLanguage_tests -> ToolkitProject_model: "读取实际文件修订"
ToolkitLanguage_tests -> ToolkitFiles: "建立真实文件边界"
ToolkitLanguage_tests -> ToolkitDiagnostics: "注入真实诊断 Layer"
ToolkitHost -> ToolkitInvocations: "[...]"
ToolkitHost -> ToolkitEntities: "[...]"
ToolkitHost -> ToolkitView_service: "[...]"
ToolkitHost -> ToolkitProject_model
ToolkitHost -> ToolkitScript: "独立序列化验证实体反向语义"
ToolkitHost -> ToolkitFiles: "[...]"
ToolkitHost -> ToolkitSemantic: "实际调用验证语义空壳明确失败及输入保持原样"
ToolkitHost -> ToolkitConversion: "[...]"
ToolkitHost -> ToolkitDiagnostics: "WorkspaceServices.ts 装配诊断与受控业务入口"
ToolkitHost -> ToolkitPreview: "[...]"
ToolkitHost -> ToolkitMcp: "实际调用 patch 匹配空壳验证明确失败与顺序输入保真"
ToolkitMcp -> ToolkitHost
ToolkitEntities -> ToolkitProject_model
ToolkitEntities -> ToolkitScript: "零件实体携带显式转换依据"
ToolkitEntities -> ToolkitFiles: "实体层唯一业务 IO；读取与提交分别授权到文件"
ToolkitEntities -> ToolkitSemantic: "快照语义装配"
ToolkitView_service -> ToolkitEntities: "视图主动读取实体；派生结果经实体入口交付"
ToolkitConversion -> ToolkitEntities: "[...]"
ToolkitDiagnostics -> ToolkitEntities: "诊断主动读取实体快照"
ToolkitPreview -> ToolkitEntities: "预览只读实体资源"
ToolkitView_service -> ToolkitConversion: "视图唯一驱动转换与缓存释放"
ToolkitScript -> ToolkitProject_model
ToolkitFiles -> ToolkitProject_model: "文件边界使用统一相对路径校验与文件事实合同"
ToolkitSemantic -> ToolkitProject_model: "工程逻辑快照合同"
ToolkitConversion -> ToolkitProject_model: "[...]"
ToolkitAnalysis -> ToolkitProject_model
ToolkitScript -> ToolkitConversion
ToolkitSemantic -> ToolkitScript: "[...]"
ToolkitConversion -> ToolkitScript: "[...]"
ToolkitAnalysis -> ToolkitScript
ToolkitSemantic -> ToolkitAnalysis: "符号表与调用图"
ToolkitDiagnostics -> ToolkitAnalysis
`;case`workspace_services`:return`direction: down

ToolkitHost: {
  label: "工作区 Host"

  Logic: {
    label: "Host 组合根与受控入口"
  }
}
ToolkitDiagnostics: {
  label: "诊断业务"
}
ToolkitPreview: {
  label: "Canvas 预览业务"
}
ToolkitAssets: {
  label: "资产任务与确认业务"
}
ToolkitEditing: {
  label: "编辑业务"
}
ToolkitView_service: {
  label: "第三层：视图关联与交付"
}
PureChange_plan: {
  label: "变更计划纯计算"
}
ToolkitConversion: {
  label: "仅缓存状态的转换服务"

  Ts: {
    label: "零件与 TS 视图双向转换"
  }
  Html: {
    label: "独立 Canvas 与 HTML 视图双向转换"
  }
  Canvas: {
    label: "Canvas 与 HTML 片段双向转换"
  }
}
ToolkitEntities: {
  label: "第二层：工程实体"
}
ToolkitFiles: {
  label: "第一层：文件管理与监听"
}
ToolkitSemantic: {
  label: "语义装配（设计）"
}
ToolkitAnalysis: {
  label: "纯符号表与调用图"
}

ToolkitHost.Logic -> ToolkitFiles: "Host 装配并单一消费文件变化；工程业务 IO 归实体"
ToolkitHost.Logic -> ToolkitEntities: "Host 主动重读实体；WorkspaceServices 读取状态"
ToolkitEntities -> ToolkitFiles: "实体层唯一业务 IO；读取与提交分别授权到文件"
ToolkitEntities -> ToolkitSemantic: "快照语义装配"
ToolkitHost.Logic -> ToolkitView_service: "Host 主动驱动视图；WorkspaceServices 装配"
ToolkitView_service -> ToolkitEntities: "视图主动读取实体；派生结果经实体入口交付"
ToolkitHost.Logic -> ToolkitConversion.Canvas: "WorkspaceServices.ts 仅装配共享转换"
ToolkitHost.Logic -> ToolkitConversion.Ts: "WorkspaceServices.ts 仅装配；缓存由视图驱动"
ToolkitHost.Logic -> ToolkitConversion.Html: "WorkspaceServices.ts 仅装配 HTML 转换"
ToolkitView_service -> ToolkitConversion.Ts: "视图唯一驱动转换与缓存释放"
ToolkitView_service -> ToolkitConversion.Html
ToolkitConversion.Canvas -> ToolkitEntities: "实体输入与资源依赖"
ToolkitConversion.Ts -> ToolkitEntities: "转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付"
ToolkitConversion.Html -> ToolkitEntities: "独立 Canvas 与视图实体"
ToolkitConversion.Ts -> ToolkitConversion.Canvas: "内部 Canvas 双向转换"
ToolkitConversion.Html -> ToolkitConversion.Canvas: "共享片段服务的工作区装配"
ToolkitSemantic -> ToolkitAnalysis: "符号表与调用图"
ToolkitHost.Logic -> ToolkitDiagnostics: "WorkspaceServices.ts 装配诊断与受控业务入口"
ToolkitDiagnostics -> ToolkitEntities: "诊断主动读取实体快照"
ToolkitDiagnostics -> ToolkitAnalysis
ToolkitHost.Logic -> ToolkitEditing: "WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令"
ToolkitEditing -> ToolkitEntities: "编辑候选经唯一实体入口提交"
ToolkitEditing -> ToolkitView_service: "只读取具名视图；提交后的派生刷新由Host驱动"
ToolkitEditing -> ToolkitConversion.Ts: "视图反向转换"
ToolkitEditing -> ToolkitConversion.Html: "独立 Canvas 反向转换"
ToolkitEditing -> PureChange_plan: "统一变更计划与候选"
PureChange_plan -> ToolkitEntities: "只引用格式实体和读取基准；不调用实体服务或建立 Tree"
PureChange_plan -> ToolkitAnalysis: "只读符号表与调用图"
ToolkitHost.Logic -> ToolkitPreview: "WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令"
ToolkitPreview -> ToolkitEntities: "预览只读实体资源"
ToolkitHost.Logic -> ToolkitAssets: "同一 Workspace Layer 装配，Host 分发具名资产命令"
ToolkitAssets -> ToolkitEditing: "明确确认准备候选并提交，返回实际资源身份"
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
FrontendLanguage: {
  label: "标准语言服务端口（设计）"
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
FrontendPlugin -> FrontendLanguage: "标准 LSP 客户端合同"
FrontendTests -> FrontendLanguage: "真实 Host 验证标准客户端连接骨架"
FrontendPlugin -> FrontendUi
FrontendTests -> FrontendUi
FrontendTests -> FrontendPlugin
`;case`pure_functions`:return`direction: down

PureChange_plan: {
  label: "变更计划纯计算"
}
PureCanvas: {
  label: "Canvas 四向转换"
}
`;case`canvas`:return`direction: down

CanvasRenderer_tests: {
  label: "Canvas 渲染测试"
}
CanvasRenderer_support: {
  label: "CPU 后端测试支持"
}
RendererEntry: {
  label: "唯一渲染入口"
}
RendererNodes: {
  label: "节点能力调度"
}
RendererFeatures: {
  label: "节点绘制特性"
}
RendererImages: {
  label: "图片合成"
}
RendererLayout: {
  label: "确定性布局计算"
}
RendererDom_schema: {
  label: "文档输入校验"
}
RendererFields: {
  label: "特性有效值"
}
RendererValues: {
  label: "富文本解析"
}
RendererState: {
  label: "渲染会话与资源结算"
}
RendererSchema: {
  label: "结构化节点 Schema"
}
RendererRaster: {
  label: "CPU 光栅化与 PNG 编码（设计）"
}
RendererContracts: {
  label: "CanvasDocument 与渲染合同"
}

CanvasRenderer_tests -> CanvasRenderer_support: "复用官方 CPU 后端初始化边界"
CanvasRenderer_tests -> RendererContracts: "核对失败前后的完整请求输入"
CanvasRenderer_tests -> RendererEntry: "验证唯一入口明确失败"
RendererSchema -> RendererContracts: "文档节点类型"
RendererFields -> RendererContracts: "消费节点类型白名单"
RendererValues -> RendererContracts: "产生具名文本段"
RendererLayout -> RendererContracts: "交付唯一布局结果"
RendererRaster -> RendererContracts: "像素与 PNG 结果"
RendererState -> RendererContracts: "会话与资源状态"
RendererEntry -> RendererContracts: "唯一入口输入输出"
RendererDom_schema -> RendererSchema: "提取节点专属字段"
RendererFields -> RendererSchema: "消费唯一节点 Schema"
RendererLayout -> RendererDom_schema: "消费同次校验后的节点字段与身份"
RendererEntry -> RendererDom_schema: "文档校验"
RendererNodes -> RendererLayout: "消费确定布局节点"
RendererNodes -> RendererFeatures: "递归顺序由调度拥有，节点投影由特性拥有"
RendererNodes -> RendererState: "共享同次绘制会话"
RendererEntry -> RendererNodes: "能力调度"
RendererLayout -> RendererFields: "持有节点有效值的唯一布局结果"
RendererImages -> RendererLayout: "消费同一布局结果"
RendererImages -> RendererState: "使用会话拥有的资源"
RendererFeatures -> RendererImages: "复用节点投影输入和同次会话合同"
RendererLayout -> RendererValues: "持有解析后的同次文本段"
RendererLayout -> RendererState: "读取同次会话的固定字体"
RendererEntry -> RendererLayout: "布局阶段"
RendererState -> RendererRaster: "会话拥有独占软件 surface"
RendererEntry -> RendererState: "独占会话与资源结算"
`;case`tooling`:return`direction: down

ToolsTests: {
  label: "自身回归测试"
}
ToolsHooks: {
  label: "Git 钩子转发"
}
ToolsTesting: {
  label: "测试夹具"
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
ToolsRequirement_documents: {
  label: "新版需求图与文档环境"
}
ToolsTest_metrics: {
  label: "模块测试指标基线"
}

ToolsCli -> ToolsArchitecture
ToolsCli -> ToolsCoding
ToolsTests -> ToolsCli
ToolsTesting -> ToolsCli
ToolsHooks -> ToolsCli
ToolsCoding -> ToolsArchitecture
ToolsTests -> ToolsArchitecture
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
SpecificationsWorkspace_files: {
  label: "工程文件合同"
}
SpecificationsHjson: {
  label: "Hjson 统一格式合同"
}
SpecificationsEntities: {
  label: "第二层实体基础设施合同"
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
  label: "Canvas 转换合同"
}
SpecificationsPreview: {
  label: "静态预览与发布合同"
}
SpecificationsAnalysis: {
  label: "工程分析合同"
}
`;case`documentation`:return`direction: down

DocumentationManual: {
  label: "MechToolkit 发布与开发指南"
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
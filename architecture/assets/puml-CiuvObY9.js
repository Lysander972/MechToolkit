var e=e=>{switch(e){case`asset_review_flow`:return`@startuml
title "07f · 同一候选的切片预览与评阅"
left to right direction

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

skinparam rectangle<<ToolkitMcpLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssets>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_candidates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_processing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_generation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==工具合同与 HTTP 接入\\n\\n实现 HTTP 工具合同；请求生命周期受 Host 控制。patch 匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host 准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。" <<ToolkitMcpLogic>> as ToolkitMcpLogic
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==资产任务与确认业务\\n\\n同一 Host Scope 拥有跨请求任务标识、pending→running→ready/failed/canceled 状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入 confirmed/discarded，写入成功或部分写入失败后重读失败进入 reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限 4；请求取消只结束等待，显式 cancel 结束本地任务与交付并报告远端执行是否已经停止，不把断开 HTTP 当作远端停止。UI 贴图按生成、校验、切片预览、评阅和明确确认编排，宿主只展示同一状态与结果；confirm 经 Editing.importAsset/commit 后返回实际重读的资源身份，候选形成前不写工程。" <<ToolkitAssets>> as ToolkitAssets
rectangle "==候选存储与释放\\n\\nHost Scope 独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次 read 交付新的字节流，Scope 关闭释放全部所属资源。IO 仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。" <<ToolkitAsset_candidates>> as ToolkitAsset_candidates
rectangle "==产物确定性校验与切片预览\\n\\n任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与 3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成 CanvasDocument，经唯一 CPU renderer 输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。" <<ToolkitAsset_processing>> as ToolkitAsset_processing
rectangle "==工作流绑定与远端生成执行\\n\\n消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为 RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。" <<ToolkitAsset_generation>> as ToolkitAsset_generation

ToolkitMcpLogic .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>renderSlice/review：taskId 与 artifactId
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>显式跨请求操作，不自动确认
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>读取同一候选
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_processing : <color:#8D8D8D>结构化 slice 与尺寸案例生成 PNG 预览
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>有来源的工作流返回视觉评阅意见
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitMcpLogic : <color:#8D8D8D>交付具名预览或意见，由调用方明确确认
@enduml
`;case`asset_generation_flow`:return`@startuml
title "07c · 生成、校验、候选与查询"
left to right direction

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

skinparam rectangle<<ToolkitMcpLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssets>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_candidates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_generation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Runninghub>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_processing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==工具合同与 HTTP 接入\\n\\n实现 HTTP 工具合同；请求生命周期受 Host 控制。patch 匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host 准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。" <<ToolkitMcpLogic>> as ToolkitMcpLogic
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==资产任务与确认业务\\n\\n同一 Host Scope 拥有跨请求任务标识、pending→running→ready/failed/canceled 状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入 confirmed/discarded，写入成功或部分写入失败后重读失败进入 reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限 4；请求取消只结束等待，显式 cancel 结束本地任务与交付并报告远端执行是否已经停止，不把断开 HTTP 当作远端停止。UI 贴图按生成、校验、切片预览、评阅和明确确认编排，宿主只展示同一状态与结果；confirm 经 Editing.importAsset/commit 后返回实际重读的资源身份，候选形成前不写工程。" <<ToolkitAssets>> as ToolkitAssets
rectangle "==候选存储与释放\\n\\nHost Scope 独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次 read 交付新的字节流，Scope 关闭释放全部所属资源。IO 仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。" <<ToolkitAsset_candidates>> as ToolkitAsset_candidates
rectangle "==工作流绑定与远端生成执行\\n\\n消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为 RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。" <<ToolkitAsset_generation>> as ToolkitAsset_generation
rectangle "==RunningHub 远端 ComfyUI 执行\\n\\n外部推理与计费边界。仅使用 /proxy 或 /proxy-plus 原生 ComfyUI：upload/image 上传、prompt 提交、history 查询、view 下载；不使用代理 WS。模型库 resource/list 仅用于已允许的只读清单查询，标准模型与 LLM API 生成通道不进入架构。" <<Runninghub>> as Runninghub
rectangle "==产物确定性校验与切片预览\\n\\n任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与 3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成 CanvasDocument，经唯一 CPU renderer 输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。" <<ToolkitAsset_processing>> as ToolkitAsset_processing

ToolkitMcpLogic .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>提交具名生成请求
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>submit：接受前接收具名上传输入
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>暂存输入流；成功后建立 Host Scope 的 pending 任务并返回 taskId
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>工作流绑定与原子远端执行
ToolkitAsset_generation .[#8D8D8D,thickness=2].> Runninghub : <color:#8D8D8D>上传、prompt、history、view
ToolkitAsset_generation .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>具名产物字节流与执行事实
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>单次消费产物流，暂存未就绪内容
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>读取暂存字节供校验
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_processing : <color:#8D8D8D>按工作流输出绑定交付单文件或同组文件及明确要求
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>将带产物身份的成功校验结果关联到同组候选，进入 ready
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>status/result：同 taskId 跨请求查询
@enduml
`;case`asset_confirmation_flow`:return`@startuml
title "07d · 明确确认、统一候选与实际提交"
left to right direction

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

skinparam rectangle<<ToolkitMcpLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssets>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_candidates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEditing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==工具合同与 HTTP 接入\\n\\n实现 HTTP 工具合同；请求生命周期受 Host 控制。patch 匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host 准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。" <<ToolkitMcpLogic>> as ToolkitMcpLogic
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==资产任务与确认业务\\n\\n同一 Host Scope 拥有跨请求任务标识、pending→running→ready/failed/canceled 状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入 confirmed/discarded，写入成功或部分写入失败后重读失败进入 reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限 4；请求取消只结束等待，显式 cancel 结束本地任务与交付并报告远端执行是否已经停止，不把断开 HTTP 当作远端停止。UI 贴图按生成、校验、切片预览、评阅和明确确认编排，宿主只展示同一状态与结果；confirm 经 Editing.importAsset/commit 后返回实际重读的资源身份，候选形成前不写工程。" <<ToolkitAssets>> as ToolkitAssets
rectangle "==候选存储与释放\\n\\nHost Scope 独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次 read 交付新的字节流，Scope 关闭释放全部所属资源。IO 仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。" <<ToolkitAsset_candidates>> as ToolkitAsset_candidates
rectangle "==编辑业务\\n\\n读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change Plan 形成统一 EntityChange/Schematics 候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用 Views。TODO：编辑与重构编排。" <<ToolkitEditing>> as ToolkitEditing
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service

ToolkitMcpLogic .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>confirm：taskId、artifactId、目标 RelativePath
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>固定选定产物与确认信息
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>按校验结果读取所选产物及其关联文件
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>importAsset：具名文件与目标准备统一 EntityChange，零写盘
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>读取目标与引用基准，构造资源及 GUID 操作
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>取得本次候选的只读预期结果，用于重读失败后的核对
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>从同一候选取得文件、目录动作与预期内容
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>commit：明确提交候选
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>校验基准、提交并实际重读
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>交付同次实际重读结果与读取基准
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>提交与重读成功后释放候选
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>分别交付写入与重读结果，重读失败时进入 reconciling 并保留候选
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>重读成功时使用同次实际变化主动刷新派生视图
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitMcpLogic : <color:#8D8D8D>交付实际资源身份及阶段错误；刷新失败保留已提交事实
@enduml
`;case`asset_cancel_flow`:return`@startuml
title "07e · 取消、丢弃与资源释放"
left to right direction

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
skinparam rectangle<<ToolkitAssets>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_generation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_candidates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==资产任务与确认业务\\n\\n同一 Host Scope 拥有跨请求任务标识、pending→running→ready/failed/canceled 状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入 confirmed/discarded，写入成功或部分写入失败后重读失败进入 reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限 4；请求取消只结束等待，显式 cancel 结束本地任务与交付并报告远端执行是否已经停止，不把断开 HTTP 当作远端停止。UI 贴图按生成、校验、切片预览、评阅和明确确认编排，宿主只展示同一状态与结果；confirm 经 Editing.importAsset/commit 后返回实际重读的资源身份，候选形成前不写工程。" <<ToolkitAssets>> as ToolkitAssets
rectangle "==工作流绑定与远端生成执行\\n\\n消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为 RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。" <<ToolkitAsset_generation>> as ToolkitAsset_generation
rectangle "==候选存储与释放\\n\\nHost Scope 独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次 read 交付新的字节流，Scope 关闭释放全部所属资源。IO 仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。" <<ToolkitAsset_candidates>> as ToolkitAsset_candidates

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>显式 cancel、discard 或关闭 Scope
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>中断本地执行，报告远端停止事实
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>释放所属未完成或丢弃候选
@enduml
`;case`asset_reconciliation_flow`:return`@startuml
title "07g · 重读失败后的实际状态核对"
left to right direction

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
skinparam rectangle<<ToolkitAssets>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEditing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_candidates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==资产任务与确认业务\\n\\n同一 Host Scope 拥有跨请求任务标识、pending→running→ready/failed/canceled 状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入 confirmed/discarded，写入成功或部分写入失败后重读失败进入 reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限 4；请求取消只结束等待，显式 cancel 结束本地任务与交付并报告远端执行是否已经停止，不把断开 HTTP 当作远端停止。UI 贴图按生成、校验、切片预览、评阅和明确确认编排，宿主只展示同一状态与结果；confirm 经 Editing.importAsset/commit 后返回实际重读的资源身份，候选形成前不写工程。" <<ToolkitAssets>> as ToolkitAssets
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==编辑业务\\n\\n读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change Plan 形成统一 EntityChange/Schematics 候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用 Views。TODO：编辑与重构编排。" <<ToolkitEditing>> as ToolkitEditing
rectangle "==候选存储与释放\\n\\nHost Scope 独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次 read 交付新的字节流，Scope 关闭释放全部所属资源。IO 仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。" <<ToolkitAsset_candidates>> as ToolkitAsset_candidates

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>源事件或 status 触发实体重建；status 返回当前阶段事实
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>按需完整重读实体，交付实际变化
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>交付已重建的实体状态供任务核对
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>按实际变化刷新派生视图，刷新错误独立交付
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>交付本次提交的只读预期结果
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>核对实际文件、目录、身份与预期结果
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>交付一致结果或具体冲突
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>交付核对结果
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>核对一致后释放候选
@enduml
`;case`assets_context`:return`@startuml
title "07 · 资产管线系统上下文"
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

skinparam rectangle<<Frontend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Pi_agent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Asset_settings>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Toolkit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Runninghub>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Asset_storage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==单一前端扩展\\n\\n提供 VS Code 配置、侧栏与 Host 接入；领域状态保留在 Toolkit。" <<Frontend>> as Frontend
rectangle "==Pi 官方运行时\\n\\n外部 Pi v1.0.0，官方提交 a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP 客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。" <<Pi_agent>> as Pi_agent
rectangle "==运行时配置与凭据来源\\n\\nVS Code 原生 WorkspaceConfiguration 或 Pi 显式 flags、指定配置文件提供参数与可选明文凭据，不额外加密。入口只选择自己的一个来源，公开参数与凭据分开交付，凭据不进入调用记录或日志；不使用环境变量。" <<Asset_settings>> as Asset_settings
rectangle "==Toolkit TypeScript 产品\\n\\n拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。" <<Toolkit>> as Toolkit
rectangle "==RunningHub 远端 ComfyUI 执行\\n\\n外部推理与计费边界。仅使用 /proxy 或 /proxy-plus 原生 ComfyUI：upload/image 上传、prompt 提交、history 查询、view 下载；不使用代理 WS。模型库 resource/list 仅用于已允许的只读清单查询，标准模型与 LLM API 生成通道不进入架构。" <<Runninghub>> as Runninghub
rectangle "==运行时用户候选暂存区\\n\\n玩家机器的工程外暂存资源，区别于开发仓库和 test/data/projects。每个 Host Scope 独占；暂存绝对路径仅在存储文件系统边界使用，对内部交付产物标识及字节流。成功入库、丢弃、失败和 Scope 关闭释放所属资源。" <<Asset_storage>> as Asset_storage

Frontend .[#8D8D8D,thickness=2].> Toolkit : <color:#8D8D8D>[...]
Pi_agent .[#8D8D8D,thickness=2].> Toolkit : <color:#8D8D8D>官方扩展加载、会话事件、MCP 连接与结果交付
Toolkit .[#8D8D8D,thickness=2].> Frontend : <color:#8D8D8D>通过原生配置适配验证当前值、边界与读取失败
Toolkit .[#8D8D8D,thickness=2].> Runninghub : <color:#8D8D8D>原生远端执行与只读模型事实查询
Asset_settings .[#8D8D8D,thickness=2].> Toolkit : <color:#8D8D8D>入口选择配置与凭据的唯一来源
Toolkit .[#8D8D8D,thickness=2].> Asset_storage : <color:#8D8D8D>工程外流式暂存与 Scope 释放
@enduml
`;case`assets_pipeline`:return`@startuml
title "07a · 资产任务、执行与候选容器"
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

skinparam rectangle<<ToolkitMcpLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssets>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_candidates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEditing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_processing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_generation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Renderer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConfigLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "MCP 协议接入" <<ToolkitMcp>> as ToolkitMcp {
  skinparam RectangleBorderColor<<ToolkitMcp>> #3b82f6
  skinparam RectangleFontColor<<ToolkitMcp>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitMcp>> dashed

  rectangle "==工具合同与 HTTP 接入\\n\\n实现 HTTP 工具合同；请求生命周期受 Host 控制。patch 匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host 准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。" <<ToolkitMcpLogic>> as ToolkitMcpLogic
}
rectangle "工作区 Host" <<ToolkitHost>> as ToolkitHost {
  skinparam RectangleBorderColor<<ToolkitHost>> #3b82f6
  skinparam RectangleFontColor<<ToolkitHost>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitHost>> dashed

  rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
}
rectangle "==资产任务与确认业务\\n\\n同一 Host Scope 拥有跨请求任务标识、pending→running→ready/failed/canceled 状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入 confirmed/discarded，写入成功或部分写入失败后重读失败进入 reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限 4；请求取消只结束等待，显式 cancel 结束本地任务与交付并报告远端执行是否已经停止，不把断开 HTTP 当作远端停止。UI 贴图按生成、校验、切片预览、评阅和明确确认编排，宿主只展示同一状态与结果；confirm 经 Editing.importAsset/commit 后返回实际重读的资源身份，候选形成前不写工程。" <<ToolkitAssets>> as ToolkitAssets
rectangle "==候选存储与释放\\n\\nHost Scope 独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次 read 交付新的字节流，Scope 关闭释放全部所属资源。IO 仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。" <<ToolkitAsset_candidates>> as ToolkitAsset_candidates
rectangle "==编辑业务\\n\\n读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change Plan 形成统一 EntityChange/Schematics 候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用 Views。TODO：编辑与重构编排。" <<ToolkitEditing>> as ToolkitEditing
rectangle "==产物确定性校验与切片预览\\n\\n任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与 3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成 CanvasDocument，经唯一 CPU renderer 输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。" <<ToolkitAsset_processing>> as ToolkitAsset_processing
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==工作流绑定与远端生成执行\\n\\n消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为 RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。" <<ToolkitAsset_generation>> as ToolkitAsset_generation
rectangle "==Canvas CPU 渲染引擎\\n\\n结构化 CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经 CanvasKit/Skia CPU surface 输出 PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。" <<Renderer>> as Renderer
rectangle "配置来源抽象与实现" <<ToolkitConfig>> as ToolkitConfig {
  skinparam RectangleBorderColor<<ToolkitConfig>> #3b82f6
  skinparam RectangleFontColor<<ToolkitConfig>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitConfig>> dashed

  rectangle "==只读配置来源\\n\\n提供统一只读 ConfigSource、ToolkitConfig 和资产凭据端口；PiConfigSource 在本模块解释官方显式输入，VS Code 的具体 WorkspaceConfiguration 适配由 frontend.plugin 承载。两种入口各自注入唯一来源，默认值由宿主原生声明，凭据按远端执行边界读取。" <<ToolkitConfigLogic>> as ToolkitConfigLogic
}

ToolkitMcpLogic .[#8D8D8D,thickness=2].> ToolkitHostLogic
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>同一 Workspace Layer 装配，Host 分发具名资产命令
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>任务绑定原子生成与评阅，不转移调度所有权
ToolkitAsset_generation .[#8D8D8D,thickness=2].> ToolkitConfigLogic : <color:#8D8D8D>只读配置与调用边界凭据
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAsset_processing : <color:#8D8D8D>共享工作区处理服务
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_processing : <color:#8D8D8D>产物校验与明确切片预览
ToolkitAsset_processing .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>只读原子执行交付的具名字节
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>共享工作区候选服务
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>任务关联候选标识、读取确认内容并释放
ToolkitAsset_candidates .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>暂存具名产物字节
ToolkitAsset_candidates .[#8D8D8D,thickness=2].> ToolkitAsset_processing : <color:#8D8D8D>保存同一产物的确定性校验结果
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>明确确认准备候选并提交，返回实际资源身份
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>Host 主动重读实体；WorkspaceServices 读取状态
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>编辑候选经唯一实体入口提交
ToolkitAsset_processing .[#8D8D8D,thickness=2].> Renderer : <color:#8D8D8D>切片预览复用唯一 CPU PNG 入口
@enduml
`;case`assets_components`:return`@startuml
title "07b · 资产组件与代码端口"
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

skinparam rectangle<<ToolkitAssetsScheduler>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssetsConfirmation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssetsReview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssetsContracts>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_generationEntry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_processingInspection>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_processingSlice>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_candidatesStorage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEditingAsset_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_generationWorkflows>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_generationTransport>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "资产任务与确认业务" <<ToolkitAssets>> as ToolkitAssets {
  skinparam RectangleBorderColor<<ToolkitAssets>> #3b82f6
  skinparam RectangleFontColor<<ToolkitAssets>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitAssets>> dashed

  rectangle "==唯一任务状态与有界调度\\n\\n拥有唯一任务状态、执行 Fiber 及四并发 Semaphore，任务归 Host Scope。以 taskId 关联不可变输入和候选标识，串行协调候选消费；同时需要 Host 编排边界和任务许可时先取得 Host 边界，不持任务许可等待 Host 边界。result 交付 ready 候选集合，并从候选存储读取图片原内容及 MIME，经 Host 交给协议层；确认成功或丢弃后终止候选消费。生成、处理与候选 IO 分别委托已有服务；确认和评阅各自消费同一候选服务，状态转换由本节点统一拥有。生成或校验失败及取消释放未完成内容；确认失败保留已就绪候选，成功确认、丢弃或关闭释放所属候选，反馈实际状态及诊断。" <<ToolkitAssetsScheduler>> as ToolkitAssetsScheduler
  rectangle "==明确确认与提交结果\\n\\n确认固定 taskId 与 artifactId，读取校验后的候选字节，调用 Editing.importAsset 形成统一 EntityChange，然后经 Editing.commit 校验基准与提交。确认一经任务接受即由 Host Scope 持有执行及同一任务的候选消费许可；请求取消只结束等待，状态和结果仍经任务查询。实体层从本次候选经 Editing 交付只读预期结果，任务持有至确认、丢弃或 Host 关闭；资产字节仍由候选存储持有。写入成功或部分写入失败后重读失败进入 reconciling；Host 交付源事件或状态查询触发重建后的实体状态，任务经 Editing 将预期结果交回实体层核对资源、目录与必要引用。原写入失败且核对不一致时返回 ready 并保留诊断，再次明确确认重新读取基准及准备；原写入成功且核对不一致时保持冲突并拒绝再次提交。提交与重读成功后释放候选并进入 confirmed；后续刷新失败保留已提交事实及刷新错误。" <<ToolkitAssetsConfirmation>> as ToolkitAssetsConfirmation
  rectangle "==跨请求切片预览与评阅\\n\\nrenderSlice/review 固定同一 taskId 与 artifactId，从候选读取已校验内容，分别调用确定性切片预览与有来源的远端评阅工作流。预览和意见保持具名结果，不替换原始候选，不自动提交或制造另一个任务状态所有者。" <<ToolkitAssetsReview>> as ToolkitAssetsReview
  rectangle "==具名任务输入与结果\\n\\nsubmit/status/result/cancel/discard/renderSlice/review/confirm 各自使用具名输入和结果，以名义类和共同抽象根表达不同命令，以 instanceof 收窄；不使用语义联合或匿名对象联合。submit 携带明确能力与参数，renderSlice 携带 taskId、artifactId、结构化 slice 与尺寸案例，review 携带明确评阅输入，confirm 携带所选产物、目标 RelativePath 和确认信息。结果分别表达状态、产物、预览、意见、远端停止事实或提交后资源身份，可选值统一 Option。" <<ToolkitAssetsContracts>> as ToolkitAssetsContracts
}
rectangle "工作流绑定与远端生成执行" <<ToolkitAsset_generation>> as ToolkitAsset_generation {
  skinparam RectangleBorderColor<<ToolkitAsset_generation>> #3b82f6
  skinparam RectangleFontColor<<ToolkitAsset_generation>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitAsset_generation>> dashed

  rectangle "==生成与评阅执行入口\\n\\nexecute 接收 GenerationRequest 与 signal，返回按 artifactId/MIME/格式及字节流标识的 GenerationOutput；review 接收选定候选和评阅指令，经同一允许工作流执行视觉评阅，输出意见而不自动代替确认。" <<ToolkitAsset_generationEntry>> as ToolkitAsset_generationEntry
  rectangle "==能力白名单与模型绑定\\n\\n图像生成/编辑、UI 贴图、视频/序列帧、音乐、音效及图生 3D 使用明确能力白名单；九宫格切片由 AssetProcessing 确定性处理，不作为远端生成能力。能力匹配有来源的 workflowId、节点参数与模型文件清单；模型库收藏与创建时间不超过六个月是使用条件。具体 graph、checkpoint 与远端节点未验证则报告缺口，不把旧标准模型 API 名称当作 checkpoint，不承诺可调用。" <<ToolkitAsset_generationWorkflows>> as ToolkitAsset_generationWorkflows
  rectangle "==原生 ComfyUI 远端传输\\n\\n原生 HTTP 上传→提交取得 promptId→history 等待完成→下载具名文件；请求与 promptId 绑定，取消停止本地等待并明确交付远端停止事实。没有经核实的任务级取消合同时不调用影响其他任务的全局 interrupt；不伪造服务端取消。" <<ToolkitAsset_generationTransport>> as ToolkitAsset_generationTransport
}
rectangle "产物确定性校验与切片预览" <<ToolkitAsset_processing>> as ToolkitAsset_processing {
  skinparam RectangleBorderColor<<ToolkitAsset_processing>> #3b82f6
  skinparam RectangleFontColor<<ToolkitAsset_processing>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitAsset_processing>> dashed

  rectangle "==结构化产物校验\\n\\n图片、音频、视频和 3D 文件组质量要求使用具名名义类及共同抽象根，以 instanceof 收窄；按各自字段实际解码并校验。PNG 后缀不能证明透明，模型营销不能证明九宫格或可入库格式。失败交付实际诊断并阻止进入 ready 候选。" <<ToolkitAsset_processingInspection>> as ToolkitAsset_processingInspection
  rectangle "==九宫格预览装配\\n\\n选定 artifactId、原生 slicedBorderLB/RT 与 slicedRectLB/RT 四组向量和尺寸案例产生结构化 CanvasDocument；本次文档内引用绑定未入库候选图片字节，工程路径为 None，引用标识不作为工程 GUID。绘制交给 CPU renderer，输出具名 PNG，不改原候选、不写工程。" <<ToolkitAsset_processingSlice>> as ToolkitAsset_processingSlice
}
rectangle "候选存储与释放" <<ToolkitAsset_candidates>> as ToolkitAsset_candidates {
  skinparam RectangleBorderColor<<ToolkitAsset_candidates>> #3b82f6
  skinparam RectangleFontColor<<ToolkitAsset_candidates>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitAsset_candidates>> dashed

  rectangle "==Scope 内的字节与产物索引\\n\\nAssetCandidates 拥有候选文件 IO 和资源寿命；暂存入口消费生成流并返回任务与产物标识，读取入口以这些标识交付独立流供校验，关联入口接收同一产物的校验结果并交付 AssetCandidate。AssetCandidate 只携带 artifactId、格式、校验结果，不暴露内部绝对路径。失败的未完成产物释放；已就绪候选在确认成功、丢弃或 Host 关闭时释放。" <<ToolkitAsset_candidatesStorage>> as ToolkitAsset_candidatesStorage
}
rectangle "编辑业务" <<ToolkitEditing>> as ToolkitEditing {
  skinparam RectangleBorderColor<<ToolkitEditing>> #3b82f6
  skinparam RectangleFontColor<<ToolkitEditing>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitEditing>> dashed

  rectangle "==资产入库候选准备\\n\\nEditing.importAsset 输入选定的具名产物文件集合、目标工程相对路径及显式确认信息，读取目标目录及引用基准，按实际工程格式调用实体原语准备资源、GUID 和必要引用操作的统一 EntityChange。关联文件组以整体准备并提交，实际资源身份来自提交重读。新增资源不用视图 replace 代替；不直接写盘，commit 后由实体实际重读，Host 主动调用 Views 刷新消费者。" <<ToolkitEditingAsset_import>> as ToolkitEditingAsset_import
}

ToolkitAssetsScheduler .[#8D8D8D,thickness=2].> ToolkitAssetsContracts : <color:#8D8D8D>具名请求、状态与结果
ToolkitAssetsConfirmation .[#8D8D8D,thickness=2].> ToolkitAssetsContracts : <color:#8D8D8D>选定产物、相对目标和确认结果
ToolkitAssetsReview .[#8D8D8D,thickness=2].> ToolkitAssetsContracts : <color:#8D8D8D>选定候选、切片案例及评阅输入与输出
ToolkitAssetsContracts .[#8D8D8D,thickness=2].> ToolkitAsset_generationEntry : <color:#8D8D8D>提交输入绑定原子生成合同
ToolkitAsset_generationWorkflows .[#8D8D8D,thickness=2].> ToolkitAsset_generationTransport : <color:#8D8D8D>绑定后的原生 ComfyUI graph
ToolkitAsset_generationEntry .[#8D8D8D,thickness=2].> ToolkitAsset_generationWorkflows : <color:#8D8D8D>选择明确能力和工作流
ToolkitAsset_generationEntry .[#8D8D8D,thickness=2].> ToolkitAsset_generationTransport : <color:#8D8D8D>执行具名输入并读取实际结果
ToolkitAssetsContracts .[#8D8D8D,thickness=2].> ToolkitAsset_processingInspection : <color:#8D8D8D>质量要求绑定唯一产物校验合同
ToolkitAssetsContracts .[#8D8D8D,thickness=2].> ToolkitAsset_processingSlice : <color:#8D8D8D>切片结果绑定唯一处理入口
ToolkitAssetsContracts .[#8D8D8D,thickness=2].> ToolkitAsset_candidatesStorage : <color:#8D8D8D>结果复用候选存储合同
ToolkitAssetsContracts .[#8D8D8D,thickness=2].> ToolkitEditingAsset_import : <color:#8D8D8D>确认输入绑定统一入库准备合同
@enduml
`;case`canvas_render`:return`@startuml
title "Canvas CPU 渲染引擎"
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
skinparam rectangle<<RendererNodes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererFeatures>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererImages>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererLayout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererDom_schema>>{
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
skinparam rectangle<<RendererState>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererSchema>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererRaster>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererContracts>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==唯一渲染入口\\n\\nCanvasRenderer 声明完整输入与 PNG 输出。后续实现由该入口主动驱动校验、布局、绘制与资源结算，同一请求独占会话；当前执行明确 TODO 失败。" <<RendererEntry>> as RendererEntry
rectangle "==节点能力调度\\n\\n按节点类型固定顺序调用能力；不持有 DOM。" <<RendererNodes>> as RendererNodes
rectangle "==节点绘制特性\\n\\n按节点类型与固定能力顺序编排矩形、文本、滚动内容和 Spine 网格绘制；图片、九宫格与渐变合成委托 images，共用同次布局和 CPU 会话。" <<RendererFeatures>> as RendererFeatures
rectangle "==图片合成\\n\\n资源字节解码、九宫格、渐变与颜色乘法；使用 CPU 图形后端。" <<RendererImages>> as RendererImages
rectangle "==确定性布局计算\\n\\n按校验后的节点专属字段与固定字体度量计算矩形、裁剪与文本行；布局树携带对应节点身份及有效值，供节点绘制和子节点布局使用，结果只存在当前渲染会话。" <<RendererLayout>> as RendererLayout
rectangle "==文档输入校验\\n\\n严格校验结构化文档，按唯一映射表提取与节点身份和顺序对应的节点专属 Option Schema，供同次布局及绘制消费；保留原文档，不将投影写回持久化字段。" <<RendererDom_schema>> as RendererDom_schema
rectangle "==特性有效值\\n\\n唯一字段默认值与启用白名单，不修改持久化输入。" <<RendererFields>> as RendererFields
rectangle "==富文本解析\\n\\n只解析原版富文本方言；持久化字段、枚举、颜色与 GUID 使用 Canvas 领域合同，不复制转换层解析器。" <<RendererValues>> as RendererValues
rectangle "==渲染会话与资源结算\\n\\nCpuRenderSession 登记资源、收束加载和释放、保留失败原因并输出诊断；显式时间保证确定性。" <<RendererState>> as RendererState
rectangle "==结构化节点 Schema\\n\\n声明结构化 Canvas 节点的确定类型字段；HTML/XML 解析归纯转换，本节点不执行解析或绘制。" <<RendererSchema>> as RendererSchema
rectangle "==CPU 光栅化与 PNG 编码（设计）\\n\\nCanvasKit WASM/Skia 软件 surface 承担字体度量、文字、路径、位图与网格，禁用 GPU。" <<RendererRaster>> as RendererRaster
rectangle "==CanvasDocument 与渲染合同\\n\\n持久化 Fields、节点类型、布局与文本结果、完整输入及 PNG 输出合同；资源按文档引用标识绑定字节，工程相对路径显式可选以支持未入库候选。PNG 同次携带节点索引链、名称、类型及 viewport 四角供树形视图和选中高亮使用，不承担解析或绘制。" <<RendererContracts>> as RendererContracts

RendererSchema .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>文档节点类型
RendererFields .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>消费节点类型白名单
RendererValues .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>产生具名文本段
RendererLayout .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>交付唯一布局结果
RendererRaster .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>像素与 PNG 结果
RendererState .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>会话与资源状态
RendererEntry .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>唯一入口输入输出
RendererDom_schema .[#8D8D8D,thickness=2].> RendererSchema : <color:#8D8D8D>提取节点专属字段
RendererFields .[#8D8D8D,thickness=2].> RendererSchema : <color:#8D8D8D>消费唯一节点 Schema
RendererLayout .[#8D8D8D,thickness=2].> RendererDom_schema : <color:#8D8D8D>消费同次校验后的节点字段与身份
RendererEntry .[#8D8D8D,thickness=2].> RendererDom_schema : <color:#8D8D8D>文档校验
RendererNodes .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>消费确定布局节点
RendererNodes .[#8D8D8D,thickness=2].> RendererFeatures : <color:#8D8D8D>递归顺序由调度拥有，节点投影由特性拥有
RendererNodes .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>共享同次绘制会话
RendererEntry .[#8D8D8D,thickness=2].> RendererNodes : <color:#8D8D8D>能力调度
RendererLayout .[#8D8D8D,thickness=2].> RendererFields : <color:#8D8D8D>持有节点有效值的唯一布局结果
RendererImages .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>消费同一布局结果
RendererImages .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>使用会话拥有的资源
RendererFeatures .[#8D8D8D,thickness=2].> RendererImages : <color:#8D8D8D>复用节点投影输入和同次会话合同
RendererLayout .[#8D8D8D,thickness=2].> RendererValues : <color:#8D8D8D>持有解析后的同次文本段
RendererLayout .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>读取同次会话的固定字体
RendererEntry .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>布局阶段
RendererState .[#8D8D8D,thickness=2].> RendererRaster : <color:#8D8D8D>会话拥有独占软件 surface
RendererEntry .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>独占会话与资源结算
@enduml
`;case`pi_session_start`:return`@startuml
title "06c · Pi 会话启动与读取交付"
left to right direction

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

skinparam rectangle<<Pi_agent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPi_pluginLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConfigLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitMcpLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Pi 官方运行时\\n\\n外部 Pi v1.0.0，官方提交 a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP 客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。" <<Pi_agent>> as Pi_agent
rectangle "==扩展生命周期与接入\\n\\n扩展工厂只注册 flags 和事件；session_start 从 ctx.cwd 建立专属 memory Host 和 HTTP 服务，再向 Pi 登记 MCP endpoint；连接由 Pi 管理。session_shutdown 先注销 MCP 登记，再关闭 HTTP，最后关闭 Host。new/resume/fork/reload 使用同一开始结束合同，不从会话历史重建工程状态。" <<ToolkitPi_pluginLogic>> as ToolkitPi_pluginLogic
rectangle "==只读配置来源\\n\\n提供统一只读 ConfigSource、ToolkitConfig 和资产凭据端口；PiConfigSource 在本模块解释官方显式输入，VS Code 的具体 WorkspaceConfiguration 适配由 frontend.plugin 承载。两种入口各自注入唯一来源，默认值由宿主原生声明，凭据按远端执行边界读取。" <<ToolkitConfigLogic>> as ToolkitConfigLogic
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==工具合同与 HTTP 接入\\n\\n实现 HTTP 工具合同；请求生命周期受 Host 控制。patch 匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host 准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。" <<ToolkitMcpLogic>> as ToolkitMcpLogic
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==Canvas 预览业务\\n\\n接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU 后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG 结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。" <<ToolkitPreview>> as ToolkitPreview

Pi_agent .[#8D8D8D,thickness=2].> ToolkitPi_pluginLogic : <color:#8D8D8D>session_start：ctx.cwd 与 flags
ToolkitPi_pluginLogic .[#8D8D8D,thickness=2].> ToolkitConfigLogic : <color:#8D8D8D>读取显式配置
ToolkitPi_pluginLogic .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>建立 memory Host
ToolkitPi_pluginLogic .[#8D8D8D,thickness=2].> ToolkitMcpLogic : <color:#8D8D8D>启动回环 HTTP，取得 endpoint
ToolkitPi_pluginLogic .[#8D8D8D,thickness=2].> Pi_agent : <color:#8D8D8D>registerMcpServer：登记本会话 HTTP endpoint；连接与同名覆盖由 Pi 管理
Pi_agent .[#8D8D8D,thickness=2].> ToolkitMcpLogic : <color:#8D8D8D>具名工具请求与取消信号
ToolkitMcpLogic .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>受控读取或预览请求
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>取得 HTML/XML 具名视图
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>视图与完整资源到 PNG
ToolkitMcpLogic .[#8D8D8D,thickness=2].> Pi_agent : <color:#8D8D8D>文本、PNG、结构化结果或实际错误
@enduml
`;case`pi_session_shutdown`:return`@startuml
title "06d · Pi 关闭、替换与 reload"
left to right direction

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

skinparam rectangle<<Pi_agent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPi_pluginLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitMcpLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Pi 官方运行时\\n\\n外部 Pi v1.0.0，官方提交 a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP 客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。" <<Pi_agent>> as Pi_agent
rectangle "==扩展生命周期与接入\\n\\n扩展工厂只注册 flags 和事件；session_start 从 ctx.cwd 建立专属 memory Host 和 HTTP 服务，再向 Pi 登记 MCP endpoint；连接由 Pi 管理。session_shutdown 先注销 MCP 登记，再关闭 HTTP，最后关闭 Host。new/resume/fork/reload 使用同一开始结束合同，不从会话历史重建工程状态。" <<ToolkitPi_pluginLogic>> as ToolkitPi_pluginLogic
rectangle "==工具合同与 HTTP 接入\\n\\n实现 HTTP 工具合同；请求生命周期受 Host 控制。patch 匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host 准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。" <<ToolkitMcpLogic>> as ToolkitMcpLogic
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic

Pi_agent .[#8D8D8D,thickness=2].> ToolkitPi_pluginLogic : <color:#8D8D8D>session_shutdown
ToolkitPi_pluginLogic .[#8D8D8D,thickness=2].> Pi_agent : <color:#8D8D8D>unregisterMcpServer：结束连接与调用
ToolkitPi_pluginLogic .[#8D8D8D,thickness=2].> ToolkitMcpLogic : <color:#8D8D8D>关闭回环 HTTP
ToolkitPi_pluginLogic .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>关闭 Scope，取消调用并释放候选
@enduml
`;case`pi_context`:return`@startuml
title "06 · Pi 系统上下文"
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

skinparam rectangle<<Pi_agent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Toolkit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<DocumentationManual>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Pi 官方运行时\\n\\n外部 Pi v1.0.0，官方提交 a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP 客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。" <<Pi_agent>> as Pi_agent
rectangle "==Toolkit TypeScript 产品\\n\\n拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。" <<Toolkit>> as Toolkit
rectangle "产品规范与参考" <<Documentation>> as Documentation {
  skinparam RectangleBorderColor<<Documentation>> #3b82f6
  skinparam RectangleFontColor<<Documentation>> #3b82f6
  skinparam RectangleBorderStyle<<Documentation>> dashed

  rectangle "==MechToolkit 发布与开发指南\\n\\n技能与对外指南作为普通文件随本仓库提交维护；不作为 tools 自举输入。可选本地 reference 资料独立于仓库结构。" <<DocumentationManual>> as DocumentationManual
}

Pi_agent .[#8D8D8D,thickness=2].> Toolkit : <color:#8D8D8D>官方扩展加载、会话事件、MCP 连接与结果交付
Toolkit .[#8D8D8D,thickness=2].> DocumentationManual : <color:#8D8D8D>同树版本的 MechToolkit Skill
@enduml
`;case`pi_integration`:return`@startuml
title "06a · Pi 容器与生命周期"
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

skinparam rectangle<<ToolkitConfigLogicPi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPi_pluginLogicRegistration>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitMcpLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPi_pluginLogicLifecycle>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPi_pluginLogicContext>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitInvocations>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Pi 官方扩展适配" <<ToolkitPi_plugin>> as ToolkitPi_plugin {
  skinparam RectangleBorderColor<<ToolkitPi_plugin>> #3b82f6
  skinparam RectangleFontColor<<ToolkitPi_plugin>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitPi_plugin>> dashed

  rectangle "扩展生命周期与接入" <<ToolkitPi_pluginLogic>> as ToolkitPi_pluginLogic {
    skinparam RectangleBorderColor<<ToolkitPi_pluginLogic>> #3b82f6
    skinparam RectangleFontColor<<ToolkitPi_pluginLogic>> #3b82f6
    skinparam RectangleBorderStyle<<ToolkitPi_pluginLogic>> dashed

    rectangle "==扩展工厂与 flags\\n\\n默认导出扩展工厂调用 PiExtension.register；通过 registerFlag/getFlag 读取必填 toolkit-mcp-port（整数 1..65535）和显式 toolkit-assets-config 文件输入。资产配置缺失以 Option 表达未启用；不补另一份默认值。工厂不打开 socket、监听或工程。" <<ToolkitPi_pluginLogicRegistration>> as ToolkitPi_pluginLogicRegistration
    rectangle "==会话拥有的工作区资源\\n\\n输入 session_start 的新 ctx.cwd、只读配置、注入 logger 与官方 ExtensionAPI；open 按 Host→HTTP→MCP 注册建立资源，session_shutdown 按注销 MCP→关闭 HTTP→关闭 Host 释放，启动失败逆序释放已取得资源。可取消的前置切换和分叉事件不关闭当前资源；实际替换及 reload 由官方关闭和启动事件衔接。官方注册返回 void，登记不冒充连接成功；会话关闭取消工作区调用并释放任务候选。" <<ToolkitPi_pluginLogicLifecycle>> as ToolkitPi_pluginLogicLifecycle
    rectangle "==Skills 与结果上下文\\n\\nresources_discover 提供同树版本的 MechToolkit Skill；tool_call/tool_result 只关联官方调用标识、结果和取消，不维护工具 schema 或第二任务状态。会话记录仅保存交付内容与任务标识，跨会话标识不能复活已关闭 Host 的任务。" <<ToolkitPi_pluginLogicContext>> as ToolkitPi_pluginLogicContext
  }
}
rectangle "==Pi 只读参数归一化\\n\\nPiConfigSource 从扩展传入的 flags 与显式配置输入产生 ToolkitConfig；当前 read 失败。具体资产配置与凭据来源在入口确定，不读取 VS Code、不消费环境变量，不创建或同步配置。" <<ToolkitConfigLogicPi>> as ToolkitConfigLogicPi
rectangle "MCP 协议接入" <<ToolkitMcp>> as ToolkitMcp {
  skinparam RectangleBorderColor<<ToolkitMcp>> #3b82f6
  skinparam RectangleFontColor<<ToolkitMcp>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitMcp>> dashed

  rectangle "==工具合同与 HTTP 接入\\n\\n实现 HTTP 工具合同；请求生命周期受 Host 控制。patch 匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host 准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。" <<ToolkitMcpLogic>> as ToolkitMcpLogic
}
rectangle "工作区 Host" <<ToolkitHost>> as ToolkitHost {
  skinparam RectangleBorderColor<<ToolkitHost>> #3b82f6
  skinparam RectangleFontColor<<ToolkitHost>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitHost>> dashed

  rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
}
rectangle "==调用记录与取消\\n\\nHost 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope 的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生 Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。" <<ToolkitInvocations>> as ToolkitInvocations

ToolkitPi_pluginLogicRegistration .[#8D8D8D,thickness=2].> ToolkitPi_pluginLogicLifecycle : <color:#8D8D8D>声明会话唯一工作区资源
ToolkitPi_pluginLogicRegistration .[#8D8D8D,thickness=2].> ToolkitPi_pluginLogicContext : <color:#8D8D8D>绑定官方上下文输入
ToolkitPi_pluginLogicLifecycle .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>绑定唯一 Host 生命周期合同
ToolkitMcpLogic .[#8D8D8D,thickness=2].> ToolkitHostLogic
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitInvocations : <color:#8D8D8D>每个入口统一登记结果与取消
ToolkitPi_pluginLogic .[#8D8D8D,thickness=2].> ToolkitMcpLogic : <color:#8D8D8D>启动回环 HTTP，交由 Pi 官方 MCP 客户端消费
@enduml
`;case`pi_components`:return`@startuml
title "06b · Pi 扩展组件与代码端口"
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

skinparam rectangle<<ToolkitPi_pluginLogicRegistration>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPi_pluginLogicLifecycle>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPi_pluginLogicContext>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==扩展工厂与 flags\\n\\n默认导出扩展工厂调用 PiExtension.register；通过 registerFlag/getFlag 读取必填 toolkit-mcp-port（整数 1..65535）和显式 toolkit-assets-config 文件输入。资产配置缺失以 Option 表达未启用；不补另一份默认值。工厂不打开 socket、监听或工程。" <<ToolkitPi_pluginLogicRegistration>> as ToolkitPi_pluginLogicRegistration
rectangle "==会话拥有的工作区资源\\n\\n输入 session_start 的新 ctx.cwd、只读配置、注入 logger 与官方 ExtensionAPI；open 按 Host→HTTP→MCP 注册建立资源，session_shutdown 按注销 MCP→关闭 HTTP→关闭 Host 释放，启动失败逆序释放已取得资源。可取消的前置切换和分叉事件不关闭当前资源；实际替换及 reload 由官方关闭和启动事件衔接。官方注册返回 void，登记不冒充连接成功；会话关闭取消工作区调用并释放任务候选。" <<ToolkitPi_pluginLogicLifecycle>> as ToolkitPi_pluginLogicLifecycle
rectangle "==Skills 与结果上下文\\n\\nresources_discover 提供同树版本的 MechToolkit Skill；tool_call/tool_result 只关联官方调用标识、结果和取消，不维护工具 schema 或第二任务状态。会话记录仅保存交付内容与任务标识，跨会话标识不能复活已关闭 Host 的任务。" <<ToolkitPi_pluginLogicContext>> as ToolkitPi_pluginLogicContext

ToolkitPi_pluginLogicRegistration .[#8D8D8D,thickness=2].> ToolkitPi_pluginLogicLifecycle : <color:#8D8D8D>声明会话唯一工作区资源
ToolkitPi_pluginLogicRegistration .[#8D8D8D,thickness=2].> ToolkitPi_pluginLogicContext : <color:#8D8D8D>绑定官方上下文输入
@enduml
`;case`change_plan`:return`@startuml
title "04a · 变更计划纯计算（设计）"
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

skinparam rectangle<<PureChange_plan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptContextDevice_context>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PureCanvasLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAnalysis>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptAstLocal_ast>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitProject_modelLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==变更计划纯计算\\n\\n视图编辑、重命名、脚本与 Canvas 导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing 调用 Entities 物化内存候选，Entities 从候选及未改变依赖准备语义输入，Editing 调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities 拥有实际基准复核与持久化。计划不读取工程或持有 Scope、缓存、候选状态；资产生成后置。" <<PureChange_plan>> as PureChange_plan
rectangle "==全局变量、零件元数据与零件上下文\\n\\n承载调用方提供的变量、元数据和脚本关联；不现场查询工程。" <<ToolkitScriptContextDevice_context>> as ToolkitScriptContextDevice_context
rectangle "==四向格式转换\\n\\n以 Canvas 节点为中心的纯计算。Base64 是原版旧数据兼容格式。" <<PureCanvasLogic>> as PureCanvasLogic
rectangle "==纯符号表与调用图\\n\\n基于实体快照、第一层 LocalAst 和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层 Context 或转换依据" <<ToolkitAnalysis>> as ToolkitAnalysis
rectangle "==局部 AST\\n\\n承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。" <<ToolkitScriptAstLocal_ast>> as ToolkitScriptAstLocal_ast
rectangle "==工程设置、路径、GUID 与权威逻辑实体\\n\\n解析工程设置、路径、GUID 与逻辑实体合同；输入由调用方提供，不读取工程。" <<ToolkitProject_modelLogic>> as ToolkitProject_modelLogic

PureChange_plan .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic : <color:#8D8D8D>复用实体快照与统一操作合同
ToolkitScriptAstLocal_ast .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitScriptContextDevice_context .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitScriptContextDevice_context .[#8D8D8D,thickness=2].> ToolkitScriptAstLocal_ast
PureChange_plan .[#8D8D8D,thickness=2].> ToolkitAnalysis : <color:#8D8D8D>只读符号表与调用图
ToolkitAnalysis .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitAnalysis .[#8D8D8D,thickness=2].> ToolkitScriptAstLocal_ast
@enduml
`;case`frontend_canvas_display`:return`@startuml
title "02m · 前端 Canvas 与主干共享预览（设计）"
left to right direction

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

skinparam rectangle<<FrontendPlugin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Renderer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==VSCode 宿主与 Effect 组合根\\n\\n绑定原生配置、webview 与同一 Host 生命周期；组件经具名入口获取和关闭，调用方以 try/finally 持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas 预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示 PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。" <<FrontendPlugin>> as FrontendPlugin
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==Canvas 预览业务\\n\\n接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU 后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG 结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。" <<ToolkitPreview>> as ToolkitPreview
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==Canvas CPU 渲染引擎\\n\\n结构化 CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经 CanvasKit/Skia CPU surface 输出 PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。" <<Renderer>> as Renderer

FrontendPlugin .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>文档定位源身份；同一 Host.openPreview，面板持有 take/close 资源
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>读取具名 HTML/XML 与完整来源基准
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>同一 viewport、字体、显式时间与唯一 CPU 后端
ToolkitPreview .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>读取本次实际引用资源及 revision
ToolkitPreview .[#8D8D8D,thickness=2].> Renderer : <color:#8D8D8D>共用 CPU 渲染，交付 PNG 与最终基准
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>工程变化的同次影响驱动已有展示；前端只消费产物
@enduml
`;case`initial_read`:return`@startuml
title "02i · 首次读取与格式交付"
left to right direction

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
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitSemantic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionTs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionHtml>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==语义装配（设计）\\n\\n由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON 合同导入导出平台数据与文档，SemanticAssembly 消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context 和转换依据。复用既有身份、Context 及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行 IO、不重复分析或持有注册表缓存。" <<ToolkitSemantic>> as ToolkitSemantic
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==零件与 TS 视图双向转换\\n\\n内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context 和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope 仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放" <<ToolkitConversionTs>> as ToolkitConversionTs
rectangle "==独立 Canvas 与 HTML 视图双向转换\\n\\n工作区 Layer 取得共享 CanvasConversion，无状态组合独立 Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML 视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views 唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由 Preview/Renderer 独立交付。" <<ToolkitConversionHtml>> as ToolkitConversionHtml
rectangle "==Canvas 预览业务\\n\\n接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU 后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG 结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。" <<ToolkitPreview>> as ToolkitPreview

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>建立监听并等待 ready；期间实际变化保持登记
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>首次完整装配与确定读取基准；后续批次复用同一实体服务按变化目录重读
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitSemantic : <color:#8D8D8D>按快照装配完整 Context 与转换依据
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>按模式交付具名视图
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>零件到 TS 视图
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionHtml : <color:#8D8D8D>Canvas 到 HTML/XML 视图
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>files：枚举现存派生路径；memory 跳过
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>files：按完整源声明计算发布和删除；解析失败保留未确定范围，路径冲突交付诊断
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>files Canvas：以固定视口、字体和时间渲染同次视图
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>files Canvas：交回同次 PNG 与实际依赖，装配展示壳
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>files：执行派生发布和删除；期间监听变化仍由 Host 批次处理
@enduml
`;case`diagnostics_read`:return`@startuml
title "02j · 主动诊断"
left to right direction

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
skinparam rectangle<<ToolkitDiagnostics>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAnalysisLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitLint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==诊断业务\\n\\n按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架" <<ToolkitDiagnostics>> as ToolkitDiagnostics
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==纯分析计算\\n\\n消费实体快照、第一层 LocalAst 及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的 SDK 文档准备，不读取文件、不持有状态" <<ToolkitAnalysisLogic>> as ToolkitAnalysisLogic
rectangle "==脚本静态检查纯计算\\n\\n消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整 Context，CallGraphLint 每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。" <<ToolkitLint>> as ToolkitLint

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitDiagnostics : <color:#8D8D8D>inspect：明确基准与请求
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>主动读取确定快照
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitAnalysisLogic : <color:#8D8D8D>复用同次实体读取已计算的符号与调用关系
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitLint : <color:#8D8D8D>按绑定执行 ScriptLint，再对同一完整图执行一次 CallGraphLint；交付具名诊断
@enduml
`;case`preview_read`:return`@startuml
title "02k · 具名视图到进程内 PNG"
left to right direction

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
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Renderer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==Canvas 预览业务\\n\\n接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU 后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG 结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。" <<ToolkitPreview>> as ToolkitPreview
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==Canvas CPU 渲染引擎\\n\\n结构化 CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经 CanvasKit/Skia CPU surface 输出 PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。" <<Renderer>> as Renderer

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>读取具名 HTML/XML 视图
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>交付结构化 Canvas 与明确渲染输入
ToolkitPreview .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>按实际基准读取资源
ToolkitPreview .[#8D8D8D,thickness=2].> Renderer : <color:#8D8D8D>进程内 CPU 渲染并返回 PNG 与诊断
@enduml
`;case`source_refresh`:return`@startuml
title "02f · 文件变化的单侧主动驱动"
left to right direction

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
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionTs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionHtml>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==零件与 TS 视图双向转换\\n\\n内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context 和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope 仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放" <<ToolkitConversionTs>> as ToolkitConversionTs
rectangle "==独立 Canvas 与 HTML 视图双向转换\\n\\n工作区 Layer 取得共享 CanvasConversion，无状态组合独立 Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML 视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views 唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由 Preview/Renderer 独立交付。" <<ToolkitConversionHtml>> as ToolkitConversionHtml
rectangle "==Canvas 预览业务\\n\\n接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU 后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG 结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。" <<ToolkitPreview>> as ToolkitPreview

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>take：取得精确变化路径
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>批次刷新：单次许可内分类、重读并取得同次完整语义基准，交付派生路径及更新删除标识
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>refresh：交付实际变化、基准和展示依赖，取得受影响视图及展示
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>读取格式实体与实际资源
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>更新或删除 TS 派生结果
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionHtml : <color:#8D8D8D>更新或删除 HTML 派生结果
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>files Canvas：以固定视口、字体和时间渲染同次视图，取得 PNG 与实际依赖
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>files Canvas：交回 PNG 与依赖，装配 HTML 展示壳
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>files：发布或删除派生内容；TS 正文与索引同批交付
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>按实际影响刷新已打开的展示；memory 仅按展示请求生成视图
@enduml
`;case`commit_refresh`:return`@startuml
title "02g · 候选提交与实际重读"
left to right direction

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
skinparam rectangle<<ToolkitEditing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==编辑业务\\n\\n读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change Plan 形成统一 EntityChange/Schematics 候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用 Views。TODO：编辑与重构编排。" <<ToolkitEditing>> as ToolkitEditing
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>提交明确候选与原读取基准
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>commit：核对基准并提交
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>实际 IO；成功或失败均重读磁盘事实
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>交付同次实际重读结果及写入或重读错误
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitHostLogic : <color:#8D8D8D>交付实际变化与错误；重读失败时不生成变化集合
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>重读成功时按实际变化刷新，包括写入失败或请求中断后的收尾
@enduml
`;case`refactor_prepare`:return`@startuml
title "02l · 快速重构意图到统一候选（设计）"
left to right direction

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
skinparam rectangle<<ToolkitEditing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PureChange_plan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAnalysisLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==编辑业务\\n\\n读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change Plan 形成统一 EntityChange/Schematics 候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用 Views。TODO：编辑与重构编排。" <<ToolkitEditing>> as ToolkitEditing
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==变更计划纯计算\\n\\n视图编辑、重命名、脚本与 Canvas 导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing 调用 Entities 物化内存候选，Entities 从候选及未改变依赖准备语义输入，Editing 调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities 拥有实际基准复核与持久化。计划不读取工程或持有 Scope、缓存、候选状态；资产生成后置。" <<PureChange_plan>> as PureChange_plan
rectangle "==纯分析计算\\n\\n消费实体快照、第一层 LocalAst 及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的 SDK 文档准备，不读取文件、不持有状态" <<ToolkitAnalysisLogic>> as ToolkitAnalysisLogic

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>refactor：目标与原读取基准
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>读取目标、关联实体与完整语义基准
ToolkitEditing .[#8D8D8D,thickness=2].> PureChange_plan : <color:#8D8D8D>同次快照、分析与 RefactorChangePlanRequest
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>物化统一 EntityChange，从候选及未改变依赖准备语义输入，零写入
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitAnalysisLogic : <color:#8D8D8D>分析候选语义并校验受影响绑定，提交复用 commit
@enduml
`;case`workspace_close`:return`@startuml
title "02h · 工作区关闭与取消"
left to right direction

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
skinparam rectangle<<ToolkitInvocations>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
rectangle "==调用记录与取消\\n\\nHost 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope 的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生 Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。" <<ToolkitInvocations>> as ToolkitInvocations
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitInvocations : <color:#8D8D8D>结束调用与取消等待
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>释放派生关联与转换资源
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>释放文件派生快照
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>关闭唯一监听与 IO Scope
@enduml
`;case`workspace_lifecycle`:return`@startuml
title "02b · 工作区生命周期与所有权"
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

skinparam rectangle<<ToolkitHostLogicLifecycle>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntitiesAssembly>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitInvocations>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogicRefresh>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogicComposition>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntitiesRefresh>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntitiesTransaction>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_serviceRefresh>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntitiesState>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "工作区 Host" <<ToolkitHost>> as ToolkitHost {
  skinparam RectangleBorderColor<<ToolkitHost>> #3b82f6
  skinparam RectangleFontColor<<ToolkitHost>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitHost>> dashed

  rectangle "Host 组合根与受控入口" <<ToolkitHostLogic>> as ToolkitHostLogic {
    skinparam RectangleBorderColor<<ToolkitHostLogic>> #3b82f6
    skinparam RectangleFontColor<<ToolkitHostLogic>> #3b82f6
    skinparam RectangleBorderStyle<<ToolkitHostLogic>> dashed

    rectangle "==唯一工作区生命周期\\n\\nHost.open 建立工作区 Scope 和唯一配置输入；Host.close 取消调用并释放实体、监听和转换缓存。" <<ToolkitHostLogicLifecycle>> as ToolkitHostLogicLifecycle
    rectangle "==唯一文件变化主动调度\\n\\n在唯一工作区 Scope 消费监听批次，主动调用实体分类与源重读，再把实际结果交给 Views；按 Views 返回的影响调用具名 Preview 请求刷新已打开展示。源与派生分类归 Entities，影响计算、files 发布及 memory 按需交付归 Views，绘制归 Preview/Renderer。Host 在同一工作区串行编排监听批次、编辑提交、资产确认及业务读取触发的实体重建与派生交付，防止较旧结果覆盖较新结果；展示登记与首次内容读取也在此边界衔接，避免漏掉源变化。已处于该边界的调用不重复获取，实体许可释放后 Host 消费同次重建变化并调用 Views。提交由实体实际重读并交付变化结果，Host 使用该结果刷新，不再次重读消耗变化。请求中断后的收尾仍在同一编排边界交付可用的实际变化，保留中断与收尾错误；Host 关闭时释放资源，后续打开重新读取工程。生命周期节点负责启动与关闭本循环。" <<ToolkitHostLogicRefresh>> as ToolkitHostLogicRefresh
    rectangle "==服务组合根\\n\\n装配唯一 files 与 watcher，等待监听 ready 后创建 entities，再装配 conversion、views 与业务；所有业务入口通过同一 Host。组合根拥有服务生命周期，不执行转换或编辑算法。" <<ToolkitHostLogicComposition>> as ToolkitHostLogicComposition
  }
}
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles
rectangle "第二层：工程实体" <<ToolkitEntities>> as ToolkitEntities {
  skinparam RectangleBorderColor<<ToolkitEntities>> #3b82f6
  skinparam RectangleFontColor<<ToolkitEntities>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitEntities>> dashed

  rectangle "==逻辑来源与单次归属装配\\n\\nLogicalEntitySources 按格式声明读取来源；EntityAssembly 私有拥有同次实体、诊断和归属集合，通过实体目录声明登记父级并生成最终快照，查询仅交付只读集合，不跨快照保留状态。" <<ToolkitEntitiesAssembly>> as ToolkitEntitiesAssembly
  rectangle "==显式重读与基准交付\\n\\n接受 Host 传入的精确路径批次，在与提交共享的单次串行许可内分类源与派生路径、重读源目录并取得同次语义基准，一并交付派生路径及实际更新删除标识；派生目录事件保留目录范围供 Views 计算受影响产物。重读 IO 失败后由后续源事件或业务读取触发共享的完整重建，以最后成功发布的逻辑快照与重建结果计算实际变化并交 Host 刷新；失败期间该快照只供比较，业务读取交付实际错误。监听失败仍结束消费。持有许可时不嵌套调用再次获取同一许可的公开入口。派生发布由实体父容器承载，Views 由 Host 主动驱动。" <<ToolkitEntitiesRefresh>> as ToolkitEntitiesRefresh
  rectangle "==提交与实际重读\\n\\n接受 Editing 的唯一 EntityChange 候选；在实体串行边界核对文件、目录和固定输入的完整读取基准，经 Schematics 提交实际文件，再重读实际结果更新文件派生快照并交付更新删除标识。写入中途失败仍重读实际文件，保留写入与重读的错误事实；成功交付实际结果供 Host 刷新。" <<ToolkitEntitiesTransaction>> as ToolkitEntitiesTransaction
  rectangle "==文件派生实体快照\\n\\n工程文件是唯一权威；MST 持有文件派生快照和不可变逻辑快照，提供快照替换、读取及 GUID 身份查询。重读、语义装配、完整基准读取与派生文件发布由实体服务编排，不进入状态容器。" <<ToolkitEntitiesState>> as ToolkitEntitiesState
}
rectangle "==调用记录与取消\\n\\nHost 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope 的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生 Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。" <<ToolkitInvocations>> as ToolkitInvocations
rectangle "第三层：视图关联与交付" <<ToolkitView_service>> as ToolkitView_service {
  skinparam RectangleBorderColor<<ToolkitView_service>> #3b82f6
  skinparam RectangleFontColor<<ToolkitView_service>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitView_service>> dashed

  rectangle "==唯一派生刷新\\n\\nHost 提供完整实体基准、源更新删除、已登记派生产物的实际变化及各展示登记的实际依赖；Views 根据唯一源到视图关联计算影响并调用共享转换，按展示登记身份交付受影响和已删除结果。files 的 Canvas HTML 发布前交付具名视图给 Host，Host 以固定 1080×2160、时间 0 和组合根字体及后端调用 Preview，将同次 PNG 交回 Views 嵌入展示壳，再经实体 publishView 发布或纠偏；刷新合同须支持该往返。源及实际资源变化均重新交付，派生文件自身写入以同内容零写入收敛。memory 模式只失效关联，请求时交付视图。引用图片与 Canvas 变化均返回实际依赖影响供 Host 刷新展示；不创建第二监听、内容缓存或预览调度。当前分类、影响计算和交付保持 TODO。" <<ToolkitView_serviceRefresh>> as ToolkitView_serviceRefresh
}

ToolkitHostLogicLifecycle .[#8D8D8D,thickness=2].> ToolkitHostLogicComposition : <color:#8D8D8D>建立与释放同一工作区服务
ToolkitHostLogicLifecycle .[#8D8D8D,thickness=2].> ToolkitHostLogicRefresh : <color:#8D8D8D>启动工作区 Scope 内的单一监听消费
ToolkitHostLogicRefresh .[#8D8D8D,thickness=2].> ToolkitHostLogicComposition : <color:#8D8D8D>读取同一工作区共享实例
ToolkitHostLogicRefresh .[#8D8D8D,thickness=2].> ToolkitEntitiesRefresh : <color:#8D8D8D>按实际目录批次重读文件
ToolkitEntitiesRefresh .[#8D8D8D,thickness=2].> ToolkitEntitiesState : <color:#8D8D8D>比较实际重读前后的逻辑实体事实
ToolkitEntitiesTransaction .[#8D8D8D,thickness=2].> ToolkitEntitiesState : <color:#8D8D8D>提交收尾重读实际文件并更新快照或错误结果
ToolkitHostLogicRefresh .[#8D8D8D,thickness=2].> ToolkitView_serviceRefresh : <color:#8D8D8D>刷新端口复用实际视图及预览影响结果，执行保持 TODO
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>Host 装配并单一消费文件变化；工程业务 IO 归实体
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitInvocations : <color:#8D8D8D>每个入口统一登记结果与取消
@enduml
`;case`read_flow`:return`@startuml
title "02c · 读取、语义、转换与诊断"
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

skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitLanguage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitDiagnostics>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionTs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionHtml>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitLint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionCanvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitSemantic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAnalysisLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==语言查询业务\\n\\n输入工程相对文档标识、文本版本、完整基准与取消信号，按查询种类接收位置或文档范围；读取同次实体、分析和诊断，交付定义、引用、悬停、诊断、文档链接、符号及语义 token。文档来源与方法绑定分别确定；共享源码查询保留全部实际引用作用域，零件视图使用对应绑定。结果携带文档版本和实际依赖，源定位与生成视图坐标按真实映射交付；LSP 接入层只转换标准消息。实体层拥有工程状态，查询结果不产生第二状态树。" <<ToolkitLanguage>> as ToolkitLanguage
rectangle "仅缓存状态的转换服务" <<ToolkitConversion>> as ToolkitConversion {
  skinparam RectangleBorderColor<<ToolkitConversion>> #3b82f6
  skinparam RectangleFontColor<<ToolkitConversion>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitConversion>> dashed

  rectangle "==零件与 TS 视图双向转换\\n\\n内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context 和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope 仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放" <<ToolkitConversionTs>> as ToolkitConversionTs
  rectangle "==独立 Canvas 与 HTML 视图双向转换\\n\\n工作区 Layer 取得共享 CanvasConversion，无状态组合独立 Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML 视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views 唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由 Preview/Renderer 独立交付。" <<ToolkitConversionHtml>> as ToolkitConversionHtml
  rectangle "==Canvas 与 HTML 片段双向转换\\n\\nCanvas 实体、Base64 与 Hjson 和 HTML 片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区 Scope，按方向、输入和实际资源指纹失效" <<ToolkitConversionCanvas>> as ToolkitConversionCanvas
}
rectangle "==诊断业务\\n\\n按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架" <<ToolkitDiagnostics>> as ToolkitDiagnostics
rectangle "==脚本静态检查纯计算\\n\\n消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整 Context，CallGraphLint 每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。" <<ToolkitLint>> as ToolkitLint
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles
rectangle "==语义装配（设计）\\n\\n由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON 合同导入导出平台数据与文档，SemanticAssembly 消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context 和转换依据。复用既有身份、Context 及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行 IO、不重复分析或持有注册表缓存。" <<ToolkitSemantic>> as ToolkitSemantic
rectangle "纯符号表与调用图" <<ToolkitAnalysis>> as ToolkitAnalysis {
  skinparam RectangleBorderColor<<ToolkitAnalysis>> #3b82f6
  skinparam RectangleFontColor<<ToolkitAnalysis>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitAnalysis>> dashed

  rectangle "==纯分析计算\\n\\n消费实体快照、第一层 LocalAst 及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的 SDK 文档准备，不读取文件、不持有状态" <<ToolkitAnalysisLogic>> as ToolkitAnalysisLogic
}

ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>实体层唯一业务 IO；读取与提交分别授权到文件
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitSemantic : <color:#8D8D8D>快照语义装配
ToolkitSemantic .[#8D8D8D,thickness=2].> ToolkitAnalysisLogic : <color:#8D8D8D>符号表与调用图
ToolkitConversionCanvas .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>实体输入与资源依赖
ToolkitConversionTs .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付
ToolkitConversionHtml .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>独立 Canvas 与视图实体
ToolkitConversionTs .[#8D8D8D,thickness=2].> ToolkitConversionCanvas : <color:#8D8D8D>内部 Canvas 双向转换
ToolkitConversionHtml .[#8D8D8D,thickness=2].> ToolkitConversionCanvas : <color:#8D8D8D>共享片段服务的工作区装配
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>视图主动读取实体；派生结果经实体入口交付
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>视图唯一驱动转换与缓存释放
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionHtml
ToolkitLint .[#8D8D8D,thickness=2].> ToolkitAnalysisLogic : <color:#8D8D8D>分析结果
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>诊断主动读取实体快照
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitAnalysisLogic
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitLint : <color:#8D8D8D>调用纯检查，诊断状态归 Diagnostics
ToolkitLanguage .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>共享实体服务与完整读取基准
ToolkitLanguage .[#8D8D8D,thickness=2].> ToolkitDiagnostics : <color:#8D8D8D>共享诊断服务和唯一结果类型
@enduml
`;case`write_flow`:return`@startuml
title "02d · 编辑、候选、提交与刷新"
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

skinparam rectangle<<ToolkitEditing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PureChange_plan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntitiesAssembly>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntitiesRefresh>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntitiesTransaction>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionTs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionHtml>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAnalysisLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntitiesState>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_serviceRefresh>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==编辑业务\\n\\n读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change Plan 形成统一 EntityChange/Schematics 候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用 Views。TODO：编辑与重构编排。" <<ToolkitEditing>> as ToolkitEditing
rectangle "第二层：工程实体" <<ToolkitEntities>> as ToolkitEntities {
  skinparam RectangleBorderColor<<ToolkitEntities>> #3b82f6
  skinparam RectangleFontColor<<ToolkitEntities>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitEntities>> dashed

  rectangle "==逻辑来源与单次归属装配\\n\\nLogicalEntitySources 按格式声明读取来源；EntityAssembly 私有拥有同次实体、诊断和归属集合，通过实体目录声明登记父级并生成最终快照，查询仅交付只读集合，不跨快照保留状态。" <<ToolkitEntitiesAssembly>> as ToolkitEntitiesAssembly
  rectangle "==显式重读与基准交付\\n\\n接受 Host 传入的精确路径批次，在与提交共享的单次串行许可内分类源与派生路径、重读源目录并取得同次语义基准，一并交付派生路径及实际更新删除标识；派生目录事件保留目录范围供 Views 计算受影响产物。重读 IO 失败后由后续源事件或业务读取触发共享的完整重建，以最后成功发布的逻辑快照与重建结果计算实际变化并交 Host 刷新；失败期间该快照只供比较，业务读取交付实际错误。监听失败仍结束消费。持有许可时不嵌套调用再次获取同一许可的公开入口。派生发布由实体父容器承载，Views 由 Host 主动驱动。" <<ToolkitEntitiesRefresh>> as ToolkitEntitiesRefresh
  rectangle "==提交与实际重读\\n\\n接受 Editing 的唯一 EntityChange 候选；在实体串行边界核对文件、目录和固定输入的完整读取基准，经 Schematics 提交实际文件，再重读实际结果更新文件派生快照并交付更新删除标识。写入中途失败仍重读实际文件，保留写入与重读的错误事实；成功交付实际结果供 Host 刷新。" <<ToolkitEntitiesTransaction>> as ToolkitEntitiesTransaction
  rectangle "==文件派生实体快照\\n\\n工程文件是唯一权威；MST 持有文件派生快照和不可变逻辑快照，提供快照替换、读取及 GUID 身份查询。重读、语义装配、完整基准读取与派生文件发布由实体服务编排，不进入状态容器。" <<ToolkitEntitiesState>> as ToolkitEntitiesState
}
rectangle "仅缓存状态的转换服务" <<ToolkitConversion>> as ToolkitConversion {
  skinparam RectangleBorderColor<<ToolkitConversion>> #3b82f6
  skinparam RectangleFontColor<<ToolkitConversion>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitConversion>> dashed

  rectangle "==零件与 TS 视图双向转换\\n\\n内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context 和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope 仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放" <<ToolkitConversionTs>> as ToolkitConversionTs
  rectangle "==独立 Canvas 与 HTML 视图双向转换\\n\\n工作区 Layer 取得共享 CanvasConversion，无状态组合独立 Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML 视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views 唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由 Preview/Renderer 独立交付。" <<ToolkitConversionHtml>> as ToolkitConversionHtml
}
rectangle "==变更计划纯计算\\n\\n视图编辑、重命名、脚本与 Canvas 导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing 调用 Entities 物化内存候选，Entities 从候选及未改变依赖准备语义输入，Editing 调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities 拥有实际基准复核与持久化。计划不读取工程或持有 Scope、缓存、候选状态；资产生成后置。" <<PureChange_plan>> as PureChange_plan
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles
rectangle "==纯分析计算\\n\\n消费实体快照、第一层 LocalAst 及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的 SDK 文档准备，不读取文件、不持有状态" <<ToolkitAnalysisLogic>> as ToolkitAnalysisLogic
rectangle "==唯一派生刷新\\n\\nHost 提供完整实体基准、源更新删除、已登记派生产物的实际变化及各展示登记的实际依赖；Views 根据唯一源到视图关联计算影响并调用共享转换，按展示登记身份交付受影响和已删除结果。files 的 Canvas HTML 发布前交付具名视图给 Host，Host 以固定 1080×2160、时间 0 和组合根字体及后端调用 Preview，将同次 PNG 交回 Views 嵌入展示壳，再经实体 publishView 发布或纠偏；刷新合同须支持该往返。源及实际资源变化均重新交付，派生文件自身写入以同内容零写入收敛。memory 模式只失效关联，请求时交付视图。引用图片与 Canvas 变化均返回实际依赖影响供 Host 刷新展示；不创建第二监听、内容缓存或预览调度。当前分类、影响计算和交付保持 TODO。" <<ToolkitView_serviceRefresh>> as ToolkitView_serviceRefresh

ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>视图反向转换
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitConversionHtml : <color:#8D8D8D>独立 Canvas 反向转换
ToolkitEditing .[#8D8D8D,thickness=2].> PureChange_plan : <color:#8D8D8D>统一变更计划与候选
PureChange_plan .[#8D8D8D,thickness=2].> ToolkitAnalysisLogic : <color:#8D8D8D>只读符号表与调用图
ToolkitEntitiesRefresh .[#8D8D8D,thickness=2].> ToolkitEntitiesState : <color:#8D8D8D>比较实际重读前后的逻辑实体事实
ToolkitEntitiesTransaction .[#8D8D8D,thickness=2].> ToolkitEntitiesState : <color:#8D8D8D>提交收尾重读实际文件并更新快照或错误结果
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>实体层唯一业务 IO；读取与提交分别授权到文件
@enduml
`;case`preview_flow`:return`@startuml
title "02e · 具名视图与资源到 PNG"
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

skinparam rectangle<<FrontendPlugin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHostLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Renderer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==VSCode 宿主与 Effect 组合根\\n\\n绑定原生配置、webview 与同一 Host 生命周期；组件经具名入口获取和关闭，调用方以 try/finally 持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas 预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示 PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。" <<FrontendPlugin>> as FrontendPlugin
rectangle "工作区 Host" <<ToolkitHost>> as ToolkitHost {
  skinparam RectangleBorderColor<<ToolkitHost>> #3b82f6
  skinparam RectangleFontColor<<ToolkitHost>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitHost>> dashed

  rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
}
rectangle "==Canvas 预览业务\\n\\n接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU 后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG 结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。" <<ToolkitPreview>> as ToolkitPreview
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==Canvas CPU 渲染引擎\\n\\n结构化 CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经 CanvasKit/Skia CPU surface 输出 PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。" <<Renderer>> as Renderer

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>Host 主动重读实体；WorkspaceServices 读取状态
ToolkitPreview .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>预览只读实体资源
ToolkitPreview .[#8D8D8D,thickness=2].> Renderer : <color:#8D8D8D>复用唯一渲染引擎
FrontendPlugin .[#8D8D8D,thickness=2].> ToolkitHostLogic
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
rectangle "三层纯转换设计" <<ToolkitScriptConversion>> as ToolkitScriptConversion {
  skinparam RectangleBorderColor<<ToolkitScriptConversion>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptConversion>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptConversion>> dashed

  rectangle "==BEScript 文本与局部 AST 转换\\n\\nIssue 45 的实现归属：唯一正文词法、控制结构、调用与反向序列化入口；依赖文本合同和局部 AST，不依赖 Host" <<ToolkitScriptConversionFirst>> as ToolkitScriptConversionFirst
}
rectangle "局部 AST 层" <<ToolkitScriptAst>> as ToolkitScriptAst {
  skinparam RectangleBorderColor<<ToolkitScriptAst>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptAst>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptAst>> dashed

  rectangle "==局部 AST\\n\\n承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。" <<ToolkitScriptAstLocal_ast>> as ToolkitScriptAstLocal_ast
}
rectangle "原版文本层" <<ToolkitScriptText>> as ToolkitScriptText {
  skinparam RectangleBorderColor<<ToolkitScriptText>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptText>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptText>> dashed

  rectangle "==.code 文件\\n\\n解析文件版本、头部与原始正文；正文语义交由第一层转换。" <<ToolkitScriptTextCode_file>> as ToolkitScriptTextCode_file
  rectangle "==类型与转义\\n\\n定义 BEScript 词汇类型与有限转义；不解析控制结构或读取工程。" <<ToolkitScriptTextVocabulary>> as ToolkitScriptTextVocabulary
}
rectangle "==BEScript 内部格式\\n\\n约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。" <<SpecificationsBescript>> as SpecificationsBescript

ToolkitScriptConversionFirst .[#8D8D8D,thickness=2].> ToolkitScriptTextVocabulary
ToolkitScriptConversionFirst .[#8D8D8D,thickness=2].> ToolkitScriptTextCode_file
ToolkitScriptTextCode_file .[#8D8D8D,thickness=2].> ToolkitScriptTextVocabulary
ToolkitScriptConversionFirst .[#8D8D8D,thickness=2].> ToolkitScriptAstLocal_ast
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
skinparam rectangle<<PureCanvasLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptContextDevice_context>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScriptAstLocal_ast>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitProject_modelLogic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsBescript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "三层纯转换设计" <<ToolkitScriptConversion>> as ToolkitScriptConversion {
  skinparam RectangleBorderColor<<ToolkitScriptConversion>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptConversion>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptConversion>> dashed

  rectangle "==Context 与官方 TS AST 业务转换\\n\\nIssue 46 的实现归属：DeviceTsConverter 组合零件外壳、全局变量与组，单向调用 MethodMapping 完成方法来源、签名、可见性及正文双向映射；变量、调用和 Canvas 各由所属映射负责。仅消费 Context 与显式语义输入，不读取工程或缓存；可接受第三层传入的同身份官方方法节点以避免重复生成，不持有缓存或失效规则" <<ToolkitScriptConversionSecond>> as ToolkitScriptConversionSecond
}
rectangle "==工程格式测试\\n\\n验证工程格式纯计算的合法、非法与保真行为；不修改源夹具。" <<ToolkitProject_modelTests>> as ToolkitProject_modelTests
rectangle "零件上下文层" <<ToolkitScriptContext>> as ToolkitScriptContext {
  skinparam RectangleBorderColor<<ToolkitScriptContext>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptContext>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptContext>> dashed

  rectangle "==全局变量、零件元数据与零件上下文\\n\\n承载调用方提供的变量、元数据和脚本关联；不现场查询工程。" <<ToolkitScriptContextDevice_context>> as ToolkitScriptContextDevice_context
}
rectangle "==四向格式转换\\n\\n以 Canvas 节点为中心的纯计算。Base64 是原版旧数据兼容格式。" <<PureCanvasLogic>> as PureCanvasLogic
rectangle "局部 AST 层" <<ToolkitScriptAst>> as ToolkitScriptAst {
  skinparam RectangleBorderColor<<ToolkitScriptAst>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScriptAst>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScriptAst>> dashed

  rectangle "==局部 AST\\n\\n承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。" <<ToolkitScriptAstLocal_ast>> as ToolkitScriptAstLocal_ast
}
rectangle "==工程设置、路径、GUID 与权威逻辑实体\\n\\n解析工程设置、路径、GUID 与逻辑实体合同；输入由调用方提供，不读取工程。" <<ToolkitProject_modelLogic>> as ToolkitProject_modelLogic
rectangle "==BEScript 内部格式\\n\\n约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。" <<SpecificationsBescript>> as SpecificationsBescript

ToolkitScriptConversionSecond .[#8D8D8D,thickness=2].> ToolkitScriptAstLocal_ast
ToolkitScriptConversionSecond .[#8D8D8D,thickness=2].> ToolkitScriptContextDevice_context
ToolkitScriptContextDevice_context .[#8D8D8D,thickness=2].> ToolkitScriptAstLocal_ast
ToolkitScriptConversionSecond .[#8D8D8D,thickness=2].> PureCanvasLogic
ToolkitScriptConversionSecond .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitScriptAstLocal_ast .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitScriptContextDevice_context .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitProject_modelTests .[#8D8D8D,thickness=2].> ToolkitProject_modelLogic
ToolkitScriptConversionSecond .[#8D8D8D,thickness=2].> SpecificationsBescript
ToolkitScriptAstLocal_ast .[#8D8D8D,thickness=2].> SpecificationsBescript
ToolkitScriptContextDevice_context .[#8D8D8D,thickness=2].> SpecificationsBescript
@enduml
`;case`bescript_third_layer`:return`@startuml
title "第三层：官方 TS 解析打印与 TS 转换服务"
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
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionTs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionCanvas>>{
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

  rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
}
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "仅缓存状态的转换服务" <<ToolkitConversion>> as ToolkitConversion {
  skinparam RectangleBorderColor<<ToolkitConversion>> #3b82f6
  skinparam RectangleFontColor<<ToolkitConversion>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitConversion>> dashed

  rectangle "==零件与 TS 视图双向转换\\n\\n内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context 和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope 仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放" <<ToolkitConversionTs>> as ToolkitConversionTs
  rectangle "==Canvas 与 HTML 片段双向转换\\n\\nCanvas 实体、Base64 与 Hjson 和 HTML 片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区 Scope，按方向、输入和实际资源指纹失效" <<ToolkitConversionCanvas>> as ToolkitConversionCanvas
}
rectangle "BEScript 纯计算包" <<ToolkitScript>> as ToolkitScript {
  skinparam RectangleBorderColor<<ToolkitScript>> #3b82f6
  skinparam RectangleFontColor<<ToolkitScript>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitScript>> dashed

  rectangle "==官方 TS 解析打印与局部装配\\n\\nIssue 47 的实现归属：官方 parser、factory、printer 和有独立差分依据的局部片段装配；结合第二层来源与方法绑定按最终文本交付 BeScript 与 TS 的逐行映射，当前仅有方法边界，逐行映射待接入。缓存状态由 TS 转换服务显式传入，无进程全局状态，无 BEScript 业务解释" <<ToolkitScriptConversionThird>> as ToolkitScriptConversionThird
}
rectangle "==BEScript 内部格式\\n\\n约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。" <<SpecificationsBescript>> as SpecificationsBescript

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>WorkspaceServices.ts 仅装配；缓存由视图驱动
ToolkitConversionTs .[#8D8D8D,thickness=2].> ToolkitScriptConversionThird : <color:#8D8D8D>官方 TS 解析打印合同
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitConversionCanvas : <color:#8D8D8D>WorkspaceServices.ts 仅装配共享转换
ToolkitConversionTs .[#8D8D8D,thickness=2].> ToolkitConversionCanvas : <color:#8D8D8D>内部 Canvas 双向转换
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>Host 主动驱动视图；WorkspaceServices 装配
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>视图唯一驱动转换与缓存释放
ToolkitScriptConversionThird .[#8D8D8D,thickness=2].> SpecificationsBescript
ToolkitConversionTs .[#8D8D8D,thickness=2].> SpecificationsBescript
@enduml
`;case`index`:return`@startuml
title "01 · 产品总览"
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

skinparam rectangle<<Frontend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Toolkit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Canvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Pure>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==单一前端扩展\\n\\n提供 VS Code 配置、侧栏与 Host 接入；领域状态保留在 Toolkit。" <<Frontend>> as Frontend
rectangle "==Toolkit TypeScript 产品\\n\\n拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。" <<Toolkit>> as Toolkit
rectangle "==Canvas 渲染产品\\n\\n组织 Canvas 渲染行为验证；正式渲染逻辑由 renderer 拥有。" <<Canvas>> as Canvas
rectangle "==业务纯计算\\n\\n无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。" <<Pure>> as Pure

Frontend .[#8D8D8D,thickness=2].> Toolkit : <color:#8D8D8D>[...]
Toolkit .[#8D8D8D,thickness=2].> Frontend : <color:#8D8D8D>通过原生配置适配验证当前值、边界与读取失败
Toolkit .[#8D8D8D,thickness=2].> Pure : <color:#8D8D8D>[...]
Pure .[#8D8D8D,thickness=2].> Toolkit : <color:#8D8D8D>[...]
Toolkit .[#8D8D8D,thickness=2].> Canvas : <color:#8D8D8D>[...]
Canvas .[#8D8D8D,thickness=2].> Pure : <color:#8D8D8D>由真实转换构造合法文档，以二进制前后比较验证输入保真
@enduml
`;case`runtime`:return`@startuml
title "02 · Toolkit Runtime"
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

skinparam rectangle<<ToolkitPi_plugin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitLint_tests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitLanguage_tests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitHost>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssets>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitLanguage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitInvocations>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConfiguration>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitMcp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_candidates>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEditing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitDiagnostics>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_processing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitLint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAsset_generation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversion>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConfig>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitSemantic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAnalysis>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitScript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitProject_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Pi 官方扩展适配\\n\\nPi 进程内加载扩展；会话开始创建 memory Host 与回环 HTTP MCP，使用官方 registerMcpServer 消费唯一 MCP 工具合同。会话结束注销连接并释放 Host；文本、HTML/XML、PNG 和错误由官方 MCP 客户端交付。" <<ToolkitPi_plugin>> as ToolkitPi_plugin
rectangle "==脚本静态检查合同测试\\n\\n使用真实解析、零件 Context 和调用分析验证纯检查空壳明确失败及输入保真；规则行为待正式实现验收。" <<ToolkitLint_tests>> as ToolkitLint_tests
rectangle "==语言查询合同测试\\n\\n真实实体与诊断 Layer 装配，验证四类查询空壳失败、请求保真及源工程零写入；正式查询行为待实现。" <<ToolkitLanguage_tests>> as ToolkitLanguage_tests
rectangle "==工作区 Host\\n\\n拥有单工作区服务生命周期、共享装配与受控入口；领域事实由实体服务提供。共享文件和 Canvas 测试资源由 test_support 单独承载，供各现役测试主动持有和释放。" <<ToolkitHost>> as ToolkitHost
rectangle "==资产任务与确认业务\\n\\n同一 Host Scope 拥有跨请求任务标识、pending→running→ready/failed/canceled 状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入 confirmed/discarded，写入成功或部分写入失败后重读失败进入 reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限 4；请求取消只结束等待，显式 cancel 结束本地任务与交付并报告远端执行是否已经停止，不把断开 HTTP 当作远端停止。UI 贴图按生成、校验、切片预览、评阅和明确确认编排，宿主只展示同一状态与结果；confirm 经 Editing.importAsset/commit 后返回实际重读的资源身份，候选形成前不写工程。" <<ToolkitAssets>> as ToolkitAssets
rectangle "==语言查询业务\\n\\n输入工程相对文档标识、文本版本、完整基准与取消信号，按查询种类接收位置或文档范围；读取同次实体、分析和诊断，交付定义、引用、悬停、诊断、文档链接、符号及语义 token。文档来源与方法绑定分别确定；共享源码查询保留全部实际引用作用域，零件视图使用对应绑定。结果携带文档版本和实际依赖，源定位与生成视图坐标按真实映射交付；LSP 接入层只转换标准消息。实体层拥有工程状态，查询结果不产生第二状态树。" <<ToolkitLanguage>> as ToolkitLanguage
rectangle "==调用记录与取消\\n\\nHost 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope 的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生 Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。" <<ToolkitInvocations>> as ToolkitInvocations
rectangle "==产品类型检查配置\\n\\n声明产品 TypeScript 检查范围并继承根选项；不提供运行时配置。" <<ToolkitConfiguration>> as ToolkitConfiguration
rectangle "==Canvas 预览业务\\n\\n接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU 后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG 结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。" <<ToolkitPreview>> as ToolkitPreview
rectangle "==MCP 协议接入\\n\\n提供协议工具与传输接入；领域操作经 Host，不直接访问工程文件。预览消费 Host 的 PNG，资产结果消费任务交付的已校验原图及实际 MIME，协议边界编码原生图像内容。" <<ToolkitMcp>> as ToolkitMcp
rectangle "==候选存储与释放\\n\\nHost Scope 独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次 read 交付新的字节流，Scope 关闭释放全部所属资源。IO 仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。" <<ToolkitAsset_candidates>> as ToolkitAsset_candidates
rectangle "==编辑业务\\n\\n读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change Plan 形成统一 EntityChange/Schematics 候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用 Views。TODO：编辑与重构编排。" <<ToolkitEditing>> as ToolkitEditing
rectangle "==诊断业务\\n\\n按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架" <<ToolkitDiagnostics>> as ToolkitDiagnostics
rectangle "==产物确定性校验与切片预览\\n\\n任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与 3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成 CanvasDocument，经唯一 CPU renderer 输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。" <<ToolkitAsset_processing>> as ToolkitAsset_processing
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==脚本静态检查纯计算\\n\\n消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整 Context，CallGraphLint 每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。" <<ToolkitLint>> as ToolkitLint
rectangle "==工作流绑定与远端生成执行\\n\\n消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为 RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。" <<ToolkitAsset_generation>> as ToolkitAsset_generation
rectangle "==仅缓存状态的转换服务\\n\\n组织共享转换缓存与完整语义输入；工程文件是唯一权威，实体层负责文件派生快照和写入。" <<ToolkitConversion>> as ToolkitConversion
rectangle "==配置来源抽象与实现\\n\\n定义只读配置来源合同；默认值由前端原生配置声明。" <<ToolkitConfig>> as ToolkitConfig
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles
rectangle "==语义装配（设计）\\n\\n由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON 合同导入导出平台数据与文档，SemanticAssembly 消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context 和转换依据。复用既有身份、Context 及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行 IO、不重复分析或持有注册表缓存。" <<ToolkitSemantic>> as ToolkitSemantic
rectangle "==纯符号表与调用图\\n\\n基于实体快照、第一层 LocalAst 和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层 Context 或转换依据" <<ToolkitAnalysis>> as ToolkitAnalysis
rectangle "==BEScript 纯计算包\\n\\n数据合同与三层纯转换设计分开登记；纯转换函数不读取工程或拥有跨请求缓存，TS 视图转换服务持有缓存状态并传入完整语义依据" <<ToolkitScript>> as ToolkitScript
rectangle "==工程格式纯计算包\\n\\n提供工程格式数据合同和纯计算；不持有 IO、Host 或实体运行状态。" <<ToolkitProject_model>> as ToolkitProject_model

ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>任务绑定原子生成与评阅，不转移调度所有权
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_processing : <color:#8D8D8D>产物校验与明确切片预览
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>任务关联候选标识、读取确认内容并释放
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>明确确认准备候选并提交，返回实际资源身份
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>[...]
ToolkitAsset_generation .[#8D8D8D,thickness=2].> ToolkitConfig : <color:#8D8D8D>[...]
ToolkitAsset_processing .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>只读原子执行交付的具名字节
ToolkitAsset_candidates .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>暂存具名产物字节
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitAsset_generation : <color:#8D8D8D>真实产物字节输入
ToolkitAsset_candidates .[#8D8D8D,thickness=2].> ToolkitAsset_processing : <color:#8D8D8D>保存同一产物的确定性校验结果
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitAsset_processing : <color:#8D8D8D>[...]
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitAsset_candidates : <color:#8D8D8D>[...]
ToolkitPi_plugin .[#8D8D8D,thickness=2].> ToolkitConfig : <color:#8D8D8D>官方显式参数进入统一只读配置
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitConfig : <color:#8D8D8D>生成空壳接收明确公开参数和独立凭据端口
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>编辑候选经唯一实体入口提交
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>只读取具名视图；提交后的派生刷新由Host驱动
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitConversion : <color:#8D8D8D>[...]
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令
ToolkitPi_plugin .[#8D8D8D,thickness=2].> ToolkitHost : <color:#8D8D8D>[...]
ToolkitPi_plugin .[#8D8D8D,thickness=2].> ToolkitMcp : <color:#8D8D8D>启动回环 HTTP，交由 Pi 官方 MCP 客户端消费
ToolkitLint .[#8D8D8D,thickness=2].> ToolkitScript : <color:#8D8D8D>[...]
ToolkitLint .[#8D8D8D,thickness=2].> ToolkitAnalysis : <color:#8D8D8D>分析结果
ToolkitLint_tests .[#8D8D8D,thickness=2].> ToolkitLint : <color:#8D8D8D>调用纯检查空壳
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitLint : <color:#8D8D8D>调用纯检查，诊断状态归 Diagnostics
ToolkitLint_tests .[#8D8D8D,thickness=2].> ToolkitProject_model : <color:#8D8D8D>提供真实逻辑实体输入
ToolkitLint_tests .[#8D8D8D,thickness=2].> ToolkitScript : <color:#8D8D8D>[...]
ToolkitLint_tests .[#8D8D8D,thickness=2].> ToolkitAnalysis : <color:#8D8D8D>构建同次方法绑定及调用图
ToolkitLanguage .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>共享实体服务与完整读取基准
ToolkitLanguage .[#8D8D8D,thickness=2].> ToolkitDiagnostics : <color:#8D8D8D>共享诊断服务和唯一结果类型
ToolkitLanguage_tests .[#8D8D8D,thickness=2].> ToolkitLanguage : <color:#8D8D8D>真实装配与四类请求执行
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitLanguage : <color:#8D8D8D>[...]
ToolkitLanguage_tests .[#8D8D8D,thickness=2].> ToolkitHost : <color:#8D8D8D>独占测试工程生命周期
ToolkitLanguage_tests .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>建立真实实体 Layer
ToolkitLanguage_tests .[#8D8D8D,thickness=2].> ToolkitProject_model : <color:#8D8D8D>读取实际文件修订
ToolkitLanguage_tests .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>建立真实文件边界
ToolkitLanguage_tests .[#8D8D8D,thickness=2].> ToolkitDiagnostics : <color:#8D8D8D>注入真实诊断 Layer
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitInvocations : <color:#8D8D8D>[...]
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>[...]
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>[...]
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitProject_model
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitScript : <color:#8D8D8D>独立序列化验证实体反向语义
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>[...]
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitSemantic : <color:#8D8D8D>实际调用验证语义空壳明确失败及输入保持原样
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitConversion : <color:#8D8D8D>[...]
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitDiagnostics : <color:#8D8D8D>WorkspaceServices.ts 装配诊断与受控业务入口
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>[...]
ToolkitHost .[#8D8D8D,thickness=2].> ToolkitMcp : <color:#8D8D8D>实际调用 patch 匹配空壳验证明确失败与顺序输入保真
ToolkitMcp .[#8D8D8D,thickness=2].> ToolkitHost
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitProject_model
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitScript : <color:#8D8D8D>零件实体携带显式转换依据
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>实体层唯一业务 IO；读取与提交分别授权到文件
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitSemantic : <color:#8D8D8D>快照语义装配
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>视图主动读取实体；派生结果经实体入口交付
ToolkitConversion .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>[...]
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>诊断主动读取实体快照
ToolkitPreview .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>预览只读实体资源
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversion : <color:#8D8D8D>视图唯一驱动转换与缓存释放
ToolkitScript .[#8D8D8D,thickness=2].> ToolkitProject_model
ToolkitFiles .[#8D8D8D,thickness=2].> ToolkitProject_model : <color:#8D8D8D>文件边界使用统一相对路径校验与文件事实合同
ToolkitSemantic .[#8D8D8D,thickness=2].> ToolkitProject_model : <color:#8D8D8D>工程逻辑快照合同
ToolkitConversion .[#8D8D8D,thickness=2].> ToolkitProject_model : <color:#8D8D8D>[...]
ToolkitAnalysis .[#8D8D8D,thickness=2].> ToolkitProject_model
ToolkitScript .[#8D8D8D,thickness=2].> ToolkitConversion
ToolkitSemantic .[#8D8D8D,thickness=2].> ToolkitScript : <color:#8D8D8D>[...]
ToolkitConversion .[#8D8D8D,thickness=2].> ToolkitScript : <color:#8D8D8D>[...]
ToolkitAnalysis .[#8D8D8D,thickness=2].> ToolkitScript
ToolkitSemantic .[#8D8D8D,thickness=2].> ToolkitAnalysis : <color:#8D8D8D>符号表与调用图
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitAnalysis
@enduml
`;case`workspace_services`:return`@startuml
title "02a · 工作区三层与业务服务"
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
skinparam rectangle<<ToolkitDiagnostics>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAssets>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEditing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitView_service>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PureChange_plan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionTs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionHtml>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitConversionCanvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitFiles>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitSemantic>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolkitAnalysis>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "工作区 Host" <<ToolkitHost>> as ToolkitHost {
  skinparam RectangleBorderColor<<ToolkitHost>> #3b82f6
  skinparam RectangleFontColor<<ToolkitHost>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitHost>> dashed

  rectangle "==Host 组合根与受控入口\\n\\n唯一 Effect ManagedRuntime；工作区服务通过原生 Layer 共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由 Host 主动分派，工程状态经实体层读取。" <<ToolkitHostLogic>> as ToolkitHostLogic
}
rectangle "==诊断业务\\n\\n按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架" <<ToolkitDiagnostics>> as ToolkitDiagnostics
rectangle "==Canvas 预览业务\\n\\n接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU 后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG 结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。" <<ToolkitPreview>> as ToolkitPreview
rectangle "==资产任务与确认业务\\n\\n同一 Host Scope 拥有跨请求任务标识、pending→running→ready/failed/canceled 状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入 confirmed/discarded，写入成功或部分写入失败后重读失败进入 reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限 4；请求取消只结束等待，显式 cancel 结束本地任务与交付并报告远端执行是否已经停止，不把断开 HTTP 当作远端停止。UI 贴图按生成、校验、切片预览、评阅和明确确认编排，宿主只展示同一状态与结果；confirm 经 Editing.importAsset/commit 后返回实际重读的资源身份，候选形成前不写工程。" <<ToolkitAssets>> as ToolkitAssets
rectangle "==编辑业务\\n\\n读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change Plan 形成统一 EntityChange/Schematics 候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用 Views。TODO：编辑与重构编排。" <<ToolkitEditing>> as ToolkitEditing
rectangle "==第三层：视图关联与交付\\n\\n由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory 共享监听、实体重读和影响计算前缀；结果阶段分支为 files 经实体层发布或纠偏派生文件，memory 短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。" <<ToolkitView_service>> as ToolkitView_service
rectangle "==变更计划纯计算\\n\\n视图编辑、重命名、脚本与 Canvas 导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing 调用 Entities 物化内存候选，Entities 从候选及未改变依赖准备语义输入，Editing 调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities 拥有实际基准复核与持久化。计划不读取工程或持有 Scope、缓存、候选状态；资产生成后置。" <<PureChange_plan>> as PureChange_plan
rectangle "仅缓存状态的转换服务" <<ToolkitConversion>> as ToolkitConversion {
  skinparam RectangleBorderColor<<ToolkitConversion>> #3b82f6
  skinparam RectangleFontColor<<ToolkitConversion>> #3b82f6
  skinparam RectangleBorderStyle<<ToolkitConversion>> dashed

  rectangle "==零件与 TS 视图双向转换\\n\\n内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context 和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope 仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放" <<ToolkitConversionTs>> as ToolkitConversionTs
  rectangle "==独立 Canvas 与 HTML 视图双向转换\\n\\n工作区 Layer 取得共享 CanvasConversion，无状态组合独立 Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML 视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views 唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由 Preview/Renderer 独立交付。" <<ToolkitConversionHtml>> as ToolkitConversionHtml
  rectangle "==Canvas 与 HTML 片段双向转换\\n\\nCanvas 实体、Base64 与 Hjson 和 HTML 片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区 Scope，按方向、输入和实际资源指纹失效" <<ToolkitConversionCanvas>> as ToolkitConversionCanvas
}
rectangle "==第二层：工程实体\\n\\n工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID 和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity 是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity 与 ToolkitEntity 直接继承，TS/HTML 视图经 ToolkitEntity 继承根约束。读取入口提供完整基准，编辑和反向转换沿用同一基准。拥有 Schematics 提交并在提交后重新读取文件，向上层交付只读结果；首次装配和后续事件按同一派生归属将 temp/toolkit 下视图产物与源实体隔离，视图纠偏由 Host 主动调度。TODO：完整语义装配、固定输入依赖读取、派生视图写出及变化分类。" <<ToolkitEntities>> as ToolkitEntities
rectangle "==第一层：文件管理与监听\\n\\n持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务 IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision 的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区 Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。" <<ToolkitFiles>> as ToolkitFiles
rectangle "==语义装配（设计）\\n\\n由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON 合同导入导出平台数据与文档，SemanticAssembly 消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context 和转换依据。复用既有身份、Context 及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行 IO、不重复分析或持有注册表缓存。" <<ToolkitSemantic>> as ToolkitSemantic
rectangle "==纯符号表与调用图\\n\\n基于实体快照、第一层 LocalAst 和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层 Context 或转换依据" <<ToolkitAnalysis>> as ToolkitAnalysis

ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>Host 装配并单一消费文件变化；工程业务 IO 归实体
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>Host 主动重读实体；WorkspaceServices 读取状态
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitFiles : <color:#8D8D8D>实体层唯一业务 IO；读取与提交分别授权到文件
ToolkitEntities .[#8D8D8D,thickness=2].> ToolkitSemantic : <color:#8D8D8D>快照语义装配
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>Host 主动驱动视图；WorkspaceServices 装配
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>视图主动读取实体；派生结果经实体入口交付
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitConversionCanvas : <color:#8D8D8D>WorkspaceServices.ts 仅装配共享转换
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>WorkspaceServices.ts 仅装配；缓存由视图驱动
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitConversionHtml : <color:#8D8D8D>WorkspaceServices.ts 仅装配 HTML 转换
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>视图唯一驱动转换与缓存释放
ToolkitView_service .[#8D8D8D,thickness=2].> ToolkitConversionHtml
ToolkitConversionCanvas .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>实体输入与资源依赖
ToolkitConversionTs .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付
ToolkitConversionHtml .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>独立 Canvas 与视图实体
ToolkitConversionTs .[#8D8D8D,thickness=2].> ToolkitConversionCanvas : <color:#8D8D8D>内部 Canvas 双向转换
ToolkitConversionHtml .[#8D8D8D,thickness=2].> ToolkitConversionCanvas : <color:#8D8D8D>共享片段服务的工作区装配
ToolkitSemantic .[#8D8D8D,thickness=2].> ToolkitAnalysis : <color:#8D8D8D>符号表与调用图
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitDiagnostics : <color:#8D8D8D>WorkspaceServices.ts 装配诊断与受控业务入口
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>诊断主动读取实体快照
ToolkitDiagnostics .[#8D8D8D,thickness=2].> ToolkitAnalysis
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>编辑候选经唯一实体入口提交
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitView_service : <color:#8D8D8D>只读取具名视图；提交后的派生刷新由Host驱动
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitConversionTs : <color:#8D8D8D>视图反向转换
ToolkitEditing .[#8D8D8D,thickness=2].> ToolkitConversionHtml : <color:#8D8D8D>独立 Canvas 反向转换
ToolkitEditing .[#8D8D8D,thickness=2].> PureChange_plan : <color:#8D8D8D>统一变更计划与候选
PureChange_plan .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>只引用格式实体和读取基准；不调用实体服务或建立 Tree
PureChange_plan .[#8D8D8D,thickness=2].> ToolkitAnalysis : <color:#8D8D8D>只读符号表与调用图
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitPreview : <color:#8D8D8D>WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令
ToolkitPreview .[#8D8D8D,thickness=2].> ToolkitEntities : <color:#8D8D8D>预览只读实体资源
ToolkitHostLogic .[#8D8D8D,thickness=2].> ToolkitAssets : <color:#8D8D8D>同一 Workspace Layer 装配，Host 分发具名资产命令
ToolkitAssets .[#8D8D8D,thickness=2].> ToolkitEditing : <color:#8D8D8D>明确确认准备候选并提交，返回实际资源身份
@enduml
`;case`frontend`:return`@startuml
title "03 · VS Code 前端"
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

skinparam rectangle<<FrontendPackaging>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FrontendTests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FrontendPlugin>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FrontendLanguage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FrontendUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FrontendHost_client>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==扩展清单与构建入口\\n\\n声明 VS Code ESM 扩展入口、原生配置默认值与 Webview UI；正式 VSIX 在顶层构建区装配包内入口、共享运行依赖、WASM、固定字体、语言资源及同树版本的 Skill，运行时只按扩展位置读取，不依赖开发仓库；不承载领域业务。" <<FrontendPackaging>> as FrontendPackaging
rectangle "==前端行为与生命周期测试\\n\\n验证前端交互、配置与宿主释放；不建立生产配置副本。" <<FrontendTests>> as FrontendTests
rectangle "==VSCode 宿主与 Effect 组合根\\n\\n绑定原生配置、webview 与同一 Host 生命周期；组件经具名入口获取和关闭，调用方以 try/finally 持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas 预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示 PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。" <<FrontendPlugin>> as FrontendPlugin
rectangle "==标准语言服务端口（设计）\\n\\nVS Code 通过标准 LSP 进程内连接接入同一 Host；connect 接收同一 Host 与标准客户端选项，接入层拥有标准消息连接和客户端生命周期，不接受外部进程启动或业务回调。Host 拥有查询，接入层不持有工程状态。" <<FrontendLanguage>> as FrontendLanguage
rectangle "==单页侧栏、配置区与展开日志\\n\\n显示侧栏与配置交互，消费宿主合同；不直接使用 VS Code 或文件 IO。" <<FrontendUi>> as FrontendUi
rectangle "==只读合同与配置计划\\n\\n提供前端通信合同与同一目标的配置、端点和 Skill 范围计划；官方 CLI 拥有其配置写入，文件目标使用结构化编辑与原子写。新增 CLI 接入在写入前明确失败；不读取游戏工程实体或管理领域状态。" <<FrontendHost_client>> as FrontendHost_client

FrontendUi .[#8D8D8D,thickness=2].> FrontendHost_client
FrontendPlugin .[#8D8D8D,thickness=2].> FrontendHost_client
FrontendTests .[#8D8D8D,thickness=2].> FrontendHost_client
FrontendPlugin .[#8D8D8D,thickness=2].> FrontendLanguage : <color:#8D8D8D>标准 LSP 客户端合同
FrontendTests .[#8D8D8D,thickness=2].> FrontendLanguage : <color:#8D8D8D>真实 Host 验证标准客户端连接骨架
FrontendPlugin .[#8D8D8D,thickness=2].> FrontendUi
FrontendTests .[#8D8D8D,thickness=2].> FrontendUi
FrontendTests .[#8D8D8D,thickness=2].> FrontendPlugin
@enduml
`;case`pure_functions`:return`@startuml
title "04 · 业务纯计算"
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

skinparam rectangle<<PureChange_plan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PureCanvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==变更计划纯计算\\n\\n视图编辑、重命名、脚本与 Canvas 导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing 调用 Entities 物化内存候选，Entities 从候选及未改变依赖准备语义输入，Editing 调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities 拥有实际基准复核与持久化。计划不读取工程或持有 Scope、缓存、候选状态；资产生成后置。" <<PureChange_plan>> as PureChange_plan
rectangle "==Canvas 四向转换\\n\\n内联 Base64、内联 Hjson、Canvas 二进制与 HTML 视图之间的无状态转换" <<PureCanvas>> as PureCanvas
@enduml
`;case`canvas`:return`@startuml
title "05 · Canvas 渲染产品"
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

skinparam rectangle<<CanvasRenderer_tests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<CanvasRenderer_support>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererEntry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererNodes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererFeatures>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererImages>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererLayout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererDom_schema>>{
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
skinparam rectangle<<RendererState>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererSchema>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererRaster>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<RendererContracts>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Canvas 渲染测试\\n\\n在 Node 中验证软件 surface 的实际 PNG 像素、重复编码、Spine JSON 姿态及业务空壳拒绝与输入保真。目标经唯一渲染入口验证布局、节点能力、固定字体、资源指纹、错误诊断和请求资源释放；选型测试不代替产品行为证据。" <<CanvasRenderer_tests>> as CanvasRenderer_tests
rectangle "==CPU 后端测试支持\\n\\n供两类渲染测试复用唯一官方 CanvasKit 初始化边界；每次返回独立后端，不保存跨测试状态或实现业务渲染。" <<CanvasRenderer_support>> as CanvasRenderer_support
rectangle "==唯一渲染入口\\n\\nCanvasRenderer 声明完整输入与 PNG 输出。后续实现由该入口主动驱动校验、布局、绘制与资源结算，同一请求独占会话；当前执行明确 TODO 失败。" <<RendererEntry>> as RendererEntry
rectangle "==节点能力调度\\n\\n按节点类型固定顺序调用能力；不持有 DOM。" <<RendererNodes>> as RendererNodes
rectangle "==节点绘制特性\\n\\n按节点类型与固定能力顺序编排矩形、文本、滚动内容和 Spine 网格绘制；图片、九宫格与渐变合成委托 images，共用同次布局和 CPU 会话。" <<RendererFeatures>> as RendererFeatures
rectangle "==图片合成\\n\\n资源字节解码、九宫格、渐变与颜色乘法；使用 CPU 图形后端。" <<RendererImages>> as RendererImages
rectangle "==确定性布局计算\\n\\n按校验后的节点专属字段与固定字体度量计算矩形、裁剪与文本行；布局树携带对应节点身份及有效值，供节点绘制和子节点布局使用，结果只存在当前渲染会话。" <<RendererLayout>> as RendererLayout
rectangle "==文档输入校验\\n\\n严格校验结构化文档，按唯一映射表提取与节点身份和顺序对应的节点专属 Option Schema，供同次布局及绘制消费；保留原文档，不将投影写回持久化字段。" <<RendererDom_schema>> as RendererDom_schema
rectangle "==特性有效值\\n\\n唯一字段默认值与启用白名单，不修改持久化输入。" <<RendererFields>> as RendererFields
rectangle "==富文本解析\\n\\n只解析原版富文本方言；持久化字段、枚举、颜色与 GUID 使用 Canvas 领域合同，不复制转换层解析器。" <<RendererValues>> as RendererValues
rectangle "==渲染会话与资源结算\\n\\nCpuRenderSession 登记资源、收束加载和释放、保留失败原因并输出诊断；显式时间保证确定性。" <<RendererState>> as RendererState
rectangle "==结构化节点 Schema\\n\\n声明结构化 Canvas 节点的确定类型字段；HTML/XML 解析归纯转换，本节点不执行解析或绘制。" <<RendererSchema>> as RendererSchema
rectangle "==CPU 光栅化与 PNG 编码（设计）\\n\\nCanvasKit WASM/Skia 软件 surface 承担字体度量、文字、路径、位图与网格，禁用 GPU。" <<RendererRaster>> as RendererRaster
rectangle "==CanvasDocument 与渲染合同\\n\\n持久化 Fields、节点类型、布局与文本结果、完整输入及 PNG 输出合同；资源按文档引用标识绑定字节，工程相对路径显式可选以支持未入库候选。PNG 同次携带节点索引链、名称、类型及 viewport 四角供树形视图和选中高亮使用，不承担解析或绘制。" <<RendererContracts>> as RendererContracts

CanvasRenderer_tests .[#8D8D8D,thickness=2].> CanvasRenderer_support : <color:#8D8D8D>复用官方 CPU 后端初始化边界
CanvasRenderer_tests .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>核对失败前后的完整请求输入
CanvasRenderer_tests .[#8D8D8D,thickness=2].> RendererEntry : <color:#8D8D8D>验证唯一入口明确失败
RendererSchema .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>文档节点类型
RendererFields .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>消费节点类型白名单
RendererValues .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>产生具名文本段
RendererLayout .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>交付唯一布局结果
RendererRaster .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>像素与 PNG 结果
RendererState .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>会话与资源状态
RendererEntry .[#8D8D8D,thickness=2].> RendererContracts : <color:#8D8D8D>唯一入口输入输出
RendererDom_schema .[#8D8D8D,thickness=2].> RendererSchema : <color:#8D8D8D>提取节点专属字段
RendererFields .[#8D8D8D,thickness=2].> RendererSchema : <color:#8D8D8D>消费唯一节点 Schema
RendererLayout .[#8D8D8D,thickness=2].> RendererDom_schema : <color:#8D8D8D>消费同次校验后的节点字段与身份
RendererEntry .[#8D8D8D,thickness=2].> RendererDom_schema : <color:#8D8D8D>文档校验
RendererNodes .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>消费确定布局节点
RendererNodes .[#8D8D8D,thickness=2].> RendererFeatures : <color:#8D8D8D>递归顺序由调度拥有，节点投影由特性拥有
RendererNodes .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>共享同次绘制会话
RendererEntry .[#8D8D8D,thickness=2].> RendererNodes : <color:#8D8D8D>能力调度
RendererLayout .[#8D8D8D,thickness=2].> RendererFields : <color:#8D8D8D>持有节点有效值的唯一布局结果
RendererImages .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>消费同一布局结果
RendererImages .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>使用会话拥有的资源
RendererFeatures .[#8D8D8D,thickness=2].> RendererImages : <color:#8D8D8D>复用节点投影输入和同次会话合同
RendererLayout .[#8D8D8D,thickness=2].> RendererValues : <color:#8D8D8D>持有解析后的同次文本段
RendererLayout .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>读取同次会话的固定字体
RendererEntry .[#8D8D8D,thickness=2].> RendererLayout : <color:#8D8D8D>布局阶段
RendererState .[#8D8D8D,thickness=2].> RendererRaster : <color:#8D8D8D>会话拥有独占软件 surface
RendererEntry .[#8D8D8D,thickness=2].> RendererState : <color:#8D8D8D>独占会话与资源结算
@enduml
`;case`tooling`:return`@startuml
title "10 · 开发治理"
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
skinparam rectangle<<ToolsTesting>>{
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
skinparam rectangle<<ToolsRequirement_documents>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ToolsTest_metrics>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==自身回归测试\\n\\n验证治理规则与真实 CLI 行为；夹具隔离，不改产品源码。" <<ToolsTests>> as ToolsTests
rectangle "==Git 钩子转发\\n\\n纯转发薄壳：零判定逻辑，全部判定经唯一入口 cli" <<ToolsHooks>> as ToolsHooks
rectangle "==测试夹具\\n\\n提供隔离 Git 行为夹具；不承载正式检视状态。" <<ToolsTesting>> as ToolsTesting
rectangle "==CLI 与进程边界\\n\\n装配项目检查、统一格式检查和修复及需求图检视；格式算法由 Prettier、LikeC4 和 pre-commit-hooks 承担，内部 CLI 统一范围与进程边界。" <<ToolsCli>> as ToolsCli
rectangle "==Java 风格规则\\n\\n通过 TypeScript AST 校验项目编码纪律；不修改受检源码。" <<ToolsCoding>> as ToolsCoding
rectangle "==架构模型解析\\n\\n解析聚合 C4，分析文件归属、依赖、源码声明与环境变量边界；不另建架构清单。" <<ToolsArchitecture>> as ToolsArchitecture
rectangle "==新版需求图与文档环境\\n\\n原文、解读、决策及关系共用 Sphinx-Needs TOML；uv 锁定正式文档环境。" <<ToolsRequirement_documents>> as ToolsRequirement_documents
rectangle "==模块测试指标基线\\n\\n显式 record 写入的官方覆盖率与变异实测基线，check 只读比较。" <<ToolsTest_metrics>> as ToolsTest_metrics

ToolsCli .[#8D8D8D,thickness=2].> ToolsArchitecture
ToolsCli .[#8D8D8D,thickness=2].> ToolsCoding
ToolsTests .[#8D8D8D,thickness=2].> ToolsCli
ToolsTesting .[#8D8D8D,thickness=2].> ToolsCli
ToolsHooks .[#8D8D8D,thickness=2].> ToolsCli
ToolsCoding .[#8D8D8D,thickness=2].> ToolsArchitecture
ToolsTests .[#8D8D8D,thickness=2].> ToolsArchitecture
ToolsTests .[#8D8D8D,thickness=2].> ToolsCoding
ToolsTests .[#8D8D8D,thickness=2].> ToolsTesting
@enduml
`;case`repository`:return`@startuml
title "11 · 仓库基础"
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
rectangle "==pnpm 与依赖锁定\\n\\n声明根依赖、锁定、类型与构建入口和 CI；成员配置继承根配置。StrykerJS core、Vitest runner 与 TypeScript checker 执行变异测试，fast-check 负责属性测试，按需启用 Vitest coverage-v8 进行覆盖率评估；根 scripts 执行模块指标棘轮，精确版本由根包清单和锁文件持有。" <<RepositoryBuild>> as RepositoryBuild
rectangle "==开发指引\\n\\n提供开发纪律和入口导航；架构事实只引用 C4，不复制模块定义。" <<RepositoryInstructions>> as RepositoryInstructions
rectangle "==版本控制\\n\\n声明忽略、属性与子模块定位；生命周期由原生 Git 管理。" <<RepositoryGit>> as RepositoryGit
rectangle "==编辑器配置\\n\\n声明开发编辑器格式与工作区选项；推荐 VS Code ESLint 扩展以执行仓库现役 ESLint 配置，不作为产品运行配置。" <<RepositoryEditor>> as RepositoryEditor
@enduml
`;case`specifications`:return`@startuml
title "12 · 工具链规范"
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
skinparam rectangle<<SpecificationsWorkspace_files>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsHjson>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsEntities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsHost_configuration>>{
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
skinparam rectangle<<SpecificationsVscode_frontend>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsCanvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsPreview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SpecificationsAnalysis>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==治理契约\\n\\n约束治理检查与检视行为；模型定义架构，规范定义实现验收。" <<SpecificationsTooling>> as SpecificationsTooling
rectangle "==文件布局契约\\n\\n约束文件登记与配置继承的检查行为；具体归属只读 C4。" <<SpecificationsLayout>> as SpecificationsLayout
rectangle "==开发与协作契约\\n\\n约束开发操作、授权与 CI 调度；hooks、审计存储与登记算法引用治理契约。" <<SpecificationsDevelopment>> as SpecificationsDevelopment
rectangle "==Toolkit 运行时合同\\n\\n约束 Host、协议和服务的运行行为；服务边界以 C4 为准。" <<SpecificationsRuntime>> as SpecificationsRuntime
rectangle "==工程文件合同\\n\\n约束工程文件 IO、监听与路径行为；不拥有运行时工程数据。" <<SpecificationsWorkspace_files>> as SpecificationsWorkspace_files
rectangle "==Hjson 统一格式合同\\n\\n约束 Hjson 解析和写出保真；格式合同不定义 IO 归属。" <<SpecificationsHjson>> as SpecificationsHjson
rectangle "==第二层实体基础设施合同\\n\\n约束实体更新、身份和提交行为；实体状态由现役实体模块拥有。" <<SpecificationsEntities>> as SpecificationsEntities
rectangle "==保留 Host 配置合同\\n\\n约束配置输入的读取行为；不引入第二配置来源。" <<SpecificationsHost_configuration>> as SpecificationsHost_configuration
rectangle "==BEScript 内部格式\\n\\n约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。" <<SpecificationsBescript>> as SpecificationsBescript
rectangle "==Canvas 渲染规范\\n\\n约束 Canvas 显示与字段映射行为；渲染模块关系由 C4 定义。" <<SpecificationsCanvas_render>> as SpecificationsCanvas_render
rectangle "==VS Code 前端职责\\n\\n约束前端交互与配置行为；模块职责与依赖只引用架构图。" <<SpecificationsVscode_frontend>> as SpecificationsVscode_frontend
rectangle "==Canvas 转换合同\\n\\n约束四种 Canvas 表示的纯格式转换，以及工作区六向转换服务的结果隔离、缓存、资源核对与生命周期。" <<SpecificationsCanvas>> as SpecificationsCanvas
rectangle "==静态预览与发布合同\\n\\n约束静态预览产物与发布验证；不成为运行时产品入口。" <<SpecificationsPreview>> as SpecificationsPreview
rectangle "==工程分析合同\\n\\n约束纯函数符号表、零件方法局部变量和调用图。" <<SpecificationsAnalysis>> as SpecificationsAnalysis
@enduml
`;case`documentation`:return`@startuml
title "13 · 产品文档"
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
rectangle "==MechToolkit 发布与开发指南\\n\\n技能与对外指南作为普通文件随本仓库提交维护；不作为 tools 自举输入。可选本地 reference 资料独立于仓库结构。" <<DocumentationManual>> as DocumentationManual
@enduml
`;case`legacy`:return`@startuml
title "90 · 历史参考"
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

skinparam rectangle<<LegacyCanvas_render>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyMcp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyHost>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Canvas DOM 渲染参考\\n\\n旧 DOM 渲染器正式代码的只读参考；旧版本身没有测试；永久冻结，禁止篡改；现役 CPU 管线不执行这些文件。" <<LegacyCanvas_render>> as LegacyCanvas_render
rectangle "==MCP 协议入口\\n\\n冻结的 C# MCP 宿主入口参考；保留旧协议宿主的启动和调用边界。" <<LegacyMcp>> as LegacyMcp
rectangle "==VSCode Host 入口\\n\\n冻结的 C# VS Code Host 入口参考；保留旧 stdin/stdout 命令及诊断推送协议的行为证据。" <<LegacyHost>> as LegacyHost
rectangle "==核心逻辑\\n\\n组织旧核心参考文件的职责边界；旧文件只作格式与行为证据。" <<LegacyCore>> as LegacyCore

LegacyMcp .[#8D8D8D,thickness=2].> LegacyCore
LegacyHost .[#8D8D8D,thickness=2].> LegacyCore
@enduml
`;case`legacy_core`:return`@startuml
title "91 · 历史核心参考"
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

skinparam rectangle<<LegacyCoreComposition>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreAnalysis>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreBescript>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreCanvas>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreInfra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreLint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCorePersistence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreRefactor>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreSdk>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreSearch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreTsview>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreWorker>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LegacyCoreTests>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==核心服务装配\\n\\n冻结的 C# 核心门面与 ToolkitServices 服务装配参考；用于核对旧入口和服务组合方式。" <<LegacyCoreComposition>> as LegacyCoreComposition
rectangle "==工程分析\\n\\n冻结的 AST 解析服务、符号引用、调用图与脚本归属索引参考；用于核对游戏脚本分析语义。" <<LegacyCoreAnalysis>> as LegacyCoreAnalysis
rectangle "==BeScript 语法\\n\\n冻结的 BeScript 词法、语法解析、AST 与文本序列化参考，包含 Canvas 内联标记的解析行为。" <<LegacyCoreBescript>> as LegacyCoreBescript
rectangle "==Canvas 数据\\n\\n冻结的 Canvas 二进制、内联 Hjson 与 HTML 片段编解码参考；用于核对字段布局、内联参数和转义语义。" <<LegacyCoreCanvas>> as LegacyCoreCanvas
rectangle "==基础设施\\n\\n冻结的日志、进程、配置、文件系统与文本工具参考；保留旧宿主的基础设施行为证据。" <<LegacyCoreInfra>> as LegacyCoreInfra
rectangle "==游戏工程静态检查\\n\\n冻结的 LintEngine 规则清单与 CallTargets 条件语义参考；用于核对既有静态检查条目的游戏语义。" <<LegacyCoreLint>> as LegacyCoreLint
rectangle "==工程持久化\\n\\n冻结的 ProjectModel、FileIO 与实体工具参考；用于核对工程目录、实体识别和文件持久化行为。" <<LegacyCorePersistence>> as LegacyCorePersistence
rectangle "==游戏逻辑重构\\n\\n冻结的 Canvas 转换、文件移动、变量重命名、脚本仓库管理与一致性修复参考；用于核对既有重构输入及变更语义。" <<LegacyCoreRefactor>> as LegacyCoreRefactor
rectangle "==平台 SDK\\n\\n冻结的平台内置方法、事件、枚举与零件能力定义参考；用于核对结构化 SDK 文档的字段与平台语义。" <<LegacyCoreSdk>> as LegacyCoreSdk
rectangle "==工程检索\\n\\n冻结的 GUID 引用、脚本文本与 UI 文本检索参考；用于核对请求、结果定位和限额语义。" <<LegacyCoreSearch>> as LegacyCoreSearch
rectangle "==TS 视图\\n\\n冻结的 DeviceTsView、仓库视图解析转换与写回参考；用于核对 BeScript 与 TS 视图的映射语义。" <<LegacyCoreTsview>> as LegacyCoreTsview
rectangle "==工作进程命令\\n\\n冻结的工作进程命令入口参考；保留旧视图、Canvas、重构、检索和静态检查的命令边界。" <<LegacyCoreWorker>> as LegacyCoreWorker
rectangle "==核心回归\\n\\n冻结的核心 TS 回归入口参考；与 cases 分别登记入口和历史 C# 回归及夹具。" <<LegacyCoreTests>> as LegacyCoreTests
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
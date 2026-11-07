var e=e=>{switch(e){case`asset_review_flow`:return`digraph {
  likec4_viewId = "asset_review_flow";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.mcp.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工具合同与 HTTP 接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch<BR/>匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host<BR/>准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_1" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "assets" [
    likec4_id = "toolkit.assets";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产任务与确认业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">同一 Host Scope<BR/>拥有跨请求任务标识、pending→running→ready/failed/canceled<BR/>状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入<BR/>confirmed/discarded，写入成功或部分写入失败后重读失败进入<BR/>reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_candidates" [
    likec4_id = "toolkit.asset_candidates";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">候选存储与释放</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host Scope<BR/>独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次<BR/>read 交付新的字节流，Scope 关闭释放全部所属资源。IO<BR/>仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_processing" [
    likec4_id = "toolkit.asset_processing";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">产物确定性校验与切片预览</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与<BR/>3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成<BR/>CanvasDocument，经唯一 CPU renderer<BR/>输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_generation" [
    likec4_id = "toolkit.asset_generation";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工作流绑定与远端生成执行</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为<BR/>RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "logic_1" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">renderSlice/review：taskId 与 artifactId</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic_1" -> "assets" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">显式跨请求操作，不自动确认</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取同一候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_processing" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">结构化 slice 与尺寸案例生成 PNG 预览</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_generation" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">有来源的工作流返回视觉评阅意见</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "logic_1" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付具名预览或意见，由调用方明确确认</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`asset_generation_flow`:return`digraph {
  likec4_viewId = "asset_generation_flow";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.mcp.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工具合同与 HTTP 接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch<BR/>匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host<BR/>准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_1" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "assets" [
    likec4_id = "toolkit.assets";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产任务与确认业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">同一 Host Scope<BR/>拥有跨请求任务标识、pending→running→ready/failed/canceled<BR/>状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入<BR/>confirmed/discarded，写入成功或部分写入失败后重读失败进入<BR/>reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_candidates" [
    likec4_id = "toolkit.asset_candidates";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">候选存储与释放</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host Scope<BR/>独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次<BR/>read 交付新的字节流，Scope 关闭释放全部所属资源。IO<BR/>仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_generation" [
    likec4_id = "toolkit.asset_generation";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工作流绑定与远端生成执行</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为<BR/>RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "runninghub" [
    likec4_id = "runninghub";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RunningHub 远端 ComfyUI 执行</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">外部推理与计费边界。仅使用 /proxy 或 /proxy-plus 原生<BR/>ComfyUI：upload/image 上传、prompt 提交、history<BR/>查询、view 下载；不使用代理 WS。模型库 resource/list<BR/>仅用于已允许的只读清单查询，标准模型与 LLM API 生成通道不进入架构。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_processing" [
    likec4_id = "toolkit.asset_processing";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">产物确定性校验与切片预览</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与<BR/>3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成<BR/>CanvasDocument，经唯一 CPU renderer<BR/>输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "logic_1" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">提交具名生成请求</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic_1" -> "assets" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">submit：接受前接收具名上传输入</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">暂存输入流；成功后建立 Host Scope 的 pending 任务并返回<BR/>taskId</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_generation" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">工作流绑定与原子远端执行</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "asset_generation" -> "runninghub" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">上传、prompt、history、view</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_generation" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">具名产物字节流与执行事实</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">单次消费产物流，暂存未就绪内容</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取暂存字节供校验</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_processing" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按工作流输出绑定交付单文件或同组文件及明确要求</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">将带产物身份的成功校验结果关联到同组候选，进入 ready</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic_1" -> "assets" [
    likec4_id = "step-11";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">status/result：同 taskId 跨请求查询</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`asset_confirmation_flow`:return`digraph {
  likec4_viewId = "asset_confirmation_flow";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.mcp.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工具合同与 HTTP 接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch<BR/>匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host<BR/>准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_1" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "assets" [
    likec4_id = "toolkit.assets";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产任务与确认业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">同一 Host Scope<BR/>拥有跨请求任务标识、pending→running→ready/failed/canceled<BR/>状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入<BR/>confirmed/discarded，写入成功或部分写入失败后重读失败进入<BR/>reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_candidates" [
    likec4_id = "toolkit.asset_candidates";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">候选存储与释放</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host Scope<BR/>独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次<BR/>read 交付新的字节流，Scope 关闭释放全部所属资源。IO<BR/>仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "editing" [
    likec4_id = "toolkit.editing";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change<BR/>Plan 形成统一 EntityChange/Schematics<BR/>候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用<BR/>Views。TODO：编辑与重构编排。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "logic_1" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">confirm：taskId、artifactId、目标<BR/>RelativePath</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic_1" -> "assets" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">固定选定产物与确认信息</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按校验结果读取所选产物及其关联文件</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "editing" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">importAsset：具名文件与目标准备统一 EntityChange，零写盘</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "entities" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取目标与引用基准，构造资源及 GUID 操作</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "editing" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">取得本次候选的只读预期结果，用于重读失败后的核对</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "entities" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">从同一候选取得文件、目录动作与预期内容</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "editing" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">commit：明确提交候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "entities" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">校验基准、提交并实际重读</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "entities" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付同次实际重读结果与读取基准</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-11";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">提交与重读成功后释放候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic_1" -> "assets" [
    likec4_id = "step-12";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>11</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">分别交付写入与重读结果，重读失败时进入 reconciling 并保留候选</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "logic_1" -> "view_service" [
    likec4_id = "step-13";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>12</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">重读成功时使用同次实际变化主动刷新派生视图</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "logic_1" [
    likec4_id = "step-14";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>13</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付实际资源身份及阶段错误；刷新失败保留已提交事实</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`asset_cancel_flow`:return`digraph {
  likec4_viewId = "asset_cancel_flow";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "assets" [
    likec4_id = "toolkit.assets";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产任务与确认业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">同一 Host Scope<BR/>拥有跨请求任务标识、pending→running→ready/failed/canceled<BR/>状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入<BR/>confirmed/discarded，写入成功或部分写入失败后重读失败进入<BR/>reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_generation" [
    likec4_id = "toolkit.asset_generation";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工作流绑定与远端生成执行</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为<BR/>RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_candidates" [
    likec4_id = "toolkit.asset_candidates";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">候选存储与释放</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host Scope<BR/>独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次<BR/>read 交付新的字节流，Scope 关闭释放全部所属资源。IO<BR/>仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "assets" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">显式 cancel、discard 或关闭 Scope</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_generation" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">中断本地执行，报告远端停止事实</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">释放所属未完成或丢弃候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`asset_reconciliation_flow`:return`digraph {
  likec4_viewId = "asset_reconciliation_flow";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "assets" [
    likec4_id = "toolkit.assets";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产任务与确认业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">同一 Host Scope<BR/>拥有跨请求任务标识、pending→running→ready/failed/canceled<BR/>状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入<BR/>confirmed/discarded，写入成功或部分写入失败后重读失败进入<BR/>reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "editing" [
    likec4_id = "toolkit.editing";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change<BR/>Plan 形成统一 EntityChange/Schematics<BR/>候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用<BR/>Views。TODO：编辑与重构编排。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "asset_candidates" [
    likec4_id = "toolkit.asset_candidates";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">候选存储与释放</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host Scope<BR/>独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次<BR/>read 交付新的字节流，Scope 关闭释放全部所属资源。IO<BR/>仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "assets" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">源事件或 status 触发实体重建；status 返回当前阶段事实</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "entities" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按需完整重读实体，交付实际变化</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "assets" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付已重建的实体状态供任务核对</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按实际变化刷新派生视图，刷新错误独立交付</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "editing" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付本次提交的只读预期结果</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "entities" -> "editing" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">核对实际文件、目录、身份与预期结果</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "entities" -> "editing" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付一致结果或具体冲突</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "assets" -> "editing" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付核对结果</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "assets" -> "asset_candidates" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">核对一致后释放候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`assets_context`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=assets_context,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    frontend [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">单一前端扩展</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供 VS Code 配置、侧栏与 Host 接入；领域状态保留在 Toolkit。</FONT></TD></TR></TABLE>>,
        likec4_id=frontend,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Toolkit TypeScript 产品</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。</FONT></TD></TR></TABLE>>,
        likec4_id=toolkit,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    frontend -> toolkit [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=dht39m,
        style=dashed];
    pi_agent [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi 官方运行时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">外部 Pi v1.0.0，官方提交<BR/>a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP<BR/>客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。</FONT></TD></TR></TABLE>>,
        likec4_id=pi_agent,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pi_agent -> toolkit [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">官方扩展加载、会话事件、MCP 连接与结果交付</FONT></TD></TR></TABLE>>,
        likec4_id=voc1gb,
        minlen=1,
        style=dashed];
    asset_settings [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运行时配置与凭据来源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">VS Code 原生 WorkspaceConfiguration 或 Pi 显式<BR/>flags、指定配置文件提供参数与可选明文凭据，不额外加密。入口只选择自己的一个来源，公开参数与凭据分开交付，凭据不进入调用记录或日志；不使用环境变量。</FONT></TD></TR></TABLE>>,
        likec4_id=asset_settings,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    asset_settings -> toolkit [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">入口选择配置与凭据的唯一来源</FONT></TD></TR></TABLE>>,
        likec4_id="1peunn2",
        minlen=1,
        style=dashed];
    toolkit -> frontend [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">通过原生配置适配验证当前值、边界与读取失败</FONT></TD></TR></TABLE>>,
        likec4_id="1t0kw96",
        style=dashed];
    runninghub [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RunningHub 远端 ComfyUI 执行</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">外部推理与计费边界。仅使用 /proxy 或 /proxy-plus 原生<BR/>ComfyUI：upload/image 上传、prompt 提交、history<BR/>查询、view 下载；不使用代理 WS。模型库 resource/list<BR/>仅用于已允许的只读清单查询，标准模型与 LLM API 生成通道不进入架构。</FONT></TD></TR></TABLE>>,
        likec4_id=runninghub,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> runninghub [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">原生远端执行与只读模型事实查询</FONT></TD></TR></TABLE>>,
        likec4_id="1iv2isc",
        minlen=1,
        style=dashed];
    asset_storage [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运行时用户候选暂存区</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">玩家机器的工程外暂存资源，区别于开发仓库和 test/data/projects。每个<BR/>Host Scope<BR/>独占；暂存绝对路径仅在存储文件系统边界使用，对内部交付产物标识及字节流。成功入库、丢弃、失败和<BR/>Scope 关闭释放所属资源。</FONT></TD></TR></TABLE>>,
        likec4_id=asset_storage,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> asset_storage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">工程外流式暂存与 Scope 释放</FONT></TD></TR></TABLE>>,
        likec4_id=fwh5yq,
        minlen=1,
        style=dashed];
}
`;case`assets_pipeline`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=assets_pipeline,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_mcp {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MCP 协议接入</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.mcp",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工具合同与 HTTP 接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch<BR/>匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host<BR/>准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.mcp.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_host {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>工作区 HOST</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.host",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.host.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_config {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>配置来源抽象与实现</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.config",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">只读配置来源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供统一只读 ConfigSource、ToolkitConfig<BR/>和资产凭据端口；PiConfigSource 在本模块解释官方显式输入，VS Code<BR/>的具体 WorkspaceConfiguration 适配由<BR/>frontend.plugin<BR/>承载。两种入口各自注入唯一来源，默认值由宿主原生声明，凭据按远端执行边界读取。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.config.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    logic -> logic_1 [arrowhead=normal,
        likec4_id="3c9uus",
        minlen=1,
        style=dashed];
    assets [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产任务与确认业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">同一 Host Scope<BR/>拥有跨请求任务标识、pending→running→ready/failed/canceled<BR/>状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入<BR/>confirmed/discarded，写入成功或部分写入失败后重读失败进入<BR/>reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.assets",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic_1 -> assets [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">同一 Workspace Layer 装配，Host 分发具名资产命令</FONT></TD></TR></TABLE>>,
        likec4_id="1utryw9",
        style=dashed,
        weight=2];
    asset_candidates [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">候选存储与释放</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host Scope<BR/>独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次<BR/>read 交付新的字节流，Scope 关闭释放全部所属资源。IO<BR/>仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.asset_candidates",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic_1 -> asset_candidates [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享工作区候选服务</FONT></TD></TR></TABLE>>,
        likec4_id="2826ir",
        style=dashed,
        weight=2];
    editing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change<BR/>Plan 形成统一 EntityChange/Schematics<BR/>候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用<BR/>Views。TODO：编辑与重构编排。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.editing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic_1 -> editing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令</FONT></TD></TR></TABLE>>,
        likec4_id="82xi1i",
        style=dashed,
        weight=2];
    asset_processing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">产物确定性校验与切片预览</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与<BR/>3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成<BR/>CanvasDocument，经唯一 CPU renderer<BR/>输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.asset_processing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic_1 -> asset_processing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享工作区处理服务</FONT></TD></TR></TABLE>>,
        likec4_id="1ugzl9q",
        style=dashed,
        weight=2];
    entities [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.entities",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic_1 -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Host 主动重读实体；WorkspaceServices 读取状态</FONT></TD></TR></TABLE>>,
        likec4_id="1mhoktz",
        style=dashed,
        weight=2];
    assets -> asset_candidates [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">任务关联候选标识、读取确认内容并释放</FONT></TD></TR></TABLE>>,
        likec4_id="1pn4b5s",
        style=dashed,
        weight=2];
    assets -> editing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">明确确认准备候选并提交，返回实际资源身份</FONT></TD></TR></TABLE>>,
        likec4_id="1h29ub9",
        style=dashed,
        weight=2];
    assets -> asset_processing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">产物校验与明确切片预览</FONT></TD></TR></TABLE>>,
        likec4_id="1kzknfx",
        style=dashed,
        weight=2];
    asset_generation [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工作流绑定与远端生成执行</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为<BR/>RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.asset_generation",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    assets -> asset_generation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">任务绑定原子生成与评阅，不转移调度所有权</FONT></TD></TR></TABLE>>,
        likec4_id="1tcl29s",
        style=dashed,
        weight=2];
    asset_candidates -> asset_processing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">保存同一产物的确定性校验结果</FONT></TD></TR></TABLE>>,
        likec4_id="1kdctfr",
        style=dashed,
        weight=2];
    asset_candidates -> asset_generation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">暂存具名产物字节</FONT></TD></TR></TABLE>>,
        likec4_id="1t1ptbe",
        style=dashed,
        weight=2];
    editing -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">编辑候选经唯一实体入口提交</FONT></TD></TR></TABLE>>,
        likec4_id="7fr08b",
        style=dashed,
        weight=2];
    asset_processing -> asset_generation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只读原子执行交付的具名字节</FONT></TD></TR></TABLE>>,
        likec4_id=y3q1d3,
        style=dashed,
        weight=2];
    renderer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas CPU 渲染引擎</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">结构化<BR/>CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经<BR/>CanvasKit/Skia CPU surface 输出<BR/>PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。</FONT></TD></TR></TABLE>>,
        likec4_id=renderer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    asset_processing -> renderer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">切片预览复用唯一 CPU PNG 入口</FONT></TD></TR></TABLE>>,
        likec4_id=o5ozyr,
        minlen=1,
        style=dashed];
    asset_generation -> logic_2 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只读配置与调用边界凭据</FONT></TD></TR></TABLE>>,
        likec4_id="76m0i1",
        minlen=1,
        style=dashed];
}
`;case`assets_components`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=assets_components,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_assets {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>资产任务与确认业务</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.assets",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        scheduler [group="toolkit.assets",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">唯一任务状态与有界调度</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">拥有唯一任务状态、执行 Fiber 及四并发 Semaphore，任务归 Host<BR/>Scope。以 taskId 关联不可变输入和候选标识，串行协调候选消费；同时需要<BR/>Host 编排边界和任务许可时先取得 Host 边界，不持任务许可等待 Host<BR/>边界。result 交付 ready 候选集合，并从候选存储读取图片原内容及 MIME，经<BR/>Host 交给协议层；确认成功或丢弃后终止候选消费。生成、处理与候选 IO</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.assets.scheduler",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        confirmation [group="toolkit.assets",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">明确确认与提交结果</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">确认固定 taskId 与 artifactId，读取校验后的候选字节，调用<BR/>Editing.importAsset 形成统一 EntityChange，然后经<BR/>Editing.commit 校验基准与提交。确认一经任务接受即由 Host Scope<BR/>持有执行及同一任务的候选消费许可；请求取消只结束等待，状态和结果仍经任务查询。实体层从本次候选经<BR/>Editing 交付只读预期结果，任务持有至确认、丢弃或 Host</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.assets.confirmation",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        review [group="toolkit.assets",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">跨请求切片预览与评阅</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">renderSlice/review 固定同一 taskId 与<BR/>artifactId，从候选读取已校验内容，分别调用确定性切片预览与有来源的远端评阅工作流。预览和意见保持具名结果，不替换原始候选，不自动提交或制造另一个任务状态所有者。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.assets.review",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        contracts [group="toolkit.assets",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">具名任务输入与结果</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">submit/status/result/cancel/discard/renderSlice/review/confirm<BR/>各自使用具名输入和结果，以名义类和共同抽象根表达不同命令，以 instanceof<BR/>收窄；不使用语义联合或匿名对象联合。submit<BR/>携带明确能力与参数，renderSlice 携带<BR/>taskId、artifactId、结构化 slice 与尺寸案例，review</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.assets.contracts",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_asset_generation {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>工作流绑定与远端生成执行</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.asset_generation",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        entry [group="toolkit.asset_generation",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">生成与评阅执行入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">execute 接收 GenerationRequest 与 signal，返回按<BR/>artifactId/MIME/格式及字节流标识的<BR/>GenerationOutput；review<BR/>接收选定候选和评阅指令，经同一允许工作流执行视觉评阅，输出意见而不自动代替确认。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.asset_generation.entry",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        workflows [group="toolkit.asset_generation",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">能力白名单与模型绑定</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">图像生成/编辑、UI 贴图、视频/序列帧、音乐、音效及图生 3D<BR/>使用明确能力白名单；九宫格切片由 AssetProcessing<BR/>确定性处理，不作为远端生成能力。能力匹配有来源的<BR/>workflowId、节点参数与模型文件清单；模型库收藏与创建时间不超过六个月是使用条件。具体<BR/>graph、checkpoint 与远端节点未验证则报告缺口，不把旧标准模型 API</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.asset_generation.workflows",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        transport [group="toolkit.asset_generation",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">原生 ComfyUI 远端传输</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">原生 HTTP 上传→提交取得 promptId→history<BR/>等待完成→下载具名文件；请求与 promptId<BR/>绑定，取消停止本地等待并明确交付远端停止事实。没有经核实的任务级取消合同时不调用影响其他任务的全局<BR/>interrupt；不伪造服务端取消。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.asset_generation.transport",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_asset_processing {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>产物确定性校验与切片预览</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.asset_processing",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        inspection [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">结构化产物校验</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">图片、音频、视频和 3D 文件组质量要求使用具名名义类及共同抽象根，以<BR/>instanceof 收窄；按各自字段实际解码并校验。PNG<BR/>后缀不能证明透明，模型营销不能证明九宫格或可入库格式。失败交付实际诊断并阻止进入<BR/>ready 候选。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.asset_processing.inspection",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        slice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">九宫格预览装配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">选定 artifactId、原生 slicedBorderLB/RT 与<BR/>slicedRectLB/RT 四组向量和尺寸案例产生结构化<BR/>CanvasDocument；本次文档内引用绑定未入库候选图片字节，工程路径为<BR/>None，引用标识不作为工程 GUID。绘制交给 CPU renderer，输出具名<BR/>PNG，不改原候选、不写工程。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.asset_processing.slice",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_asset_candidates {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>候选存储与释放</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.asset_candidates",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        storage [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scope 内的字节与产物索引</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">AssetCandidates 拥有候选文件 IO<BR/>和资源寿命；暂存入口消费生成流并返回任务与产物标识，读取入口以这些标识交付独立流供校验，关联入口接收同一产物的校验结果并交付<BR/>AssetCandidate。AssetCandidate 只携带<BR/>artifactId、格式、校验结果，不暴露内部绝对路径。失败的未完成产物释放；已就绪候选在确认成功、丢弃或<BR/>Host 关闭时释放。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.asset_candidates.storage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_editing {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>编辑业务</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.editing",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        asset_import [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产入库候选准备</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Editing.importAsset<BR/>输入选定的具名产物文件集合、目标工程相对路径及显式确认信息，读取目标目录及引用基准，按实际工程格式调用实体原语准备资源、GUID<BR/>和必要引用操作的统一<BR/>EntityChange。关联文件组以整体准备并提交，实际资源身份来自提交重读。新增资源不用视图<BR/>replace 代替；不直接写盘，commit 后由实体实际重读，Host 主动调用</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.editing.asset_import",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    scheduler -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">具名请求、状态与结果</FONT></TD></TR></TABLE>>,
        likec4_id="1u46t24",
        minlen=1,
        style=dashed,
        weight=3];
    confirmation -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">选定产物、相对目标和确认结果</FONT></TD></TR></TABLE>>,
        likec4_id=ckj1ok,
        minlen=1,
        style=dashed,
        weight=3];
    review -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">选定候选、切片案例及评阅输入与输出</FONT></TD></TR></TABLE>>,
        likec4_id=ehtbpt,
        minlen=1,
        style=dashed,
        weight=3];
    contracts -> entry [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交输入绑定原子生成合同</FONT></TD></TR></TABLE>>,
        likec4_id="1gzyhf9",
        style=dashed];
    contracts -> inspection [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">质量要求绑定唯一产物校验合同</FONT></TD></TR></TABLE>>,
        likec4_id="13h53n6",
        minlen=1,
        style=dashed];
    contracts -> slice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">切片结果绑定唯一处理入口</FONT></TD></TR></TABLE>>,
        likec4_id="1evk3jw",
        minlen=1,
        style=dashed];
    contracts -> storage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">结果复用候选存储合同</FONT></TD></TR></TABLE>>,
        likec4_id=pf0448,
        minlen=1,
        style=dashed];
    contracts -> asset_import [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">确认输入绑定统一入库准备合同</FONT></TD></TR></TABLE>>,
        likec4_id=emolxi,
        minlen=1,
        style=dashed];
    entry -> workflows [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">选择明确能力和工作流</FONT></TD></TR></TABLE>>,
        likec4_id=gdbsgu,
        style=dashed,
        weight=3];
    entry -> transport [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">执行具名输入并读取实际结果</FONT></TD></TR></TABLE>>,
        likec4_id=x13st,
        style=dashed,
        weight=3];
    workflows -> transport [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">绑定后的原生 ComfyUI graph</FONT></TD></TR></TABLE>>,
        likec4_id="1f66hu1",
        style=dashed];
}
`;case`canvas_render`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=canvas_render,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    entry [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">唯一渲染入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderer 声明完整输入与 PNG<BR/>输出。后续实现由该入口主动驱动校验、布局、绘制与资源结算，同一请求独占会话；当前执行明确<BR/>TODO 失败。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.entry",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nodes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">节点能力调度</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按节点类型固定顺序调用能力；不持有 DOM。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.nodes",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> nodes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">能力调度</FONT></TD></TR></TABLE>>,
        likec4_id="15y49t9",
        style=dashed];
    layout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">确定性布局计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按校验后的节点专属字段与固定字体度量计算矩形、裁剪与文本行；布局树携带对应节点身份及有效值，供节点绘制和子节点布局使用，结果只存在当前渲染会话。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.layout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">布局阶段</FONT></TD></TR></TABLE>>,
        likec4_id="12amepw",
        style=dashed];
    dom_schema [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">文档输入校验</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">严格校验结构化文档，按唯一映射表提取与节点身份和顺序对应的节点专属 Option<BR/>Schema，供同次布局及绘制消费；保留原文档，不将投影写回持久化字段。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.dom_schema",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> dom_schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">文档校验</FONT></TD></TR></TABLE>>,
        likec4_id="6rtspi",
        style=dashed];
    state [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">渲染会话与资源结算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CpuRenderSession<BR/>登记资源、收束加载和释放、保留失败原因并输出诊断；显式时间保证确定性。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.state",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">独占会话与资源结算</FONT></TD></TR></TABLE>>,
        likec4_id="160650p",
        style=dashed];
    contracts [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CanvasDocument 与渲染合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持久化 Fields、节点类型、布局与文本结果、完整输入及 PNG<BR/>输出合同；资源按文档引用标识绑定字节，工程相对路径显式可选以支持未入库候选。PNG<BR/>同次携带节点索引链、名称、类型及 viewport<BR/>四角供树形视图和选中高亮使用，不承担解析或绘制。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.contracts",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">唯一入口输入输出</FONT></TD></TR></TABLE>>,
        likec4_id=duify7,
        style=dashed];
    features [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">节点绘制特性</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按节点类型与固定能力顺序编排矩形、文本、滚动内容和 Spine<BR/>网格绘制；图片、九宫格与渐变合成委托 images，共用同次布局和 CPU 会话。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.features",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nodes -> features [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">递归顺序由调度拥有，节点投影由特性拥有</FONT></TD></TR></TABLE>>,
        likec4_id="1w13ke6",
        style=dashed];
    nodes -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费确定布局节点</FONT></TD></TR></TABLE>>,
        likec4_id=o36xdv,
        style=dashed];
    nodes -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享同次绘制会话</FONT></TD></TR></TABLE>>,
        likec4_id="6y0oem",
        style=dashed];
    images [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">图片合成</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">资源字节解码、九宫格、渐变与颜色乘法；使用 CPU 图形后端。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.images",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    features -> images [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">复用节点投影输入和同次会话合同</FONT></TD></TR></TABLE>>,
        likec4_id=tauteh,
        style=dashed];
    images -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费同一布局结果</FONT></TD></TR></TABLE>>,
        likec4_id="1gnn92c",
        style=dashed];
    images -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">使用会话拥有的资源</FONT></TD></TR></TABLE>>,
        likec4_id=a01hzd,
        style=dashed];
    layout -> dom_schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费同次校验后的节点字段与身份</FONT></TD></TR></TABLE>>,
        likec4_id="16vnct4",
        style=dashed];
    fields [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">特性有效值</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一字段默认值与启用白名单，不修改持久化输入。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.fields",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    layout -> fields [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持有节点有效值的唯一布局结果</FONT></TD></TR></TABLE>>,
        likec4_id="9kkpep",
        style=dashed];
    values [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">富文本解析</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">只解析原版富文本方言；持久化字段、枚举、颜色与 GUID 使用 Canvas<BR/>领域合同，不复制转换层解析器。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.values",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    layout -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持有解析后的同次文本段</FONT></TD></TR></TABLE>>,
        likec4_id="1y3eiqw",
        style=dashed];
    layout -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取同次会话的固定字体</FONT></TD></TR></TABLE>>,
        likec4_id=yh82zr,
        style=dashed];
    layout -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">交付唯一布局结果</FONT></TD></TR></TABLE>>,
        likec4_id="1mt06i9",
        style=dashed];
    schema [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">结构化节点 Schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">声明结构化 Canvas 节点的确定类型字段；HTML/XML<BR/>解析归纯转换，本节点不执行解析或绘制。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.schema",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dom_schema -> schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提取节点专属字段</FONT></TD></TR></TABLE>>,
        likec4_id="1f66237",
        style=dashed];
    fields -> schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费唯一节点 Schema</FONT></TD></TR></TABLE>>,
        likec4_id=tclqga,
        style=dashed];
    fields -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费节点类型白名单</FONT></TD></TR></TABLE>>,
        likec4_id="10lcm4a",
        style=dashed];
    values -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">产生具名文本段</FONT></TD></TR></TABLE>>,
        likec4_id="25q783",
        style=dashed];
    raster [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CPU 光栅化与 PNG 编码（设计）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasKit WASM/Skia 软件 surface<BR/>承担字体度量、文字、路径、位图与网格，禁用 GPU。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.raster",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    state -> raster [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">会话拥有独占软件 surface</FONT></TD></TR></TABLE>>,
        likec4_id="1yxnz2",
        style=dashed];
    state -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">会话与资源状态</FONT></TD></TR></TABLE>>,
        likec4_id=i96xss,
        style=dashed];
    schema -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">文档节点类型</FONT></TD></TR></TABLE>>,
        likec4_id="189d00q",
        style=dashed];
    raster -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">像素与 PNG 结果</FONT></TD></TR></TABLE>>,
        likec4_id=ss6xjc,
        style=dashed];
}
`;case`pi_session_start`:return`digraph {
  likec4_viewId = "pi_session_start";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "pi_agent" [
    likec4_id = "pi_agent";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi 官方运行时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">外部 Pi v1.0.0，官方提交<BR/>a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP<BR/>客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" [
    likec4_id = "toolkit.pi_plugin.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">扩展生命周期与接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">扩展工厂只注册 flags 和事件；session_start 从 ctx.cwd<BR/>建立专属 memory Host 和 HTTP 服务，再向 Pi 登记 MCP<BR/>endpoint；连接由 Pi 管理。session_shutdown 先注销 MCP<BR/>登记，再关闭 HTTP，最后关闭 Host。new/resume/fork/reload<BR/>使用同一开始结束合同，不从会话历史重建工程状态。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_1" [
    likec4_id = "toolkit.config.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">只读配置来源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供统一只读 ConfigSource、ToolkitConfig<BR/>和资产凭据端口；PiConfigSource 在本模块解释官方显式输入，VS Code<BR/>的具体 WorkspaceConfiguration 适配由<BR/>frontend.plugin<BR/>承载。两种入口各自注入唯一来源，默认值由宿主原生声明，凭据按远端执行边界读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_2" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_3" [
    likec4_id = "toolkit.mcp.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工具合同与 HTTP 接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch<BR/>匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host<BR/>准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "preview" [
    likec4_id = "toolkit.preview";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 预览业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU<BR/>后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG<BR/>结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pi_agent" -> "logic" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">session_start：ctx.cwd 与 flags</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "logic_1" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取显式配置</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "logic_2" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">建立 memory Host</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "logic_3" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">启动回环 HTTP，取得 endpoint</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "pi_agent" -> "logic" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">registerMcpServer：登记本会话 HTTP<BR/>endpoint；连接与同名覆盖由 Pi 管理</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "pi_agent" -> "logic_3" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">具名工具请求与取消信号</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic_2" -> "logic_3" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">受控读取或预览请求</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "logic_2" -> "view_service" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">取得 HTML/XML 具名视图</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic_2" -> "preview" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">视图与完整资源到 PNG</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "pi_agent" -> "logic_3" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">文本、PNG、结构化结果或实际错误</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`pi_session_shutdown`:return`digraph {
  likec4_viewId = "pi_session_shutdown";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "pi_agent" [
    likec4_id = "pi_agent";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi 官方运行时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">外部 Pi v1.0.0，官方提交<BR/>a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP<BR/>客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" [
    likec4_id = "toolkit.pi_plugin.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">扩展生命周期与接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">扩展工厂只注册 flags 和事件；session_start 从 ctx.cwd<BR/>建立专属 memory Host 和 HTTP 服务，再向 Pi 登记 MCP<BR/>endpoint；连接由 Pi 管理。session_shutdown 先注销 MCP<BR/>登记，再关闭 HTTP，最后关闭 Host。new/resume/fork/reload<BR/>使用同一开始结束合同，不从会话历史重建工程状态。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_1" [
    likec4_id = "toolkit.mcp.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工具合同与 HTTP 接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch<BR/>匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host<BR/>准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_2" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pi_agent" -> "logic" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">session_shutdown</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "pi_agent" -> "logic" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">unregisterMcpServer：结束连接与调用</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "logic" -> "logic_1" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">关闭回环 HTTP</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "logic_2" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">关闭 Scope，取消调用并释放候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`pi_context`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=pi_context,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_documentation {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>产品规范与参考</B></FONT>>,
            likec4_depth=1,
            likec4_id=documentation,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        manual [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MechToolkit 发布与开发指南</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">技能与对外指南作为普通文件随本仓库提交维护；不作为 tools 自举输入。可选本地<BR/>reference 资料独立于仓库结构。</FONT></TD></TR></TABLE>>,
            likec4_id="documentation.manual",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    pi_agent [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi 官方运行时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">外部 Pi v1.0.0，官方提交<BR/>a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP<BR/>客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。</FONT></TD></TR></TABLE>>,
        likec4_id=pi_agent,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Toolkit TypeScript 产品</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。</FONT></TD></TR></TABLE>>,
        likec4_id=toolkit,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pi_agent -> toolkit [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">官方扩展加载、会话事件、MCP 连接与结果交付</FONT></TD></TR></TABLE>>,
        likec4_id=voc1gb,
        minlen=0,
        style=dashed,
        weight=2];
    toolkit -> manual [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">同树版本的 MechToolkit Skill</FONT></TD></TR></TABLE>>,
        likec4_id="5oxgde",
        minlen=1,
        style=dashed];
}
`;case`pi_integration`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=pi_integration,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_pi_plugin {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PI 官方扩展适配</B></FONT>>,
            likec4_depth=2,
            likec4_id="toolkit.pi_plugin",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_logic {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>扩展生命周期与接入</B></FONT>>,
                likec4_depth=1,
                likec4_id="toolkit.pi_plugin.logic",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            registration [group="toolkit.pi_plugin.logic",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">扩展工厂与 flags</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">默认导出扩展工厂调用 PiExtension.register；通过<BR/>registerFlag/getFlag 读取必填 toolkit-mcp-port（整数<BR/>1..65535）和显式 toolkit-assets-config<BR/>文件输入。资产配置缺失以 Option 表达未启用；不补另一份默认值。工厂不打开<BR/>socket、监听或工程。</FONT></TD></TR></TABLE>>,
                likec4_id="toolkit.pi_plugin.logic.registration",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            lifecycle [group="toolkit.pi_plugin.logic",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">会话拥有的工作区资源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">输入 session_start 的新 ctx.cwd、只读配置、注入 logger<BR/>与官方 ExtensionAPI；open 按 Host→HTTP→MCP<BR/>注册建立资源，session_shutdown 按注销 MCP→关闭 HTTP→关闭<BR/>Host<BR/>释放，启动失败逆序释放已取得资源。可取消的前置切换和分叉事件不关闭当前资源；实际替换及</FONT></TD></TR></TABLE>>,
                likec4_id="toolkit.pi_plugin.logic.lifecycle",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            context [group="toolkit.pi_plugin.logic",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Skills 与结果上下文</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">resources_discover 提供同树版本的 MechToolkit<BR/>Skill；tool_call/tool_result<BR/>只关联官方调用标识、结果和取消，不维护工具 schema<BR/>或第二任务状态。会话记录仅保存交付内容与任务标识，跨会话标识不能复活已关闭 Host<BR/>的任务。</FONT></TD></TR></TABLE>>,
                likec4_id="toolkit.pi_plugin.logic.context",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    subgraph cluster_mcp {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MCP 协议接入</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.mcp",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工具合同与 HTTP 接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch<BR/>匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host<BR/>准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.mcp.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_host {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>工作区 HOST</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.host",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.host.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    pi [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi 只读参数归一化</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">PiConfigSource 从扩展传入的 flags 与显式配置输入产生<BR/>ToolkitConfig；当前 read 失败。具体资产配置与凭据来源在入口确定，不读取<BR/>VS Code、不消费环境变量，不创建或同步配置。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.config.logic.pi",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    registration -> lifecycle [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">声明会话唯一工作区资源</FONT></TD></TR></TABLE>>,
        likec4_id="1lvrtot",
        style=dashed,
        weight=4];
    registration -> context [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">绑定官方上下文输入</FONT></TD></TR></TABLE>>,
        likec4_id="1a5bflw",
        style=dashed];
    logic -> logic_1 [arrowhead=normal,
        likec4_id="3c9uus",
        style=dashed,
        weight=2];
    lifecycle -> logic_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">绑定唯一 Host 生命周期合同</FONT></TD></TR></TABLE>>,
        likec4_id="6xps0t",
        style=dashed];
    context -> logic [arrowhead=normal,
        likec4_id="1lsz3jv",
        ltail=cluster_logic,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">启动回环 HTTP，交由 Pi 官方 MCP 客户端消费</FONT></TD></TR></TABLE>>];
    invocations [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">调用记录与取消</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope<BR/>的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生<BR/>Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.invocations",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic_1 -> invocations [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">外部请求登记结果与取消；状态刷新只读取</FONT></TD></TR></TABLE>>,
        likec4_id="1umz6pl",
        minlen=1,
        style=dashed,
        weight=3];
}
`;case`pi_components`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=pi_components,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    registration [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">扩展工厂与 flags</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">默认导出扩展工厂调用 PiExtension.register；通过<BR/>registerFlag/getFlag 读取必填 toolkit-mcp-port（整数<BR/>1..65535）和显式 toolkit-assets-config<BR/>文件输入。资产配置缺失以 Option 表达未启用；不补另一份默认值。工厂不打开<BR/>socket、监听或工程。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.pi_plugin.logic.registration",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lifecycle [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">会话拥有的工作区资源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">输入 session_start 的新 ctx.cwd、只读配置、注入 logger<BR/>与官方 ExtensionAPI；open 按 Host→HTTP→MCP<BR/>注册建立资源，session_shutdown 按注销 MCP→关闭 HTTP→关闭<BR/>Host<BR/>释放，启动失败逆序释放已取得资源。可取消的前置切换和分叉事件不关闭当前资源；实际替换及</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.pi_plugin.logic.lifecycle",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    registration -> lifecycle [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">声明会话唯一工作区资源</FONT></TD></TR></TABLE>>,
        likec4_id="1lvrtot",
        minlen=1,
        style=dashed];
    context [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Skills 与结果上下文</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">resources_discover 提供同树版本的 MechToolkit<BR/>Skill；tool_call/tool_result<BR/>只关联官方调用标识、结果和取消，不维护工具 schema<BR/>或第二任务状态。会话记录仅保存交付内容与任务标识，跨会话标识不能复活已关闭 Host<BR/>的任务。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.pi_plugin.logic.context",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    registration -> context [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">绑定官方上下文输入</FONT></TD></TR></TABLE>>,
        likec4_id="1a5bflw",
        minlen=1,
        style=dashed];
}
`;case`change_plan`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=change_plan,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    change_plan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">变更计划纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">视图编辑、重命名、脚本与 Canvas<BR/>导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing<BR/>调用 Entities 物化内存候选，Entities<BR/>从候选及未改变依赖准备语义输入，Editing<BR/>调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</FONT></TD></TR></TABLE>>,
        likec4_id="pure.change_plan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">纯符号表与调用图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">基于实体快照、第一层 LocalAst<BR/>和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层<BR/>Context 或转换依据</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.analysis",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    change_plan -> analysis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只读符号表与调用图</FONT></TD></TR></TABLE>>,
        likec4_id="8j3odq",
        style=dashed,
        weight=2];
    logic_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程设置、路径、GUID 与权威逻辑实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">解析工程设置、路径、GUID 与逻辑实体合同；输入由调用方提供，不读取工程。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.project_model.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    change_plan -> logic_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">复用实体快照与统一操作合同</FONT></TD></TR></TABLE>>,
        likec4_id="1wpfvy1",
        style=dashed];
    device_context [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">全局变量、零件元数据与零件上下文</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">承载调用方提供的变量、元数据和脚本关联；不现场查询工程。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.script.context.device_context",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    local_ast [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">局部 AST</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.script.ast.local_ast",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    device_context -> local_ast [arrowhead=normal,
        likec4_id="4lxv4v",
        style=dashed,
        weight=2];
    device_context -> logic_1 [arrowhead=normal,
        likec4_id="1n712sn",
        style=dashed];
    logic [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">四向格式转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 Canvas 节点为中心的纯计算。Base64 是原版旧数据兼容格式。</FONT></TD></TR></TABLE>>,
        likec4_id="pure.canvas.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis -> local_ast [arrowhead=normal,
        likec4_id="18grj51",
        style=dashed,
        weight=2];
    analysis -> logic_1 [arrowhead=normal,
        likec4_id=eyajml,
        style=dashed,
        weight=3];
    local_ast -> logic_1 [arrowhead=normal,
        likec4_id="27186q",
        style=dashed];
}
`;case`frontend_canvas_display`:return`digraph {
  likec4_viewId = "frontend_canvas_display";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "plugin" [
    likec4_id = "frontend.plugin";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">VSCode 宿主与 Effect 组合根</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">绑定原生配置、webview 与同一 Host<BR/>生命周期；组件经具名入口获取和关闭，调用方以 try/finally<BR/>持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas<BR/>预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示<BR/>PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "preview" [
    likec4_id = "toolkit.preview";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 预览业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU<BR/>后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG<BR/>结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "renderer" [
    likec4_id = "renderer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas CPU 渲染引擎</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">结构化<BR/>CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经<BR/>CanvasKit/Skia CPU surface 输出<BR/>PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "plugin" -> "logic" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">文档定位源身份；同一 Host.openPreview，面板持有<BR/>take/close 资源</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取具名 HTML/XML 与完整来源基准</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "preview" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">同一 viewport、字体、显式时间与唯一 CPU 后端</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "preview" -> "entities" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取本次实际引用资源及 revision</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "preview" -> "renderer" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">共用 CPU 渲染，交付 PNG 与最终基准</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">工程变化的同次影响驱动已有展示；前端只消费产物</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`initial_read`:return`digraph {
  likec4_viewId = "initial_read";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "files" [
    likec4_id = "toolkit.files";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "semantic" [
    likec4_id = "toolkit.semantic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">语义装配（设计）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON<BR/>合同导入导出平台数据与文档，SemanticAssembly<BR/>消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context<BR/>和转换依据。复用既有身份、Context<BR/>及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ts" [
    likec4_id = "toolkit.conversion.ts";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">零件与 TS 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context<BR/>和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope<BR/>仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "html" [
    likec4_id = "toolkit.conversion.html";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">独立 Canvas 与 HTML 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立<BR/>Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML<BR/>视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views<BR/>唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由<BR/>Preview/Renderer 独立交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "preview" [
    likec4_id = "toolkit.preview";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 预览业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU<BR/>后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG<BR/>结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "files" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">建立监听并等待 ready；期间实际变化保持登记</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "entities" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">首次完整装配与确定读取基准；后续批次复用同一实体服务按变化目录重读</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "entities" -> "semantic" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按快照装配完整 Context 与转换依据</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按模式交付具名视图</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "view_service" -> "ts" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">零件到 TS 视图</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "view_service" -> "html" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Canvas 到 HTML/XML 视图</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "entities" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">files：枚举现存派生路径；memory 跳过</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">files：按完整源声明计算发布和删除；解析失败保留未确定范围，路径冲突交付诊断</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "preview" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">files Canvas：以固定视口、字体和时间渲染同次视图</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">files Canvas：交回同次 PNG 与实际依赖，装配展示壳</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "entities" -> "view_service" [
    likec4_id = "step-11";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">files：执行派生发布和删除；期间监听变化仍由 Host 批次处理</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`diagnostics_read`:return`digraph {
  likec4_viewId = "diagnostics_read";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "diagnostics" [
    likec4_id = "toolkit.diagnostics";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">诊断业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_1" [
    likec4_id = "toolkit.analysis.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">纯分析计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费实体快照、第一层 LocalAst<BR/>及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的<BR/>SDK 文档准备，不读取文件、不持有状态</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "lint" [
    likec4_id = "toolkit.lint";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">脚本静态检查纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整<BR/>Context，CallGraphLint<BR/>每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "diagnostics" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">inspect：明确基准与请求</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "diagnostics" -> "entities" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">主动读取确定快照</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "diagnostics" -> "logic_1" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">复用同次实体读取已计算的符号与调用关系</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "diagnostics" -> "lint" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按绑定执行 ScriptLint，再对同一完整图执行一次<BR/>CallGraphLint；交付具名诊断</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`preview_read`:return`digraph {
  likec4_viewId = "preview_read";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "preview" [
    likec4_id = "toolkit.preview";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 预览业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU<BR/>后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG<BR/>结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "renderer" [
    likec4_id = "renderer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas CPU 渲染引擎</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">结构化<BR/>CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经<BR/>CanvasKit/Skia CPU surface 输出<BR/>PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "view_service" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取具名 HTML/XML 视图</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "preview" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付结构化 Canvas 与明确渲染输入</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "preview" -> "entities" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按实际基准读取资源</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "preview" -> "renderer" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">进程内 CPU 渲染并返回 PNG 与诊断</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`source_refresh`:return`digraph {
  likec4_viewId = "source_refresh";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "files" [
    likec4_id = "toolkit.files";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ts" [
    likec4_id = "toolkit.conversion.ts";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">零件与 TS 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context<BR/>和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope<BR/>仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "html" [
    likec4_id = "toolkit.conversion.html";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">独立 Canvas 与 HTML 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立<BR/>Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML<BR/>视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views<BR/>唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由<BR/>Preview/Renderer 独立交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "preview" [
    likec4_id = "toolkit.preview";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 预览业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU<BR/>后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG<BR/>结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "files" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">take：取得精确变化路径</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "entities" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">批次刷新：单次许可内分类、重读并取得同次完整语义基准，交付派生路径及更新删除标识</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">refresh：交付实际变化、基准和展示依赖，取得受影响视图及展示</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "entities" -> "view_service" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取格式实体与实际资源</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "view_service" -> "ts" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">更新或删除 TS 派生结果</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "view_service" -> "html" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">更新或删除 HTML 派生结果</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "preview" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">files Canvas：以固定视口、字体和时间渲染同次视图，取得 PNG<BR/>与实际依赖</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">files Canvas：交回 PNG 与依赖，装配 HTML 展示壳</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "entities" -> "view_service" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">files：发布或删除派生内容；TS 正文与索引同批交付</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "logic" -> "preview" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">按实际影响刷新已打开的展示；memory 仅按展示请求生成视图</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`commit_refresh`:return`digraph {
  likec4_viewId = "commit_refresh";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "editing" [
    likec4_id = "toolkit.editing";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change<BR/>Plan 形成统一 EntityChange/Schematics<BR/>候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用<BR/>Views。TODO：编辑与重构编排。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "files" [
    likec4_id = "toolkit.files";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "editing" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">提交明确候选与原读取基准</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "entities" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">commit：核对基准并提交</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "entities" -> "files" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">实际 IO；成功或失败均重读磁盘事实</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "entities" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付同次实际重读结果及写入或重读错误</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "logic" -> "editing" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交付实际变化与错误；重读失败时不生成变化集合</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">重读成功时按实际变化刷新，包括写入失败或请求中断后的收尾</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`refactor_prepare`:return`digraph {
  likec4_viewId = "refactor_prepare";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "editing" [
    likec4_id = "toolkit.editing";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change<BR/>Plan 形成统一 EntityChange/Schematics<BR/>候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用<BR/>Views。TODO：编辑与重构编排。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "change_plan" [
    likec4_id = "pure.change_plan";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">变更计划纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">视图编辑、重命名、脚本与 Canvas<BR/>导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing<BR/>调用 Entities 物化内存候选，Entities<BR/>从候选及未改变依赖准备语义输入，Editing<BR/>调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic_1" [
    likec4_id = "toolkit.analysis.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">纯分析计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费实体快照、第一层 LocalAst<BR/>及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的<BR/>SDK 文档准备，不读取文件、不持有状态</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "editing" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">refactor：目标与原读取基准</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "entities" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取目标、关联实体与完整语义基准</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "change_plan" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">同次快照、分析与 RefactorChangePlanRequest</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "entities" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">物化统一 EntityChange，从候选及未改变依赖准备语义输入，零写入</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "editing" -> "logic_1" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">分析候选语义并校验受影响绑定，提交复用 commit</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`workspace_close`:return`digraph {
  likec4_viewId = "workspace_close";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "logic" [
    likec4_id = "toolkit.host.logic";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "invocations" [
    likec4_id = "toolkit.invocations";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">调用记录与取消</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope<BR/>的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生<BR/>Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "view_service" [
    likec4_id = "toolkit.view_service";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "entities" [
    likec4_id = "toolkit.entities";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "files" [
    likec4_id = "toolkit.files";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "logic" -> "invocations" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">结束调用与取消等待</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "view_service" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">释放派生关联与转换资源</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "entities" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">释放文件派生快照</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "logic" -> "files" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">关闭唯一监听与 IO Scope</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`workspace_lifecycle`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=workspace_lifecycle,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_host {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>工作区 HOST</B></FONT>>,
            likec4_depth=2,
            likec4_id="toolkit.host",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_logic {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>HOST 组合根与受控入口</B></FONT>>,
                likec4_depth=1,
                likec4_id="toolkit.host.logic",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            lifecycle [group="toolkit.host.logic",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">唯一工作区生命周期</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host.open 建立工作区 Scope 和唯一配置输入；Host.close<BR/>取消调用并释放实体、监听和转换缓存。</FONT></TD></TR></TABLE>>,
                likec4_id="toolkit.host.logic.lifecycle",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            refresh [group="toolkit.host.logic",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">唯一文件变化主动调度</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在唯一工作区 Scope 消费监听批次，主动调用实体分类与源重读，再把实际结果交给<BR/>Views；按 Views 返回的影响调用具名 Preview<BR/>请求刷新已打开展示。源与派生分类归 Entities，影响计算、files 发布及<BR/>memory 按需交付归 Views，绘制归 Preview/Renderer。Host<BR/>在同一工作区串行编排监听批次、编辑提交、资产确认及业务读取触发的实体重建与派生交付，防止较旧结果覆盖较新结果；展示登记与首次内容读取也在此边界衔接，避免漏掉源变化。已处于该边界的调用不重复获取，实体许可释放后</FONT></TD></TR></TABLE>>,
                likec4_id="toolkit.host.logic.refresh",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            composition [group="toolkit.host.logic",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">服务组合根</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">装配唯一 files 与 watcher，等待监听 ready 后创建<BR/>entities，再装配 conversion、views 与业务；所有业务入口通过同一<BR/>Host。组合根拥有服务生命周期，不执行转换或编辑算法。</FONT></TD></TR></TABLE>>,
                likec4_id="toolkit.host.logic.composition",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    subgraph cluster_entities {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>第二层：工程实体</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.entities",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        assembly [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">逻辑来源与单次归属装配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">LogicalEntitySources 按格式声明读取来源；EntityAssembly<BR/>私有拥有同次实体、诊断和归属集合，通过实体目录声明登记父级并生成最终快照，查询仅交付只读集合，不跨快照保留状态。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.entities.assembly",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        refresh_1 [group="toolkit.entities",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">显式重读与基准交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接受 Host<BR/>传入的精确路径批次，在与提交共享的单次串行许可内分类源与派生路径、重读源目录并取得同次语义基准，一并交付派生路径及实际更新删除标识；派生目录事件保留目录范围供<BR/>Views 计算受影响产物。重读 IO<BR/>失败后由后续源事件或业务读取触发共享的完整重建，以最后成功发布的逻辑快照与重建结果计算实际变化并交<BR/>Host</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.entities.refresh",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        transaction [group="toolkit.entities",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">提交与实际重读</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接受 Editing 的唯一 EntityChange<BR/>候选；在实体串行边界核对文件、目录和固定输入的完整读取基准，经 Schematics<BR/>提交实际文件，再重读实际结果更新文件派生快照并交付更新删除标识。写入中途失败仍重读实际文件，保留写入与重读的错误事实；成功交付实际结果供<BR/>Host 刷新。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.entities.transaction",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        state [group="toolkit.entities",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">文件派生实体快照</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；MST 持有文件派生快照和不可变逻辑快照，提供快照替换、读取及<BR/>GUID<BR/>身份查询。重读、语义装配、完整基准读取与派生文件发布由实体服务编排，不进入状态容器。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.entities.state",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_view_service {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>第三层：视图关联与交付</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.view_service",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        refresh_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">唯一派生刷新</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host<BR/>提供完整实体基准、源更新删除、已登记派生产物的实际变化及各展示登记的实际依赖；Views<BR/>根据唯一源到视图关联计算影响并调用共享转换，按展示登记身份交付受影响和已删除结果。files<BR/>的 Canvas HTML 发布前交付具名视图给 Host，Host 以固定<BR/>1080×2160、时间 0 和组合根字体及后端调用 Preview，将同次 PNG 交回</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.view_service.refresh",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    lifecycle -> refresh [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">启动工作区 Scope 内的单一监听消费</FONT></TD></TR></TABLE>>,
        likec4_id="1iu9g4h",
        style=dashed,
        weight=4];
    lifecycle -> composition [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">建立与释放同一工作区服务</FONT></TD></TR></TABLE>>,
        likec4_id="1bjtvus",
        style=dashed];
    files [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.files",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    invocations [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">调用记录与取消</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope<BR/>的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生<BR/>Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.invocations",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    refresh -> composition [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取同一工作区共享实例</FONT></TD></TR></TABLE>>,
        likec4_id="1ey1zj",
        style=dashed,
        weight=4];
    refresh -> refresh_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">按实际目录批次重读文件</FONT></TD></TR></TABLE>>,
        likec4_id="1gumydz",
        style=dashed];
    refresh -> refresh_2 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">刷新端口复用实际视图及预览影响结果，执行保持 TODO</FONT></TD></TR></TABLE>>,
        likec4_id=r40yg5,
        minlen=1,
        style=dashed];
    composition -> files [arrowhead=normal,
        likec4_id="1dck7kv",
        ltail=cluster_logic,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Host 装配并单一消费文件变化；工程业务 IO 归实体</FONT></TD></TR></TABLE>>];
    composition -> invocations [arrowhead=normal,
        likec4_id="1umz6pl",
        ltail=cluster_logic,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">外部请求登记结果与取消；状态刷新只读取</FONT></TD></TR></TABLE>>];
    refresh_1 -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">比较实际重读前后的逻辑实体事实</FONT></TD></TR></TABLE>>,
        likec4_id=fitk5c,
        style=dashed,
        weight=4];
    transaction -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交收尾重读实际文件并更新快照或错误结果</FONT></TD></TR></TABLE>>,
        likec4_id="16nlpdl",
        minlen=1,
        style=dashed];
}
`;case`read_flow`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=read_flow,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_conversion {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>仅缓存状态的转换服务</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.conversion",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ts [group="toolkit.conversion",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">零件与 TS 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context<BR/>和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope<BR/>仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.ts",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        html [group="toolkit.conversion",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">独立 Canvas 与 HTML 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立<BR/>Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML<BR/>视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views<BR/>唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由<BR/>Preview/Renderer 独立交付。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.html",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        canvas [group="toolkit.conversion",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 与 HTML 片段双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Canvas 实体、Base64 与 Hjson 和 HTML<BR/>片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区<BR/>Scope，按方向、输入和实际资源指纹失效</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.canvas",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_analysis {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>纯符号表与调用图</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.analysis",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">纯分析计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费实体快照、第一层 LocalAst<BR/>及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的<BR/>SDK 文档准备，不读取文件、不持有状态</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.analysis.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    view_service [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.view_service",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    view_service -> ts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图唯一驱动转换与缓存释放</FONT></TD></TR></TABLE>>,
        likec4_id="15l4i38",
        style=dashed];
    view_service -> html [arrowhead=normal,
        likec4_id="15cuzzi",
        style=dashed];
    entities [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.entities",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    view_service -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图主动读取实体；派生结果经实体入口交付</FONT></TD></TR></TABLE>>,
        likec4_id="1v65nko",
        style=dashed,
        weight=2];
    language [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">语言查询业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">输入工程相对文档标识、文本版本、完整基准与取消信号，按查询种类接收位置或文档范围；读取同次实体、分析和诊断，交付定义、引用、悬停、诊断、文档链接、符号及语义<BR/>token。文档来源与方法绑定分别确定；共享源码查询保留全部实际引用作用域，零件视图使用对应绑定。结果携带文档版本和实际依赖，源定位与生成视图坐标按真实映射交付；LSP<BR/>接入层只转换标准消息。实体层拥有工程状态，查询结果不产生第二状态树。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.language",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    diagnostics [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">诊断业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.diagnostics",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    language -> diagnostics [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享诊断服务和唯一结果类型</FONT></TD></TR></TABLE>>,
        likec4_id=yzkur0,
        style=dashed,
        weight=2];
    language -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享实体服务与完整读取基准</FONT></TD></TR></TABLE>>,
        likec4_id="1d5a4hx",
        style=dashed,
        weight=2];
    lint [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">脚本静态检查纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整<BR/>Context，CallGraphLint<BR/>每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.lint",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    diagnostics -> lint [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">调用纯检查，诊断状态归 Diagnostics</FONT></TD></TR></TABLE>>,
        likec4_id="1qaf7j5",
        style=dashed,
        weight=2];
    diagnostics -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">诊断主动读取实体快照</FONT></TD></TR></TABLE>>,
        likec4_id="1ocmz6r",
        style=dashed,
        weight=2];
    diagnostics -> logic [arrowhead=normal,
        likec4_id="1v9dzho",
        style=dashed];
    ts -> canvas [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">内部 Canvas 双向转换</FONT></TD></TR></TABLE>>,
        likec4_id=p3hzd1,
        style=dashed,
        weight=2];
    ts -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付</FONT></TD></TR></TABLE>>,
        likec4_id="1vvg3q",
        style=dashed];
    html -> canvas [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享片段服务的工作区装配</FONT></TD></TR></TABLE>>,
        likec4_id=lird4v,
        style=dashed,
        weight=2];
    html -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">独立 Canvas 与视图实体</FONT></TD></TR></TABLE>>,
        likec4_id="1mpc4e4",
        style=dashed];
    lint -> logic [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">分析结果</FONT></TD></TR></TABLE>>,
        likec4_id=lfgfon,
        style=dashed];
    canvas -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">实体输入与资源依赖</FONT></TD></TR></TABLE>>,
        likec4_id="1454bu1",
        style=dashed];
    files [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.files",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entities -> files [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">实体层唯一业务 IO；读取与提交分别授权到文件</FONT></TD></TR></TABLE>>,
        likec4_id=s8mehu,
        minlen=1,
        style=dashed,
        weight=2];
    semantic [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">语义装配（设计）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON<BR/>合同导入导出平台数据与文档，SemanticAssembly<BR/>消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context<BR/>和转换依据。复用既有身份、Context<BR/>及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.semantic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entities -> semantic [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">快照语义装配</FONT></TD></TR></TABLE>>,
        likec4_id="1qb7q1p",
        style=dashed,
        weight=2];
    semantic -> logic [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">符号表与调用图</FONT></TD></TR></TABLE>>,
        likec4_id=qfckz6,
        style=dashed];
}
`;case`write_flow`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=write_flow,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_entities {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>第二层：工程实体</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.entities",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        assembly [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">逻辑来源与单次归属装配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">LogicalEntitySources 按格式声明读取来源；EntityAssembly<BR/>私有拥有同次实体、诊断和归属集合，通过实体目录声明登记父级并生成最终快照，查询仅交付只读集合，不跨快照保留状态。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.entities.assembly",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        refresh [group="toolkit.entities",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">显式重读与基准交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接受 Host<BR/>传入的精确路径批次，在与提交共享的单次串行许可内分类源与派生路径、重读源目录并取得同次语义基准，一并交付派生路径及实际更新删除标识；派生目录事件保留目录范围供<BR/>Views 计算受影响产物。重读 IO<BR/>失败后由后续源事件或业务读取触发共享的完整重建，以最后成功发布的逻辑快照与重建结果计算实际变化并交<BR/>Host</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.entities.refresh",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        transaction [group="toolkit.entities",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">提交与实际重读</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接受 Editing 的唯一 EntityChange<BR/>候选；在实体串行边界核对文件、目录和固定输入的完整读取基准，经 Schematics<BR/>提交实际文件，再重读实际结果更新文件派生快照并交付更新删除标识。写入中途失败仍重读实际文件，保留写入与重读的错误事实；成功交付实际结果供<BR/>Host 刷新。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.entities.transaction",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        state [group="toolkit.entities",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">文件派生实体快照</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；MST 持有文件派生快照和不可变逻辑快照，提供快照替换、读取及<BR/>GUID<BR/>身份查询。重读、语义装配、完整基准读取与派生文件发布由实体服务编排，不进入状态容器。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.entities.state",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_conversion {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>仅缓存状态的转换服务</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.conversion",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ts [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">零件与 TS 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context<BR/>和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope<BR/>仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.ts",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        html [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">独立 Canvas 与 HTML 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立<BR/>Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML<BR/>视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views<BR/>唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由<BR/>Preview/Renderer 独立交付。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.html",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    editing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change<BR/>Plan 形成统一 EntityChange/Schematics<BR/>候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用<BR/>Views。TODO：编辑与重构编排。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.editing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    change_plan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">变更计划纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">视图编辑、重命名、脚本与 Canvas<BR/>导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing<BR/>调用 Entities 物化内存候选，Entities<BR/>从候选及未改变依赖准备语义输入，Editing<BR/>调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</FONT></TD></TR></TABLE>>,
        likec4_id="pure.change_plan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    editing -> change_plan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">统一变更计划与候选</FONT></TD></TR></TABLE>>,
        likec4_id="153fvcw",
        style=dashed,
        weight=2];
    editing -> ts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图反向转换</FONT></TD></TR></TABLE>>,
        likec4_id=xann5z,
        minlen=1,
        style=dashed,
        weight=2];
    editing -> html [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">独立 Canvas 反向转换</FONT></TD></TR></TABLE>>,
        likec4_id=xljdh9,
        minlen=1,
        style=dashed,
        weight=2];
    logic [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">纯分析计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费实体快照、第一层 LocalAst<BR/>及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的<BR/>SDK 文档准备，不读取文件、不持有状态</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.analysis.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    change_plan -> logic [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只读符号表与调用图</FONT></TD></TR></TABLE>>,
        likec4_id="9b3nvy",
        minlen=1,
        style=dashed];
    refresh_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">唯一派生刷新</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host<BR/>提供完整实体基准、源更新删除、已登记派生产物的实际变化及各展示登记的实际依赖；Views<BR/>根据唯一源到视图关联计算影响并调用共享转换，按展示登记身份交付受影响和已删除结果。files<BR/>的 Canvas HTML 发布前交付具名视图给 Host，Host 以固定<BR/>1080×2160、时间 0 和组合根字体及后端调用 Preview，将同次 PNG 交回</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.view_service.refresh",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    assembly -> refresh_1 [style=invis];
    refresh -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">比较实际重读前后的逻辑实体事实</FONT></TD></TR></TABLE>>,
        likec4_id=fitk5c,
        minlen=1,
        style=dashed];
    transaction -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交收尾重读实际文件并更新快照或错误结果</FONT></TD></TR></TABLE>>,
        likec4_id="16nlpdl",
        minlen=1,
        style=dashed];
    files [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.files",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    state -> files [arrowhead=normal,
        likec4_id=s8mehu,
        ltail=cluster_entities,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">实体层唯一业务 IO；读取与提交分别授权到文件</FONT></TD></TR></TABLE>>];
}
`;case`preview_flow`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=preview_flow,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_host {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>工作区 HOST</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.host",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.host.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    plugin [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">VSCode 宿主与 Effect 组合根</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">绑定原生配置、webview 与同一 Host<BR/>生命周期；组件经具名入口获取和关闭，调用方以 try/finally<BR/>持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas<BR/>预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示<BR/>PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。</FONT></TD></TR></TABLE>>,
        likec4_id="frontend.plugin",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plugin -> logic [arrowhead=normal,
        likec4_id="7py01v",
        minlen=1,
        style=dashed];
    preview [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 预览业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU<BR/>后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG<BR/>结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.preview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> preview [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令</FONT></TD></TR></TABLE>>,
        likec4_id="1o0krs0",
        style=dashed,
        weight=3];
    entities [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.entities",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Host 主动重读实体；WorkspaceServices 读取状态</FONT></TD></TR></TABLE>>,
        likec4_id="1mhoktz",
        style=dashed,
        weight=3];
    preview -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">预览只读实体资源</FONT></TD></TR></TABLE>>,
        likec4_id="1sllrx9",
        style=dashed,
        weight=2];
    renderer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas CPU 渲染引擎</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">结构化<BR/>CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经<BR/>CanvasKit/Skia CPU surface 输出<BR/>PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。</FONT></TD></TR></TABLE>>,
        likec4_id=renderer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    preview -> renderer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">复用唯一渲染引擎</FONT></TD></TR></TABLE>>,
        likec4_id=bnuwgt,
        minlen=1,
        style=dashed];
}
`;case`bescript_first_layer`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=bescript_first_layer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_conversion {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>三层纯转换设计</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.script.conversion",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        first [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BEScript 文本与局部 AST 转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Issue 45<BR/>的实现归属：唯一正文词法、控制结构、调用与反向序列化入口；依赖文本合同和局部<BR/>AST，不依赖 Host</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.conversion.first",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_ast {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>局部 AST 层</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.script.ast",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        local_ast [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">局部 AST</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.ast.local_ast",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_text {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>原版文本层</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.script.text",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        code_file [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">.code 文件</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">解析文件版本、头部与原始正文；正文语义交由第一层转换。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.text.code_file",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        vocabulary [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">类型与转义</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">定义 BEScript 词汇类型与有限转义；不解析控制结构或读取工程。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.text.vocabulary",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    first -> local_ast [arrowhead=normal,
        likec4_id="2v6qka",
        style=dashed,
        weight=3];
    first -> code_file [arrowhead=normal,
        likec4_id=zgcb4x,
        style=dashed,
        weight=3];
    first -> vocabulary [arrowhead=normal,
        likec4_id="1sr25j3",
        style=dashed,
        weight=3];
    bescript [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BEScript 内部格式</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    first -> bescript [arrowhead=normal,
        likec4_id=ciduwf,
        style=dashed];
    local_ast -> code_file [arrowhead=normal,
        likec4_id="8fvj8x",
        style=dashed,
        weight=3];
    local_ast -> vocabulary [arrowhead=normal,
        likec4_id="141rezz",
        style=dashed,
        weight=3];
    local_ast -> bescript [arrowhead=normal,
        likec4_id="1p5137j",
        style=dashed];
    code_file -> vocabulary [arrowhead=normal,
        likec4_id="4njnw4",
        minlen=0,
        style=dashed,
        weight=5];
    code_file -> bescript [arrowhead=normal,
        likec4_id="18fu1tw",
        style=dashed];
    vocabulary -> bescript [arrowhead=normal,
        likec4_id="1r7eph6",
        style=dashed];
}
`;case`bescript_second_layer`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=bescript_second_layer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_conversion {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>三层纯转换设计</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.script.conversion",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        second [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Context 与官方 TS AST 业务转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Issue 46 的实现归属：DeviceTsConverter<BR/>组合零件外壳、全局变量与组，单向调用 MethodMapping<BR/>完成方法来源、签名、可见性及正文双向映射；变量、调用和 Canvas<BR/>各由所属映射负责。仅消费 Context<BR/>与显式语义输入，不读取工程或缓存；可接受第三层传入的同身份官方方法节点以避免重复生成，不持有缓存或失效规则</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.conversion.second",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_context {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>零件上下文层</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.script.context",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        device_context [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">全局变量、零件元数据与零件上下文</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">承载调用方提供的变量、元数据和脚本关联；不现场查询工程。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.context.device_context",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_ast {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>局部 AST 层</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.script.ast",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        local_ast [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">局部 AST</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.ast.local_ast",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    tests [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程格式测试</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">验证工程格式纯计算的合法、非法与保真行为；不修改源夹具。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.project_model.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程设置、路径、GUID 与权威逻辑实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">解析工程设置、路径、GUID 与逻辑实体合同；输入由调用方提供，不读取工程。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.project_model.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> logic_1 [arrowhead=normal,
        likec4_id="14dubtt",
        minlen=0,
        style=dashed,
        weight=4];
    logic [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">四向格式转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 Canvas 节点为中心的纯计算。Base64 是原版旧数据兼容格式。</FONT></TD></TR></TABLE>>,
        likec4_id="pure.canvas.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    second -> logic [arrowhead=normal,
        likec4_id="1wczzkp",
        minlen=1,
        style=dashed];
    second -> device_context [arrowhead=normal,
        likec4_id=ttdudh,
        style=dashed,
        weight=4];
    second -> local_ast [arrowhead=normal,
        likec4_id="1lghoj4",
        style=dashed,
        weight=4];
    second -> logic_1 [arrowhead=normal,
        likec4_id="7vf0dk",
        style=dashed,
        weight=3];
    bescript [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BEScript 内部格式</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    second -> bescript [arrowhead=normal,
        likec4_id="1kn27s5",
        style=dashed,
        weight=2];
    device_context -> local_ast [arrowhead=normal,
        likec4_id="4lxv4v",
        style=dashed,
        weight=3];
    device_context -> logic_1 [arrowhead=normal,
        likec4_id="1n712sn",
        style=dashed,
        weight=2];
    device_context -> bescript [arrowhead=normal,
        likec4_id="1ojmxt6",
        style=dashed];
    local_ast -> logic_1 [arrowhead=normal,
        likec4_id="27186q",
        style=dashed,
        weight=2];
    local_ast -> bescript [arrowhead=normal,
        likec4_id="1p5137j",
        style=dashed];
}
`;case`bescript_third_layer`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=bescript_third_layer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_host {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>工作区 HOST</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.host",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.host.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_conversion {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>仅缓存状态的转换服务</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.conversion",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ts [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">零件与 TS 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context<BR/>和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope<BR/>仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.ts",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        canvas [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 与 HTML 片段双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Canvas 实体、Base64 与 Hjson 和 HTML<BR/>片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区<BR/>Scope，按方向、输入和实际资源指纹失效</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.canvas",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_script {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BESCRIPT 纯计算包</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.script",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        third [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">官方 TS 解析打印与局部装配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Issue 47 的实现归属：官方 parser、factory、printer<BR/>和有独立差分依据的局部片段装配；结合第二层来源与方法绑定按最终文本交付 BeScript<BR/>与 TS 的逐行映射，当前仅有方法边界，逐行映射待接入。缓存状态由 TS<BR/>转换服务显式传入，无进程全局状态，无 BEScript 业务解释</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.conversion.third",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    view_service [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.view_service",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> view_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Host 主动驱动视图；WorkspaceServices 装配</FONT></TD></TR></TABLE>>,
        likec4_id=nlg1xh,
        style=dashed,
        weight=2];
    logic -> ts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 仅装配；缓存由视图驱动</FONT></TD></TR></TABLE>>,
        likec4_id=l211qz,
        style=dashed,
        weight=2];
    logic -> canvas [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 仅装配共享转换</FONT></TD></TR></TABLE>>,
        likec4_id="1e755g",
        style=dashed];
    view_service -> ts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图唯一驱动转换与缓存释放</FONT></TD></TR></TABLE>>,
        likec4_id="15l4i38",
        style=dashed,
        weight=3];
    ts -> canvas [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">内部 Canvas 双向转换</FONT></TD></TR></TABLE>>,
        likec4_id=p3hzd1,
        minlen=0,
        style=dashed,
        weight=4];
    ts -> third [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">官方 TS 解析打印合同</FONT></TD></TR></TABLE>>,
        likec4_id=isiqz3,
        style=dashed,
        weight=2];
    bescript [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BEScript 内部格式</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    ts -> bescript [arrowhead=normal,
        likec4_id=hiqq43,
        style=dashed,
        weight=2];
    third -> bescript [arrowhead=normal,
        likec4_id="1oqmeu",
        style=dashed];
}
`;case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    frontend [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">单一前端扩展</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供 VS Code 配置、侧栏与 Host 接入；领域状态保留在 Toolkit。</FONT></TD></TR></TABLE>>,
        likec4_id=frontend,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Toolkit TypeScript 产品</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。</FONT></TD></TR></TABLE>>,
        likec4_id=toolkit,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    frontend -> toolkit [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=dht39m,
        style=dashed];
    toolkit -> frontend [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">通过原生配置适配验证当前值、边界与读取失败</FONT></TD></TR></TABLE>>,
        likec4_id="1t0kw96",
        style=dashed];
    canvas [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 渲染产品</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">组织 Canvas 渲染行为验证；正式渲染逻辑由 renderer 拥有。</FONT></TD></TR></TABLE>>,
        likec4_id=canvas,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> canvas [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=coigks,
        style=dashed];
    pure [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">业务纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。</FONT></TD></TR></TABLE>>,
        likec4_id=pure,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> pure [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=ve3bhy,
        style=dashed];
    canvas -> pure [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">由真实转换构造合法文档，以二进制前后比较验证输入保真</FONT></TD></TR></TABLE>>,
        likec4_id="15q9368",
        style=dashed];
    pure -> toolkit [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="8tnsdy",
        style=dashed];
}
`;case`runtime`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=runtime,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    pi_plugin [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pi 官方扩展适配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Pi 进程内加载扩展；会话开始创建 memory Host 与回环 HTTP<BR/>MCP，使用官方 registerMcpServer 消费唯一 MCP<BR/>工具合同。会话结束注销连接并释放 Host；文本、HTML/XML、PNG 和错误由官方<BR/>MCP 客户端交付。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.pi_plugin",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工作区 Host</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">拥有单工作区服务生命周期、共享装配与受控入口；领域事实由实体服务提供。共享文件和<BR/>Canvas 测试资源由 test_support 单独承载，供各现役测试主动持有和释放。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.host",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pi_plugin -> host [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="5fg2qt",
        style=dashed];
    mcp [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MCP 协议接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供协议工具与传输接入；领域操作经 Host，不直接访问工程文件。预览消费 Host 的<BR/>PNG，资产结果消费任务交付的已校验原图及实际 MIME，协议边界编码原生图像内容。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.mcp",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pi_plugin -> mcp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">启动回环 HTTP，交由 Pi 官方 MCP 客户端消费</FONT></TD></TR></TABLE>>,
        likec4_id="1hz4l2z",
        style=dashed];
    config [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">配置来源抽象与实现</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">定义只读配置来源合同；默认值由前端原生配置声明。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.config",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pi_plugin -> config [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">官方显式参数进入统一只读配置</FONT></TD></TR></TABLE>>,
        likec4_id=b3gf7z,
        style=dashed];
    lint_tests [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">脚本静态检查合同测试</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">使用真实解析、零件 Context<BR/>和调用分析验证纯检查空壳明确失败及输入保真；规则行为待正式实现验收。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.lint_tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">脚本静态检查纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整<BR/>Context，CallGraphLint<BR/>每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.lint",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint_tests -> lint [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">调用纯检查空壳</FONT></TD></TR></TABLE>>,
        likec4_id="1dly2mo",
        style=dashed];
    analysis [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">纯符号表与调用图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">基于实体快照、第一层 LocalAst<BR/>和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层<BR/>Context 或转换依据</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.analysis",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint_tests -> analysis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">构建同次方法绑定及调用图</FONT></TD></TR></TABLE>>,
        likec4_id=kcwycd,
        style=dashed];
    script [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BEScript 纯计算包</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">数据合同与三层纯转换设计分开登记；纯转换函数不读取工程或拥有跨请求缓存，TS<BR/>视图转换服务持有缓存状态并传入完整语义依据</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.script",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint_tests -> script [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1p91hr4",
        style=dashed];
    project_model [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程格式纯计算包</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供工程格式数据合同和纯计算；不持有 IO、Host 或实体运行状态。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.project_model",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint_tests -> project_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提供真实逻辑实体输入</FONT></TD></TR></TABLE>>,
        likec4_id="1l21ktm",
        style=dashed];
    language_tests [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">语言查询合同测试</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">真实实体与诊断 Layer<BR/>装配，验证四类查询空壳失败、请求保真及源工程零写入；正式查询行为待实现。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.language_tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    language_tests -> host [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">独占测试工程生命周期</FONT></TD></TR></TABLE>>,
        likec4_id="1qt8ypu",
        style=dashed];
    language [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">语言查询业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">输入工程相对文档标识、文本版本、完整基准与取消信号，按查询种类接收位置或文档范围；读取同次实体、分析和诊断，交付定义、引用、悬停、诊断、文档链接、符号及语义<BR/>token。文档来源与方法绑定分别确定；共享源码查询保留全部实际引用作用域，零件视图使用对应绑定。结果携带文档版本和实际依赖，源定位与生成视图坐标按真实映射交付；LSP<BR/>接入层只转换标准消息。实体层拥有工程状态，查询结果不产生第二状态树。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.language",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    language_tests -> language [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">真实装配与四类请求执行</FONT></TD></TR></TABLE>>,
        likec4_id=ntvpkg,
        style=dashed];
    diagnostics [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">诊断业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.diagnostics",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    language_tests -> diagnostics [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">注入真实诊断 Layer</FONT></TD></TR></TABLE>>,
        likec4_id=d4mr86,
        style=dashed];
    entities [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.entities",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    language_tests -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">建立真实实体 Layer</FONT></TD></TR></TABLE>>,
        likec4_id="1bre0an",
        style=dashed];
    files [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.files",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    language_tests -> files [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">建立真实文件边界</FONT></TD></TR></TABLE>>,
        likec4_id=cq67yv,
        style=dashed];
    language_tests -> project_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取实际文件修订</FONT></TD></TR></TABLE>>,
        likec4_id="10fq4h3",
        style=dashed];
    assets [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产任务与确认业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">同一 Host Scope<BR/>拥有跨请求任务标识、pending→running→ready/failed/canceled<BR/>状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入<BR/>confirmed/discarded，写入成功或部分写入失败后重读失败进入<BR/>reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.assets",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> assets [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ifs6h",
        style=dashed];
    host -> language [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=lqx394,
        style=dashed];
    invocations [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">调用记录与取消</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope<BR/>的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生<BR/>Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.invocations",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> invocations [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1yw3gl5",
        minlen=1,
        style=dashed];
    preview [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 预览业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU<BR/>后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG<BR/>结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.preview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> preview [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=zjs9eo,
        style=dashed];
    host -> mcp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">实际调用 patch 匹配空壳验证明确失败与顺序输入保真</FONT></TD></TR></TABLE>>,
        likec4_id="10gj510",
        style=dashed];
    asset_candidates [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">候选存储与释放</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Host Scope<BR/>独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次<BR/>read 交付新的字节流，Scope 关闭释放全部所属资源。IO<BR/>仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.asset_candidates",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> asset_candidates [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=tl5egz,
        style=dashed];
    editing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change<BR/>Plan 形成统一 EntityChange/Schematics<BR/>候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用<BR/>Views。TODO：编辑与重构编排。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.editing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> editing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令</FONT></TD></TR></TABLE>>,
        likec4_id="1in91na",
        style=dashed];
    host -> diagnostics [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 装配诊断与受控业务入口</FONT></TD></TR></TABLE>>,
        likec4_id=bed2am,
        style=dashed];
    asset_processing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">产物确定性校验与切片预览</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与<BR/>3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成<BR/>CanvasDocument，经唯一 CPU renderer<BR/>输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.asset_processing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> asset_processing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=msyr8u,
        style=dashed];
    view_service [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.view_service",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> view_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=lw4zwl,
        style=dashed];
    asset_generation [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工作流绑定与远端生成执行</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为<BR/>RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.asset_generation",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> asset_generation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">真实产物字节输入</FONT></TD></TR></TABLE>>,
        likec4_id=rkldtv,
        style=dashed];
    conversion [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">仅缓存状态的转换服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">组织共享转换缓存与完整语义输入；工程文件是唯一权威，实体层负责文件派生快照和写入。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.conversion",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> conversion [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=ic57qq,
        style=dashed];
    host -> config [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">生成空壳接收明确公开参数和独立凭据端口</FONT></TD></TR></TABLE>>,
        likec4_id="1wfk4rk",
        style=dashed];
    host -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=wfscc7,
        style=dashed];
    host -> files [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ww6vz3",
        style=dashed];
    semantic [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">语义装配（设计）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON<BR/>合同导入导出平台数据与文档，SemanticAssembly<BR/>消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context<BR/>和转换依据。复用既有身份、Context<BR/>及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.semantic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> semantic [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">实际调用验证语义空壳明确失败及输入保持原样</FONT></TD></TR></TABLE>>,
        likec4_id="1k5zg8w",
        style=dashed];
    host -> script [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">独立序列化验证实体反向语义</FONT></TD></TR></TABLE>>,
        likec4_id="7tmu9x",
        style=dashed];
    host -> project_model [arrowhead=normal,
        likec4_id=m33uen,
        style=dashed];
    assets -> asset_candidates [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">任务关联候选标识、读取确认内容并释放</FONT></TD></TR></TABLE>>,
        likec4_id="1pn4b5s",
        style=dashed];
    assets -> editing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">明确确认准备候选并提交，返回实际资源身份</FONT></TD></TR></TABLE>>,
        likec4_id="1h29ub9",
        style=dashed];
    assets -> asset_processing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">产物校验与明确切片预览</FONT></TD></TR></TABLE>>,
        likec4_id="1kzknfx",
        style=dashed];
    assets -> asset_generation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">任务绑定原子生成与评阅，不转移调度所有权</FONT></TD></TR></TABLE>>,
        likec4_id="1tcl29s",
        style=dashed];
    language -> diagnostics [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享诊断服务和唯一结果类型</FONT></TD></TR></TABLE>>,
        likec4_id=yzkur0,
        style=dashed];
    language -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享实体服务与完整读取基准</FONT></TD></TR></TABLE>>,
        likec4_id="1d5a4hx",
        style=dashed];
    configuration [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">产品类型检查配置</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">声明产品 TypeScript 检查范围并继承根选项；不提供运行时配置。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.configuration",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    preview -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">预览只读实体资源</FONT></TD></TR></TABLE>>,
        likec4_id="1sllrx9",
        style=dashed];
    mcp -> host [arrowhead=normal,
        likec4_id="8i5zec",
        style=dashed];
    asset_candidates -> asset_processing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">保存同一产物的确定性校验结果</FONT></TD></TR></TABLE>>,
        likec4_id="1kdctfr",
        style=dashed];
    asset_candidates -> asset_generation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">暂存具名产物字节</FONT></TD></TR></TABLE>>,
        likec4_id="1t1ptbe",
        style=dashed];
    editing -> view_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只读取具名视图；提交后的派生刷新由Host驱动</FONT></TD></TR></TABLE>>,
        likec4_id="189g1uh",
        style=dashed];
    editing -> conversion [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1n4xkoe",
        style=dashed];
    editing -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">编辑候选经唯一实体入口提交</FONT></TD></TR></TABLE>>,
        likec4_id="7fr08b",
        style=dashed];
    diagnostics -> lint [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">调用纯检查，诊断状态归 Diagnostics</FONT></TD></TR></TABLE>>,
        likec4_id="1qaf7j5",
        style=dashed];
    diagnostics -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">诊断主动读取实体快照</FONT></TD></TR></TABLE>>,
        likec4_id="1ocmz6r",
        style=dashed];
    diagnostics -> analysis [arrowhead=normal,
        likec4_id=n7xncc,
        style=dashed];
    asset_processing -> asset_generation [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只读原子执行交付的具名字节</FONT></TD></TR></TABLE>>,
        likec4_id=y3q1d3,
        style=dashed];
    view_service -> conversion [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图唯一驱动转换与缓存释放</FONT></TD></TR></TABLE>>,
        likec4_id="1179acd",
        style=dashed];
    view_service -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图主动读取实体；派生结果经实体入口交付</FONT></TD></TR></TABLE>>,
        likec4_id="1v65nko",
        style=dashed];
    lint -> analysis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">分析结果</FONT></TD></TR></TABLE>>,
        likec4_id="824rqf",
        style=dashed];
    lint -> script [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=tardui,
        style=dashed];
    asset_generation -> config [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1lb7iq1",
        style=dashed];
    conversion -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=wzq6kv,
        style=dashed];
    conversion -> script [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=xqe1j1,
        style=dashed];
    conversion -> project_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="61nw2f",
        style=dashed];
    entities -> files [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">实体层唯一业务 IO；读取与提交分别授权到文件</FONT></TD></TR></TABLE>>,
        likec4_id=s8mehu,
        style=dashed];
    entities -> semantic [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">快照语义装配</FONT></TD></TR></TABLE>>,
        likec4_id="1qb7q1p",
        style=dashed];
    entities -> script [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">零件实体携带显式转换依据</FONT></TD></TR></TABLE>>,
        likec4_id="1va8n2w",
        style=dashed];
    entities -> project_model [arrowhead=normal,
        likec4_id="41vmfm",
        style=dashed];
    files -> project_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">文件边界使用统一相对路径校验与文件事实合同</FONT></TD></TR></TABLE>>,
        likec4_id="14zt1oa",
        style=dashed];
    semantic -> analysis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">符号表与调用图</FONT></TD></TR></TABLE>>,
        likec4_id=nr7jxu,
        style=dashed];
    semantic -> script [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1p3q24v",
        style=dashed];
    semantic -> project_model [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">工程逻辑快照合同</FONT></TD></TR></TABLE>>,
        likec4_id="1pxnp45",
        style=dashed];
    analysis -> script [arrowhead=normal,
        likec4_id="182qrzr",
        style=dashed];
    analysis -> project_model [arrowhead=normal,
        likec4_id=k0jsv1,
        style=dashed];
    script -> conversion [arrowhead=normal,
        likec4_id=exegm5,
        style=dashed];
    script -> project_model [arrowhead=normal,
        likec4_id="1v5xug0",
        style=dashed];
}
`;case`workspace_services`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=workspace_services,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_host {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>工作区 HOST</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.host",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        logic [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 组合根与受控入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer<BR/>共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由<BR/>Host 主动分派，工程状态经实体层读取。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.host.logic",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_conversion {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>仅缓存状态的转换服务</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.conversion",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ts [group="toolkit.conversion",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">零件与 TS 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context<BR/>和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope<BR/>仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.ts",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        html [group="toolkit.conversion",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">独立 Canvas 与 HTML 视图双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立<BR/>Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML<BR/>视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views<BR/>唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由<BR/>Preview/Renderer 独立交付。</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.html",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        canvas [group="toolkit.conversion",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 与 HTML 片段双向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Canvas 实体、Base64 与 Hjson 和 HTML<BR/>片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区<BR/>Scope，按方向、输入和实际资源指纹失效</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.conversion.canvas",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    diagnostics [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">诊断业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.diagnostics",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> diagnostics [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 装配诊断与受控业务入口</FONT></TD></TR></TABLE>>,
        likec4_id="758sf2",
        style=dashed,
        weight=2];
    preview [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 预览业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU<BR/>后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG<BR/>结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.preview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> preview [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令</FONT></TD></TR></TABLE>>,
        likec4_id="1o0krs0",
        style=dashed,
        weight=2];
    assets [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">资产任务与确认业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">同一 Host Scope<BR/>拥有跨请求任务标识、pending→running→ready/failed/canceled<BR/>状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入<BR/>confirmed/discarded，写入成功或部分写入失败后重读失败进入<BR/>reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.assets",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> assets [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">同一 Workspace Layer 装配，Host 分发具名资产命令</FONT></TD></TR></TABLE>>,
        likec4_id="1utryw9",
        style=dashed,
        weight=2];
    editing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑业务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change<BR/>Plan 形成统一 EntityChange/Schematics<BR/>候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用<BR/>Views。TODO：编辑与重构编排。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.editing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> editing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令</FONT></TD></TR></TABLE>>,
        likec4_id="82xi1i",
        style=dashed,
        weight=2];
    view_service [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第三层：视图关联与交付</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory<BR/>共享监听、实体重读和影响计算前缀；结果阶段分支为 files<BR/>经实体层发布或纠偏派生文件，memory<BR/>短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.view_service",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> view_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Host 主动驱动视图；WorkspaceServices 装配</FONT></TD></TR></TABLE>>,
        likec4_id=nlg1xh,
        style=dashed,
        weight=2];
    logic -> ts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 仅装配；缓存由视图驱动</FONT></TD></TR></TABLE>>,
        likec4_id=l211qz,
        style=dashed];
    logic -> html [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 仅装配 HTML 转换</FONT></TD></TR></TABLE>>,
        likec4_id="1mfonoh",
        style=dashed];
    logic -> canvas [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WorkspaceServices.ts 仅装配共享转换</FONT></TD></TR></TABLE>>,
        likec4_id="1e755g",
        style=dashed];
    entities [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层：工程实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID<BR/>和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity<BR/>是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity<BR/>与 ToolkitEntity 直接继承，TS/HTML 视图经<BR/>ToolkitEntity</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.entities",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Host 主动重读实体；WorkspaceServices 读取状态</FONT></TD></TR></TABLE>>,
        likec4_id="1mhoktz",
        style=dashed,
        weight=2];
    files [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第一层：文件管理与监听</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务<BR/>IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision<BR/>的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区<BR/>Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.files",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> files [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Host 装配并单一消费文件变化；工程业务 IO 归实体</FONT></TD></TR></TABLE>>,
        likec4_id="1dck7kv",
        style=dashed,
        weight=2];
    diagnostics -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">诊断主动读取实体快照</FONT></TD></TR></TABLE>>,
        likec4_id="1ocmz6r",
        style=dashed,
        weight=3];
    analysis [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">纯符号表与调用图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">基于实体快照、第一层 LocalAst<BR/>和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层<BR/>Context 或转换依据</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.analysis",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    diagnostics -> analysis [arrowhead=normal,
        likec4_id=n7xncc,
        style=dashed,
        weight=3];
    preview -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">预览只读实体资源</FONT></TD></TR></TABLE>>,
        likec4_id="1sllrx9",
        style=dashed,
        weight=3];
    assets -> editing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">明确确认准备候选并提交，返回实际资源身份</FONT></TD></TR></TABLE>>,
        likec4_id="1h29ub9",
        style=dashed,
        weight=3];
    editing -> view_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只读取具名视图；提交后的派生刷新由Host驱动</FONT></TD></TR></TABLE>>,
        likec4_id="189g1uh",
        style=dashed,
        weight=3];
    change_plan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">变更计划纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">视图编辑、重命名、脚本与 Canvas<BR/>导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing<BR/>调用 Entities 物化内存候选，Entities<BR/>从候选及未改变依赖准备语义输入，Editing<BR/>调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</FONT></TD></TR></TABLE>>,
        likec4_id="pure.change_plan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    editing -> change_plan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">统一变更计划与候选</FONT></TD></TR></TABLE>>,
        likec4_id="153fvcw",
        style=dashed];
    editing -> ts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图反向转换</FONT></TD></TR></TABLE>>,
        likec4_id=xann5z,
        style=dashed,
        weight=2];
    editing -> html [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">独立 Canvas 反向转换</FONT></TD></TR></TABLE>>,
        likec4_id=xljdh9,
        style=dashed,
        weight=2];
    editing -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">编辑候选经唯一实体入口提交</FONT></TD></TR></TABLE>>,
        likec4_id="7fr08b",
        style=dashed,
        weight=3];
    view_service -> ts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图唯一驱动转换与缓存释放</FONT></TD></TR></TABLE>>,
        likec4_id="15l4i38",
        style=dashed,
        weight=2];
    view_service -> html [arrowhead=normal,
        likec4_id="15cuzzi",
        style=dashed,
        weight=2];
    view_service -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">视图主动读取实体；派生结果经实体入口交付</FONT></TD></TR></TABLE>>,
        likec4_id="1v65nko",
        style=dashed,
        weight=3];
    change_plan -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只引用格式实体和读取基准；不调用实体服务或建立 Tree</FONT></TD></TR></TABLE>>,
        likec4_id="19nt3s1",
        style=dashed];
    change_plan -> analysis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">只读符号表与调用图</FONT></TD></TR></TABLE>>,
        likec4_id="8j3odq",
        style=dashed];
    ts -> canvas [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">内部 Canvas 双向转换</FONT></TD></TR></TABLE>>,
        likec4_id=p3hzd1,
        style=dashed,
        weight=3];
    ts -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付</FONT></TD></TR></TABLE>>,
        likec4_id="1vvg3q",
        style=dashed,
        weight=2];
    html -> canvas [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享片段服务的工作区装配</FONT></TD></TR></TABLE>>,
        likec4_id=lird4v,
        style=dashed,
        weight=3];
    html -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">独立 Canvas 与视图实体</FONT></TD></TR></TABLE>>,
        likec4_id="1mpc4e4",
        style=dashed,
        weight=2];
    canvas -> entities [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">实体输入与资源依赖</FONT></TD></TR></TABLE>>,
        likec4_id="1454bu1",
        style=dashed,
        weight=2];
    entities -> files [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">实体层唯一业务 IO；读取与提交分别授权到文件</FONT></TD></TR></TABLE>>,
        likec4_id=s8mehu,
        style=dashed,
        weight=3];
    semantic [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">语义装配（设计）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON<BR/>合同导入导出平台数据与文档，SemanticAssembly<BR/>消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context<BR/>和转换依据。复用既有身份、Context<BR/>及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.semantic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entities -> semantic [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">快照语义装配</FONT></TD></TR></TABLE>>,
        likec4_id="1qb7q1p",
        style=dashed,
        weight=3];
    semantic -> analysis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">符号表与调用图</FONT></TD></TR></TABLE>>,
        likec4_id=nr7jxu,
        style=dashed,
        weight=3];
}
`;case`frontend`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=frontend,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    packaging [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">扩展清单与构建入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">声明 VS Code ESM 扩展入口、原生配置默认值与 Webview UI；正式<BR/>VSIX 在顶层构建区装配包内入口、共享运行依赖、WASM、固定字体、语言资源及同树版本的<BR/>Skill，运行时只按扩展位置读取，不依赖开发仓库；不承载领域业务。</FONT></TD></TR></TABLE>>,
        likec4_id="frontend.packaging",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">前端行为与生命周期测试</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">验证前端交互、配置与宿主释放；不建立生产配置副本。</FONT></TD></TR></TABLE>>,
        likec4_id="frontend.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plugin [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">VSCode 宿主与 Effect 组合根</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">绑定原生配置、webview 与同一 Host<BR/>生命周期；组件经具名入口获取和关闭，调用方以 try/finally<BR/>持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas<BR/>预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示<BR/>PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。</FONT></TD></TR></TABLE>>,
        likec4_id="frontend.plugin",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> plugin [arrowhead=normal,
        likec4_id="9hsati",
        style=dashed];
    language [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">标准语言服务端口（设计）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">VS Code 通过标准 LSP 进程内连接接入同一 Host；connect 接收同一<BR/>Host<BR/>与标准客户端选项，接入层拥有标准消息连接和客户端生命周期，不接受外部进程启动或业务回调。Host<BR/>拥有查询，接入层不持有工程状态。</FONT></TD></TR></TABLE>>,
        likec4_id="frontend.language",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> language [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">真实 Host 验证标准客户端连接骨架</FONT></TD></TR></TABLE>>,
        likec4_id="1ndm8kd",
        style=dashed];
    ui [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">单页侧栏、配置区与展开日志</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">显示侧栏与配置交互，消费宿主合同；不直接使用 VS Code 或文件 IO。</FONT></TD></TR></TABLE>>,
        likec4_id="frontend.ui",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> ui [arrowhead=normal,
        likec4_id="1vsv44z",
        style=dashed];
    host_client [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">只读合同与配置计划</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供前端通信合同与同一目标的配置、端点和 Skill 范围计划；官方 CLI<BR/>拥有其配置写入，文件目标使用结构化编辑与原子写。新增 CLI<BR/>接入在写入前明确失败；不读取游戏工程实体或管理领域状态。</FONT></TD></TR></TABLE>>,
        likec4_id="frontend.host_client",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> host_client [arrowhead=normal,
        likec4_id="1pin51l",
        style=dashed];
    plugin -> language [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">标准 LSP 客户端合同</FONT></TD></TR></TABLE>>,
        likec4_id=a85rwx,
        style=dashed];
    plugin -> ui [arrowhead=normal,
        likec4_id="1wvvclb",
        style=dashed];
    plugin -> host_client [arrowhead=normal,
        likec4_id="1qie1ol",
        style=dashed];
    ui -> host_client [arrowhead=normal,
        likec4_id=snk428,
        style=dashed];
}
`;case`pure_functions`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=pure_functions,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    change_plan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">变更计划纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">视图编辑、重命名、脚本与 Canvas<BR/>导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing<BR/>调用 Entities 物化内存候选，Entities<BR/>从候选及未改变依赖准备语义输入，Editing<BR/>调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</FONT></TD></TR></TABLE>>,
        likec4_id="pure.change_plan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    canvas [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 四向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内联 Base64、内联 Hjson、Canvas 二进制与 HTML<BR/>视图之间的无状态转换</FONT></TD></TR></TABLE>>,
        likec4_id="pure.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    change_plan -> canvas [style=invis];
}
`;case`canvas`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=canvas,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    renderer_tests [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 渲染测试</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在 Node 中验证软件 surface 的实际 PNG 像素、重复编码、Spine<BR/>JSON<BR/>姿态及业务空壳拒绝与输入保真。目标经唯一渲染入口验证布局、节点能力、固定字体、资源指纹、错误诊断和请求资源释放；选型测试不代替产品行为证据。</FONT></TD></TR></TABLE>>,
        likec4_id="canvas.renderer_tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    renderer_support [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CPU 后端测试支持</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">供两类渲染测试复用唯一官方 CanvasKit<BR/>初始化边界；每次返回独立后端，不保存跨测试状态或实现业务渲染。</FONT></TD></TR></TABLE>>,
        likec4_id="canvas.renderer_support",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    renderer_tests -> renderer_support [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">复用官方 CPU 后端初始化边界</FONT></TD></TR></TABLE>>,
        likec4_id="1yjd0ow",
        minlen=1,
        style=dashed,
        weight=3];
    entry [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">唯一渲染入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderer 声明完整输入与 PNG<BR/>输出。后续实现由该入口主动驱动校验、布局、绘制与资源结算，同一请求独占会话；当前执行明确<BR/>TODO 失败。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.entry",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    renderer_tests -> entry [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">验证唯一入口明确失败</FONT></TD></TR></TABLE>>,
        likec4_id="15qbyb0",
        style=dashed];
    contracts [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CanvasDocument 与渲染合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">持久化 Fields、节点类型、布局与文本结果、完整输入及 PNG<BR/>输出合同；资源按文档引用标识绑定字节，工程相对路径显式可选以支持未入库候选。PNG<BR/>同次携带节点索引链、名称、类型及 viewport<BR/>四角供树形视图和选中高亮使用，不承担解析或绘制。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.contracts",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    renderer_tests -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">核对失败前后的完整请求输入</FONT></TD></TR></TABLE>>,
        likec4_id="1q5oqex",
        style=dashed];
    nodes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">节点能力调度</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按节点类型固定顺序调用能力；不持有 DOM。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.nodes",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> nodes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">能力调度</FONT></TD></TR></TABLE>>,
        likec4_id="15y49t9",
        style=dashed,
        weight=3];
    layout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">确定性布局计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按校验后的节点专属字段与固定字体度量计算矩形、裁剪与文本行；布局树携带对应节点身份及有效值，供节点绘制和子节点布局使用，结果只存在当前渲染会话。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.layout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">布局阶段</FONT></TD></TR></TABLE>>,
        likec4_id="12amepw",
        style=dashed,
        weight=3];
    dom_schema [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">文档输入校验</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">严格校验结构化文档，按唯一映射表提取与节点身份和顺序对应的节点专属 Option<BR/>Schema，供同次布局及绘制消费；保留原文档，不将投影写回持久化字段。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.dom_schema",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> dom_schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">文档校验</FONT></TD></TR></TABLE>>,
        likec4_id="6rtspi",
        style=dashed,
        weight=3];
    state [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">渲染会话与资源结算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CpuRenderSession<BR/>登记资源、收束加载和释放、保留失败原因并输出诊断；显式时间保证确定性。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.state",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">独占会话与资源结算</FONT></TD></TR></TABLE>>,
        likec4_id="160650p",
        style=dashed,
        weight=3];
    entry -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">唯一入口输入输出</FONT></TD></TR></TABLE>>,
        likec4_id=duify7,
        style=dashed,
        weight=3];
    features [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">节点绘制特性</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按节点类型与固定能力顺序编排矩形、文本、滚动内容和 Spine<BR/>网格绘制；图片、九宫格与渐变合成委托 images，共用同次布局和 CPU 会话。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.features",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nodes -> features [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">递归顺序由调度拥有，节点投影由特性拥有</FONT></TD></TR></TABLE>>,
        likec4_id="1w13ke6",
        style=dashed];
    nodes -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费确定布局节点</FONT></TD></TR></TABLE>>,
        likec4_id=o36xdv,
        style=dashed];
    nodes -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">共享同次绘制会话</FONT></TD></TR></TABLE>>,
        likec4_id="6y0oem",
        style=dashed];
    images [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">图片合成</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">资源字节解码、九宫格、渐变与颜色乘法；使用 CPU 图形后端。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.images",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    features -> images [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">复用节点投影输入和同次会话合同</FONT></TD></TR></TABLE>>,
        likec4_id=tauteh,
        style=dashed];
    images -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费同一布局结果</FONT></TD></TR></TABLE>>,
        likec4_id="1gnn92c",
        style=dashed];
    images -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">使用会话拥有的资源</FONT></TD></TR></TABLE>>,
        likec4_id=a01hzd,
        style=dashed];
    layout -> dom_schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费同次校验后的节点字段与身份</FONT></TD></TR></TABLE>>,
        likec4_id="16vnct4",
        style=dashed];
    fields [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">特性有效值</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">唯一字段默认值与启用白名单，不修改持久化输入。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.fields",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    layout -> fields [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持有节点有效值的唯一布局结果</FONT></TD></TR></TABLE>>,
        likec4_id="9kkpep",
        style=dashed];
    values [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">富文本解析</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">只解析原版富文本方言；持久化字段、枚举、颜色与 GUID 使用 Canvas<BR/>领域合同，不复制转换层解析器。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.values",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    layout -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持有解析后的同次文本段</FONT></TD></TR></TABLE>>,
        likec4_id="1y3eiqw",
        style=dashed];
    layout -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取同次会话的固定字体</FONT></TD></TR></TABLE>>,
        likec4_id=yh82zr,
        style=dashed];
    layout -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">交付唯一布局结果</FONT></TD></TR></TABLE>>,
        likec4_id="1mt06i9",
        style=dashed,
        weight=3];
    schema [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">结构化节点 Schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">声明结构化 Canvas 节点的确定类型字段；HTML/XML<BR/>解析归纯转换，本节点不执行解析或绘制。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.schema",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dom_schema -> schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提取节点专属字段</FONT></TD></TR></TABLE>>,
        likec4_id="1f66237",
        style=dashed];
    fields -> schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费唯一节点 Schema</FONT></TD></TR></TABLE>>,
        likec4_id=tclqga,
        style=dashed];
    fields -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">消费节点类型白名单</FONT></TD></TR></TABLE>>,
        likec4_id="10lcm4a",
        style=dashed,
        weight=3];
    values -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">产生具名文本段</FONT></TD></TR></TABLE>>,
        likec4_id="25q783",
        style=dashed,
        weight=3];
    raster [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CPU 光栅化与 PNG 编码（设计）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasKit WASM/Skia 软件 surface<BR/>承担字体度量、文字、路径、位图与网格，禁用 GPU。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.raster",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    state -> raster [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">会话拥有独占软件 surface</FONT></TD></TR></TABLE>>,
        likec4_id="1yxnz2",
        style=dashed];
    state -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">会话与资源状态</FONT></TD></TR></TABLE>>,
        likec4_id=i96xss,
        style=dashed,
        weight=3];
    schema -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">文档节点类型</FONT></TD></TR></TABLE>>,
        likec4_id="189d00q",
        style=dashed,
        weight=3];
    raster -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">像素与 PNG 结果</FONT></TD></TR></TABLE>>,
        likec4_id=ss6xjc,
        style=dashed,
        weight=3];
}
`;case`tooling`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=tooling,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    tests [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">自身回归测试</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">验证治理规则与真实 CLI 行为；夹具隔离，不改产品源码。</FONT></TD></TR></TABLE>>,
        likec4_id="tools.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    testing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">测试夹具</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供隔离 Git 行为夹具；不承载正式检视状态。</FONT></TD></TR></TABLE>>,
        likec4_id="tools.testing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> testing [arrowhead=normal,
        likec4_id=ma3eft,
        style=dashed];
    cli [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CLI 与进程边界</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">装配项目检查、统一格式检查和修复及需求图检视；格式算法由 Prettier、LikeC4<BR/>和 pre-commit-hooks 承担，内部 CLI 统一范围与进程边界。</FONT></TD></TR></TABLE>>,
        likec4_id="tools.cli",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> cli [arrowhead=normal,
        likec4_id="5qyg9",
        style=dashed];
    coding [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Java 风格规则</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">通过 TypeScript AST 校验项目编码纪律；不修改受检源码。</FONT></TD></TR></TABLE>>,
        likec4_id="tools.coding",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> coding [arrowhead=normal,
        likec4_id="1k7n45j",
        style=dashed];
    architecture [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">架构模型解析</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">解析聚合 C4，分析文件归属、依赖、源码声明与环境变量边界；不另建架构清单。</FONT></TD></TR></TABLE>>,
        likec4_id="tools.architecture",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> architecture [arrowhead=normal,
        likec4_id="1qs5pru",
        style=dashed];
    hooks [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Git 钩子转发</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">纯转发薄壳：零判定逻辑，全部判定经唯一入口 cli</FONT></TD></TR></TABLE>>,
        likec4_id="tools.hooks",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    hooks -> cli [arrowhead=normal,
        likec4_id=zneixo,
        minlen=1,
        style=dashed];
    testing -> cli [arrowhead=normal,
        likec4_id="1d3hwu2",
        style=dashed];
    cli -> coding [arrowhead=normal,
        likec4_id=wrjcuc,
        style=dashed];
    cli -> architecture [arrowhead=normal,
        likec4_id=ukxjw9,
        style=dashed];
    coding -> architecture [arrowhead=normal,
        likec4_id=krg9p3,
        style=dashed];
    requirement_documents [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">新版需求图与文档环境</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">原文、解读、决策及关系共用 Sphinx-Needs TOML；uv 锁定正式文档环境。</FONT></TD></TR></TABLE>>,
        likec4_id="tools.requirement_documents",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    test_metrics [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">模块测试指标基线</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">显式 record 写入的官方覆盖率与变异实测基线，check 只读比较。</FONT></TD></TR></TABLE>>,
        likec4_id="tools.test_metrics",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    requirement_documents -> test_metrics [style=invis];
}
`;case`repository`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=repository,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    build [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">pnpm 与依赖锁定</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">声明根依赖、锁定、类型与构建入口和 CI；成员配置继承根配置。StrykerJS<BR/>core、Vitest runner 与 TypeScript checker<BR/>执行变异测试，fast-check 负责属性测试，按需启用 Vitest<BR/>coverage-v8 进行覆盖率评估；根 scripts<BR/>执行模块指标棘轮，精确版本由根包清单和锁文件持有。</FONT></TD></TR></TABLE>>,
        likec4_id="repository.build",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    instructions [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">开发指引</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提供开发纪律和入口导航；架构事实只引用 C4，不复制模块定义。</FONT></TD></TR></TABLE>>,
        likec4_id="repository.instructions",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    build -> instructions [style=invis];
    git [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">版本控制</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">声明忽略、属性与子模块定位；生命周期由原生 Git 管理。</FONT></TD></TR></TABLE>>,
        likec4_id="repository.git",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    instructions -> git [style=invis];
    editor [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">编辑器配置</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">声明开发编辑器格式与工作区选项；推荐 VS Code ESLint 扩展以执行仓库现役<BR/>ESLint 配置，不作为产品运行配置。</FONT></TD></TR></TABLE>>,
        likec4_id="repository.editor",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    git -> editor [style=invis];
}
`;case`specifications`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=specifications,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    tooling [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">治理契约</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束治理检查与检视行为；模型定义架构，规范定义实现验收。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.tooling",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    layout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">文件布局契约</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束文件登记与配置继承的检查行为；具体归属只读 C4。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.layout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tooling -> layout [style=invis];
    development [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">开发与协作契约</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束开发操作、授权与 CI 调度；hooks、审计存储与登记算法引用治理契约。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.development",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    layout -> development [style=invis];
    runtime [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Toolkit 运行时合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束 Host、协议和服务的运行行为；服务边界以 C4 为准。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.runtime",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    development -> runtime [style=invis];
    workspace_files [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程文件合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束工程文件 IO、监听与路径行为；不拥有运行时工程数据。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.workspace_files",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    hjson [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Hjson 统一格式合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束 Hjson 解析和写出保真；格式合同不定义 IO 归属。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.hjson",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workspace_files -> hjson [style=invis];
    entities [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">第二层实体基础设施合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束实体更新、身份和提交行为；实体状态由现役实体模块拥有。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.entities",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    hjson -> entities [style=invis];
    host_configuration [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">保留 Host 配置合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束配置输入的读取行为；不引入第二配置来源。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.host_configuration",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entities -> host_configuration [style=invis];
    bescript [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BEScript 内部格式</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    canvas_render [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 渲染规范</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束 Canvas 显示与字段映射行为；渲染模块关系由 C4 定义。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.canvas_render",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bescript -> canvas_render [style=invis];
    vscode_frontend [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">VS Code 前端职责</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束前端交互与配置行为；模块职责与依赖只引用架构图。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.vscode_frontend",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    canvas_render -> vscode_frontend [style=invis];
    canvas [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 转换合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束四种 Canvas<BR/>表示的纯格式转换，以及工作区六向转换服务的结果隔离、缓存、资源核对与生命周期。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vscode_frontend -> canvas [style=invis];
    preview [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">静态预览与发布合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束静态预览产物与发布验证；不成为运行时产品入口。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.preview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程分析合同</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">约束纯函数符号表、零件方法局部变量和调用图。</FONT></TD></TR></TABLE>>,
        likec4_id="specifications.analysis",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    preview -> analysis [style=invis];
}
`;case`documentation`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=documentation,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    manual [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MechToolkit 发布与开发指南</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">技能与对外指南作为普通文件随本仓库提交维护；不作为 tools 自举输入。可选本地<BR/>reference 资料独立于仓库结构。</FONT></TD></TR></TABLE>>,
        likec4_id="documentation.manual",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`legacy`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=legacy,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    mcp [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">MCP 协议入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 C# MCP 宿主入口参考；保留旧协议宿主的启动和调用边界。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.mcp",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    core [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">核心逻辑</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">组织旧核心参考文件的职责边界；旧文件只作格式与行为证据。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mcp -> core [arrowhead=normal,
        likec4_id=pm7gv,
        minlen=1,
        style=dashed];
    host [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">VSCode Host 入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 C# VS Code Host 入口参考；保留旧 stdin/stdout<BR/>命令及诊断推送协议的行为证据。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.host",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> core [arrowhead=normal,
        likec4_id="1xjal5d",
        minlen=1,
        style=dashed];
}
`;case`legacy_core`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=legacy_core,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    composition [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">核心服务装配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 C# 核心门面与 ToolkitServices<BR/>服务装配参考；用于核对旧入口和服务组合方式。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.composition",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程分析</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 AST 解析服务、符号引用、调用图与脚本归属索引参考；用于核对游戏脚本分析语义。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.analysis",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    composition -> analysis [style=invis];
    bescript [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BeScript 语法</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 BeScript 词法、语法解析、AST 与文本序列化参考，包含 Canvas<BR/>内联标记的解析行为。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis -> bescript [style=invis];
    canvas [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 数据</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 Canvas 二进制、内联 Hjson 与 HTML<BR/>片段编解码参考；用于核对字段布局、内联参数和转义语义。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bescript -> canvas [style=invis];
    infra [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">基础设施</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的日志、进程、配置、文件系统与文本工具参考；保留旧宿主的基础设施行为证据。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.infra",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">游戏工程静态检查</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 LintEngine 规则清单与 CallTargets<BR/>条件语义参考；用于核对既有静态检查条目的游戏语义。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.lint",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    infra -> lint [style=invis];
    persistence [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程持久化</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 ProjectModel、FileIO<BR/>与实体工具参考；用于核对工程目录、实体识别和文件持久化行为。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.persistence",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint -> persistence [style=invis];
    refactor [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">游戏逻辑重构</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 Canvas<BR/>转换、文件移动、变量重命名、脚本仓库管理与一致性修复参考；用于核对既有重构输入及变更语义。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.refactor",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    persistence -> refactor [style=invis];
    sdk [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">平台 SDK</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的平台内置方法、事件、枚举与零件能力定义参考；用于核对结构化 SDK<BR/>文档的字段与平台语义。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.sdk",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    search [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工程检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 GUID 引用、脚本文本与 UI 文本检索参考；用于核对请求、结果定位和限额语义。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.search",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sdk -> search [style=invis];
    tsview [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">TS 视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的 DeviceTsView、仓库视图解析转换与写回参考；用于核对 BeScript<BR/>与 TS 视图的映射语义。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.tsview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    search -> tsview [style=invis];
    worker [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">工作进程命令</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的工作进程命令入口参考；保留旧视图、Canvas、重构、检索和静态检查的命令边界。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.worker",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tsview -> worker [style=invis];
    tests [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">核心回归</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">冻结的核心 TS 回归入口参考；与 cases 分别登记入口和历史 C# 回归及夹具。</FONT></TD></TR></TABLE>>,
        likec4_id="legacy.core.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`asset_review_flow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="4335pt" height="790pt"
 viewBox="0.00 0.00 4335.00 790.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 775.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="526.05,-470 0,-470 0,-290 526.05,-290 526.05,-470"/>
<text xml:space="preserve" text-anchor="start" x="173.02" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">工具合同与 HTTP 接入</text>
<text xml:space="preserve" text-anchor="start" x="95.07" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch</text>
<text xml:space="preserve" text-anchor="start" x="45.48" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</text>
</g>
<!-- logic_1 -->
<g id="node2" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1419.26,-470 922.37,-470 922.37,-290 1419.26,-290 1419.26,-470"/>
<text xml:space="preserve" text-anchor="start" x="1080.8" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="992.41" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="942.42" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="1053.29" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- assets -->
<g id="node3" class="node">
<title>assets</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2329.37,-470 1729.96,-470 1729.96,-290 2329.37,-290 2329.37,-470"/>
<text xml:space="preserve" text-anchor="start" x="1954.65" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">资产任务与确认业务</text>
<text xml:space="preserve" text-anchor="start" x="1976.31" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">同一 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="1832.06" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有跨请求任务标识、pending→running→ready/failed/canceled</text>
<text xml:space="preserve" text-anchor="start" x="1852.54" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入</text>
<text xml:space="preserve" text-anchor="start" x="1843.36" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed/discarded，写入成功或部分写入失败后重读失败进入</text>
<text xml:space="preserve" text-anchor="start" x="1750.01" y="-324" font-family="Arial" font-size="15.00" fill="#bfdbfe">reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</text>
</g>
<!-- asset_candidates -->
<g id="node4" class="node">
<title>asset_candidates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4305.22,-760 2702.3,-760 2702.3,-580 4305.22,-580 4305.22,-760"/>
<text xml:space="preserve" text-anchor="start" x="3445.41" y="-700" font-family="Arial" font-size="20.00" fill="#eff6ff">候选存储与释放</text>
<text xml:space="preserve" text-anchor="start" x="3464.99" y="-677" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="2722.36" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次</text>
<text xml:space="preserve" text-anchor="start" x="3336.62" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">read 交付新的字节流，Scope 关闭释放全部所属资源。IO</text>
<text xml:space="preserve" text-anchor="start" x="3341.64" y="-623" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</text>
</g>
<!-- asset_processing -->
<g id="node5" class="node">
<title>asset_processing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3830.13,-470 3177.39,-470 3177.39,-290 3830.13,-290 3830.13,-470"/>
<text xml:space="preserve" text-anchor="start" x="3403.74" y="-410" font-family="Arial" font-size="20.00" fill="#eff6ff">产物确定性校验与切片预览</text>
<text xml:space="preserve" text-anchor="start" x="3197.45" y="-387" font-family="Arial" font-size="15.00" fill="#bfdbfe">任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与</text>
<text xml:space="preserve" text-anchor="start" x="3242.04" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成</text>
<text xml:space="preserve" text-anchor="start" x="3370.79" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument，经唯一 CPU renderer</text>
<text xml:space="preserve" text-anchor="start" x="3236.21" y="-333" font-family="Arial" font-size="15.00" fill="#bfdbfe">输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。</text>
</g>
<!-- asset_generation -->
<g id="node6" class="node">
<title>asset_generation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3986.41,-180 3021.11,-180 3021.11,0 3986.41,0 3986.41,-180"/>
<text xml:space="preserve" text-anchor="start" x="3403.74" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">工作流绑定与远端生成执行</text>
<text xml:space="preserve" text-anchor="start" x="3041.17" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为</text>
<text xml:space="preserve" text-anchor="start" x="3297.45" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M526.02,-380C647.36,-380 791.07,-380 911.9,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="911.88,-382.63 919.38,-380 911.88,-377.38 911.88,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="589.05,-383 589.05,-415.8 613.05,-415.8 613.05,-383 589.05,-383"/>
<text xml:space="preserve" text-anchor="start" x="597.16" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="616.05,-383 616.05,-415.8 859.37,-415.8 859.37,-383 616.05,-383"/>
<text xml:space="preserve" text-anchor="start" x="619.05" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">renderSlice/review：taskId 与 artifactId</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge6" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M535.67,-320.48C552.66,-318 569.56,-315.87 586.05,-314.2 708.24,-301.84 740.24,-301.28 862.37,-314.2 882.05,-316.28 902.31,-319.09 922.61,-322.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="535.68,-317.83 528.65,-321.53 536.45,-323.02 535.68,-317.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="602.69,-317.2 602.69,-350 626.69,-350 626.69,-317.2 602.69,-317.2"/>
<text xml:space="preserve" text-anchor="start" x="610.8" y="-330.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="629.69,-317.2 629.69,-350 845.73,-350 845.73,-317.2 629.69,-317.2"/>
<text xml:space="preserve" text-anchor="start" x="632.69" y="-328" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付具名预览或意见，由调用方明确确认</text>
</g>
<!-- logic_1&#45;&gt;assets -->
<g id="edge2" class="edge">
<title>logic_1&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1419.08,-380C1512.89,-380 1620.91,-380 1719.72,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1719.65,-382.63 1727.15,-380 1719.65,-377.38 1719.65,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1482.26,-383 1482.26,-415.8 1506.26,-415.8 1506.26,-383 1482.26,-383"/>
<text xml:space="preserve" text-anchor="start" x="1490.37" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1509.26,-383 1509.26,-415.8 1666.96,-415.8 1666.96,-383 1509.26,-383"/>
<text xml:space="preserve" text-anchor="start" x="1512.26" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">显式跨请求操作，不自动确认</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge3" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2329.04,-446.65C2445.34,-472.05 2579.88,-500.7 2702.3,-525 2792.35,-542.87 2888.29,-561.02 2981.31,-578.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2980.63,-580.69 2988.48,-579.46 2981.58,-575.53 2980.63,-580.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2464.33,-513.29 2464.33,-546.09 2488.33,-546.09 2488.33,-513.29 2464.33,-513.29"/>
<text xml:space="preserve" text-anchor="start" x="2472.44" y="-526.49" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2491.33,-513.29 2491.33,-546.09 2567.34,-546.09 2567.34,-513.29 2491.33,-513.29"/>
<text xml:space="preserve" text-anchor="start" x="2494.33" y="-524.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取同一候选</text>
</g>
<!-- assets&#45;&gt;asset_processing -->
<g id="edge4" class="edge">
<title>assets&#45;&gt;asset_processing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2329.01,-380C2571.94,-380 2914.79,-380 3167.24,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3167.16,-382.63 3174.66,-380 3167.16,-377.38 3167.16,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2392.37,-383 2392.37,-415.8 2416.37,-415.8 2416.37,-383 2392.37,-383"/>
<text xml:space="preserve" text-anchor="start" x="2400.48" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2419.37,-383 2419.37,-415.8 2639.3,-415.8 2639.3,-383 2419.37,-383"/>
<text xml:space="preserve" text-anchor="start" x="2422.37" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">结构化 slice 与尺寸案例生成 PNG 预览</text>
</g>
<!-- assets&#45;&gt;asset_generation -->
<g id="edge5" class="edge">
<title>assets&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2329.04,-313.35C2445.34,-287.95 2579.88,-259.3 2702.3,-235 2802.01,-215.21 2908.93,-195.09 3011.12,-176.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3011.43,-178.99 3018.34,-175.06 3010.49,-173.83 3011.43,-178.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2411.82,-299.43 2411.82,-332.23 2435.82,-332.23 2435.82,-299.43 2411.82,-299.43"/>
<text xml:space="preserve" text-anchor="start" x="2419.93" y="-312.63" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2438.82,-299.43 2438.82,-332.23 2619.85,-332.23 2619.85,-299.43 2438.82,-299.43"/>
<text xml:space="preserve" text-anchor="start" x="2441.82" y="-310.23" font-family="Arial" font-size="14.00" fill="#c9c9c9">有来源的工作流返回视觉评阅意见</text>
</g>
</g>
</svg>
`;case`asset_generation_flow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="5170pt" height="1044pt"
 viewBox="0.00 0.00 5170.00 1044.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1029.36)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="526.05,-642 0,-642 0,-462 526.05,-462 526.05,-642"/>
<text xml:space="preserve" text-anchor="start" x="173.02" y="-573" font-family="Arial" font-size="20.00" fill="#eff6ff">工具合同与 HTTP 接入</text>
<text xml:space="preserve" text-anchor="start" x="95.07" y="-550" font-family="Arial" font-size="15.00" fill="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch</text>
<text xml:space="preserve" text-anchor="start" x="45.48" y="-532" font-family="Arial" font-size="15.00" fill="#bfdbfe">匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-514" font-family="Arial" font-size="15.00" fill="#bfdbfe">准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</text>
</g>
<!-- logic_1 -->
<g id="node2" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1275.3,-642 778.4,-642 778.4,-462 1275.3,-462 1275.3,-642"/>
<text xml:space="preserve" text-anchor="start" x="936.83" y="-573" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="848.45" y="-550" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="798.46" y="-532" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="909.33" y="-514" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- assets -->
<g id="node3" class="node">
<title>assets</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2243.57,-642 1644.16,-642 1644.16,-462 2243.57,-462 2243.57,-642"/>
<text xml:space="preserve" text-anchor="start" x="1868.85" y="-591" font-family="Arial" font-size="20.00" fill="#eff6ff">资产任务与确认业务</text>
<text xml:space="preserve" text-anchor="start" x="1890.51" y="-568" font-family="Arial" font-size="15.00" fill="#bfdbfe">同一 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="1746.26" y="-550" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有跨请求任务标识、pending→running→ready/failed/canceled</text>
<text xml:space="preserve" text-anchor="start" x="1766.74" y="-532" font-family="Arial" font-size="15.00" fill="#bfdbfe">状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入</text>
<text xml:space="preserve" text-anchor="start" x="1757.56" y="-514" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed/discarded，写入成功或部分写入失败后重读失败进入</text>
<text xml:space="preserve" text-anchor="start" x="1664.22" y="-496" font-family="Arial" font-size="15.00" fill="#bfdbfe">reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</text>
</g>
<!-- asset_candidates -->
<g id="node4" class="node">
<title>asset_candidates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4341.62,-873 2738.7,-873 2738.7,-693 4341.62,-693 4341.62,-873"/>
<text xml:space="preserve" text-anchor="start" x="3481.81" y="-813" font-family="Arial" font-size="20.00" fill="#eff6ff">候选存储与释放</text>
<text xml:space="preserve" text-anchor="start" x="3501.39" y="-790" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="2758.76" y="-772" font-family="Arial" font-size="15.00" fill="#bfdbfe">独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次</text>
<text xml:space="preserve" text-anchor="start" x="3373.02" y="-754" font-family="Arial" font-size="15.00" fill="#bfdbfe">read 交付新的字节流，Scope 关闭释放全部所属资源。IO</text>
<text xml:space="preserve" text-anchor="start" x="3378.04" y="-736" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</text>
</g>
<!-- asset_generation -->
<g id="node5" class="node">
<title>asset_generation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4022.81,-479 3057.51,-479 3057.51,-299 4022.81,-299 4022.81,-479"/>
<text xml:space="preserve" text-anchor="start" x="3440.14" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">工作流绑定与远端生成执行</text>
<text xml:space="preserve" text-anchor="start" x="3077.57" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为</text>
<text xml:space="preserve" text-anchor="start" x="3333.85" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</text>
</g>
<!-- runninghub -->
<g id="node6" class="node">
<title>runninghub</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5140.32,-479 4671.78,-479 4671.78,-299 5140.32,-299 5140.32,-479"/>
<text xml:space="preserve" text-anchor="start" x="4769.88" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">RunningHub 远端 ComfyUI 执行</text>
<text xml:space="preserve" text-anchor="start" x="4740.59" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">外部推理与计费边界。仅使用 /proxy 或 /proxy&#45;plus 原生</text>
<text xml:space="preserve" text-anchor="start" x="4738.49" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">ComfyUI：upload/image 上传、prompt 提交、history</text>
<text xml:space="preserve" text-anchor="start" x="4738.51" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询、view 下载；不使用代理 WS。模型库 resource/list</text>
<text xml:space="preserve" text-anchor="start" x="4691.83" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于已允许的只读清单查询，标准模型与 LLM API 生成通道不进入架构。</text>
</g>
<!-- asset_processing -->
<g id="node7" class="node">
<title>asset_processing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3866.52,-180 3213.79,-180 3213.79,0 3866.52,0 3866.52,-180"/>
<text xml:space="preserve" text-anchor="start" x="3440.14" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">产物确定性校验与切片预览</text>
<text xml:space="preserve" text-anchor="start" x="3233.85" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与</text>
<text xml:space="preserve" text-anchor="start" x="3278.44" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成</text>
<text xml:space="preserve" text-anchor="start" x="3407.19" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument，经唯一 CPU renderer</text>
<text xml:space="preserve" text-anchor="start" x="3272.61" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M525.94,-552C604.21,-552 689.95,-552 767.96,-552"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="767.9,-554.63 775.4,-552 767.9,-549.38 767.9,-554.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="589.05,-555 589.05,-587.8 613.05,-587.8 613.05,-555 589.05,-555"/>
<text xml:space="preserve" text-anchor="start" x="597.16" y="-568.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="616.05,-555 616.05,-587.8 715.4,-587.8 715.4,-555 616.05,-555"/>
<text xml:space="preserve" text-anchor="start" x="619.05" y="-565.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交具名生成请求</text>
</g>
<!-- logic_1&#45;&gt;assets -->
<g id="edge2" class="edge">
<title>logic_1&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1275.17,-552C1385.74,-552 1517.24,-552 1634.18,-552"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1633.84,-554.63 1641.34,-552 1633.84,-549.38 1633.84,-554.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1352.6,-555 1352.6,-587.8 1376.6,-587.8 1376.6,-555 1352.6,-555"/>
<text xml:space="preserve" text-anchor="start" x="1360.7" y="-568.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1379.6,-555 1379.6,-587.8 1566.86,-587.8 1566.86,-555 1379.6,-555"/>
<text xml:space="preserve" text-anchor="start" x="1382.6" y="-565.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">submit：接受前接收具名上传输入</text>
</g>
<!-- logic_1&#45;&gt;assets -->
<g id="edge11" class="edge">
<title>logic_1&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1275.05,-494.39C1295.35,-491.09 1315.62,-488.28 1335.3,-486.2 1445.29,-474.56 1474.01,-476.18 1584.16,-486.2 1600.63,-487.7 1617.48,-489.58 1634.45,-491.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1633.67,-494.29 1641.45,-492.65 1634.35,-489.08 1633.67,-494.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1338.3,-489.2 1338.3,-522 1369.87,-522 1369.87,-489.2 1338.3,-489.2"/>
<text xml:space="preserve" text-anchor="start" x="1346.3" y="-502.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1372.87,-489.2 1372.87,-522 1581.16,-522 1581.16,-489.2 1372.87,-489.2"/>
<text xml:space="preserve" text-anchor="start" x="1375.87" y="-500" font-family="Arial" font-size="14.00" fill="#c9c9c9">status/result：同 taskId 跨请求查询</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge3" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2005.27,-641.7C2068.31,-726.48 2175.72,-848.17 2303.57,-900 2621.36,-1028.82 3021.53,-952.27 3278.85,-875.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3279.37,-878.48 3285.8,-873.82 3277.86,-873.45 3279.37,-878.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2306.57,-971.71 2306.57,-1011.31 2330.57,-1011.31 2330.57,-971.71 2306.57,-971.71"/>
<text xml:space="preserve" text-anchor="start" x="2314.68" y="-988.31" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2333.57,-971.71 2333.57,-1011.31 2675.7,-1011.31 2675.7,-971.71 2333.57,-971.71"/>
<text xml:space="preserve" text-anchor="start" x="2336.57" y="-994.31" font-family="Arial" font-size="14.00" fill="#c9c9c9">暂存输入流；成功后建立 Host Scope 的 pending 任务并返回</text>
<text xml:space="preserve" text-anchor="start" x="2485.96" y="-977.51" font-family="Arial" font-size="14.00" fill="#c9c9c9">taskId</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge7" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2075.7,-641.93C2141.08,-681.74 2223.24,-724.38 2303.57,-746 2438.79,-782.38 2585.34,-802.63 2728.67,-812.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2728.3,-815.19 2735.96,-813.08 2728.65,-809.96 2728.3,-815.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2387.12,-810.91 2387.12,-843.71 2411.12,-843.71 2411.12,-810.91 2387.12,-810.91"/>
<text xml:space="preserve" text-anchor="start" x="2395.23" y="-824.11" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2414.12,-810.91 2414.12,-843.71 2595.15,-843.71 2595.15,-810.91 2414.12,-810.91"/>
<text xml:space="preserve" text-anchor="start" x="2417.12" y="-821.71" font-family="Arial" font-size="14.00" fill="#c9c9c9">单次消费产物流，暂存未就绪内容</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge8" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2243.34,-595.25C2430.42,-622.35 2678.75,-658.33 2907.94,-691.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2907.35,-694.11 2915.15,-692.59 2908.1,-688.91 2907.35,-694.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2422.13,-656.67 2422.13,-689.47 2446.13,-689.47 2446.13,-656.67 2422.13,-656.67"/>
<text xml:space="preserve" text-anchor="start" x="2430.23" y="-669.87" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2449.13,-656.67 2449.13,-689.47 2560.15,-689.47 2560.15,-656.67 2449.13,-656.67"/>
<text xml:space="preserve" text-anchor="start" x="2452.13" y="-667.47" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取暂存字节供校验</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge10" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2243.34,-543.23C2263.72,-542.82 2283.95,-542.47 2303.57,-542.2 2470.28,-539.92 2513.53,-519.52 2678.7,-542.2 2884.11,-570.4 3109.57,-634.79 3278.17,-689.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3277.1,-692.31 3285.04,-692.15 3278.73,-687.32 3277.1,-692.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2320.99,-545.2 2320.99,-578 2344.99,-578 2344.99,-545.2 2320.99,-545.2"/>
<text xml:space="preserve" text-anchor="start" x="2329.09" y="-558.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2347.99,-545.2 2347.99,-578 2661.28,-578 2661.28,-545.2 2347.99,-545.2"/>
<text xml:space="preserve" text-anchor="start" x="2350.99" y="-556" font-family="Arial" font-size="14.00" fill="#c9c9c9">将带产物身份的成功校验结果关联到同组候选，进入 ready</text>
</g>
<!-- assets&#45;&gt;asset_generation -->
<g id="edge4" class="edge">
<title>assets&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2090.15,-462.03C2153.27,-428 2229.59,-393.35 2303.57,-376.2 2544.37,-320.37 2818.71,-317.39 3047.63,-330.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3047.14,-333.59 3054.78,-331.43 3047.46,-328.35 3047.14,-333.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2404.62,-379.2 2404.62,-412 2428.62,-412 2428.62,-379.2 2404.62,-379.2"/>
<text xml:space="preserve" text-anchor="start" x="2412.73" y="-392.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2431.62,-379.2 2431.62,-412 2577.65,-412 2577.65,-379.2 2431.62,-379.2"/>
<text xml:space="preserve" text-anchor="start" x="2434.62" y="-390" font-family="Arial" font-size="14.00" fill="#c9c9c9">工作流绑定与原子远端执行</text>
</g>
<!-- assets&#45;&gt;asset_generation -->
<g id="edge6" class="edge">
<title>assets&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2029.69,-454.81C2096.3,-386.35 2195.6,-300.36 2303.57,-262.2 2441.57,-213.42 2780.65,-252.03 3068.75,-299.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2027.96,-452.82 2024.64,-460.04 2031.74,-456.47 2027.96,-452.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2404.62,-265.2 2404.62,-298 2428.62,-298 2428.62,-265.2 2404.62,-265.2"/>
<text xml:space="preserve" text-anchor="start" x="2412.73" y="-278.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2431.62,-265.2 2431.62,-298 2577.65,-298 2577.65,-265.2 2431.62,-265.2"/>
<text xml:space="preserve" text-anchor="start" x="2434.62" y="-276" font-family="Arial" font-size="14.00" fill="#c9c9c9">具名产物字节流与执行事实</text>
</g>
<!-- assets&#45;&gt;asset_processing -->
<g id="edge9" class="edge">
<title>assets&#45;&gt;asset_processing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2000.52,-462.24C2062.22,-371.71 2170.78,-236.66 2303.57,-174.2 2586.04,-41.33 2945.53,-32.09 3203.82,-48.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3203.44,-51.59 3211.1,-49.47 3203.79,-46.35 3203.44,-51.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2340.44,-177.2 2340.44,-210 2364.44,-210 2364.44,-177.2 2340.44,-177.2"/>
<text xml:space="preserve" text-anchor="start" x="2348.55" y="-190.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2367.44,-177.2 2367.44,-210 2641.83,-210 2641.83,-177.2 2367.44,-177.2"/>
<text xml:space="preserve" text-anchor="start" x="2370.44" y="-188" font-family="Arial" font-size="14.00" fill="#c9c9c9">按工作流输出绑定交付单文件或同组文件及明确要求</text>
</g>
<!-- asset_generation&#45;&gt;runninghub -->
<g id="edge5" class="edge">
<title>asset_generation&#45;&gt;runninghub</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4022.49,-389C4238.64,-389 4484.3,-389 4661.45,-389"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4661.43,-391.63 4668.93,-389 4661.43,-386.38 4661.43,-391.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4404.62,-392 4404.62,-424.8 4428.62,-424.8 4428.62,-392 4404.62,-392"/>
<text xml:space="preserve" text-anchor="start" x="4412.72" y="-405.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4431.62,-392 4431.62,-424.8 4608.78,-424.8 4608.78,-392 4431.62,-392"/>
<text xml:space="preserve" text-anchor="start" x="4434.62" y="-402.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">上传、prompt、history、view</text>
</g>
</g>
</svg>
`;case`asset_confirmation_flow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="5802pt" height="740pt"
 viewBox="0.00 0.00 5802.00 740.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 725.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="526.05,-334 0,-334 0,-154 526.05,-154 526.05,-334"/>
<text xml:space="preserve" text-anchor="start" x="173.02" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">工具合同与 HTTP 接入</text>
<text xml:space="preserve" text-anchor="start" x="95.07" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch</text>
<text xml:space="preserve" text-anchor="start" x="45.48" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</text>
</g>
<!-- logic_1 -->
<g id="node2" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1481.24,-334 984.35,-334 984.35,-154 1481.24,-154 1481.24,-334"/>
<text xml:space="preserve" text-anchor="start" x="1142.78" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="1054.39" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="1004.4" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="1115.27" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- assets -->
<g id="node3" class="node">
<title>assets</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2656.56,-479 2057.15,-479 2057.15,-299 2656.56,-299 2656.56,-479"/>
<text xml:space="preserve" text-anchor="start" x="2281.84" y="-428" font-family="Arial" font-size="20.00" fill="#eff6ff">资产任务与确认业务</text>
<text xml:space="preserve" text-anchor="start" x="2303.5" y="-405" font-family="Arial" font-size="15.00" fill="#bfdbfe">同一 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="2159.25" y="-387" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有跨请求任务标识、pending→running→ready/failed/canceled</text>
<text xml:space="preserve" text-anchor="start" x="2179.73" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入</text>
<text xml:space="preserve" text-anchor="start" x="2170.55" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed/discarded，写入成功或部分写入失败后重读失败进入</text>
<text xml:space="preserve" text-anchor="start" x="2077.2" y="-333" font-family="Arial" font-size="15.00" fill="#bfdbfe">reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</text>
</g>
<!-- asset_candidates -->
<g id="node4" class="node">
<title>asset_candidates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4821.61,-710 3218.69,-710 3218.69,-530 4821.61,-530 4821.61,-710"/>
<text xml:space="preserve" text-anchor="start" x="3961.81" y="-650" font-family="Arial" font-size="20.00" fill="#eff6ff">候选存储与释放</text>
<text xml:space="preserve" text-anchor="start" x="3981.38" y="-627" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="3238.75" y="-609" font-family="Arial" font-size="15.00" fill="#bfdbfe">独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次</text>
<text xml:space="preserve" text-anchor="start" x="3853.02" y="-591" font-family="Arial" font-size="15.00" fill="#bfdbfe">read 交付新的字节流，Scope 关闭释放全部所属资源。IO</text>
<text xml:space="preserve" text-anchor="start" x="3858.03" y="-573" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</text>
</g>
<!-- editing -->
<g id="node5" class="node">
<title>editing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4293.61,-325 3746.7,-325 3746.7,-145 4293.61,-145 4293.61,-325"/>
<text xml:space="preserve" text-anchor="start" x="3986.81" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑业务</text>
<text xml:space="preserve" text-anchor="start" x="3766.75" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change</text>
<text xml:space="preserve" text-anchor="start" x="3890.09" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plan 形成统一 EntityChange/Schematics</text>
<text xml:space="preserve" text-anchor="start" x="3819.28" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用</text>
<text xml:space="preserve" text-anchor="start" x="3915.97" y="-188" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views。TODO：编辑与重构编排。</text>
</g>
<!-- entities -->
<g id="node6" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5772.02,-325 5221.76,-325 5221.76,-145 5772.02,-145 5772.02,-325"/>
<text xml:space="preserve" text-anchor="start" x="5430.21" y="-274" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="5301.86" y="-251" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="5291.85" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="5241.82" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="5361.45" y="-197" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="5456.04" y="-179" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- view_service -->
<g id="node7" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2711.14,-180 2002.57,-180 2002.57,0 2711.14,0 2711.14,-180"/>
<text xml:space="preserve" text-anchor="start" x="2265.17" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="2161.4" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="2191.4" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="2242.25" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="2022.63" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M525.92,-244C665.18,-244 835.76,-244 974.34,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="974.16,-246.63 981.66,-244 974.16,-241.38 974.16,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="641.06,-247 641.06,-286.6 665.06,-286.6 665.06,-247 641.06,-247"/>
<text xml:space="preserve" text-anchor="start" x="649.17" y="-263.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="668.06,-247 668.06,-286.6 869.34,-286.6 869.34,-247 668.06,-247"/>
<text xml:space="preserve" text-anchor="start" x="671.06" y="-269.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">confirm：taskId、artifactId、目标</text>
<text xml:space="preserve" text-anchor="start" x="729.01" y="-252.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">RelativePath</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge14" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M535.67,-184.48C552.66,-182 569.56,-179.87 586.05,-178.2 735.64,-163.07 774.83,-162.38 924.35,-178.2 944.03,-180.28 964.29,-183.09 984.59,-186.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="535.68,-181.83 528.65,-185.53 536.45,-187.02 535.68,-181.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="589.05,-181.2 589.05,-214 620.62,-214 620.62,-181.2 589.05,-181.2"/>
<text xml:space="preserve" text-anchor="start" x="597.05" y="-194.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">13</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="623.62,-181.2 623.62,-214 921.35,-214 921.35,-181.2 623.62,-181.2"/>
<text xml:space="preserve" text-anchor="start" x="626.62" y="-192" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付实际资源身份及阶段错误；刷新失败保留已提交事实</text>
</g>
<!-- logic_1&#45;&gt;assets -->
<g id="edge2" class="edge">
<title>logic_1&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1480.89,-276.17C1501.3,-278.82 1521.62,-281.46 1541.24,-284 1708.5,-305.66 1895.1,-329.72 2047.46,-349.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2046.67,-351.88 2054.44,-350.24 2047.34,-346.67 2046.67,-351.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1661.23,-338.77 1661.23,-371.57 1685.23,-371.57 1685.23,-338.77 1661.23,-338.77"/>
<text xml:space="preserve" text-anchor="start" x="1669.33" y="-351.97" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1688.23,-338.77 1688.23,-371.57 1822.59,-371.57 1822.59,-338.77 1688.23,-338.77"/>
<text xml:space="preserve" text-anchor="start" x="1691.23" y="-349.57" font-family="Arial" font-size="14.00" fill="#c9c9c9">固定选定产物与确认信息</text>
</g>
<!-- logic_1&#45;&gt;assets -->
<g id="edge12" class="edge">
<title>logic_1&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1491.33,-206.21C1626.82,-193.45 1794.99,-188.91 1942.57,-218.2 1986.55,-226.93 2074.97,-262.55 2158.78,-299.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1491.45,-203.56 1484.23,-206.9 1491.95,-208.79 1491.45,-203.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1544.24,-221.2 1544.24,-254 1575.81,-254 1575.81,-221.2 1544.24,-221.2"/>
<text xml:space="preserve" text-anchor="start" x="1552.24" y="-234.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">11</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1578.81,-221.2 1578.81,-254 1939.57,-254 1939.57,-221.2 1578.81,-221.2"/>
<text xml:space="preserve" text-anchor="start" x="1581.81" y="-232" font-family="Arial" font-size="14.00" fill="#c9c9c9">分别交付写入与重读结果，重读失败时进入 reconciling 并保留候选</text>
</g>
<!-- logic_1&#45;&gt;view_service -->
<g id="edge13" class="edge">
<title>logic_1&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1451.84,-154.09C1481.48,-144.59 1511.83,-136.22 1541.24,-130.2 1687.04,-100.36 1850.43,-88.24 1992.39,-84.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1992.12,-86.96 1999.55,-84.14 1991.98,-81.71 1992.12,-86.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1599.1,-133.2 1599.1,-166 1630.67,-166 1630.67,-133.2 1599.1,-133.2"/>
<text xml:space="preserve" text-anchor="start" x="1607.1" y="-146.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">12</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1633.67,-133.2 1633.67,-166 1884.72,-166 1884.72,-133.2 1633.67,-133.2"/>
<text xml:space="preserve" text-anchor="start" x="1636.67" y="-144" font-family="Arial" font-size="14.00" fill="#c9c9c9">重读成功时使用同次实际变化主动刷新派生视图</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge3" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2510.32,-478.93C2586.05,-518.74 2680.55,-561.38 2771.14,-583 2910.77,-616.32 3061.69,-634.88 3208.7,-644.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3208.16,-646.68 3215.81,-644.52 3208.48,-641.44 3208.16,-646.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2849.23,-642.31 2849.23,-675.11 2873.23,-675.11 2873.23,-642.31 2849.23,-642.31"/>
<text xml:space="preserve" text-anchor="start" x="2857.34" y="-655.51" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2876.23,-642.31 2876.23,-675.11 3080.6,-675.11 3080.6,-642.31 2876.23,-642.31"/>
<text xml:space="preserve" text-anchor="start" x="2879.23" y="-653.11" font-family="Arial" font-size="14.00" fill="#c9c9c9">按校验结果读取所选产物及其关联文件</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge11" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2656.3,-430.5C2852.74,-457.81 3117.79,-494.67 3361.91,-528.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3361.26,-531.17 3369.05,-529.61 3361.99,-525.97 3361.26,-531.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2874.62,-500.57 2874.62,-533.37 2906.19,-533.37 2906.19,-500.57 2874.62,-500.57"/>
<text xml:space="preserve" text-anchor="start" x="2882.62" y="-513.77" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2909.19,-500.57 2909.19,-533.37 3055.21,-533.37 3055.21,-500.57 2909.19,-500.57"/>
<text xml:space="preserve" text-anchor="start" x="2912.19" y="-511.37" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交与重读成功后释放候选</text>
</g>
<!-- assets&#45;&gt;editing -->
<g id="edge4" class="edge">
<title>assets&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2656.3,-361.33C2962.78,-332.92 3436.22,-289.04 3736.72,-261.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3736.65,-263.82 3743.88,-260.52 3736.17,-258.6 3736.65,-263.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2774.14,-350.7 2774.14,-383.5 2798.14,-383.5 2798.14,-350.7 2774.14,-350.7"/>
<text xml:space="preserve" text-anchor="start" x="2782.24" y="-363.9" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2801.14,-350.7 2801.14,-383.5 3155.69,-383.5 3155.69,-350.7 2801.14,-350.7"/>
<text xml:space="preserve" text-anchor="start" x="2804.14" y="-361.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">importAsset：具名文件与目标准备统一 EntityChange，零写盘</text>
</g>
<!-- assets&#45;&gt;editing -->
<g id="edge6" class="edge">
<title>assets&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2585.8,-299.06C2645.21,-279.5 2709.8,-261.57 2771.14,-251.2 3098.83,-195.82 3481.84,-200.99 3736.25,-214.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3736.11,-216.65 3743.74,-214.41 3736.38,-211.4 3736.11,-216.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2808.39,-254.2 2808.39,-287 2832.39,-287 2832.39,-254.2 2808.39,-254.2"/>
<text xml:space="preserve" text-anchor="start" x="2816.49" y="-267.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2835.39,-254.2 2835.39,-287 3121.44,-287 3121.44,-254.2 2835.39,-254.2"/>
<text xml:space="preserve" text-anchor="start" x="2838.39" y="-265" font-family="Arial" font-size="14.00" fill="#c9c9c9">取得本次候选的只读预期结果，用于重读失败后的核对</text>
</g>
<!-- assets&#45;&gt;editing -->
<g id="edge8" class="edge">
<title>assets&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2612.33,-299.19C2647.45,-280.92 2681.56,-259.6 2711.14,-235 2747.76,-204.54 2729.07,-168.54 2771.14,-146.2 3083.09,19.51 3502.3,-61.14 3766.63,-142.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3765.53,-144.43 3773.47,-144.13 3767.07,-139.41 3765.53,-144.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2885.02,-149.2 2885.02,-182 2909.02,-182 2909.02,-149.2 2885.02,-149.2"/>
<text xml:space="preserve" text-anchor="start" x="2893.13" y="-162.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2912.02,-149.2 2912.02,-182 3044.81,-182 3044.81,-149.2 2912.02,-149.2"/>
<text xml:space="preserve" text-anchor="start" x="2915.02" y="-160" font-family="Arial" font-size="14.00" fill="#c9c9c9">commit：明确提交候选</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge5" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4293.6,-304.13C4525.54,-353.16 4867.03,-402.11 5161.76,-352 5194.85,-346.37 5229.03,-337.82 5262.32,-327.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5262.85,-330.44 5269.26,-325.74 5261.32,-325.42 5262.85,-330.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4884.61,-376.01 4884.61,-408.81 4908.61,-408.81 4908.61,-376.01 4884.61,-376.01"/>
<text xml:space="preserve" text-anchor="start" x="4892.72" y="-389.21" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4911.61,-376.01 4911.61,-408.81 5158.76,-408.81 5158.76,-376.01 4911.61,-376.01"/>
<text xml:space="preserve" text-anchor="start" x="4914.61" y="-386.81" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取目标与引用基准，构造资源及 GUID 操作</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge7" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4293.36,-235C4554.35,-235 4946.75,-235 5211.68,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5211.31,-237.63 5218.81,-235 5211.31,-232.38 5211.31,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4894.33,-238 4894.33,-270.8 4918.33,-270.8 4918.33,-238 4894.33,-238"/>
<text xml:space="preserve" text-anchor="start" x="4902.44" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4921.33,-238 4921.33,-270.8 5149.04,-270.8 5149.04,-238 4921.33,-238"/>
<text xml:space="preserve" text-anchor="start" x="4924.33" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">从同一候选取得文件、目录动作与预期内容</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge9" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4293.56,-195.64C4524.94,-167.87 4865.64,-140.32 5161.76,-169.2 5178.24,-170.81 5195.11,-172.85 5212.09,-175.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5211.31,-177.75 5219.11,-176.21 5212.05,-172.56 5211.31,-177.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4935.17,-172.2 4935.17,-205 4959.17,-205 4959.17,-172.2 4935.17,-172.2"/>
<text xml:space="preserve" text-anchor="start" x="4943.28" y="-185.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4962.17,-172.2 4962.17,-205 5108.2,-205 5108.2,-172.2 4962.17,-172.2"/>
<text xml:space="preserve" text-anchor="start" x="4965.17" y="-183" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验基准、提交并实际重读</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge10" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4303.54,-148.2C4535.59,-89.11 4872.09,-31.51 5161.76,-91.2 5216.35,-102.45 5273.01,-123.03 5323.82,-145.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4303.15,-145.59 4296.54,-150 4304.45,-150.68 4303.15,-145.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4917.67,-94.2 4917.67,-127 4941.67,-127 4941.67,-94.2 4917.67,-94.2"/>
<text xml:space="preserve" text-anchor="start" x="4925.78" y="-107.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4944.67,-94.2 4944.67,-127 5125.7,-127 5125.7,-94.2 4944.67,-94.2"/>
<text xml:space="preserve" text-anchor="start" x="4947.67" y="-105" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付同次实际重读结果与读取基准</text>
</g>
</g>
</svg>
`;case`asset_cancel_flow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3429pt" height="500pt"
 viewBox="0.00 0.00 3429.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-325 0,-325 0,-145 496.89,-145 496.89,-325"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-197" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- assets -->
<g id="node2" class="node">
<title>assets</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1462.28,-325 862.87,-325 862.87,-145 1462.28,-145 1462.28,-325"/>
<text xml:space="preserve" text-anchor="start" x="1087.56" y="-274" font-family="Arial" font-size="20.00" fill="#eff6ff">资产任务与确认业务</text>
<text xml:space="preserve" text-anchor="start" x="1109.22" y="-251" font-family="Arial" font-size="15.00" fill="#bfdbfe">同一 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="964.97" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有跨请求任务标识、pending→running→ready/failed/canceled</text>
<text xml:space="preserve" text-anchor="start" x="985.45" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入</text>
<text xml:space="preserve" text-anchor="start" x="976.27" y="-197" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed/discarded，写入成功或部分写入失败后重读失败进入</text>
<text xml:space="preserve" text-anchor="start" x="882.93" y="-179" font-family="Arial" font-size="15.00" fill="#bfdbfe">reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</text>
</g>
<!-- asset_generation -->
<g id="node3" class="node">
<title>asset_generation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3080.42,-470 2115.13,-470 2115.13,-290 3080.42,-290 3080.42,-470"/>
<text xml:space="preserve" text-anchor="start" x="2497.76" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">工作流绑定与远端生成执行</text>
<text xml:space="preserve" text-anchor="start" x="2135.19" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为</text>
<text xml:space="preserve" text-anchor="start" x="2391.47" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</text>
</g>
<!-- asset_candidates -->
<g id="node4" class="node">
<title>asset_candidates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3399.24,-180 1796.32,-180 1796.32,0 3399.24,0 3399.24,-180"/>
<text xml:space="preserve" text-anchor="start" x="2539.43" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">候选存储与释放</text>
<text xml:space="preserve" text-anchor="start" x="2559.01" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="1816.37" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次</text>
<text xml:space="preserve" text-anchor="start" x="2430.64" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">read 交付新的字节流，Scope 关闭释放全部所属资源。IO</text>
<text xml:space="preserve" text-anchor="start" x="2435.66" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</text>
</g>
<!-- logic&#45;&gt;assets -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.88,-235C606.48,-235 736.56,-235 852.46,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="852.39,-237.63 859.89,-235 852.39,-232.38 852.39,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-238 559.89,-270.8 583.89,-270.8 583.89,-238 559.89,-238"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-238 586.89,-270.8 799.87,-270.8 799.87,-238 586.89,-238"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">显式 cancel、discard 或关闭 Scope</text>
</g>
<!-- assets&#45;&gt;asset_generation -->
<g id="edge2" class="edge">
<title>assets&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1462.28,-265.22C1648.02,-284.01 1891.35,-308.63 2105.01,-330.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2104.74,-332.86 2112.47,-331 2105.27,-327.63 2104.74,-332.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1525.28,-293.25 1525.28,-326.05 1549.28,-326.05 1549.28,-293.25 1525.28,-293.25"/>
<text xml:space="preserve" text-anchor="start" x="1533.39" y="-306.45" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1552.28,-293.25 1552.28,-326.05 1733.32,-326.05 1733.32,-293.25 1552.28,-293.25"/>
<text xml:space="preserve" text-anchor="start" x="1555.28" y="-304.05" font-family="Arial" font-size="14.00" fill="#c9c9c9">中断本地执行，报告远端停止事实</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge3" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1462.28,-204.78C1558.74,-195.02 1670.72,-183.69 1786.01,-172.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1786.25,-174.64 1793.45,-171.27 1785.72,-169.42 1786.25,-174.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1542.79,-199.11 1542.79,-231.91 1566.79,-231.91 1566.79,-199.11 1542.79,-199.11"/>
<text xml:space="preserve" text-anchor="start" x="1550.89" y="-212.31" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1569.79,-199.11 1569.79,-231.91 1715.81,-231.91 1715.81,-199.11 1569.79,-199.11"/>
<text xml:space="preserve" text-anchor="start" x="1572.79" y="-209.91" font-family="Arial" font-size="14.00" fill="#c9c9c9">释放所属未完成或丢弃候选</text>
</g>
</g>
</svg>
`;case`asset_reconciliation_flow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3663pt" height="953pt"
 viewBox="0.00 0.00 3663.00 953.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 938.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-542 0,-542 0,-362 496.89,-362 496.89,-542"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-473" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-450" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-432" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-414" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- assets -->
<g id="node2" class="node">
<title>assets</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1617.96,-769 1018.55,-769 1018.55,-589 1617.96,-589 1617.96,-769"/>
<text xml:space="preserve" text-anchor="start" x="1243.24" y="-718" font-family="Arial" font-size="20.00" fill="#eff6ff">资产任务与确认业务</text>
<text xml:space="preserve" text-anchor="start" x="1264.9" y="-695" font-family="Arial" font-size="15.00" fill="#bfdbfe">同一 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="1120.65" y="-677" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有跨请求任务标识、pending→running→ready/failed/canceled</text>
<text xml:space="preserve" text-anchor="start" x="1141.13" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入</text>
<text xml:space="preserve" text-anchor="start" x="1131.95" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed/discarded，写入成功或部分写入失败后重读失败进入</text>
<text xml:space="preserve" text-anchor="start" x="1038.61" y="-623" font-family="Arial" font-size="15.00" fill="#bfdbfe">reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</text>
</g>
<!-- entities -->
<g id="node3" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1593.39,-470 1043.13,-470 1043.13,-290 1593.39,-290 1593.39,-470"/>
<text xml:space="preserve" text-anchor="start" x="1251.58" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="1123.23" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="1113.22" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="1063.19" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="1182.82" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="1277.41" y="-324" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- view_service -->
<g id="node4" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1672.54,-180 963.98,-180 963.98,0 1672.54,0 1672.54,-180"/>
<text xml:space="preserve" text-anchor="start" x="1226.57" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="1122.8" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="1152.81" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="1203.66" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="984.03" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- editing -->
<g id="node5" class="node">
<title>editing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3104.83,-538 2557.92,-538 2557.92,-358 3104.83,-358 3104.83,-538"/>
<text xml:space="preserve" text-anchor="start" x="2798.03" y="-478" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑业务</text>
<text xml:space="preserve" text-anchor="start" x="2577.97" y="-455" font-family="Arial" font-size="15.00" fill="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change</text>
<text xml:space="preserve" text-anchor="start" x="2701.31" y="-437" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plan 形成统一 EntityChange/Schematics</text>
<text xml:space="preserve" text-anchor="start" x="2630.5" y="-419" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用</text>
<text xml:space="preserve" text-anchor="start" x="2727.19" y="-401" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views。TODO：编辑与重构编排。</text>
</g>
<!-- asset_candidates -->
<g id="node6" class="node">
<title>asset_candidates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3632.83,-923 2029.91,-923 2029.91,-743 3632.83,-743 3632.83,-923"/>
<text xml:space="preserve" text-anchor="start" x="2773.03" y="-863" font-family="Arial" font-size="20.00" fill="#eff6ff">候选存储与释放</text>
<text xml:space="preserve" text-anchor="start" x="2792.6" y="-840" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="2049.97" y="-822" font-family="Arial" font-size="15.00" fill="#bfdbfe">独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次</text>
<text xml:space="preserve" text-anchor="start" x="2664.24" y="-804" font-family="Arial" font-size="15.00" fill="#bfdbfe">read 交付新的字节流，Scope 关闭释放全部所属资源。IO</text>
<text xml:space="preserve" text-anchor="start" x="2669.25" y="-786" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</text>
</g>
<!-- logic&#45;&gt;assets -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M468.39,-541.99C497.82,-552.12 527.87,-561.48 556.89,-569 703.17,-606.92 868.89,-632.82 1008.2,-649.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1007.84,-652.51 1015.6,-650.81 1008.47,-647.3 1007.84,-652.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-636.62 559.89,-669.42 583.89,-669.42 583.89,-636.62 559.89,-636.62"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-649.82" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-636.62 586.89,-669.42 900.98,-669.42 900.98,-636.62 586.89,-636.62"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-647.42" font-family="Arial" font-size="14.00" fill="#c9c9c9">源事件或 status 触发实体重建；status 返回当前阶段事实</text>
</g>
<!-- logic&#45;&gt;assets -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.81,-452.53C620.59,-457.53 771.82,-470.84 903.98,-503.2 926.19,-508.64 1014.88,-546.03 1104.43,-584.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1103.24,-587.28 1111.16,-587.87 1105.33,-582.47 1103.24,-587.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="626.42,-506.2 626.42,-539 650.42,-539 650.42,-506.2 626.42,-506.2"/>
<text xml:space="preserve" text-anchor="start" x="634.53" y="-519.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="653.42,-506.2 653.42,-539 834.45,-539 834.45,-506.2 653.42,-506.2"/>
<text xml:space="preserve" text-anchor="start" x="656.42" y="-517" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付已重建的实体状态供任务核对</text>
</g>
<!-- logic&#45;&gt;entities -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.61,-365.33C516.83,-360.47 537.09,-356.3 556.89,-353.2 713.17,-328.71 889.62,-332.99 1033.17,-344.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1032.74,-347.09 1040.43,-345.09 1033.17,-341.86 1032.74,-347.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="626.42,-356.2 626.42,-389 650.42,-389 650.42,-356.2 626.42,-356.2"/>
<text xml:space="preserve" text-anchor="start" x="634.53" y="-369.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="653.42,-356.2 653.42,-389 834.45,-389 834.45,-356.2 653.42,-356.2"/>
<text xml:space="preserve" text-anchor="start" x="656.42" y="-367" font-family="Arial" font-size="14.00" fill="#c9c9c9">按需完整重读实体，交付实际变化</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge4" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M380.3,-362.19C433.26,-329.1 496.15,-293.74 556.89,-269.2 682.52,-218.45 825.88,-180.02 954.01,-152.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="954.26,-154.66 961.04,-150.5 953.15,-149.52 954.26,-154.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="597.25,-272.2 597.25,-305 621.25,-305 621.25,-272.2 597.25,-272.2"/>
<text xml:space="preserve" text-anchor="start" x="605.35" y="-285.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="624.25,-272.2 624.25,-305 863.62,-305 863.62,-272.2 624.25,-272.2"/>
<text xml:space="preserve" text-anchor="start" x="627.25" y="-283" font-family="Arial" font-size="14.00" fill="#c9c9c9">按实际变化刷新派生视图，刷新错误独立交付</text>
</g>
<!-- assets&#45;&gt;editing -->
<g id="edge5" class="edge">
<title>assets&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1617.81,-633.36C1887.96,-592.06 2282.98,-531.68 2548,-491.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2548.14,-493.8 2555.16,-490.07 2547.35,-488.61 2548.14,-493.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1758.88,-613.74 1758.88,-646.54 1782.88,-646.54 1782.88,-613.74 1758.88,-613.74"/>
<text xml:space="preserve" text-anchor="start" x="1766.99" y="-626.94" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1785.88,-613.74 1785.88,-646.54 1943.57,-646.54 1943.57,-613.74 1785.88,-613.74"/>
<text xml:space="preserve" text-anchor="start" x="1788.88" y="-624.54" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付本次提交的只读预期结果</text>
</g>
<!-- assets&#45;&gt;editing -->
<g id="edge8" class="edge">
<title>assets&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1605.82,-583.49C1630.72,-566.91 1653.6,-547.55 1672.54,-525 1745.42,-438.23 1643.48,-347.27 1732.54,-277.2 2007.68,-60.73 2444.52,-237.06 2675.47,-358.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1604.71,-581.08 1599.85,-587.36 1607.57,-585.49 1604.71,-581.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1799.72,-280.2 1799.72,-313 1823.72,-313 1823.72,-280.2 1799.72,-280.2"/>
<text xml:space="preserve" text-anchor="start" x="1807.83" y="-293.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1826.72,-280.2 1826.72,-313 1902.73,-313 1902.73,-280.2 1826.72,-280.2"/>
<text xml:space="preserve" text-anchor="start" x="1829.72" y="-291" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付核对结果</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge9" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1617.81,-709.43C1735.19,-721.39 1876.15,-735.75 2019.78,-750.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2019.38,-752.99 2027.11,-751.14 2019.92,-747.77 2019.38,-752.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1782.22,-745.21 1782.22,-778.01 1806.22,-778.01 1806.22,-745.21 1782.22,-745.21"/>
<text xml:space="preserve" text-anchor="start" x="1790.32" y="-758.41" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1809.22,-745.21 1809.22,-778.01 1920.24,-778.01 1920.24,-745.21 1809.22,-745.21"/>
<text xml:space="preserve" text-anchor="start" x="1812.22" y="-756.01" font-family="Arial" font-size="14.00" fill="#c9c9c9">核对一致后释放候选</text>
</g>
<!-- entities&#45;&gt;editing -->
<g id="edge6" class="edge">
<title>entities&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1603.52,-402.87C1646.73,-405.9 1690.8,-408.73 1732.54,-411 2013.77,-426.28 2335.89,-436.24 2558.13,-441.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1603.83,-400.26 1596.17,-402.35 1603.46,-405.5 1603.83,-400.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1735.54,-424.2 1735.54,-457 1759.54,-457 1759.54,-424.2 1735.54,-424.2"/>
<text xml:space="preserve" text-anchor="start" x="1743.65" y="-437.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1762.54,-424.2 1762.54,-457 1966.91,-457 1966.91,-424.2 1762.54,-424.2"/>
<text xml:space="preserve" text-anchor="start" x="1765.54" y="-435" font-family="Arial" font-size="14.00" fill="#c9c9c9">核对实际文件、目录、身份与预期结果</text>
</g>
<!-- entities&#45;&gt;editing -->
<g id="edge7" class="edge">
<title>entities&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1593.32,-353.67C1639.74,-350.14 1687.49,-347.09 1732.54,-345.2 2010.38,-333.52 2326.4,-368.2 2547.81,-400.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2547.15,-402.94 2554.95,-401.43 2547.91,-397.75 2547.15,-402.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1770.55,-348.2 1770.55,-381 1794.55,-381 1794.55,-348.2 1770.55,-348.2"/>
<text xml:space="preserve" text-anchor="start" x="1778.65" y="-361.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1797.55,-348.2 1797.55,-381 1931.91,-381 1931.91,-348.2 1797.55,-348.2"/>
<text xml:space="preserve" text-anchor="start" x="1800.55" y="-359" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付一致结果或具体冲突</text>
</g>
</g>
</svg>
`;case`assets_context`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2178pt" height="856pt"
 viewBox="0.00 0.00 2178.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- frontend -->
<g id="node1" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="433.55,-825.6 0,-825.6 0,-645.6 433.55,-645.6 433.55,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="166.77" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">单一前端扩展</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供 VS Code 配置、侧栏与 Host 接入；领域状态保留在 Toolkit。</text>
</g>
<!-- toolkit -->
<g id="node2" class="node">
<title>toolkit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="854.38,-502.8 379.18,-502.8 379.18,-322.8 854.38,-322.8 854.38,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="517.3" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit TypeScript 产品</text>
<text xml:space="preserve" text-anchor="start" x="399.23" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。</text>
</g>
<!-- pi_agent -->
<g id="node3" class="node">
<title>pi_agent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1077.67,-825.6 543.88,-825.6 543.88,-645.6 1077.67,-645.6 1077.67,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="757.43" y="-756.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi 官方运行时</text>
<text xml:space="preserve" text-anchor="start" x="735.75" y="-733.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">外部 Pi v1.0.0，官方提交</text>
<text xml:space="preserve" text-anchor="start" x="563.94" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP</text>
<text xml:space="preserve" text-anchor="start" x="606.56" y="-697.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。</text>
</g>
<!-- asset_settings -->
<g id="node4" class="node">
<title>asset_settings</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2147.51,-825.6 1188.04,-825.6 1188.04,-645.6 2147.51,-645.6 2147.51,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1584.43" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">运行时配置与凭据来源</text>
<text xml:space="preserve" text-anchor="start" x="1507.29" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">VS Code 原生 WorkspaceConfiguration 或 Pi 显式</text>
<text xml:space="preserve" text-anchor="start" x="1208.1" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">flags、指定配置文件提供参数与可选明文凭据，不额外加密。入口只选择自己的一个来源，公开参数与凭据分开交付，凭据不进入调用记录或日志；不使用环境变量。</text>
</g>
<!-- runninghub -->
<g id="node5" class="node">
<title>runninghub</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="522.05,-180 53.51,-180 53.51,0 522.05,0 522.05,-180"/>
<text xml:space="preserve" text-anchor="start" x="151.62" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">RunningHub 远端 ComfyUI 执行</text>
<text xml:space="preserve" text-anchor="start" x="122.32" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">外部推理与计费边界。仅使用 /proxy 或 /proxy&#45;plus 原生</text>
<text xml:space="preserve" text-anchor="start" x="120.22" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">ComfyUI：upload/image 上传、prompt 提交、history</text>
<text xml:space="preserve" text-anchor="start" x="120.24" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询、view 下载；不使用代理 WS。模型库 resource/list</text>
<text xml:space="preserve" text-anchor="start" x="73.56" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于已允许的只读清单查询，标准模型与 LLM API 生成通道不进入架构。</text>
</g>
<!-- asset_storage -->
<g id="node6" class="node">
<title>asset_storage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1259.64,-180 631.91,-180 631.91,0 1259.64,0 1259.64,-180"/>
<text xml:space="preserve" text-anchor="start" x="862.43" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">运行时用户候选暂存区</text>
<text xml:space="preserve" text-anchor="start" x="736.55" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">玩家机器的工程外暂存资源，区别于开发仓库和 test/data/projects。每个</text>
<text xml:space="preserve" text-anchor="start" x="907.01" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="651.97" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">独占；暂存绝对路径仅在存储文件系统边界使用，对内部交付产物标识及字节流。成功入库、丢弃、失败和</text>
<text xml:space="preserve" text-anchor="start" x="866.17" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 关闭释放所属资源。</text>
</g>
<!-- frontend&#45;&gt;toolkit -->
<g id="edge1" class="edge">
<title>frontend&#45;&gt;toolkit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M223.16,-645.6C229.12,-616.49 240.03,-585.76 259.78,-562.8 289.51,-528.24 328.56,-501.54 369.91,-480.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="371,-483.34 376.6,-477.7 368.71,-478.61 371,-483.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="259.78,-562.8 259.78,-585.6 286.78,-585.6 286.78,-562.8 259.78,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="262.78" y="-571" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- toolkit&#45;&gt;frontend -->
<g id="edge4" class="edge">
<title>toolkit&#45;&gt;frontend</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M504.92,-502.72C480.14,-522.47 454.02,-543.32 429.73,-562.8 398.81,-587.59 365.42,-614.47 334.47,-639.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="333.19,-637.09 329.01,-643.84 336.49,-641.18 333.19,-637.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="429.73,-562.8 429.73,-585.6 680.78,-585.6 680.78,-562.8 429.73,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="432.73" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">通过原生配置适配验证当前值、边界与读取失败</text>
</g>
<!-- toolkit&#45;&gt;runninghub -->
<g id="edge5" class="edge">
<title>toolkit&#45;&gt;runninghub</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M525.57,-322.87C482.25,-280.62 430.4,-230.07 386.19,-186.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="388.25,-185.3 381.04,-181.94 384.58,-189.06 388.25,-185.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462.14,-240 462.14,-262.8 643.18,-262.8 643.18,-240 462.14,-240"/>
<text xml:space="preserve" text-anchor="start" x="465.14" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">原生远端执行与只读模型事实查询</text>
</g>
<!-- toolkit&#45;&gt;asset_storage -->
<g id="edge6" class="edge">
<title>toolkit&#45;&gt;asset_storage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M707.99,-322.87C751.31,-280.62 803.16,-230.07 847.37,-186.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="848.97,-189.06 852.51,-181.94 845.31,-185.3 848.97,-189.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="791.14,-240 791.14,-262.8 961.31,-262.8 961.31,-240 791.14,-240"/>
<text xml:space="preserve" text-anchor="start" x="794.14" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">工程外流式暂存与 Scope 释放</text>
</g>
<!-- pi_agent&#45;&gt;toolkit -->
<g id="edge2" class="edge">
<title>pi_agent&#45;&gt;toolkit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M757,-645.67C731.82,-604.03 701.76,-554.32 675.94,-511.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="678.19,-510.28 672.06,-505.22 673.7,-513 678.19,-510.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="719.59,-562.8 719.59,-585.6 982.3,-585.6 982.3,-562.8 719.59,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="722.59" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">官方扩展加载、会话事件、MCP 连接与结果交付</text>
</g>
<!-- asset_settings&#45;&gt;toolkit -->
<g id="edge3" class="edge">
<title>asset_settings&#45;&gt;toolkit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1376.41,-645.67C1215.46,-596.54 1017.69,-536.17 864.29,-489.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="865.09,-486.85 857.15,-487.17 863.55,-491.87 865.09,-486.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1173.79,-562.8 1173.79,-585.6 1343.16,-585.6 1343.16,-562.8 1173.79,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1176.79" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">入口选择配置与凭据的唯一来源</text>
</g>
</g>
</svg>
`;case`assets_pipeline`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3457pt" height="2229pt"
 viewBox="0.00 0.00 3457.00 2229.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2213.65)">
<g id="clust1" class="cluster">
<title>cluster_mcp</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2082.12,-1925.4 2082.12,-2190.6 2672.12,-2190.6 2672.12,-1925.4 2082.12,-1925.4"/>
<text xml:space="preserve" text-anchor="start" x="2090.12" y="-2177.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MCP 协议接入</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_host</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2097.12,-1623.2 2097.12,-1888.4 2657.12,-1888.4 2657.12,-1623.2 2097.12,-1623.2"/>
<text xml:space="preserve" text-anchor="start" x="2105.12" y="-1875.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">工作区 HOST</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_config</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="620.12,-8 620.12,-273.2 1212.12,-273.2 1212.12,-8 620.12,-8"/>
<text xml:space="preserve" text-anchor="start" x="628.12" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">配置来源抽象与实现</text>
</g>
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2640.14,-2137.4 2114.09,-2137.4 2114.09,-1957.4 2640.14,-1957.4 2640.14,-2137.4"/>
<text xml:space="preserve" text-anchor="start" x="2287.11" y="-2068.4" font-family="Arial" font-size="20.00" fill="#eff6ff">工具合同与 HTTP 接入</text>
<text xml:space="preserve" text-anchor="start" x="2209.16" y="-2045.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch</text>
<text xml:space="preserve" text-anchor="start" x="2159.57" y="-2027.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host</text>
<text xml:space="preserve" text-anchor="start" x="2134.15" y="-2009.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</text>
</g>
<!-- logic_1 -->
<g id="node2" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2625.56,-1835.2 2128.67,-1835.2 2128.67,-1655.2 2625.56,-1655.2 2625.56,-1835.2"/>
<text xml:space="preserve" text-anchor="start" x="2287.1" y="-1766.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="2198.71" y="-1743.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="2148.73" y="-1725.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="2259.59" y="-1707.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- logic_2 -->
<g id="node3" class="node">
<title>logic_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1179.97,-220 652.26,-220 652.26,-40 1179.97,-40 1179.97,-220"/>
<text xml:space="preserve" text-anchor="start" x="866.11" y="-169" font-family="Arial" font-size="20.00" fill="#eff6ff">只读配置来源</text>
<text xml:space="preserve" text-anchor="start" x="781.06" y="-146" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供统一只读 ConfigSource、ToolkitConfig</text>
<text xml:space="preserve" text-anchor="start" x="700.63" y="-128" font-family="Arial" font-size="15.00" fill="#bfdbfe">和资产凭据端口；PiConfigSource 在本模块解释官方显式输入，VS Code</text>
<text xml:space="preserve" text-anchor="start" x="792.32" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">的具体 WorkspaceConfiguration 适配由</text>
<text xml:space="preserve" text-anchor="start" x="866.5" y="-92" font-family="Arial" font-size="15.00" fill="#bfdbfe">frontend.plugin</text>
<text xml:space="preserve" text-anchor="start" x="672.32" y="-74" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载。两种入口各自注入唯一来源，默认值由宿主原生声明，凭据按远端执行边界读取。</text>
</g>
<!-- assets -->
<g id="node4" class="node">
<title>assets</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2151.82,-1512.4 1552.41,-1512.4 1552.41,-1332.4 2151.82,-1332.4 2151.82,-1512.4"/>
<text xml:space="preserve" text-anchor="start" x="1777.1" y="-1461.4" font-family="Arial" font-size="20.00" fill="#eff6ff">资产任务与确认业务</text>
<text xml:space="preserve" text-anchor="start" x="1798.76" y="-1438.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">同一 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="1654.51" y="-1420.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有跨请求任务标识、pending→running→ready/failed/canceled</text>
<text xml:space="preserve" text-anchor="start" x="1674.99" y="-1402.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入</text>
<text xml:space="preserve" text-anchor="start" x="1665.81" y="-1384.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed/discarded，写入成功或部分写入失败后重读失败进入</text>
<text xml:space="preserve" text-anchor="start" x="1572.47" y="-1366.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</text>
</g>
<!-- asset_candidates -->
<g id="node5" class="node">
<title>asset_candidates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.58,-1189.6 114.66,-1189.6 114.66,-1009.6 1717.58,-1009.6 1717.58,-1189.6"/>
<text xml:space="preserve" text-anchor="start" x="857.77" y="-1129.6" font-family="Arial" font-size="20.00" fill="#eff6ff">候选存储与释放</text>
<text xml:space="preserve" text-anchor="start" x="877.35" y="-1106.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="134.71" y="-1088.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次</text>
<text xml:space="preserve" text-anchor="start" x="748.98" y="-1070.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">read 交付新的字节流，Scope 关闭释放全部所属资源。IO</text>
<text xml:space="preserve" text-anchor="start" x="754" y="-1052.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</text>
</g>
<!-- editing -->
<g id="node6" class="node">
<title>editing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3061.57,-1189.6 2514.66,-1189.6 2514.66,-1009.6 3061.57,-1009.6 3061.57,-1189.6"/>
<text xml:space="preserve" text-anchor="start" x="2754.78" y="-1129.6" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑业务</text>
<text xml:space="preserve" text-anchor="start" x="2534.72" y="-1106.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change</text>
<text xml:space="preserve" text-anchor="start" x="2658.06" y="-1088.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plan 形成统一 EntityChange/Schematics</text>
<text xml:space="preserve" text-anchor="start" x="2587.24" y="-1070.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用</text>
<text xml:space="preserve" text-anchor="start" x="2683.93" y="-1052.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views。TODO：编辑与重构编排。</text>
</g>
<!-- asset_processing -->
<g id="node7" class="node">
<title>asset_processing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2186.48,-866.8 1533.75,-866.8 1533.75,-686.8 2186.48,-686.8 2186.48,-866.8"/>
<text xml:space="preserve" text-anchor="start" x="1760.1" y="-806.8" font-family="Arial" font-size="20.00" fill="#eff6ff">产物确定性校验与切片预览</text>
<text xml:space="preserve" text-anchor="start" x="1553.81" y="-783.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与</text>
<text xml:space="preserve" text-anchor="start" x="1598.4" y="-765.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成</text>
<text xml:space="preserve" text-anchor="start" x="1727.15" y="-747.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument，经唯一 CPU renderer</text>
<text xml:space="preserve" text-anchor="start" x="1592.56" y="-729.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。</text>
</g>
<!-- entities -->
<g id="node8" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3283.25,-866.8 2732.99,-866.8 2732.99,-686.8 3283.25,-686.8 3283.25,-866.8"/>
<text xml:space="preserve" text-anchor="start" x="2941.44" y="-815.8" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="2813.09" y="-792.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="2803.08" y="-774.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="2753.04" y="-756.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="2872.67" y="-738.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="2967.27" y="-720.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- asset_generation -->
<g id="node9" class="node">
<title>asset_generation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1398.76,-544 433.47,-544 433.47,-364 1398.76,-364 1398.76,-544"/>
<text xml:space="preserve" text-anchor="start" x="816.1" y="-466" font-family="Arial" font-size="20.00" fill="#eff6ff">工作流绑定与远端生成执行</text>
<text xml:space="preserve" text-anchor="start" x="453.53" y="-443" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为</text>
<text xml:space="preserve" text-anchor="start" x="709.81" y="-425" font-family="Arial" font-size="15.00" fill="#bfdbfe">RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</text>
</g>
<!-- renderer -->
<g id="node10" class="node">
<title>renderer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2133.97,-544 1586.26,-544 1586.26,-364 2133.97,-364 2133.97,-544"/>
<text xml:space="preserve" text-anchor="start" x="1766.2" y="-484" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas CPU 渲染引擎</text>
<text xml:space="preserve" text-anchor="start" x="1841.36" y="-461" font-family="Arial" font-size="15.00" fill="#bfdbfe">结构化</text>
<text xml:space="preserve" text-anchor="start" x="1622.55" y="-443" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经</text>
<text xml:space="preserve" text-anchor="start" x="1750.08" y="-425" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasKit/Skia CPU surface 输出</text>
<text xml:space="preserve" text-anchor="start" x="1606.32" y="-407" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2377.12,-1957.55C2377.12,-1922.23 2377.12,-1881.44 2377.12,-1845.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2379.74,-1845.61 2377.12,-1838.11 2374.49,-1845.61 2379.74,-1845.61"/>
</g>
<!-- logic_1&#45;&gt;assets -->
<g id="edge2" class="edge">
<title>logic_1&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2128.91,-1672.55C2079.33,-1652.02 2029.5,-1626.48 1987.03,-1595.2 1959.36,-1574.81 1934.38,-1547.33 1913.64,-1520.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1915.78,-1518.8 1909.17,-1514.39 1911.58,-1521.96 1915.78,-1518.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1987.03,-1572.4 1987.03,-1595.2 2294.12,-1595.2 2294.12,-1572.4 1987.03,-1572.4"/>
<text xml:space="preserve" text-anchor="start" x="1990.03" y="-1578.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">同一 Workspace Layer 装配，Host 分发具名资产命令</text>
</g>
<!-- logic_1&#45;&gt;asset_candidates -->
<g id="edge3" class="edge">
<title>logic_1&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2128.83,-1720.12C1921.06,-1692.2 1621.65,-1633.43 1386.1,-1512.4 1231.55,-1432.99 1086.43,-1291.76 999.42,-1197.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1001.53,-1195.55 994.53,-1191.79 997.66,-1199.1 1001.53,-1195.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1386.1,-1411 1386.1,-1433.8 1497.12,-1433.8 1497.12,-1411 1386.1,-1411"/>
<text xml:space="preserve" text-anchor="start" x="1389.1" y="-1416.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享工作区候选服务</text>
</g>
<!-- logic_1&#45;&gt;editing -->
<g id="edge4" class="edge">
<title>logic_1&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2433.83,-1655.39C2510.39,-1535.5 2646.33,-1322.63 2725.71,-1198.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2727.87,-1199.82 2729.69,-1192.09 2723.45,-1196.99 2727.87,-1199.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2636.84,-1411 2636.84,-1433.8 2961.03,-1433.8 2961.03,-1411 2636.84,-1411"/>
<text xml:space="preserve" text-anchor="start" x="2639.84" y="-1416.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令</text>
</g>
<!-- logic_1&#45;&gt;asset_processing -->
<g id="edge5" class="edge">
<title>logic_1&#45;&gt;asset_processing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2369.53,-1655.46C2357.92,-1552.99 2329.63,-1381.61 2263.12,-1249.6 2188.91,-1102.31 2059.32,-962.45 1967.13,-873.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1969.15,-872.1 1961.91,-868.81 1965.52,-875.89 1969.15,-872.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2272.24,-1249.6 2272.24,-1272.4 2383.26,-1272.4 2383.26,-1249.6 2272.24,-1249.6"/>
<text xml:space="preserve" text-anchor="start" x="2275.24" y="-1255.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享工作区处理服务</text>
</g>
<!-- logic_1&#45;&gt;entities -->
<g id="edge6" class="edge">
<title>logic_1&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2625.31,-1699.39C2747.89,-1666.03 2890.12,-1608.94 2988.12,-1512.4 3152.38,-1350.57 3152.31,-1237.34 3116.12,-1009.6 3108.76,-963.33 3089.12,-915.82 3068.57,-875.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3070.97,-874.88 3065.16,-869.46 3066.32,-877.32 3070.97,-874.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3132.53,-1249.6 3132.53,-1272.4 3427.16,-1272.4 3427.16,-1249.6 3132.53,-1249.6"/>
<text xml:space="preserve" text-anchor="start" x="3135.53" y="-1255.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Host 主动重读实体；WorkspaceServices 读取状态</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge7" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1592.63,-1332.47C1465.95,-1289.05 1313.65,-1236.85 1185.65,-1192.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1186.51,-1190.5 1178.56,-1190.55 1184.81,-1195.46 1186.51,-1190.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1412.18,-1249.6 1412.18,-1272.4 1628.22,-1272.4 1628.22,-1249.6 1412.18,-1249.6"/>
<text xml:space="preserve" text-anchor="start" x="1415.18" y="-1255.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">任务关联候选标识、读取确认内容并释放</text>
</g>
<!-- assets&#45;&gt;editing -->
<g id="edge8" class="edge">
<title>assets&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1909.84,-1332.82C1934.3,-1301.94 1965.36,-1269.96 2000.74,-1249.6 2085.54,-1200.79 2314.87,-1160.63 2504.29,-1134.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2504.64,-1136.96 2511.71,-1133.33 2503.92,-1131.76 2504.64,-1136.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2000.74,-1249.6 2000.74,-1272.4 2240.12,-1272.4 2240.12,-1249.6 2000.74,-1249.6"/>
<text xml:space="preserve" text-anchor="start" x="2003.74" y="-1255.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">明确确认准备候选并提交，返回实际资源身份</text>
</g>
<!-- assets&#45;&gt;asset_processing -->
<g id="edge9" class="edge">
<title>assets&#45;&gt;asset_processing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1853.22,-1332.59C1854.71,-1213.18 1857.34,-1001.53 1858.88,-877.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1861.51,-877.29 1858.97,-869.76 1856.26,-877.23 1861.51,-877.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1857.17,-1088.2 1857.17,-1111 1991.53,-1111 1991.53,-1088.2 1857.17,-1088.2"/>
<text xml:space="preserve" text-anchor="start" x="1860.17" y="-1094" font-family="Arial" font-size="14.00" fill="#c9c9c9">产物校验与明确切片预览</text>
</g>
<!-- assets&#45;&gt;asset_generation -->
<g id="edge10" class="edge">
<title>assets&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1552.73,-1337.97C1543.1,-1335.99 1533.55,-1334.13 1524.12,-1332.4 1202.59,-1273.53 279.75,-1431.7 60.12,-1189.6 -173.11,-932.51 327,-679.26 656.75,-547.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="657.64,-550.26 663.64,-545.05 655.7,-545.38 657.64,-550.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="43.18,-926.8 43.18,-949.6 282.56,-949.6 282.56,-926.8 43.18,-926.8"/>
<text xml:space="preserve" text-anchor="start" x="46.18" y="-932.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">任务绑定原子生成与评阅，不转移调度所有权</text>
</g>
<!-- asset_candidates&#45;&gt;asset_processing -->
<g id="edge11" class="edge">
<title>asset_candidates&#45;&gt;asset_processing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1177.82,-1009.67C1305.71,-966.2 1459.5,-913.94 1588.66,-870.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1589.19,-872.64 1595.45,-867.74 1587.5,-867.67 1589.19,-872.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1416.42,-926.8 1416.42,-949.6 1585.79,-949.6 1585.79,-926.8 1416.42,-926.8"/>
<text xml:space="preserve" text-anchor="start" x="1419.42" y="-932.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">保存同一产物的确定性校验结果</text>
</g>
<!-- asset_candidates&#45;&gt;asset_generation -->
<g id="edge12" class="edge">
<title>asset_candidates&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M916.12,-1009.79C916.12,-890.38 916.12,-678.73 916.12,-554.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="918.74,-554.46 916.12,-546.96 913.49,-554.46 918.74,-554.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="916.12,-765.4 916.12,-788.2 1015.47,-788.2 1015.47,-765.4 916.12,-765.4"/>
<text xml:space="preserve" text-anchor="start" x="919.12" y="-771.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">暂存具名产物字节</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge13" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2849.11,-1009.67C2877.78,-967.86 2912.03,-917.91 2941.4,-875.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2943.41,-876.8 2945.49,-869.13 2939.08,-873.83 2943.41,-876.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2904.71,-926.8 2904.71,-949.6 3062.41,-949.6 3062.41,-926.8 2904.71,-926.8"/>
<text xml:space="preserve" text-anchor="start" x="2907.71" y="-932.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">编辑候选经唯一实体入口提交</text>
</g>
<!-- asset_processing&#45;&gt;asset_generation -->
<g id="edge14" class="edge">
<title>asset_processing&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1598.41,-686.87C1470.52,-643.4 1316.74,-591.14 1187.57,-547.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1188.73,-544.87 1180.79,-544.94 1187.04,-549.84 1188.73,-544.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1416.42,-604 1416.42,-626.8 1574.12,-626.8 1574.12,-604 1416.42,-604"/>
<text xml:space="preserve" text-anchor="start" x="1419.42" y="-609.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">只读原子执行交付的具名字节</text>
</g>
<!-- asset_processing&#45;&gt;renderer -->
<g id="edge15" class="edge">
<title>asset_processing&#45;&gt;renderer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1860.12,-686.87C1860.12,-645.67 1860.12,-596.56 1860.12,-554.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1862.74,-554.36 1860.12,-546.86 1857.49,-554.36 1862.74,-554.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1860.12,-604 1860.12,-626.8 2054.37,-626.8 2054.37,-604 1860.12,-604"/>
<text xml:space="preserve" text-anchor="start" x="1863.12" y="-609.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">切片预览复用唯一 CPU PNG 入口</text>
</g>
<!-- asset_generation&#45;&gt;logic_2 -->
<g id="edge16" class="edge">
<title>asset_generation&#45;&gt;logic_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M916.12,-364.16C916.12,-322.63 916.12,-273.02 916.12,-230.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="918.74,-230.36 916.12,-222.86 913.49,-230.36 918.74,-230.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="916.12,-281.2 916.12,-304 1050.48,-304 1050.48,-281.2 916.12,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="919.12" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">只读配置与调用边界凭据</text>
</g>
</g>
</svg>
`;case`assets_components`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="4312pt" height="1628pt"
 viewBox="0.00 0.00 4312.00 1628.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1612.65)">
<g id="clust1" class="cluster">
<title>cluster_assets</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1176,-985.6 1176,-1589.6 3648,-1589.6 3648,-985.6 1176,-985.6"/>
<text xml:space="preserve" text-anchor="start" x="1184" y="-1576.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">资产任务与确认业务</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_asset_generation</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 1208,-934.8 1208,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">工作流绑定与远端生成执行</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_asset_processing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1216,-653.6 1216,-934.8 2418,-934.8 2418,-653.6 1216,-653.6"/>
<text xml:space="preserve" text-anchor="start" x="1224" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">产物确定性校验与切片预览</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_asset_candidates</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2456,-661.6 2456,-926.8 3336,-926.8 3336,-661.6 2456,-661.6"/>
<text xml:space="preserve" text-anchor="start" x="2464" y="-913.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">候选存储与释放</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_editing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3382,-661.6 3382,-926.8 4274,-926.8 4274,-661.6 3382,-661.6"/>
<text xml:space="preserve" text-anchor="start" x="3390" y="-913.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">编辑业务</text>
</g>
<!-- scheduler -->
<g id="node1" class="node">
<title>scheduler</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1711.6,-1528.4 1216.4,-1528.4 1216.4,-1348.4 1711.6,-1348.4 1711.6,-1528.4"/>
<text xml:space="preserve" text-anchor="start" x="1372.32" y="-1477.4" font-family="Arial" font-size="20.00" fill="#eff6ff">唯一任务状态与有界调度</text>
<text xml:space="preserve" text-anchor="start" x="1265.61" y="-1454.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有唯一任务状态、执行 Fiber 及四并发 Semaphore，任务归 Host</text>
<text xml:space="preserve" text-anchor="start" x="1243.52" y="-1436.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope。以 taskId 关联不可变输入和候选标识，串行协调候选消费；同时需要</text>
<text xml:space="preserve" text-anchor="start" x="1259.37" y="-1418.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 编排边界和任务许可时先取得 Host 边界，不持任务许可等待 Host</text>
<text xml:space="preserve" text-anchor="start" x="1236.45" y="-1400.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">边界。result 交付 ready 候选集合，并从候选存储读取图片原内容及 MIME，经</text>
<text xml:space="preserve" text-anchor="start" x="1255.21" y="-1382.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 交给协议层；确认成功或丢弃后终止候选消费。生成、处理与候选 IO</text>
</g>
<!-- confirmation -->
<g id="node2" class="node">
<title>confirmation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2462.11,-1528.4 1821.89,-1528.4 1821.89,-1348.4 2462.11,-1348.4 2462.11,-1528.4"/>
<text xml:space="preserve" text-anchor="start" x="2066.99" y="-1477.4" font-family="Arial" font-size="20.00" fill="#eff6ff">明确确认与提交结果</text>
<text xml:space="preserve" text-anchor="start" x="1968.2" y="-1454.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">确认固定 taskId 与 artifactId，读取校验后的候选字节，调用</text>
<text xml:space="preserve" text-anchor="start" x="1978.18" y="-1436.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Editing.importAsset 形成统一 EntityChange，然后经</text>
<text xml:space="preserve" text-anchor="start" x="1937.36" y="-1418.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Editing.commit 校验基准与提交。确认一经任务接受即由 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="1841.94" y="-1400.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有执行及同一任务的候选消费许可；请求取消只结束等待，状态和结果仍经任务查询。实体层从本次候选经</text>
<text xml:space="preserve" text-anchor="start" x="1974.45" y="-1382.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Editing 交付只读预期结果，任务持有至确认、丢弃或 Host</text>
</g>
<!-- review -->
<g id="node3" class="node">
<title>review</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3607.66,-1528.4 2572.34,-1528.4 2572.34,-1348.4 3607.66,-1348.4 3607.66,-1528.4"/>
<text xml:space="preserve" text-anchor="start" x="3006.65" y="-1450.4" font-family="Arial" font-size="20.00" fill="#eff6ff">跨请求切片预览与评阅</text>
<text xml:space="preserve" text-anchor="start" x="2970.79" y="-1427.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">renderSlice/review 固定同一 taskId 与</text>
<text xml:space="preserve" text-anchor="start" x="2592.4" y="-1409.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">artifactId，从候选读取已校验内容，分别调用确定性切片预览与有来源的远端评阅工作流。预览和意见保持具名结果，不替换原始候选，不自动提交或制造另一个任务状态所有者。</text>
</g>
<!-- contracts -->
<g id="node4" class="node">
<title>contracts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2385.87,-1205.6 1898.13,-1205.6 1898.13,-1025.6 2385.87,-1025.6 2385.87,-1205.6"/>
<text xml:space="preserve" text-anchor="start" x="2066.99" y="-1154.6" font-family="Arial" font-size="20.00" fill="#eff6ff">具名任务输入与结果</text>
<text xml:space="preserve" text-anchor="start" x="1936.92" y="-1131.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">submit/status/result/cancel/discard/renderSlice/review/confirm</text>
<text xml:space="preserve" text-anchor="start" x="1918.19" y="-1113.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">各自使用具名输入和结果，以名义类和共同抽象根表达不同命令，以 instanceof</text>
<text xml:space="preserve" text-anchor="start" x="2007.39" y="-1095.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">收窄；不使用语义联合或匿名对象联合。submit</text>
<text xml:space="preserve" text-anchor="start" x="2026.97" y="-1077.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">携带明确能力与参数，renderSlice 携带</text>
<text xml:space="preserve" text-anchor="start" x="1983.62" y="-1059.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">taskId、artifactId、结构化 slice 与尺寸案例，review</text>
</g>
<!-- entry -->
<g id="node5" class="node">
<title>entry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1112.1,-873.6 571.9,-873.6 571.9,-693.6 1112.1,-693.6 1112.1,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="766.99" y="-813.6" font-family="Arial" font-size="20.00" fill="#eff6ff">生成与评阅执行入口</text>
<text xml:space="preserve" text-anchor="start" x="679" y="-790.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">execute 接收 GenerationRequest 与 signal，返回按</text>
<text xml:space="preserve" text-anchor="start" x="733.23" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">artifactId/MIME/格式及字节流标识的</text>
<text xml:space="preserve" text-anchor="start" x="754.45" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">GenerationOutput；review</text>
<text xml:space="preserve" text-anchor="start" x="591.95" y="-736.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收选定候选和评阅指令，经同一允许工作流执行视觉评阅，输出意见而不自动代替确认。</text>
</g>
<!-- workflows -->
<g id="node6" class="node">
<title>workflows</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="621.78,-550.8 48.22,-550.8 48.22,-370.8 621.78,-370.8 621.78,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="251.65" y="-499.8" font-family="Arial" font-size="20.00" fill="#eff6ff">能力白名单与模型绑定</text>
<text xml:space="preserve" text-anchor="start" x="159.55" y="-476.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">图像生成/编辑、UI 贴图、视频/序列帧、音乐、音效及图生 3D</text>
<text xml:space="preserve" text-anchor="start" x="177.04" y="-458.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">使用明确能力白名单；九宫格切片由 AssetProcessing</text>
<text xml:space="preserve" text-anchor="start" x="184.97" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">确定性处理，不作为远端生成能力。能力匹配有来源的</text>
<text xml:space="preserve" text-anchor="start" x="68.28" y="-422.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">workflowId、节点参数与模型文件清单；模型库收藏与创建时间不超过六个月是使用条件。具体</text>
<text xml:space="preserve" text-anchor="start" x="126.18" y="-404.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">graph、checkpoint 与远端节点未验证则报告缺口，不把旧标准模型 API</text>
</g>
<!-- transport -->
<g id="node7" class="node">
<title>transport</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1168.37,-228 515.63,-228 515.63,-48 1168.37,-48 1168.37,-228"/>
<text xml:space="preserve" text-anchor="start" x="747.54" y="-168" font-family="Arial" font-size="20.00" fill="#eff6ff">原生 ComfyUI 远端传输</text>
<text xml:space="preserve" text-anchor="start" x="701.97" y="-145" font-family="Arial" font-size="15.00" fill="#bfdbfe">原生 HTTP 上传→提交取得 promptId→history</text>
<text xml:space="preserve" text-anchor="start" x="716.55" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">等待完成→下载具名文件；请求与 promptId</text>
<text xml:space="preserve" text-anchor="start" x="535.69" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">绑定，取消停止本地等待并明确交付远端停止事实。没有经核实的任务级取消合同时不调用影响其他任务的全局</text>
<text xml:space="preserve" text-anchor="start" x="751.97" y="-91" font-family="Arial" font-size="15.00" fill="#bfdbfe">interrupt；不伪造服务端取消。</text>
</g>
<!-- inspection -->
<g id="node8" class="node">
<title>inspection</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1796.1,-873.6 1255.9,-873.6 1255.9,-693.6 1796.1,-693.6 1796.1,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1467.66" y="-813.6" font-family="Arial" font-size="20.00" fill="#eff6ff">结构化产物校验</text>
<text xml:space="preserve" text-anchor="start" x="1318.46" y="-790.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">图片、音频、视频和 3D 文件组质量要求使用具名名义类及共同抽象根，以</text>
<text xml:space="preserve" text-anchor="start" x="1373.45" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">instanceof 收窄；按各自字段实际解码并校验。PNG</text>
<text xml:space="preserve" text-anchor="start" x="1275.95" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">后缀不能证明透明，模型营销不能证明九宫格或可入库格式。失败交付实际诊断并阻止进入</text>
<text xml:space="preserve" text-anchor="start" x="1486.4" y="-736.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">ready 候选。</text>
</g>
<!-- slice -->
<g id="node9" class="node">
<title>slice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2377.95,-873.6 1906.05,-873.6 1906.05,-693.6 2377.95,-693.6 2377.95,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2083.66" y="-822.6" font-family="Arial" font-size="20.00" fill="#eff6ff">九宫格预览装配</text>
<text xml:space="preserve" text-anchor="start" x="2006.54" y="-799.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">选定 artifactId、原生 slicedBorderLB/RT 与</text>
<text xml:space="preserve" text-anchor="start" x="1996.55" y="-781.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">slicedRectLB/RT 四组向量和尺寸案例产生结构化</text>
<text xml:space="preserve" text-anchor="start" x="1926.11" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument；本次文档内引用绑定未入库候选图片字节，工程路径为</text>
<text xml:space="preserve" text-anchor="start" x="1929.86" y="-745.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">None，引用标识不作为工程 GUID。绘制交给 CPU renderer，输出具名</text>
<text xml:space="preserve" text-anchor="start" x="2050.73" y="-727.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG，不改原候选、不写工程。</text>
</g>
<!-- storage -->
<g id="node10" class="node">
<title>storage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3303.63,-873.6 2488.37,-873.6 2488.37,-693.6 3303.63,-693.6 3303.63,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2789.85" y="-822.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Scope 内的字节与产物索引</text>
<text xml:space="preserve" text-anchor="start" x="2789.71" y="-799.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">AssetCandidates 拥有候选文件 IO</text>
<text xml:space="preserve" text-anchor="start" x="2508.42" y="-781.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">和资源寿命；暂存入口消费生成流并返回任务与产物标识，读取入口以这些标识交付独立流供校验，关联入口接收同一产物的校验结果并交付</text>
<text xml:space="preserve" text-anchor="start" x="2763.01" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">AssetCandidate。AssetCandidate 只携带</text>
<text xml:space="preserve" text-anchor="start" x="2592.18" y="-745.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">artifactId、格式、校验结果，不暴露内部绝对路径。失败的未完成产物释放；已就绪候选在确认成功、丢弃或</text>
<text xml:space="preserve" text-anchor="start" x="2840.99" y="-727.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 关闭时释放。</text>
</g>
<!-- asset_import -->
<g id="node11" class="node">
<title>asset_import</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4241.88,-873.6 3414.12,-873.6 3414.12,-693.6 4241.88,-693.6 4241.88,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="3761.32" y="-822.6" font-family="Arial" font-size="20.00" fill="#eff6ff">资产入库候选准备</text>
<text xml:space="preserve" text-anchor="start" x="3763.39" y="-799.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Editing.importAsset</text>
<text xml:space="preserve" text-anchor="start" x="3434.18" y="-781.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">输入选定的具名产物文件集合、目标工程相对路径及显式确认信息，读取目标目录及引用基准，按实际工程格式调用实体原语准备资源、GUID</text>
<text xml:space="preserve" text-anchor="start" x="3765.49" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">和必要引用操作的统一</text>
<text xml:space="preserve" text-anchor="start" x="3557.93" y="-745.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">EntityChange。关联文件组以整体准备并提交，实际资源身份来自提交重读。新增资源不用视图</text>
<text xml:space="preserve" text-anchor="start" x="3620.04" y="-727.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">replace 代替；不直接写盘，commit 后由实体实际重读，Host 主动调用</text>
</g>
<!-- scheduler&#45;&gt;contracts -->
<g id="edge1" class="edge">
<title>scheduler&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1651.96,-1348.47C1742.99,-1305.4 1852.28,-1253.68 1944.53,-1210.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1945.58,-1212.44 1951.23,-1206.86 1943.33,-1207.7 1945.58,-1212.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1823.33,-1265.6 1823.33,-1288.4 1946.02,-1288.4 1946.02,-1265.6 1823.33,-1265.6"/>
<text xml:space="preserve" text-anchor="start" x="1826.33" y="-1271.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">具名请求、状态与结果</text>
</g>
<!-- confirmation&#45;&gt;contracts -->
<g id="edge2" class="edge">
<title>confirmation&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2142,-1348.47C2142,-1307.27 2142,-1258.16 2142,-1215.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2144.63,-1215.96 2142,-1208.46 2139.38,-1215.96 2144.63,-1215.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2142,-1265.6 2142,-1288.4 2311.37,-1288.4 2311.37,-1265.6 2142,-1265.6"/>
<text xml:space="preserve" text-anchor="start" x="2145" y="-1271.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">选定产物、相对目标和确认结果</text>
</g>
<!-- review&#45;&gt;contracts -->
<g id="edge3" class="edge">
<title>review&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2827.19,-1348.47C2692.47,-1302.88 2529.15,-1247.61 2395.75,-1202.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2396.61,-1199.99 2388.66,-1200.07 2394.93,-1204.96 2396.61,-1199.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2644.42,-1265.6 2644.42,-1288.4 2848.8,-1288.4 2848.8,-1265.6 2644.42,-1265.6"/>
<text xml:space="preserve" text-anchor="start" x="2647.42" y="-1271.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">选定候选、切片案例及评阅输入与输出</text>
</g>
<!-- contracts&#45;&gt;entry -->
<g id="edge4" class="edge">
<title>contracts&#45;&gt;entry</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1898.52,-1083.88C1703.79,-1055.7 1425.23,-1007.23 1189,-934.8 1138.29,-919.25 1085.03,-898.56 1035.88,-877.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1037.13,-875.2 1029.2,-874.64 1035.05,-880.02 1037.13,-875.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1290.03,-942.8 1290.03,-965.6 1436.06,-965.6 1436.06,-942.8 1290.03,-942.8"/>
<text xml:space="preserve" text-anchor="start" x="1293.03" y="-948.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交输入绑定原子生成合同</text>
</g>
<!-- contracts&#45;&gt;inspection -->
<g id="edge5" class="edge">
<title>contracts&#45;&gt;inspection</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1976.11,-1025.73C1891.02,-980.15 1787.39,-924.63 1701.02,-878.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1702.43,-876.14 1694.58,-874.91 1699.96,-880.77 1702.43,-876.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1852.47,-942.8 1852.47,-965.6 2021.84,-965.6 2021.84,-942.8 1852.47,-942.8"/>
<text xml:space="preserve" text-anchor="start" x="1855.47" y="-948.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">质量要求绑定唯一产物校验合同</text>
</g>
<!-- contracts&#45;&gt;slice -->
<g id="edge6" class="edge">
<title>contracts&#45;&gt;slice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2142,-1025.73C2142,-981.9 2142,-928.88 2142,-883.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2144.63,-883.87 2142,-876.37 2139.38,-883.87 2144.63,-883.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2142,-942.8 2142,-965.6 2288.03,-965.6 2288.03,-942.8 2142,-942.8"/>
<text xml:space="preserve" text-anchor="start" x="2145" y="-948.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">切片结果绑定唯一处理入口</text>
</g>
<!-- contracts&#45;&gt;storage -->
<g id="edge7" class="edge">
<title>contracts&#45;&gt;storage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2345.05,-1025.73C2449.74,-979.91 2577.34,-924.07 2683.37,-877.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2684.32,-880.11 2690.14,-874.7 2682.22,-875.3 2684.32,-880.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2519,-942.8 2519,-965.6 2641.69,-965.6 2641.69,-942.8 2519,-942.8"/>
<text xml:space="preserve" text-anchor="start" x="2522" y="-948.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">结果复用候选存储合同</text>
</g>
<!-- contracts&#45;&gt;asset_import -->
<g id="edge8" class="edge">
<title>contracts&#45;&gt;asset_import</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2385.75,-1090.78C2633.81,-1063.72 3028.37,-1012.91 3363,-934.8 3430.52,-919.04 3502.33,-898.03 3568.79,-876.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3569.35,-879.32 3575.68,-874.52 3567.74,-874.32 3569.35,-879.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3298.22,-942.8 3298.22,-965.6 3467.59,-965.6 3467.59,-942.8 3298.22,-942.8"/>
<text xml:space="preserve" text-anchor="start" x="3301.22" y="-948.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">确认输入绑定统一入库准备合同</text>
</g>
<!-- entry&#45;&gt;workflows -->
<g id="edge9" class="edge">
<title>entry&#45;&gt;workflows</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M701.45,-693.67C633.86,-650.9 552.8,-599.61 484.13,-556.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="485.69,-554.04 477.95,-552.25 482.88,-558.48 485.69,-554.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="603.7,-610.8 603.7,-633.6 726.39,-633.6 726.39,-610.8 603.7,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="606.7" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">选择明确能力和工作流</text>
</g>
<!-- entry&#45;&gt;transport -->
<g id="edge10" class="edge">
<title>entry&#45;&gt;transport</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M842,-693.79C842,-574.38 842,-362.73 842,-238.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="844.63,-238.46 842,-230.96 839.38,-238.46 844.63,-238.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="842,-449.4 842,-472.2 999.7,-472.2 999.7,-449.4 842,-449.4"/>
<text xml:space="preserve" text-anchor="start" x="845" y="-455.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">执行具名输入并读取实际结果</text>
</g>
<!-- workflows&#45;&gt;transport -->
<g id="edge11" class="edge">
<title>workflows&#45;&gt;transport</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M475.55,-370.87C543.14,-328.1 624.2,-276.81 692.87,-233.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="694.12,-235.68 699.05,-229.45 691.31,-231.24 694.12,-235.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="603.7,-288 603.7,-310.8 777.75,-310.8 777.75,-288 603.7,-288"/>
<text xml:space="preserve" text-anchor="start" x="606.7" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">绑定后的原生 ComfyUI graph</text>
</g>
</g>
</svg>
`;case`canvas_render`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2815pt" height="2470pt"
 viewBox="0.00 0.00 2815.00 2470.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2454.65)">
<!-- entry -->
<g id="node1" class="node">
<title>entry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1573.11,-2439.6 982.89,-2439.6 982.89,-2259.6 1573.11,-2259.6 1573.11,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="1227.99" y="-2370.6" font-family="Arial" font-size="20.00" fill="#eff6ff">唯一渲染入口</text>
<text xml:space="preserve" text-anchor="start" x="1157.12" y="-2347.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderer 声明完整输入与 PNG</text>
<text xml:space="preserve" text-anchor="start" x="1002.95" y="-2329.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">输出。后续实现由该入口主动驱动校验、布局、绘制与资源结算，同一请求独占会话；当前执行明确</text>
<text xml:space="preserve" text-anchor="start" x="1235.5" y="-2311.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">TODO 失败。</text>
</g>
<!-- nodes -->
<g id="node2" class="node">
<title>nodes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1900.02,-2116.8 1579.98,-2116.8 1579.98,-1936.8 1900.02,-1936.8 1900.02,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="1689.99" y="-2029.8" font-family="Arial" font-size="20.00" fill="#eff6ff">节点能力调度</text>
<text xml:space="preserve" text-anchor="start" x="1607.9" y="-2006.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">按节点类型固定顺序调用能力；不持有 DOM。</text>
</g>
<!-- layout -->
<g id="node3" class="node">
<title>layout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1912.14,-1148.4 971.86,-1148.4 971.86,-968.4 1912.14,-968.4 1912.14,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1383.66" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">确定性布局计算</text>
<text xml:space="preserve" text-anchor="start" x="991.91" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">按校验后的节点专属字段与固定字体度量计算矩形、裁剪与文本行；布局树携带对应节点身份及有效值，供节点绘制和子节点布局使用，结果只存在当前渲染会话。</text>
</g>
<!-- dom_schema -->
<g id="node4" class="node">
<title>dom_schema</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="667.53,-825.6 166.47,-825.6 166.47,-645.6 667.53,-645.6 667.53,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="366.99" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">文档输入校验</text>
<text xml:space="preserve" text-anchor="start" x="186.53" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">严格校验结构化文档，按唯一映射表提取与节点身份和顺序对应的节点专属 Option</text>
<text xml:space="preserve" text-anchor="start" x="201.95" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schema，供同次布局及绘制消费；保留原文档，不将投影写回持久化字段。</text>
</g>
<!-- state -->
<g id="node5" class="node">
<title>state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2565.85,-825.6 2088.15,-825.6 2088.15,-645.6 2565.85,-645.6 2565.85,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="2251.99" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">渲染会话与资源结算</text>
<text xml:space="preserve" text-anchor="start" x="2261.96" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CpuRenderSession</text>
<text xml:space="preserve" text-anchor="start" x="2108.21" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">登记资源、收束加载和释放、保留失败原因并输出诊断；显式时间保证确定性。</text>
</g>
<!-- contracts -->
<g id="node6" class="node">
<title>contracts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1762.85,-180 1215.15,-180 1215.15,0 1762.85,0 1762.85,-180"/>
<text xml:space="preserve" text-anchor="start" x="1365.06" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">CanvasDocument 与渲染合同</text>
<text xml:space="preserve" text-anchor="start" x="1311.05" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">持久化 Fields、节点类型、布局与文本结果、完整输入及 PNG</text>
<text xml:space="preserve" text-anchor="start" x="1235.2" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">输出合同；资源按文档引用标识绑定字节，工程相对路径显式可选以支持未入库候选。PNG</text>
<text xml:space="preserve" text-anchor="start" x="1358.97" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">同次携带节点索引链、名称、类型及 viewport</text>
<text xml:space="preserve" text-anchor="start" x="1338.97" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">四角供树形视图和选中高亮使用，不承担解析或绘制。</text>
</g>
<!-- features -->
<g id="node7" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2161.6,-1794 1666.4,-1794 1666.4,-1614 2161.6,-1614 2161.6,-1794"/>
<text xml:space="preserve" text-anchor="start" x="1863.99" y="-1716" font-family="Arial" font-size="20.00" fill="#eff6ff">节点绘制特性</text>
<text xml:space="preserve" text-anchor="start" x="1736.45" y="-1693" font-family="Arial" font-size="15.00" fill="#bfdbfe">按节点类型与固定能力顺序编排矩形、文本、滚动内容和 Spine</text>
<text xml:space="preserve" text-anchor="start" x="1686.45" y="-1675" font-family="Arial" font-size="15.00" fill="#bfdbfe">网格绘制；图片、九宫格与渐变合成委托 images，共用同次布局和 CPU 会话。</text>
</g>
<!-- images -->
<g id="node8" class="node">
<title>images</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2116.59,-1471.2 1711.41,-1471.2 1711.41,-1291.2 2116.59,-1291.2 2116.59,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1880.66" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">图片合成</text>
<text xml:space="preserve" text-anchor="start" x="1731.47" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">资源字节解码、九宫格、渐变与颜色乘法；使用 CPU 图形后端。</text>
</g>
<!-- fields -->
<g id="node9" class="node">
<title>fields</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1104.83,-825.6 777.17,-825.6 777.17,-645.6 1104.83,-645.6 1104.83,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="899.33" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">特性有效值</text>
<text xml:space="preserve" text-anchor="start" x="797.22" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一字段默认值与启用白名单，不修改持久化输入。</text>
</g>
<!-- values -->
<g id="node10" class="node">
<title>values</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1668.77,-825.6 1215.23,-825.6 1215.23,-645.6 1668.77,-645.6 1668.77,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1400.33" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">富文本解析</text>
<text xml:space="preserve" text-anchor="start" x="1235.29" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">只解析原版富文本方言；持久化字段、枚举、颜色与 GUID 使用 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="1348.23" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">领域合同，不复制转换层解析器。</text>
</g>
<!-- schema -->
<g id="node11" class="node">
<title>schema</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="938.34,-502.8 575.66,-502.8 575.66,-322.8 938.34,-322.8 938.34,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="675.86" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">结构化节点 Schema</text>
<text xml:space="preserve" text-anchor="start" x="595.71" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">声明结构化 Canvas 节点的确定类型字段；HTML/XML</text>
<text xml:space="preserve" text-anchor="start" x="638.23" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">解析归纯转换，本节点不执行解析或绘制。</text>
</g>
<!-- raster -->
<g id="node12" class="node">
<title>raster</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2660.92,-502.8 2309.08,-502.8 2309.08,-322.8 2660.92,-322.8 2660.92,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2350.53" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">CPU 光栅化与 PNG 编码（设计）</text>
<text xml:space="preserve" text-anchor="start" x="2367.46" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasKit WASM/Skia 软件 surface</text>
<text xml:space="preserve" text-anchor="start" x="2329.14" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">承担字体度量、文字、路径、位图与网格，禁用 GPU。</text>
</g>
<!-- entry&#45;&gt;nodes -->
<g id="edge1" class="edge">
<title>entry&#45;&gt;nodes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1406.08,-2259.67C1467.54,-2216.99 1541.23,-2165.82 1603.72,-2122.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1604.92,-2124.79 1609.59,-2118.36 1601.93,-2120.48 1604.92,-2124.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1522.85,-2176.8 1522.85,-2199.6 1575.53,-2199.6 1575.53,-2176.8 1522.85,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="1525.85" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">能力调度</text>
</g>
<!-- entry&#45;&gt;layout -->
<g id="edge2" class="edge">
<title>entry&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1278,-2259.75C1278,-2195.35 1278,-2106.19 1278,-2027.8 1278,-2027.8 1278,-2027.8 1278,-1380.2 1278,-1298.8 1320.38,-1217.27 1362.05,-1156.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1364.04,-1158.5 1366.18,-1150.85 1359.73,-1155.49 1364.04,-1158.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1278,-1692.6 1278,-1715.4 1330.68,-1715.4 1330.68,-1692.6 1278,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="1281" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">布局阶段</text>
</g>
<!-- entry&#45;&gt;dom_schema -->
<g id="edge3" class="edge">
<title>entry&#45;&gt;dom_schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M983,-2291.41C745.84,-2236.71 452,-2145.25 452,-2027.8 452,-2027.8 452,-2027.8 452,-1057.4 452,-982.84 442.54,-899.1 433.46,-835.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="436.06,-835.55 432.38,-828.51 430.87,-836.31 436.06,-835.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="452,-1531.2 452,-1554 504.68,-1554 504.68,-1531.2 452,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="455" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">文档校验</text>
</g>
<!-- entry&#45;&gt;state -->
<g id="edge4" class="edge">
<title>entry&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1572.78,-2339.81C1982.4,-2319.43 2674,-2251.84 2674,-2027.8 2674,-2027.8 2674,-2027.8 2674,-1057.4 2674,-960.53 2600.18,-884.77 2520.64,-831.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2522.16,-829.12 2514.45,-827.17 2519.26,-833.5 2522.16,-829.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2674,-1531.2 2674,-1554 2785.02,-1554 2785.02,-1531.2 2674,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="2677" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">独占会话与资源结算</text>
</g>
<!-- entry&#45;&gt;contracts -->
<g id="edge5" class="edge">
<title>entry&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M983.2,-2333.29C605.77,-2305.46 0,-2229.39 0,-2027.8 0,-2027.8 0,-2027.8 0,-411.8 0,-167.94 772.9,-108.95 1205,-95.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1205.02,-97.65 1212.44,-94.79 1204.86,-92.4 1205.02,-97.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="0,-1208.4 0,-1231.2 99.35,-1231.2 99.35,-1208.4 0,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="3" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">唯一入口输入输出</text>
</g>
<!-- nodes&#45;&gt;layout -->
<g id="edge7" class="edge">
<title>nodes&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1682.84,-1937.02C1657.84,-1895.01 1629.96,-1843.33 1611,-1794 1526.74,-1574.81 1477.57,-1301.97 1455.7,-1158.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1458.34,-1158.29 1454.62,-1151.27 1453.15,-1159.08 1458.34,-1158.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1534.88,-1531.2 1534.88,-1554 1634.23,-1554 1634.23,-1531.2 1534.88,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1537.88" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费确定布局节点</text>
</g>
<!-- nodes&#45;&gt;state -->
<g id="edge8" class="edge">
<title>nodes&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1899.82,-2017.35C2097.71,-1997.27 2409,-1929.93 2409,-1705 2409,-1705 2409,-1705 2409,-1057.4 2409,-981.14 2386.98,-897.78 2365.77,-835.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2368.28,-834.38 2363.35,-828.14 2363.31,-836.09 2368.28,-834.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2409,-1369.8 2409,-1392.6 2508.35,-1392.6 2508.35,-1369.8 2409,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="2412" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享同次绘制会话</text>
</g>
<!-- nodes&#45;&gt;features -->
<g id="edge6" class="edge">
<title>nodes&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1788.24,-1936.87C1810.82,-1895.23 1837.78,-1845.52 1860.94,-1802.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1863.11,-1804.33 1864.38,-1796.49 1858.49,-1801.83 1863.11,-1804.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1832.22,-1854 1832.22,-1876.8 2059.93,-1876.8 2059.93,-1854 1832.22,-1854"/>
<text xml:space="preserve" text-anchor="start" x="1835.22" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">递归顺序由调度拥有，节点投影由特性拥有</text>
</g>
<!-- layout&#45;&gt;dom_schema -->
<g id="edge12" class="edge">
<title>layout&#45;&gt;dom_schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1157.84,-968.47C1007.25,-921.34 823.61,-863.86 676.83,-817.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="678.05,-815.55 670.11,-815.82 676.48,-820.56 678.05,-815.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="960.23,-885.6 960.23,-908.4 1141.27,-908.4 1141.27,-885.6 960.23,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="963.23" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费同次校验后的节点字段与身份</text>
</g>
<!-- layout&#45;&gt;state -->
<g id="edge15" class="edge">
<title>layout&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1691.23,-968.46C1746.19,-948.76 1804.08,-927.93 1858,-908.4 1929.69,-882.43 2007.46,-854.04 2078.68,-827.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2079.25,-830.53 2085.39,-825.48 2077.44,-825.6 2079.25,-830.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1908.92,-885.6 1908.92,-908.4 2043.28,-908.4 2043.28,-885.6 1908.92,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1911.92" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取同次会话的固定字体</text>
</g>
<!-- layout&#45;&gt;contracts -->
<g id="edge16" class="edge">
<title>layout&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1597.62,-968.47C1647.48,-931.28 1696.79,-883.19 1724,-825.6 1827.2,-607.19 1668.24,-331.79 1565.37,-188.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1567.58,-186.78 1561.06,-182.23 1563.32,-189.85 1567.58,-186.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1749.75,-562.8 1749.75,-585.6 1849.1,-585.6 1849.1,-562.8 1749.75,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1752.75" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付唯一布局结果</text>
</g>
<!-- layout&#45;&gt;fields -->
<g id="edge13" class="edge">
<title>layout&#45;&gt;fields</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1303.11,-968.47C1236.32,-925.7 1156.23,-874.41 1088.36,-830.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1090.01,-828.9 1082.28,-827.06 1087.18,-833.32 1090.01,-828.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1206.52,-885.6 1206.52,-908.4 1375.89,-908.4 1375.89,-885.6 1206.52,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1209.52" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">持有节点有效值的唯一布局结果</text>
</g>
<!-- layout&#45;&gt;values -->
<g id="edge14" class="edge">
<title>layout&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1442,-968.47C1442,-927.27 1442,-878.16 1442,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1444.63,-835.96 1442,-828.46 1439.38,-835.96 1444.63,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1442,-885.6 1442,-908.4 1576.36,-908.4 1576.36,-885.6 1442,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1445" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">持有解析后的同次文本段</text>
</g>
<!-- dom_schema&#45;&gt;schema -->
<g id="edge17" class="edge">
<title>dom_schema&#45;&gt;schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M511.26,-645.67C556.03,-603.42 609.61,-552.87 655.3,-509.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="657,-511.76 660.65,-504.71 653.4,-507.94 657,-511.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="597.19,-562.8 597.19,-585.6 696.55,-585.6 696.55,-562.8 597.19,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="600.19" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">提取节点专属字段</text>
</g>
<!-- state&#45;&gt;contracts -->
<g id="edge22" class="edge">
<title>state&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2262.62,-645.62C2169.81,-519.41 2000.54,-297.33 1918,-240 1874.03,-209.46 1823.21,-184.64 1772.26,-164.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1773.51,-162.32 1765.57,-162.07 1771.62,-167.22 1773.51,-162.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2154.66,-401.4 2154.66,-424.2 2242.35,-424.2 2242.35,-401.4 2154.66,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="2157.66" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">会话与资源状态</text>
</g>
<!-- state&#45;&gt;raster -->
<g id="edge21" class="edge">
<title>state&#45;&gt;raster</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2370.8,-645.67C2391.26,-604.12 2415.69,-554.53 2436.69,-511.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2438.95,-513.23 2439.91,-505.35 2434.24,-510.91 2438.95,-513.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2410.74,-562.8 2410.74,-585.6 2559.89,-585.6 2559.89,-562.8 2410.74,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2413.74" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">会话拥有独占软件 surface</text>
</g>
<!-- features&#45;&gt;images -->
<g id="edge9" class="edge">
<title>features&#45;&gt;images</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1914,-1614.07C1914,-1572.87 1914,-1523.76 1914,-1481.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1916.63,-1481.56 1914,-1474.06 1911.38,-1481.56 1916.63,-1481.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1914,-1531.2 1914,-1554 2095.03,-1554 2095.03,-1531.2 1914,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1917" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">复用节点投影输入和同次会话合同</text>
</g>
<!-- images&#45;&gt;layout -->
<g id="edge10" class="edge">
<title>images&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1783.15,-1291.27C1720.35,-1248.59 1645.07,-1197.42 1581.23,-1154.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1582.88,-1151.98 1575.2,-1149.93 1579.93,-1156.32 1582.88,-1151.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1692.15,-1208.4 1692.15,-1231.2 1791.5,-1231.2 1791.5,-1208.4 1692.15,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1695.15" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费同一布局结果</text>
</g>
<!-- images&#45;&gt;state -->
<g id="edge11" class="edge">
<title>images&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1970.99,-1291.39C2047.92,-1171.5 2184.52,-958.63 2264.29,-834.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2266.45,-835.81 2268.3,-828.08 2262.04,-832.98 2266.45,-835.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2174.99,-1047 2174.99,-1069.8 2286.01,-1069.8 2286.01,-1047 2174.99,-1047"/>
<text xml:space="preserve" text-anchor="start" x="2177.99" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">使用会话拥有的资源</text>
</g>
<!-- fields&#45;&gt;contracts -->
<g id="edge19" class="edge">
<title>fields&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1016.62,-645.79C1119,-525.54 1301.04,-311.75 1406.74,-187.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1408.45,-189.65 1411.31,-182.24 1404.45,-186.25 1408.45,-189.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1287.3,-401.4 1287.3,-424.2 1398.32,-424.2 1398.32,-401.4 1287.3,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="1290.3" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费节点类型白名单</text>
</g>
<!-- fields&#45;&gt;schema -->
<g id="edge18" class="edge">
<title>fields&#45;&gt;schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M889.99,-645.67C866.11,-604.03 837.6,-554.32 813.11,-511.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="815.46,-510.46 809.46,-505.26 810.91,-513.07 815.46,-510.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="854.52,-562.8 854.52,-585.6 985.78,-585.6 985.78,-562.8 854.52,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="857.52" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费唯一节点 Schema</text>
</g>
<!-- values&#45;&gt;contracts -->
<g id="edge20" class="edge">
<title>values&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1448.49,-645.79C1457.21,-526.38 1472.66,-314.73 1481.75,-190.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1484.36,-190.63 1482.28,-182.95 1479.12,-190.24 1484.36,-190.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1471.7,-401.4 1471.7,-424.2 1559.38,-424.2 1559.38,-401.4 1471.7,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="1474.7" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">产生具名文本段</text>
</g>
<!-- schema&#45;&gt;contracts -->
<g id="edge23" class="edge">
<title>schema&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M866.14,-323.01C906.16,-293.57 952.97,-262.59 998.99,-240 1063.6,-208.29 1136.34,-181.73 1205.61,-160.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1206.07,-162.85 1212.46,-158.14 1204.52,-157.83 1206.07,-162.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="998.99,-240 998.99,-262.8 1075,-262.8 1075,-240 998.99,-240"/>
<text xml:space="preserve" text-anchor="start" x="1001.99" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">文档节点类型</text>
</g>
<!-- raster&#45;&gt;contracts -->
<g id="edge24" class="edge">
<title>raster&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2355.25,-322.96C2306.46,-292.9 2249.36,-261.52 2194,-240 2059.91,-187.87 1904.02,-152.5 1772.97,-129.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1773.6,-126.81 1765.76,-128.1 1772.7,-131.98 1773.6,-126.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2244.59,-240 2244.59,-262.8 2347.05,-262.8 2347.05,-240 2244.59,-240"/>
<text xml:space="preserve" text-anchor="start" x="2247.59" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">像素与 PNG 结果</text>
</g>
</g>
</svg>
`;case`pi_session_start`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3269pt" height="1065pt"
 viewBox="0.00 0.00 3269.00 1065.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1050.05)">
<!-- pi_agent -->
<g id="node1" class="node">
<title>pi_agent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="533.79,-315 0,-315 0,-135 533.79,-135 533.79,-315"/>
<text xml:space="preserve" text-anchor="start" x="213.55" y="-246" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi 官方运行时</text>
<text xml:space="preserve" text-anchor="start" x="191.87" y="-223" font-family="Arial" font-size="15.00" fill="#bfdbfe">外部 Pi v1.0.0，官方提交</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-205" font-family="Arial" font-size="15.00" fill="#bfdbfe">a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP</text>
<text xml:space="preserve" text-anchor="start" x="62.67" y="-187" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。</text>
</g>
<!-- logic -->
<g id="node2" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1342.83,-562 917.61,-562 917.61,-382 1342.83,-382 1342.83,-562"/>
<text xml:space="preserve" text-anchor="start" x="1055.2" y="-511" font-family="Arial" font-size="20.00" fill="#eff6ff">扩展生命周期与接入</text>
<text xml:space="preserve" text-anchor="start" x="961.83" y="-488" font-family="Arial" font-size="15.00" fill="#bfdbfe">扩展工厂只注册 flags 和事件；session_start 从 ctx.cwd</text>
<text xml:space="preserve" text-anchor="start" x="953.11" y="-470" font-family="Arial" font-size="15.00" fill="#bfdbfe">建立专属 memory Host 和 HTTP 服务，再向 Pi 登记 MCP</text>
<text xml:space="preserve" text-anchor="start" x="945.55" y="-452" font-family="Arial" font-size="15.00" fill="#bfdbfe">endpoint；连接由 Pi 管理。session_shutdown 先注销 MCP</text>
<text xml:space="preserve" text-anchor="start" x="937.66" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">登记，再关闭 HTTP，最后关闭 Host。new/resume/fork/reload</text>
<text xml:space="preserve" text-anchor="start" x="980.19" y="-416" font-family="Arial" font-size="15.00" fill="#bfdbfe">使用同一开始结束合同，不从会话历史重建工程状态。</text>
</g>
<!-- logic_1 -->
<g id="node3" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2223.24,-1035 1695.53,-1035 1695.53,-855 2223.24,-855 2223.24,-1035"/>
<text xml:space="preserve" text-anchor="start" x="1909.37" y="-984" font-family="Arial" font-size="20.00" fill="#eff6ff">只读配置来源</text>
<text xml:space="preserve" text-anchor="start" x="1824.33" y="-961" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供统一只读 ConfigSource、ToolkitConfig</text>
<text xml:space="preserve" text-anchor="start" x="1743.89" y="-943" font-family="Arial" font-size="15.00" fill="#bfdbfe">和资产凭据端口；PiConfigSource 在本模块解释官方显式输入，VS Code</text>
<text xml:space="preserve" text-anchor="start" x="1835.59" y="-925" font-family="Arial" font-size="15.00" fill="#bfdbfe">的具体 WorkspaceConfiguration 适配由</text>
<text xml:space="preserve" text-anchor="start" x="1909.76" y="-907" font-family="Arial" font-size="15.00" fill="#bfdbfe">frontend.plugin</text>
<text xml:space="preserve" text-anchor="start" x="1715.59" y="-889" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载。两种入口各自注入唯一来源，默认值由宿主原生声明，凭据按远端执行边界读取。</text>
</g>
<!-- logic_2 -->
<g id="node4" class="node">
<title>logic_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2207.83,-745 1710.94,-745 1710.94,-565 2207.83,-565 2207.83,-745"/>
<text xml:space="preserve" text-anchor="start" x="1869.36" y="-676" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="1780.98" y="-653" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="1730.99" y="-635" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="1841.86" y="-617" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- logic_3 -->
<g id="node5" class="node">
<title>logic_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3148.12,-180 2622.07,-180 2622.07,0 3148.12,0 3148.12,-180"/>
<text xml:space="preserve" text-anchor="start" x="2795.09" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">工具合同与 HTTP 接入</text>
<text xml:space="preserve" text-anchor="start" x="2717.14" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch</text>
<text xml:space="preserve" text-anchor="start" x="2667.55" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host</text>
<text xml:space="preserve" text-anchor="start" x="2642.13" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</text>
</g>
<!-- view_service -->
<g id="node6" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3239.38,-1001 2530.82,-1001 2530.82,-821 3239.38,-821 3239.38,-1001"/>
<text xml:space="preserve" text-anchor="start" x="2793.41" y="-941" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="2689.64" y="-918" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="2719.65" y="-900" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="2770.5" y="-882" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="2550.87" y="-864" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- preview -->
<g id="node7" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3125.61,-711 2644.58,-711 2644.58,-531 3125.61,-531 3125.61,-711"/>
<text xml:space="preserve" text-anchor="start" x="2815.07" y="-642" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 预览业务</text>
<text xml:space="preserve" text-anchor="start" x="2664.64" y="-619" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU</text>
<text xml:space="preserve" text-anchor="start" x="2682.13" y="-601" font-family="Arial" font-size="15.00" fill="#bfdbfe">后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG</text>
<text xml:space="preserve" text-anchor="start" x="2666.3" y="-583" font-family="Arial" font-size="15.00" fill="#bfdbfe">结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</text>
</g>
<!-- pi_agent&#45;&gt;logic -->
<g id="edge1" class="edge">
<title>pi_agent&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M472.33,-314.88C512.16,-330.55 553.93,-345.73 593.79,-358 695.33,-389.26 810.3,-414.96 907.6,-433.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="907.02,-436.55 914.89,-435.41 908.03,-431.4 907.02,-436.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="614.27,-426.35 614.27,-459.15 638.27,-459.15 638.27,-426.35 614.27,-426.35"/>
<text xml:space="preserve" text-anchor="start" x="622.38" y="-439.55" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="641.27,-426.35 641.27,-459.15 837.12,-459.15 837.12,-426.35 641.27,-426.35"/>
<text xml:space="preserve" text-anchor="start" x="644.27" y="-437.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">session_start：ctx.cwd 与 flags</text>
</g>
<!-- pi_agent&#45;&gt;logic -->
<g id="edge5" class="edge">
<title>pi_agent&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M544.03,-224.96C645.17,-232.23 758.95,-249.16 857.61,-285.4 917.62,-307.44 976.99,-345.8 1024.85,-382.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="544.33,-222.35 536.67,-224.45 543.97,-227.58 544.33,-222.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="596.79,-288.4 596.79,-328 620.79,-328 620.79,-288.4 596.79,-288.4"/>
<text xml:space="preserve" text-anchor="start" x="604.89" y="-305" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="623.79,-288.4 623.79,-328 854.61,-328 854.61,-288.4 623.79,-288.4"/>
<text xml:space="preserve" text-anchor="start" x="626.79" y="-311" font-family="Arial" font-size="14.00" fill="#c9c9c9">registerMcpServer：登记本会话 HTTP</text>
<text xml:space="preserve" text-anchor="start" x="638.05" y="-294.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">endpoint；连接与同名覆盖由 Pi 管理</text>
</g>
<!-- pi_agent&#45;&gt;logic_3 -->
<g id="edge6" class="edge">
<title>pi_agent&#45;&gt;logic_3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M533.76,-206.65C554.07,-205.37 574.26,-204.14 593.79,-203 1322.61,-160.42 2182.54,-120.86 2611.74,-101.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2611.71,-104.47 2619.08,-101.52 2611.48,-99.22 2611.71,-104.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1438.5,-161.42 1438.5,-194.22 1462.5,-194.22 1462.5,-161.42 1438.5,-161.42"/>
<text xml:space="preserve" text-anchor="start" x="1446.61" y="-174.62" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1465.5,-161.42 1465.5,-194.22 1599.86,-194.22 1599.86,-161.42 1465.5,-161.42"/>
<text xml:space="preserve" text-anchor="start" x="1468.5" y="-172.22" font-family="Arial" font-size="14.00" fill="#c9c9c9">具名工具请求与取消信号</text>
</g>
<!-- pi_agent&#45;&gt;logic_3 -->
<g id="edge10" class="edge">
<title>pi_agent&#45;&gt;logic_3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M543.45,-168.95C560.45,-166.09 577.33,-163.41 593.79,-161 951.24,-108.62 1041.98,-99.73 1402.83,-82.2 1506.13,-77.18 1532.11,-81.88 1635.53,-82.2 1976.4,-83.26 2369.6,-85.96 2622.24,-87.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="543.36,-166.3 536.41,-170.14 544.24,-171.48 543.36,-166.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1405.83,-85.2 1405.83,-118 1429.83,-118 1429.83,-85.2 1405.83,-85.2"/>
<text xml:space="preserve" text-anchor="start" x="1413.93" y="-98.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1432.83,-85.2 1432.83,-118 1632.53,-118 1632.53,-85.2 1432.83,-85.2"/>
<text xml:space="preserve" text-anchor="start" x="1435.83" y="-96" font-family="Arial" font-size="14.00" fill="#c9c9c9">文本、PNG、结构化结果或实际错误</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1267.09,-561.9C1310.08,-589.57 1358.06,-619.66 1402.83,-646 1524.73,-717.71 1664.99,-793.15 1774.08,-850.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1772.66,-852.53 1780.53,-853.68 1775.1,-847.88 1772.66,-852.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1467.67,-776.28 1467.67,-809.08 1491.67,-809.08 1491.67,-776.28 1467.67,-776.28"/>
<text xml:space="preserve" text-anchor="start" x="1475.78" y="-789.48" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1494.67,-776.28 1494.67,-809.08 1570.68,-809.08 1570.68,-776.28 1494.67,-776.28"/>
<text xml:space="preserve" text-anchor="start" x="1497.67" y="-787.08" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取显式配置</text>
</g>
<!-- logic&#45;&gt;logic_2 -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;logic_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1342.62,-518.77C1451.8,-542.93 1585.92,-572.6 1701.08,-598.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1700.26,-600.58 1708.15,-599.64 1701.39,-595.45 1700.26,-600.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1447.45,-582.89 1447.45,-615.69 1471.45,-615.69 1471.45,-582.89 1447.45,-582.89"/>
<text xml:space="preserve" text-anchor="start" x="1455.55" y="-596.09" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1474.45,-582.89 1474.45,-615.69 1590.91,-615.69 1590.91,-582.89 1474.45,-582.89"/>
<text xml:space="preserve" text-anchor="start" x="1477.45" y="-593.69" font-family="Arial" font-size="14.00" fill="#c9c9c9">建立 memory Host</text>
</g>
<!-- logic&#45;&gt;logic_3 -->
<g id="edge4" class="edge">
<title>logic&#45;&gt;logic_3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1342.71,-441.24C1608.25,-400.66 2076.78,-322.59 2470.82,-223 2516.87,-211.36 2565.29,-197.39 2612.12,-182.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2612.81,-185.48 2619.2,-180.75 2611.26,-180.47 2612.81,-185.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1853.02,-384.43 1853.02,-417.23 1877.02,-417.23 1877.02,-384.43 1853.02,-384.43"/>
<text xml:space="preserve" text-anchor="start" x="1861.12" y="-397.63" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1880.02,-384.43 1880.02,-417.23 2065.75,-417.23 2065.75,-384.43 1880.02,-384.43"/>
<text xml:space="preserve" text-anchor="start" x="1883.02" y="-395.23" font-family="Arial" font-size="14.00" fill="#c9c9c9">启动回环 HTTP，取得 endpoint</text>
</g>
<!-- logic_2&#45;&gt;logic_3 -->
<g id="edge7" class="edge">
<title>logic_2&#45;&gt;logic_3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2116.46,-559.53C2289.82,-453.49 2567.56,-283.61 2737.15,-179.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2115.12,-557.27 2110.1,-563.43 2117.86,-561.75 2115.12,-557.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2308.02,-459.12 2308.02,-491.92 2332.02,-491.92 2332.02,-459.12 2308.02,-459.12"/>
<text xml:space="preserve" text-anchor="start" x="2316.12" y="-472.32" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2335.02,-459.12 2335.02,-491.92 2446.04,-491.92 2446.04,-459.12 2335.02,-459.12"/>
<text xml:space="preserve" text-anchor="start" x="2338.02" y="-469.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">受控读取或预览请求</text>
</g>
<!-- logic_2&#45;&gt;view_service -->
<g id="edge8" class="edge">
<title>logic_2&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2207.62,-723.52C2312.64,-752.63 2436.71,-787.01 2549.72,-818.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2548.73,-820.78 2556.66,-820.25 2550.13,-815.72 2548.73,-820.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2286.24,-793.68 2286.24,-826.48 2310.24,-826.48 2310.24,-793.68 2286.24,-793.68"/>
<text xml:space="preserve" text-anchor="start" x="2294.34" y="-806.88" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2313.24,-793.68 2313.24,-826.48 2467.82,-826.48 2467.82,-793.68 2313.24,-793.68"/>
<text xml:space="preserve" text-anchor="start" x="2316.24" y="-804.48" font-family="Arial" font-size="14.00" fill="#c9c9c9">取得 HTML/XML 具名视图</text>
</g>
<!-- logic_2&#45;&gt;preview -->
<g id="edge9" class="edge">
<title>logic_2&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2207.62,-645.9C2339.78,-641.04 2502.1,-635.06 2634.61,-630.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2634.48,-632.81 2641.88,-629.92 2634.28,-627.57 2634.48,-632.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2296.74,-646.03 2296.74,-678.83 2320.74,-678.83 2320.74,-646.03 2296.74,-646.03"/>
<text xml:space="preserve" text-anchor="start" x="2304.84" y="-659.23" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2323.74,-646.03 2323.74,-678.83 2457.32,-678.83 2457.32,-646.03 2323.74,-646.03"/>
<text xml:space="preserve" text-anchor="start" x="2326.74" y="-656.83" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图与完整资源到 PNG</text>
</g>
</g>
</svg>
`;case`pi_session_shutdown`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2240pt" height="500pt"
 viewBox="0.00 0.00 2240.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- pi_agent -->
<g id="node1" class="node">
<title>pi_agent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="533.79,-325 0,-325 0,-145 533.79,-145 533.79,-325"/>
<text xml:space="preserve" text-anchor="start" x="213.55" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi 官方运行时</text>
<text xml:space="preserve" text-anchor="start" x="191.87" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">外部 Pi v1.0.0，官方提交</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP</text>
<text xml:space="preserve" text-anchor="start" x="62.67" y="-197" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。</text>
</g>
<!-- logic -->
<g id="node2" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1341.29,-325 916.08,-325 916.08,-145 1341.29,-145 1341.29,-325"/>
<text xml:space="preserve" text-anchor="start" x="1053.67" y="-274" font-family="Arial" font-size="20.00" fill="#eff6ff">扩展生命周期与接入</text>
<text xml:space="preserve" text-anchor="start" x="960.3" y="-251" font-family="Arial" font-size="15.00" fill="#bfdbfe">扩展工厂只注册 flags 和事件；session_start 从 ctx.cwd</text>
<text xml:space="preserve" text-anchor="start" x="951.58" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">建立专属 memory Host 和 HTTP 服务，再向 Pi 登记 MCP</text>
<text xml:space="preserve" text-anchor="start" x="944.02" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">endpoint；连接由 Pi 管理。session_shutdown 先注销 MCP</text>
<text xml:space="preserve" text-anchor="start" x="936.13" y="-197" font-family="Arial" font-size="15.00" fill="#bfdbfe">登记，再关闭 HTTP，最后关闭 Host。new/resume/fork/reload</text>
<text xml:space="preserve" text-anchor="start" x="978.66" y="-179" font-family="Arial" font-size="15.00" fill="#bfdbfe">使用同一开始结束合同，不从会话历史重建工程状态。</text>
</g>
<!-- logic_1 -->
<g id="node3" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2209.96,-470 1683.91,-470 1683.91,-290 2209.96,-290 2209.96,-470"/>
<text xml:space="preserve" text-anchor="start" x="1856.92" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">工具合同与 HTTP 接入</text>
<text xml:space="preserve" text-anchor="start" x="1778.98" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch</text>
<text xml:space="preserve" text-anchor="start" x="1729.39" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host</text>
<text xml:space="preserve" text-anchor="start" x="1703.96" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</text>
</g>
<!-- logic_2 -->
<g id="node4" class="node">
<title>logic_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2195.38,-180 1698.49,-180 1698.49,0 2195.38,0 2195.38,-180"/>
<text xml:space="preserve" text-anchor="start" x="1856.91" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="1768.53" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="1718.54" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="1829.41" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- pi_agent&#45;&gt;logic -->
<g id="edge1" class="edge">
<title>pi_agent&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M533.75,-235C653.09,-235 792.27,-235 905.89,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="905.58,-237.63 913.08,-235 905.58,-232.38 905.58,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="650.84,-238 650.84,-270.8 674.84,-270.8 674.84,-238 650.84,-238"/>
<text xml:space="preserve" text-anchor="start" x="658.95" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="677.84,-238 677.84,-270.8 799.02,-270.8 799.02,-238 677.84,-238"/>
<text xml:space="preserve" text-anchor="start" x="680.84" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">session_shutdown</text>
</g>
<!-- pi_agent&#45;&gt;logic -->
<g id="edge2" class="edge">
<title>pi_agent&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M543.55,-175.37C560.5,-172.94 577.34,-170.84 593.79,-169.2 709.78,-157.61 740.32,-155.38 856.08,-169.2 875.71,-171.54 895.97,-174.81 916.17,-178.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="543.6,-172.71 536.56,-176.4 544.37,-177.91 543.6,-172.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="596.79,-172.2 596.79,-205 620.79,-205 620.79,-172.2 596.79,-172.2"/>
<text xml:space="preserve" text-anchor="start" x="604.89" y="-185.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="623.79,-172.2 623.79,-205 853.08,-205 853.08,-172.2 623.79,-172.2"/>
<text xml:space="preserve" text-anchor="start" x="626.79" y="-183" font-family="Arial" font-size="14.00" fill="#c9c9c9">unregisterMcpServer：结束连接与调用</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1341.22,-272.58C1442.79,-290.62 1565.72,-312.46 1674.14,-331.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1673.42,-334.26 1681.27,-332.98 1674.34,-329.09 1673.42,-334.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1452.54,-323.49 1452.54,-356.29 1476.54,-356.29 1476.54,-323.49 1452.54,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="1460.65" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1479.54,-323.49 1479.54,-356.29 1572.66,-356.29 1572.66,-323.49 1479.54,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="1482.54" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">关闭回环 HTTP</text>
</g>
<!-- logic&#45;&gt;logic_2 -->
<g id="edge4" class="edge">
<title>logic&#45;&gt;logic_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1341.22,-197.42C1447.37,-178.57 1576.83,-155.57 1688.69,-135.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1688.86,-138.33 1695.79,-134.44 1687.94,-133.16 1688.86,-138.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1404.29,-186.96 1404.29,-219.76 1428.29,-219.76 1428.29,-186.96 1404.29,-186.96"/>
<text xml:space="preserve" text-anchor="start" x="1412.4" y="-200.16" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1431.29,-186.96 1431.29,-219.76 1620.91,-219.76 1620.91,-186.96 1431.29,-186.96"/>
<text xml:space="preserve" text-anchor="start" x="1434.29" y="-197.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">关闭 Scope，取消调用并释放候选</text>
</g>
</g>
</svg>
`;case`pi_context`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1467pt" height="574pt"
 viewBox="0.00 0.00 1467.00 574.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 559.05)">
<g id="clust1" class="cluster">
<title>cluster_documentation</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="858.89,-8 858.89,-273.2 1428.89,-273.2 1428.89,-8 858.89,-8"/>
<text xml:space="preserve" text-anchor="start" x="866.89" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">产品规范与参考</text>
</g>
<!-- manual -->
<g id="node1" class="node">
<title>manual</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1396.5,-220 891.29,-220 891.29,-40 1396.5,-40 1396.5,-220"/>
<text xml:space="preserve" text-anchor="start" x="1028.86" y="-142" font-family="Arial" font-size="20.00" fill="#eff6ff">MechToolkit 发布与开发指南</text>
<text xml:space="preserve" text-anchor="start" x="911.34" y="-119" font-family="Arial" font-size="15.00" fill="#bfdbfe">技能与对外指南作为普通文件随本仓库提交维护；不作为 tools 自举输入。可选本地</text>
<text xml:space="preserve" text-anchor="start" x="1047.61" y="-101" font-family="Arial" font-size="15.00" fill="#bfdbfe">reference 资料独立于仓库结构。</text>
</g>
<!-- pi_agent -->
<g id="node2" class="node">
<title>pi_agent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="533.79,-544 0,-544 0,-364 533.79,-364 533.79,-544"/>
<text xml:space="preserve" text-anchor="start" x="213.55" y="-475" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi 官方运行时</text>
<text xml:space="preserve" text-anchor="start" x="191.87" y="-452" font-family="Arial" font-size="15.00" fill="#bfdbfe">外部 Pi v1.0.0，官方提交</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">a13d35a742c6ef8462812a28fbe1d8c8b7431c32。拥有会话、扩展事件、MCP</text>
<text xml:space="preserve" text-anchor="start" x="62.67" y="-416" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户端、工具取消与文本和图片交付；Toolkit 不建立第二 Agent 会话。</text>
</g>
<!-- toolkit -->
<g id="node3" class="node">
<title>toolkit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1381.49,-544 906.29,-544 906.29,-364 1381.49,-364 1381.49,-544"/>
<text xml:space="preserve" text-anchor="start" x="1044.42" y="-457" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit TypeScript 产品</text>
<text xml:space="preserve" text-anchor="start" x="926.35" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。</text>
</g>
<!-- pi_agent&#45;&gt;toolkit -->
<g id="edge1" class="edge">
<title>pi_agent&#45;&gt;toolkit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M533.59,-454C648.8,-454 782.8,-454 895.85,-454"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="895.84,-456.63 903.34,-454 895.84,-451.38 895.84,-456.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="588.68,-457 588.68,-479.8 851.39,-479.8 851.39,-457 588.68,-457"/>
<text xml:space="preserve" text-anchor="start" x="591.68" y="-462.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">官方扩展加载、会话事件、MCP 连接与结果交付</text>
</g>
<!-- toolkit&#45;&gt;manual -->
<g id="edge2" class="edge">
<title>toolkit&#45;&gt;manual</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1143.89,-364.16C1143.89,-322.63 1143.89,-273.02 1143.89,-230.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1146.52,-230.36 1143.89,-222.86 1141.27,-230.36 1146.52,-230.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1143.89,-281.2 1143.89,-304 1317.15,-304 1317.15,-281.2 1143.89,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1146.89" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">同树版本的 MechToolkit Skill</text>
</g>
</g>
</svg>
`;case`pi_integration`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1932pt" height="1602pt"
 viewBox="0.00 0.00 1932.00 1602.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1587.45)">
<g id="clust1" class="cluster">
<title>cluster_pi_plugin</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-875.2 8,-1564.4 1378,-1564.4 1378,-875.2 8,-875.2"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1551.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PI 官方扩展适配</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_logic</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-907.2 40,-1511.2 1346,-1511.2 1346,-907.2 40,-907.2"/>
<text xml:space="preserve" text-anchor="start" x="48" y="-1498.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">扩展生命周期与接入</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_mcp</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="708,-593 708,-858.2 1298,-858.2 1298,-593 708,-593"/>
<text xml:space="preserve" text-anchor="start" x="716" y="-845.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MCP 协议接入</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_host</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="723,-290.8 723,-556 1283,-556 1283,-290.8 723,-290.8"/>
<text xml:space="preserve" text-anchor="start" x="731" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">工作区 HOST</text>
</g>
<!-- registration -->
<g id="node1" class="node">
<title>registration</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="615.36,-1450 122.64,-1450 122.64,-1270 615.36,-1270 615.36,-1450"/>
<text xml:space="preserve" text-anchor="start" x="303.42" y="-1399" font-family="Arial" font-size="20.00" fill="#eff6ff">扩展工厂与 flags</text>
<text xml:space="preserve" text-anchor="start" x="218.95" y="-1376" font-family="Arial" font-size="15.00" fill="#bfdbfe">默认导出扩展工厂调用 PiExtension.register；通过</text>
<text xml:space="preserve" text-anchor="start" x="202.7" y="-1358" font-family="Arial" font-size="15.00" fill="#bfdbfe">registerFlag/getFlag 读取必填 toolkit&#45;mcp&#45;port（整数</text>
<text xml:space="preserve" text-anchor="start" x="246.44" y="-1340" font-family="Arial" font-size="15.00" fill="#bfdbfe">1..65535）和显式 toolkit&#45;assets&#45;config</text>
<text xml:space="preserve" text-anchor="start" x="142.7" y="-1322" font-family="Arial" font-size="15.00" fill="#bfdbfe">文件输入。资产配置缺失以 Option 表达未启用；不补另一份默认值。工厂不打开</text>
<text xml:space="preserve" text-anchor="start" x="303.57" y="-1304" font-family="Arial" font-size="15.00" fill="#bfdbfe">socket、监听或工程。</text>
</g>
<!-- lifecycle -->
<g id="node2" class="node">
<title>lifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="657.86,-1127.2 80.14,-1127.2 80.14,-947.2 657.86,-947.2 657.86,-1127.2"/>
<text xml:space="preserve" text-anchor="start" x="285.65" y="-1076.2" font-family="Arial" font-size="20.00" fill="#eff6ff">会话拥有的工作区资源</text>
<text xml:space="preserve" text-anchor="start" x="195.61" y="-1053.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">输入 session_start 的新 ctx.cwd、只读配置、注入 logger</text>
<text xml:space="preserve" text-anchor="start" x="205.61" y="-1035.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">与官方 ExtensionAPI；open 按 Host→HTTP→MCP</text>
<text xml:space="preserve" text-anchor="start" x="164.78" y="-1017.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">注册建立资源，session_shutdown 按注销 MCP→关闭 HTTP→关闭</text>
<text xml:space="preserve" text-anchor="start" x="353.58" y="-999.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host</text>
<text xml:space="preserve" text-anchor="start" x="100.2" y="-981.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">释放，启动失败逆序释放已取得资源。可取消的前置切换和分叉事件不关闭当前资源；实际替换及</text>
</g>
<!-- context -->
<g id="node3" class="node">
<title>context</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1305.86,-1127.2 768.14,-1127.2 768.14,-947.2 1305.86,-947.2 1305.86,-1127.2"/>
<text xml:space="preserve" text-anchor="start" x="960.88" y="-1076.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Skills 与结果上下文</text>
<text xml:space="preserve" text-anchor="start" x="883.62" y="-1053.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">resources_discover 提供同树版本的 MechToolkit</text>
<text xml:space="preserve" text-anchor="start" x="952.79" y="-1035.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Skill；tool_call/tool_result</text>
<text xml:space="preserve" text-anchor="start" x="877.38" y="-1017.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">只关联官方调用标识、结果和取消，不维护工具 schema</text>
<text xml:space="preserve" text-anchor="start" x="788.2" y="-999.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">或第二任务状态。会话记录仅保存交付内容与任务标识，跨会话标识不能复活已关闭 Host</text>
<text xml:space="preserve" text-anchor="start" x="1012" y="-981.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">的任务。</text>
</g>
<!-- logic -->
<g id="node4" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1266.03,-805 739.97,-805 739.97,-625 1266.03,-625 1266.03,-805"/>
<text xml:space="preserve" text-anchor="start" x="912.99" y="-736" font-family="Arial" font-size="20.00" fill="#eff6ff">工具合同与 HTTP 接入</text>
<text xml:space="preserve" text-anchor="start" x="835.04" y="-713" font-family="Arial" font-size="15.00" fill="#bfdbfe">实现 HTTP 工具合同；请求生命周期受 Host 控制。patch</text>
<text xml:space="preserve" text-anchor="start" x="785.46" y="-695" font-family="Arial" font-size="15.00" fill="#bfdbfe">匹配只在单次请求内消费原视图文本与顺序编辑，输出完整更新文本后经 Host</text>
<text xml:space="preserve" text-anchor="start" x="760.03" y="-677" font-family="Arial" font-size="15.00" fill="#bfdbfe">准备候选，不读取或写入工程，不拥有分析、缓存或提交。stdio 原型不属于现役架构。</text>
</g>
<!-- logic_1 -->
<g id="node5" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1251.45,-502.8 754.55,-502.8 754.55,-322.8 1251.45,-322.8 1251.45,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="912.98" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="824.6" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="774.61" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="885.48" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- pi -->
<g id="node6" class="node">
<title>pi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1901.54,-1450 1410.46,-1450 1410.46,-1270 1901.54,-1270 1901.54,-1450"/>
<text xml:space="preserve" text-anchor="start" x="1585.99" y="-1381" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi 只读参数归一化</text>
<text xml:space="preserve" text-anchor="start" x="1488.03" y="-1358" font-family="Arial" font-size="15.00" fill="#bfdbfe">PiConfigSource 从扩展传入的 flags 与显式配置输入产生</text>
<text xml:space="preserve" text-anchor="start" x="1430.52" y="-1340" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitConfig；当前 read 失败。具体资产配置与凭据来源在入口确定，不读取</text>
<text xml:space="preserve" text-anchor="start" x="1513.46" y="-1322" font-family="Arial" font-size="15.00" fill="#bfdbfe">VS Code、不消费环境变量，不创建或同步配置。</text>
</g>
<!-- invocations -->
<g id="node7" class="node">
<title>invocations</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1280.19,-180 725.81,-180 725.81,0 1280.19,0 1280.19,-180"/>
<text xml:space="preserve" text-anchor="start" x="944.66" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">调用记录与取消</text>
<text xml:space="preserve" text-anchor="start" x="805.86" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="745.86" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生</text>
<text xml:space="preserve" text-anchor="start" x="781.7" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。</text>
</g>
<!-- registration&#45;&gt;lifecycle -->
<g id="edge1" class="edge">
<title>registration&#45;&gt;lifecycle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M369,-1270.07C369,-1228.87 369,-1179.76 369,-1137.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="371.63,-1137.56 369,-1130.06 366.38,-1137.56 371.63,-1137.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="369,-1187.2 369,-1210 503.36,-1210 503.36,-1187.2 369,-1187.2"/>
<text xml:space="preserve" text-anchor="start" x="372" y="-1193" font-family="Arial" font-size="14.00" fill="#c9c9c9">声明会话唯一工作区资源</text>
</g>
<!-- registration&#45;&gt;context -->
<g id="edge2" class="edge">
<title>registration&#45;&gt;context</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M554.19,-1270.07C643.87,-1227 751.55,-1175.28 842.44,-1131.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="843.39,-1134.09 849.01,-1128.48 841.12,-1129.36 843.39,-1134.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="723.03,-1187.2 723.03,-1210 834.05,-1210 834.05,-1187.2 723.03,-1187.2"/>
<text xml:space="preserve" text-anchor="start" x="726.03" y="-1193" font-family="Arial" font-size="14.00" fill="#c9c9c9">绑定官方上下文输入</text>
</g>
<!-- lifecycle&#45;&gt;logic_1 -->
<g id="edge4" class="edge">
<title>lifecycle&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M377.19,-947.57C390.85,-848.77 426.97,-690.13 521.75,-593 581.73,-531.53 664.71,-490.94 744.9,-464.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="745.47,-466.81 751.78,-461.98 743.84,-461.82 745.47,-466.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="521.75,-703.6 521.75,-726.4 681,-726.4 681,-703.6 521.75,-703.6"/>
<text xml:space="preserve" text-anchor="start" x="524.75" y="-709.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">绑定唯一 Host 生命周期合同</text>
</g>
<!-- context&#45;&gt;logic -->
<g id="edge5" class="edge">
<title>context&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1023.3,-907.2C1020.05,-876.56 1016.63,-844.33 1013.54,-815.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1016.17,-815.13 1012.76,-807.95 1010.95,-815.69 1016.17,-815.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="748.93,-855.92 748.93,-878.72 1017.86,-878.72 1017.86,-855.92 748.93,-855.92"/>
<text xml:space="preserve" text-anchor="start" x="751.93" y="-861.72" font-family="Arial" font-size="14.00" fill="#c9c9c9">启动回环 HTTP，交由 Pi 官方 MCP 客户端消费</text>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1003,-625.15C1003,-589.83 1003,-549.04 1003,-512.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1005.63,-513.21 1003,-505.71 1000.38,-513.21 1005.63,-513.21"/>
</g>
<!-- logic_1&#45;&gt;invocations -->
<g id="edge6" class="edge">
<title>logic_1&#45;&gt;invocations</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1003,-322.87C1003,-281.67 1003,-232.56 1003,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1005.63,-190.36 1003,-182.86 1000.38,-190.36 1005.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1003,-240 1003,-262.8 1230.71,-262.8 1230.71,-240 1003,-240"/>
<text xml:space="preserve" text-anchor="start" x="1006" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">外部请求登记结果与取消；状态刷新只读取</text>
</g>
</g>
</svg>
`;case`pi_components`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1256pt" height="533pt"
 viewBox="0.00 0.00 1256.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- registration -->
<g id="node1" class="node">
<title>registration</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="869.22,-502.8 376.5,-502.8 376.5,-322.8 869.22,-322.8 869.22,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="557.28" y="-451.8" font-family="Arial" font-size="20.00" fill="#eff6ff">扩展工厂与 flags</text>
<text xml:space="preserve" text-anchor="start" x="472.81" y="-428.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">默认导出扩展工厂调用 PiExtension.register；通过</text>
<text xml:space="preserve" text-anchor="start" x="456.55" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">registerFlag/getFlag 读取必填 toolkit&#45;mcp&#45;port（整数</text>
<text xml:space="preserve" text-anchor="start" x="500.3" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">1..65535）和显式 toolkit&#45;assets&#45;config</text>
<text xml:space="preserve" text-anchor="start" x="396.55" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">文件输入。资产配置缺失以 Option 表达未启用；不补另一份默认值。工厂不打开</text>
<text xml:space="preserve" text-anchor="start" x="557.42" y="-356.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">socket、监听或工程。</text>
</g>
<!-- lifecycle -->
<g id="node2" class="node">
<title>lifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="577.72,-180 0,-180 0,0 577.72,0 577.72,-180"/>
<text xml:space="preserve" text-anchor="start" x="205.51" y="-129" font-family="Arial" font-size="20.00" fill="#eff6ff">会话拥有的工作区资源</text>
<text xml:space="preserve" text-anchor="start" x="115.47" y="-106" font-family="Arial" font-size="15.00" fill="#bfdbfe">输入 session_start 的新 ctx.cwd、只读配置、注入 logger</text>
<text xml:space="preserve" text-anchor="start" x="125.47" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">与官方 ExtensionAPI；open 按 Host→HTTP→MCP</text>
<text xml:space="preserve" text-anchor="start" x="84.63" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">注册建立资源，session_shutdown 按注销 MCP→关闭 HTTP→关闭</text>
<text xml:space="preserve" text-anchor="start" x="273.44" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-34" font-family="Arial" font-size="15.00" fill="#bfdbfe">释放，启动失败逆序释放已取得资源。可取消的前置切换和分叉事件不关闭当前资源；实际替换及</text>
</g>
<!-- context -->
<g id="node3" class="node">
<title>context</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1225.71,-180 688,-180 688,0 1225.71,0 1225.71,-180"/>
<text xml:space="preserve" text-anchor="start" x="880.74" y="-129" font-family="Arial" font-size="20.00" fill="#eff6ff">Skills 与结果上下文</text>
<text xml:space="preserve" text-anchor="start" x="803.47" y="-106" font-family="Arial" font-size="15.00" fill="#bfdbfe">resources_discover 提供同树版本的 MechToolkit</text>
<text xml:space="preserve" text-anchor="start" x="872.65" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Skill；tool_call/tool_result</text>
<text xml:space="preserve" text-anchor="start" x="797.24" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">只关联官方调用标识、结果和取消，不维护工具 schema</text>
<text xml:space="preserve" text-anchor="start" x="708.06" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">或第二任务状态。会话记录仅保存交付内容与任务标识，跨会话标识不能复活已关闭 Host</text>
<text xml:space="preserve" text-anchor="start" x="931.85" y="-34" font-family="Arial" font-size="15.00" fill="#bfdbfe">的任务。</text>
</g>
<!-- registration&#45;&gt;lifecycle -->
<g id="edge1" class="edge">
<title>registration&#45;&gt;lifecycle</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M530.26,-322.87C486.28,-280.62 433.65,-230.07 388.76,-186.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="390.75,-185.23 383.53,-181.93 387.12,-189.01 390.75,-185.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="465.87,-240 465.87,-262.8 600.23,-262.8 600.23,-240 465.87,-240"/>
<text xml:space="preserve" text-anchor="start" x="468.87" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">声明会话唯一工作区资源</text>
</g>
<!-- registration&#45;&gt;context -->
<g id="edge2" class="edge">
<title>registration&#45;&gt;context</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M715.45,-322.87C759.43,-280.62 812.07,-230.07 856.95,-186.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="858.6,-189.01 862.19,-181.93 854.96,-185.23 858.6,-189.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="799.87,-240 799.87,-262.8 910.89,-262.8 910.89,-240 799.87,-240"/>
<text xml:space="preserve" text-anchor="start" x="802.87" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">绑定官方上下文输入</text>
</g>
</g>
</svg>
`;case`change_plan`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2168pt" height="1157pt"
 viewBox="0.00 0.00 2168.00 1157.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1141.65)">
<!-- change_plan -->
<g id="node1" class="node">
<title>change_plan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1098.67,-1126.6 0,-1126.6 0,-946.6 1098.67,-946.6 1098.67,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="490.99" y="-1075.6" font-family="Arial" font-size="20.00" fill="#eff6ff">变更计划纯计算</text>
<text xml:space="preserve" text-anchor="start" x="446.81" y="-1052.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图编辑、重命名、脚本与 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1034.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing</text>
<text xml:space="preserve" text-anchor="start" x="439.72" y="-1016.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用 Entities 物化内存候选，Entities</text>
<text xml:space="preserve" text-anchor="start" x="426.39" y="-998.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">从候选及未改变依赖准备语义输入，Editing</text>
<text xml:space="preserve" text-anchor="start" x="299.7" y="-980.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</text>
</g>
<!-- analysis -->
<g id="node2" class="node">
<title>analysis</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1087.78,-803.8 520.89,-803.8 520.89,-623.8 1087.78,-623.8 1087.78,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="737.66" y="-734.8" font-family="Arial" font-size="20.00" fill="#eff6ff">纯符号表与调用图</text>
<text xml:space="preserve" text-anchor="start" x="710.98" y="-711.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">基于实体快照、第一层 LocalAst</text>
<text xml:space="preserve" text-anchor="start" x="540.95" y="-693.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层</text>
<text xml:space="preserve" text-anchor="start" x="745.15" y="-675.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Context 或转换依据</text>
</g>
<!-- logic_1 -->
<g id="node3" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1051.52,-180 557.16,-180 557.16,0 1051.52,0 1051.52,-180"/>
<text xml:space="preserve" text-anchor="start" x="651.53" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">工程设置、路径、GUID 与权威逻辑实体</text>
<text xml:space="preserve" text-anchor="start" x="577.21" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">解析工程设置、路径、GUID 与逻辑实体合同；输入由调用方提供，不读取工程。</text>
</g>
<!-- device_context -->
<g id="node4" class="node">
<title>device_context</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1598.43,-1126.6 1208.25,-1126.6 1208.25,-946.6 1598.43,-946.6 1598.43,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="1269.98" y="-1039.6" font-family="Arial" font-size="20.00" fill="#eff6ff">全局变量、零件元数据与零件上下文</text>
<text xml:space="preserve" text-anchor="start" x="1228.3" y="-1016.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载调用方提供的变量、元数据和脚本关联；不现场查询工程。</text>
</g>
<!-- local_ast -->
<g id="node5" class="node">
<title>local_ast</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1360.43,-481 970.25,-481 970.25,-301 1360.43,-301 1360.43,-481"/>
<text xml:space="preserve" text-anchor="start" x="1126.44" y="-394" font-family="Arial" font-size="20.00" fill="#eff6ff">局部 AST</text>
<text xml:space="preserve" text-anchor="start" x="990.3" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。</text>
</g>
<!-- logic -->
<g id="node6" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2138.04,-1126.6 1708.64,-1126.6 1708.64,-946.6 2138.04,-946.6 2138.04,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="1873.33" y="-1039.6" font-family="Arial" font-size="20.00" fill="#eff6ff">四向格式转换</text>
<text xml:space="preserve" text-anchor="start" x="1728.69" y="-1016.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 Canvas 节点为中心的纯计算。Base64 是原版旧数据兼容格式。</text>
</g>
<!-- change_plan&#45;&gt;analysis -->
<g id="edge1" class="edge">
<title>change_plan&#45;&gt;analysis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M620.03,-946.67C653.33,-904.77 693.13,-854.7 727.21,-811.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="729.23,-813.5 731.84,-806 725.12,-810.24 729.23,-813.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="684.48,-863.8 684.48,-886.6 795.5,-886.6 795.5,-863.8 684.48,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="687.48" y="-869.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">只读符号表与调用图</text>
</g>
<!-- change_plan&#45;&gt;logic_1 -->
<g id="edge2" class="edge">
<title>change_plan&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M506.88,-946.6C472.49,-862.49 434.55,-733.23 466.34,-623.8 515.35,-455.06 635.64,-288.6 718.65,-187.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="720.61,-189.55 723.37,-182.1 716.57,-186.2 720.61,-189.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="494.81,-541 494.81,-563.8 652.5,-563.8 652.5,-541 494.81,-541"/>
<text xml:space="preserve" text-anchor="start" x="497.81" y="-546.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">复用实体快照与统一操作合同</text>
</g>
<!-- analysis&#45;&gt;logic_1 -->
<g id="edge6" class="edge">
<title>analysis&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M804.34,-624.04C804.34,-509.19 804.34,-309.68 804.34,-190.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="806.96,-190.3 804.34,-182.8 801.71,-190.3 806.96,-190.3"/>
</g>
<!-- analysis&#45;&gt;local_ast -->
<g id="edge5" class="edge">
<title>analysis&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M904.42,-623.87C952.05,-581.53 1009.08,-530.86 1057.66,-487.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1059.25,-489.78 1063.11,-482.84 1055.76,-485.86 1059.25,-489.78"/>
</g>
<!-- device_context&#45;&gt;logic_1 -->
<g id="edge4" class="edge">
<title>device_context&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1435.9,-946.88C1484.46,-797.7 1555.98,-494.04 1415.34,-301 1333.99,-189.34 1189.48,-136.51 1061.42,-111.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1062.28,-109.25 1054.43,-110.44 1061.31,-114.41 1062.28,-109.25"/>
</g>
<!-- device_context&#45;&gt;local_ast -->
<g id="edge3" class="edge">
<title>device_context&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1370.49,-946.79C1326.25,-827.14 1247.76,-614.88 1201.75,-490.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1204.34,-489.9 1199.27,-483.77 1199.41,-491.72 1204.34,-489.9"/>
</g>
<!-- local_ast&#45;&gt;logic_1 -->
<g id="edge7" class="edge">
<title>local_ast&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1058,-301.1C1014.38,-264.97 963.89,-223.15 919.5,-186.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="921.35,-184.51 913.9,-181.75 918,-188.55 921.35,-184.51"/>
</g>
</g>
</svg>
`;case`frontend_canvas_display`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3537pt" height="654pt"
 viewBox="0.00 0.00 3537.00 654.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 639.05)">
<!-- plugin -->
<g id="node1" class="node">
<title>plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="497.75,-479 0,-479 0,-299 497.75,-299 497.75,-479"/>
<text xml:space="preserve" text-anchor="start" x="127.72" y="-428" font-family="Arial" font-size="20.00" fill="#eff6ff">VSCode 宿主与 Effect 组合根</text>
<text xml:space="preserve" text-anchor="start" x="138.01" y="-405" font-family="Arial" font-size="15.00" fill="#bfdbfe">绑定原生配置、webview 与同一 Host</text>
<text xml:space="preserve" text-anchor="start" x="79.68" y="-387" font-family="Arial" font-size="15.00" fill="#bfdbfe">生命周期；组件经具名入口获取和关闭，调用方以 try/finally</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas</text>
<text xml:space="preserve" text-anchor="start" x="52.58" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示</text>
<text xml:space="preserve" text-anchor="start" x="63.01" y="-333" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。</text>
</g>
<!-- logic -->
<g id="node2" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1446.18,-479 949.29,-479 949.29,-299 1446.18,-299 1446.18,-479"/>
<text xml:space="preserve" text-anchor="start" x="1107.72" y="-410" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="1019.33" y="-387" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="969.34" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="1080.21" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- view_service -->
<g id="node3" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2582.14,-624 1873.58,-624 1873.58,-444 2582.14,-444 2582.14,-624"/>
<text xml:space="preserve" text-anchor="start" x="2136.17" y="-564" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="2032.4" y="-541" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="2062.41" y="-523" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="2113.26" y="-505" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="1893.63" y="-487" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- preview -->
<g id="node4" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2468.37,-325 1987.34,-325 1987.34,-145 2468.37,-145 2468.37,-325"/>
<text xml:space="preserve" text-anchor="start" x="2157.83" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 预览业务</text>
<text xml:space="preserve" text-anchor="start" x="2007.4" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU</text>
<text xml:space="preserve" text-anchor="start" x="2024.89" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG</text>
<text xml:space="preserve" text-anchor="start" x="2009.06" y="-197" font-family="Arial" font-size="15.00" fill="#bfdbfe">结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</text>
</g>
<!-- entities -->
<g id="node5" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3506.88,-470 2956.62,-470 2956.62,-290 3506.88,-290 3506.88,-470"/>
<text xml:space="preserve" text-anchor="start" x="3165.07" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="3036.72" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="3026.71" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="2976.68" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="3096.31" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="3190.9" y="-324" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- renderer -->
<g id="node6" class="node">
<title>renderer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3505.61,-180 2957.9,-180 2957.9,0 3505.61,0 3505.61,-180"/>
<text xml:space="preserve" text-anchor="start" x="3137.83" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas CPU 渲染引擎</text>
<text xml:space="preserve" text-anchor="start" x="3213" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">结构化</text>
<text xml:space="preserve" text-anchor="start" x="2994.18" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经</text>
<text xml:space="preserve" text-anchor="start" x="3121.71" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasKit/Skia CPU surface 输出</text>
<text xml:space="preserve" text-anchor="start" x="2977.95" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。</text>
</g>
<!-- plugin&#45;&gt;logic -->
<g id="edge1" class="edge">
<title>plugin&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M497.72,-389C633.64,-389 801.92,-389 939.31,-389"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="939.04,-391.63 946.54,-389 939.04,-386.38 939.04,-391.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="560.75,-392 560.75,-431.6 584.75,-431.6 584.75,-392 560.75,-392"/>
<text xml:space="preserve" text-anchor="start" x="568.86" y="-408.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="587.75,-392 587.75,-431.6 886.29,-431.6 886.29,-392 587.75,-392"/>
<text xml:space="preserve" text-anchor="start" x="590.75" y="-414.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">文档定位源身份；同一 Host.openPreview，面板持有</text>
<text xml:space="preserve" text-anchor="start" x="691.89" y="-397.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">take/close 资源</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1445.98,-423.87C1571.04,-441.51 1725.24,-463.26 1863.5,-482.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1863.05,-485.34 1870.85,-483.79 1863.79,-480.14 1863.05,-485.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1539.92,-477.49 1539.92,-510.29 1563.92,-510.29 1563.92,-477.49 1539.92,-477.49"/>
<text xml:space="preserve" text-anchor="start" x="1548.02" y="-490.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1566.92,-477.49 1566.92,-510.29 1779.84,-510.29 1779.84,-477.49 1566.92,-477.49"/>
<text xml:space="preserve" text-anchor="start" x="1569.92" y="-488.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取具名 HTML/XML 与完整来源基准</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge6" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1446.01,-356.99C1558.99,-348.6 1693.99,-347.37 1813.58,-370.2 1887.88,-384.39 1965.87,-411.72 2033.83,-440.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2032.63,-442.4 2040.56,-442.89 2034.67,-437.56 2032.63,-442.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1509.19,-373.2 1509.19,-406 1533.19,-406 1533.19,-373.2 1509.19,-373.2"/>
<text xml:space="preserve" text-anchor="start" x="1517.29" y="-386.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1536.19,-373.2 1536.19,-406 1810.57,-406 1810.57,-373.2 1536.19,-373.2"/>
<text xml:space="preserve" text-anchor="start" x="1539.19" y="-384" font-family="Arial" font-size="14.00" fill="#c9c9c9">工程变化的同次影响驱动已有展示；前端只消费产物</text>
</g>
<!-- logic&#45;&gt;preview -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1446.02,-299.49C1466.21,-294.03 1486.43,-289.15 1506.18,-285.2 1660.8,-254.25 1837.38,-241.59 1977.05,-236.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1977.03,-239.35 1984.44,-236.47 1976.85,-234.1 1977.03,-239.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1509.18,-288.2 1509.18,-321 1533.18,-321 1533.18,-288.2 1509.18,-288.2"/>
<text xml:space="preserve" text-anchor="start" x="1517.29" y="-301.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1536.18,-288.2 1536.18,-321 1810.58,-321 1810.58,-288.2 1536.18,-288.2"/>
<text xml:space="preserve" text-anchor="start" x="1539.18" y="-299" font-family="Arial" font-size="14.00" fill="#c9c9c9">同一 viewport、字体、显式时间与唯一 CPU 后端</text>
</g>
<!-- preview&#45;&gt;entities -->
<g id="edge4" class="edge">
<title>preview&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2468.2,-269.64C2611.92,-290.44 2795.59,-317.02 2946.65,-338.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2946.21,-341.47 2954.01,-339.95 2946.96,-336.28 2946.21,-341.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2662.64,-331.96 2662.64,-364.76 2686.64,-364.76 2686.64,-331.96 2662.64,-331.96"/>
<text xml:space="preserve" text-anchor="start" x="2670.74" y="-345.16" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2689.64,-331.96 2689.64,-364.76 2876.13,-364.76 2876.13,-331.96 2689.64,-331.96"/>
<text xml:space="preserve" text-anchor="start" x="2692.64" y="-342.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取本次实际引用资源及 revision</text>
</g>
<!-- preview&#45;&gt;renderer -->
<g id="edge5" class="edge">
<title>preview&#45;&gt;renderer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2468.2,-200.36C2612.21,-179.52 2796.31,-152.88 2947.54,-130.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2947.87,-133.59 2954.91,-129.92 2947.12,-128.4 2947.87,-133.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2645.14,-174.18 2645.14,-206.98 2669.14,-206.98 2669.14,-174.18 2645.14,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="2653.25" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2672.14,-174.18 2672.14,-206.98 2893.62,-206.98 2893.62,-174.18 2672.14,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="2675.14" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">共用 CPU 渲染，交付 PNG 与最终基准</text>
</g>
</g>
</svg>
`;case`initial_read`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3740pt" height="1567pt"
 viewBox="0.00 0.00 3740.00 1567.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1552.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-883 0,-883 0,-703 496.89,-703 496.89,-883"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-814" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-791" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-773" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-755" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- files -->
<g id="node2" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1656.19,-1537 1040.97,-1537 1040.97,-1357 1656.19,-1357 1656.19,-1537"/>
<text xml:space="preserve" text-anchor="start" x="1256.9" y="-1477" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="1061.03" y="-1454" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="1140.61" y="-1436" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="1147.27" y="-1418" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="1156.45" y="-1400" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- entities -->
<g id="node3" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1623.71,-729 1073.45,-729 1073.45,-549 1623.71,-549 1623.71,-729"/>
<text xml:space="preserve" text-anchor="start" x="1281.9" y="-678" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="1153.55" y="-655" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="1143.54" y="-637" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="1093.51" y="-619" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="1213.14" y="-601" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="1307.73" y="-583" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- semantic -->
<g id="node4" class="node">
<title>semantic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2752,-1198 2261.8,-1198 2261.8,-1018 2752,-1018 2752,-1198"/>
<text xml:space="preserve" text-anchor="start" x="2440.22" y="-1147" font-family="Arial" font-size="20.00" fill="#eff6ff">语义装配（设计）</text>
<text xml:space="preserve" text-anchor="start" x="2298.09" y="-1124" font-family="Arial" font-size="15.00" fill="#bfdbfe">由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON</text>
<text xml:space="preserve" text-anchor="start" x="2355.61" y="-1106" font-family="Arial" font-size="15.00" fill="#bfdbfe">合同导入导出平台数据与文档，SemanticAssembly</text>
<text xml:space="preserve" text-anchor="start" x="2285.18" y="-1088" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context</text>
<text xml:space="preserve" text-anchor="start" x="2399.78" y="-1070" font-family="Arial" font-size="15.00" fill="#bfdbfe">和转换依据。复用既有身份、Context</text>
<text xml:space="preserve" text-anchor="start" x="2281.85" y="-1052" font-family="Arial" font-size="15.00" fill="#bfdbfe">及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行</text>
</g>
<!-- view_service -->
<g id="node5" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2861.18,-699 2152.61,-699 2152.61,-519 2861.18,-519 2861.18,-699"/>
<text xml:space="preserve" text-anchor="start" x="2415.21" y="-639" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="2311.44" y="-616" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="2341.45" y="-598" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="2392.29" y="-580" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="2172.67" y="-562" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- ts -->
<g id="node6" class="node">
<title>ts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3699.07,-844 3196.37,-844 3196.37,-664 3699.07,-664 3699.07,-844"/>
<text xml:space="preserve" text-anchor="start" x="3354.37" y="-775" font-family="Arial" font-size="20.00" fill="#eff6ff">零件与 TS 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="3262.26" y="-752" font-family="Arial" font-size="15.00" fill="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context</text>
<text xml:space="preserve" text-anchor="start" x="3244.74" y="-734" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="3216.42" y="-716" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</text>
</g>
<!-- html -->
<g id="node7" class="node">
<title>html</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3710.33,-554 3185.11,-554 3185.11,-374 3710.33,-374 3710.33,-554"/>
<text xml:space="preserve" text-anchor="start" x="3300.46" y="-503" font-family="Arial" font-size="20.00" fill="#eff6ff">独立 Canvas 与 HTML 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="3265.57" y="-480" font-family="Arial" font-size="15.00" fill="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立</text>
<text xml:space="preserve" text-anchor="start" x="3205.16" y="-462" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML</text>
<text xml:space="preserve" text-anchor="start" x="3252.68" y="-444" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views</text>
<text xml:space="preserve" text-anchor="start" x="3228.91" y="-426" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由</text>
<text xml:space="preserve" text-anchor="start" x="3354.35" y="-408" font-family="Arial" font-size="15.00" fill="#bfdbfe">Preview/Renderer 独立交付。</text>
</g>
<!-- preview -->
<g id="node8" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1589.1,-180 1108.07,-180 1108.07,0 1589.1,0 1589.1,-180"/>
<text xml:space="preserve" text-anchor="start" x="1278.56" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 预览业务</text>
<text xml:space="preserve" text-anchor="start" x="1128.12" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU</text>
<text xml:space="preserve" text-anchor="start" x="1145.62" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG</text>
<text xml:space="preserve" text-anchor="start" x="1129.79" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</text>
</g>
<!-- logic&#45;&gt;files -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M279.15,-882.54C321.78,-996.4 411.6,-1190.26 556.89,-1291 694.58,-1386.47 876.46,-1426.75 1031.06,-1442.6"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1030.47,-1445.18 1038.19,-1443.31 1030.99,-1439.95 1030.47,-1445.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="627.96,-1437.08 627.96,-1469.88 651.96,-1469.88 651.96,-1437.08 627.96,-1437.08"/>
<text xml:space="preserve" text-anchor="start" x="636.06" y="-1450.28" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="654.96,-1437.08 654.96,-1469.88 909.91,-1469.88 909.91,-1437.08 654.96,-1437.08"/>
<text xml:space="preserve" text-anchor="start" x="657.96" y="-1447.88" font-family="Arial" font-size="14.00" fill="#c9c9c9">建立监听并等待 ready；期间实际变化保持登记</text>
</g>
<!-- logic&#45;&gt;entities -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.57,-758.34C664.87,-734.74 888.08,-703.44 1063.68,-678.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1063.79,-681.45 1070.85,-677.81 1063.06,-676.25 1063.79,-681.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-750.49 559.89,-783.29 583.89,-783.29 583.89,-750.49 559.89,-750.49"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-763.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-750.49 586.89,-783.29 977.97,-783.29 977.97,-750.49 586.89,-750.49"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-761.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">首次完整装配与确定读取基准；后续批次复用同一实体服务按变化目录重读</text>
</g>
<!-- logic&#45;&gt;entities -->
<g id="edge7" class="edge">
<title>logic&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M381.6,-703.16C433.84,-672.75 495.89,-642.6 556.89,-627.2 721.17,-585.73 910.82,-586.98 1063.2,-599.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1062.93,-602.02 1070.62,-600.03 1063.37,-596.79 1062.93,-602.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="642.75,-630.2 642.75,-663 666.75,-663 666.75,-630.2 642.75,-630.2"/>
<text xml:space="preserve" text-anchor="start" x="650.85" y="-643.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="669.75,-630.2 669.75,-663 895.12,-663 895.12,-630.2 669.75,-630.2"/>
<text xml:space="preserve" text-anchor="start" x="672.75" y="-641" font-family="Arial" font-size="14.00" fill="#c9c9c9">files：枚举现存派生路径；memory 跳过</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge4" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M332.71,-882.86C389.78,-937.55 470.56,-1002.39 556.89,-1032 1202.71,-1253.49 1463.38,-1259.95 2092.61,-995 2167.76,-963.36 2319.36,-810.29 2416.58,-706.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2418.5,-708.47 2421.71,-701.21 2414.67,-704.89 2418.5,-708.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1279.57,-1199.08 1279.57,-1231.88 1303.57,-1231.88 1303.57,-1199.08 1279.57,-1199.08"/>
<text xml:space="preserve" text-anchor="start" x="1287.68" y="-1212.28" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1306.57,-1199.08 1306.57,-1231.88 1417.59,-1231.88 1417.59,-1199.08 1306.57,-1199.08"/>
<text xml:space="preserve" text-anchor="start" x="1309.57" y="-1209.88" font-family="Arial" font-size="14.00" fill="#c9c9c9">按模式交付具名视图</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge8" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.89,-810.5C517.18,-811.51 537.38,-812.37 556.89,-813 1045.38,-828.87 1171.14,-843.97 1656.19,-784 1817.02,-764.12 1992.74,-730.03 2142.44,-697.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2143,-699.77 2149.76,-695.59 2141.87,-694.64 2143,-699.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1115.43,-830.19 1115.43,-862.99 1139.43,-862.99 1139.43,-830.19 1115.43,-830.19"/>
<text xml:space="preserve" text-anchor="start" x="1123.53" y="-843.39" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1142.43,-830.19 1142.43,-862.99 1581.74,-862.99 1581.74,-830.19 1142.43,-830.19"/>
<text xml:space="preserve" text-anchor="start" x="1145.43" y="-840.99" font-family="Arial" font-size="14.00" fill="#c9c9c9">files：按完整源声明计算发布和删除；解析失败保留未确定范围，路径冲突交付诊断</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge10" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M348.25,-703.08C405.44,-655.51 480.96,-599.88 556.89,-565 757.37,-472.92 821.73,-479.75 1040.97,-455.2 1312.7,-424.77 1383.86,-430.75 1656.19,-455.2 1816.93,-469.63 1992.74,-499.12 2142.52,-528.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2141.97,-531.02 2149.83,-529.89 2142.98,-525.87 2141.97,-531.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1181.54,-458.2 1181.54,-491 1205.54,-491 1205.54,-458.2 1181.54,-458.2"/>
<text xml:space="preserve" text-anchor="start" x="1189.65" y="-471.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1208.54,-458.2 1208.54,-491 1515.62,-491 1515.62,-458.2 1208.54,-458.2"/>
<text xml:space="preserve" text-anchor="start" x="1211.54" y="-469" font-family="Arial" font-size="14.00" fill="#c9c9c9">files Canvas：交回同次 PNG 与实际依赖，装配展示壳</text>
</g>
<!-- logic&#45;&gt;preview -->
<g id="edge9" class="edge">
<title>logic&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M278.29,-703.12C320.41,-586.68 410.12,-385.9 556.89,-278.2 713.73,-163.11 930.96,-117.4 1098.04,-99.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1098.27,-102.33 1105.46,-98.95 1097.73,-97.11 1098.27,-102.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="609.28,-281.2 609.28,-314 633.28,-314 633.28,-281.2 609.28,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="617.39" y="-294.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="636.28,-281.2 636.28,-314 928.58,-314 928.58,-281.2 636.28,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="639.28" y="-292" font-family="Arial" font-size="14.00" fill="#c9c9c9">files Canvas：以固定视口、字体和时间渲染同次视图</text>
</g>
<!-- entities&#45;&gt;semantic -->
<g id="edge3" class="edge">
<title>entities&#45;&gt;semantic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1571.16,-728.87C1772.89,-810.69 2069.63,-931.05 2274.4,-1014.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2273.34,-1016.51 2281.28,-1016.89 2275.31,-1011.64 2273.34,-1016.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1789.88,-932.3 1789.88,-965.1 1813.88,-965.1 1813.88,-932.3 1789.88,-932.3"/>
<text xml:space="preserve" text-anchor="start" x="1797.98" y="-945.5" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1816.88,-932.3 1816.88,-965.1 2018.93,-965.1 2018.93,-932.3 1816.88,-932.3"/>
<text xml:space="preserve" text-anchor="start" x="1819.88" y="-943.1" font-family="Arial" font-size="14.00" fill="#c9c9c9">按快照装配完整 Context 与转换依据</text>
</g>
<!-- entities&#45;&gt;view_service -->
<g id="edge11" class="edge">
<title>entities&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1633.87,-631.62C1790.51,-627.56 1986.34,-622.48 2152.72,-618.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1634.07,-628.99 1626.64,-631.81 1634.2,-634.24 1634.07,-628.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1719.19,-632.3 1719.19,-665.1 1750.77,-665.1 1750.77,-632.3 1719.19,-632.3"/>
<text xml:space="preserve" text-anchor="start" x="1727.19" y="-645.5" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1753.77,-632.3 1753.77,-665.1 2089.61,-665.1 2089.61,-632.3 1753.77,-632.3"/>
<text xml:space="preserve" text-anchor="start" x="1756.77" y="-643.1" font-family="Arial" font-size="14.00" fill="#c9c9c9">files：执行派生发布和删除；期间监听变化仍由 Host 批次处理</text>
</g>
<!-- view_service&#45;&gt;ts -->
<g id="edge5" class="edge">
<title>view_service&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2861.15,-663.56C2969.1,-680.23 3085.78,-698.25 3186.37,-713.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3185.88,-716.37 3193.69,-714.92 3186.68,-711.18 3185.88,-716.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2964.64,-705.96 2964.64,-738.76 2988.64,-738.76 2988.64,-705.96 2964.64,-705.96"/>
<text xml:space="preserve" text-anchor="start" x="2972.74" y="-719.16" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2991.64,-705.96 2991.64,-738.76 3081.65,-738.76 3081.65,-705.96 2991.64,-705.96"/>
<text xml:space="preserve" text-anchor="start" x="2994.64" y="-716.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">零件到 TS 视图</text>
</g>
<!-- view_service&#45;&gt;html -->
<g id="edge6" class="edge">
<title>view_service&#45;&gt;html</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2861.15,-554.44C2964.97,-538.41 3076.88,-521.12 3174.77,-506"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3175.11,-508.61 3182.12,-504.87 3174.3,-503.42 3175.11,-508.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2924.18,-543.85 2924.18,-576.65 2948.18,-576.65 2948.18,-543.85 2924.18,-543.85"/>
<text xml:space="preserve" text-anchor="start" x="2932.28" y="-557.05" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2951.18,-543.85 2951.18,-576.65 3122.11,-576.65 3122.11,-543.85 2951.18,-543.85"/>
<text xml:space="preserve" text-anchor="start" x="2954.18" y="-554.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">Canvas 到 HTML/XML 视图</text>
</g>
</g>
</svg>
`;case`diagnostics_read`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2450pt" height="790pt"
 viewBox="0.00 0.00 2450.00 790.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 775.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-470 0,-470 0,-290 496.89,-290 496.89,-470"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- diagnostics -->
<g id="node2" class="node">
<title>diagnostics</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1272.14,-470 793.6,-470 793.6,-290 1272.14,-290 1272.14,-470"/>
<text xml:space="preserve" text-anchor="start" x="999.53" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">诊断业务</text>
<text xml:space="preserve" text-anchor="start" x="813.66" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架</text>
</g>
<!-- entities -->
<g id="node3" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2330.76,-760 1780.5,-760 1780.5,-580 2330.76,-580 2330.76,-760"/>
<text xml:space="preserve" text-anchor="start" x="1988.95" y="-709" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="1860.6" y="-686" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="1850.59" y="-668" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="1800.56" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="1920.19" y="-632" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="2014.78" y="-614" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- logic_1 -->
<g id="node4" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2419.5,-470 1691.76,-470 1691.76,-290 2419.5,-290 2419.5,-470"/>
<text xml:space="preserve" text-anchor="start" x="2013.96" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">纯分析计算</text>
<text xml:space="preserve" text-anchor="start" x="1962.27" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费实体快照、第一层 LocalAst</text>
<text xml:space="preserve" text-anchor="start" x="1711.81" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的</text>
<text xml:space="preserve" text-anchor="start" x="1938.11" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">SDK 文档准备，不读取文件、不持有状态</text>
</g>
<!-- lint -->
<g id="node5" class="node">
<title>lint</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2413.25,-180 1698.01,-180 1698.01,0 2413.25,0 2413.25,-180"/>
<text xml:space="preserve" text-anchor="start" x="1980.62" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">脚本静态检查纯计算</text>
<text xml:space="preserve" text-anchor="start" x="1864.32" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整</text>
<text xml:space="preserve" text-anchor="start" x="1977.67" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">Context，CallGraphLint</text>
<text xml:space="preserve" text-anchor="start" x="1718.06" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。</text>
</g>
<!-- logic&#45;&gt;diagnostics -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;diagnostics</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.74,-380C588.15,-380 691.73,-380 783.25,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="783.25,-382.63 790.75,-380 783.25,-377.38 783.25,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-383 559.89,-415.8 583.89,-415.8 583.89,-383 559.89,-383"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-383 586.89,-415.8 730.6,-415.8 730.6,-383 586.89,-383"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">inspect：明确基准与请求</text>
</g>
<!-- diagnostics&#45;&gt;entities -->
<g id="edge2" class="edge">
<title>diagnostics&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1271.9,-447.63C1420.92,-489.96 1613.75,-544.74 1770.72,-589.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1769.69,-591.78 1777.62,-591.3 1771.12,-586.73 1769.69,-591.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1418.77,-545.36 1418.77,-578.16 1442.77,-578.16 1442.77,-545.36 1418.77,-545.36"/>
<text xml:space="preserve" text-anchor="start" x="1426.88" y="-558.56" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1445.77,-545.36 1445.77,-578.16 1545.12,-578.16 1545.12,-545.36 1445.77,-545.36"/>
<text xml:space="preserve" text-anchor="start" x="1448.77" y="-556.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">主动读取确定快照</text>
</g>
<!-- diagnostics&#45;&gt;logic_1 -->
<g id="edge3" class="edge">
<title>diagnostics&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1271.9,-380C1393.75,-380 1544.88,-380 1681.75,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1681.47,-382.63 1688.97,-380 1681.47,-377.38 1681.47,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1354.59,-383 1354.59,-415.8 1378.59,-415.8 1378.59,-383 1354.59,-383"/>
<text xml:space="preserve" text-anchor="start" x="1362.7" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1381.59,-383 1381.59,-415.8 1609.3,-415.8 1609.3,-383 1381.59,-383"/>
<text xml:space="preserve" text-anchor="start" x="1384.59" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">复用同次实体读取已计算的符号与调用关系</text>
</g>
<!-- diagnostics&#45;&gt;lint -->
<g id="edge4" class="edge">
<title>diagnostics&#45;&gt;lint</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1271.9,-312.37C1407.8,-273.76 1580.14,-224.8 1728.49,-182.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1728.81,-185.29 1735.31,-180.72 1727.38,-180.24 1728.81,-185.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1335.14,-297.31 1335.14,-336.91 1359.14,-336.91 1359.14,-297.31 1335.14,-297.31"/>
<text xml:space="preserve" text-anchor="start" x="1343.24" y="-313.91" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1362.14,-297.31 1362.14,-336.91 1628.76,-336.91 1628.76,-297.31 1362.14,-297.31"/>
<text xml:space="preserve" text-anchor="start" x="1365.14" y="-319.91" font-family="Arial" font-size="14.00" fill="#c9c9c9">按绑定执行 ScriptLint，再对同一完整图执行一次</text>
<text xml:space="preserve" text-anchor="start" x="1411.81" y="-303.11" font-family="Arial" font-size="14.00" fill="#c9c9c9">CallGraphLint；交付具名诊断</text>
</g>
</g>
</svg>
`;case`preview_read`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2503pt" height="645pt"
 viewBox="0.00 0.00 2503.00 645.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 630.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-470 0,-470 0,-290 496.89,-290 496.89,-470"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- view_service -->
<g id="node2" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1559.73,-615 851.17,-615 851.17,-435 1559.73,-435 1559.73,-615"/>
<text xml:space="preserve" text-anchor="start" x="1113.77" y="-555" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="1010" y="-532" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="1040" y="-514" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="1090.85" y="-496" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="871.23" y="-478" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- preview -->
<g id="node3" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1445.97,-325 964.94,-325 964.94,-145 1445.97,-145 1445.97,-325"/>
<text xml:space="preserve" text-anchor="start" x="1135.43" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 预览业务</text>
<text xml:space="preserve" text-anchor="start" x="984.99" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU</text>
<text xml:space="preserve" text-anchor="start" x="1002.49" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG</text>
<text xml:space="preserve" text-anchor="start" x="986.66" y="-197" font-family="Arial" font-size="15.00" fill="#bfdbfe">结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</text>
</g>
<!-- entities -->
<g id="node4" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2472.81,-470 1922.55,-470 1922.55,-290 2472.81,-290 2472.81,-470"/>
<text xml:space="preserve" text-anchor="start" x="2131" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="2002.65" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="1992.63" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="1942.6" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="2062.23" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="2156.83" y="-324" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- renderer -->
<g id="node5" class="node">
<title>renderer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2471.53,-180 1923.82,-180 1923.82,0 2471.53,0 2471.53,-180"/>
<text xml:space="preserve" text-anchor="start" x="2103.76" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas CPU 渲染引擎</text>
<text xml:space="preserve" text-anchor="start" x="2178.92" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">结构化</text>
<text xml:space="preserve" text-anchor="start" x="1960.11" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经</text>
<text xml:space="preserve" text-anchor="start" x="2087.64" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasKit/Skia CPU surface 输出</text>
<text xml:space="preserve" text-anchor="start" x="1943.88" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.63,-417.53C601.51,-433.45 725.88,-452.34 840.89,-469.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="840.48,-472.39 848.28,-470.92 841.26,-467.2 840.48,-472.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="583.24,-464.18 583.24,-496.98 607.24,-496.98 607.24,-464.18 583.24,-464.18"/>
<text xml:space="preserve" text-anchor="start" x="591.35" y="-477.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="610.24,-464.18 610.24,-496.98 764.82,-496.98 764.82,-464.18 610.24,-464.18"/>
<text xml:space="preserve" text-anchor="start" x="613.24" y="-474.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取具名 HTML/XML 视图</text>
</g>
<!-- logic&#45;&gt;preview -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.63,-342.47C637.63,-321.06 813.86,-294.3 955.2,-272.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="955.3,-275.48 962.32,-271.76 954.51,-270.29 955.3,-275.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-336.1 559.89,-368.9 583.89,-368.9 583.89,-336.1 559.89,-336.1"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-349.3" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-336.1 586.89,-368.9 788.17,-368.9 788.17,-336.1 586.89,-336.1"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-346.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付结构化 Canvas 与明确渲染输入</text>
</g>
<!-- preview&#45;&gt;entities -->
<g id="edge3" class="edge">
<title>preview&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1445.84,-270.05C1586.42,-290.64 1764.9,-316.77 1912.57,-338.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1911.91,-340.95 1919.71,-339.44 1912.67,-335.76 1911.91,-340.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1672.13,-331.96 1672.13,-364.76 1696.13,-364.76 1696.13,-331.96 1672.13,-331.96"/>
<text xml:space="preserve" text-anchor="start" x="1680.24" y="-345.16" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1699.13,-331.96 1699.13,-364.76 1810.15,-364.76 1810.15,-331.96 1699.13,-331.96"/>
<text xml:space="preserve" text-anchor="start" x="1702.13" y="-342.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">按实际基准读取资源</text>
</g>
<!-- preview&#45;&gt;renderer -->
<g id="edge4" class="edge">
<title>preview&#45;&gt;renderer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1445.84,-199.95C1586.84,-179.3 1765.97,-153.07 1913.9,-131.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1914.01,-134.04 1921.05,-130.36 1913.25,-128.85 1914.01,-134.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1622.73,-174.18 1622.73,-206.98 1646.73,-206.98 1646.73,-174.18 1622.73,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="1630.84" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1649.73,-174.18 1649.73,-206.98 1859.55,-206.98 1859.55,-174.18 1649.73,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="1652.73" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">进程内 CPU 渲染并返回 PNG 与诊断</text>
</g>
</g>
</svg>
`;case`source_refresh`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3751pt" height="1308pt"
 viewBox="0.00 0.00 3751.00 1308.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1293.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-609 0,-609 0,-429 496.89,-429 496.89,-609"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-540" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-517" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-499" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-481" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- files -->
<g id="node2" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1737.88,-1278 1122.65,-1278 1122.65,-1098 1737.88,-1098 1737.88,-1278"/>
<text xml:space="preserve" text-anchor="start" x="1338.58" y="-1218" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="1142.71" y="-1195" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="1222.29" y="-1177" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="1228.95" y="-1159" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="1238.13" y="-1141" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- entities -->
<g id="node3" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1705.39,-729 1155.13,-729 1155.13,-549 1705.39,-549 1705.39,-729"/>
<text xml:space="preserve" text-anchor="start" x="1363.58" y="-678" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="1235.23" y="-655" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="1225.22" y="-637" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="1175.19" y="-619" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="1294.82" y="-601" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="1389.42" y="-583" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- view_service -->
<g id="node4" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2885.5,-592 2176.93,-592 2176.93,-412 2885.5,-412 2885.5,-592"/>
<text xml:space="preserve" text-anchor="start" x="2439.53" y="-532" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="2335.76" y="-509" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="2365.76" y="-491" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="2416.61" y="-473" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="2196.99" y="-455" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- ts -->
<g id="node5" class="node">
<title>ts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3709.36,-737 3206.66,-737 3206.66,-557 3709.36,-557 3709.36,-737"/>
<text xml:space="preserve" text-anchor="start" x="3364.66" y="-668" font-family="Arial" font-size="20.00" fill="#eff6ff">零件与 TS 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="3272.55" y="-645" font-family="Arial" font-size="15.00" fill="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context</text>
<text xml:space="preserve" text-anchor="start" x="3255.04" y="-627" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="3226.72" y="-609" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</text>
</g>
<!-- html -->
<g id="node6" class="node">
<title>html</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3720.62,-447 3195.41,-447 3195.41,-267 3720.62,-267 3720.62,-447"/>
<text xml:space="preserve" text-anchor="start" x="3310.76" y="-396" font-family="Arial" font-size="20.00" fill="#eff6ff">独立 Canvas 与 HTML 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="3275.87" y="-373" font-family="Arial" font-size="15.00" fill="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立</text>
<text xml:space="preserve" text-anchor="start" x="3215.46" y="-355" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML</text>
<text xml:space="preserve" text-anchor="start" x="3262.97" y="-337" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views</text>
<text xml:space="preserve" text-anchor="start" x="3239.21" y="-319" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由</text>
<text xml:space="preserve" text-anchor="start" x="3364.65" y="-301" font-family="Arial" font-size="15.00" fill="#bfdbfe">Preview/Renderer 独立交付。</text>
</g>
<!-- preview -->
<g id="node7" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1670.78,-180 1189.75,-180 1189.75,0 1670.78,0 1670.78,-180"/>
<text xml:space="preserve" text-anchor="start" x="1360.24" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 预览业务</text>
<text xml:space="preserve" text-anchor="start" x="1209.81" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU</text>
<text xml:space="preserve" text-anchor="start" x="1227.3" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG</text>
<text xml:space="preserve" text-anchor="start" x="1211.47" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</text>
</g>
<!-- logic&#45;&gt;files -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M277.12,-608.83C318.2,-726.11 407.01,-928.59 556.89,-1032 718.32,-1143.36 935.26,-1182.51 1112.42,-1193.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1112.02,-1196.34 1119.67,-1194.17 1112.34,-1191.1 1112.02,-1196.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="727.53,-1191.62 727.53,-1224.42 751.53,-1224.42 751.53,-1191.62 727.53,-1191.62"/>
<text xml:space="preserve" text-anchor="start" x="735.64" y="-1204.82" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="754.53,-1191.62 754.53,-1224.42 892.01,-1224.42 892.01,-1191.62 754.53,-1191.62"/>
<text xml:space="preserve" text-anchor="start" x="757.53" y="-1202.42" font-family="Arial" font-size="14.00" fill="#c9c9c9">take：取得精确变化路径</text>
</g>
<!-- logic&#45;&gt;entities -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.78,-544.16C685.98,-563.4 947.13,-589.96 1144.95,-610.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1144.47,-612.67 1152.19,-610.82 1145,-607.45 1144.47,-612.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-603.19 559.89,-635.99 583.89,-635.99 583.89,-603.19 559.89,-603.19"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-616.39" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-603.19 586.89,-635.99 1059.65,-635.99 1059.65,-603.19 586.89,-603.19"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-613.99" font-family="Arial" font-size="14.00" fill="#c9c9c9">批次刷新：单次许可内分类、重读并取得同次完整语义基准，交付派生路径及更新删除标识</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M418.77,-608.89C462.87,-629.81 510.93,-650.47 556.89,-666 1056.64,-834.84 1217.26,-868.9 1737.88,-784 1946.81,-749.93 2173.23,-664 2330.32,-595.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2331.01,-598.43 2336.84,-593.03 2328.92,-593.62 2331.01,-598.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1240.28,-831.74 1240.28,-864.54 1264.28,-864.54 1264.28,-831.74 1240.28,-831.74"/>
<text xml:space="preserve" text-anchor="start" x="1248.39" y="-844.94" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1267.28,-831.74 1267.28,-864.54 1620.25,-864.54 1620.25,-831.74 1267.28,-831.74"/>
<text xml:space="preserve" text-anchor="start" x="1270.28" y="-842.54" font-family="Arial" font-size="14.00" fill="#c9c9c9">refresh：交付实际变化、基准和展示依赖，取得受影响视图及展示</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge8" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.66,-496.11C671.36,-481.12 911.13,-462.92 1122.65,-455.2 1395.9,-445.23 1464.56,-447.14 1737.88,-455.2 1878.16,-459.34 2032.23,-467.59 2166.91,-476.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2166.73,-478.65 2174.38,-476.5 2167.06,-473.41 2166.73,-478.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1263.62,-458.2 1263.62,-491 1287.62,-491 1287.62,-458.2 1263.62,-458.2"/>
<text xml:space="preserve" text-anchor="start" x="1271.73" y="-471.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1290.62,-458.2 1290.62,-491 1596.91,-491 1596.91,-458.2 1290.62,-458.2"/>
<text xml:space="preserve" text-anchor="start" x="1293.62" y="-469" font-family="Arial" font-size="14.00" fill="#c9c9c9">files Canvas：交回 PNG 与依赖，装配 HTML 展示壳</text>
</g>
<!-- logic&#45;&gt;preview -->
<g id="edge7" class="edge">
<title>logic&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M337.4,-429.08C394.99,-375.35 474.61,-310.22 556.89,-271.4 764.48,-173.48 837.95,-213.79 1062.65,-167 1100.58,-159.1 1140.7,-150.71 1179.95,-142.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1180.41,-145.07 1187.21,-140.96 1179.33,-139.93 1180.41,-145.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="615.51,-274.4 615.51,-314 639.51,-314 639.51,-274.4 615.51,-274.4"/>
<text xml:space="preserve" text-anchor="start" x="623.61" y="-291" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="642.51,-274.4 642.51,-314 1004.04,-314 1004.04,-274.4 642.51,-274.4"/>
<text xml:space="preserve" text-anchor="start" x="645.51" y="-297" font-family="Arial" font-size="14.00" fill="#c9c9c9">files Canvas：以固定视口、字体和时间渲染同次视图，取得 PNG</text>
<text xml:space="preserve" text-anchor="start" x="794.1" y="-280.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">与实际依赖</text>
</g>
<!-- logic&#45;&gt;preview -->
<g id="edge10" class="edge">
<title>logic&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M285.75,-429.34C331.97,-328.67 422.32,-170.34 556.89,-101.2 748.78,-2.61 997.19,-10.26 1179.83,-36.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1179.32,-39.03 1187.12,-37.51 1180.08,-33.83 1179.32,-39.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="626.02,-104.2 626.02,-137 650.02,-137 650.02,-104.2 626.02,-104.2"/>
<text xml:space="preserve" text-anchor="start" x="634.13" y="-117.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="653.02,-104.2 653.02,-137 993.52,-137 993.52,-104.2 653.02,-104.2"/>
<text xml:space="preserve" text-anchor="start" x="656.02" y="-115" font-family="Arial" font-size="14.00" fill="#c9c9c9">按实际影响刷新已打开的展示；memory 仅按展示请求生成视图</text>
</g>
<!-- entities&#45;&gt;view_service -->
<g id="edge4" class="edge">
<title>entities&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1715.48,-603.57C1856.35,-586.01 2027.83,-564.63 2177.07,-546.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1715.51,-600.92 1708.39,-604.45 1716.16,-606.13 1715.51,-600.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1876.72,-593.78 1876.72,-626.58 1900.72,-626.58 1900.72,-593.78 1876.72,-593.78"/>
<text xml:space="preserve" text-anchor="start" x="1884.83" y="-606.98" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1903.72,-593.78 1903.72,-626.58 2038.08,-626.58 2038.08,-593.78 1903.72,-593.78"/>
<text xml:space="preserve" text-anchor="start" x="1906.72" y="-604.58" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取格式实体与实际资源</text>
</g>
<!-- entities&#45;&gt;view_service -->
<g id="edge9" class="edge">
<title>entities&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1619.75,-545.07C1675.7,-521.74 1738.04,-500.03 1797.88,-488.2 1920.13,-464.04 2056.11,-460.4 2177.38,-465.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1618.79,-542.63 1612.9,-547.96 1620.83,-547.46 1618.79,-542.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1800.88,-491.2 1800.88,-524 1824.88,-524 1824.88,-491.2 1800.88,-491.2"/>
<text xml:space="preserve" text-anchor="start" x="1808.98" y="-504.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1827.88,-491.2 1827.88,-524 2113.93,-524 2113.93,-491.2 1827.88,-491.2"/>
<text xml:space="preserve" text-anchor="start" x="1830.88" y="-502" font-family="Arial" font-size="14.00" fill="#c9c9c9">files：发布或删除派生内容；TS 正文与索引同批交付</text>
</g>
<!-- view_service&#45;&gt;ts -->
<g id="edge5" class="edge">
<title>view_service&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2885.47,-557.39C2988.92,-573.61 3100.1,-591.04 3196.65,-606.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3196.03,-608.74 3203.85,-607.31 3196.85,-603.55 3196.03,-608.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2958.61,-598.96 2958.61,-631.76 2982.61,-631.76 2982.61,-598.96 2958.61,-598.96"/>
<text xml:space="preserve" text-anchor="start" x="2966.71" y="-612.16" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2985.61,-598.96 2985.61,-631.76 3122.29,-631.76 3122.29,-598.96 2985.61,-598.96"/>
<text xml:space="preserve" text-anchor="start" x="2988.61" y="-609.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">更新或删除 TS 派生结果</text>
</g>
<!-- view_service&#45;&gt;html -->
<g id="edge6" class="edge">
<title>view_service&#45;&gt;html</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2885.47,-446.61C2984.88,-431.03 3091.42,-414.32 3185.26,-399.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3185.48,-402.23 3192.48,-398.48 3184.66,-397.04 3185.48,-402.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2948.5,-436.85 2948.5,-469.65 2972.5,-469.65 2972.5,-436.85 2948.5,-436.85"/>
<text xml:space="preserve" text-anchor="start" x="2956.6" y="-450.05" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2975.5,-436.85 2975.5,-469.65 3132.41,-469.65 3132.41,-436.85 2975.5,-436.85"/>
<text xml:space="preserve" text-anchor="start" x="2978.5" y="-447.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">更新或删除 HTML 派生结果</text>
</g>
</g>
</svg>
`;case`commit_refresh`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3609pt" height="509pt"
 viewBox="0.00 0.00 3609.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 494.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-334 0,-334 0,-154 496.89,-154 496.89,-334"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- editing -->
<g id="node2" class="node">
<title>editing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.36,-479 1063.45,-479 1063.45,-299 1610.36,-299 1610.36,-479"/>
<text xml:space="preserve" text-anchor="start" x="1303.57" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑业务</text>
<text xml:space="preserve" text-anchor="start" x="1083.51" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change</text>
<text xml:space="preserve" text-anchor="start" x="1206.85" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plan 形成统一 EntityChange/Schematics</text>
<text xml:space="preserve" text-anchor="start" x="1136.03" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用</text>
<text xml:space="preserve" text-anchor="start" x="1232.72" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views。TODO：编辑与重构编排。</text>
</g>
<!-- entities -->
<g id="node3" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2610.49,-479 2060.23,-479 2060.23,-299 2610.49,-299 2610.49,-479"/>
<text xml:space="preserve" text-anchor="start" x="2268.68" y="-428" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="2140.33" y="-405" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="2130.32" y="-387" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="2080.29" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="2199.92" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="2294.51" y="-333" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- files -->
<g id="node4" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3578.42,-479 2963.19,-479 2963.19,-299 3578.42,-299 3578.42,-479"/>
<text xml:space="preserve" text-anchor="start" x="3179.12" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="2983.25" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="3062.83" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="3069.49" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="3078.67" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- view_service -->
<g id="node5" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1691.19,-180 982.62,-180 982.62,0 1691.19,0 1691.19,-180"/>
<text xml:space="preserve" text-anchor="start" x="1245.22" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="1141.45" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="1171.46" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="1222.3" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="1002.68" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- logic&#45;&gt;editing -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.66,-276.99C662.27,-299.1 880.73,-328.25 1053.25,-351.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1052.72,-353.85 1060.5,-352.24 1053.41,-348.65 1052.72,-353.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="653.25,-336.75 653.25,-369.55 677.25,-369.55 677.25,-336.75 653.25,-336.75"/>
<text xml:space="preserve" text-anchor="start" x="661.35" y="-349.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="680.25,-336.75 680.25,-369.55 826.27,-369.55 826.27,-336.75 680.25,-336.75"/>
<text xml:space="preserve" text-anchor="start" x="683.25" y="-347.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交明确候选与原读取基准</text>
</g>
<!-- logic&#45;&gt;editing -->
<g id="edge5" class="edge">
<title>logic&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M506.78,-208.26C633.13,-197.54 787,-194.72 922.62,-221.2 1002.52,-236.8 1086.49,-267.89 1157.72,-299.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="506.83,-205.62 499.59,-208.89 507.29,-210.85 506.83,-205.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="594.9,-224.2 594.9,-257 618.9,-257 618.9,-224.2 594.9,-224.2"/>
<text xml:space="preserve" text-anchor="start" x="603.01" y="-237.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="621.9,-224.2 621.9,-257 884.62,-257 884.62,-224.2 621.9,-224.2"/>
<text xml:space="preserve" text-anchor="start" x="624.9" y="-235" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付实际变化与错误；重读失败时不生成变化集合</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge6" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M481.68,-154.12C506.79,-146.72 532.2,-140.18 556.89,-135.2 691.01,-108.15 840.55,-95.4 972.47,-89.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="972.33,-92.52 979.72,-89.6 972.12,-87.28 972.33,-92.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-138.2 559.89,-171 583.89,-171 583.89,-138.2 559.89,-138.2"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-151.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-138.2 586.89,-171 919.62,-171 919.62,-138.2 586.89,-138.2"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-149" font-family="Arial" font-size="14.00" fill="#c9c9c9">重读成功时按实际变化刷新，包括写入失败或请求中断后的收尾</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge2" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1610.19,-389C1746.66,-389 1911.81,-389 2049.92,-389"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2049.71,-391.63 2057.21,-389 2049.71,-386.38 2049.71,-391.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1789.98,-392 1789.98,-424.8 1813.98,-424.8 1813.98,-392 1789.98,-392"/>
<text xml:space="preserve" text-anchor="start" x="1798.09" y="-405.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1816.98,-392 1816.98,-424.8 1961.44,-424.8 1961.44,-392 1816.98,-392"/>
<text xml:space="preserve" text-anchor="start" x="1819.98" y="-402.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">commit：核对基准并提交</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge4" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1620.4,-336.45C1737.87,-320.97 1875.63,-311.05 2000.23,-323.2 2019.94,-325.12 2040.22,-327.67 2060.57,-330.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1620.26,-333.82 1613.18,-337.42 1620.96,-339.02 1620.26,-333.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1754.19,-326.2 1754.19,-359 1778.19,-359 1778.19,-326.2 1754.19,-326.2"/>
<text xml:space="preserve" text-anchor="start" x="1762.3" y="-339.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1781.19,-326.2 1781.19,-359 1997.23,-359 1997.23,-326.2 1781.19,-326.2"/>
<text xml:space="preserve" text-anchor="start" x="1784.19" y="-337" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付同次实际重读结果及写入或重读错误</text>
</g>
<!-- entities&#45;&gt;files -->
<g id="edge3" class="edge">
<title>entities&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2610.43,-389C2717.89,-389 2841.87,-389 2953.12,-389"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2952.97,-391.63 2960.47,-389 2952.97,-386.38 2952.97,-391.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2673.49,-392 2673.49,-424.8 2697.49,-424.8 2697.49,-392 2673.49,-392"/>
<text xml:space="preserve" text-anchor="start" x="2681.6" y="-405.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2700.49,-392 2700.49,-424.8 2900.19,-424.8 2900.19,-392 2700.49,-392"/>
<text xml:space="preserve" text-anchor="start" x="2703.49" y="-402.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">实际 IO；成功或失败均重读磁盘事实</text>
</g>
</g>
</svg>
`;case`refactor_prepare`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3011pt" height="799pt"
 viewBox="0.00 0.00 3011.00 799.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 784.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-547 0,-547 0,-367 496.89,-367 496.89,-547"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-478" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-455" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-437" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-419" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- editing -->
<g id="node2" class="node">
<title>editing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1355.29,-547 808.38,-547 808.38,-367 1355.29,-367 1355.29,-547"/>
<text xml:space="preserve" text-anchor="start" x="1048.49" y="-487" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑业务</text>
<text xml:space="preserve" text-anchor="start" x="828.43" y="-464" font-family="Arial" font-size="15.00" fill="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change</text>
<text xml:space="preserve" text-anchor="start" x="951.77" y="-446" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plan 形成统一 EntityChange/Schematics</text>
<text xml:space="preserve" text-anchor="start" x="880.96" y="-428" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用</text>
<text xml:space="preserve" text-anchor="start" x="977.65" y="-410" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views。TODO：编辑与重构编排。</text>
</g>
<!-- entities -->
<g id="node3" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2706.75,-769 2156.49,-769 2156.49,-589 2706.75,-589 2706.75,-769"/>
<text xml:space="preserve" text-anchor="start" x="2364.94" y="-718" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="2236.59" y="-695" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="2226.58" y="-677" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="2176.55" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="2296.18" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="2390.78" y="-623" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- change_plan -->
<g id="node4" class="node">
<title>change_plan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2980.96,-470 1882.29,-470 1882.29,-290 2980.96,-290 2980.96,-470"/>
<text xml:space="preserve" text-anchor="start" x="2373.28" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">变更计划纯计算</text>
<text xml:space="preserve" text-anchor="start" x="2329.1" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图编辑、重命名、脚本与 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="1902.34" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing</text>
<text xml:space="preserve" text-anchor="start" x="2322.01" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用 Entities 物化内存候选，Entities</text>
<text xml:space="preserve" text-anchor="start" x="2308.67" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">从候选及未改变依赖准备语义输入，Editing</text>
<text xml:space="preserve" text-anchor="start" x="2181.99" y="-324" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</text>
</g>
<!-- logic_1 -->
<g id="node5" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2795.5,-180 2067.75,-180 2067.75,0 2795.5,0 2795.5,-180"/>
<text xml:space="preserve" text-anchor="start" x="2389.95" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">纯分析计算</text>
<text xml:space="preserve" text-anchor="start" x="2338.26" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费实体快照、第一层 LocalAst</text>
<text xml:space="preserve" text-anchor="start" x="2087.81" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的</text>
<text xml:space="preserve" text-anchor="start" x="2314.1" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">SDK 文档准备，不读取文件、不持有状态</text>
</g>
<!-- logic&#45;&gt;editing -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.64,-457C591.41,-457 700.24,-457 798.09,-457"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="797.91,-459.63 805.41,-457 797.91,-454.38 797.91,-459.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-460 559.89,-492.8 583.89,-492.8 583.89,-460 559.89,-460"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-473.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-460 586.89,-492.8 745.38,-492.8 745.38,-460 586.89,-460"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-470.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">refactor：目标与原读取基准</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge2" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1316.48,-546.92C1349.31,-557.29 1382.9,-566.73 1415.29,-574 1658.56,-628.58 1941.09,-654.88 2146.26,-667.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2145.92,-670.11 2153.57,-667.95 2146.24,-664.87 2145.92,-670.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1508.94,-640.34 1508.94,-673.14 1532.94,-673.14 1532.94,-640.34 1508.94,-640.34"/>
<text xml:space="preserve" text-anchor="start" x="1517.04" y="-653.54" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1535.94,-640.34 1535.94,-673.14 1728.64,-673.14 1728.64,-640.34 1535.94,-640.34"/>
<text xml:space="preserve" text-anchor="start" x="1538.94" y="-651.14" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取目标、关联实体与完整语义基准</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge4" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1354.86,-462.54C1495.27,-468.75 1668.86,-481.64 1822.29,-508.2 1822.85,-508.3 1988.46,-554.8 2146.71,-599.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2145.8,-601.72 2153.73,-601.22 2147.22,-596.66 2145.8,-601.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1418.29,-511.2 1418.29,-544 1442.29,-544 1442.29,-511.2 1418.29,-511.2"/>
<text xml:space="preserve" text-anchor="start" x="1426.39" y="-524.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1445.29,-511.2 1445.29,-544 1819.29,-544 1819.29,-511.2 1445.29,-511.2"/>
<text xml:space="preserve" text-anchor="start" x="1448.29" y="-522" font-family="Arial" font-size="14.00" fill="#c9c9c9">物化统一 EntityChange，从候选及未改变依赖准备语义输入，零写入</text>
</g>
<!-- editing&#45;&gt;change_plan -->
<g id="edge3" class="edge">
<title>editing&#45;&gt;change_plan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1354.92,-369.31C1375.2,-364.88 1395.48,-361.08 1415.29,-358.2 1562.61,-336.77 1723.2,-331.85 1872.29,-334.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1871.96,-337.5 1879.52,-335.03 1872.08,-332.25 1871.96,-337.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1462.61,-361.2 1462.61,-394 1486.61,-394 1486.61,-361.2 1462.61,-361.2"/>
<text xml:space="preserve" text-anchor="start" x="1470.72" y="-374.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1489.61,-361.2 1489.61,-394 1774.97,-394 1774.97,-361.2 1489.61,-361.2"/>
<text xml:space="preserve" text-anchor="start" x="1492.61" y="-372" font-family="Arial" font-size="14.00" fill="#c9c9c9">同次快照、分析与 RefactorChangePlanRequest</text>
</g>
<!-- editing&#45;&gt;logic_1 -->
<g id="edge5" class="edge">
<title>editing&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1216.45,-367.16C1275.21,-331.41 1346.42,-292.96 1415.29,-268.2 1621.28,-194.15 1862.21,-150.18 2057.66,-124.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2057.72,-127.09 2064.82,-123.52 2057.04,-121.88 2057.72,-127.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1466.93,-271.2 1466.93,-304 1490.93,-304 1490.93,-271.2 1466.93,-271.2"/>
<text xml:space="preserve" text-anchor="start" x="1475.04" y="-284.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1493.93,-271.2 1493.93,-304 1770.64,-304 1770.64,-271.2 1493.93,-271.2"/>
<text xml:space="preserve" text-anchor="start" x="1496.93" y="-282" font-family="Arial" font-size="14.00" fill="#c9c9c9">分析候选语义并校验受影响绑定，提交复用 commit</text>
</g>
</g>
</svg>
`;case`workspace_close`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1538pt" height="1080pt"
 viewBox="0.00 0.00 1538.00 1080.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1065.05)">
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.89,-615 0,-615 0,-435 496.89,-435 496.89,-615"/>
<text xml:space="preserve" text-anchor="start" x="158.43" y="-546" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="70.04" y="-523" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-505" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-487" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- invocations -->
<g id="node2" class="node">
<title>invocations</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1431.3,-1050 876.92,-1050 876.92,-870 1431.3,-870 1431.3,-1050"/>
<text xml:space="preserve" text-anchor="start" x="1095.77" y="-981" font-family="Arial" font-size="20.00" fill="#eff6ff">调用记录与取消</text>
<text xml:space="preserve" text-anchor="start" x="956.98" y="-958" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="896.98" y="-940" font-family="Arial" font-size="15.00" fill="#bfdbfe">的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生</text>
<text xml:space="preserve" text-anchor="start" x="932.81" y="-922" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。</text>
</g>
<!-- view_service -->
<g id="node3" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1508.4,-760 799.83,-760 799.83,-580 1508.4,-580 1508.4,-760"/>
<text xml:space="preserve" text-anchor="start" x="1062.43" y="-700" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="958.66" y="-677" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="988.66" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="1039.51" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="819.89" y="-623" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- entities -->
<g id="node4" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1429.24,-470 878.98,-470 878.98,-290 1429.24,-290 1429.24,-470"/>
<text xml:space="preserve" text-anchor="start" x="1087.43" y="-419" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="959.08" y="-396" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="949.07" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="899.04" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="1018.67" y="-342" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="1113.27" y="-324" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- files -->
<g id="node5" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1461.73,-180 846.5,-180 846.5,0 1461.73,0 1461.73,-180"/>
<text xml:space="preserve" text-anchor="start" x="1062.43" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="866.56" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="946.14" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="952.8" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="961.98" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- logic&#45;&gt;invocations -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;invocations</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M410.26,-614.94C518.93,-674.42 666.39,-752.64 799.83,-815 836.95,-832.35 876.73,-849.77 915.73,-866.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="914.37,-868.49 922.3,-868.98 916.41,-863.65 914.37,-868.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="579.35,-788.95 579.35,-821.75 603.35,-821.75 603.35,-788.95 579.35,-788.95"/>
<text xml:space="preserve" text-anchor="start" x="587.46" y="-802.15" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="606.35,-788.95 606.35,-821.75 717.37,-821.75 717.37,-788.95 606.35,-788.95"/>
<text xml:space="preserve" text-anchor="start" x="609.35" y="-799.75" font-family="Arial" font-size="14.00" fill="#c9c9c9">结束调用与取消等待</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.68,-564.67C587.11,-579.18 691.4,-595.92 789.86,-611.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="789.17,-614.26 796.99,-612.86 790,-609.08 789.17,-614.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="567.68,-604.85 567.68,-637.65 591.68,-637.65 591.68,-604.85 567.68,-604.85"/>
<text xml:space="preserve" text-anchor="start" x="575.79" y="-618.05" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="594.68,-604.85 594.68,-637.65 729.04,-637.65 729.04,-604.85 594.68,-604.85"/>
<text xml:space="preserve" text-anchor="start" x="597.68" y="-615.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">释放派生关联与转换资源</text>
</g>
<!-- logic&#45;&gt;entities -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M496.68,-485.33C611.81,-466.86 749.42,-444.78 868.83,-425.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="869.24,-428.21 876.23,-424.43 868.41,-423.02 869.24,-428.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="585.19,-476.96 585.19,-509.76 609.19,-509.76 609.19,-476.96 585.19,-476.96"/>
<text xml:space="preserve" text-anchor="start" x="593.29" y="-490.16" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="612.19,-476.96 612.19,-509.76 711.54,-509.76 711.54,-476.96 612.19,-476.96"/>
<text xml:space="preserve" text-anchor="start" x="615.19" y="-487.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">释放文件派生快照</text>
</g>
<!-- logic&#45;&gt;files -->
<g id="edge4" class="edge">
<title>logic&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M410.26,-435.06C518.93,-375.58 666.39,-297.36 799.83,-235 836.95,-217.65 876.73,-200.23 915.73,-183.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="916.41,-186.35 922.3,-181.02 914.37,-181.51 916.41,-186.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="559.89,-352.27 559.89,-385.07 583.89,-385.07 583.89,-352.27 559.89,-352.27"/>
<text xml:space="preserve" text-anchor="start" x="568" y="-365.47" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="586.89,-352.27 586.89,-385.07 736.83,-385.07 736.83,-352.27 586.89,-352.27"/>
<text xml:space="preserve" text-anchor="start" x="589.89" y="-363.07" font-family="Arial" font-size="14.00" fill="#c9c9c9">关闭唯一监听与 IO Scope</text>
</g>
</g>
</svg>
`;case`workspace_lifecycle`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="5544pt" height="1378pt"
 viewBox="0.00 0.00 5544.00 1378.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1363.05)">
<g id="clust1" class="cluster">
<title>cluster_host</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-318.8 8,-1340 1858,-1340 1858,-318.8 8,-318.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1327.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">工作区 HOST</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_logic</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-350.8 40,-1286.8 1826,-1286.8 1826,-350.8 40,-350.8"/>
<text xml:space="preserve" text-anchor="start" x="48" y="-1273.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">HOST 组合根与受控入口</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_entities</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1866,-8 1866,-632 4824,-632 4824,-8 1866,-8"/>
<text xml:space="preserve" text-anchor="start" x="1874" y="-619.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">第二层：工程实体</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_view_service</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="4862,-358.8 4862,-624 5506,-624 5506,-358.8 4862,-358.8"/>
<text xml:space="preserve" text-anchor="start" x="4870" y="-611.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">第三层：视图关联与交付</text>
</g>
<!-- lifecycle -->
<g id="node1" class="node">
<title>lifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1314.04,-1225.6 917.96,-1225.6 917.96,-1045.6 1314.04,-1045.6 1314.04,-1225.6"/>
<text xml:space="preserve" text-anchor="start" x="1040.99" y="-1147.6" font-family="Arial" font-size="20.00" fill="#eff6ff">唯一工作区生命周期</text>
<text xml:space="preserve" text-anchor="start" x="938.01" y="-1124.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host.open 建立工作区 Scope 和唯一配置输入；Host.close</text>
<text xml:space="preserve" text-anchor="start" x="1003.48" y="-1106.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">取消调用并释放实体、监听和转换缓存。</text>
</g>
<!-- refresh -->
<g id="node2" class="node">
<title>refresh</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1786.18,-902.8 445.82,-902.8 445.82,-722.8 1786.18,-722.8 1786.18,-902.8"/>
<text xml:space="preserve" text-anchor="start" x="1032.65" y="-851.8" font-family="Arial" font-size="20.00" fill="#eff6ff">唯一文件变化主动调度</text>
<text xml:space="preserve" text-anchor="start" x="878.03" y="-828.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">在唯一工作区 Scope 消费监听批次，主动调用实体分类与源重读，再把实际结果交给</text>
<text xml:space="preserve" text-anchor="start" x="974.3" y="-810.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views；按 Views 返回的影响调用具名 Preview</text>
<text xml:space="preserve" text-anchor="start" x="911.37" y="-792.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">请求刷新已打开展示。源与派生分类归 Entities，影响计算、files 发布及</text>
<text xml:space="preserve" text-anchor="start" x="924.7" y="-774.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">memory 按需交付归 Views，绘制归 Preview/Renderer。Host</text>
<text xml:space="preserve" text-anchor="start" x="465.87" y="-756.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">在同一工作区串行编排监听批次、编辑提交、资产确认及业务读取触发的实体重建与派生交付，防止较旧结果覆盖较新结果；展示登记与首次内容读取也在此边界衔接，避免漏掉源变化。已处于该边界的调用不重复获取，实体许可释放后</text>
</g>
<!-- composition -->
<g id="node3" class="node">
<title>composition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1337.78,-570.8 894.22,-570.8 894.22,-390.8 1337.78,-390.8 1337.78,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="1074.33" y="-501.8" font-family="Arial" font-size="20.00" fill="#eff6ff">服务组合根</text>
<text xml:space="preserve" text-anchor="start" x="965.96" y="-478.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">装配唯一 files 与 watcher，等待监听 ready 后创建</text>
<text xml:space="preserve" text-anchor="start" x="914.27" y="-460.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">entities，再装配 conversion、views 与业务；所有业务入口通过同一</text>
<text xml:space="preserve" text-anchor="start" x="950.55" y="-442.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host。组合根拥有服务生命周期，不执行转换或编辑算法。</text>
</g>
<!-- assembly -->
<g id="node4" class="node">
<title>assembly</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2646.12,-570.8 1905.88,-570.8 1905.88,-390.8 2646.12,-390.8 2646.12,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="2184.32" y="-492.8" font-family="Arial" font-size="20.00" fill="#eff6ff">逻辑来源与单次归属装配</text>
<text xml:space="preserve" text-anchor="start" x="2090.1" y="-469.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">LogicalEntitySources 按格式声明读取来源；EntityAssembly</text>
<text xml:space="preserve" text-anchor="start" x="1925.93" y="-451.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">私有拥有同次实体、诊断和归属集合，通过实体目录声明登记父级并生成最终快照，查询仅交付只读集合，不跨快照保留状态。</text>
</g>
<!-- refresh_1 -->
<g id="node5" class="node">
<title>refresh_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3783.9,-570.8 2756.1,-570.8 2756.1,-390.8 3783.9,-390.8 3783.9,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="3194.99" y="-519.8" font-family="Arial" font-size="20.00" fill="#eff6ff">显式重读与基准交付</text>
<text xml:space="preserve" text-anchor="start" x="3239.99" y="-496.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">接受 Host</text>
<text xml:space="preserve" text-anchor="start" x="2776.15" y="-478.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">传入的精确路径批次，在与提交共享的单次串行许可内分类源与派生路径、重读源目录并取得同次语义基准，一并交付派生路径及实际更新删除标识；派生目录事件保留目录范围供</text>
<text xml:space="preserve" text-anchor="start" x="3175.4" y="-460.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views 计算受影响产物。重读 IO</text>
<text xml:space="preserve" text-anchor="start" x="2963.69" y="-442.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">失败后由后续源事件或业务读取触发共享的完整重建，以最后成功发布的逻辑快照与重建结果计算实际变化并交</text>
<text xml:space="preserve" text-anchor="start" x="3254.58" y="-424.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host</text>
</g>
<!-- transaction -->
<g id="node6" class="node">
<title>transaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4784.14,-570.8 3893.86,-570.8 3893.86,-390.8 4784.14,-390.8 4784.14,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="4280.66" y="-510.8" font-family="Arial" font-size="20.00" fill="#eff6ff">提交与实际重读</text>
<text xml:space="preserve" text-anchor="start" x="4233.53" y="-487.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">接受 Editing 的唯一 EntityChange</text>
<text xml:space="preserve" text-anchor="start" x="4104.36" y="-469.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选；在实体串行边界核对文件、目录和固定输入的完整读取基准，经 Schematics</text>
<text xml:space="preserve" text-anchor="start" x="3913.92" y="-451.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">提交实际文件，再重读实际结果更新文件派生快照并交付更新删除标识。写入中途失败仍重读实际文件，保留写入与重读的错误事实；成功交付实际结果供</text>
<text xml:space="preserve" text-anchor="start" x="4302.74" y="-433.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 刷新。</text>
</g>
<!-- state -->
<g id="node7" class="node">
<title>state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3552.61,-228 2987.39,-228 2987.39,-48 3552.61,-48 3552.61,-228"/>
<text xml:space="preserve" text-anchor="start" x="3203.32" y="-159" font-family="Arial" font-size="20.00" fill="#eff6ff">文件派生实体快照</text>
<text xml:space="preserve" text-anchor="start" x="3020.79" y="-136" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；MST 持有文件派生快照和不可变逻辑快照，提供快照替换、读取及</text>
<text xml:space="preserve" text-anchor="start" x="3251.25" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">GUID</text>
<text xml:space="preserve" text-anchor="start" x="3007.45" y="-100" font-family="Arial" font-size="15.00" fill="#bfdbfe">身份查询。重读、语义装配、完整基准读取与派生文件发布由实体服务编排，不进入状态容器。</text>
</g>
<!-- refresh_2 -->
<g id="node8" class="node">
<title>refresh_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5473.69,-570.8 4894.31,-570.8 4894.31,-390.8 5473.69,-390.8 5473.69,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="5133.99" y="-519.8" font-family="Arial" font-size="20.00" fill="#eff6ff">唯一派生刷新</text>
<text xml:space="preserve" text-anchor="start" x="5168.58" y="-496.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host</text>
<text xml:space="preserve" text-anchor="start" x="4920.2" y="-478.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供完整实体基准、源更新删除、已登记派生产物的实际变化及各展示登记的实际依赖；Views</text>
<text xml:space="preserve" text-anchor="start" x="4914.36" y="-460.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">根据唯一源到视图关联计算影响并调用共享转换，按展示登记身份交付受影响和已删除结果。files</text>
<text xml:space="preserve" text-anchor="start" x="5003.12" y="-442.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 Canvas HTML 发布前交付具名视图给 Host，Host 以固定</text>
<text xml:space="preserve" text-anchor="start" x="4963.92" y="-424.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">1080×2160、时间 0 和组合根字体及后端调用 Preview，将同次 PNG 交回</text>
</g>
<!-- files -->
<g id="node9" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="945.61,-228 330.39,-228 330.39,-48 945.61,-48 945.61,-228"/>
<text xml:space="preserve" text-anchor="start" x="546.32" y="-168" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="350.44" y="-145" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="430.03" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="436.69" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="445.87" y="-91" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- invocations -->
<g id="node10" class="node">
<title>invocations</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.19,-228 1055.81,-228 1055.81,-48 1610.19,-48 1610.19,-228"/>
<text xml:space="preserve" text-anchor="start" x="1274.66" y="-159" font-family="Arial" font-size="20.00" fill="#eff6ff">调用记录与取消</text>
<text xml:space="preserve" text-anchor="start" x="1135.86" y="-136" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="1075.86" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生</text>
<text xml:space="preserve" text-anchor="start" x="1111.7" y="-100" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。</text>
</g>
<!-- lifecycle&#45;&gt;refresh -->
<g id="edge1" class="edge">
<title>lifecycle&#45;&gt;refresh</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1116,-1045.67C1116,-1004.47 1116,-955.36 1116,-912.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1118.63,-913.16 1116,-905.66 1113.38,-913.16 1118.63,-913.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1116,-962.8 1116,-985.6 1321.17,-985.6 1321.17,-962.8 1116,-962.8"/>
<text xml:space="preserve" text-anchor="start" x="1119" y="-968.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">启动工作区 Scope 内的单一监听消费</text>
</g>
<!-- lifecycle&#45;&gt;composition -->
<g id="edge2" class="edge">
<title>lifecycle&#45;&gt;composition</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M918.15,-1109.92C687.23,-1076.57 326.45,-1008.8 244.97,-902.8 60.43,-662.72 567.84,-551.99 884.1,-507.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="884.27,-510.12 891.34,-506.48 883.55,-504.92 884.27,-510.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="244.97,-801.4 244.97,-824.2 391,-824.2 391,-801.4 244.97,-801.4"/>
<text xml:space="preserve" text-anchor="start" x="247.97" y="-807.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">建立与释放同一工作区服务</text>
</g>
<!-- refresh&#45;&gt;composition -->
<g id="edge3" class="edge">
<title>refresh&#45;&gt;composition</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1116,-722.93C1116,-679.1 1116,-626.08 1116,-580.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1118.63,-581.07 1116,-573.57 1113.38,-581.07 1118.63,-581.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1116,-640 1116,-662.8 1250.36,-662.8 1250.36,-640 1116,-640"/>
<text xml:space="preserve" text-anchor="start" x="1119" y="-645.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取同一工作区共享实例</text>
</g>
<!-- refresh&#45;&gt;refresh_1 -->
<g id="edge4" class="edge">
<title>refresh&#45;&gt;refresh_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1785.81,-757.55C2069.51,-728.96 2402.79,-687.97 2701,-632 2784.47,-616.34 2873.72,-595.01 2956.2,-573.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2956.71,-575.93 2963.3,-571.48 2955.37,-570.85 2956.71,-575.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2616.53,-640 2616.53,-662.8 2750.89,-662.8 2750.89,-640 2616.53,-640"/>
<text xml:space="preserve" text-anchor="start" x="2619.53" y="-645.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">按实际目录批次重读文件</text>
</g>
<!-- refresh&#45;&gt;refresh_2 -->
<g id="edge5" class="edge">
<title>refresh&#45;&gt;refresh_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1786.05,-809.53C2700.16,-801.28 4288.73,-767.16 4851,-632 4904.55,-619.13 4960.09,-597.7 5010.11,-575.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5010.91,-577.53 5016.63,-572.02 5008.72,-572.76 5010.91,-577.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4800.02,-640 4800.02,-662.8 5107.07,-662.8 5107.07,-640 4800.02,-640"/>
<text xml:space="preserve" text-anchor="start" x="4803.02" y="-645.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">刷新端口复用实际视图及预览影响结果，执行保持 TODO</text>
</g>
<!-- composition&#45;&gt;files -->
<g id="edge6" class="edge">
<title>composition&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M935.07,-350.8C880.62,-311.98 821.89,-270.11 771.14,-233.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="772.9,-231.96 765.27,-229.74 769.85,-236.23 772.9,-231.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="565.84,-289.28 565.84,-312.08 848.78,-312.08 848.78,-289.28 565.84,-289.28"/>
<text xml:space="preserve" text-anchor="start" x="568.84" y="-295.08" font-family="Arial" font-size="14.00" fill="#c9c9c9">Host 装配并单一消费文件变化；工程业务 IO 归实体</text>
</g>
<!-- composition&#45;&gt;invocations -->
<g id="edge7" class="edge">
<title>composition&#45;&gt;invocations</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1198.14,-350.8C1222.28,-312.89 1248.28,-272.06 1270.94,-236.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1273.02,-238.09 1274.83,-230.35 1268.59,-235.27 1273.02,-238.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1009.41,-289.58 1009.41,-312.38 1237.12,-312.38 1237.12,-289.58 1009.41,-289.58"/>
<text xml:space="preserve" text-anchor="start" x="1012.41" y="-295.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">外部请求登记结果与取消；状态刷新只读取</text>
</g>
<!-- refresh_1&#45;&gt;state -->
<g id="edge8" class="edge">
<title>refresh_1&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3270,-391.15C3270,-344.29 3270,-286.63 3270,-238.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3272.63,-238.33 3270,-230.83 3267.38,-238.33 3272.63,-238.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3270,-288 3270,-310.8 3451.03,-310.8 3451.03,-288 3270,-288"/>
<text xml:space="preserve" text-anchor="start" x="3273" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">比较实际重读前后的逻辑实体事实</text>
</g>
<!-- transaction&#45;&gt;state -->
<g id="edge9" class="edge">
<title>transaction&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4063.68,-390.85C3990.67,-367.34 3911.87,-342.05 3839,-318.8 3749.1,-290.12 3651.14,-259.09 3562.24,-231.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3563.11,-228.53 3555.16,-228.78 3561.53,-233.54 3563.11,-228.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3808.4,-288 3808.4,-310.8 4047.78,-310.8 4047.78,-288 3808.4,-288"/>
<text xml:space="preserve" text-anchor="start" x="3811.4" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交收尾重读实际文件并更新快照或错误结果</text>
</g>
</g>
</svg>
`;case`read_flow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2769pt" height="1874pt"
 viewBox="0.00 0.00 2769.00 1874.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1859.45)">
<g id="clust1" class="cluster">
<title>cluster_conversion</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-969.6 8,-1573.6 1226,-1573.6 1226,-969.6 8,-969.6"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1560.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">仅缓存状态的转换服务</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_analysis</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1939,-8 1939,-273.2 2731,-273.2 2731,-8 1939,-8"/>
<text xml:space="preserve" text-anchor="start" x="1947" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">纯符号表与调用图</text>
</g>
<!-- ts -->
<g id="node1" class="node">
<title>ts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="550.35,-1512.4 47.65,-1512.4 47.65,-1332.4 550.35,-1332.4 550.35,-1512.4"/>
<text xml:space="preserve" text-anchor="start" x="205.65" y="-1443.4" font-family="Arial" font-size="20.00" fill="#eff6ff">零件与 TS 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="113.54" y="-1420.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context</text>
<text xml:space="preserve" text-anchor="start" x="96.02" y="-1402.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="67.7" y="-1384.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</text>
</g>
<!-- html -->
<g id="node2" class="node">
<title>html</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1185.61,-1512.4 660.39,-1512.4 660.39,-1332.4 1185.61,-1332.4 1185.61,-1512.4"/>
<text xml:space="preserve" text-anchor="start" x="775.74" y="-1461.4" font-family="Arial" font-size="20.00" fill="#eff6ff">独立 Canvas 与 HTML 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="740.85" y="-1438.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立</text>
<text xml:space="preserve" text-anchor="start" x="680.45" y="-1420.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML</text>
<text xml:space="preserve" text-anchor="start" x="727.96" y="-1402.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views</text>
<text xml:space="preserve" text-anchor="start" x="704.2" y="-1384.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由</text>
<text xml:space="preserve" text-anchor="start" x="829.63" y="-1366.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Preview/Renderer 独立交付。</text>
</g>
<!-- canvas -->
<g id="node3" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1140.19,-1189.6 705.81,-1189.6 705.81,-1009.6 1140.19,-1009.6 1140.19,-1189.6"/>
<text xml:space="preserve" text-anchor="start" x="795.19" y="-1120.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 与 HTML 片段双向转换</text>
<text xml:space="preserve" text-anchor="start" x="790.87" y="-1097.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 实体、Base64 与 Hjson 和 HTML</text>
<text xml:space="preserve" text-anchor="start" x="725.86" y="-1079.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区</text>
<text xml:space="preserve" text-anchor="start" x="801.71" y="-1061.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope，按方向、输入和实际资源指纹失效</text>
</g>
<!-- logic -->
<g id="node4" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2698.87,-220 1971.13,-220 1971.13,-40 2698.87,-40 2698.87,-220"/>
<text xml:space="preserve" text-anchor="start" x="2293.33" y="-151" font-family="Arial" font-size="20.00" fill="#eff6ff">纯分析计算</text>
<text xml:space="preserve" text-anchor="start" x="2241.64" y="-128" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费实体快照、第一层 LocalAst</text>
<text xml:space="preserve" text-anchor="start" x="1991.18" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的</text>
<text xml:space="preserve" text-anchor="start" x="2217.48" y="-92" font-family="Arial" font-size="15.00" fill="#bfdbfe">SDK 文档准备，不读取文件、不持有状态</text>
</g>
<!-- view_service -->
<g id="node5" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1616.28,-1844.4 907.72,-1844.4 907.72,-1664.4 1616.28,-1664.4 1616.28,-1844.4"/>
<text xml:space="preserve" text-anchor="start" x="1170.32" y="-1784.4" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="1066.55" y="-1761.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="1096.55" y="-1743.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="1147.4" y="-1725.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="927.77" y="-1707.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- entities -->
<g id="node6" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1651.13,-866.8 1100.87,-866.8 1100.87,-686.8 1651.13,-686.8 1651.13,-866.8"/>
<text xml:space="preserve" text-anchor="start" x="1309.32" y="-815.8" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="1180.97" y="-792.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="1170.96" y="-774.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="1120.93" y="-756.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="1240.56" y="-738.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="1335.15" y="-720.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- language -->
<g id="node7" class="node">
<title>language</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2653.67,-1512.4 1598.33,-1512.4 1598.33,-1332.4 2653.67,-1332.4 2653.67,-1512.4"/>
<text xml:space="preserve" text-anchor="start" x="2075.99" y="-1443.4" font-family="Arial" font-size="20.00" fill="#eff6ff">语言查询业务</text>
<text xml:space="preserve" text-anchor="start" x="1638.4" y="-1420.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">输入工程相对文档标识、文本版本、完整基准与取消信号，按查询种类接收位置或文档范围；读取同次实体、分析和诊断，交付定义、引用、悬停、诊断、文档链接、符号及语义</text>
<text xml:space="preserve" text-anchor="start" x="1618.38" y="-1402.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">token。文档来源与方法绑定分别确定；共享源码查询保留全部实际引用作用域，零件视图使用对应绑定。结果携带文档版本和实际依赖，源定位与生成视图坐标按真实映射交付；LSP</text>
<text xml:space="preserve" text-anchor="start" x="1913.46" y="-1384.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">接入层只转换标准消息。实体层拥有工程状态，查询结果不产生第二状态树。</text>
</g>
<!-- diagnostics -->
<g id="node8" class="node">
<title>diagnostics</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2422.27,-1189.6 1943.73,-1189.6 1943.73,-1009.6 2422.27,-1009.6 2422.27,-1189.6"/>
<text xml:space="preserve" text-anchor="start" x="2149.66" y="-1102.6" font-family="Arial" font-size="20.00" fill="#eff6ff">诊断业务</text>
<text xml:space="preserve" text-anchor="start" x="1963.79" y="-1079.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架</text>
</g>
<!-- lint -->
<g id="node9" class="node">
<title>lint</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2540.62,-866.8 1825.38,-866.8 1825.38,-686.8 2540.62,-686.8 2540.62,-866.8"/>
<text xml:space="preserve" text-anchor="start" x="2107.99" y="-797.8" font-family="Arial" font-size="20.00" fill="#eff6ff">脚本静态检查纯计算</text>
<text xml:space="preserve" text-anchor="start" x="1991.7" y="-774.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整</text>
<text xml:space="preserve" text-anchor="start" x="2105.04" y="-756.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Context，CallGraphLint</text>
<text xml:space="preserve" text-anchor="start" x="1845.43" y="-738.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。</text>
</g>
<!-- files -->
<g id="node10" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1514.61,-544 899.39,-544 899.39,-364 1514.61,-364 1514.61,-544"/>
<text xml:space="preserve" text-anchor="start" x="1115.32" y="-484" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="919.44" y="-461" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="999.03" y="-443" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="1005.69" y="-425" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="1014.87" y="-407" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- semantic -->
<g id="node11" class="node">
<title>semantic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2115.1,-544 1624.9,-544 1624.9,-364 2115.1,-364 2115.1,-544"/>
<text xml:space="preserve" text-anchor="start" x="1803.32" y="-493" font-family="Arial" font-size="20.00" fill="#eff6ff">语义装配（设计）</text>
<text xml:space="preserve" text-anchor="start" x="1661.2" y="-470" font-family="Arial" font-size="15.00" fill="#bfdbfe">由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON</text>
<text xml:space="preserve" text-anchor="start" x="1718.71" y="-452" font-family="Arial" font-size="15.00" fill="#bfdbfe">合同导入导出平台数据与文档，SemanticAssembly</text>
<text xml:space="preserve" text-anchor="start" x="1648.28" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context</text>
<text xml:space="preserve" text-anchor="start" x="1762.89" y="-416" font-family="Arial" font-size="15.00" fill="#bfdbfe">和转换依据。复用既有身份、Context</text>
<text xml:space="preserve" text-anchor="start" x="1644.96" y="-398" font-family="Arial" font-size="15.00" fill="#bfdbfe">及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行</text>
</g>
<!-- ts&#45;&gt;canvas -->
<g id="edge9" class="edge">
<title>ts&#45;&gt;canvas</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M471.99,-1332.47C555.6,-1289.48 655.95,-1237.89 740.74,-1194.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="741.78,-1196.72 747.25,-1190.95 739.38,-1192.05 741.78,-1196.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="629.71,-1249.6 629.71,-1272.4 760.97,-1272.4 760.97,-1249.6 629.71,-1249.6"/>
<text xml:space="preserve" text-anchor="start" x="632.71" y="-1255.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">内部 Canvas 双向转换</text>
</g>
<!-- ts&#45;&gt;entities -->
<g id="edge10" class="edge">
<title>ts&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M160.24,-1332.58C113.61,-1294.73 67.08,-1246.16 41.92,-1189.6 2.19,-1100.26 -22.11,-1043.5 41.92,-969.6 109.62,-891.47 719.59,-829.81 1090.89,-799.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1090.98,-801.74 1098.24,-798.51 1090.55,-796.51 1090.98,-801.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="41.92,-1088.2 41.92,-1111 433,-1111 433,-1088.2 41.92,-1088.2"/>
<text xml:space="preserve" text-anchor="start" x="44.92" y="-1094" font-family="Arial" font-size="14.00" fill="#c9c9c9">转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付</text>
</g>
<!-- html&#45;&gt;canvas -->
<g id="edge11" class="edge">
<title>html&#45;&gt;canvas</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M923,-1332.47C923,-1291.27 923,-1242.16 923,-1199.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="925.63,-1199.96 923,-1192.46 920.38,-1199.96 925.63,-1199.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="923,-1249.6 923,-1272.4 1069.03,-1272.4 1069.03,-1249.6 923,-1249.6"/>
<text xml:space="preserve" text-anchor="start" x="926" y="-1255.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享片段服务的工作区装配</text>
</g>
<!-- html&#45;&gt;entities -->
<g id="edge12" class="edge">
<title>html&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M660.66,-1333.21C626.68,-1315.9 593.76,-1295.72 565,-1272.4 458.65,-1186.14 422.32,-1076.37 508.07,-969.6 580.61,-879.28 866.56,-828.94 1090.67,-802.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1090.81,-805.36 1097.96,-801.89 1090.2,-800.15 1090.81,-805.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="508.07,-1088.2 508.07,-1111 651,-1111 651,-1088.2 508.07,-1088.2"/>
<text xml:space="preserve" text-anchor="start" x="511.07" y="-1094" font-family="Arial" font-size="14.00" fill="#c9c9c9">独立 Canvas 与视图实体</text>
</g>
<!-- canvas&#45;&gt;entities -->
<g id="edge14" class="edge">
<title>canvas&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1048.58,-1009.67C1108.73,-967.07 1180.81,-916.03 1242,-872.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1243.49,-874.86 1248.09,-868.38 1240.46,-870.57 1243.49,-874.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1163.08,-926.8 1163.08,-949.6 1274.1,-949.6 1274.1,-926.8 1163.08,-926.8"/>
<text xml:space="preserve" text-anchor="start" x="1166.08" y="-932.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">实体输入与资源依赖</text>
</g>
<!-- view_service&#45;&gt;ts -->
<g id="edge1" class="edge">
<title>view_service&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M907.72,-1669.62C808.54,-1642.62 701.5,-1610.11 605,-1573.6 562.03,-1557.34 516.99,-1537.13 475.07,-1516.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="476.23,-1514.51 468.34,-1513.59 473.94,-1519.23 476.23,-1514.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="674.46,-1581.6 674.46,-1604.4 832.16,-1604.4 832.16,-1581.6 674.46,-1581.6"/>
<text xml:space="preserve" text-anchor="start" x="677.46" y="-1587.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图唯一驱动转换与缓存释放</text>
</g>
<!-- view_service&#45;&gt;html -->
<g id="edge2" class="edge">
<title>view_service&#45;&gt;html</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1170.71,-1664.53C1124.64,-1619.68 1068.69,-1565.22 1021.63,-1519.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1023.53,-1517.6 1016.33,-1514.25 1019.87,-1521.36 1023.53,-1517.6"/>
</g>
<!-- view_service&#45;&gt;entities -->
<g id="edge3" class="edge">
<title>view_service&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1272.37,-1664.67C1293.66,-1482.48 1342.16,-1067.37 1364.43,-876.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1367.02,-877.26 1365.28,-869.51 1361.81,-876.65 1367.02,-877.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1320.32,-1249.6 1320.32,-1272.4 1559.69,-1272.4 1559.69,-1249.6 1320.32,-1249.6"/>
<text xml:space="preserve" text-anchor="start" x="1323.32" y="-1255.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图主动读取实体；派生结果经实体入口交付</text>
</g>
<!-- entities&#45;&gt;files -->
<g id="edge15" class="edge">
<title>entities&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1329.15,-686.87C1307.26,-645.32 1281.14,-595.73 1258.68,-553.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1261.03,-551.92 1255.21,-546.51 1256.38,-554.37 1261.03,-551.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1296.57,-604 1296.57,-626.8 1554.62,-626.8 1554.62,-604 1296.57,-604"/>
<text xml:space="preserve" text-anchor="start" x="1299.57" y="-609.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">实体层唯一业务 IO；读取与提交分别授权到文件</text>
</g>
<!-- entities&#45;&gt;semantic -->
<g id="edge16" class="edge">
<title>entities&#45;&gt;semantic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1512.95,-686.87C1578.81,-644.1 1657.78,-592.81 1724.69,-549.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1725.81,-551.76 1730.67,-545.48 1722.95,-547.36 1725.81,-551.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1637.81,-604 1637.81,-626.8 1713.83,-626.8 1713.83,-604 1637.81,-604"/>
<text xml:space="preserve" text-anchor="start" x="1640.81" y="-609.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">快照语义装配</text>
</g>
<!-- language&#45;&gt;entities -->
<g id="edge5" class="edge">
<title>language&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1946.89,-1332.57C1876.28,-1293.48 1796.61,-1244.05 1731.3,-1189.6 1618.42,-1095.49 1511.47,-963.6 1444.96,-874.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1447.24,-873.32 1440.66,-868.88 1443.03,-876.46 1447.24,-873.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1731.3,-1088.2 1731.3,-1111 1889,-1111 1889,-1088.2 1731.3,-1088.2"/>
<text xml:space="preserve" text-anchor="start" x="1734.3" y="-1094" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享实体服务与完整读取基准</text>
</g>
<!-- language&#45;&gt;diagnostics -->
<g id="edge4" class="edge">
<title>language&#45;&gt;diagnostics</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2141.8,-1332.47C2149.12,-1291.27 2157.85,-1242.16 2165.38,-1199.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2167.96,-1200.25 2166.69,-1192.41 2162.79,-1199.34 2167.96,-1200.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2156.21,-1249.6 2156.21,-1272.4 2313.91,-1272.4 2313.91,-1249.6 2156.21,-1249.6"/>
<text xml:space="preserve" text-anchor="start" x="2159.21" y="-1255.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享诊断服务和唯一结果类型</text>
</g>
<!-- diagnostics&#45;&gt;logic -->
<g id="edge8" class="edge">
<title>diagnostics&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2422.11,-1018.16C2490.37,-982.86 2556.79,-933.76 2596,-866.8 2720.26,-654.57 2537.26,-373.55 2420.13,-227.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2422.23,-226.28 2415.47,-222.11 2418.15,-229.59 2422.23,-226.28"/>
</g>
<!-- diagnostics&#45;&gt;entities -->
<g id="edge7" class="edge">
<title>diagnostics&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1965.08,-1009.62C1898.97,-982.81 1826.08,-953.44 1759,-926.8 1712.78,-908.45 1663.34,-889.04 1615.86,-870.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1616.83,-868.08 1608.89,-867.81 1614.93,-872.98 1616.83,-868.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1805.09,-926.8 1805.09,-949.6 1927.78,-949.6 1927.78,-926.8 1805.09,-926.8"/>
<text xml:space="preserve" text-anchor="start" x="1808.09" y="-932.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">诊断主动读取实体快照</text>
</g>
<!-- diagnostics&#45;&gt;lint -->
<g id="edge6" class="edge">
<title>diagnostics&#45;&gt;lint</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2183,-1009.67C2183,-968.47 2183,-919.36 2183,-876.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2185.63,-877.16 2183,-869.66 2180.38,-877.16 2185.63,-877.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2183,-926.8 2183,-949.6 2393.61,-949.6 2393.61,-926.8 2183,-926.8"/>
<text xml:space="preserve" text-anchor="start" x="2186" y="-932.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">调用纯检查，诊断状态归 Diagnostics</text>
</g>
<!-- lint&#45;&gt;logic -->
<g id="edge13" class="edge">
<title>lint&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2203.98,-686.82C2232.22,-566.99 2282.33,-354.43 2311.72,-229.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2314.2,-230.69 2313.36,-222.79 2309.09,-229.49 2314.2,-230.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2279.05,-442.6 2279.05,-465.4 2331.73,-465.4 2331.73,-442.6 2279.05,-442.6"/>
<text xml:space="preserve" text-anchor="start" x="2282.05" y="-448.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">分析结果</text>
</g>
<!-- semantic&#45;&gt;logic -->
<g id="edge17" class="edge">
<title>semantic&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1998.29,-364.16C2060.43,-321.14 2135.07,-269.44 2198.28,-225.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2199.56,-227.98 2204.23,-221.55 2196.57,-223.66 2199.56,-227.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2116.44,-281.2 2116.44,-304 2204.13,-304 2204.13,-281.2 2116.44,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="2119.44" y="-287" font-family="Arial" font-size="14.00" fill="#c9c9c9">符号表与调用图</text>
</g>
</g>
</svg>
`;case`write_flow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="6072pt" height="934pt"
 viewBox="0.00 0.00 6072.00 934.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 919.05)">
<g id="clust1" class="cluster">
<title>cluster_entities</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-896 2966,-896 2966,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-883.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">第二层：工程实体</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_conversion</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3656,-282.8 3656,-564 4874,-564 4874,-282.8 3656,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="3664" y="-551.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">仅缓存状态的转换服务</text>
</g>
<!-- assembly -->
<g id="node1" class="node">
<title>assembly</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2926.12,-834.8 2185.88,-834.8 2185.88,-654.8 2926.12,-654.8 2926.12,-834.8"/>
<text xml:space="preserve" text-anchor="start" x="2464.32" y="-756.8" font-family="Arial" font-size="20.00" fill="#eff6ff">逻辑来源与单次归属装配</text>
<text xml:space="preserve" text-anchor="start" x="2370.1" y="-733.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">LogicalEntitySources 按格式声明读取来源；EntityAssembly</text>
<text xml:space="preserve" text-anchor="start" x="2205.93" y="-715.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">私有拥有同次实体、诊断和归属集合，通过实体目录声明登记父级并生成最终快照，查询仅交付只读集合，不跨快照保留状态。</text>
</g>
<!-- refresh -->
<g id="node2" class="node">
<title>refresh</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1075.9,-834.8 48.1,-834.8 48.1,-654.8 1075.9,-654.8 1075.9,-834.8"/>
<text xml:space="preserve" text-anchor="start" x="486.99" y="-783.8" font-family="Arial" font-size="20.00" fill="#eff6ff">显式重读与基准交付</text>
<text xml:space="preserve" text-anchor="start" x="531.99" y="-760.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">接受 Host</text>
<text xml:space="preserve" text-anchor="start" x="68.15" y="-742.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">传入的精确路径批次，在与提交共享的单次串行许可内分类源与派生路径、重读源目录并取得同次语义基准，一并交付派生路径及实际更新删除标识；派生目录事件保留目录范围供</text>
<text xml:space="preserve" text-anchor="start" x="467.4" y="-724.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views 计算受影响产物。重读 IO</text>
<text xml:space="preserve" text-anchor="start" x="255.69" y="-706.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">失败后由后续源事件或业务读取触发共享的完整重建，以最后成功发布的逻辑快照与重建结果计算实际变化并交</text>
<text xml:space="preserve" text-anchor="start" x="546.58" y="-688.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host</text>
</g>
<!-- transaction -->
<g id="node3" class="node">
<title>transaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2076.14,-834.8 1185.86,-834.8 1185.86,-654.8 2076.14,-654.8 2076.14,-834.8"/>
<text xml:space="preserve" text-anchor="start" x="1572.66" y="-774.8" font-family="Arial" font-size="20.00" fill="#eff6ff">提交与实际重读</text>
<text xml:space="preserve" text-anchor="start" x="1525.53" y="-751.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">接受 Editing 的唯一 EntityChange</text>
<text xml:space="preserve" text-anchor="start" x="1396.36" y="-733.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选；在实体串行边界核对文件、目录和固定输入的完整读取基准，经 Schematics</text>
<text xml:space="preserve" text-anchor="start" x="1205.92" y="-715.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">提交实际文件，再重读实际结果更新文件派生快照并交付更新删除标识。写入中途失败仍重读实际文件，保留写入与重读的错误事实；成功交付实际结果供</text>
<text xml:space="preserve" text-anchor="start" x="1594.74" y="-697.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 刷新。</text>
</g>
<!-- state -->
<g id="node4" class="node">
<title>state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1572.61,-502.8 1007.39,-502.8 1007.39,-322.8 1572.61,-322.8 1572.61,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1223.32" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">文件派生实体快照</text>
<text xml:space="preserve" text-anchor="start" x="1040.79" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；MST 持有文件派生快照和不可变逻辑快照，提供快照替换、读取及</text>
<text xml:space="preserve" text-anchor="start" x="1271.25" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">GUID</text>
<text xml:space="preserve" text-anchor="start" x="1027.45" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">身份查询。重读、语义装配、完整基准读取与派生文件发布由实体服务编排，不进入状态容器。</text>
</g>
<!-- ts -->
<g id="node5" class="node">
<title>ts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4198.35,-502.8 3695.65,-502.8 3695.65,-322.8 4198.35,-322.8 4198.35,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="3853.65" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">零件与 TS 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="3761.54" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context</text>
<text xml:space="preserve" text-anchor="start" x="3744.02" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="3715.7" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</text>
</g>
<!-- html -->
<g id="node6" class="node">
<title>html</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4833.61,-502.8 4308.39,-502.8 4308.39,-322.8 4833.61,-322.8 4833.61,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="4423.74" y="-451.8" font-family="Arial" font-size="20.00" fill="#eff6ff">独立 Canvas 与 HTML 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="4388.85" y="-428.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立</text>
<text xml:space="preserve" text-anchor="start" x="4328.45" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML</text>
<text xml:space="preserve" text-anchor="start" x="4375.96" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views</text>
<text xml:space="preserve" text-anchor="start" x="4352.2" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由</text>
<text xml:space="preserve" text-anchor="start" x="4477.63" y="-356.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Preview/Renderer 独立交付。</text>
</g>
<!-- editing -->
<g id="node7" class="node">
<title>editing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4844.46,-834.8 4297.54,-834.8 4297.54,-654.8 4844.46,-654.8 4844.46,-834.8"/>
<text xml:space="preserve" text-anchor="start" x="4537.66" y="-774.8" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑业务</text>
<text xml:space="preserve" text-anchor="start" x="4317.6" y="-751.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change</text>
<text xml:space="preserve" text-anchor="start" x="4440.94" y="-733.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plan 形成统一 EntityChange/Schematics</text>
<text xml:space="preserve" text-anchor="start" x="4370.13" y="-715.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用</text>
<text xml:space="preserve" text-anchor="start" x="4466.82" y="-697.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views。TODO：编辑与重构编排。</text>
</g>
<!-- change_plan -->
<g id="node8" class="node">
<title>change_plan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6042.34,-502.8 4943.66,-502.8 4943.66,-322.8 6042.34,-322.8 6042.34,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="5434.66" y="-451.8" font-family="Arial" font-size="20.00" fill="#eff6ff">变更计划纯计算</text>
<text xml:space="preserve" text-anchor="start" x="5390.47" y="-428.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图编辑、重命名、脚本与 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="4963.72" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing</text>
<text xml:space="preserve" text-anchor="start" x="5383.38" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用 Entities 物化内存候选，Entities</text>
<text xml:space="preserve" text-anchor="start" x="5370.05" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">从候选及未改变依赖准备语义输入，Editing</text>
<text xml:space="preserve" text-anchor="start" x="5243.36" y="-356.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</text>
</g>
<!-- logic -->
<g id="node9" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5856.87,-180 5129.13,-180 5129.13,0 5856.87,0 5856.87,-180"/>
<text xml:space="preserve" text-anchor="start" x="5451.33" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">纯分析计算</text>
<text xml:space="preserve" text-anchor="start" x="5399.64" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费实体快照、第一层 LocalAst</text>
<text xml:space="preserve" text-anchor="start" x="5149.18" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">及显式平台核心类型、方法签名和回调规则，生成零件级符号表、调用边与未解析诊断；平台数据由实体读取时从宿主提供的</text>
<text xml:space="preserve" text-anchor="start" x="5375.48" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">SDK 文档准备，不读取文件、不持有状态</text>
</g>
<!-- refresh_1 -->
<g id="node10" class="node">
<title>refresh_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3585.69,-502.8 3006.31,-502.8 3006.31,-322.8 3585.69,-322.8 3585.69,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="3245.99" y="-451.8" font-family="Arial" font-size="20.00" fill="#eff6ff">唯一派生刷新</text>
<text xml:space="preserve" text-anchor="start" x="3280.58" y="-428.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host</text>
<text xml:space="preserve" text-anchor="start" x="3032.2" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供完整实体基准、源更新删除、已登记派生产物的实际变化及各展示登记的实际依赖；Views</text>
<text xml:space="preserve" text-anchor="start" x="3026.36" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">根据唯一源到视图关联计算影响并调用共享转换，按展示登记身份交付受影响和已删除结果。files</text>
<text xml:space="preserve" text-anchor="start" x="3115.12" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 Canvas HTML 发布前交付具名视图给 Host，Host 以固定</text>
<text xml:space="preserve" text-anchor="start" x="3075.92" y="-356.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">1080×2160、时间 0 和组合根字体及后端调用 Preview，将同次 PNG 交回</text>
</g>
<!-- files -->
<g id="node11" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1597.61,-180 982.39,-180 982.39,0 1597.61,0 1597.61,-180"/>
<text xml:space="preserve" text-anchor="start" x="1198.32" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="1002.44" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="1082.03" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="1088.69" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="1097.87" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- assembly&#45;&gt;refresh_1 -->
<!-- refresh&#45;&gt;state -->
<g id="edge6" class="edge">
<title>refresh&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M758.05,-654.93C859.02,-609.16 982.08,-553.38 1084.4,-507"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1085.41,-509.42 1091.16,-503.93 1083.25,-504.64 1085.41,-509.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="926,-572 926,-594.8 1107.03,-594.8 1107.03,-572 926,-572"/>
<text xml:space="preserve" text-anchor="start" x="929" y="-577.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">比较实际重读前后的逻辑实体事实</text>
</g>
<!-- transaction&#45;&gt;state -->
<g id="edge7" class="edge">
<title>transaction&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1539.17,-654.93C1492.83,-610.08 1436.55,-555.62 1389.22,-509.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1391.09,-507.97 1383.87,-504.65 1387.44,-511.75 1391.09,-507.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1470.72,-572 1470.72,-594.8 1710.1,-594.8 1710.1,-572 1470.72,-572"/>
<text xml:space="preserve" text-anchor="start" x="1473.72" y="-577.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交收尾重读实际文件并更新快照或错误结果</text>
</g>
<!-- state&#45;&gt;files -->
<g id="edge8" class="edge">
<title>state&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1290,-282.8C1290,-251.93 1290,-219.45 1290,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1292.63,-190.36 1290,-182.86 1287.38,-190.36 1292.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1031.95,-231.13 1031.95,-253.93 1290,-253.93 1290,-231.13 1031.95,-231.13"/>
<text xml:space="preserve" text-anchor="start" x="1034.95" y="-236.93" font-family="Arial" font-size="14.00" fill="#c9c9c9">实体层唯一业务 IO；读取与提交分别授权到文件</text>
</g>
<!-- editing&#45;&gt;ts -->
<g id="edge2" class="edge">
<title>editing&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4402.96,-654.93C4316.76,-609.35 4211.78,-553.83 4124.29,-507.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4125.6,-505.28 4117.75,-504.1 4123.15,-509.93 4125.6,-505.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4277.71,-572 4277.71,-594.8 4353.72,-594.8 4353.72,-572 4277.71,-572"/>
<text xml:space="preserve" text-anchor="start" x="4280.71" y="-577.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图反向转换</text>
</g>
<!-- editing&#45;&gt;html -->
<g id="edge3" class="edge">
<title>editing&#45;&gt;html</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4571,-654.93C4571,-611.1 4571,-558.08 4571,-512.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4573.63,-513.07 4571,-505.57 4568.38,-513.07 4573.63,-513.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4571,-572 4571,-594.8 4702.26,-594.8 4702.26,-572 4571,-572"/>
<text xml:space="preserve" text-anchor="start" x="4574" y="-577.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">独立 Canvas 反向转换</text>
</g>
<!-- editing&#45;&gt;change_plan -->
<g id="edge1" class="edge">
<title>editing&#45;&gt;change_plan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4819.6,-654.82C4948.12,-608.82 5104.83,-552.73 5234.72,-506.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5235.4,-508.79 5241.57,-503.79 5233.63,-503.85 5235.4,-508.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5032,-572 5032,-594.8 5143.02,-594.8 5143.02,-572 5032,-572"/>
<text xml:space="preserve" text-anchor="start" x="5035" y="-577.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">统一变更计划与候选</text>
</g>
<!-- change_plan&#45;&gt;logic -->
<g id="edge4" class="edge">
<title>change_plan&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5493,-322.87C5493,-281.67 5493,-232.56 5493,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5495.63,-190.36 5493,-182.86 5490.38,-190.36 5495.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5493,-240 5493,-262.8 5604.02,-262.8 5604.02,-240 5493,-240"/>
<text xml:space="preserve" text-anchor="start" x="5496" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">只读符号表与调用图</text>
</g>
</g>
</svg>
`;case`preview_flow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1261pt" height="1158pt"
 viewBox="0.00 0.00 1261.00 1158.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1142.85)">
<g id="clust1" class="cluster">
<title>cluster_host</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="441.85,-613.6 441.85,-878.8 1001.85,-878.8 1001.85,-613.6 441.85,-613.6"/>
<text xml:space="preserve" text-anchor="start" x="449.85" y="-865.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">工作区 HOST</text>
</g>
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="970.3,-825.6 473.41,-825.6 473.41,-645.6 970.3,-645.6 970.3,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="631.84" y="-756.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="543.45" y="-733.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="493.46" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="604.33" y="-697.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- plugin -->
<g id="node2" class="node">
<title>plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="970.73,-1127.8 472.98,-1127.8 472.98,-947.8 970.73,-947.8 970.73,-1127.8"/>
<text xml:space="preserve" text-anchor="start" x="600.7" y="-1076.8" font-family="Arial" font-size="20.00" fill="#eff6ff">VSCode 宿主与 Effect 组合根</text>
<text xml:space="preserve" text-anchor="start" x="610.99" y="-1053.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">绑定原生配置、webview 与同一 Host</text>
<text xml:space="preserve" text-anchor="start" x="552.65" y="-1035.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">生命周期；组件经具名入口获取和关闭，调用方以 try/finally</text>
<text xml:space="preserve" text-anchor="start" x="493.04" y="-1017.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas</text>
<text xml:space="preserve" text-anchor="start" x="525.55" y="-999.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示</text>
<text xml:space="preserve" text-anchor="start" x="535.98" y="-981.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。</text>
</g>
<!-- preview -->
<g id="node3" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="712.37,-502.8 231.34,-502.8 231.34,-322.8 712.37,-322.8 712.37,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="401.83" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 预览业务</text>
<text xml:space="preserve" text-anchor="start" x="251.4" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU</text>
<text xml:space="preserve" text-anchor="start" x="268.89" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG</text>
<text xml:space="preserve" text-anchor="start" x="253.06" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</text>
</g>
<!-- entities -->
<g id="node4" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1207.98,-180 657.73,-180 657.73,0 1207.98,0 1207.98,-180"/>
<text xml:space="preserve" text-anchor="start" x="866.18" y="-129" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="737.83" y="-106" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="727.81" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="677.78" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="797.41" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="892.01" y="-34" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- renderer -->
<g id="node5" class="node">
<title>renderer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="547.71,-180 0,-180 0,0 547.71,0 547.71,-180"/>
<text xml:space="preserve" text-anchor="start" x="179.94" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas CPU 渲染引擎</text>
<text xml:space="preserve" text-anchor="start" x="255.1" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">结构化</text>
<text xml:space="preserve" text-anchor="start" x="36.29" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument、viewport、资源字节与调色板、固定字体、显式时间输入，经</text>
<text xml:space="preserve" text-anchor="start" x="163.82" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasKit/Skia CPU surface 输出</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG、尺寸、资源指纹与诊断。渲染会话拥有临时布局与图形资源；调用方提供完整输入。</text>
</g>
<!-- logic&#45;&gt;preview -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M581.88,-645.82C560.91,-627.87 541.16,-607.65 525.67,-585.6 510.44,-563.92 499.4,-537.77 491.44,-512.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="493.97,-511.8 489.3,-505.37 488.95,-513.31 493.97,-511.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="525.67,-562.8 525.67,-585.6 849.85,-585.6 849.85,-562.8 525.67,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="528.67" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令</text>
</g>
<!-- logic&#45;&gt;entities -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M830.6,-645.84C847.15,-627.58 862.22,-607.25 872.85,-585.6 934.77,-459.49 942.27,-294.31 939.48,-190.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="942.11,-190.35 939.26,-182.94 936.86,-190.51 942.11,-190.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="936.13,-401.4 936.13,-424.2 1230.76,-424.2 1230.76,-401.4 936.13,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="939.13" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Host 主动重读实体；WorkspaceServices 读取状态</text>
</g>
<!-- plugin&#45;&gt;logic -->
<g id="edge1" class="edge">
<title>plugin&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M721.85,-947.95C721.85,-912.63 721.85,-871.84 721.85,-835.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="724.48,-836.01 721.85,-828.51 719.23,-836.01 724.48,-836.01"/>
</g>
<!-- preview&#45;&gt;entities -->
<g id="edge4" class="edge">
<title>preview&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M599.66,-322.87C660.99,-280.19 734.51,-229.02 796.87,-185.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="798.06,-188 802.72,-181.56 795.06,-183.69 798.06,-188"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="716.18,-240 716.18,-262.8 815.53,-262.8 815.53,-240 716.18,-240"/>
<text xml:space="preserve" text-anchor="start" x="719.18" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">预览只读实体资源</text>
</g>
<!-- preview&#45;&gt;renderer -->
<g id="edge5" class="edge">
<title>preview&#45;&gt;renderer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M416.96,-322.87C391.21,-281.14 360.46,-231.31 334.07,-188.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="336.44,-187.41 330.27,-182.41 331.98,-190.17 336.44,-187.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="378.79,-240 378.79,-262.8 478.14,-262.8 478.14,-240 378.79,-240"/>
<text xml:space="preserve" text-anchor="start" x="381.79" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">复用唯一渲染引擎</text>
</g>
</g>
</svg>
`;case`bescript_first_layer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1233pt" height="1171pt"
 viewBox="0.00 0.00 1233.00 1171.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1156.25)">
<g id="clust1" class="cluster">
<title>cluster_conversion</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="169,-868 169,-1133.2 749,-1133.2 749,-868 169,-868"/>
<text xml:space="preserve" text-anchor="start" x="177" y="-1120.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">三层纯转换设计</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_ast</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="593,-568 593,-833.2 1047,-833.2 1047,-568 593,-568"/>
<text xml:space="preserve" text-anchor="start" x="601" y="-820.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">局部 AST 层</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_text</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-260 8,-541.2 996,-541.2 996,-260 8,-260"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-528.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">原版文本层</text>
</g>
<!-- first -->
<g id="node1" class="node">
<title>first</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="716.6,-1080 201.4,-1080 201.4,-900 716.6,-900 716.6,-1080"/>
<text xml:space="preserve" text-anchor="start" x="333.97" y="-1011" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 文本与局部 AST 转换</text>
<text xml:space="preserve" text-anchor="start" x="430.65" y="-988" font-family="Arial" font-size="15.00" fill="#bfdbfe">Issue 45</text>
<text xml:space="preserve" text-anchor="start" x="221.45" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">的实现归属：唯一正文词法、控制结构、调用与反向序列化入口；依赖文本合同和局部</text>
<text xml:space="preserve" text-anchor="start" x="401.9" y="-952" font-family="Arial" font-size="15.00" fill="#bfdbfe">AST，不依赖 Host</text>
</g>
<!-- local_ast -->
<g id="node2" class="node">
<title>local_ast</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1015.09,-780 624.91,-780 624.91,-600 1015.09,-600 1015.09,-780"/>
<text xml:space="preserve" text-anchor="start" x="781.1" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">局部 AST</text>
<text xml:space="preserve" text-anchor="start" x="644.97" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。</text>
</g>
<!-- code_file -->
<g id="node3" class="node">
<title>code_file</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="425.84,-480 48.16,-480 48.16,-300 425.84,-300 425.84,-480"/>
<text xml:space="preserve" text-anchor="start" x="193.09" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">.code 文件</text>
<text xml:space="preserve" text-anchor="start" x="68.22" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">解析文件版本、头部与原始正文；正文语义交由第一层转换。</text>
</g>
<!-- vocabulary -->
<g id="node4" class="node">
<title>vocabulary</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="955.68,-480 536.32,-480 536.32,-300 955.68,-300 955.68,-480"/>
<text xml:space="preserve" text-anchor="start" x="704.33" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">类型与转义</text>
<text xml:space="preserve" text-anchor="start" x="556.38" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">定义 BEScript 词汇类型与有限转义；不解析控制结构或读取工程。</text>
</g>
<!-- bescript -->
<g id="node5" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1141.59,-180 726.41,-180 726.41,0 1141.59,0 1141.59,-180"/>
<text xml:space="preserve" text-anchor="start" x="858.98" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
<text xml:space="preserve" text-anchor="start" x="746.46" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。</text>
</g>
<!-- first&#45;&gt;local_ast -->
<g id="edge1" class="edge">
<title>first&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M566.33,-900.4C609.86,-864.47 660.22,-822.9 704.54,-786.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="706.01,-788.5 710.12,-781.7 702.67,-784.45 706.01,-788.5"/>
</g>
<!-- first&#45;&gt;code_file -->
<g id="edge2" class="edge">
<title>first&#45;&gt;code_file</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M408.04,-900.16C396.7,-878.62 385.3,-855.39 376,-833.2 327.86,-718.39 287.14,-580.86 262.46,-489.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="265.03,-489.45 260.54,-482.89 259.96,-490.82 265.03,-489.45"/>
</g>
<!-- first&#45;&gt;vocabulary -->
<g id="edge3" class="edge">
<title>first&#45;&gt;vocabulary</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M467.45,-900.35C479.05,-811.36 505.81,-672.8 566,-568 582.72,-538.9 605.54,-511.37 629.32,-487.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="631.15,-488.95 634.58,-481.78 627.43,-485.25 631.15,-488.95"/>
</g>
<!-- first&#45;&gt;bescript -->
<g id="edge4" class="edge">
<title>first&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M716.6,-952.53C862.16,-926.57 1024.65,-886.76 1074,-833.2 1247.25,-645.16 1227.4,-493.4 1123,-260 1110.89,-232.93 1092.06,-208.39 1070.89,-186.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1072.97,-185.31 1065.78,-181.91 1069.28,-189.05 1072.97,-185.31"/>
</g>
<!-- local_ast&#45;&gt;code_file -->
<g id="edge5" class="edge">
<title>local_ast&#45;&gt;code_file</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M625.07,-609.6C577.33,-588.63 526.81,-565.13 481,-541.2 448.56,-524.25 414.61,-504.64 382.7,-485.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="384.11,-483.07 376.34,-481.41 381.38,-487.56 384.11,-483.07"/>
</g>
<!-- local_ast&#45;&gt;vocabulary -->
<g id="edge6" class="edge">
<title>local_ast&#45;&gt;vocabulary</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M798,-600.4C789.35,-565.58 779.39,-525.47 770.52,-489.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="773.13,-489.36 768.77,-482.71 768.03,-490.63 773.13,-489.36"/>
</g>
<!-- local_ast&#45;&gt;bescript -->
<g id="edge7" class="edge">
<title>local_ast&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M976.86,-600.07C995.41,-582.96 1011.73,-563.35 1023,-541.2 1079.68,-429.82 1052.99,-381.33 1023,-260 1017.05,-235.95 1007,-211.55 995.74,-189.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="998.17,-188.02 992.41,-182.55 993.5,-190.42 998.17,-188.02"/>
</g>
<!-- code_file&#45;&gt;vocabulary -->
<g id="edge8" class="edge">
<title>code_file&#45;&gt;vocabulary</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M425.39,-390C458.97,-390 492.54,-390 526.12,-390"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="526.01,-392.63 533.51,-390 526.01,-387.38 526.01,-392.63"/>
</g>
<!-- code_file&#45;&gt;bescript -->
<g id="edge9" class="edge">
<title>code_file&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M397.97,-300.15C425.38,-286.11 453.78,-272.21 481,-260 556.65,-226.06 641.36,-193.15 716.88,-165.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="717.53,-168.09 723.67,-163.06 715.73,-163.16 717.53,-168.09"/>
</g>
<!-- vocabulary&#45;&gt;bescript -->
<g id="edge10" class="edge">
<title>vocabulary&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M801.9,-300.4C824.14,-265.14 849.81,-224.44 872.58,-188.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="874.6,-190.08 876.38,-182.34 870.16,-187.28 874.6,-190.08"/>
</g>
</g>
</svg>
`;case`bescript_second_layer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1905pt" height="1171pt"
 viewBox="0.00 0.00 1905.00 1171.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1156.25)">
<g id="clust1" class="cluster">
<title>cluster_conversion</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="442.09,-868 442.09,-1133.2 1208.09,-1133.2 1208.09,-868 442.09,-868"/>
<text xml:space="preserve" text-anchor="start" x="450.09" y="-1120.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">三层纯转换设计</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_context</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="520.09,-568 520.09,-833.2 974.09,-833.2 974.09,-568 520.09,-568"/>
<text xml:space="preserve" text-anchor="start" x="528.09" y="-820.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">零件上下文层</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_ast</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1237.09,-268 1237.09,-533.2 1691.09,-533.2 1691.09,-268 1237.09,-268"/>
<text xml:space="preserve" text-anchor="start" x="1245.09" y="-520.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">局部 AST 层</text>
</g>
<!-- second -->
<g id="node1" class="node">
<title>second</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1176.46,-1080 473.72,-1080 473.72,-900 1176.46,-900 1176.46,-1080"/>
<text xml:space="preserve" text-anchor="start" x="688.94" y="-1029" font-family="Arial" font-size="20.00" fill="#eff6ff">Context 与官方 TS AST 业务转换</text>
<text xml:space="preserve" text-anchor="start" x="692.96" y="-1006" font-family="Arial" font-size="15.00" fill="#bfdbfe">Issue 46 的实现归属：DeviceTsConverter</text>
<text xml:space="preserve" text-anchor="start" x="656.7" y="-988" font-family="Arial" font-size="15.00" fill="#bfdbfe">组合零件外壳、全局变量与组，单向调用 MethodMapping</text>
<text xml:space="preserve" text-anchor="start" x="628.79" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">完成方法来源、签名、可见性及正文双向映射；变量、调用和 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="722.14" y="-952" font-family="Arial" font-size="15.00" fill="#bfdbfe">各由所属映射负责。仅消费 Context</text>
<text xml:space="preserve" text-anchor="start" x="493.78" y="-934" font-family="Arial" font-size="15.00" fill="#bfdbfe">与显式语义输入，不读取工程或缓存；可接受第三层传入的同身份官方方法节点以避免重复生成，不持有缓存或失效规则</text>
</g>
<!-- device_context -->
<g id="node2" class="node">
<title>device_context</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="942.18,-780 552,-780 552,-600 942.18,-600 942.18,-780"/>
<text xml:space="preserve" text-anchor="start" x="613.73" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">全局变量、零件元数据与零件上下文</text>
<text xml:space="preserve" text-anchor="start" x="572.06" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载调用方提供的变量、元数据和脚本关联；不现场查询工程。</text>
</g>
<!-- local_ast -->
<g id="node3" class="node">
<title>local_ast</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1659.18,-480 1269,-480 1269,-300 1659.18,-300 1659.18,-480"/>
<text xml:space="preserve" text-anchor="start" x="1425.19" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">局部 AST</text>
<text xml:space="preserve" text-anchor="start" x="1289.06" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载局部脚本语句与源码布局；不保存跨工程身份或进程缓存。</text>
</g>
<!-- tests -->
<g id="node4" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="390.18,-180 0,-180 0,0 390.18,0 390.18,-180"/>
<text xml:space="preserve" text-anchor="start" x="145.08" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">工程格式测试</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">验证工程格式纯计算的合法、非法与保真行为；不修改源夹具。</text>
</g>
<!-- logic_1 -->
<g id="node5" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="994.27,-180 499.91,-180 499.91,0 994.27,0 994.27,-180"/>
<text xml:space="preserve" text-anchor="start" x="594.29" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">工程设置、路径、GUID 与权威逻辑实体</text>
<text xml:space="preserve" text-anchor="start" x="519.97" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">解析工程设置、路径、GUID 与逻辑实体合同；输入由调用方提供，不读取工程。</text>
</g>
<!-- logic -->
<g id="node6" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1481.79,-780 1052.39,-780 1052.39,-600 1481.79,-600 1481.79,-780"/>
<text xml:space="preserve" text-anchor="start" x="1217.08" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">四向格式转换</text>
<text xml:space="preserve" text-anchor="start" x="1072.45" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 Canvas 节点为中心的纯计算。Base64 是原版旧数据兼容格式。</text>
</g>
<!-- bescript -->
<g id="node7" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1874.68,-180 1459.5,-180 1459.5,0 1874.68,0 1874.68,-180"/>
<text xml:space="preserve" text-anchor="start" x="1592.07" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
<text xml:space="preserve" text-anchor="start" x="1479.55" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。</text>
</g>
<!-- second&#45;&gt;device_context -->
<g id="edge3" class="edge">
<title>second&#45;&gt;device_context</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M801.9,-900.4C792.79,-865.58 782.29,-825.47 772.93,-789.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="775.53,-789.3 771.09,-782.7 770.45,-790.62 775.53,-789.3"/>
</g>
<!-- second&#45;&gt;local_ast -->
<g id="edge4" class="edge">
<title>second&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1176.07,-953.59C1331.39,-929.96 1489.69,-892.1 1537.09,-833.2 1615.43,-735.87 1566.77,-586.67 1519.62,-488.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1522.05,-487.96 1516.39,-482.38 1517.34,-490.27 1522.05,-487.96"/>
</g>
<!-- second&#45;&gt;logic_1 -->
<g id="edge5" class="edge">
<title>second&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M558.13,-900.07C532.54,-881.72 509.91,-859.67 493.09,-833.2 359.81,-623.43 545.61,-335.59 663.31,-187.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="665.03,-189.62 667.67,-182.12 660.93,-186.34 665.03,-189.62"/>
</g>
<!-- second&#45;&gt;logic -->
<g id="edge2" class="edge">
<title>second&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M956.81,-900.2C1010.3,-864.13 1072.18,-822.41 1126.55,-785.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1127.94,-787.98 1132.69,-781.61 1125.01,-783.63 1127.94,-787.98"/>
</g>
<!-- second&#45;&gt;bescript -->
<g id="edge6" class="edge">
<title>second&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1176.33,-959.27C1365.21,-936.22 1573.06,-897.1 1641.09,-833.2 1816.1,-668.81 1750.25,-350.84 1701.35,-189.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1703.91,-189.1 1699.19,-182.7 1698.89,-190.64 1703.91,-189.1"/>
</g>
<!-- device_context&#45;&gt;local_ast -->
<g id="edge7" class="edge">
<title>device_context&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M918.52,-600.13C944.47,-588.41 971.21,-577.27 997.09,-568 1059.08,-545.8 1078.71,-554.28 1141.09,-533.2 1182.82,-519.1 1226.59,-501.7 1267.96,-483.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1268.96,-486.4 1274.81,-481.02 1266.88,-481.58 1268.96,-486.4"/>
</g>
<!-- device_context&#45;&gt;logic_1 -->
<g id="edge8" class="edge">
<title>device_context&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M747.09,-600.12C747.09,-490.48 747.09,-304.62 747.09,-190.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="749.72,-190.41 747.09,-182.91 744.47,-190.41 749.72,-190.41"/>
</g>
<!-- device_context&#45;&gt;bescript -->
<g id="edge9" class="edge">
<title>device_context&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M825.57,-600.41C912.05,-507.23 1059,-361.41 1210.09,-268 1283.89,-222.37 1371.42,-185.01 1450.02,-156.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1450.54,-159.17 1456.71,-154.17 1448.76,-154.23 1450.54,-159.17"/>
</g>
<!-- local_ast&#45;&gt;logic_1 -->
<g id="edge10" class="edge">
<title>local_ast&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1269.11,-307.96C1176.81,-269.6 1066.1,-223.59 970.43,-183.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="971.66,-181.49 963.72,-181.04 969.64,-186.34 971.66,-181.49"/>
</g>
<!-- local_ast&#45;&gt;bescript -->
<g id="edge11" class="edge">
<title>local_ast&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1524.45,-300.4C1548.47,-265.14 1576.19,-224.44 1600.77,-188.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1602.86,-189.95 1604.91,-182.28 1598.52,-187 1602.86,-189.95"/>
</g>
<!-- tests&#45;&gt;logic_1 -->
<g id="edge1" class="edge">
<title>tests&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M389.96,-90C423.25,-90 456.55,-90 489.84,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="489.64,-92.63 497.14,-90 489.64,-87.38 489.64,-92.63"/>
</g>
</g>
</svg>
`;case`bescript_third_layer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1640pt" height="1551pt"
 viewBox="0.00 0.00 1640.00 1551.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1536.05)">
<g id="clust1" class="cluster">
<title>cluster_host</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="440.09,-1247.8 440.09,-1513 1000.09,-1513 1000.09,-1247.8 440.09,-1247.8"/>
<text xml:space="preserve" text-anchor="start" x="448.09" y="-1500.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">工作区 HOST</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_conversion</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="345.09,-585 345.09,-866.2 1602.09,-866.2 1602.09,-585 345.09,-585"/>
<text xml:space="preserve" text-anchor="start" x="353.09" y="-853.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">仅缓存状态的转换服务</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_script</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="55.09,-269 55.09,-534.2 657.09,-534.2 657.09,-269 55.09,-269"/>
<text xml:space="preserve" text-anchor="start" x="63.09" y="-521.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BESCRIPT 纯计算包</text>
</g>
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="968.54,-1459.8 471.64,-1459.8 471.64,-1279.8 968.54,-1279.8 968.54,-1459.8"/>
<text xml:space="preserve" text-anchor="start" x="630.07" y="-1390.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="541.69" y="-1367.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="491.7" y="-1349.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="602.57" y="-1331.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- ts -->
<g id="node2" class="node">
<title>ts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="887.44,-805 384.74,-805 384.74,-625 887.44,-625 887.44,-805"/>
<text xml:space="preserve" text-anchor="start" x="542.74" y="-736" font-family="Arial" font-size="20.00" fill="#eff6ff">零件与 TS 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="450.63" y="-713" font-family="Arial" font-size="15.00" fill="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context</text>
<text xml:space="preserve" text-anchor="start" x="433.11" y="-695" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="404.79" y="-677" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</text>
</g>
<!-- canvas -->
<g id="node3" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1562.28,-805 1127.9,-805 1127.9,-625 1562.28,-625 1562.28,-805"/>
<text xml:space="preserve" text-anchor="start" x="1217.28" y="-736" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 与 HTML 片段双向转换</text>
<text xml:space="preserve" text-anchor="start" x="1212.96" y="-713" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 实体、Base64 与 Hjson 和 HTML</text>
<text xml:space="preserve" text-anchor="start" x="1147.96" y="-695" font-family="Arial" font-size="15.00" fill="#bfdbfe">片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区</text>
<text xml:space="preserve" text-anchor="start" x="1223.8" y="-677" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope，按方向、输入和实际资源指纹失效</text>
</g>
<!-- third -->
<g id="node4" class="node">
<title>third</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="625.37,-481 86.81,-481 86.81,-301 625.37,-301 625.37,-481"/>
<text xml:space="preserve" text-anchor="start" x="246.07" y="-421" font-family="Arial" font-size="20.00" fill="#eff6ff">官方 TS 解析打印与局部装配</text>
<text xml:space="preserve" text-anchor="start" x="196.03" y="-398" font-family="Arial" font-size="15.00" fill="#bfdbfe">Issue 47 的实现归属：官方 parser、factory、printer</text>
<text xml:space="preserve" text-anchor="start" x="106.87" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">和有独立差分依据的局部片段装配；结合第二层来源与方法绑定按最终文本交付 BeScript</text>
<text xml:space="preserve" text-anchor="start" x="149.39" y="-362" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 TS 的逐行映射，当前仅有方法边界，逐行映射待接入。缓存状态由 TS</text>
<text xml:space="preserve" text-anchor="start" x="185.22" y="-344" font-family="Arial" font-size="15.00" fill="#bfdbfe">转换服务显式传入，无进程全局状态，无 BEScript 业务解释</text>
</g>
<!-- view_service -->
<g id="node5" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1074.37,-1137 365.81,-1137 365.81,-957 1074.37,-957 1074.37,-1137"/>
<text xml:space="preserve" text-anchor="start" x="628.41" y="-1077" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="524.64" y="-1054" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="554.64" y="-1036" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="605.49" y="-1018" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="385.86" y="-1000" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- bescript -->
<g id="node6" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="998.68,-180 583.5,-180 583.5,0 998.68,0 998.68,-180"/>
<text xml:space="preserve" text-anchor="start" x="716.07" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
<text xml:space="preserve" text-anchor="start" x="603.55" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。</text>
</g>
<!-- logic&#45;&gt;ts -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M471.92,-1316.84C297.85,-1274.78 87.16,-1210.58 34.36,-1137 -12.28,-1072 -10.48,-1023.26 34.36,-957 110.81,-844.03 249.77,-784.01 374.91,-752.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="375.47,-754.69 382.11,-750.32 374.19,-749.59 375.47,-754.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="34.36,-1035.6 34.36,-1058.4 311.09,-1058.4 311.09,-1035.6 34.36,-1035.6"/>
<text xml:space="preserve" text-anchor="start" x="37.36" y="-1041.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 仅装配；缓存由视图驱动</text>
</g>
<!-- logic&#45;&gt;canvas -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;canvas</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M941.45,-1279.89C1009.06,-1243.89 1078.76,-1196.52 1129.09,-1137 1211.62,-1039.41 1273.61,-904.94 1309.55,-814.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1311.96,-815.51 1312.27,-807.57 1307.08,-813.59 1311.96,-815.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1242.22,-1035.6 1242.22,-1058.4 1472.28,-1058.4 1472.28,-1035.6 1242.22,-1035.6"/>
<text xml:space="preserve" text-anchor="start" x="1245.22" y="-1041.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 仅装配共享转换</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M720.09,-1279.87C720.09,-1238.67 720.09,-1189.56 720.09,-1147.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="722.72,-1147.36 720.09,-1139.86 717.47,-1147.36 722.72,-1147.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="720.09,-1197 720.09,-1219.8 991.38,-1219.8 991.38,-1197 720.09,-1197"/>
<text xml:space="preserve" text-anchor="start" x="723.09" y="-1202.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Host 主动驱动视图；WorkspaceServices 装配</text>
</g>
<!-- ts&#45;&gt;canvas -->
<g id="edge5" class="edge">
<title>ts&#45;&gt;canvas</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M887.05,-715C962.2,-715 1044.14,-715 1117.67,-715"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1117.47,-717.63 1124.97,-715 1117.47,-712.38 1117.47,-717.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="942.04,-718 942.04,-740.8 1073.3,-740.8 1073.3,-718 942.04,-718"/>
<text xml:space="preserve" text-anchor="start" x="945.04" y="-723.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">内部 Canvas 双向转换</text>
</g>
<!-- ts&#45;&gt;third -->
<g id="edge6" class="edge">
<title>ts&#45;&gt;third</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M558.84,-625.16C521.96,-582.75 477.76,-531.92 440.05,-488.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="442.22,-487.05 435.32,-483.11 438.26,-490.5 442.22,-487.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="504.49,-542.2 504.49,-565 629.51,-565 629.51,-542.2 504.49,-542.2"/>
<text xml:space="preserve" text-anchor="start" x="507.49" y="-548" font-family="Arial" font-size="14.00" fill="#c9c9c9">官方 TS 解析打印合同</text>
</g>
<!-- ts&#45;&gt;bescript -->
<g id="edge7" class="edge">
<title>ts&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M660.19,-625.4C667.97,-596.38 676.53,-563.95 684.09,-534.2 714.08,-416.19 746.66,-279.99 767.89,-190.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="770.43,-190.72 769.6,-182.81 765.32,-189.51 770.43,-190.72"/>
</g>
<!-- third&#45;&gt;bescript -->
<g id="edge8" class="edge">
<title>third&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M485.43,-301.1C538.32,-264.74 599.59,-222.63 653.32,-185.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="654.69,-187.94 659.38,-181.53 651.71,-183.62 654.69,-187.94"/>
</g>
<!-- view_service&#45;&gt;ts -->
<g id="edge4" class="edge">
<title>view_service&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M697.47,-957.13C686.29,-913.21 672.76,-860.06 661.25,-814.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="663.82,-814.29 659.43,-807.67 658.73,-815.59 663.82,-814.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="680.61,-874.2 680.61,-897 838.31,-897 838.31,-874.2 680.61,-874.2"/>
<text xml:space="preserve" text-anchor="start" x="683.61" y="-880" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图唯一驱动转换与缓存释放</text>
</g>
</g>
</svg>
`;case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1035pt" height="1178pt"
 viewBox="0.00 0.00 1035.00 1178.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1163.45)">
<!-- frontend -->
<g id="node1" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="838.72,-1148.4 405.17,-1148.4 405.17,-968.4 838.72,-968.4 838.72,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="571.93" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">单一前端扩展</text>
<text xml:space="preserve" text-anchor="start" x="425.22" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供 VS Code 配置、侧栏与 Host 接入；领域状态保留在 Toolkit。</text>
</g>
<!-- toolkit -->
<g id="node2" class="node">
<title>toolkit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="859.54,-825.6 384.34,-825.6 384.34,-645.6 859.54,-645.6 859.54,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="522.47" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit TypeScript 产品</text>
<text xml:space="preserve" text-anchor="start" x="404.4" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有工程 Host、实体与业务服务及接入合同；前端与渲染器按声明边界消费。</text>
</g>
<!-- canvas -->
<g id="node3" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="401.88,-502.8 0,-502.8 0,-322.8 401.88,-322.8 401.88,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="130.92" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染产品</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">组织 Canvas 渲染行为验证；正式渲染逻辑由 renderer 拥有。</text>
</g>
<!-- pure -->
<g id="node4" class="node">
<title>pure</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1004.57,-180 239.32,-180 239.32,0 1004.57,0 1004.57,-180"/>
<text xml:space="preserve" text-anchor="start" x="580.27" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">业务纯计算</text>
<text xml:space="preserve" text-anchor="start" x="259.37" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。</text>
</g>
<!-- frontend&#45;&gt;toolkit -->
<g id="edge1" class="edge">
<title>frontend&#45;&gt;toolkit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M547.48,-968.41C533.97,-942.57 526.26,-913.72 533.95,-885.6 538.69,-868.24 546.03,-850.84 554.5,-834.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="556.68,-835.87 557.89,-828.01 552.05,-833.4 556.68,-835.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="533.95,-885.6 533.95,-908.4 560.94,-908.4 560.94,-885.6 533.95,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="536.95" y="-893.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- toolkit&#45;&gt;frontend -->
<g id="edge2" class="edge">
<title>toolkit&#45;&gt;frontend</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M621.94,-825.43C621.94,-866.61 621.94,-915.72 621.94,-958.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="619.32,-957.94 621.94,-965.44 624.57,-957.94 619.32,-957.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="621.94,-885.6 621.94,-908.4 872.99,-908.4 872.99,-885.6 621.94,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="624.94" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">通过原生配置适配验证当前值、边界与读取失败</text>
</g>
<!-- toolkit&#45;&gt;canvas -->
<g id="edge3" class="edge">
<title>toolkit&#45;&gt;canvas</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M505.23,-645.67C449.45,-603.16 382.62,-552.24 325.82,-508.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="327.48,-506.92 319.92,-504.46 324.3,-511.1 327.48,-506.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="424.07,-562.8 424.07,-585.6 451.06,-585.6 451.06,-562.8 424.07,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="427.07" y="-571" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- toolkit&#45;&gt;pure -->
<g id="edge4" class="edge">
<title>toolkit&#45;&gt;pure</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M621.94,-645.79C621.94,-526.38 621.94,-314.73 621.94,-190.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="624.57,-190.46 621.94,-182.96 619.32,-190.46 624.57,-190.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="621.94,-401.4 621.94,-424.2 648.94,-424.2 648.94,-401.4 621.94,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="624.94" y="-409.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- canvas&#45;&gt;pure -->
<g id="edge5" class="edge">
<title>canvas&#45;&gt;pure</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M198.67,-322.89C202.09,-293.78 210.67,-263.04 229.55,-240 246.65,-219.13 267.01,-201.19 289.32,-185.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="290.69,-188 295.46,-181.64 287.77,-183.63 290.69,-188"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="229.55,-240 229.55,-262.8 538.94,-262.8 538.94,-240 229.55,-240"/>
<text xml:space="preserve" text-anchor="start" x="232.55" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">由真实转换构造合法文档，以二进制前后比较验证输入保真</text>
</g>
<!-- pure&#45;&gt;toolkit -->
<g id="edge6" class="edge">
<title>pure&#45;&gt;toolkit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M680.84,-179.69C690.8,-198.84 699.62,-219.51 704.94,-240 743.56,-388.67 743.56,-436.93 704.94,-585.6 700.45,-602.89 693.47,-620.31 685.42,-636.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="683.23,-635.32 682.2,-643.2 687.92,-637.69 683.23,-635.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="733.9,-401.4 733.9,-424.2 760.9,-424.2 760.9,-401.4 733.9,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="736.9" y="-409.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
</g>
</svg>
`;case`runtime`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="10014pt" height="3416pt"
 viewBox="0.00 0.00 10014.00 3416.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3401.25)">
<!-- pi_plugin -->
<g id="node1" class="node">
<title>pi_plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="936.95,-3386.2 411.75,-3386.2 411.75,-3206.2 936.95,-3206.2 936.95,-3386.2"/>
<text xml:space="preserve" text-anchor="start" x="612.67" y="-3326.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi 官方扩展适配</text>
<text xml:space="preserve" text-anchor="start" x="488.9" y="-3303.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pi 进程内加载扩展；会话开始创建 memory Host 与回环 HTTP</text>
<text xml:space="preserve" text-anchor="start" x="517.24" y="-3285.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">MCP，使用官方 registerMcpServer 消费唯一 MCP</text>
<text xml:space="preserve" text-anchor="start" x="431.8" y="-3267.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">工具合同。会话结束注销连接并释放 Host；文本、HTML/XML、PNG 和错误由官方</text>
<text xml:space="preserve" text-anchor="start" x="618.09" y="-3249.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">MCP 客户端交付。</text>
</g>
<!-- host -->
<g id="node2" class="node">
<title>host</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4154.45,-3063.4 3614.24,-3063.4 3614.24,-2883.4 4154.45,-2883.4 4154.45,-3063.4"/>
<text xml:space="preserve" text-anchor="start" x="3836" y="-2985.4" font-family="Arial" font-size="20.00" fill="#eff6ff">工作区 Host</text>
<text xml:space="preserve" text-anchor="start" x="3634.3" y="-2962.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有单工作区服务生命周期、共享装配与受控入口；领域事实由实体服务提供。共享文件和</text>
<text xml:space="preserve" text-anchor="start" x="3661.36" y="-2944.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 测试资源由 test_support 单独承载，供各现役测试主动持有和释放。</text>
</g>
<!-- mcp -->
<g id="node3" class="node">
<title>mcp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1486.86,-2740.6 945.83,-2740.6 945.83,-2560.6 1486.86,-2560.6 1486.86,-2740.6"/>
<text xml:space="preserve" text-anchor="start" x="1158.01" y="-2662.6" font-family="Arial" font-size="20.00" fill="#eff6ff">MCP 协议接入</text>
<text xml:space="preserve" text-anchor="start" x="972.97" y="-2639.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供协议工具与传输接入；领域操作经 Host，不直接访问工程文件。预览消费 Host 的</text>
<text xml:space="preserve" text-anchor="start" x="965.89" y="-2621.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG，资产结果消费任务交付的已校验原图及实际 MIME，协议边界编码原生图像内容。</text>
</g>
<!-- config -->
<g id="node4" class="node">
<title>config</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1279.43,-1449.4 939.26,-1449.4 939.26,-1269.4 1279.43,-1269.4 1279.43,-1449.4"/>
<text xml:space="preserve" text-anchor="start" x="1034.33" y="-1362.4" font-family="Arial" font-size="20.00" fill="#eff6ff">配置来源抽象与实现</text>
<text xml:space="preserve" text-anchor="start" x="959.32" y="-1339.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">定义只读配置来源合同；默认值由前端原生配置声明。</text>
</g>
<!-- lint_tests -->
<g id="node5" class="node">
<title>lint_tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="9452.95,-3386.2 8987.75,-3386.2 8987.75,-3206.2 9452.95,-3206.2 9452.95,-3386.2"/>
<text xml:space="preserve" text-anchor="start" x="9137" y="-3308.2" font-family="Arial" font-size="20.00" fill="#eff6ff">脚本静态检查合同测试</text>
<text xml:space="preserve" text-anchor="start" x="9136.16" y="-3285.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">使用真实解析、零件 Context</text>
<text xml:space="preserve" text-anchor="start" x="9007.81" y="-3267.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">和调用分析验证纯检查空壳明确失败及输入保真；规则行为待正式实现验收。</text>
</g>
<!-- lint -->
<g id="node6" class="node">
<title>lint</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8302.97,-2095 7587.73,-2095 7587.73,-1915 8302.97,-1915 8302.97,-2095"/>
<text xml:space="preserve" text-anchor="start" x="7870.33" y="-2026" font-family="Arial" font-size="20.00" fill="#eff6ff">脚本静态检查纯计算</text>
<text xml:space="preserve" text-anchor="start" x="7754.04" y="-2003" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费同次结构化输入；ScriptLint 按方法绑定检查 LocalAst 与完整</text>
<text xml:space="preserve" text-anchor="start" x="7867.39" y="-1985" font-family="Arial" font-size="15.00" fill="#bfdbfe">Context，CallGraphLint</text>
<text xml:space="preserve" text-anchor="start" x="7607.78" y="-1967" font-family="Arial" font-size="15.00" fill="#bfdbfe">每次对完整分析执行一次跨方法检查，共用具名诊断合同。规则不读取工程、不重新解析或构建调用图、不持有诊断状态。</text>
</g>
<!-- analysis -->
<g id="node7" class="node">
<title>analysis</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8249.79,-481 7682.91,-481 7682.91,-301 8249.79,-301 8249.79,-481"/>
<text xml:space="preserve" text-anchor="start" x="7899.67" y="-412" font-family="Arial" font-size="20.00" fill="#eff6ff">纯符号表与调用图</text>
<text xml:space="preserve" text-anchor="start" x="7872.99" y="-389" font-family="Arial" font-size="15.00" fill="#bfdbfe">基于实体快照、第一层 LocalAst</text>
<text xml:space="preserve" text-anchor="start" x="7702.96" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层</text>
<text xml:space="preserve" text-anchor="start" x="7907.16" y="-353" font-family="Arial" font-size="15.00" fill="#bfdbfe">Context 或转换依据</text>
</g>
<!-- script -->
<g id="node8" class="node">
<title>script</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7550.03,-1772.2 7040.67,-1772.2 7040.67,-1592.2 7550.03,-1592.2 7550.03,-1772.2"/>
<text xml:space="preserve" text-anchor="start" x="7220.33" y="-1694.2" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 纯计算包</text>
<text xml:space="preserve" text-anchor="start" x="7060.72" y="-1671.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">数据合同与三层纯转换设计分开登记；纯转换函数不读取工程或拥有跨请求缓存，TS</text>
<text xml:space="preserve" text-anchor="start" x="7164.07" y="-1653.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图转换服务持有缓存状态并传入完整语义依据</text>
</g>
<!-- project_model -->
<g id="node9" class="node">
<title>project_model</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7305.69,-180 6873,-180 6873,0 7305.69,0 7305.69,-180"/>
<text xml:space="preserve" text-anchor="start" x="7022.67" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">工程格式纯计算包</text>
<text xml:space="preserve" text-anchor="start" x="6893.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供工程格式数据合同和纯计算；不持有 IO、Host 或实体运行状态。</text>
</g>
<!-- language_tests -->
<g id="node10" class="node">
<title>language_tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7733.45,-3386.2 7243.25,-3386.2 7243.25,-3206.2 7733.45,-3206.2 7733.45,-3386.2"/>
<text xml:space="preserve" text-anchor="start" x="7421.67" y="-3308.2" font-family="Arial" font-size="20.00" fill="#eff6ff">语言查询合同测试</text>
<text xml:space="preserve" text-anchor="start" x="7423.75" y="-3285.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">真实实体与诊断 Layer</text>
<text xml:space="preserve" text-anchor="start" x="7263.3" y="-3267.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">装配，验证四类查询空壳失败、请求保真及源工程零写入；正式查询行为待实现。</text>
</g>
<!-- language -->
<g id="node11" class="node">
<title>language</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7472.02,-2740.6 6416.68,-2740.6 6416.68,-2560.6 7472.02,-2560.6 7472.02,-2740.6"/>
<text xml:space="preserve" text-anchor="start" x="6894.34" y="-2671.6" font-family="Arial" font-size="20.00" fill="#eff6ff">语言查询业务</text>
<text xml:space="preserve" text-anchor="start" x="6456.75" y="-2648.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">输入工程相对文档标识、文本版本、完整基准与取消信号，按查询种类接收位置或文档范围；读取同次实体、分析和诊断，交付定义、引用、悬停、诊断、文档链接、符号及语义</text>
<text xml:space="preserve" text-anchor="start" x="6436.73" y="-2630.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">token。文档来源与方法绑定分别确定；共享源码查询保留全部实际引用作用域，零件视图使用对应绑定。结果携带文档版本和实际依赖，源定位与生成视图坐标按真实映射交付；LSP</text>
<text xml:space="preserve" text-anchor="start" x="6731.81" y="-2612.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">接入层只转换标准消息。实体层拥有工程状态，查询结果不产生第二状态树。</text>
</g>
<!-- diagnostics -->
<g id="node12" class="node">
<title>diagnostics</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8161.62,-2417.8 7683.08,-2417.8 7683.08,-2237.8 8161.62,-2237.8 8161.62,-2417.8"/>
<text xml:space="preserve" text-anchor="start" x="7889.01" y="-2330.8" font-family="Arial" font-size="20.00" fill="#eff6ff">诊断业务</text>
<text xml:space="preserve" text-anchor="start" x="7703.14" y="-2307.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架</text>
</g>
<!-- entities -->
<g id="node13" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5816.48,-1126.6 5266.22,-1126.6 5266.22,-946.6 5816.48,-946.6 5816.48,-1126.6"/>
<text xml:space="preserve" text-anchor="start" x="5474.67" y="-1075.6" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="5346.32" y="-1052.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="5336.31" y="-1034.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="5286.28" y="-1016.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="5405.91" y="-998.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="5500.5" y="-980.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- files -->
<g id="node14" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2221.96,-803.8 1606.74,-803.8 1606.74,-623.8 2221.96,-623.8 2221.96,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="1822.66" y="-743.8" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="1626.79" y="-720.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="1706.37" y="-702.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="1713.04" y="-684.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="1722.22" y="-666.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- assets -->
<g id="node15" class="node">
<title>assets</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3067.05,-2740.6 2467.64,-2740.6 2467.64,-2560.6 3067.05,-2560.6 3067.05,-2740.6"/>
<text xml:space="preserve" text-anchor="start" x="2692.33" y="-2689.6" font-family="Arial" font-size="20.00" fill="#eff6ff">资产任务与确认业务</text>
<text xml:space="preserve" text-anchor="start" x="2713.99" y="-2666.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">同一 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="2569.74" y="-2648.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有跨请求任务标识、pending→running→ready/failed/canceled</text>
<text xml:space="preserve" text-anchor="start" x="2590.22" y="-2630.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入</text>
<text xml:space="preserve" text-anchor="start" x="2581.04" y="-2612.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed/discarded，写入成功或部分写入失败后重读失败进入</text>
<text xml:space="preserve" text-anchor="start" x="2487.7" y="-2594.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</text>
</g>
<!-- invocations -->
<g id="node16" class="node">
<title>invocations</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5418.54,-2740.6 4864.16,-2740.6 4864.16,-2560.6 5418.54,-2560.6 5418.54,-2740.6"/>
<text xml:space="preserve" text-anchor="start" x="5083" y="-2671.6" font-family="Arial" font-size="20.00" fill="#eff6ff">调用记录与取消</text>
<text xml:space="preserve" text-anchor="start" x="4944.21" y="-2648.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 单侧提交具名开始和结束事件；本服务仅拥有同一工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="4884.21" y="-2630.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">的调用标识、时间、结果状态与诊断记录，主动交付只读记录。业务执行及取消归 Host 原生</text>
<text xml:space="preserve" text-anchor="start" x="4920.04" y="-2612.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope，记录不接收回调或完整请求响应，不建立第二执行器；关闭释放记录。</text>
</g>
<!-- preview -->
<g id="node17" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4531.86,-2740.6 4050.83,-2740.6 4050.83,-2560.6 4531.86,-2560.6 4531.86,-2740.6"/>
<text xml:space="preserve" text-anchor="start" x="4221.32" y="-2671.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 预览业务</text>
<text xml:space="preserve" text-anchor="start" x="4070.89" y="-2648.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU</text>
<text xml:space="preserve" text-anchor="start" x="4088.38" y="-2630.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG</text>
<text xml:space="preserve" text-anchor="start" x="4072.56" y="-2612.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</text>
</g>
<!-- asset_candidates -->
<g id="node18" class="node">
<title>asset_candidates</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3568.81,-2417.8 1965.89,-2417.8 1965.89,-2237.8 3568.81,-2237.8 3568.81,-2417.8"/>
<text xml:space="preserve" text-anchor="start" x="2709" y="-2357.8" font-family="Arial" font-size="20.00" fill="#eff6ff">候选存储与释放</text>
<text xml:space="preserve" text-anchor="start" x="2728.58" y="-2334.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="1985.95" y="-2316.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">独占暂存目录；任务接受前接收上传输入流，排队任务从所属暂存读取，上传结束、取消或关闭时释放，输入不作为生成候选。生成产物流先形成未就绪暂存内容，校验通过后关联实际结果并交付就绪候选。拥有输入及产物身份到具名格式和存储内容的映射，以及产物校验结果；每次</text>
<text xml:space="preserve" text-anchor="start" x="2600.21" y="-2298.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">read 交付新的字节流，Scope 关闭释放全部所属资源。IO</text>
<text xml:space="preserve" text-anchor="start" x="2605.23" y="-2280.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅用于工程外暂存，不能调用 ProjectFiles 或实体提交。</text>
</g>
<!-- editing -->
<g id="node19" class="node">
<title>editing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5069.8,-2095 4522.89,-2095 4522.89,-1915 5069.8,-1915 5069.8,-2095"/>
<text xml:space="preserve" text-anchor="start" x="4763.01" y="-2035" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑业务</text>
<text xml:space="preserve" text-anchor="start" x="4542.95" y="-2012" font-family="Arial" font-size="15.00" fill="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change</text>
<text xml:space="preserve" text-anchor="start" x="4666.29" y="-1994" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plan 形成统一 EntityChange/Schematics</text>
<text xml:space="preserve" text-anchor="start" x="4595.47" y="-1976" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用</text>
<text xml:space="preserve" text-anchor="start" x="4692.17" y="-1958" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views。TODO：编辑与重构编排。</text>
</g>
<!-- asset_processing -->
<g id="node20" class="node">
<title>asset_processing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1820.71,-2095 1167.98,-2095 1167.98,-1915 1820.71,-1915 1820.71,-2095"/>
<text xml:space="preserve" text-anchor="start" x="1394.33" y="-2035" font-family="Arial" font-size="20.00" fill="#eff6ff">产物确定性校验与切片预览</text>
<text xml:space="preserve" text-anchor="start" x="1188.04" y="-2012" font-family="Arial" font-size="15.00" fill="#bfdbfe">任务按已验证工作流输出绑定，将同一校验单元的具名产物及候选存储提供的独立字节流交给本服务；单文件与</text>
<text xml:space="preserve" text-anchor="start" x="1232.63" y="-1994" font-family="Arial" font-size="15.00" fill="#bfdbfe">3D 文件组均按明确要求校验，结果保留参与校验的产物身份。九宫格显式切片与尺寸案例转成</text>
<text xml:space="preserve" text-anchor="start" x="1361.38" y="-1976" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDocument，经唯一 CPU renderer</text>
<text xml:space="preserve" text-anchor="start" x="1226.8" y="-1958" font-family="Arial" font-size="15.00" fill="#bfdbfe">输出预览；不建立另一套九宫格绘制。VLM 意见与确定性校验分开，评阅意见不构成自动确认。</text>
</g>
<!-- view_service -->
<g id="node21" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5641.63,-1772.2 4933.07,-1772.2 4933.07,-1592.2 5641.63,-1592.2 5641.63,-1772.2"/>
<text xml:space="preserve" text-anchor="start" x="5195.66" y="-1712.2" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="5091.89" y="-1689.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="5121.9" y="-1671.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="5172.75" y="-1653.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="4953.12" y="-1635.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- asset_generation -->
<g id="node22" class="node">
<title>asset_generation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2469,-1772.2 1503.7,-1772.2 1503.7,-1592.2 2469,-1592.2 2469,-1772.2"/>
<text xml:space="preserve" text-anchor="start" x="1886.33" y="-1694.2" font-family="Arial" font-size="20.00" fill="#eff6ff">工作流绑定与远端生成执行</text>
<text xml:space="preserve" text-anchor="start" x="1523.76" y="-1671.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费注入的配置、凭据、有来源工作流、完整请求和取消信号，输出具名产物；不拥有跨请求任务状态、不读写工程、不启动本地推理或旧引擎子进程。唯一生成通道为</text>
<text xml:space="preserve" text-anchor="start" x="1780.04" y="-1653.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">RunningHub 原生 ComfyUI；执行和模型错误直接暴露，不回退模型。</text>
</g>
<!-- conversion -->
<g id="node23" class="node">
<title>conversion</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6097.7,-1449.4 5544.99,-1449.4 5544.99,-1269.4 6097.7,-1269.4 6097.7,-1449.4"/>
<text xml:space="preserve" text-anchor="start" x="5738" y="-1362.4" font-family="Arial" font-size="20.00" fill="#eff6ff">仅缓存状态的转换服务</text>
<text xml:space="preserve" text-anchor="start" x="5565.05" y="-1339.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">组织共享转换缓存与完整语义输入；工程文件是唯一权威，实体层负责文件派生快照和写入。</text>
</g>
<!-- semantic -->
<g id="node24" class="node">
<title>semantic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7334.45,-803.8 6844.25,-803.8 6844.25,-623.8 7334.45,-623.8 7334.45,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="7022.67" y="-752.8" font-family="Arial" font-size="20.00" fill="#eff6ff">语义装配（设计）</text>
<text xml:space="preserve" text-anchor="start" x="6880.55" y="-729.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON</text>
<text xml:space="preserve" text-anchor="start" x="6938.06" y="-711.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">合同导入导出平台数据与文档，SemanticAssembly</text>
<text xml:space="preserve" text-anchor="start" x="6867.63" y="-693.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context</text>
<text xml:space="preserve" text-anchor="start" x="6982.24" y="-675.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">和转换依据。复用既有身份、Context</text>
<text xml:space="preserve" text-anchor="start" x="6864.3" y="-657.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行</text>
</g>
<!-- configuration -->
<g id="node25" class="node">
<title>configuration</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="9983.45,-3386.2 9563.25,-3386.2 9563.25,-3206.2 9983.45,-3206.2 9983.45,-3386.2"/>
<text xml:space="preserve" text-anchor="start" x="9706.67" y="-3299.2" font-family="Arial" font-size="20.00" fill="#eff6ff">产品类型检查配置</text>
<text xml:space="preserve" text-anchor="start" x="9583.31" y="-3276.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">声明产品 TypeScript 检查范围并继承根选项；不提供运行时配置。</text>
</g>
<!-- pi_plugin&#45;&gt;host -->
<g id="edge1" class="edge">
<title>pi_plugin&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M936.7,-3268.98C1533.8,-3209.31 2989.95,-3063.78 3603.95,-3002.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3604.06,-3005.05 3611.26,-3001.69 3603.54,-2999.83 3604.06,-3005.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2375.6,-3123.4 2375.6,-3146.2 2402.59,-3146.2 2402.59,-3123.4 2375.6,-3123.4"/>
<text xml:space="preserve" text-anchor="start" x="2378.6" y="-3131.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- pi_plugin&#45;&gt;mcp -->
<g id="edge2" class="edge">
<title>pi_plugin&#45;&gt;mcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M749.14,-3206.39C850.3,-3086.26 1030.08,-2872.78 1134.67,-2748.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1136.68,-2750.28 1139.5,-2742.85 1132.66,-2746.9 1136.68,-2750.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1016.85,-2962 1016.85,-2984.8 1285.78,-2984.8 1285.78,-2962 1016.85,-2962"/>
<text xml:space="preserve" text-anchor="start" x="1019.85" y="-2967.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">启动回环 HTTP，交由 Pi 官方 MCP 客户端消费</text>
</g>
<!-- pi_plugin&#45;&gt;config -->
<g id="edge3" class="edge">
<title>pi_plugin&#45;&gt;config</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M411.83,-3273.86C222.59,-3242.4 0.35,-3164.9 0.35,-2974.4 0.35,-2974.4 0.35,-2974.4 0.35,-2488.2 0.35,-2224.29 -5.23,-2124.43 155.35,-1915 354.69,-1655.03 713.37,-1494.92 929.59,-1417.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="930.42,-1419.74 936.6,-1414.74 928.66,-1414.79 930.42,-1419.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7.77,-2316.4 7.77,-2339.2 177.14,-2339.2 177.14,-2316.4 7.77,-2316.4"/>
<text xml:space="preserve" text-anchor="start" x="10.77" y="-2322.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">官方显式参数进入统一只读配置</text>
</g>
<!-- host&#45;&gt;mcp -->
<g id="edge18" class="edge">
<title>host&#45;&gt;mcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3614.41,-2964.97C2966.44,-2946.07 1369.64,-2892.68 1277.27,-2823.4 1253.72,-2805.73 1239.24,-2778.22 1230.35,-2750.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1232.94,-2749.84 1228.29,-2743.39 1227.9,-2751.33 1232.94,-2749.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1277.27,-2800.6 1277.27,-2823.4 1570.35,-2823.4 1570.35,-2800.6 1277.27,-2800.6"/>
<text xml:space="preserve" text-anchor="start" x="1280.27" y="-2806.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">实际调用 patch 匹配空壳验证明确失败与顺序输入保真</text>
</g>
<!-- host&#45;&gt;config -->
<g id="edge26" class="edge">
<title>host&#45;&gt;config</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3614.27,-2966.31C3111.76,-2951.24 2054.62,-2900.95 1729.35,-2740.6 1707.12,-2729.64 1122.63,-2117.98 1113.35,-2095 1027.33,-1881.92 1060.41,-1604.89 1087.55,-1459.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1090.11,-1460.07 1088.93,-1452.21 1084.96,-1459.09 1090.11,-1460.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1184.47,-2155 1184.47,-2177.8 1412.18,-2177.8 1412.18,-2155 1184.47,-2155"/>
<text xml:space="preserve" text-anchor="start" x="1187.47" y="-2160.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">生成空壳接收明确公开参数和独立凭据端口</text>
</g>
<!-- host&#45;&gt;script -->
<g id="edge30" class="edge">
<title>host&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4154.26,-2965.3C4708.65,-2949.15 5938.27,-2904.58 6111.35,-2823.4 6257.3,-2754.94 6247,-2674.23 6361.35,-2560.6 6654.66,-2269.13 7014.39,-1938.4 7189.49,-1779.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7191.15,-1781.09 7194.93,-1774.1 7187.62,-1777.21 7191.15,-1781.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6688.99,-2316.4 6688.99,-2339.2 6846.68,-2339.2 6846.68,-2316.4 6688.99,-2316.4"/>
<text xml:space="preserve" text-anchor="start" x="6691.99" y="-2322.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">独立序列化验证实体反向语义</text>
</g>
<!-- host&#45;&gt;project_model -->
<g id="edge31" class="edge">
<title>host&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3614.41,-2968.69C2992.93,-2958.5 1476.06,-2923.85 976.35,-2823.4 779.03,-2783.73 557.35,-2852.87 557.35,-2651.6 557.35,-2651.6 557.35,-2651.6 557.35,-2165.4 557.35,-2050.96 533.29,-2023.65 497.35,-1915 437.66,-1734.58 329.35,-1711.84 329.35,-1521.8 329.35,-1521.8 329.35,-1521.8 329.35,-390 329.35,-222.68 5686.43,-116.31 6862.78,-94.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6862.56,-97.6 6870.01,-94.84 6862.46,-92.35 6862.56,-97.6"/>
</g>
<!-- host&#45;&gt;language -->
<g id="edge15" class="edge">
<title>host&#45;&gt;language</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4154.43,-2963.24C4700.97,-2943.51 5921.09,-2893.08 6333.35,-2823.4 6443.6,-2804.77 6562.45,-2773.91 6665.76,-2743.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6666.36,-2746.01 6672.81,-2741.36 6664.87,-2740.98 6666.36,-2746.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6435.17,-2800.6 6435.17,-2823.4 6462.17,-2823.4 6462.17,-2800.6 6435.17,-2800.6"/>
<text xml:space="preserve" text-anchor="start" x="6438.17" y="-2808.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;diagnostics -->
<g id="edge21" class="edge">
<title>host&#45;&gt;diagnostics</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4154.12,-2966.72C4945.66,-2948.46 7225.26,-2883.89 7527.35,-2740.6 7672.81,-2671.6 7792.77,-2524.25 7860.99,-2425.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7863.02,-2427.52 7865.1,-2419.85 7858.69,-2424.54 7863.02,-2427.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7754.42,-2639.2 7754.42,-2662 8031.15,-2662 8031.15,-2639.2 7754.42,-2639.2"/>
<text xml:space="preserve" text-anchor="start" x="7757.42" y="-2645" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 装配诊断与受控业务入口</text>
</g>
<!-- host&#45;&gt;entities -->
<g id="edge27" class="edge">
<title>host&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3907.94,-2883.6C3956.13,-2694.17 4061.35,-2235.79 4061.35,-1844.6 4061.35,-1844.6 4061.35,-1844.6 4061.35,-1358.4 4061.35,-1116.51 4825.96,-1056.61 5256.03,-1042.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5256.01,-1044.68 5263.42,-1041.81 5255.83,-1039.43 5256.01,-1044.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4060.23,-1993.6 4060.23,-2016.4 4087.22,-2016.4 4087.22,-1993.6 4060.23,-1993.6"/>
<text xml:space="preserve" text-anchor="start" x="4063.23" y="-2001.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;files -->
<g id="edge28" class="edge">
<title>host&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3614.56,-2972.77C2911.41,-2970.83 1064.85,-2946.05 890.35,-2740.6 584.26,-2380.22 773.35,-2156.02 773.35,-1683.2 773.35,-1683.2 773.35,-1683.2 773.35,-1035.6 773.35,-863.76 1259.02,-779.6 1596.64,-741.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1596.91,-744.46 1604.07,-741.02 1596.33,-739.24 1596.91,-744.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="767.22,-1832.2 767.22,-1855 794.21,-1855 794.21,-1832.2 767.22,-1832.2"/>
<text xml:space="preserve" text-anchor="start" x="770.22" y="-1840.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;assets -->
<g id="edge14" class="edge">
<title>host&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3614.57,-2912.88C3506.35,-2887.51 3380.85,-2856.21 3268.36,-2823.4 3187.35,-2799.77 3100.04,-2771 3021.35,-2743.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3022.61,-2741.48 3014.66,-2741.5 3020.89,-2746.44 3022.61,-2741.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3268.36,-2800.6 3268.36,-2823.4 3295.35,-2823.4 3295.35,-2800.6 3268.36,-2800.6"/>
<text xml:space="preserve" text-anchor="start" x="3271.36" y="-2808.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;invocations -->
<g id="edge16" class="edge">
<title>host&#45;&gt;invocations</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4154.37,-2947.54C4334.88,-2926.09 4576,-2888.04 4781.35,-2823.4 4845.15,-2803.32 4912.05,-2773.94 4970.63,-2745.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4971.69,-2747.53 4977.25,-2741.85 4969.36,-2742.83 4971.69,-2747.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4842.8,-2800.6 4842.8,-2823.4 4869.79,-2823.4 4869.79,-2800.6 4842.8,-2800.6"/>
<text xml:space="preserve" text-anchor="start" x="4845.8" y="-2808.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;preview -->
<g id="edge17" class="edge">
<title>host&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3997.18,-2883.47C4051.11,-2840.96 4115.71,-2790.04 4170.62,-2746.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4172.01,-2749.01 4176.27,-2742.3 4168.76,-2744.88 4172.01,-2749.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4100.05,-2800.6 4100.05,-2823.4 4127.05,-2823.4 4127.05,-2800.6 4100.05,-2800.6"/>
<text xml:space="preserve" text-anchor="start" x="4103.05" y="-2808.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;asset_candidates -->
<g id="edge19" class="edge">
<title>host&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3695.44,-2883.5C3656.7,-2864.33 3616.44,-2843.7 3579.35,-2823.4 3546.31,-2805.32 3147.45,-2561.49 2921.32,-2423.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2922.7,-2420.86 2914.93,-2419.18 2919.96,-2425.34 2922.7,-2420.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3438.11,-2639.2 3438.11,-2662 3465.11,-2662 3465.11,-2639.2 3438.11,-2639.2"/>
<text xml:space="preserve" text-anchor="start" x="3441.11" y="-2647.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;editing -->
<g id="edge20" class="edge">
<title>host&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4154.41,-2931.84C4389.94,-2879.34 4710.08,-2761.33 4816.35,-2500.6 4868.93,-2371.6 4846.9,-2207.65 4823.67,-2104.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4826.27,-2104.34 4822.03,-2097.62 4821.15,-2105.52 4826.27,-2104.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4823.49,-2477.8 4823.49,-2500.6 5147.68,-2500.6 5147.68,-2477.8 4823.49,-2477.8"/>
<text xml:space="preserve" text-anchor="start" x="4826.49" y="-2483.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令</text>
</g>
<!-- host&#45;&gt;asset_processing -->
<g id="edge22" class="edge">
<title>host&#45;&gt;asset_processing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3614.41,-2940.69C3317.66,-2903.34 2827.81,-2834.29 2412.35,-2740.6 2228.8,-2699.21 1769.32,-2583.41 1600.36,-2500.6 1543.8,-2472.88 1515.68,-2473 1485.35,-2417.8 1432.51,-2321.65 1446.23,-2192.84 1465.72,-2105.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1468.27,-2105.67 1467.38,-2097.77 1463.15,-2104.5 1468.27,-2105.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1600.36,-2477.8 1600.36,-2500.6 1627.35,-2500.6 1627.35,-2477.8 1600.36,-2477.8"/>
<text xml:space="preserve" text-anchor="start" x="1603.36" y="-2486" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;view_service -->
<g id="edge23" class="edge">
<title>host&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4154.42,-2950.25C4543.94,-2915.4 5242.07,-2841.22 5473.35,-2740.6 5531.33,-2715.37 5584.35,-2714.83 5584.35,-2651.6 5584.35,-2651.6 5584.35,-2651.6 5584.35,-2004 5584.35,-1911.19 5516.58,-1833.84 5445.78,-1778.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5447.53,-1776.4 5439.99,-1773.9 5444.32,-1780.56 5447.53,-1776.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5584.35,-2316.4 5584.35,-2339.2 5611.34,-2339.2 5611.34,-2316.4 5584.35,-2316.4"/>
<text xml:space="preserve" text-anchor="start" x="5587.35" y="-2324.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;asset_generation -->
<g id="edge24" class="edge">
<title>host&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3830.92,-2883.74C3820.32,-2864.24 3809.86,-2843.43 3801.35,-2823.4 3695,-2573.03 3812.64,-2433.16 3623.35,-2237.8 3322.48,-1927.29 2841.71,-1790.62 2478.86,-1730.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2479.51,-1727.92 2471.68,-1729.29 2478.66,-1733.1 2479.51,-1727.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3728.67,-2316.4 3728.67,-2339.2 3828.02,-2339.2 3828.02,-2316.4 3728.67,-2316.4"/>
<text xml:space="preserve" text-anchor="start" x="3731.67" y="-2322.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">真实产物字节输入</text>
</g>
<!-- host&#45;&gt;conversion -->
<g id="edge25" class="edge">
<title>host&#45;&gt;conversion</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4154.32,-2954.42C4614.93,-2921.1 5512.8,-2843.68 5612.35,-2740.6 5957.93,-2382.73 5883.68,-1711.32 5840.68,-1459.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5843.3,-1459.01 5839.43,-1452.07 5838.12,-1459.91 5843.3,-1459.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5861.84,-2155 5861.84,-2177.8 5888.83,-2177.8 5888.83,-2155 5861.84,-2155"/>
<text xml:space="preserve" text-anchor="start" x="5864.84" y="-2163.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- host&#45;&gt;semantic -->
<g id="edge29" class="edge">
<title>host&#45;&gt;semantic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4154.28,-2968.82C4609.2,-2957.97 5503.99,-2914.47 5759.35,-2740.6 6299.23,-2373 6155.94,-1986.9 6676.35,-1592.2 6805.96,-1493.9 6916.66,-1580.21 7013.35,-1449.4 7152.85,-1260.67 7131.72,-966.27 7108.34,-813.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7110.95,-813.51 7107.2,-806.5 7105.76,-814.32 7110.95,-813.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6426.64,-1832.2 6426.64,-1855 6677.69,-1855 6677.69,-1832.2 6426.64,-1832.2"/>
<text xml:space="preserve" text-anchor="start" x="6429.64" y="-1838" font-family="Arial" font-size="14.00" fill="#c9c9c9">实际调用验证语义空壳明确失败及输入保持原样</text>
</g>
<!-- mcp&#45;&gt;host -->
<g id="edge39" class="edge">
<title>mcp&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1201.15,-2740.57C1201.14,-2770.73 1207.67,-2802.14 1229.35,-2823.4 1313.12,-2905.56 2938.67,-2951.2 3604.05,-2966.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3603.67,-2969.12 3611.23,-2966.67 3603.79,-2963.87 3603.67,-2969.12"/>
</g>
<!-- lint_tests&#45;&gt;lint -->
<g id="edge4" class="edge">
<title>lint_tests&#45;&gt;lint</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M9096.66,-3206.27C9072.59,-3187.31 9048.11,-3166.77 9026.35,-3146.2 8603.78,-2746.75 8609.43,-2538.53 8172.35,-2155 8150.8,-2136.09 8126.67,-2117.75 8102.41,-2100.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="8103.97,-2098.67 8096.31,-2096.56 8100.99,-2102.99 8103.97,-2098.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8672.95,-2639.2 8672.95,-2662 8760.63,-2662 8760.63,-2639.2 8672.95,-2639.2"/>
<text xml:space="preserve" text-anchor="start" x="8675.95" y="-2645" font-family="Arial" font-size="14.00" fill="#c9c9c9">调用纯检查空壳</text>
</g>
<!-- lint_tests&#45;&gt;analysis -->
<g id="edge5" class="edge">
<title>lint_tests&#45;&gt;analysis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M9242.66,-3206.27C9246.69,-3186.61 9250.27,-3165.8 9252.35,-3146.2 9253.42,-3136.12 9252.66,-3133.53 9252.35,-3123.4 9231.23,-2441.89 9363.89,-2242.01 9157.35,-1592.2 9095.12,-1396.42 8914.35,-1404.43 8914.35,-1199 8914.35,-1199 8914.35,-1199 8914.35,-712.8 8914.35,-592.9 8814.6,-592.56 8706.35,-541 8567.27,-474.75 8399.88,-437.93 8259.51,-417.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="8260.24,-414.93 8252.45,-416.46 8259.5,-420.12 8260.24,-414.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="9228.42,-1832.2 9228.42,-1855 9374.44,-1855 9374.44,-1832.2 9228.42,-1832.2"/>
<text xml:space="preserve" text-anchor="start" x="9231.42" y="-1838" font-family="Arial" font-size="14.00" fill="#c9c9c9">构建同次方法绑定及调用图</text>
</g>
<!-- lint_tests&#45;&gt;script -->
<g id="edge6" class="edge">
<title>lint_tests&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M9193.15,-3206.4C9111.89,-2957.26 8845.83,-2248.15 8358.35,-1915 8230.65,-1827.73 7831.31,-1757.26 7560.13,-1717.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7560.53,-1715.21 7552.73,-1716.73 7559.78,-1720.4 7560.53,-1715.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8874.05,-2477.8 8874.05,-2500.6 8901.05,-2500.6 8901.05,-2477.8 8874.05,-2477.8"/>
<text xml:space="preserve" text-anchor="start" x="8877.05" y="-2486" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- lint_tests&#45;&gt;project_model -->
<g id="edge7" class="edge">
<title>lint_tests&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M9408.97,-3206.28C9492.57,-3152.7 9572.35,-3075.17 9572.35,-2974.4 9572.35,-2974.4 9572.35,-2974.4 9572.35,-390 9572.35,-163.9 7928.57,-107.79 7315.91,-94.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7316.21,-92.11 7308.65,-94.57 7316.09,-97.36 7316.21,-92.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="9572.35,-1670.8 9572.35,-1693.6 9695.04,-1693.6 9695.04,-1670.8 9572.35,-1670.8"/>
<text xml:space="preserve" text-anchor="start" x="9575.35" y="-1676.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">提供真实逻辑实体输入</text>
</g>
<!-- lint&#45;&gt;analysis -->
<g id="edge51" class="edge">
<title>lint&#45;&gt;analysis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7953.43,-1915.23C7958.61,-1850.88 7964.35,-1761.73 7964.35,-1683.2 7964.35,-1683.2 7964.35,-1683.2 7964.35,-712.8 7964.35,-638.54 7964.89,-554.62 7965.41,-491.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7968.03,-491.4 7965.47,-483.88 7962.79,-491.35 7968.03,-491.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7964.35,-1186.6 7964.35,-1209.4 8017.02,-1209.4 8017.02,-1186.6 7964.35,-1186.6"/>
<text xml:space="preserve" text-anchor="start" x="7967.35" y="-1192.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">分析结果</text>
</g>
<!-- lint&#45;&gt;script -->
<g id="edge52" class="edge">
<title>lint&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7765.15,-1915.07C7677.97,-1872.04 7573.32,-1820.39 7484.94,-1776.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7486.22,-1774.47 7478.33,-1773.51 7483.89,-1779.18 7486.22,-1774.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7639.84,-1832.2 7639.84,-1855 7666.83,-1855 7666.83,-1832.2 7639.84,-1832.2"/>
<text xml:space="preserve" text-anchor="start" x="7642.84" y="-1840.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- analysis&#45;&gt;script -->
<g id="edge65" class="edge">
<title>analysis&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7860.11,-480.68C7801.85,-539.58 7741.35,-622.49 7741.35,-712.8 7741.35,-1360.4 7741.35,-1360.4 7741.35,-1360.4 7741.35,-1467.47 7655.59,-1542.32 7559.29,-1592.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7558.11,-1590.28 7552.63,-1596.04 7560.51,-1594.95 7558.11,-1590.28"/>
</g>
<!-- analysis&#45;&gt;project_model -->
<g id="edge66" class="edge">
<title>analysis&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7760.21,-301.09C7708.43,-279.98 7652.69,-258.3 7600.35,-240 7508.07,-207.74 7404.8,-176.7 7315.38,-151.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7316.23,-148.89 7308.3,-149.38 7314.8,-153.94 7316.23,-148.89"/>
</g>
<!-- script&#45;&gt;project_model -->
<g id="edge68" class="edge">
<title>script&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7400.17,-1592.25C7457.65,-1533.24 7517.35,-1450.31 7517.35,-1360.4 7517.35,-1360.4 7517.35,-1360.4 7517.35,-390 7517.35,-278.15 7417.9,-204.65 7314.88,-158.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7316.24,-156.26 7308.31,-155.64 7314.12,-161.06 7316.24,-156.26"/>
</g>
<!-- script&#45;&gt;conversion -->
<g id="edge67" class="edge">
<title>script&#45;&gt;conversion</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7041.03,-1616.2C7003.69,-1607.58 6965.61,-1599.29 6929.35,-1592.2 6751.19,-1557.38 6703.49,-1567.09 6525.35,-1532.2 6386.97,-1505.1 6234.82,-1468.8 6107.48,-1436.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6108.42,-1434.08 6100.51,-1434.78 6107.13,-1439.17 6108.42,-1434.08"/>
</g>
<!-- language_tests&#45;&gt;host -->
<g id="edge8" class="edge">
<title>language_tests&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7243.46,-3273.4C6597.25,-3215.88 4848.77,-3060.25 4164.4,-2999.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4164.87,-2996.73 4157.17,-2998.68 4164.4,-3001.96 4164.87,-2996.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5794.41,-3123.4 5794.41,-3146.2 5917.1,-3146.2 5917.1,-3123.4 5794.41,-3123.4"/>
<text xml:space="preserve" text-anchor="start" x="5797.41" y="-3129.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">独占测试工程生命周期</text>
</g>
<!-- language_tests&#45;&gt;project_model -->
<g id="edge13" class="edge">
<title>language_tests&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7733.36,-3245.3C8018.18,-3176.09 8487.4,-3025.89 8787.35,-2740.6 9134.16,-2410.73 9136.35,-1913.28 9136.35,-1199 9136.35,-1199 9136.35,-1199 9136.35,-390 9136.35,-207.7 7848.84,-126.5 7316.02,-100.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7316.15,-98.07 7308.53,-100.33 7315.9,-103.32 7316.15,-98.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="9133.51,-1670.8 9133.51,-1693.6 9232.86,-1693.6 9232.86,-1670.8 9133.51,-1670.8"/>
<text xml:space="preserve" text-anchor="start" x="9136.51" y="-1676.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取实际文件修订</text>
</g>
<!-- language_tests&#45;&gt;language -->
<g id="edge9" class="edge">
<title>language_tests&#45;&gt;language</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7413.28,-3206.39C7311.64,-3086.14 7130.94,-2872.35 7026.01,-2748.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7028.32,-2746.88 7021.48,-2742.85 7024.31,-2750.27 7028.32,-2746.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7288.12,-2962 7288.12,-2984.8 7422.48,-2984.8 7422.48,-2962 7288.12,-2962"/>
<text xml:space="preserve" text-anchor="start" x="7291.12" y="-2967.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">真实装配与四类请求执行</text>
</g>
<!-- language_tests&#45;&gt;diagnostics -->
<g id="edge10" class="edge">
<title>language_tests&#45;&gt;diagnostics</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7638.71,-3206.27C7780.99,-3111.78 7983.59,-2947.56 8058.35,-2740.6 8085.53,-2665.36 8079.32,-2637.8 8058.35,-2560.6 8045.53,-2513.4 8020.4,-2465.99 7995.2,-2426.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7997.41,-2425.04 7991.13,-2420.17 7993,-2427.89 7997.41,-2425.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8032.61,-2800.6 8032.61,-2823.4 8147.54,-2823.4 8147.54,-2800.6 8032.61,-2800.6"/>
<text xml:space="preserve" text-anchor="start" x="8035.61" y="-2806.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">注入真实诊断 Layer</text>
</g>
<!-- language_tests&#45;&gt;entities -->
<g id="edge11" class="edge">
<title>language_tests&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7518.48,-3206.31C7561.65,-3062.99 7625.68,-2775.26 7527.35,-2560.6 7258.46,-1973.61 6263.35,-2490.25 6263.35,-1844.6 6263.35,-1844.6 6263.35,-1844.6 6263.35,-1358.4 6263.35,-1158.09 6028.4,-1081.92 5826.56,-1053.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5827.15,-1050.88 5819.36,-1052.46 5826.44,-1056.08 5827.15,-1050.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6499.67,-2155 6499.67,-2177.8 6614.6,-2177.8 6614.6,-2155 6499.67,-2155"/>
<text xml:space="preserve" text-anchor="start" x="6502.67" y="-2160.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">建立真实实体 Layer</text>
</g>
<!-- language_tests&#45;&gt;files -->
<g id="edge12" class="edge">
<title>language_tests&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7243.43,-3291.42C6486.45,-3279.09 4117.26,-3235.54 2156.35,-3146.2 1953.33,-3136.95 335.35,-3177.63 335.35,-2974.4 335.35,-2974.4 335.35,-2974.4 335.35,-2488.2 335.35,-2048.09 551.35,-1961.91 551.35,-1521.8 551.35,-1521.8 551.35,-1521.8 551.35,-1035.6 551.35,-822 1193.64,-750.48 1596.41,-726.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1596.41,-729.27 1603.74,-726.21 1596.1,-724.03 1596.41,-729.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="477.7,-1993.6 477.7,-2016.4 577.05,-2016.4 577.05,-1993.6 477.7,-1993.6"/>
<text xml:space="preserve" text-anchor="start" x="480.7" y="-1999.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">建立真实文件边界</text>
</g>
<!-- language&#45;&gt;diagnostics -->
<g id="edge36" class="edge">
<title>language&#45;&gt;diagnostics</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7215.48,-2560.67C7358.88,-2513.63 7533.7,-2456.28 7673.61,-2410.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7674.01,-2413.02 7680.32,-2408.19 7672.37,-2408.03 7674.01,-2413.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7462.67,-2477.8 7462.67,-2500.6 7620.37,-2500.6 7620.37,-2477.8 7462.67,-2477.8"/>
<text xml:space="preserve" text-anchor="start" x="7465.67" y="-2483.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享诊断服务和唯一结果类型</text>
</g>
<!-- language&#45;&gt;entities -->
<g id="edge37" class="edge">
<title>language&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6728.55,-2560.6C6647.42,-2522.36 6556.66,-2473.57 6481.35,-2417.8 6074.44,-2116.49 6124.77,-1862.06 5696.35,-1592.2 5623.21,-1546.13 5570.44,-1595.28 5511.35,-1532.2 5412.77,-1426.97 5456.14,-1247.51 5497.84,-1136.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5500.19,-1137.34 5500.4,-1129.4 5495.28,-1135.47 5500.19,-1137.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5993.71,-1832.2 5993.71,-1855 6151.41,-1855 6151.41,-1832.2 5993.71,-1832.2"/>
<text xml:space="preserve" text-anchor="start" x="5996.71" y="-1838" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享实体服务与完整读取基准</text>
</g>
<!-- diagnostics&#45;&gt;lint -->
<g id="edge45" class="edge">
<title>diagnostics&#45;&gt;lint</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7928.73,-2237.87C7931.68,-2196.67 7935.2,-2147.56 7938.24,-2105.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7940.85,-2105.52 7938.76,-2097.85 7935.61,-2105.14 7940.85,-2105.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7934.54,-2155 7934.54,-2177.8 8145.15,-2177.8 8145.15,-2155 7934.54,-2155"/>
<text xml:space="preserve" text-anchor="start" x="7937.54" y="-2160.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">调用纯检查，诊断状态归 Diagnostics</text>
</g>
<!-- diagnostics&#45;&gt;analysis -->
<g id="edge47" class="edge">
<title>diagnostics&#45;&gt;analysis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M8161.5,-2275.28C8387.56,-2219.48 8692.35,-2122.62 8692.35,-2006 8692.35,-2006 8692.35,-2006 8692.35,-712.8 8692.35,-513.77 8461.24,-437.21 8259.81,-408.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="8260.43,-405.71 8252.64,-407.27 8259.7,-410.91 8260.43,-405.71"/>
</g>
<!-- diagnostics&#45;&gt;entities -->
<g id="edge46" class="edge">
<title>diagnostics&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7683.09,-2243.31C7473.75,-2163.31 7167.81,-2029.11 6936.35,-1855 6619.69,-1616.8 6691.08,-1381.97 6346.35,-1186.6 6258.69,-1136.92 6021.23,-1096.57 5826.77,-1070.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5827.16,-1067.85 5819.38,-1069.46 5826.46,-1073.06 5827.16,-1067.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6839.39,-1670.8 6839.39,-1693.6 6962.08,-1693.6 6962.08,-1670.8 6839.39,-1670.8"/>
<text xml:space="preserve" text-anchor="start" x="6842.39" y="-1676.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">诊断主动读取实体快照</text>
</g>
<!-- entities&#45;&gt;script -->
<g id="edge59" class="edge">
<title>entities&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5816.37,-1044C6028.23,-1056.78 6325.07,-1092.03 6568.35,-1186.6 6811.96,-1281.29 7054.9,-1470.56 7189.1,-1585.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7187.3,-1587.45 7194.7,-1590.35 7190.72,-1583.47 7187.3,-1587.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7011.63,-1348 7011.63,-1370.8 7157.66,-1370.8 7157.66,-1348 7011.63,-1348"/>
<text xml:space="preserve" text-anchor="start" x="7014.63" y="-1353.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">零件实体携带显式转换依据</text>
</g>
<!-- entities&#45;&gt;project_model -->
<g id="edge60" class="edge">
<title>entities&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5562.88,-946.64C5608.81,-777.73 5733.5,-412.07 5986.35,-240 6124.97,-145.67 6582.53,-110.76 6862.91,-98.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6862.82,-100.69 6870.2,-97.73 6862.59,-95.44 6862.82,-100.69"/>
</g>
<!-- entities&#45;&gt;files -->
<g id="edge57" class="edge">
<title>entities&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5266.5,-1011.29C4606.26,-952.89 2933.75,-804.96 2231.98,-742.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2232.44,-740.3 2224.74,-742.25 2231.98,-745.53 2232.44,-740.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3836.6,-863.8 3836.6,-886.6 4094.65,-886.6 4094.65,-863.8 3836.6,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="3839.6" y="-869.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">实体层唯一业务 IO；读取与提交分别授权到文件</text>
</g>
<!-- entities&#45;&gt;semantic -->
<g id="edge58" class="edge">
<title>entities&#45;&gt;semantic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5816.32,-978.62C6104.6,-918.87 6553.9,-825.76 6834.44,-767.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6834.57,-770.28 6841.38,-766.19 6833.51,-765.14 6834.57,-770.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6361.76,-863.8 6361.76,-886.6 6437.78,-886.6 6437.78,-863.8 6361.76,-863.8"/>
<text xml:space="preserve" text-anchor="start" x="6364.76" y="-869.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">快照语义装配</text>
</g>
<!-- files&#45;&gt;project_model -->
<g id="edge61" class="edge">
<title>files&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2221.7,-668.59C2842.75,-580.1 4292.03,-377.91 5513.35,-240 5992.99,-185.84 6556.29,-135.86 6862.7,-109.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6862.78,-112.45 6870.03,-109.2 6862.33,-107.22 6862.78,-112.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4967.71,-379.6 4967.71,-402.4 5218.76,-402.4 5218.76,-379.6 4967.71,-379.6"/>
<text xml:space="preserve" text-anchor="start" x="4970.71" y="-385.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">文件边界使用统一相对路径校验与文件事实合同</text>
</g>
<!-- assets&#45;&gt;asset_candidates -->
<g id="edge32" class="edge">
<title>assets&#45;&gt;asset_candidates</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2767.35,-2560.67C2767.35,-2519.47 2767.35,-2470.36 2767.35,-2427.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2769.97,-2428.16 2767.35,-2420.66 2764.72,-2428.16 2769.97,-2428.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2767.35,-2477.8 2767.35,-2500.6 2983.39,-2500.6 2983.39,-2477.8 2767.35,-2477.8"/>
<text xml:space="preserve" text-anchor="start" x="2770.35" y="-2483.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">任务关联候选标识、读取确认内容并释放</text>
</g>
<!-- assets&#45;&gt;editing -->
<g id="edge33" class="edge">
<title>assets&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3066.78,-2574.48C3087.92,-2569.64 3108.94,-2564.96 3129.35,-2560.6 3476.14,-2486.5 3576.46,-2525.43 3914.35,-2417.8 4173.58,-2335.22 4455.59,-2193.64 4629.2,-2099.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4630.4,-2102.27 4635.75,-2096.39 4627.9,-2097.65 4630.4,-2102.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4352.17,-2316.4 4352.17,-2339.2 4591.55,-2339.2 4591.55,-2316.4 4352.17,-2316.4"/>
<text xml:space="preserve" text-anchor="start" x="4355.17" y="-2322.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">明确确认准备候选并提交，返回实际资源身份</text>
</g>
<!-- assets&#45;&gt;asset_processing -->
<g id="edge34" class="edge">
<title>assets&#45;&gt;asset_processing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2467.72,-2620.86C2207.3,-2593.37 1851.39,-2549.02 1717.35,-2500.6 1651.38,-2476.77 1623.48,-2475.08 1582.99,-2417.8 1517.72,-2325.46 1498.96,-2194.43 1494.34,-2105.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1496.96,-2105.13 1493.99,-2097.76 1491.72,-2105.37 1496.96,-2105.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1582.99,-2316.4 1582.99,-2339.2 1717.35,-2339.2 1717.35,-2316.4 1582.99,-2316.4"/>
<text xml:space="preserve" text-anchor="start" x="1585.99" y="-2322.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">产物校验与明确切片预览</text>
</g>
<!-- assets&#45;&gt;asset_generation -->
<g id="edge35" class="edge">
<title>assets&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2467.66,-2601.15C2253.52,-2560.66 1989.93,-2496.87 1911.35,-2417.8 1833.58,-2339.55 1862.17,-2287.21 1847.97,-2177.8 1846.67,-2167.75 1845.82,-2164.9 1847.97,-2155 1854.2,-2126.36 1865.42,-2122.58 1875.35,-2095 1913.08,-1990.23 1944.79,-1866.45 1964.53,-1782.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1967.04,-1782.91 1966.19,-1775.01 1961.93,-1781.72 1967.04,-1782.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1847.97,-2155 1847.97,-2177.8 2087.35,-2177.8 2087.35,-2155 1847.97,-2155"/>
<text xml:space="preserve" text-anchor="start" x="1850.97" y="-2160.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">任务绑定原子生成与评阅，不转移调度所有权</text>
</g>
<!-- preview&#45;&gt;entities -->
<g id="edge38" class="edge">
<title>preview&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4478.94,-2560.69C4534.02,-2524.58 4587.67,-2477.14 4618.35,-2417.8 4655.08,-2346.73 4654.72,-2309.05 4618.35,-2237.8 4538.51,-2081.38 4298.35,-2181.62 4298.35,-2006 4298.35,-2006 4298.35,-2006 4298.35,-1358.4 4298.35,-1161.75 4889.02,-1083.78 5256.01,-1054.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5255.97,-1056.94 5263.24,-1053.73 5255.56,-1051.71 5255.97,-1056.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4298.35,-1832.2 4298.35,-1855 4397.7,-1855 4397.7,-1832.2 4298.35,-1832.2"/>
<text xml:space="preserve" text-anchor="start" x="4301.35" y="-1838" font-family="Arial" font-size="14.00" fill="#c9c9c9">预览只读实体资源</text>
</g>
<!-- asset_candidates&#45;&gt;asset_processing -->
<g id="edge40" class="edge">
<title>asset_candidates&#45;&gt;asset_processing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2434.67,-2237.8C2332.07,-2210.75 2218.65,-2181.25 2114.35,-2155 2022.42,-2131.86 1922.62,-2107.53 1830.5,-2085.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1831.31,-2082.89 1823.41,-2083.69 1830.09,-2088 1831.31,-2082.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2203.35,-2155 2203.35,-2177.8 2372.72,-2177.8 2372.72,-2155 2203.35,-2155"/>
<text xml:space="preserve" text-anchor="start" x="2206.35" y="-2160.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">保存同一产物的确定性校验结果</text>
</g>
<!-- asset_candidates&#45;&gt;asset_generation -->
<g id="edge41" class="edge">
<title>asset_candidates&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2659.57,-2237.99C2513.22,-2117.38 2252.68,-1902.67 2102.24,-1778.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2104.06,-1776.8 2096.61,-1774.06 2100.73,-1780.86 2104.06,-1776.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2479.89,-1993.6 2479.89,-2016.4 2579.24,-2016.4 2579.24,-1993.6 2479.89,-1993.6"/>
<text xml:space="preserve" text-anchor="start" x="2482.89" y="-1999.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">暂存具名产物字节</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge44" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4765.51,-1915.1C4740.92,-1829.94 4716.21,-1698.96 4753.35,-1592.2 4812.88,-1421.07 4884.75,-1407.24 5002.35,-1269.4 5035.16,-1230.94 5037.62,-1213.62 5080.35,-1186.6 5133.91,-1152.73 5195.87,-1125.89 5256.66,-1104.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5257.29,-1107.43 5263.54,-1102.53 5255.59,-1102.46 5257.29,-1107.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4787.79,-1509.4 4787.79,-1532.2 4945.49,-1532.2 4945.49,-1509.4 4787.79,-1509.4"/>
<text xml:space="preserve" text-anchor="start" x="4790.79" y="-1515.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">编辑候选经唯一实体入口提交</text>
</g>
<!-- editing&#45;&gt;view_service -->
<g id="edge42" class="edge">
<title>editing&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4932.47,-1915.07C4997.92,-1872.3 5076.42,-1821.01 5142.93,-1777.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5144.01,-1779.99 5148.86,-1773.69 5141.14,-1775.59 5144.01,-1779.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5056.57,-1832.2 5056.57,-1855 5313.07,-1855 5313.07,-1832.2 5056.57,-1832.2"/>
<text xml:space="preserve" text-anchor="start" x="5059.57" y="-1838" font-family="Arial" font-size="14.00" fill="#c9c9c9">只读取具名视图；提交后的派生刷新由Host驱动</text>
</g>
<!-- editing&#45;&gt;conversion -->
<g id="edge43" class="edge">
<title>editing&#45;&gt;conversion</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4781.7,-1915.42C4771.8,-1822.98 4772.44,-1679.59 4851.36,-1592.2 4897.81,-1540.76 5265.66,-1462.98 5534.67,-1411.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5535.14,-1414.52 5542.02,-1410.54 5534.16,-1409.36 5535.14,-1414.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4851.36,-1670.8 4851.36,-1693.6 4878.35,-1693.6 4878.35,-1670.8 4851.36,-1670.8"/>
<text xml:space="preserve" text-anchor="start" x="4854.36" y="-1679" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- asset_processing&#45;&gt;asset_generation -->
<g id="edge48" class="edge">
<title>asset_processing&#45;&gt;asset_generation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1622.09,-1915.03C1661.46,-1888.05 1705.12,-1858.58 1745.65,-1832.2 1773.18,-1814.28 1802.74,-1795.56 1831.4,-1777.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1832.71,-1779.96 1837.69,-1773.77 1829.94,-1775.5 1832.71,-1779.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1745.65,-1832.2 1745.65,-1855 1903.35,-1855 1903.35,-1832.2 1745.65,-1832.2"/>
<text xml:space="preserve" text-anchor="start" x="1748.65" y="-1838" font-family="Arial" font-size="14.00" fill="#c9c9c9">只读原子执行交付的具名字节</text>
</g>
<!-- view_service&#45;&gt;entities -->
<g id="edge50" class="edge">
<title>view_service&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5165.76,-1592.43C5122.93,-1553.83 5079.79,-1504.74 5056.97,-1449.4 5026.47,-1375.44 5014.32,-1337.09 5056.97,-1269.4 5102.87,-1196.54 5178.71,-1146.08 5256.91,-1111.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5257.85,-1113.8 5263.68,-1108.39 5255.76,-1108.98 5257.85,-1113.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5056.97,-1348 5056.97,-1370.8 5296.35,-1370.8 5296.35,-1348 5056.97,-1348"/>
<text xml:space="preserve" text-anchor="start" x="5059.97" y="-1353.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图主动读取实体；派生结果经实体入口交付</text>
</g>
<!-- view_service&#45;&gt;conversion -->
<g id="edge49" class="edge">
<title>view_service&#45;&gt;conversion</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5435.39,-1592.27C5506.72,-1549.41 5592.29,-1498 5664.72,-1454.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5665.81,-1456.9 5670.89,-1450.79 5663.11,-1452.4 5665.81,-1456.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5570.36,-1509.4 5570.36,-1532.2 5728.06,-1532.2 5728.06,-1509.4 5570.36,-1509.4"/>
<text xml:space="preserve" text-anchor="start" x="5573.36" y="-1515.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图唯一驱动转换与缓存释放</text>
</g>
<!-- asset_generation&#45;&gt;config -->
<g id="edge53" class="edge">
<title>asset_generation&#45;&gt;config</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1743.22,-1592.27C1599.31,-1539.62 1420.1,-1474.07 1288.99,-1426.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1290.03,-1423.7 1282.08,-1423.59 1288.23,-1428.63 1290.03,-1423.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1574.14,-1509.4 1574.14,-1532.2 1601.14,-1532.2 1601.14,-1509.4 1574.14,-1509.4"/>
<text xml:space="preserve" text-anchor="start" x="1577.14" y="-1517.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- conversion&#45;&gt;script -->
<g id="edge55" class="edge">
<title>conversion&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6097.64,-1417.14C6372.25,-1473.72 6774.2,-1557.12 6929.35,-1592.2 6962.29,-1599.65 6996.84,-1607.72 7031.01,-1615.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7030.27,-1618.37 7038.17,-1617.55 7031.48,-1613.26 7030.27,-1618.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6638.8,-1509.4 6638.8,-1532.2 6665.79,-1532.2 6665.79,-1509.4 6638.8,-1509.4"/>
<text xml:space="preserve" text-anchor="start" x="6641.8" y="-1517.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- conversion&#45;&gt;project_model -->
<g id="edge56" class="edge">
<title>conversion&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5940.99,-1269.6C6004.41,-1211.66 6069.35,-1129.82 6069.35,-1037.6 6069.35,-1037.6 6069.35,-1037.6 6069.35,-390 6069.35,-225.78 6562.36,-145.38 6862.87,-111.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6862.86,-114.27 6870.02,-110.83 6862.28,-109.05 6862.86,-114.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6069.35,-702.4 6069.35,-725.2 6096.34,-725.2 6096.34,-702.4 6069.35,-702.4"/>
<text xml:space="preserve" text-anchor="start" x="6072.35" y="-710.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- conversion&#45;&gt;entities -->
<g id="edge54" class="edge">
<title>conversion&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5743.73,-1269.47C5707.08,-1227.48 5663.27,-1177.29 5625.8,-1134.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5627.78,-1132.63 5620.87,-1128.71 5623.83,-1136.09 5627.78,-1132.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5689.74,-1186.6 5689.74,-1209.4 5716.74,-1209.4 5716.74,-1186.6 5689.74,-1186.6"/>
<text xml:space="preserve" text-anchor="start" x="5692.74" y="-1194.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- semantic&#45;&gt;analysis -->
<g id="edge62" class="edge">
<title>semantic&#45;&gt;analysis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7332.48,-623.87C7451.05,-580.49 7593.59,-528.35 7713.44,-484.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7714.14,-487.05 7720.28,-482.01 7712.34,-482.12 7714.14,-487.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7554.14,-541 7554.14,-563.8 7641.83,-563.8 7641.83,-541 7554.14,-541"/>
<text xml:space="preserve" text-anchor="start" x="7557.14" y="-546.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">符号表与调用图</text>
</g>
<!-- semantic&#45;&gt;script -->
<g id="edge63" class="edge">
<title>semantic&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7133.7,-803.6C7142.17,-823.08 7150.28,-843.86 7156.35,-863.8 7233.26,-1116.45 7271.33,-1426.81 7286.72,-1582.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7284.06,-1582.19 7287.41,-1589.39 7289.29,-1581.67 7284.06,-1582.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7235.21,-1186.6 7235.21,-1209.4 7262.2,-1209.4 7262.2,-1186.6 7235.21,-1186.6"/>
<text xml:space="preserve" text-anchor="start" x="7238.21" y="-1194.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- semantic&#45;&gt;project_model -->
<g id="edge64" class="edge">
<title>semantic&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7089.35,-624.04C7089.35,-509.19 7089.35,-309.68 7089.35,-190.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7091.97,-190.3 7089.35,-182.8 7086.72,-190.3 7091.97,-190.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7089.35,-379.6 7089.35,-402.4 7188.7,-402.4 7188.7,-379.6 7089.35,-379.6"/>
<text xml:space="preserve" text-anchor="start" x="7092.35" y="-385.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">工程逻辑快照合同</text>
</g>
</g>
</svg>
`;case`workspace_services`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="5087pt" height="2863pt"
 viewBox="0.00 0.00 5087.00 2863.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2847.85)">
<g id="clust1" class="cluster">
<title>cluster_host</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2897.27,-2559.6 2897.27,-2824.8 3457.27,-2824.8 3457.27,-2559.6 2897.27,-2559.6"/>
<text xml:space="preserve" text-anchor="start" x="2905.27" y="-2811.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">工作区 HOST</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_conversion</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1727.27,-928.4 1727.27,-1532.4 2945.27,-1532.4 2945.27,-928.4 1727.27,-928.4"/>
<text xml:space="preserve" text-anchor="start" x="1735.27" y="-1519.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">仅缓存状态的转换服务</text>
</g>
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3425.71,-2771.6 2928.82,-2771.6 2928.82,-2591.6 3425.71,-2591.6 3425.71,-2771.6"/>
<text xml:space="preserve" text-anchor="start" x="3087.25" y="-2702.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 组合根与受控入口</text>
<text xml:space="preserve" text-anchor="start" x="2998.86" y="-2679.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一 Effect ManagedRuntime；工作区服务通过原生 Layer</text>
<text xml:space="preserve" text-anchor="start" x="2948.88" y="-2661.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享装配，请求和快照绑定 Host Scope；受控入口接收具名请求与取消信号，由</text>
<text xml:space="preserve" text-anchor="start" x="3059.74" y="-2643.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host 主动分派，工程状态经实体层读取。</text>
</g>
<!-- ts -->
<g id="node2" class="node">
<title>ts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2269.62,-1471.2 1766.92,-1471.2 1766.92,-1291.2 2269.62,-1291.2 2269.62,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1924.92" y="-1402.2" font-family="Arial" font-size="20.00" fill="#eff6ff">零件与 TS 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="1832.81" y="-1379.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">内部零件实体与 TS 视图双向转换，消费实体携带的完整 Context</text>
<text xml:space="preserve" text-anchor="start" x="1815.29" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式语义依据；共享 Canvas 服务完成内联双向转换；工作区 Scope</text>
<text xml:space="preserve" text-anchor="start" x="1786.97" y="-1343.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">仅持有按零件路径归属的官方 AST 与片段状态，视图层统一驱动更新、删除与释放</text>
</g>
<!-- html -->
<g id="node3" class="node">
<title>html</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2904.87,-1471.2 2379.66,-1471.2 2379.66,-1291.2 2904.87,-1291.2 2904.87,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="2495.01" y="-1420.2" font-family="Arial" font-size="20.00" fill="#eff6ff">独立 Canvas 与 HTML 视图双向转换</text>
<text xml:space="preserve" text-anchor="start" x="2460.12" y="-1397.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">工作区 Layer 取得共享 CanvasConversion，无状态组合独立</text>
<text xml:space="preserve" text-anchor="start" x="2399.71" y="-1379.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 实体与视图相对路径，复用既有片段转换及固定文档壳交付完整 HTML/XML</text>
<text xml:space="preserve" text-anchor="start" x="2447.23" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图；反向读取当前文本并保持原实体身份、来源及完整基准。Views</text>
<text xml:space="preserve" text-anchor="start" x="2423.46" y="-1343.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一调度交付与持久化；缓存、资源读取和 Scope 由共享服务拥有，PNG 由</text>
<text xml:space="preserve" text-anchor="start" x="2548.9" y="-1325.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Preview/Renderer 独立交付。</text>
</g>
<!-- canvas -->
<g id="node4" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2235.46,-1148.4 1801.08,-1148.4 1801.08,-968.4 2235.46,-968.4 2235.46,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1890.46" y="-1079.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 与 HTML 片段双向转换</text>
<text xml:space="preserve" text-anchor="start" x="1886.13" y="-1056.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Canvas 实体、Base64 与 Hjson 和 HTML</text>
<text xml:space="preserve" text-anchor="start" x="1821.13" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">片段六向互转；资源读取经实体层，唯一原生 Effect Cache 归工作区</text>
<text xml:space="preserve" text-anchor="start" x="1896.98" y="-1020.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope，按方向、输入和实际资源指纹失效</text>
</g>
<!-- diagnostics -->
<g id="node5" class="node">
<title>diagnostics</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="478.53,-1148.4 0,-1148.4 0,-968.4 478.53,-968.4 478.53,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="205.93" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">诊断业务</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">按受控入口读取实体结果与纯分析、Lint，持有诊断结果；当前为 TODO 骨架</text>
</g>
<!-- preview -->
<g id="node6" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4575.78,-1148.4 4094.75,-1148.4 4094.75,-968.4 4575.78,-968.4 4575.78,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="4265.24" y="-1079.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 预览业务</text>
<text xml:space="preserve" text-anchor="start" x="4114.81" y="-1056.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收具名 HTML 视图、viewport、固定字体与显式时间及组合根注入的 CPU</text>
<text xml:space="preserve" text-anchor="start" x="4132.3" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">后端；只读实体资源与调色板，调用唯一 renderer，交付源身份、PNG</text>
<text xml:space="preserve" text-anchor="start" x="4116.47" y="-1020.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">结果和完整读取基准。工作区独立拥有预览缓存，不参与视图刷新或文件写出。</text>
</g>
<!-- assets -->
<g id="node7" class="node">
<title>assets</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2466.97,-2448.8 1867.56,-2448.8 1867.56,-2268.8 2466.97,-2268.8 2466.97,-2448.8"/>
<text xml:space="preserve" text-anchor="start" x="2092.25" y="-2397.8" font-family="Arial" font-size="20.00" fill="#eff6ff">资产任务与确认业务</text>
<text xml:space="preserve" text-anchor="start" x="2113.91" y="-2374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">同一 Host Scope</text>
<text xml:space="preserve" text-anchor="start" x="1969.66" y="-2356.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有跨请求任务标识、pending→running→ready/failed/canceled</text>
<text xml:space="preserve" text-anchor="start" x="1990.14" y="-2338.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">状态、有界调度及候选关联；ready 经成功入库或丢弃分别进入</text>
<text xml:space="preserve" text-anchor="start" x="1980.96" y="-2320.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">confirmed/discarded，写入成功或部分写入失败后重读失败进入</text>
<text xml:space="preserve" text-anchor="start" x="1887.62" y="-2302.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">reconciling，实际状态重建后核对身份与候选内容，或显式丢弃候选并保留写入事实。并发执行上限</text>
</g>
<!-- editing -->
<g id="node8" class="node">
<title>editing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2810.72,-2126 2263.81,-2126 2263.81,-1946 2810.72,-1946 2810.72,-2126"/>
<text xml:space="preserve" text-anchor="start" x="2503.93" y="-2066" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑业务</text>
<text xml:space="preserve" text-anchor="start" x="2283.87" y="-2043" font-family="Arial" font-size="15.00" fill="#bfdbfe">读取视图原文或快速重构意图与完整基准，按输入反向转换或读取结构化语义，以 Change</text>
<text xml:space="preserve" text-anchor="start" x="2407.21" y="-2025" font-family="Arial" font-size="15.00" fill="#bfdbfe">Plan 形成统一 EntityChange/Schematics</text>
<text xml:space="preserve" text-anchor="start" x="2336.39" y="-2007" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选，校验后经实体提交；提交后实体重读实际文件，由 Host 主动调用</text>
<text xml:space="preserve" text-anchor="start" x="2433.08" y="-1989" font-family="Arial" font-size="15.00" fill="#bfdbfe">Views。TODO：编辑与重构编排。</text>
</g>
<!-- view_service -->
<g id="node9" class="node">
<title>view_service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3264.55,-1803.2 2555.98,-1803.2 2555.98,-1623.2 3264.55,-1623.2 3264.55,-1803.2"/>
<text xml:space="preserve" text-anchor="start" x="2818.58" y="-1743.2" font-family="Arial" font-size="20.00" fill="#eff6ff">第三层：视图关联与交付</text>
<text xml:space="preserve" text-anchor="start" x="2714.81" y="-1720.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">由 Host 主动驱动刷新的派生视图关联与交付服务：files 与 memory</text>
<text xml:space="preserve" text-anchor="start" x="2744.82" y="-1702.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">共享监听、实体重读和影响计算前缀；结果阶段分支为 files</text>
<text xml:space="preserve" text-anchor="start" x="2795.66" y="-1684.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">经实体层发布或纠偏派生文件，memory</text>
<text xml:space="preserve" text-anchor="start" x="2576.04" y="-1666.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">短路所有派生写入并在具名请求时交付内存视图。缓存归转换服务，源数据与派生数据隔离。TODO：影响计算与交付。</text>
</g>
<!-- entities -->
<g id="node10" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3496.4,-825.6 2946.14,-825.6 2946.14,-645.6 3496.4,-645.6 3496.4,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="3154.59" y="-774.6" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层：工程实体</text>
<text xml:space="preserve" text-anchor="start" x="3026.24" y="-751.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">工程文件是唯一权威；本层从文件重读形成 MST 工作区快照、GUID</text>
<text xml:space="preserve" text-anchor="start" x="3016.22" y="-733.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">和声明关联，调用语义装配形成格式实体和完整读取基准。FormatEntity</text>
<text xml:space="preserve" text-anchor="start" x="2966.19" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">是全部格式及派生视图实体的共同抽象根；DeviceEntity、ScriptEntity、CanvasEntity</text>
<text xml:space="preserve" text-anchor="start" x="3085.82" y="-697.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 ToolkitEntity 直接继承，TS/HTML 视图经</text>
<text xml:space="preserve" text-anchor="start" x="3180.42" y="-679.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">ToolkitEntity</text>
</g>
<!-- files -->
<g id="node11" class="node">
<title>files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3528.88,-502.8 2913.65,-502.8 2913.65,-322.8 3528.88,-322.8 3528.88,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="3129.58" y="-442.8" font-family="Arial" font-size="20.00" fill="#eff6ff">第一层：文件管理与监听</text>
<text xml:space="preserve" text-anchor="start" x="2933.71" y="-419.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有唯一工程根并提供原始字节、实际元数据、目录枚举及四类文件变更原语；实体层唯一编排工程业务</text>
<text xml:space="preserve" text-anchor="start" x="3013.29" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">IO。仅有一份工作区 Effect Cache 管理有界字节内容，键为含 revision</text>
<text xml:space="preserve" text-anchor="start" x="3019.95" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">的 FileMetadata；Chokidar 提供实际变化目录批次；Host 在工作区</text>
<text xml:space="preserve" text-anchor="start" x="3029.13" y="-365.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Scope 内装配并单一消费监听，文件层不解析实体或驱动上层业务。</text>
</g>
<!-- analysis -->
<g id="node12" class="node">
<title>analysis</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1421.71,-180 854.82,-180 854.82,0 1421.71,0 1421.71,-180"/>
<text xml:space="preserve" text-anchor="start" x="1071.59" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">纯符号表与调用图</text>
<text xml:space="preserve" text-anchor="start" x="1044.9" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">基于实体快照、第一层 LocalAst</text>
<text xml:space="preserve" text-anchor="start" x="874.88" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">和显式平台语义生成零件方法符号表和调用图；平台输入由同一 SDK 文档提供，不消费第二层</text>
<text xml:space="preserve" text-anchor="start" x="1079.08" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Context 或转换依据</text>
</g>
<!-- change_plan -->
<g id="node13" class="node">
<title>change_plan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1687.6,-1148.4 588.93,-1148.4 588.93,-968.4 1687.6,-968.4 1687.6,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1079.92" y="-1097.4" font-family="Arial" font-size="20.00" fill="#eff6ff">变更计划纯计算</text>
<text xml:space="preserve" text-anchor="start" x="1035.74" y="-1074.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图编辑、重命名、脚本与 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="608.99" y="-1056.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing</text>
<text xml:space="preserve" text-anchor="start" x="1028.65" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用 Entities 物化内存候选，Entities</text>
<text xml:space="preserve" text-anchor="start" x="1015.31" y="-1020.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">从候选及未改变依赖准备语义输入，Editing</text>
<text xml:space="preserve" text-anchor="start" x="888.63" y="-1002.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</text>
</g>
<!-- semantic -->
<g id="node14" class="node">
<title>semantic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2452.37,-502.8 1962.17,-502.8 1962.17,-322.8 2452.37,-322.8 2452.37,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2140.59" y="-451.8" font-family="Arial" font-size="20.00" fill="#eff6ff">语义装配（设计）</text>
<text xml:space="preserve" text-anchor="start" x="1998.46" y="-428.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">由实体层单侧调用的无状态纯装配：SdkDocument 以同一结构化 JSON</text>
<text xml:space="preserve" text-anchor="start" x="2055.98" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">合同导入导出平台数据与文档，SemanticAssembly</text>
<text xml:space="preserve" text-anchor="start" x="1985.55" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">消费同次工程逻辑快照、符号及调用分析和该平台数据，输出完整零件 Context</text>
<text xml:space="preserve" text-anchor="start" x="2100.15" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">和转换依据。复用既有身份、Context</text>
<text xml:space="preserve" text-anchor="start" x="1982.22" y="-356.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">及转换类型；部署资源读取归宿主组合根，工程读取和依赖基准归实体层，不执行</text>
</g>
<!-- logic&#45;&gt;ts -->
<g id="edge6" class="edge">
<title>logic&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2929.2,-2657.92C2466.95,-2612.29 1520.27,-2501.55 1520.27,-2359.8 1520.27,-2359.8 1520.27,-2359.8 1520.27,-1712.2 1520.27,-1583.57 1637.14,-1502.12 1757.65,-1452.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1758.31,-1454.89 1764.27,-1449.64 1756.34,-1450.03 1758.31,-1454.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1520.27,-2024.6 1520.27,-2047.4 1797,-2047.4 1797,-2024.6 1520.27,-2024.6"/>
<text xml:space="preserve" text-anchor="start" x="1523.27" y="-2030.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 仅装配；缓存由视图驱动</text>
</g>
<!-- logic&#45;&gt;html -->
<g id="edge7" class="edge">
<title>logic&#45;&gt;html</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3259.72,-2591.63C3387.33,-2442.67 3608.54,-2132.62 3513.27,-1863.2 3425.92,-1616.19 3136.35,-1493.04 2914.83,-1433.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2915.51,-1431.14 2907.59,-1431.76 2914.16,-1436.22 2915.51,-1431.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3536.43,-2024.6 3536.43,-2047.4 3789.04,-2047.4 3789.04,-2024.6 3536.43,-2024.6"/>
<text xml:space="preserve" text-anchor="start" x="3539.43" y="-2030.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 仅装配 HTML 转换</text>
</g>
<!-- logic&#45;&gt;canvas -->
<g id="edge8" class="edge">
<title>logic&#45;&gt;canvas</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2929.07,-2665.23C2404.15,-2629.39 1229.27,-2530.16 1229.27,-2359.8 1229.27,-2359.8 1229.27,-2359.8 1229.27,-1380.2 1229.27,-1349.64 1558.36,-1224.75 1791.47,-1140.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1792.1,-1142.68 1798.26,-1137.65 1790.31,-1137.74 1792.1,-1142.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1229.27,-1863.2 1229.27,-1886 1459.32,-1886 1459.32,-1863.2 1229.27,-1863.2"/>
<text xml:space="preserve" text-anchor="start" x="1232.27" y="-1869" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 仅装配共享转换</text>
</g>
<!-- logic&#45;&gt;diagnostics -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;diagnostics</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2929,-2676.2C2272.05,-2661.28 538.27,-2599.22 538.27,-2359.8 538.27,-2359.8 538.27,-2359.8 538.27,-1380.2 538.27,-1287.28 470.31,-1210.05 399.19,-1154.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="400.91,-1152.67 393.36,-1150.19 397.72,-1156.84 400.91,-1152.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="538.27,-1863.2 538.27,-1886 815,-1886 815,-1863.2 538.27,-1863.2"/>
<text xml:space="preserve" text-anchor="start" x="541.27" y="-1869" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 装配诊断与受控业务入口</text>
</g>
<!-- logic&#45;&gt;preview -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;preview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3425.46,-2665.09C3780.04,-2636.02 4389.27,-2557.33 4389.27,-2359.8 4389.27,-2359.8 4389.27,-2359.8 4389.27,-1380.2 4389.27,-1305.01 4374.66,-1221.27 4360.64,-1158.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4363.28,-1157.95 4359.07,-1151.22 4358.16,-1159.11 4363.28,-1157.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4389.27,-1863.2 4389.27,-1886 4713.45,-1886 4713.45,-1863.2 4389.27,-1863.2"/>
<text xml:space="preserve" text-anchor="start" x="4392.27" y="-1869" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 装配预览；Host.ts 提交渲染命令</text>
</g>
<!-- logic&#45;&gt;assets -->
<g id="edge3" class="edge">
<title>logic&#45;&gt;assets</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2929.01,-2659.11C2706.91,-2636.23 2400.89,-2594.54 2297.18,-2531.6 2267.07,-2513.32 2241.53,-2485.23 2221.27,-2457.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2223.61,-2455.8 2217.16,-2451.16 2219.31,-2458.81 2223.61,-2455.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2297.18,-2508.8 2297.18,-2531.6 2604.27,-2531.6 2604.27,-2508.8 2297.18,-2508.8"/>
<text xml:space="preserve" text-anchor="start" x="2300.18" y="-2514.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">同一 Workspace Layer 装配，Host 分发具名资产命令</text>
</g>
<!-- logic&#45;&gt;editing -->
<g id="edge4" class="edge">
<title>logic&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2970.85,-2591.7C2901.25,-2554.72 2826.89,-2506.74 2770.08,-2448.8 2677.02,-2353.88 2693.38,-2301.32 2627.27,-2186 2617.67,-2169.26 2607.25,-2151.59 2597.03,-2134.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2599.38,-2133.32 2593.27,-2128.23 2594.88,-2136.02 2599.38,-2133.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2770.08,-2347.4 2770.08,-2370.2 3094.27,-2370.2 3094.27,-2347.4 2770.08,-2347.4"/>
<text xml:space="preserve" text-anchor="start" x="2773.08" y="-2353.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">WorkspaceServices.ts 装配编辑；Host.ts 提交业务命令</text>
</g>
<!-- logic&#45;&gt;view_service -->
<g id="edge5" class="edge">
<title>logic&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3173.8,-2591.67C3164.81,-2436.8 3132.69,-2110.53 3018.27,-1863.2 3010.16,-1845.67 2999.85,-1828.11 2988.84,-1811.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2991.11,-1810.17 2984.73,-1805.43 2986.76,-1813.11 2991.11,-1810.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3124.65,-2186 3124.65,-2208.8 3395.94,-2208.8 3395.94,-2186 3124.65,-2186"/>
<text xml:space="preserve" text-anchor="start" x="3127.65" y="-2191.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Host 主动驱动视图；WorkspaceServices 装配</text>
</g>
<!-- logic&#45;&gt;entities -->
<g id="edge9" class="edge">
<title>logic&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3425.51,-2624.19C3644.23,-2567.07 3928.27,-2471.41 3928.27,-2359.8 3928.27,-2359.8 3928.27,-2359.8 3928.27,-1057.4 3928.27,-862.57 3702.86,-785.48 3506.59,-755.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3507.18,-752.72 3499.38,-754.2 3506.4,-757.91 3507.18,-752.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3928.27,-1701.8 3928.27,-1724.6 4222.89,-1724.6 4222.89,-1701.8 3928.27,-1701.8"/>
<text xml:space="preserve" text-anchor="start" x="3931.27" y="-1707.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Host 主动重读实体；WorkspaceServices 读取状态</text>
</g>
<!-- logic&#45;&gt;files -->
<g id="edge10" class="edge">
<title>logic&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3425.48,-2656.07C3874.2,-2608.34 4774.27,-2495.67 4774.27,-2359.8 4774.27,-2359.8 4774.27,-2359.8 4774.27,-734.6 4774.27,-484.68 3993.18,-427.9 3538.89,-416"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3539.14,-413.39 3531.58,-415.82 3539.01,-418.63 3539.14,-413.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4774.27,-1540.4 4774.27,-1563.2 5057.21,-1563.2 5057.21,-1540.4 4774.27,-1540.4"/>
<text xml:space="preserve" text-anchor="start" x="4777.27" y="-1546.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Host 装配并单一消费文件变化；工程业务 IO 归实体</text>
</g>
<!-- ts&#45;&gt;canvas -->
<g id="edge25" class="edge">
<title>ts&#45;&gt;canvas</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2002.8,-1291.41C1999.97,-1271.65 1997.46,-1250.76 1996,-1231.2 1994.26,-1207.69 1995.67,-1182.46 1998.47,-1158.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2001.07,-1159.15 1999.41,-1151.38 1995.86,-1158.49 2001.07,-1159.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1996,-1208.4 1996,-1231.2 2127.27,-1231.2 2127.27,-1208.4 1996,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1999" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">内部 Canvas 双向转换</text>
</g>
<!-- ts&#45;&gt;entities -->
<g id="edge26" class="edge">
<title>ts&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2269.61,-1307.33C2333.59,-1283.99 2390.26,-1257.38 2411.27,-1231.2 2496.37,-1125.14 2364.02,-1029.3 2455.19,-928.4 2520.04,-856.63 2746.13,-805.71 2936.02,-774.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2936.21,-777.08 2943.19,-773.28 2935.36,-771.9 2936.21,-777.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2455.19,-1047 2455.19,-1069.8 2846.27,-1069.8 2846.27,-1047 2455.19,-1047"/>
<text xml:space="preserve" text-anchor="start" x="2458.19" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">转换读取原版零件及基准，具名视图保留源身份，反向结果由原版实体交付</text>
</g>
<!-- html&#45;&gt;canvas -->
<g id="edge27" class="edge">
<title>html&#45;&gt;canvas</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2469.28,-1291.27C2385.67,-1248.28 2285.32,-1196.69 2200.53,-1153.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2201.88,-1150.85 2194.01,-1149.75 2199.48,-1155.52 2201.88,-1150.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2348.98,-1208.4 2348.98,-1231.2 2495,-1231.2 2495,-1208.4 2348.98,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="2351.98" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享片段服务的工作区装配</text>
</g>
<!-- html&#45;&gt;entities -->
<g id="edge28" class="edge">
<title>html&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2734.25,-1291.33C2777.31,-1248.87 2828.8,-1196.85 2873.27,-1148.4 2969.38,-1043.69 3073.92,-918.31 3143.06,-833.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3145.02,-835.37 3147.73,-827.9 3140.96,-832.06 3145.02,-835.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3060.82,-1047 3060.82,-1069.8 3203.75,-1069.8 3203.75,-1047 3060.82,-1047"/>
<text xml:space="preserve" text-anchor="start" x="3063.82" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">独立 Canvas 与视图实体</text>
</g>
<!-- canvas&#45;&gt;entities -->
<g id="edge29" class="edge">
<title>canvas&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2121.45,-968.5C2162.48,-937.59 2211.68,-905.67 2261.25,-885.6 2477.33,-798.11 2739.92,-761.66 2935.82,-746.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2935.97,-749.26 2943.25,-746.08 2935.58,-744.03 2935.97,-749.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2261.25,-885.6 2261.25,-908.4 2372.27,-908.4 2372.27,-885.6 2261.25,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="2264.25" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">实体输入与资源依赖</text>
</g>
<!-- diagnostics&#45;&gt;entities -->
<g id="edge11" class="edge">
<title>diagnostics&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M416.04,-968.53C454.2,-952.65 494.92,-938.1 534.27,-928.4 982.94,-817.77 2340.07,-763.65 2935.75,-744.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2935.77,-747.34 2943.18,-744.48 2935.6,-742.09 2935.77,-747.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="750.74,-885.6 750.74,-908.4 873.43,-908.4 873.43,-885.6 750.74,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="753.74" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">诊断主动读取实体快照</text>
</g>
<!-- diagnostics&#45;&gt;analysis -->
<g id="edge12" class="edge">
<title>diagnostics&#45;&gt;analysis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M321.83,-968.65C490.62,-787.2 873.96,-375.12 1048.6,-187.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1050.49,-189.21 1053.67,-181.93 1046.64,-185.64 1050.49,-189.21"/>
</g>
<!-- preview&#45;&gt;entities -->
<g id="edge13" class="edge">
<title>preview&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4190.32,-968.55C4135.81,-938.4 4072.26,-906.97 4011.27,-885.6 3848.54,-828.59 3658.9,-791.9 3506.21,-769.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3507.01,-766.67 3499.2,-768.17 3506.24,-771.86 3507.01,-766.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4067.03,-885.6 4067.03,-908.4 4166.38,-908.4 4166.38,-885.6 4067.03,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="4070.03" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">预览只读实体资源</text>
</g>
<!-- assets&#45;&gt;editing -->
<g id="edge14" class="edge">
<title>assets&#45;&gt;editing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2269.28,-2269.02C2299.99,-2242.31 2333.8,-2212.95 2364.89,-2186 2384.77,-2168.77 2405.95,-2150.43 2426.42,-2132.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2427.98,-2134.86 2431.93,-2127.96 2424.54,-2130.88 2427.98,-2134.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2364.89,-2186 2364.89,-2208.8 2604.27,-2208.8 2604.27,-2186 2364.89,-2186"/>
<text xml:space="preserve" text-anchor="start" x="2367.89" y="-2191.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">明确确认准备候选并提交，返回实际资源身份</text>
</g>
<!-- editing&#45;&gt;ts -->
<g id="edge17" class="edge">
<title>editing&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2393.53,-1946.08C2338.34,-1907.06 2277.75,-1857.7 2232.25,-1803.2 2150.51,-1705.28 2089.09,-1570.88 2053.48,-1480.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2055.96,-1479.66 2050.79,-1473.63 2051.07,-1481.58 2055.96,-1479.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2232.25,-1701.8 2232.25,-1724.6 2308.27,-1724.6 2308.27,-1701.8 2232.25,-1701.8"/>
<text xml:space="preserve" text-anchor="start" x="2235.25" y="-1707.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图反向转换</text>
</g>
<!-- editing&#45;&gt;html -->
<g id="edge18" class="edge">
<title>editing&#45;&gt;html</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2452.93,-1946.05C2420.33,-1905.7 2386.87,-1855.38 2370,-1803.2 2334.09,-1692.04 2313.76,-1640.32 2374.27,-1540.4 2388.85,-1516.32 2408.59,-1495.49 2430.8,-1477.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2432.4,-1479.66 2436.7,-1472.98 2429.17,-1475.52 2432.4,-1479.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2370,-1701.8 2370,-1724.6 2501.27,-1724.6 2501.27,-1701.8 2370,-1701.8"/>
<text xml:space="preserve" text-anchor="start" x="2373" y="-1707.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">独立 Canvas 反向转换</text>
</g>
<!-- editing&#45;&gt;view_service -->
<g id="edge15" class="edge">
<title>editing&#45;&gt;view_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2640.67,-1946.07C2689.89,-1903.73 2748.82,-1853.06 2799.01,-1809.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2800.71,-1811.88 2804.69,-1805 2797.29,-1807.9 2800.71,-1811.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2734.95,-1863.2 2734.95,-1886 2991.45,-1886 2991.45,-1863.2 2734.95,-1863.2"/>
<text xml:space="preserve" text-anchor="start" x="2737.95" y="-1869" font-family="Arial" font-size="14.00" fill="#c9c9c9">只读取具名视图；提交后的派生刷新由Host驱动</text>
</g>
<!-- editing&#45;&gt;entities -->
<g id="edge19" class="edge">
<title>editing&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2810.71,-2019.44C2978.71,-1995.67 3186.48,-1938.49 3319.27,-1803.2 3510.86,-1607.99 3535.95,-1475.55 3477.27,-1208.4 3446.34,-1067.62 3359.34,-924.73 3295.3,-833.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3297.6,-832.37 3291.12,-827.76 3293.31,-835.4 3297.6,-832.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3505.23,-1369.8 3505.23,-1392.6 3662.93,-1392.6 3662.93,-1369.8 3505.23,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="3508.23" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">编辑候选经唯一实体入口提交</text>
</g>
<!-- editing&#45;&gt;change_plan -->
<g id="edge16" class="edge">
<title>editing&#45;&gt;change_plan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2354.67,-1946.01C2273.38,-1904.79 2177.24,-1853.8 2093.27,-1803.2 1761.75,-1603.46 1412.96,-1306.16 1243.33,-1155.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1245.24,-1153.23 1237.9,-1150.19 1241.75,-1157.14 1245.24,-1153.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1734.29,-1540.4 1734.29,-1563.2 1845.31,-1563.2 1845.31,-1540.4 1734.29,-1540.4"/>
<text xml:space="preserve" text-anchor="start" x="1737.29" y="-1546.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">统一变更计划与候选</text>
</g>
<!-- view_service&#45;&gt;ts -->
<g id="edge20" class="edge">
<title>view_service&#45;&gt;ts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2587.75,-1623.28C2501.22,-1596.71 2408.37,-1565.7 2324.27,-1532.4 2282.19,-1515.74 2237.95,-1495.63 2196.59,-1475.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2197.87,-1473.33 2189.98,-1472.41 2195.58,-1478.05 2197.87,-1473.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2402.23,-1540.4 2402.23,-1563.2 2559.92,-1563.2 2559.92,-1540.4 2402.23,-1540.4"/>
<text xml:space="preserve" text-anchor="start" x="2405.23" y="-1546.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图唯一驱动转换与缓存释放</text>
</g>
<!-- view_service&#45;&gt;html -->
<g id="edge21" class="edge">
<title>view_service&#45;&gt;html</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2838.09,-1623.33C2801.9,-1578.76 2757.99,-1524.7 2720.93,-1479.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2723.01,-1477.46 2716.24,-1473.29 2718.93,-1480.77 2723.01,-1477.46"/>
</g>
<!-- view_service&#45;&gt;entities -->
<g id="edge22" class="edge">
<title>view_service&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2980.25,-1623.42C3058.91,-1517.45 3181.93,-1331.49 3230.27,-1148.4 3257.73,-1044.36 3249.8,-920.35 3238.59,-835.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3241.2,-835.5 3237.59,-828.42 3236,-836.21 3241.2,-835.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3210.42,-1208.4 3210.42,-1231.2 3449.79,-1231.2 3449.79,-1208.4 3210.42,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="3213.42" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">视图主动读取实体；派生结果经实体入口交付</text>
</g>
<!-- entities&#45;&gt;files -->
<g id="edge30" class="edge">
<title>entities&#45;&gt;files</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3221.27,-645.67C3221.27,-604.47 3221.27,-555.36 3221.27,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3223.89,-513.16 3221.27,-505.66 3218.64,-513.16 3223.89,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3221.27,-562.8 3221.27,-585.6 3479.31,-585.6 3479.31,-562.8 3221.27,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="3224.27" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">实体层唯一业务 IO；读取与提交分别授权到文件</text>
</g>
<!-- entities&#45;&gt;semantic -->
<g id="edge31" class="edge">
<title>entities&#45;&gt;semantic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2946.19,-647.58C2795.26,-599.82 2609.37,-541.01 2461.8,-494.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2462.96,-491.94 2455.02,-492.18 2461.38,-496.95 2462.96,-491.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2744.67,-562.8 2744.67,-585.6 2820.68,-585.6 2820.68,-562.8 2744.67,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2747.67" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">快照语义装配</text>
</g>
<!-- change_plan&#45;&gt;entities -->
<g id="edge23" class="edge">
<title>change_plan&#45;&gt;entities</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1485.71,-968.49C1610.43,-938.91 1752.53,-907.87 1883.2,-885.6 2244.06,-824.11 2664.18,-782.09 2935.99,-758.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2936.14,-761.35 2943.39,-758.1 2935.69,-756.12 2936.14,-761.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1883.2,-885.6 1883.2,-908.4 2190.27,-908.4 2190.27,-885.6 1883.2,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1886.2" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">只引用格式实体和读取基准；不调用实体服务或建立 Tree</text>
</g>
<!-- change_plan&#45;&gt;analysis -->
<g id="edge24" class="edge">
<title>change_plan&#45;&gt;analysis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1138.27,-968.65C1138.27,-788.1 1138.27,-379.19 1138.27,-190.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1140.89,-190.25 1138.27,-182.75 1135.64,-190.25 1140.89,-190.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1138.27,-562.8 1138.27,-585.6 1249.29,-585.6 1249.29,-562.8 1138.27,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1141.27" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">只读符号表与调用图</text>
</g>
<!-- semantic&#45;&gt;analysis -->
<g id="edge32" class="edge">
<title>semantic&#45;&gt;analysis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1962.35,-338.3C1804.32,-290.88 1597.91,-228.94 1431.2,-178.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1432.12,-176.44 1424.18,-176.8 1430.61,-181.47 1432.12,-176.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1704.82,-240 1704.82,-262.8 1792.5,-262.8 1792.5,-240 1704.82,-240"/>
<text xml:space="preserve" text-anchor="start" x="1707.82" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">符号表与调用图</text>
</g>
</g>
</svg>
`;case`frontend`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1535pt" height="1135pt"
 viewBox="0.00 0.00 1535.00 1135.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1119.85)">
<!-- packaging -->
<g id="node1" class="node">
<title>packaging</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="747.14,-1104.8 171.92,-1104.8 171.92,-924.8 747.14,-924.8 747.14,-1104.8"/>
<text xml:space="preserve" text-anchor="start" x="384.52" y="-1035.8" font-family="Arial" font-size="20.00" fill="#eff6ff">扩展清单与构建入口</text>
<text xml:space="preserve" text-anchor="start" x="252.39" y="-1012.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">声明 VS Code ESM 扩展入口、原生配置默认值与 Webview UI；正式</text>
<text xml:space="preserve" text-anchor="start" x="191.98" y="-994.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">VSIX 在顶层构建区装配包内入口、共享运行依赖、WASM、固定字体、语言资源及同树版本的</text>
<text xml:space="preserve" text-anchor="start" x="264.49" y="-976.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Skill，运行时只按扩展位置读取，不依赖开发仓库；不承载领域业务。</text>
</g>
<!-- tests -->
<g id="node2" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1209.87,-1104.8 857.19,-1104.8 857.19,-924.8 1209.87,-924.8 1209.87,-1104.8"/>
<text xml:space="preserve" text-anchor="start" x="941.85" y="-1017.8" font-family="Arial" font-size="20.00" fill="#eff6ff">前端行为与生命周期测试</text>
<text xml:space="preserve" text-anchor="start" x="877.25" y="-994.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">验证前端交互、配置与宿主释放；不建立生产配置副本。</text>
</g>
<!-- plugin -->
<g id="node3" class="node">
<title>plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1074.41,-803.8 576.66,-803.8 576.66,-623.8 1074.41,-623.8 1074.41,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="704.37" y="-752.8" font-family="Arial" font-size="20.00" fill="#eff6ff">VSCode 宿主与 Effect 组合根</text>
<text xml:space="preserve" text-anchor="start" x="714.67" y="-729.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">绑定原生配置、webview 与同一 Host</text>
<text xml:space="preserve" text-anchor="start" x="656.33" y="-711.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">生命周期；组件经具名入口获取和关闭，调用方以 try/finally</text>
<text xml:space="preserve" text-anchor="start" x="596.71" y="-693.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有资源；请求接受具名输入与 AbortSignal，不接收跨模块业务回调。Canvas</text>
<text xml:space="preserve" text-anchor="start" x="629.23" y="-675.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">预览沿用 Host 的 Views、实体资源与唯一 CPU renderer，只展示</text>
<text xml:space="preserve" text-anchor="start" x="639.66" y="-657.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">PNG 和文本，不独立读取或监听工程文件；领域能力交给 Host。</text>
</g>
<!-- language -->
<g id="node4" class="node">
<title>language</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="621.06,-481 0,-481 0,-301 621.06,-301 621.06,-481"/>
<text xml:space="preserve" text-anchor="start" x="210.51" y="-421" font-family="Arial" font-size="20.00" fill="#eff6ff">标准语言服务端口（设计）</text>
<text xml:space="preserve" text-anchor="start" x="101.71" y="-398" font-family="Arial" font-size="15.00" fill="#bfdbfe">VS Code 通过标准 LSP 进程内连接接入同一 Host；connect 接收同一</text>
<text xml:space="preserve" text-anchor="start" x="295.11" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">Host</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-362" font-family="Arial" font-size="15.00" fill="#bfdbfe">与标准客户端选项，接入层拥有标准消息连接和客户端生命周期，不接受外部进程启动或业务回调。Host</text>
<text xml:space="preserve" text-anchor="start" x="210.51" y="-344" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有查询，接入层不持有工程状态。</text>
</g>
<!-- ui -->
<g id="node5" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1426.31,-481 972.76,-481 972.76,-301 1426.31,-301 1426.31,-481"/>
<text xml:space="preserve" text-anchor="start" x="1091.18" y="-394" font-family="Arial" font-size="20.00" fill="#eff6ff">单页侧栏、配置区与展开日志</text>
<text xml:space="preserve" text-anchor="start" x="992.81" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">显示侧栏与配置交互，消费宿主合同；不直接使用 VS Code 或文件 IO。</text>
</g>
<!-- host_client -->
<g id="node6" class="node">
<title>host_client</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1420.04,-180 979.02,-180 979.02,0 1420.04,0 1420.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1124.52" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">只读合同与配置计划</text>
<text xml:space="preserve" text-anchor="start" x="999.07" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供前端通信合同与同一目标的配置、端点和 Skill 范围计划；官方 CLI</text>
<text xml:space="preserve" text-anchor="start" x="1023.24" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">拥有其配置写入，文件目标使用结构化编辑与原子写。新增 CLI</text>
<text xml:space="preserve" text-anchor="start" x="1024.5" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">接入在写入前明确失败；不读取游戏工程实体或管理领域状态。</text>
</g>
<!-- tests&#45;&gt;plugin -->
<g id="edge1" class="edge">
<title>tests&#45;&gt;plugin</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M971.69,-924.9C947.02,-889.44 918.54,-848.51 893.32,-812.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="895.48,-810.76 889.04,-806.1 891.17,-813.76 895.48,-810.76"/>
</g>
<!-- tests&#45;&gt;language -->
<g id="edge2" class="edge">
<title>tests&#45;&gt;language</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M857.41,-943.48C838.98,-936.87 820.45,-930.51 802.53,-924.8 594.86,-858.61 464.5,-973.14 327.27,-803.8 256.82,-716.87 266.19,-582.47 284.16,-491.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="286.69,-491.78 285.61,-483.91 281.54,-490.74 286.69,-491.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="327.27,-702.4 327.27,-725.2 521.53,-725.2 521.53,-702.4 327.27,-702.4"/>
<text xml:space="preserve" text-anchor="start" x="330.27" y="-708.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">真实 Host 验证标准客户端连接骨架</text>
</g>
<!-- tests&#45;&gt;ui -->
<g id="edge3" class="edge">
<title>tests&#45;&gt;ui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1080.41,-924.86C1098.07,-888.21 1116.91,-844.8 1129.53,-803.8 1161.63,-699.51 1180.18,-575.54 1190.02,-491.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1192.61,-491.46 1190.86,-483.71 1187.4,-490.87 1192.61,-491.46"/>
</g>
<!-- tests&#45;&gt;host_client -->
<g id="edge4" class="edge">
<title>tests&#45;&gt;host_client</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1146.43,-925C1257.56,-829.37 1419.37,-665.86 1481.53,-481 1507.03,-405.17 1517.43,-372.49 1481.53,-301 1458.55,-255.23 1420.34,-216.9 1379.35,-186.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1381.15,-184.12 1373.55,-181.78 1378.03,-188.35 1381.15,-184.12"/>
</g>
<!-- plugin&#45;&gt;language -->
<g id="edge5" class="edge">
<title>plugin&#45;&gt;language</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M682.76,-623.87C614.1,-581.1 531.77,-529.81 462.01,-486.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="463.46,-484.17 455.7,-482.43 460.68,-488.62 463.46,-484.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="583.47,-541 583.47,-563.8 705.4,-563.8 705.4,-541 583.47,-541"/>
<text xml:space="preserve" text-anchor="start" x="586.47" y="-546.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">标准 LSP 客户端合同</text>
</g>
<!-- plugin&#45;&gt;ui -->
<g id="edge6" class="edge">
<title>plugin&#45;&gt;ui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M929.21,-623.87C978.67,-581.45 1037.89,-530.65 1088.28,-487.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1089.69,-489.68 1093.67,-482.8 1086.27,-485.69 1089.69,-489.68"/>
</g>
<!-- plugin&#45;&gt;host_client -->
<g id="edge7" class="edge">
<title>plugin&#45;&gt;host_client</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M827.74,-623.99C833.77,-535.62 853.76,-399.34 917.53,-301 946.62,-256.13 988.83,-217.38 1031.76,-185.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1033.08,-188.1 1037.62,-181.57 1030,-183.85 1033.08,-188.1"/>
</g>
<!-- ui&#45;&gt;host_client -->
<g id="edge8" class="edge">
<title>ui&#45;&gt;host_client</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1199.53,-301.1C1199.53,-266.24 1199.53,-226.09 1199.53,-190.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1202.16,-190.34 1199.53,-182.84 1196.91,-190.34 1202.16,-190.34"/>
</g>
</g>
</svg>
`;case`pure_functions`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1129pt" height="510pt"
 viewBox="0.00 0.00 1129.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- change_plan -->
<g id="node1" class="node">
<title>change_plan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1098.67,-480 0,-480 0,-300 1098.67,-300 1098.67,-480"/>
<text xml:space="preserve" text-anchor="start" x="490.99" y="-429" font-family="Arial" font-size="20.00" fill="#eff6ff">变更计划纯计算</text>
<text xml:space="preserve" text-anchor="start" x="446.81" y="-406" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图编辑、重命名、脚本与 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-388" font-family="Arial" font-size="15.00" fill="#bfdbfe">导入导出的无状态纯计算计划。单次同步调用消费同次逻辑快照、完整读取基准、原分析及具名格式编辑、重构意图或实体操作请求，输出既有强类型操作集合、诊断和实际依赖基准。Editing</text>
<text xml:space="preserve" text-anchor="start" x="439.72" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用 Entities 物化内存候选，Entities</text>
<text xml:space="preserve" text-anchor="start" x="426.39" y="-352" font-family="Arial" font-size="15.00" fill="#bfdbfe">从候选及未改变依赖准备语义输入，Editing</text>
<text xml:space="preserve" text-anchor="start" x="299.7" y="-334" font-family="Arial" font-size="15.00" fill="#bfdbfe">调用既有纯分析校验候选的受影响绑定后交付；候选不替换工作区快照或写工程。Entities</text>
</g>
<!-- canvas -->
<g id="node2" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="730.7,-180 367.98,-180 367.98,0 730.7,0 730.7,-180"/>
<text xml:space="preserve" text-anchor="start" x="479.31" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 四向转换</text>
<text xml:space="preserve" text-anchor="start" x="388.03" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">内联 Base64、内联 Hjson、Canvas 二进制与 HTML</text>
<text xml:space="preserve" text-anchor="start" x="486.82" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图之间的无状态转换</text>
</g>
<!-- change_plan&#45;&gt;canvas -->
</g>
</svg>
`;case`canvas`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3617pt" height="2792pt"
 viewBox="0.00 0.00 3617.00 2792.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2777.45)">
<!-- renderer_tests -->
<g id="node1" class="node">
<title>renderer_tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="915.28,-2762.4 0,-2762.4 0,-2582.4 915.28,-2582.4 915.28,-2762.4"/>
<text xml:space="preserve" text-anchor="start" x="387.62" y="-2693.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染测试</text>
<text xml:space="preserve" text-anchor="start" x="260.91" y="-2670.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">在 Node 中验证软件 surface 的实际 PNG 像素、重复编码、Spine</text>
<text xml:space="preserve" text-anchor="start" x="437.64" y="-2652.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">JSON</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-2634.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">姿态及业务空壳拒绝与输入保真。目标经唯一渲染入口验证布局、节点能力、固定字体、资源指纹、错误诊断和请求资源释放；选型测试不代替产品行为证据。</text>
</g>
<!-- renderer_support -->
<g id="node2" class="node">
<title>renderer_support</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="671.49,-2439.6 243.8,-2439.6 243.8,-2259.6 671.49,-2259.6 671.49,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="383.74" y="-2361.6" font-family="Arial" font-size="20.00" fill="#eff6ff">CPU 后端测试支持</text>
<text xml:space="preserve" text-anchor="start" x="340.11" y="-2338.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">供两类渲染测试复用唯一官方 CanvasKit</text>
<text xml:space="preserve" text-anchor="start" x="263.85" y="-2320.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">初始化边界；每次返回独立后端，不保存跨测试状态或实现业务渲染。</text>
</g>
<!-- entry -->
<g id="node3" class="node">
<title>entry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2666.75,-2439.6 2076.53,-2439.6 2076.53,-2259.6 2666.75,-2259.6 2666.75,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="2321.63" y="-2370.6" font-family="Arial" font-size="20.00" fill="#eff6ff">唯一渲染入口</text>
<text xml:space="preserve" text-anchor="start" x="2250.77" y="-2347.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderer 声明完整输入与 PNG</text>
<text xml:space="preserve" text-anchor="start" x="2096.59" y="-2329.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">输出。后续实现由该入口主动驱动校验、布局、绘制与资源结算，同一请求独占会话；当前执行明确</text>
<text xml:space="preserve" text-anchor="start" x="2329.14" y="-2311.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">TODO 失败。</text>
</g>
<!-- contracts -->
<g id="node4" class="node">
<title>contracts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2714.5,-180 2166.79,-180 2166.79,0 2714.5,0 2714.5,-180"/>
<text xml:space="preserve" text-anchor="start" x="2316.71" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">CanvasDocument 与渲染合同</text>
<text xml:space="preserve" text-anchor="start" x="2262.69" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">持久化 Fields、节点类型、布局与文本结果、完整输入及 PNG</text>
<text xml:space="preserve" text-anchor="start" x="2186.84" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">输出合同；资源按文档引用标识绑定字节，工程相对路径显式可选以支持未入库候选。PNG</text>
<text xml:space="preserve" text-anchor="start" x="2310.61" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">同次携带节点索引链、名称、类型及 viewport</text>
<text xml:space="preserve" text-anchor="start" x="2290.61" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">四角供树形视图和选中高亮使用，不承担解析或绘制。</text>
</g>
<!-- nodes -->
<g id="node5" class="node">
<title>nodes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2531.66,-2116.8 2211.62,-2116.8 2211.62,-1936.8 2531.66,-1936.8 2531.66,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="2321.63" y="-2029.8" font-family="Arial" font-size="20.00" fill="#eff6ff">节点能力调度</text>
<text xml:space="preserve" text-anchor="start" x="2239.54" y="-2006.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">按节点类型固定顺序调用能力；不持有 DOM。</text>
</g>
<!-- layout -->
<g id="node6" class="node">
<title>layout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2546.79,-1148.4 1606.5,-1148.4 1606.5,-968.4 2546.79,-968.4 2546.79,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="2018.3" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">确定性布局计算</text>
<text xml:space="preserve" text-anchor="start" x="1626.55" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">按校验后的节点专属字段与固定字体度量计算矩形、裁剪与文本行；布局树携带对应节点身份及有效值，供节点绘制和子节点布局使用，结果只存在当前渲染会话。</text>
</g>
<!-- dom_schema -->
<g id="node7" class="node">
<title>dom_schema</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2291.17,-825.6 1790.11,-825.6 1790.11,-645.6 2291.17,-645.6 2291.17,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1990.63" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">文档输入校验</text>
<text xml:space="preserve" text-anchor="start" x="1810.17" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">严格校验结构化文档，按唯一映射表提取与节点身份和顺序对应的节点专属 Option</text>
<text xml:space="preserve" text-anchor="start" x="1825.59" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Schema，供同次布局及绘制消费；保留原文档，不将投影写回持久化字段。</text>
</g>
<!-- state -->
<g id="node8" class="node">
<title>state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3316.49,-825.6 2838.79,-825.6 2838.79,-645.6 3316.49,-645.6 3316.49,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="3002.63" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">渲染会话与资源结算</text>
<text xml:space="preserve" text-anchor="start" x="3012.6" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CpuRenderSession</text>
<text xml:space="preserve" text-anchor="start" x="2858.85" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">登记资源、收束加载和释放、保留失败原因并输出诊断；显式时间保证确定性。</text>
</g>
<!-- features -->
<g id="node9" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2834.25,-1794 2339.04,-1794 2339.04,-1614 2834.25,-1614 2834.25,-1794"/>
<text xml:space="preserve" text-anchor="start" x="2536.63" y="-1716" font-family="Arial" font-size="20.00" fill="#eff6ff">节点绘制特性</text>
<text xml:space="preserve" text-anchor="start" x="2409.1" y="-1693" font-family="Arial" font-size="15.00" fill="#bfdbfe">按节点类型与固定能力顺序编排矩形、文本、滚动内容和 Spine</text>
<text xml:space="preserve" text-anchor="start" x="2359.09" y="-1675" font-family="Arial" font-size="15.00" fill="#bfdbfe">网格绘制；图片、九宫格与渐变合成委托 images，共用同次布局和 CPU 会话。</text>
</g>
<!-- images -->
<g id="node10" class="node">
<title>images</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2780.23,-1471.2 2375.05,-1471.2 2375.05,-1291.2 2780.23,-1291.2 2780.23,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="2544.3" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">图片合成</text>
<text xml:space="preserve" text-anchor="start" x="2395.11" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">资源字节解码、九宫格、渐变与颜色乘法；使用 CPU 图形后端。</text>
</g>
<!-- fields -->
<g id="node11" class="node">
<title>fields</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2728.48,-825.6 2400.81,-825.6 2400.81,-645.6 2728.48,-645.6 2728.48,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="2522.97" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">特性有效值</text>
<text xml:space="preserve" text-anchor="start" x="2420.86" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">唯一字段默认值与启用白名单，不修改持久化输入。</text>
</g>
<!-- values -->
<g id="node12" class="node">
<title>values</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1457.41,-502.8 1003.87,-502.8 1003.87,-322.8 1457.41,-322.8 1457.41,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1188.97" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">富文本解析</text>
<text xml:space="preserve" text-anchor="start" x="1023.93" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">只解析原版富文本方言；持久化字段、枚举、颜色与 GUID 使用 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="1136.87" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">领域合同，不复制转换层解析器。</text>
</g>
<!-- schema -->
<g id="node13" class="node">
<title>schema</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2220.98,-502.8 1858.3,-502.8 1858.3,-322.8 2220.98,-322.8 2220.98,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1958.5" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">结构化节点 Schema</text>
<text xml:space="preserve" text-anchor="start" x="1878.35" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">声明结构化 Canvas 节点的确定类型字段；HTML/XML</text>
<text xml:space="preserve" text-anchor="start" x="1920.87" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">解析归纯转换，本节点不执行解析或绘制。</text>
</g>
<!-- raster -->
<g id="node14" class="node">
<title>raster</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3321.56,-502.8 2969.72,-502.8 2969.72,-322.8 3321.56,-322.8 3321.56,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="3011.17" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">CPU 光栅化与 PNG 编码（设计）</text>
<text xml:space="preserve" text-anchor="start" x="3028.11" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasKit WASM/Skia 软件 surface</text>
<text xml:space="preserve" text-anchor="start" x="2989.78" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">承担字体度量、文字、路径、位图与网格，禁用 GPU。</text>
</g>
<!-- renderer_tests&#45;&gt;renderer_support -->
<g id="edge1" class="edge">
<title>renderer_tests&#45;&gt;renderer_support</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M457.64,-2582.47C457.64,-2541.27 457.64,-2492.16 457.64,-2449.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="460.27,-2449.96 457.64,-2442.46 455.02,-2449.96 460.27,-2449.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="457.64,-2499.6 457.64,-2522.4 629.34,-2522.4 629.34,-2499.6 457.64,-2499.6"/>
<text xml:space="preserve" text-anchor="start" x="460.64" y="-2505.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">复用官方 CPU 后端初始化边界</text>
</g>
<!-- renderer_tests&#45;&gt;entry -->
<g id="edge2" class="edge">
<title>renderer_tests&#45;&gt;entry</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M915.18,-2594.71C1271.54,-2534.98 1756.28,-2453.74 2066.63,-2401.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2066.73,-2404.37 2073.69,-2400.54 2065.86,-2399.19 2066.73,-2404.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1472.03,-2499.6 1472.03,-2522.4 1594.72,-2522.4 1594.72,-2499.6 1472.03,-2499.6"/>
<text xml:space="preserve" text-anchor="start" x="1475.03" y="-2505.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">验证唯一入口明确失败</text>
</g>
<!-- renderer_tests&#45;&gt;contracts -->
<g id="edge3" class="edge">
<title>renderer_tests&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M667.37,-2582.55C755.36,-2530.05 837.64,-2453.45 837.64,-2350.6 837.64,-2350.6 837.64,-2350.6 837.64,-411.8 837.64,-348.57 891.21,-349.26 948.64,-322.8 1158.27,-226.21 1785.51,-152.82 2156.61,-116.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2156.75,-119.04 2163.96,-115.7 2156.24,-113.82 2156.75,-119.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="837.64,-1369.8 837.64,-1392.6 995.34,-1392.6 995.34,-1369.8 837.64,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="840.64" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">核对失败前后的完整请求输入</text>
</g>
<!-- entry&#45;&gt;contracts -->
<g id="edge8" class="edge">
<title>entry&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2666.68,-2322.12C2997.32,-2284.08 3487.64,-2198.84 3487.64,-2027.8 3487.64,-2027.8 3487.64,-2027.8 3487.64,-411.8 3487.64,-251.71 3034.47,-163.41 2724.41,-121.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2725.14,-119.19 2717.36,-120.8 2724.45,-124.39 2725.14,-119.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3487.64,-1208.4 3487.64,-1231.2 3586.99,-1231.2 3586.99,-1208.4 3487.64,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="3490.64" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">唯一入口输入输出</text>
</g>
<!-- entry&#45;&gt;nodes -->
<g id="edge4" class="edge">
<title>entry&#45;&gt;nodes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2371.64,-2259.67C2371.64,-2218.47 2371.64,-2169.36 2371.64,-2126.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2374.27,-2127.16 2371.64,-2119.66 2369.02,-2127.16 2374.27,-2127.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2371.64,-2176.8 2371.64,-2199.6 2424.32,-2199.6 2424.32,-2176.8 2371.64,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="2374.64" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">能力调度</text>
</g>
<!-- entry&#45;&gt;layout -->
<g id="edge5" class="edge">
<title>entry&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2131.21,-2259.75C2038.18,-2208.58 1953.64,-2133.11 1953.64,-2027.8 1953.64,-2027.8 1953.64,-2027.8 1953.64,-1380.2 1953.64,-1301.76 1986.1,-1219.26 2017.66,-1157.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2019.99,-1158.79 2021.12,-1150.92 2015.33,-1156.37 2019.99,-1158.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1953.64,-1692.6 1953.64,-1715.4 2006.32,-1715.4 2006.32,-1692.6 1953.64,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="1956.64" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">布局阶段</text>
</g>
<!-- entry&#45;&gt;dom_schema -->
<g id="edge6" class="edge">
<title>entry&#45;&gt;dom_schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2076.75,-2304.74C1804.03,-2255.62 1440.64,-2164.51 1440.64,-2027.8 1440.64,-2027.8 1440.64,-2027.8 1440.64,-1057.4 1440.64,-892.82 1618.38,-812.36 1780.38,-773.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1780.89,-775.78 1787.59,-771.5 1779.68,-770.67 1780.89,-775.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1440.64,-1531.2 1440.64,-1554 1493.32,-1554 1493.32,-1531.2 1440.64,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1443.64" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">文档校验</text>
</g>
<!-- entry&#45;&gt;state -->
<g id="edge7" class="edge">
<title>entry&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2666.54,-2300.4C2926.98,-2249.23 3265.64,-2157.71 3265.64,-2027.8 3265.64,-2027.8 3265.64,-2027.8 3265.64,-1057.4 3265.64,-974 3217.76,-893.07 3170.32,-833.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3172.59,-831.99 3165.84,-827.8 3168.5,-835.29 3172.59,-831.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3265.64,-1531.2 3265.64,-1554 3376.66,-1554 3376.66,-1531.2 3265.64,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="3268.64" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">独占会话与资源结算</text>
</g>
<!-- nodes&#45;&gt;layout -->
<g id="edge10" class="edge">
<title>nodes&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2335.83,-1937.02C2319.08,-1894.13 2299.39,-1841.72 2283.64,-1794 2209.44,-1569.13 2137.96,-1300.23 2101.56,-1158.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2104.16,-1157.91 2099.75,-1151.29 2099.07,-1159.21 2104.16,-1157.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2207.58,-1531.2 2207.58,-1554 2306.93,-1554 2306.93,-1531.2 2207.58,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="2210.58" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费确定布局节点</text>
</g>
<!-- nodes&#45;&gt;state -->
<g id="edge11" class="edge">
<title>nodes&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2531.62,-1998.67C2650.7,-1969.51 2806.45,-1910.59 2889.64,-1794 3101.48,-1497.13 3099.36,-1036.61 3086.56,-835.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3089.2,-835.93 3086.08,-828.62 3083.96,-836.28 3089.2,-835.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3070.07,-1369.8 3070.07,-1392.6 3169.43,-1392.6 3169.43,-1369.8 3070.07,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="3073.07" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">共享同次绘制会话</text>
</g>
<!-- nodes&#45;&gt;features -->
<g id="edge9" class="edge">
<title>nodes&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2431.25,-1936.87C2459.21,-1895.14 2492.6,-1845.31 2521.26,-1802.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2523.43,-1804.04 2525.42,-1796.34 2519.07,-1801.11 2523.43,-1804.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2485.59,-1854 2485.59,-1876.8 2713.3,-1876.8 2713.3,-1854 2485.59,-1854"/>
<text xml:space="preserve" text-anchor="start" x="2488.59" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">递归顺序由调度拥有，节点投影由特性拥有</text>
</g>
<!-- layout&#45;&gt;contracts -->
<g id="edge19" class="edge">
<title>layout&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1877.96,-968.54C1821.31,-932.74 1766.4,-885.48 1734.64,-825.6 1628.97,-626.32 1655.56,-492.94 1803.64,-322.8 1892.97,-220.16 2031.54,-162.95 2156.66,-131.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2157.22,-133.64 2163.86,-129.27 2155.94,-128.55 2157.22,-133.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1673.98,-562.8 1673.98,-585.6 1773.33,-585.6 1773.33,-562.8 1673.98,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1676.98" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">交付唯一布局结果</text>
</g>
<!-- layout&#45;&gt;dom_schema -->
<g id="edge15" class="edge">
<title>layout&#45;&gt;dom_schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1999.52,-968.53C1987.22,-949.79 1976.34,-929.32 1969.61,-908.4 1961.83,-884.23 1965.53,-858.7 1974.41,-834.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1976.82,-835.93 1977.21,-828 1971.96,-833.96 1976.82,-835.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1969.61,-885.6 1969.61,-908.4 2150.64,-908.4 2150.64,-885.6 1969.61,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1972.61" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费同次校验后的节点字段与身份</text>
</g>
<!-- layout&#45;&gt;state -->
<g id="edge18" class="edge">
<title>layout&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2307.09,-968.51C2383.62,-940.37 2469.62,-910.21 2549.28,-885.6 2652.01,-853.86 2680.08,-854.52 2783.64,-825.6 2798.39,-821.48 2813.53,-817.17 2828.78,-812.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2829.44,-815.3 2835.91,-810.68 2827.98,-810.25 2829.44,-815.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2549.28,-885.6 2549.28,-908.4 2683.64,-908.4 2683.64,-885.6 2549.28,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="2552.28" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取同次会话的固定字体</text>
</g>
<!-- layout&#45;&gt;fields -->
<g id="edge16" class="edge">
<title>layout&#45;&gt;fields</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2164,-968.55C2194.52,-940.1 2230,-909.75 2265.28,-885.6 2304.44,-858.79 2349.12,-833.91 2391.8,-812.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2392.91,-814.84 2398.45,-809.14 2390.56,-810.14 2392.91,-814.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2265.28,-885.6 2265.28,-908.4 2434.64,-908.4 2434.64,-885.6 2265.28,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="2268.28" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">持有节点有效值的唯一布局结果</text>
</g>
<!-- layout&#45;&gt;values -->
<g id="edge17" class="edge">
<title>layout&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1611.02,-968.46C1533.56,-934.99 1460.82,-888.94 1406.28,-825.6 1327.59,-734.2 1279.76,-602.29 1254.29,-512.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1256.88,-512.09 1252.34,-505.58 1251.83,-513.51 1256.88,-512.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1406.28,-724.2 1406.28,-747 1540.64,-747 1540.64,-724.2 1406.28,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1409.28" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">持有解析后的同次文本段</text>
</g>
<!-- dom_schema&#45;&gt;schema -->
<g id="edge20" class="edge">
<title>dom_schema&#45;&gt;schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2020.94,-645.96C2017.34,-626.19 2014.14,-605.26 2012.29,-585.6 2010.06,-561.92 2011.79,-536.55 2015.25,-512.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2017.79,-513.5 2016.37,-505.68 2012.61,-512.68 2017.79,-513.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2012.29,-562.8 2012.29,-585.6 2111.64,-585.6 2111.64,-562.8 2012.29,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2015.29" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">提取节点专属字段</text>
</g>
<!-- state&#45;&gt;contracts -->
<g id="edge25" class="edge">
<title>state&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2978.2,-645.64C2931.56,-603.16 2875.65,-551.14 2826.96,-502.8 2797.25,-473.3 2635.17,-299.81 2530.61,-187.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2532.6,-185.91 2525.56,-182.21 2528.76,-189.49 2532.6,-185.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2826.96,-401.4 2826.96,-424.2 2914.64,-424.2 2914.64,-401.4 2826.96,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="2829.96" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">会话与资源状态</text>
</g>
<!-- state&#45;&gt;raster -->
<g id="edge24" class="edge">
<title>state&#45;&gt;raster</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3096.49,-645.67C3105.24,-604.38 3115.68,-555.15 3124.68,-512.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3127.2,-513.47 3126.18,-505.59 3122.06,-512.38 3127.2,-513.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3113.68,-562.8 3113.68,-585.6 3262.83,-585.6 3262.83,-562.8 3113.68,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="3116.68" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">会话拥有独占软件 surface</text>
</g>
<!-- features&#45;&gt;images -->
<g id="edge12" class="edge">
<title>features&#45;&gt;images</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2584.15,-1614.07C2582.99,-1572.87 2581.61,-1523.76 2580.42,-1481.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2583.05,-1481.48 2580.22,-1474.06 2577.8,-1481.63 2583.05,-1481.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2582.41,-1531.2 2582.41,-1554 2763.45,-1554 2763.45,-1531.2 2582.41,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="2585.41" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">复用节点投影输入和同次会话合同</text>
</g>
<!-- images&#45;&gt;layout -->
<g id="edge13" class="edge">
<title>images&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2438.75,-1291.27C2371.96,-1248.5 2291.87,-1197.21 2224.01,-1153.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2225.65,-1151.7 2217.92,-1149.86 2222.82,-1156.12 2225.65,-1151.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2342.16,-1208.4 2342.16,-1231.2 2441.51,-1231.2 2441.51,-1208.4 2342.16,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="2345.16" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费同一布局结果</text>
</g>
<!-- images&#45;&gt;state -->
<g id="edge14" class="edge">
<title>images&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2629.5,-1291.21C2681.08,-1205.41 2764.59,-1073.46 2849.62,-968.4 2887.73,-921.32 2933.96,-872.98 2974.8,-832.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2976.42,-834.79 2979.93,-827.66 2972.74,-831.04 2976.42,-834.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2849.62,-1047 2849.62,-1069.8 2960.64,-1069.8 2960.64,-1047 2849.62,-1047"/>
<text xml:space="preserve" text-anchor="start" x="2852.62" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">使用会话拥有的资源</text>
</g>
<!-- fields&#45;&gt;contracts -->
<g id="edge22" class="edge">
<title>fields&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2547.53,-645.79C2524.52,-526.38 2483.75,-314.73 2459.76,-190.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2462.35,-189.78 2458.35,-182.91 2457.19,-190.77 2462.35,-189.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2519,-401.4 2519,-424.2 2630.02,-424.2 2630.02,-401.4 2519,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="2522" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费节点类型白名单</text>
</g>
<!-- fields&#45;&gt;schema -->
<g id="edge21" class="edge">
<title>fields&#45;&gt;schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2401.1,-668.51C2330.84,-638.9 2257.73,-606.11 2226.38,-585.6 2193.39,-564.01 2160.64,-536.52 2131.99,-509.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2133.89,-508.07 2126.62,-504.85 2130.29,-511.9 2133.89,-508.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2226.38,-562.8 2226.38,-585.6 2357.64,-585.6 2357.64,-562.8 2226.38,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2229.38" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">消费唯一节点 Schema</text>
</g>
<!-- values&#45;&gt;contracts -->
<g id="edge23" class="edge">
<title>values&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1323.63,-322.88C1361.09,-291.87 1406.42,-259.89 1452.96,-240 1576.28,-187.3 1911.12,-143.89 2156.87,-117.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2156.84,-120.43 2164.03,-117.03 2156.29,-115.21 2156.84,-120.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1452.96,-240 1452.96,-262.8 1540.64,-262.8 1540.64,-240 1452.96,-240"/>
<text xml:space="preserve" text-anchor="start" x="1455.96" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">产生具名文本段</text>
</g>
<!-- schema&#45;&gt;contracts -->
<g id="edge26" class="edge">
<title>schema&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2150.81,-322.87C2203.94,-280.36 2267.59,-229.44 2321.69,-186.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2323.02,-188.46 2327.24,-181.72 2319.74,-184.36 2323.02,-188.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2252.17,-240 2252.17,-262.8 2328.18,-262.8 2328.18,-240 2252.17,-240"/>
<text xml:space="preserve" text-anchor="start" x="2255.17" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">文档节点类型</text>
</g>
<!-- raster&#45;&gt;contracts -->
<g id="edge27" class="edge">
<title>raster&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3007.18,-322.88C2959.84,-294.42 2905.88,-264.08 2854.64,-240 2812.04,-219.98 2765.97,-200.96 2720.56,-183.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2721.65,-181.24 2713.71,-181.03 2719.79,-186.14 2721.65,-181.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2895.82,-240 2895.82,-262.8 2998.28,-262.8 2998.28,-240 2895.82,-240"/>
<text xml:space="preserve" text-anchor="start" x="2898.82" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">像素与 PNG 结果</text>
</g>
</g>
</svg>
`;case`tooling`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1910pt" height="1410pt"
 viewBox="0.00 0.00 1910.00 1410.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1395.05)">
<!-- tests -->
<g id="node1" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1057.42,-1380 685.57,-1380 685.57,-1200 1057.42,-1200 1057.42,-1380"/>
<text xml:space="preserve" text-anchor="start" x="821.49" y="-1293" font-family="Arial" font-size="20.00" fill="#eff6ff">自身回归测试</text>
<text xml:space="preserve" text-anchor="start" x="705.63" y="-1270" font-family="Arial" font-size="15.00" fill="#bfdbfe">验证治理规则与真实 CLI 行为；夹具隔离，不改产品源码。</text>
</g>
<!-- testing -->
<g id="node2" class="node">
<title>testing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="868.52,-1080 548.48,-1080 548.48,-900 868.52,-900 868.52,-1080"/>
<text xml:space="preserve" text-anchor="start" x="675.16" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">测试夹具</text>
<text xml:space="preserve" text-anchor="start" x="575.97" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供隔离 Git 行为夹具；不承载正式检视状态。</text>
</g>
<!-- cli -->
<g id="node3" class="node">
<title>cli</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="783.44,-780 281.55,-780 281.55,-600 783.44,-600 783.44,-780"/>
<text xml:space="preserve" text-anchor="start" x="472.48" y="-702" font-family="Arial" font-size="20.00" fill="#eff6ff">CLI 与进程边界</text>
<text xml:space="preserve" text-anchor="start" x="301.61" y="-679" font-family="Arial" font-size="15.00" fill="#bfdbfe">装配项目检查、统一格式检查和修复及需求图检视；格式算法由 Prettier、LikeC4</text>
<text xml:space="preserve" text-anchor="start" x="352.46" y="-661" font-family="Arial" font-size="15.00" fill="#bfdbfe">和 pre&#45;commit&#45;hooks 承担，内部 CLI 统一范围与进程边界。</text>
</g>
<!-- coding -->
<g id="node4" class="node">
<title>coding</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1090.01,-480 698.99,-480 698.99,-300 1090.01,-300 1090.01,-480"/>
<text xml:space="preserve" text-anchor="start" x="837.26" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">Java 风格规则</text>
<text xml:space="preserve" text-anchor="start" x="719.04" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">通过 TypeScript AST 校验项目编码纪律；不修改受检源码。</text>
</g>
<!-- architecture -->
<g id="node5" class="node">
<title>architecture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1145.02,-180 643.98,-180 643.98,0 1145.02,0 1145.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="844.49" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">架构模型解析</text>
<text xml:space="preserve" text-anchor="start" x="664.03" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">解析聚合 C4，分析文件归属、依赖、源码声明与环境变量边界；不另建架构清单。</text>
</g>
<!-- hooks -->
<g id="node6" class="node">
<title>hooks</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="321,-1380 0,-1380 0,-1200 321,-1200 321,-1380"/>
<text xml:space="preserve" text-anchor="start" x="111.6" y="-1293" font-family="Arial" font-size="20.00" fill="#eff6ff">Git 钩子转发</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1270" font-family="Arial" font-size="15.00" fill="#bfdbfe">纯转发薄壳：零判定逻辑，全部判定经唯一入口 cli</text>
</g>
<!-- requirement_documents -->
<g id="node7" class="node">
<title>requirement_documents</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1879.45,-1380 1387.55,-1380 1387.55,-1200 1879.45,-1200 1879.45,-1380"/>
<text xml:space="preserve" text-anchor="start" x="1550.15" y="-1293" font-family="Arial" font-size="20.00" fill="#eff6ff">新版需求图与文档环境</text>
<text xml:space="preserve" text-anchor="start" x="1407.6" y="-1270" font-family="Arial" font-size="15.00" fill="#bfdbfe">原文、解读、决策及关系共用 Sphinx&#45;Needs TOML；uv 锁定正式文档环境。</text>
</g>
<!-- test_metrics -->
<g id="node8" class="node">
<title>test_metrics</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1844.43,-1080 1422.56,-1080 1422.56,-900 1844.43,-900 1844.43,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1566.82" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">模块测试指标基线</text>
<text xml:space="preserve" text-anchor="start" x="1442.62" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">显式 record 写入的官方覆盖率与变异实测基线，check 只读比较。</text>
</g>
<!-- tests&#45;&gt;testing -->
<g id="edge1" class="edge">
<title>tests&#45;&gt;testing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M823.03,-1200.4C803.83,-1165.28 781.68,-1124.79 762,-1088.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="764.41,-1087.75 758.51,-1082.43 759.81,-1090.27 764.41,-1087.75"/>
</g>
<!-- tests&#45;&gt;cli -->
<g id="edge2" class="edge">
<title>tests&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M685.76,-1232.81C612.46,-1200.51 535.78,-1151.7 493.5,-1080 441.56,-991.94 464.24,-872.83 491.72,-789.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="494.2,-790.56 494.12,-782.62 489.22,-788.88 494.2,-790.56"/>
</g>
<!-- tests&#45;&gt;coding -->
<g id="edge3" class="edge">
<title>tests&#45;&gt;coding</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M898.69,-1200.14C908.61,-1163.34 918.6,-1119.99 923.5,-1080 949.1,-871.09 925.86,-624.2 908.79,-490"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="911.42,-489.85 907.86,-482.74 906.21,-490.52 911.42,-489.85"/>
</g>
<!-- tests&#45;&gt;architecture -->
<g id="edge4" class="edge">
<title>tests&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M942.22,-1200.2C967.63,-1164.57 994.44,-1122.02 1012.5,-1080 1120.33,-829.05 1115.77,-751.52 1145.5,-480 1154.21,-400.48 1179.44,-372.44 1145.5,-300 1124.72,-255.66 1089.4,-217.45 1051.71,-186.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1053.46,-184.33 1045.98,-181.64 1050.16,-188.41 1053.46,-184.33"/>
</g>
<!-- testing&#45;&gt;cli -->
<g id="edge6" class="edge">
<title>testing&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M656.17,-900.4C635.43,-865.28 611.51,-824.79 590.27,-788.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.54,-787.51 586.47,-782.38 588.02,-790.18 592.54,-787.51"/>
</g>
<!-- cli&#45;&gt;coding -->
<g id="edge7" class="edge">
<title>cli&#45;&gt;coding</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M640.13,-600.4C683.78,-564.47 734.28,-522.9 778.72,-486.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="780.2,-488.49 784.32,-481.7 776.86,-484.44 780.2,-488.49"/>
</g>
<!-- cli&#45;&gt;architecture -->
<g id="edge8" class="edge">
<title>cli&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M542.59,-600.13C555.39,-516.97 583.52,-392.1 643.5,-300 671.49,-257.01 711.05,-218.3 750.5,-186.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="751.81,-188.53 756.02,-181.79 748.53,-184.44 751.81,-188.53"/>
</g>
<!-- coding&#45;&gt;architecture -->
<g id="edge9" class="edge">
<title>coding&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M894.5,-300.4C894.5,-265.73 894.5,-225.81 894.5,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="897.12,-190.3 894.5,-182.8 891.87,-190.3 897.12,-190.3"/>
</g>
<!-- hooks&#45;&gt;cli -->
<g id="edge5" class="edge">
<title>hooks&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M215.79,-1200.12C284.34,-1089.93 400.78,-902.75 471.75,-788.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="473.88,-790.21 475.61,-782.45 469.42,-787.43 473.88,-790.21"/>
</g>
<!-- requirement_documents&#45;&gt;test_metrics -->
</g>
</svg>
`;case`repository`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="525pt" height="1110pt"
 viewBox="0.00 0.00 525.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- build -->
<g id="node1" class="node">
<title>build</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="484.38,-1080 10.03,-1080 10.03,-900 484.38,-900 484.38,-1080"/>
<text xml:space="preserve" text-anchor="start" x="177.74" y="-1029" font-family="Arial" font-size="20.00" fill="#eff6ff">pnpm 与依赖锁定</text>
<text xml:space="preserve" text-anchor="start" x="30.08" y="-1006" font-family="Arial" font-size="15.00" fill="#bfdbfe">声明根依赖、锁定、类型与构建入口和 CI；成员配置继承根配置。StrykerJS</text>
<text xml:space="preserve" text-anchor="start" x="109.24" y="-988" font-family="Arial" font-size="15.00" fill="#bfdbfe">core、Vitest runner 与 TypeScript checker</text>
<text xml:space="preserve" text-anchor="start" x="77.58" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">执行变异测试，fast&#45;check 负责属性测试，按需启用 Vitest</text>
<text xml:space="preserve" text-anchor="start" x="123.84" y="-952" font-family="Arial" font-size="15.00" fill="#bfdbfe">coverage&#45;v8 进行覆盖率评估；根 scripts</text>
<text xml:space="preserve" text-anchor="start" x="90.93" y="-934" font-family="Arial" font-size="15.00" fill="#bfdbfe">执行模块指标棘轮，精确版本由根包清单和锁文件持有。</text>
</g>
<!-- instructions -->
<g id="node2" class="node">
<title>instructions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="453.97,-780 40.44,-780 40.44,-600 453.97,-600 453.97,-780"/>
<text xml:space="preserve" text-anchor="start" x="213.87" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">开发指引</text>
<text xml:space="preserve" text-anchor="start" x="60.5" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">提供开发纪律和入口导航；架构事实只引用 C4，不复制模块定义。</text>
</g>
<!-- git -->
<g id="node3" class="node">
<title>git</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="431.04,-480 63.37,-480 63.37,-300 431.04,-300 431.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="213.87" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">版本控制</text>
<text xml:space="preserve" text-anchor="start" x="83.43" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">声明忽略、属性与子模块定位；生命周期由原生 Git 管理。</text>
</g>
<!-- editor -->
<g id="node4" class="node">
<title>editor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="494.41,-180 0,-180 0,0 494.41,0 494.41,-180"/>
<text xml:space="preserve" text-anchor="start" x="205.53" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑器配置</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">声明开发编辑器格式与工作区选项；推荐 VS Code ESLint 扩展以执行仓库现役</text>
<text xml:space="preserve" text-anchor="start" x="141.76" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">ESLint 配置，不作为产品运行配置。</text>
</g>
<!-- build&#45;&gt;instructions -->
<!-- instructions&#45;&gt;git -->
<!-- git&#45;&gt;editor -->
</g>
</svg>
`;case`specifications`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2025pt" height="1110pt"
 viewBox="0.00 0.00 2025.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- tooling -->
<g id="node1" class="node">
<title>tooling</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="434.36,-1080 44.18,-1080 44.18,-900 434.36,-900 434.36,-1080"/>
<text xml:space="preserve" text-anchor="start" x="205.93" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">治理契约</text>
<text xml:space="preserve" text-anchor="start" x="64.24" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束治理检查与检视行为；模型定义架构，规范定义实现验收。</text>
</g>
<!-- layout -->
<g id="node2" class="node">
<title>layout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="421.03,-780 57.52,-780 57.52,-600 421.03,-600 421.03,-780"/>
<text xml:space="preserve" text-anchor="start" x="189.26" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">文件布局契约</text>
<text xml:space="preserve" text-anchor="start" x="77.57" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束文件登记与配置继承的检查行为；具体归属只读 C4。</text>
</g>
<!-- development -->
<g id="node3" class="node">
<title>development</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="478.55,-480 0,-480 0,-300 478.55,-300 478.55,-480"/>
<text xml:space="preserve" text-anchor="start" x="180.93" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">开发与协作契约</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束开发操作、授权与 CI 调度；hooks、审计存储与登记算法引用治理契约。</text>
</g>
<!-- runtime -->
<g id="node4" class="node">
<title>runtime</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="428.12,-180 50.43,-180 50.43,0 428.12,0 428.12,-180"/>
<text xml:space="preserve" text-anchor="start" x="165.37" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit 运行时合同</text>
<text xml:space="preserve" text-anchor="start" x="70.49" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束 Host、协议和服务的运行行为；服务边界以 C4 为准。</text>
</g>
<!-- workspace_files -->
<g id="node5" class="node">
<title>workspace_files</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="982.86,-1080 597.68,-1080 597.68,-900 982.86,-900 982.86,-1080"/>
<text xml:space="preserve" text-anchor="start" x="740.26" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">工程文件合同</text>
<text xml:space="preserve" text-anchor="start" x="617.74" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束工程文件 IO、监听与路径行为；不拥有运行时工程数据。</text>
</g>
<!-- hjson -->
<g id="node6" class="node">
<title>hjson</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="970.78,-780 609.77,-780 609.77,-600 970.78,-600 970.78,-780"/>
<text xml:space="preserve" text-anchor="start" x="711.92" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">Hjson 统一格式合同</text>
<text xml:space="preserve" text-anchor="start" x="629.82" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束 Hjson 解析和写出保真；格式合同不定义 IO 归属。</text>
</g>
<!-- entities -->
<g id="node7" class="node">
<title>entities</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="991.61,-480 588.93,-480 588.93,-300 991.61,-300 991.61,-480"/>
<text xml:space="preserve" text-anchor="start" x="698.59" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">第二层实体基础设施合同</text>
<text xml:space="preserve" text-anchor="start" x="608.99" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束实体更新、身份和提交行为；实体状态由现役实体模块拥有。</text>
</g>
<!-- host_configuration -->
<g id="node8" class="node">
<title>host_configuration</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="950.29,-180 630.25,-180 630.25,0 950.29,0 950.29,-180"/>
<text xml:space="preserve" text-anchor="start" x="714.15" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">保留 Host 配置合同</text>
<text xml:space="preserve" text-anchor="start" x="652.75" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束配置输入的读取行为；不引入第二配置来源。</text>
</g>
<!-- bescript -->
<g id="node9" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1531.87,-1080 1116.68,-1080 1116.68,-900 1531.87,-900 1531.87,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1249.25" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
<text xml:space="preserve" text-anchor="start" x="1136.74" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束文本、AST 和 TS 转换的保真行为；不承担 Host 生命周期。</text>
</g>
<!-- canvas_render -->
<g id="node10" class="node">
<title>canvas_render</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1525.21,-780 1123.34,-780 1123.34,-600 1525.21,-600 1525.21,-780"/>
<text xml:space="preserve" text-anchor="start" x="1254.25" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染规范</text>
<text xml:space="preserve" text-anchor="start" x="1143.39" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束 Canvas 显示与字段映射行为；渲染模块关系由 C4 定义。</text>
</g>
<!-- vscode_frontend -->
<g id="node11" class="node">
<title>vscode_frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1506.86,-480 1141.69,-480 1141.69,-300 1506.86,-300 1506.86,-480"/>
<text xml:space="preserve" text-anchor="start" x="1248.13" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">VS Code 前端职责</text>
<text xml:space="preserve" text-anchor="start" x="1161.74" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束前端交互与配置行为；模块职责与依赖只引用架构图。</text>
</g>
<!-- canvas -->
<g id="node12" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1588.13,-180 1060.42,-180 1060.42,0 1588.13,0 1588.13,-180"/>
<text xml:space="preserve" text-anchor="start" x="1254.25" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 转换合同</text>
<text xml:space="preserve" text-anchor="start" x="1271.76" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束四种 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="1080.48" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">表示的纯格式转换，以及工作区六向转换服务的结果隔离、缓存、资源核对与生命周期。</text>
</g>
<!-- preview -->
<g id="node13" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1994.61,-1080 1641.94,-1080 1641.94,-900 1994.61,-900 1994.61,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1743.26" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">静态预览与发布合同</text>
<text xml:space="preserve" text-anchor="start" x="1661.99" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束静态预览产物与发布验证；不成为运行时产品入口。</text>
</g>
<!-- analysis -->
<g id="node14" class="node">
<title>analysis</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1978.29,-780 1658.25,-780 1658.25,-600 1978.29,-600 1978.29,-780"/>
<text xml:space="preserve" text-anchor="start" x="1768.26" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">工程分析合同</text>
<text xml:space="preserve" text-anchor="start" x="1680.75" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">约束纯函数符号表、零件方法局部变量和调用图。</text>
</g>
<!-- tooling&#45;&gt;layout -->
<!-- layout&#45;&gt;development -->
<!-- development&#45;&gt;runtime -->
<!-- workspace_files&#45;&gt;hjson -->
<!-- hjson&#45;&gt;entities -->
<!-- entities&#45;&gt;host_configuration -->
<!-- bescript&#45;&gt;canvas_render -->
<!-- canvas_render&#45;&gt;vscode_frontend -->
<!-- vscode_frontend&#45;&gt;canvas -->
<!-- preview&#45;&gt;analysis -->
</g>
</svg>
`;case`documentation`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="535pt" height="210pt"
 viewBox="0.00 0.00 535.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- manual -->
<g id="node1" class="node">
<title>manual</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="505.21,-180 0,-180 0,0 505.21,0 505.21,-180"/>
<text xml:space="preserve" text-anchor="start" x="137.58" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">MechToolkit 发布与开发指南</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">技能与对外指南作为普通文件随本仓库提交维护；不作为 tools 自举输入。可选本地</text>
<text xml:space="preserve" text-anchor="start" x="156.33" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">reference 资料独立于仓库结构。</text>
</g>
</g>
</svg>
`;case`legacy`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="956pt" height="510pt"
 viewBox="0.00 0.00 956.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- mcp -->
<g id="node1" class="node">
<title>mcp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="430.19,-480 0,-480 0,-300 430.19,-300 430.19,-480"/>
<text xml:space="preserve" text-anchor="start" x="156.75" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">MCP 协议入口</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 C# MCP 宿主入口参考；保留旧协议宿主的启动和调用边界。</text>
</g>
<!-- core -->
<g id="node2" class="node">
<title>core</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="669.18,-180 279,-180 279,0 669.18,0 669.18,-180"/>
<text xml:space="preserve" text-anchor="start" x="440.75" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">核心逻辑</text>
<text xml:space="preserve" text-anchor="start" x="299.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">组织旧核心参考文件的职责边界；旧文件只作格式与行为证据。</text>
</g>
<!-- host -->
<g id="node3" class="node">
<title>host</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="925.71,-480 540.47,-480 540.47,-300 925.71,-300 925.71,-480"/>
<text xml:space="preserve" text-anchor="start" x="653.06" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">VSCode Host 入口</text>
<text xml:space="preserve" text-anchor="start" x="560.53" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 C# VS Code Host 入口参考；保留旧 stdin/stdout</text>
<text xml:space="preserve" text-anchor="start" x="639.32" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">命令及诊断推送协议的行为证据。</text>
</g>
<!-- mcp&#45;&gt;core -->
<g id="edge1" class="edge">
<title>mcp&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M292.1,-300.4C323,-264.84 358.71,-223.76 390.27,-187.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="392.01,-189.44 394.95,-182.06 388.05,-186 392.01,-189.44"/>
</g>
<!-- host&#45;&gt;core -->
<g id="edge2" class="edge">
<title>host&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M656.09,-300.4C625.18,-264.84 589.47,-223.76 557.92,-187.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="560.14,-186 553.24,-182.06 556.17,-189.44 560.14,-186"/>
</g>
</g>
</svg>
`;case`legacy_core`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2441pt" height="1110pt"
 viewBox="0.00 0.00 2441.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- composition -->
<g id="node1" class="node">
<title>composition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="442.63,-1080 122.59,-1080 122.59,-900 442.63,-900 442.63,-1080"/>
<text xml:space="preserve" text-anchor="start" x="232.6" y="-1002" font-family="Arial" font-size="20.00" fill="#eff6ff">核心服务装配</text>
<text xml:space="preserve" text-anchor="start" x="165.91" y="-979" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 C# 核心门面与 ToolkitServices</text>
<text xml:space="preserve" text-anchor="start" x="145.08" y="-961" font-family="Arial" font-size="15.00" fill="#bfdbfe">服务装配参考；用于核对旧入口和服务组合方式。</text>
</g>
<!-- analysis -->
<g id="node2" class="node">
<title>analysis</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="565.21,-780 0,-780 0,-600 565.21,-600 565.21,-780"/>
<text xml:space="preserve" text-anchor="start" x="249.27" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">工程分析</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 AST 解析服务、符号引用、调用图与脚本归属索引参考；用于核对游戏脚本分析语义。</text>
</g>
<!-- bescript -->
<g id="node3" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="516.89,-480 48.33,-480 48.33,-300 516.89,-300 516.89,-480"/>
<text xml:space="preserve" text-anchor="start" x="225.37" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">BeScript 语法</text>
<text xml:space="preserve" text-anchor="start" x="68.38" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 BeScript 词法、语法解析、AST 与文本序列化参考，包含 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="220.1" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">内联标记的解析行为。</text>
</g>
<!-- canvas -->
<g id="node4" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="471.45,-180 93.77,-180 93.77,0 471.45,0 471.45,-180"/>
<text xml:space="preserve" text-anchor="start" x="229.25" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 数据</text>
<text xml:space="preserve" text-anchor="start" x="144.66" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 Canvas 二进制、内联 Hjson 与 HTML</text>
<text xml:space="preserve" text-anchor="start" x="113.82" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">片段编解码参考；用于核对字段布局、内联参数和转义语义。</text>
</g>
<!-- infra -->
<g id="node5" class="node">
<title>infra</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1146.46,-1080 618.75,-1080 618.75,-900 1146.46,-900 1146.46,-1080"/>
<text xml:space="preserve" text-anchor="start" x="849.27" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">基础设施</text>
<text xml:space="preserve" text-anchor="start" x="638.81" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的日志、进程、配置、文件系统与文本工具参考；保留旧宿主的基础设施行为证据。</text>
</g>
<!-- lint -->
<g id="node6" class="node">
<title>lint</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1058.94,-780 706.27,-780 706.27,-600 1058.94,-600 1058.94,-780"/>
<text xml:space="preserve" text-anchor="start" x="815.93" y="-702" font-family="Arial" font-size="20.00" fill="#eff6ff">游戏工程静态检查</text>
<text xml:space="preserve" text-anchor="start" x="752.55" y="-679" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 LintEngine 规则清单与 CallTargets</text>
<text xml:space="preserve" text-anchor="start" x="726.33" y="-661" font-family="Arial" font-size="15.00" fill="#bfdbfe">条件语义参考；用于核对既有静态检查条目的游戏语义。</text>
</g>
<!-- persistence -->
<g id="node7" class="node">
<title>persistence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1090.2,-480 675.01,-480 675.01,-300 1090.2,-300 1090.2,-480"/>
<text xml:space="preserve" text-anchor="start" x="840.93" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">工程持久化</text>
<text xml:space="preserve" text-anchor="start" x="791.75" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 ProjectModel、FileIO</text>
<text xml:space="preserve" text-anchor="start" x="695.07" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">与实体工具参考；用于核对工程目录、实体识别和文件持久化行为。</text>
</g>
<!-- refactor -->
<g id="node8" class="node">
<title>refactor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1183.97,-180 581.25,-180 581.25,0 1183.97,0 1183.97,-180"/>
<text xml:space="preserve" text-anchor="start" x="832.6" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">游戏逻辑重构</text>
<text xml:space="preserve" text-anchor="start" x="836.34" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="601.3" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">转换、文件移动、变量重命名、脚本仓库管理与一致性修复参考；用于核对既有重构输入及变更语义。</text>
</g>
<!-- sdk -->
<g id="node9" class="node">
<title>sdk</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1808.21,-1080 1333.01,-1080 1333.01,-900 1808.21,-900 1808.21,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1530.6" y="-1002" font-family="Arial" font-size="20.00" fill="#eff6ff">平台 SDK</text>
<text xml:space="preserve" text-anchor="start" x="1353.06" y="-979" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的平台内置方法、事件、枚举与零件能力定义参考；用于核对结构化 SDK</text>
<text xml:space="preserve" text-anchor="start" x="1501.84" y="-961" font-family="Arial" font-size="15.00" fill="#bfdbfe">文档的字段与平台语义。</text>
</g>
<!-- search -->
<g id="node10" class="node">
<title>search</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1844.04,-780 1297.17,-780 1297.17,-600 1844.04,-600 1844.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="1537.27" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">工程检索</text>
<text xml:space="preserve" text-anchor="start" x="1317.23" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 GUID 引用、脚本文本与 UI 文本检索参考；用于核对请求、结果定位和限额语义。</text>
</g>
<!-- tsview -->
<g id="node11" class="node">
<title>tsview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1808.21,-480 1333,-480 1333,-300 1808.21,-300 1808.21,-480"/>
<text xml:space="preserve" text-anchor="start" x="1538.38" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">TS 视图</text>
<text xml:space="preserve" text-anchor="start" x="1353.06" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的 DeviceTsView、仓库视图解析转换与写回参考；用于核对 BeScript</text>
<text xml:space="preserve" text-anchor="start" x="1500.6" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">与 TS 视图的映射语义。</text>
</g>
<!-- worker -->
<g id="node12" class="node">
<title>worker</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1847.39,-180 1293.83,-180 1293.83,0 1847.39,0 1847.39,-180"/>
<text xml:space="preserve" text-anchor="start" x="1520.6" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">工作进程命令</text>
<text xml:space="preserve" text-anchor="start" x="1313.88" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的工作进程命令入口参考；保留旧视图、Canvas、重构、检索和静态检查的命令边界。</text>
</g>
<!-- tests -->
<g id="node13" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2410.96,-1080 1918.25,-1080 1918.25,-900 2410.96,-900 2410.96,-1080"/>
<text xml:space="preserve" text-anchor="start" x="2131.27" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">核心回归</text>
<text xml:space="preserve" text-anchor="start" x="1938.31" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">冻结的核心 TS 回归入口参考；与 cases 分别登记入口和历史 C# 回归及夹具。</text>
</g>
<!-- composition&#45;&gt;analysis -->
<!-- analysis&#45;&gt;bescript -->
<!-- bescript&#45;&gt;canvas -->
<!-- infra&#45;&gt;lint -->
<!-- lint&#45;&gt;persistence -->
<!-- persistence&#45;&gt;refactor -->
<!-- sdk&#45;&gt;search -->
<!-- search&#45;&gt;tsview -->
<!-- tsview&#45;&gt;worker -->
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
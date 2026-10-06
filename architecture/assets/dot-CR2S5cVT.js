var e=e=>{switch(e){case`bescript_first_layer`:return`digraph {
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
            label=<<FONT POINT-SIZE="20">局部 AST</FONT>>,
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
            label=<<FONT POINT-SIZE="20">.code 文件</FONT>>,
            likec4_id="toolkit.script.text.code_file",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        vocabulary [height=2.5,
            label=<<FONT POINT-SIZE="20">类型与转义</FONT>>,
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
        label=<<FONT POINT-SIZE="20">BEScript 内部格式</FONT>>,
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
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>三层纯转换设计</B></FONT>>,
            likec4_depth=1,
            likec4_id="toolkit.script.conversion",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        second [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Context 与官方 TS AST 业务转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Issue 46 的实现归属：引用身份、变量语义、平台方法和 Canvas<BR/>业务映射；仅消费 Context 与显式语义输入，不读取工程或缓存</FONT></TD></TR></TABLE>>,
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
            label=<<FONT POINT-SIZE="20">全局变量、零件元数据与零件上下文</FONT>>,
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
            label=<<FONT POINT-SIZE="20">局部 AST</FONT>>,
            likec4_id="toolkit.script.ast.local_ast",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    tests [height=2.5,
        label=<<FONT POINT-SIZE="20">工程格式测试</FONT>>,
        likec4_id="toolkit.project_model.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic [height=2.5,
        label=<<FONT POINT-SIZE="20">工程设置解析</FONT>>,
        likec4_id="toolkit.project_model.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> logic [arrowhead=normal,
        likec4_id="14dubtt",
        minlen=0,
        style=dashed];
    logic_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">四向格式转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 Canvas 节点为中心的纯计算。Base64 是原版旧数据兼容格式。</FONT></TD></TR></TABLE>>,
        likec4_id="pure.canvas.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    second -> logic_1 [arrowhead=normal,
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
    bescript [height=2.5,
        label=<<FONT POINT-SIZE="20">BEScript 内部格式</FONT>>,
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
    device_context -> bescript [arrowhead=normal,
        likec4_id="1ojmxt6",
        style=dashed];
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 生命周期与工程 IO</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工作区读取、语义输入闭包与视图运行时缓存的唯一所有者；编排三层纯转换，缓存随 Host<BR/>生命周期释放</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.host.logic",
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">官方 TS 解析打印与局部装配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Issue 47 的实现归属：官方 parser、factory、printer<BR/>和有独立差分依据的局部片段装配；缓存状态由 Host 显式传入，无进程全局状态，无<BR/>BEScript 业务解释</FONT></TD></TR></TABLE>>,
            likec4_id="toolkit.script.conversion.third",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    logic -> third [arrowhead=normal,
        likec4_id=z22sym,
        minlen=1,
        style=dashed,
        weight=2];
    bescript [height=2.5,
        label=<<FONT POINT-SIZE="20">BEScript 内部格式</FONT>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    third -> bescript [arrowhead=normal,
        likec4_id="1oqmeu",
        minlen=1,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">字体就绪后的唯一入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasLayoutEngine.ts：initialRender 等待字体后执行<BR/>render；入口启动状态，驱动管线，将同步错误传给状态与错误报告。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.entry",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DOM 渲染管线</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderPipeline.ts：createNodeByType<BR/>创建节点，prepareTree 只准备当前节点，arrangeTree<BR/>按层准备直属子节点并确定最终矩形后递归，renderTree<BR/>统一投影样式并按固定顺序应用特性。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.pipeline",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> pipeline [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">驱动三阶段管线</FONT></TD></TR></TABLE>>,
        likec4_id=g7yyos,
        style=dashed];
    layout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">布局计算与诊断</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderLayout.ts：LayoutRenderer.render<BR/>返回最终矩形，由节点原子提交 layout 与<BR/>resolvedLayoutSize；CanvasLayoutDiagnostics<BR/>记录失败输入，按需生成诊断快照。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.layout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">诊断读取</FONT></TD></TR></TABLE>>,
        likec4_id="12amepw",
        style=dashed];
    values [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">属性解析与渲染基础能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRuntimeUtils.ts：RuntimeNodeParser 精确识别<BR/>DOM 标签；CanvasEnumNameParser<BR/>校验枚举；CanvasColorValue、RichTextParser、GuidUtils<BR/>分别处理颜色、文本与资源；CanvasRenderEntry 报告错误。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.values",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">字体加载与错误报告</FONT></TD></TR></TABLE>>,
        likec4_id=tb8iue,
        style=dashed];
    state [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">页面渲染状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderState.ts：RenderSession<BR/>先登记后启动任务，统一等待纹理加载与原生 Assets<BR/>卸载后结算；失败保留原因，终态不重置。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.state",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">启动与完成状态</FONT></TD></TR></TABLE>>,
        likec4_id="160650p",
        style=dashed];
    nodes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">节点输入与能力顺序</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasTypesNodes.ts：CanvasNodeModel<BR/>与八个节点构造器接收确定 Schema 输出；各节点持有唯一 DEFAULT，render<BR/>只顺序调用能力。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.nodes",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline -> nodes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">节点构造与能力顺序</FONT></TD></TR></TABLE>>,
        likec4_id="1mb8qgr",
        style=dashed];
    dom_schema [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DOM 严格 Schema 提取</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasDomSchema.extract 以节点专属 Zod<BR/>strictObject 校验属性并输出确定类型对象；可选属性成为<BR/>Option，未知属性与必选缺失报错。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.dom_schema",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline -> dom_schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">唯一 DOM 属性提取</FONT></TD></TR></TABLE>>,
        likec4_id=iwd534,
        style=dashed];
    fields [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">白名单与统一取值</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderBase.ts：FeatureValues.resolve<BR/>按显式启用条件选取输入或节点默认值；不制造动态字段表，不修改节点输入。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.fields",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline -> fields [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">子节点收集与逻辑路径</FONT></TD></TR></TABLE>>,
        likec4_id=bdf9kp,
        style=dashed];
    pipeline -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">根尺寸、属性和标签</FONT></TD></TR></TABLE>>,
        likec4_id=lvo3xs,
        style=dashed];
    contracts [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">特性与运行时契约</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasTypesBase.ts：Fields<BR/>只描述持久化属性；CanvasRuntimeNode、RenderNodeContext<BR/>描述运行时上下文。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.contracts",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">上下文类型</FONT></TD></TR></TABLE>>,
        likec4_id=abge3t,
        style=dashed];
    pipeline -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">显式会话类型</FONT></TD></TR></TABLE>>,
        likec4_id="1mtt96n",
        style=dashed];
    nodes -> dom_schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">确定类型的节点 Schema</FONT></TD></TR></TABLE>>,
        likec4_id="8lfmc1",
        style=dashed];
    features [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">特性 DOM 应用</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderNode.ts：特性 Renderer 消费单一 Fields<BR/>与运行时只读快照；ChildLayoutRenderer 返回参数，由节点提交<BR/>layoutParams。Spine 复制独立图层后释放 renderer 与<BR/>stage。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.features",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nodes -> features [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">按节点类型固定顺序应用能力</FONT></TD></TR></TABLE>>,
        likec4_id="1w13ke6",
        style=dashed];
    schema [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">使用者节点 Schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasViewSchema.ts：八种节点 Schema 与<BR/>CanvasUISchemaOf 只向使用者公开持久化属性，不包含 DOM 与布局中间值。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.schema",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nodes -> schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">唯一节点输入类型</FONT></TD></TR></TABLE>>,
        likec4_id=fpowlk,
        style=dashed];
    nodes -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">第一项布局能力</FONT></TD></TR></TABLE>>,
        likec4_id=o36xdv,
        style=dashed];
    nodes -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">节点字段与上下文类型</FONT></TD></TR></TABLE>>,
        likec4_id="1rxvyag",
        style=dashed];
    nodes -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">会话上下文类型</FONT></TD></TR></TABLE>>,
        likec4_id="6y0oem",
        style=dashed];
    dom_schema -> schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">确定输出契约</FONT></TD></TR></TABLE>>,
        likec4_id="1f66237",
        style=dashed];
    dom_schema -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">颜色与枚举解析</FONT></TD></TR></TABLE>>,
        likec4_id="1dca9kq",
        style=dashed];
    dom_schema -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">属性类型</FONT></TD></TR></TABLE>>,
        likec4_id="11aoieb",
        style=dashed];
    features -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">布局能力</FONT></TD></TR></TABLE>>,
        likec4_id=uy4wfr,
        style=dashed];
    images [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">图像合成与异步提交</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderImage.ts：ImageRenderUtils<BR/>处理图像尺寸、颜色乘法与图层清除；FourCornerGradient<BR/>逐列计算双线性插值。资源任务由 RenderSession 统一收束。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.images",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    features -> images [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">图像合成与提交</FONT></TD></TR></TABLE>>,
        likec4_id=tauteh,
        style=dashed];
    features -> fields [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">启用字段与默认值</FONT></TD></TR></TABLE>>,
        likec4_id=yqlpy4,
        style=dashed];
    features -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">文本、颜色、资源与错误报告</FONT></TD></TR></TABLE>>,
        likec4_id="198w5at",
        style=dashed];
    features -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">特性字段与上下文</FONT></TD></TR></TABLE>>,
        likec4_id=bxxmp8,
        style=dashed];
    features -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">异步资源登记与完成</FONT></TD></TR></TABLE>>,
        likec4_id=ktypoa,
        style=dashed];
    schema -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化字段类型</FONT></TD></TR></TABLE>>,
        likec4_id="189d00q",
        style=dashed];
    layout -> fields [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">白名单与默认值</FONT></TD></TR></TABLE>>,
        likec4_id="9kkpep",
        style=dashed];
    layout -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">取值与颜色</FONT></TD></TR></TABLE>>,
        likec4_id="1y3eiqw",
        style=dashed];
    layout -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">布局字段与结果</FONT></TD></TR></TABLE>>,
        likec4_id="1mt06i9",
        style=dashed];
    images -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">颜色类型</FONT></TD></TR></TABLE>>,
        likec4_id=r43mhr,
        style=dashed];
    fields -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">字段类型</FONT></TD></TR></TABLE>>,
        likec4_id="10lcm4a",
        style=dashed];
    values -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">属性与诊断类型</FONT></TD></TR></TABLE>>,
        likec4_id="25q783",
        style=dashed];
    contracts -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">会话类型</FONT></TD></TR></TABLE>>,
        likec4_id="1uo6py4",
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
        label=<<FONT POINT-SIZE="20">单一前端扩展</FONT>>,
        likec4_id=frontend,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit [height=2.5,
        label=<<FONT POINT-SIZE="20">Toolkit TypeScript 产品</FONT>>,
        likec4_id=toolkit,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    frontend -> toolkit [arrowhead=normal,
        likec4_id=dht39m,
        style=dashed];
    toolkit -> frontend [arrowhead=normal,
        likec4_id="1t0kw96",
        style=dashed];
    pure [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">业务纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。</FONT></TD></TR></TABLE>>,
        likec4_id=pure,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> pure [arrowhead=normal,
        likec4_id=ve3bhy,
        minlen=1,
        style=dashed];
    canvas [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 渲染产品</FONT>>,
        likec4_id=canvas,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
    configuration [height=2.5,
        label=<<FONT POINT-SIZE="20">产品类型检查配置</FONT>>,
        likec4_id="toolkit.configuration",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    config [height=2.5,
        label=<<FONT POINT-SIZE="20">配置来源抽象与实现</FONT>>,
        likec4_id="toolkit.config",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configuration -> config [style=invis];
    pi_plugin [height=2.5,
        label=<<FONT POINT-SIZE="20">Pi Agent 插件启动入口</FONT>>,
        likec4_id="toolkit.pi_plugin",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mcp [height=2.5,
        label=<<FONT POINT-SIZE="20">MCP 协议接入</FONT>>,
        likec4_id="toolkit.mcp",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pi_plugin -> mcp [arrowhead=normal,
        likec4_id="1hz4l2z",
        minlen=1,
        style=dashed];
    host [height=2.5,
        label=<<FONT POINT-SIZE="20">工作区 Host</FONT>>,
        likec4_id="toolkit.host",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mcp -> host [arrowhead=normal,
        likec4_id="8i5zec",
        style=dashed];
    project_model [height=2.5,
        label=<<FONT POINT-SIZE="20">工程格式纯计算包</FONT>>,
        likec4_id="toolkit.project_model",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> project_model [arrowhead=normal,
        likec4_id=m33uen,
        minlen=1,
        style=dashed];
    script [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BEScript 纯计算包</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">数据合同与三层纯转换设计分开登记；转换函数不读取工程或拥有跨请求缓存，Host<BR/>持有缓存状态并传入完整语义依据</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.script",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> script [arrowhead=normal,
        likec4_id="7tmu9x",
        minlen=1,
        style=dashed];
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
    packaging [height=2.5,
        label=<<FONT POINT-SIZE="20">扩展清单与构建入口</FONT>>,
        likec4_id="frontend.packaging",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests [height=2.5,
        label=<<FONT POINT-SIZE="20">前端行为与生命周期测试</FONT>>,
        likec4_id="frontend.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    plugin [height=2.5,
        label=<<FONT POINT-SIZE="20">VSCode 宿主与 Effect 组合根</FONT>>,
        likec4_id="frontend.plugin",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> plugin [arrowhead=normal,
        likec4_id="9hsati",
        style=dashed];
    ui [height=2.5,
        label=<<FONT POINT-SIZE="20">单页侧栏、配置区与展开日志</FONT>>,
        likec4_id="frontend.ui",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> ui [arrowhead=normal,
        likec4_id="1vsv44z",
        style=dashed];
    host_client [height=2.5,
        label=<<FONT POINT-SIZE="20">只读合同与配置计划</FONT>>,
        likec4_id="frontend.host_client",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> host_client [arrowhead=normal,
        likec4_id="1pin51l",
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
    canvas [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 四向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内联 Base64、内联 Hjson、Canvas 二进制与 HTML<BR/>视图之间的无状态转换</FONT></TD></TR></TABLE>>,
        likec4_id="pure.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
    renderer_tests [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 渲染测试</FONT>>,
        likec4_id="canvas.renderer_tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">字体就绪后的唯一入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasLayoutEngine.ts：initialRender 等待字体后执行<BR/>render；入口启动状态，驱动管线，将同步错误传给状态与错误报告。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.entry",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DOM 渲染管线</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderPipeline.ts：createNodeByType<BR/>创建节点，prepareTree 只准备当前节点，arrangeTree<BR/>按层准备直属子节点并确定最终矩形后递归，renderTree<BR/>统一投影样式并按固定顺序应用特性。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.pipeline",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> pipeline [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">驱动三阶段管线</FONT></TD></TR></TABLE>>,
        likec4_id=g7yyos,
        style=dashed];
    layout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">布局计算与诊断</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderLayout.ts：LayoutRenderer.render<BR/>返回最终矩形，由节点原子提交 layout 与<BR/>resolvedLayoutSize；CanvasLayoutDiagnostics<BR/>记录失败输入，按需生成诊断快照。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.layout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">诊断读取</FONT></TD></TR></TABLE>>,
        likec4_id="12amepw",
        style=dashed];
    values [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">属性解析与渲染基础能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRuntimeUtils.ts：RuntimeNodeParser 精确识别<BR/>DOM 标签；CanvasEnumNameParser<BR/>校验枚举；CanvasColorValue、RichTextParser、GuidUtils<BR/>分别处理颜色、文本与资源；CanvasRenderEntry 报告错误。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.values",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">字体加载与错误报告</FONT></TD></TR></TABLE>>,
        likec4_id=tb8iue,
        style=dashed];
    state [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">页面渲染状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderState.ts：RenderSession<BR/>先登记后启动任务，统一等待纹理加载与原生 Assets<BR/>卸载后结算；失败保留原因，终态不重置。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.state",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    entry -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">启动与完成状态</FONT></TD></TR></TABLE>>,
        likec4_id="160650p",
        style=dashed];
    nodes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">节点输入与能力顺序</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasTypesNodes.ts：CanvasNodeModel<BR/>与八个节点构造器接收确定 Schema 输出；各节点持有唯一 DEFAULT，render<BR/>只顺序调用能力。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.nodes",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline -> nodes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">节点构造与能力顺序</FONT></TD></TR></TABLE>>,
        likec4_id="1mb8qgr",
        style=dashed];
    dom_schema [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DOM 严格 Schema 提取</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasDomSchema.extract 以节点专属 Zod<BR/>strictObject 校验属性并输出确定类型对象；可选属性成为<BR/>Option，未知属性与必选缺失报错。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.dom_schema",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline -> dom_schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">唯一 DOM 属性提取</FONT></TD></TR></TABLE>>,
        likec4_id=iwd534,
        style=dashed];
    fields [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">白名单与统一取值</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderBase.ts：FeatureValues.resolve<BR/>按显式启用条件选取输入或节点默认值；不制造动态字段表，不修改节点输入。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.fields",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline -> fields [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">子节点收集与逻辑路径</FONT></TD></TR></TABLE>>,
        likec4_id=bdf9kp,
        style=dashed];
    pipeline -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">根尺寸、属性和标签</FONT></TD></TR></TABLE>>,
        likec4_id=lvo3xs,
        style=dashed];
    contracts [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">特性与运行时契约</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasTypesBase.ts：Fields<BR/>只描述持久化属性；CanvasRuntimeNode、RenderNodeContext<BR/>描述运行时上下文。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.contracts",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pipeline -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">上下文类型</FONT></TD></TR></TABLE>>,
        likec4_id=abge3t,
        style=dashed];
    pipeline -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">显式会话类型</FONT></TD></TR></TABLE>>,
        likec4_id="1mtt96n",
        style=dashed];
    nodes -> dom_schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">确定类型的节点 Schema</FONT></TD></TR></TABLE>>,
        likec4_id="8lfmc1",
        style=dashed];
    features [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">特性 DOM 应用</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderNode.ts：特性 Renderer 消费单一 Fields<BR/>与运行时只读快照；ChildLayoutRenderer 返回参数，由节点提交<BR/>layoutParams。Spine 复制独立图层后释放 renderer 与<BR/>stage。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.features",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nodes -> features [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">按节点类型固定顺序应用能力</FONT></TD></TR></TABLE>>,
        likec4_id="1w13ke6",
        style=dashed];
    schema [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">使用者节点 Schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasViewSchema.ts：八种节点 Schema 与<BR/>CanvasUISchemaOf 只向使用者公开持久化属性，不包含 DOM 与布局中间值。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.schema",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nodes -> schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">唯一节点输入类型</FONT></TD></TR></TABLE>>,
        likec4_id=fpowlk,
        style=dashed];
    nodes -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">第一项布局能力</FONT></TD></TR></TABLE>>,
        likec4_id=o36xdv,
        style=dashed];
    nodes -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">节点字段与上下文类型</FONT></TD></TR></TABLE>>,
        likec4_id="1rxvyag",
        style=dashed];
    nodes -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">会话上下文类型</FONT></TD></TR></TABLE>>,
        likec4_id="6y0oem",
        style=dashed];
    dom_schema -> schema [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">确定输出契约</FONT></TD></TR></TABLE>>,
        likec4_id="1f66237",
        style=dashed];
    dom_schema -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">颜色与枚举解析</FONT></TD></TR></TABLE>>,
        likec4_id="1dca9kq",
        style=dashed];
    dom_schema -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">属性类型</FONT></TD></TR></TABLE>>,
        likec4_id="11aoieb",
        style=dashed];
    features -> layout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">布局能力</FONT></TD></TR></TABLE>>,
        likec4_id=uy4wfr,
        style=dashed];
    images [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">图像合成与异步提交</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">CanvasRenderImage.ts：ImageRenderUtils<BR/>处理图像尺寸、颜色乘法与图层清除；FourCornerGradient<BR/>逐列计算双线性插值。资源任务由 RenderSession 统一收束。</FONT></TD></TR></TABLE>>,
        likec4_id="renderer.images",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    features -> images [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">图像合成与提交</FONT></TD></TR></TABLE>>,
        likec4_id=tauteh,
        style=dashed];
    features -> fields [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">启用字段与默认值</FONT></TD></TR></TABLE>>,
        likec4_id=yqlpy4,
        style=dashed];
    features -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">文本、颜色、资源与错误报告</FONT></TD></TR></TABLE>>,
        likec4_id="198w5at",
        style=dashed];
    features -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">特性字段与上下文</FONT></TD></TR></TABLE>>,
        likec4_id=bxxmp8,
        style=dashed];
    features -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">异步资源登记与完成</FONT></TD></TR></TABLE>>,
        likec4_id=ktypoa,
        style=dashed];
    schema -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化字段类型</FONT></TD></TR></TABLE>>,
        likec4_id="189d00q",
        style=dashed];
    layout -> fields [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">白名单与默认值</FONT></TD></TR></TABLE>>,
        likec4_id="9kkpep",
        style=dashed];
    layout -> values [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">取值与颜色</FONT></TD></TR></TABLE>>,
        likec4_id="1y3eiqw",
        style=dashed];
    layout -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">布局字段与结果</FONT></TD></TR></TABLE>>,
        likec4_id="1mt06i9",
        style=dashed];
    images -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">颜色类型</FONT></TD></TR></TABLE>>,
        likec4_id=r43mhr,
        style=dashed];
    fields -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">字段类型</FONT></TD></TR></TABLE>>,
        likec4_id="10lcm4a",
        style=dashed];
    values -> contracts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">属性与诊断类型</FONT></TD></TR></TABLE>>,
        likec4_id="25q783",
        style=dashed];
    contracts -> state [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">会话类型</FONT></TD></TR></TABLE>>,
        likec4_id="1uo6py4",
        style=dashed];
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
    tests [height=2.5,
        label=<<FONT POINT-SIZE="20">自身回归测试</FONT>>,
        likec4_id="tools.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    testing [height=2.5,
        label=<<FONT POINT-SIZE="20">真实 Git 审计夹具</FONT>>,
        likec4_id="tools.testing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> testing [arrowhead=normal,
        likec4_id=ma3eft,
        style=dashed];
    cli [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CLI 与进程边界</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">项目特有检查与逐锚点检视；标准工具由 pnpm scripts 直接执行</FONT></TD></TR></TABLE>>,
        likec4_id="tools.cli",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> cli [arrowhead=normal,
        likec4_id="5qyg9",
        style=dashed];
    coding [height=2.5,
        label=<<FONT POINT-SIZE="20">Java 风格规则</FONT>>,
        likec4_id="tools.coding",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> coding [arrowhead=normal,
        likec4_id="1k7n45j",
        style=dashed];
    architecture [height=2.5,
        label=<<FONT POINT-SIZE="20">架构模型解析</FONT>>,
        likec4_id="tools.architecture",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> architecture [arrowhead=normal,
        likec4_id="1qs5pru",
        style=dashed];
    anchoring [height=2.5,
        label=<<FONT POINT-SIZE="20">规范与代码锚定</FONT>>,
        likec4_id="tools.anchoring",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> anchoring [arrowhead=normal,
        likec4_id="1pwfdfa",
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
    cli -> anchoring [arrowhead=normal,
        likec4_id="1xh2tlh",
        style=dashed];
    coding -> architecture [arrowhead=normal,
        likec4_id=krg9p3,
        style=dashed];
    coding -> anchoring [arrowhead=normal,
        likec4_id=nmozcr,
        style=dashed];
    architecture -> anchoring [arrowhead=normal,
        likec4_id="1dxec1y",
        style=dashed];
    review_state [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">当前 Git tree 的审计终态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">SQLite 单文件，三方语义合并；令牌和未提交确认仅在 worktree 私有 Git<BR/>目录</FONT></TD></TR></TABLE>>,
        likec4_id="tools.review_state",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
        label=<<FONT POINT-SIZE="20">pnpm 与依赖锁定</FONT>>,
        likec4_id="repository.build",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    instructions [height=2.5,
        label=<<FONT POINT-SIZE="20">开发指引</FONT>>,
        likec4_id="repository.instructions",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    build -> instructions [style=invis];
    git [height=2.5,
        label=<<FONT POINT-SIZE="20">版本控制</FONT>>,
        likec4_id="repository.git",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    instructions -> git [style=invis];
    editor [height=2.5,
        label=<<FONT POINT-SIZE="20">编辑器配置</FONT>>,
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
        label=<<FONT POINT-SIZE="20">治理契约</FONT>>,
        likec4_id="specifications.tooling",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    layout [height=2.5,
        label=<<FONT POINT-SIZE="20">文件布局契约</FONT>>,
        likec4_id="specifications.layout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tooling -> layout [style=invis];
    development [height=2.5,
        label=<<FONT POINT-SIZE="20">开发与协作契约</FONT>>,
        likec4_id="specifications.development",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    layout -> development [style=invis];
    runtime [height=2.5,
        label=<<FONT POINT-SIZE="20">Toolkit 运行时合同</FONT>>,
        likec4_id="specifications.runtime",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    development -> runtime [style=invis];
    host_configuration [height=2.5,
        label=<<FONT POINT-SIZE="20">保留 Host 配置合同</FONT>>,
        likec4_id="specifications.host_configuration",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bescript [height=2.5,
        label=<<FONT POINT-SIZE="20">BEScript 内部格式</FONT>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host_configuration -> bescript [style=invis];
    canvas_render [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 渲染规范</FONT>>,
        likec4_id="specifications.canvas_render",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bescript -> canvas_render [style=invis];
    vscode_frontend [height=2.5,
        label=<<FONT POINT-SIZE="20">VS Code 前端职责</FONT>>,
        likec4_id="specifications.vscode_frontend",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    canvas_render -> vscode_frontend [style=invis];
    canvas [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 四向转换合同</FONT>>,
        likec4_id="specifications.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    preview [height=2.5,
        label=<<FONT POINT-SIZE="20">静态预览与发布合同</FONT>>,
        likec4_id="specifications.preview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    canvas -> preview [style=invis];
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
        label=<<FONT POINT-SIZE="20">MechToolkit 发布与开发指南</FONT>>,
        likec4_id="documentation.manual",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    specs [height=2.5,
        label=<<FONT POINT-SIZE="20">产品规范</FONT>>,
        likec4_id="documentation.specs",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    manual -> specs [style=invis];
    workflows [height=2.5,
        label=<<FONT POINT-SIZE="20">ComfyUI 工作流</FONT>>,
        likec4_id="documentation.workflows",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    specs -> workflows [style=invis];
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
        label=<<FONT POINT-SIZE="20">MCP 协议入口</FONT>>,
        likec4_id="legacy.mcp",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    core [height=2.5,
        label=<<FONT POINT-SIZE="20">核心逻辑</FONT>>,
        likec4_id="legacy.core",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mcp -> core [arrowhead=normal,
        likec4_id=pm7gv,
        minlen=1,
        style=dashed];
    host [height=2.5,
        label=<<FONT POINT-SIZE="20">VSCode Host 入口</FONT>>,
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
        label=<<FONT POINT-SIZE="20">核心服务装配</FONT>>,
        likec4_id="legacy.core.composition",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis [height=2.5,
        label=<<FONT POINT-SIZE="20">工程分析</FONT>>,
        likec4_id="legacy.core.analysis",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    composition -> analysis [style=invis];
    bescript [height=2.5,
        label=<<FONT POINT-SIZE="20">BeScript 语法</FONT>>,
        likec4_id="legacy.core.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis -> bescript [style=invis];
    canvas [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 数据</FONT>>,
        likec4_id="legacy.core.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bescript -> canvas [style=invis];
    infra [height=2.5,
        label=<<FONT POINT-SIZE="20">基础设施</FONT>>,
        likec4_id="legacy.core.infra",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint [height=2.5,
        label=<<FONT POINT-SIZE="20">游戏工程静态检查</FONT>>,
        likec4_id="legacy.core.lint",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    infra -> lint [style=invis];
    persistence [height=2.5,
        label=<<FONT POINT-SIZE="20">工程持久化</FONT>>,
        likec4_id="legacy.core.persistence",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint -> persistence [style=invis];
    refactor [height=2.5,
        label=<<FONT POINT-SIZE="20">游戏逻辑重构</FONT>>,
        likec4_id="legacy.core.refactor",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    persistence -> refactor [style=invis];
    sdk [height=2.5,
        label=<<FONT POINT-SIZE="20">平台 SDK</FONT>>,
        likec4_id="legacy.core.sdk",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    search [height=2.5,
        label=<<FONT POINT-SIZE="20">工程检索</FONT>>,
        likec4_id="legacy.core.search",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sdk -> search [style=invis];
    tsview [height=2.5,
        label=<<FONT POINT-SIZE="20">TS 视图</FONT>>,
        likec4_id="legacy.core.tsview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    search -> tsview [style=invis];
    worker [height=2.5,
        label=<<FONT POINT-SIZE="20">工作进程命令</FONT>>,
        likec4_id="legacy.core.worker",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tsview -> worker [style=invis];
    tests [height=2.5,
        label=<<FONT POINT-SIZE="20">核心回归</FONT>>,
        likec4_id="legacy.core.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`bescript_first_layer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1013pt" height="1171pt"
 viewBox="0.00 0.00 1013.00 1171.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1156.25)">
<g id="clust1" class="cluster">
<title>cluster_conversion</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="140,-868 140,-1133.2 720,-1133.2 720,-868 140,-868"/>
<text xml:space="preserve" text-anchor="start" x="148" y="-1120.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">三层纯转换设计</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_ast</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="564,-568 564,-833.2 948,-833.2 948,-568 564,-568"/>
<text xml:space="preserve" text-anchor="start" x="572" y="-820.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">局部 AST 层</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_text</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-260 8,-541.2 838,-541.2 838,-260 8,-260"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-528.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">原版文本层</text>
</g>
<!-- first -->
<g id="node1" class="node">
<title>first</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="687.6,-1080 172.4,-1080 172.4,-900 687.6,-900 687.6,-1080"/>
<text xml:space="preserve" text-anchor="start" x="304.97" y="-1011" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 文本与局部 AST 转换</text>
<text xml:space="preserve" text-anchor="start" x="401.65" y="-988" font-family="Arial" font-size="15.00" fill="#bfdbfe">Issue 45</text>
<text xml:space="preserve" text-anchor="start" x="192.45" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">的实现归属：唯一正文词法、控制结构、调用与反向序列化入口；依赖文本合同和局部</text>
<text xml:space="preserve" text-anchor="start" x="372.9" y="-952" font-family="Arial" font-size="15.00" fill="#bfdbfe">AST，不依赖 Host</text>
</g>
<!-- local_ast -->
<g id="node2" class="node">
<title>local_ast</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="916.02,-780 595.98,-780 595.98,-600 916.02,-600 916.02,-780"/>
<text xml:space="preserve" text-anchor="start" x="717.1" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">局部 AST</text>
</g>
<!-- code_file -->
<g id="node3" class="node">
<title>code_file</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-480 47.98,-480 47.98,-300 368.02,-300 368.02,-480"/>
<text xml:space="preserve" text-anchor="start" x="164.09" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">.code 文件</text>
</g>
<!-- vocabulary -->
<g id="node4" class="node">
<title>vocabulary</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-480 477.98,-480 477.98,-300 798.02,-300 798.02,-480"/>
<text xml:space="preserve" text-anchor="start" x="596.33" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">类型与转义</text>
</g>
<!-- bescript -->
<g id="node5" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="961.02,-180 640.98,-180 640.98,0 961.02,0 961.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="725.98" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
</g>
<!-- first&#45;&gt;local_ast -->
<g id="edge1" class="edge">
<title>first&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M526.93,-900.4C566.15,-864.54 611.52,-823.07 651.49,-786.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="652.88,-788.82 656.65,-781.82 649.34,-784.94 652.88,-788.82"/>
</g>
<!-- first&#45;&gt;code_file -->
<g id="edge2" class="edge">
<title>first&#45;&gt;code_file</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M397,-900.12C356.22,-790.26 287.03,-603.87 244.63,-489.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="247.12,-488.84 242.05,-482.72 242.2,-490.66 247.12,-488.84"/>
</g>
<!-- first&#45;&gt;vocabulary -->
<g id="edge3" class="edge">
<title>first&#45;&gt;vocabulary</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M445.35,-900.14C461.99,-813.39 492.32,-678.66 537,-568 547.78,-541.29 561.92,-513.68 576.19,-488.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="578.29,-490.04 579.73,-482.23 573.73,-487.43 578.29,-490.04"/>
</g>
<!-- first&#45;&gt;bescript -->
<g id="edge4" class="edge">
<title>first&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M687.46,-945.98C810.29,-919.68 938.41,-881.72 975,-833.2 999,-801.38 962.17,-265.12 960,-260 948.87,-233.8 931.76,-209.19 912.84,-187.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="915.02,-185.78 908.08,-181.91 911.09,-189.27 915.02,-185.78"/>
</g>
<!-- local_ast&#45;&gt;code_file -->
<g id="edge5" class="edge">
<title>local_ast&#45;&gt;code_file</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M596.26,-625.5C540.32,-601.34 477.81,-572.13 423,-541.2 393.68,-524.65 363.35,-505.13 335.05,-485.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="336.89,-483.81 329.23,-481.72 333.91,-488.14 336.89,-483.81"/>
</g>
<!-- local_ast&#45;&gt;vocabulary -->
<g id="edge6" class="edge">
<title>local_ast&#45;&gt;vocabulary</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M720.92,-600.4C707.07,-565.43 691.11,-525.13 676.91,-489.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="679.47,-488.6 674.27,-482.59 674.59,-490.53 679.47,-488.6"/>
</g>
<!-- local_ast&#45;&gt;bescript -->
<g id="edge7" class="edge">
<title>local_ast&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M835.06,-600.27C847.36,-581.88 858.23,-561.8 865,-541.2 904.04,-422.48 887.5,-382.94 865,-260 860.7,-236.51 853.3,-212.04 845.02,-189.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="847.56,-188.56 842.48,-182.44 842.64,-190.39 847.56,-188.56"/>
</g>
<!-- code_file&#45;&gt;vocabulary -->
<g id="edge8" class="edge">
<title>code_file&#45;&gt;vocabulary</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.99,-390C401.29,-390 434.58,-390 467.88,-390"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="467.68,-392.63 475.18,-390 467.68,-387.38 467.68,-392.63"/>
</g>
<!-- code_file&#45;&gt;bescript -->
<g id="edge9" class="edge">
<title>code_file&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M350.92,-300.01C374.72,-286.13 399.36,-272.32 423,-260 490.12,-225.02 565.98,-190.22 632.03,-161.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="632.68,-163.96 638.51,-158.56 630.58,-159.14 632.68,-163.96"/>
</g>
<!-- vocabulary&#45;&gt;bescript -->
<g id="edge10" class="edge">
<title>vocabulary&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M686.46,-300.4C705.67,-265.28 727.82,-224.79 747.5,-188.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="749.69,-190.27 750.99,-182.43 745.09,-187.75 749.69,-190.27"/>
</g>
</g>
</svg>
`;case`bescript_second_layer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1356pt" height="1171pt"
 viewBox="0.00 0.00 1356.00 1171.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1156.25)">
<g id="clust1" class="cluster">
<title>cluster_conversion</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="16.36,-868 16.36,-1133.2 498.36,-1133.2 498.36,-868 16.36,-868"/>
<text xml:space="preserve" text-anchor="start" x="24.36" y="-1120.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">三层纯转换设计</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_context</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="65.36,-568 65.36,-833.2 449.36,-833.2 449.36,-568 65.36,-568"/>
<text xml:space="preserve" text-anchor="start" x="73.36" y="-820.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">零件上下文层</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_ast</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="41.36,-268 41.36,-533.2 425.36,-533.2 425.36,-268 41.36,-268"/>
<text xml:space="preserve" text-anchor="start" x="49.36" y="-520.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">局部 AST 层</text>
</g>
<!-- second -->
<g id="node1" class="node">
<title>second</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="466.64,-1080 48.08,-1080 48.08,-900 466.64,-900 466.64,-1080"/>
<text xml:space="preserve" text-anchor="start" x="121.21" y="-1002" font-family="Arial" font-size="20.00" fill="#eff6ff">Context 与官方 TS AST 业务转换</text>
<text xml:space="preserve" text-anchor="start" x="68.13" y="-979" font-family="Arial" font-size="15.00" fill="#bfdbfe">Issue 46 的实现归属：引用身份、变量语义、平台方法和 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="77.31" y="-961" font-family="Arial" font-size="15.00" fill="#bfdbfe">业务映射；仅消费 Context 与显式语义输入，不读取工程或缓存</text>
</g>
<!-- device_context -->
<g id="node2" class="node">
<title>device_context</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="417.38,-780 97.34,-780 97.34,-600 417.38,-600 417.38,-780"/>
<text xml:space="preserve" text-anchor="start" x="124" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">全局变量、零件元数据与零件上下文</text>
</g>
<!-- local_ast -->
<g id="node3" class="node">
<title>local_ast</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="393.38,-480 73.34,-480 73.34,-300 393.38,-300 393.38,-480"/>
<text xml:space="preserve" text-anchor="start" x="194.46" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">局部 AST</text>
</g>
<!-- tests -->
<g id="node4" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="896.38,-1080 576.34,-1080 576.34,-900 896.38,-900 896.38,-1080"/>
<text xml:space="preserve" text-anchor="start" x="686.35" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">工程格式测试</text>
</g>
<!-- logic -->
<g id="node5" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1326.38,-1080 1006.34,-1080 1006.34,-900 1326.38,-900 1326.38,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1116.35" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">工程设置解析</text>
</g>
<!-- logic_1 -->
<g id="node6" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="957.06,-780 527.66,-780 527.66,-600 957.06,-600 957.06,-780"/>
<text xml:space="preserve" text-anchor="start" x="692.35" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">四向格式转换</text>
<text xml:space="preserve" text-anchor="start" x="547.71" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 Canvas 节点为中心的纯计算。Base64 是原版旧数据兼容格式。</text>
</g>
<!-- bescript -->
<g id="node7" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1086.38,-180 766.34,-180 766.34,0 1086.38,0 1086.38,-180"/>
<text xml:space="preserve" text-anchor="start" x="851.34" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
</g>
<!-- second&#45;&gt;device_context -->
<g id="edge3" class="edge">
<title>second&#45;&gt;device_context</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M257.36,-900.4C257.36,-865.73 257.36,-825.81 257.36,-790.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="259.98,-790.3 257.36,-782.8 254.73,-790.3 259.98,-790.3"/>
</g>
<!-- second&#45;&gt;local_ast -->
<g id="edge4" class="edge">
<title>second&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M92.98,-900.02C70.99,-880.94 51.51,-858.7 38.36,-833.2 -15.68,-728.45 -9.37,-675.77 38.36,-568 51.69,-537.88 72.97,-510.7 96.66,-487.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="98.34,-489.2 101.91,-482.1 94.69,-485.43 98.34,-489.2"/>
</g>
<!-- second&#45;&gt;logic_1 -->
<g id="edge2" class="edge">
<title>second&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M401.89,-900.2C460.83,-863.98 529.05,-822.06 588.87,-785.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="590.04,-787.67 595.06,-781.5 587.3,-783.19 590.04,-787.67"/>
</g>
<!-- second&#45;&gt;bescript -->
<g id="edge5" class="edge">
<title>second&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M428.07,-900.09C458.46,-887.37 490.34,-875.93 521.36,-868 574.35,-854.46 975.08,-873.22 1012.36,-833.2 1176.32,-657.21 1057.63,-346.76 979.74,-188.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="982.17,-187.99 976.48,-182.45 977.47,-190.33 982.17,-187.99"/>
</g>
<!-- device_context&#45;&gt;local_ast -->
<g id="edge6" class="edge">
<title>device_context&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M250.22,-600.4C247.43,-565.73 244.21,-525.81 241.34,-490.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="243.97,-490.06 240.75,-482.79 238.73,-490.48 243.97,-490.06"/>
</g>
<!-- device_context&#45;&gt;bescript -->
<g id="edge7" class="edge">
<title>device_context&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M371.72,-600.03C398.5,-578.54 426.7,-555.36 452.36,-533.2 585.66,-418.06 733.14,-278.43 827.63,-187.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="829.44,-189.18 833.01,-182.09 825.79,-185.41 829.44,-189.18"/>
</g>
<!-- local_ast&#45;&gt;bescript -->
<g id="edge8" class="edge">
<title>local_ast&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M393.21,-320.26C502.07,-273.45 645.94,-211.58 756.8,-163.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="757.77,-166.35 763.62,-160.98 755.7,-161.53 757.77,-166.35"/>
</g>
<!-- tests&#45;&gt;logic -->
<g id="edge1" class="edge">
<title>tests&#45;&gt;logic</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M896.35,-990C929.64,-990 962.94,-990 996.23,-990"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="996.04,-992.63 1003.54,-990 996.04,-987.38 996.04,-992.63"/>
</g>
</g>
</svg>
`;case`bescript_third_layer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="660pt" height="871pt"
 viewBox="0.00 0.00 660.00 871.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 856.25)">
<g id="clust1" class="cluster">
<title>cluster_host</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-568 8,-833.2 622,-833.2 622,-568 8,-568"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-820.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">工作区 HOST</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_script</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="25,-268 25,-533.2 605,-533.2 605,-268 25,-268"/>
<text xml:space="preserve" text-anchor="start" x="33" y="-520.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BESCRIPT 纯计算包</text>
</g>
<!-- logic -->
<g id="node1" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="590.11,-780 39.89,-780 39.89,-600 590.11,-600 590.11,-780"/>
<text xml:space="preserve" text-anchor="start" x="219.98" y="-702" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 生命周期与工程 IO</text>
<text xml:space="preserve" text-anchor="start" x="59.95" y="-679" font-family="Arial" font-size="15.00" fill="#bfdbfe">工作区读取、语义输入闭包与视图运行时缓存的唯一所有者；编排三层纯转换，缓存随 Host</text>
<text xml:space="preserve" text-anchor="start" x="277.49" y="-661" font-family="Arial" font-size="15.00" fill="#bfdbfe">生命周期释放</text>
</g>
<!-- third -->
<g id="node2" class="node">
<title>third</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="573.44,-480 56.56,-480 56.56,-300 573.44,-300 573.44,-480"/>
<text xml:space="preserve" text-anchor="start" x="204.98" y="-411" font-family="Arial" font-size="20.00" fill="#eff6ff">官方 TS 解析打印与局部装配</text>
<text xml:space="preserve" text-anchor="start" x="154.94" y="-388" font-family="Arial" font-size="15.00" fill="#bfdbfe">Issue 47 的实现归属：官方 parser、factory、printer</text>
<text xml:space="preserve" text-anchor="start" x="76.62" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">和有独立差分依据的局部片段装配；缓存状态由 Host 显式传入，无进程全局状态，无</text>
<text xml:space="preserve" text-anchor="start" x="258.74" y="-352" font-family="Arial" font-size="15.00" fill="#bfdbfe">BEScript 业务解释</text>
</g>
<!-- bescript -->
<g id="node3" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="475.02,-180 154.98,-180 154.98,0 475.02,0 475.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="239.98" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
</g>
<!-- logic&#45;&gt;third -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;third</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M315,-600.4C315,-565.73 315,-525.81 315,-490.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="317.63,-490.3 315,-482.8 312.38,-490.3 317.63,-490.3"/>
</g>
<!-- third&#45;&gt;bescript -->
<g id="edge2" class="edge">
<title>third&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M315,-300.4C315,-265.73 315,-225.81 315,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="317.63,-190.3 315,-182.8 312.38,-190.3 317.63,-190.3"/>
</g>
</g>
</svg>
`;case`canvas_render`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="5173pt" height="2470pt"
 viewBox="0.00 0.00 5173.00 2470.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2454.65)">
<!-- entry -->
<g id="node1" class="node">
<title>entry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1873.77,-2439.6 1440.23,-2439.6 1440.23,-2259.6 1873.77,-2259.6 1873.77,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="1573.65" y="-2361.6" font-family="Arial" font-size="20.00" fill="#eff6ff">字体就绪后的唯一入口</text>
<text xml:space="preserve" text-anchor="start" x="1484" y="-2338.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasLayoutEngine.ts：initialRender 等待字体后执行</text>
<text xml:space="preserve" text-anchor="start" x="1460.29" y="-2320.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">render；入口启动状态，驱动管线，将同步错误传给状态与错误报告。</text>
</g>
<!-- pipeline -->
<g id="node2" class="node">
<title>pipeline</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2835.95,-2116.8 2464.05,-2116.8 2464.05,-1936.8 2835.95,-1936.8 2835.95,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="2590.55" y="-2056.8" font-family="Arial" font-size="20.00" fill="#eff6ff">DOM 渲染管线</text>
<text xml:space="preserve" text-anchor="start" x="2494.92" y="-2033.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderPipeline.ts：createNodeByType</text>
<text xml:space="preserve" text-anchor="start" x="2484.11" y="-2015.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">创建节点，prepareTree 只准备当前节点，arrangeTree</text>
<text xml:space="preserve" text-anchor="start" x="2487.87" y="-1997.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">按层准备直属子节点并确定最终矩形后递归，renderTree</text>
<text xml:space="preserve" text-anchor="start" x="2543.73" y="-1979.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">统一投影样式并按固定顺序应用特性。</text>
</g>
<!-- layout -->
<g id="node3" class="node">
<title>layout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1274.32,-1148.4 905.68,-1148.4 905.68,-968.4 1274.32,-968.4 1274.32,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1031.66" y="-1088.4" font-family="Arial" font-size="20.00" fill="#eff6ff">布局计算与诊断</text>
<text xml:space="preserve" text-anchor="start" x="925.74" y="-1065.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderLayout.ts：LayoutRenderer.render</text>
<text xml:space="preserve" text-anchor="start" x="972.05" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">返回最终矩形，由节点原子提交 layout 与</text>
<text xml:space="preserve" text-anchor="start" x="931.58" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">resolvedLayoutSize；CanvasLayoutDiagnostics</text>
<text xml:space="preserve" text-anchor="start" x="989.98" y="-1011.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">记录失败输入，按需生成诊断快照。</text>
</g>
<!-- values -->
<g id="node4" class="node">
<title>values</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4418.45,-825.6 4001.55,-825.6 4001.55,-645.6 4418.45,-645.6 4418.45,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="4118.32" y="-765.6" font-family="Arial" font-size="20.00" fill="#eff6ff">属性解析与渲染基础能力</text>
<text xml:space="preserve" text-anchor="start" x="4032.86" y="-742.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRuntimeUtils.ts：RuntimeNodeParser 精确识别</text>
<text xml:space="preserve" text-anchor="start" x="4084.55" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">DOM 标签；CanvasEnumNameParser</text>
<text xml:space="preserve" text-anchor="start" x="4021.6" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">校验枚举；CanvasColorValue、RichTextParser、GuidUtils</text>
<text xml:space="preserve" text-anchor="start" x="4027.86" y="-688.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">分别处理颜色、文本与资源；CanvasRenderEntry 报告错误。</text>
</g>
<!-- state -->
<g id="node5" class="node">
<title>state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="766.67,-180 427.33,-180 427.33,0 766.67,0 766.67,-180"/>
<text xml:space="preserve" text-anchor="start" x="546.99" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">页面渲染状态</text>
<text xml:space="preserve" text-anchor="start" x="464.01" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderState.ts：RenderSession</text>
<text xml:space="preserve" text-anchor="start" x="447.38" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">先登记后启动任务，统一等待纹理加载与原生 Assets</text>
<text xml:space="preserve" text-anchor="start" x="478.23" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">卸载后结算；失败保留原因，终态不重置。</text>
</g>
<!-- nodes -->
<g id="node6" class="node">
<title>nodes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2903.45,-1794 2396.55,-1794 2396.55,-1614 2903.45,-1614 2903.45,-1794"/>
<text xml:space="preserve" text-anchor="start" x="2574.99" y="-1725" font-family="Arial" font-size="20.00" fill="#eff6ff">节点输入与能力顺序</text>
<text xml:space="preserve" text-anchor="start" x="2504.51" y="-1702" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasTypesNodes.ts：CanvasNodeModel</text>
<text xml:space="preserve" text-anchor="start" x="2416.61" y="-1684" font-family="Arial" font-size="15.00" fill="#bfdbfe">与八个节点构造器接收确定 Schema 输出；各节点持有唯一 DEFAULT，render</text>
<text xml:space="preserve" text-anchor="start" x="2599.99" y="-1666" font-family="Arial" font-size="15.00" fill="#bfdbfe">只顺序调用能力。</text>
</g>
<!-- dom_schema -->
<g id="node7" class="node">
<title>dom_schema</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3401.67,-1471.2 3032.33,-1471.2 3032.33,-1291.2 3401.67,-1291.2 3401.67,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="3115.31" y="-1402.2" font-family="Arial" font-size="20.00" fill="#eff6ff">DOM 严格 Schema 提取</text>
<text xml:space="preserve" text-anchor="start" x="3075.28" y="-1379.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDomSchema.extract 以节点专属 Zod</text>
<text xml:space="preserve" text-anchor="start" x="3052.38" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">strictObject 校验属性并输出确定类型对象；可选属性成为</text>
<text xml:space="preserve" text-anchor="start" x="3113.64" y="-1343.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Option，未知属性与必选缺失报错。</text>
</g>
<!-- fields -->
<g id="node8" class="node">
<title>fields</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1295.85,-825.6 818.15,-825.6 818.15,-645.6 1295.85,-645.6 1295.85,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="990.32" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">白名单与统一取值</text>
<text xml:space="preserve" text-anchor="start" x="900.67" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderBase.ts：FeatureValues.resolve</text>
<text xml:space="preserve" text-anchor="start" x="838.21" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">按显式启用条件选取输入或节点默认值；不制造动态字段表，不修改节点输入。</text>
</g>
<!-- contracts -->
<g id="node9" class="node">
<title>contracts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2609.23,-502.8 2164.77,-502.8 2164.77,-322.8 2609.23,-322.8 2609.23,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2320.32" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">特性与运行时契约</text>
<text xml:space="preserve" text-anchor="start" x="2289.88" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasTypesBase.ts：Fields</text>
<text xml:space="preserve" text-anchor="start" x="2184.83" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">只描述持久化属性；CanvasRuntimeNode、RenderNodeContext</text>
<text xml:space="preserve" text-anchor="start" x="2330.74" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">描述运行时上下文。</text>
</g>
<!-- features -->
<g id="node10" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1970.79,-1471.2 1547.21,-1471.2 1547.21,-1291.2 1970.79,-1291.2 1970.79,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1696.77" y="-1411.2" font-family="Arial" font-size="20.00" fill="#eff6ff">特性 DOM 应用</text>
<text xml:space="preserve" text-anchor="start" x="1581.84" y="-1388.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderNode.ts：特性 Renderer 消费单一 Fields</text>
<text xml:space="preserve" text-anchor="start" x="1567.27" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">与运行时只读快照；ChildLayoutRenderer 返回参数，由节点提交</text>
<text xml:space="preserve" text-anchor="start" x="1590.6" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">layoutParams。Spine 复制独立图层后释放 renderer 与</text>
<text xml:space="preserve" text-anchor="start" x="1734.4" y="-1334.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">stage。</text>
</g>
<!-- schema -->
<g id="node11" class="node">
<title>schema</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3291.94,-1148.4 2780.06,-1148.4 2780.06,-968.4 3291.94,-968.4 3291.94,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="2954.86" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">使用者节点 Schema</text>
<text xml:space="preserve" text-anchor="start" x="2889.7" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasViewSchema.ts：八种节点 Schema 与</text>
<text xml:space="preserve" text-anchor="start" x="2800.11" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasUISchemaOf 只向使用者公开持久化属性，不包含 DOM 与布局中间值。</text>
</g>
<!-- images -->
<g id="node12" class="node">
<title>images</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2326.53,-1148.4 1925.47,-1148.4 1925.47,-968.4 2326.53,-968.4 2326.53,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="2050.99" y="-1079.4" font-family="Arial" font-size="20.00" fill="#eff6ff">图像合成与异步提交</text>
<text xml:space="preserve" text-anchor="start" x="1980.93" y="-1056.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderImage.ts：ImageRenderUtils</text>
<text xml:space="preserve" text-anchor="start" x="1952.62" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">处理图像尺寸、颜色乘法与图层清除；FourCornerGradient</text>
<text xml:space="preserve" text-anchor="start" x="1945.53" y="-1020.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">逐列计算双线性插值。资源任务由 RenderSession 统一收束。</text>
</g>
<!-- entry&#45;&gt;pipeline -->
<g id="edge1" class="edge">
<title>entry&#45;&gt;pipeline</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1873.69,-2278.6C2046.72,-2222.7 2287.07,-2145.05 2454.32,-2091.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2455.02,-2093.55 2461.35,-2088.75 2453.41,-2088.55 2455.02,-2093.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2183.27,-2176.8 2183.27,-2199.6 2270.96,-2199.6 2270.96,-2176.8 2183.27,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="2186.27" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">驱动三阶段管线</text>
</g>
<!-- entry&#45;&gt;layout -->
<g id="edge2" class="edge">
<title>entry&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1440.43,-2327.73C1128.56,-2291.59 590,-2203.7 590,-2027.8 590,-2027.8 590,-2027.8 590,-1541.6 590,-1363.53 756.34,-1230.46 897.14,-1149.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="898.09,-1152.19 903.32,-1146.21 895.5,-1147.63 898.09,-1152.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590,-1692.6 590,-1715.4 642.68,-1715.4 642.68,-1692.6 590,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="593" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">诊断读取</text>
</g>
<!-- entry&#45;&gt;values -->
<g id="edge3" class="edge">
<title>entry&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1873.58,-2339.41C2618.85,-2306.36 5032,-2187.06 5032,-2027.8 5032,-2027.8 5032,-2027.8 5032,-1057.4 5032,-967.45 4998.75,-937.1 4925,-885.6 4845.97,-830.41 4608.59,-788.22 4428.84,-763.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4429.23,-760.45 4421.44,-762.02 4428.51,-765.65 4429.23,-760.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5032,-1531.2 5032,-1554 5143.02,-1554 5143.02,-1531.2 5032,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="5035" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">字体加载与错误报告</text>
</g>
<!-- entry&#45;&gt;state -->
<g id="edge4" class="edge">
<title>entry&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1440.38,-2329C991.23,-2285.43 0,-2172.84 0,-2027.8 0,-2027.8 0,-2027.8 0,-411.8 0,-220.2 241.55,-142.55 417.36,-111.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="417.6,-114.03 424.54,-110.17 416.7,-108.86 417.6,-114.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="0,-1208.4 0,-1231.2 87.68,-1231.2 87.68,-1208.4 0,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="3" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">启动与完成状态</text>
</g>
<!-- pipeline&#45;&gt;values -->
<g id="edge8" class="edge">
<title>pipeline&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2835.77,-1989.74C3187.93,-1910.01 3943.59,-1681.82 4237,-1148.4 4290.03,-1051.99 4269.72,-923.04 4244.97,-835.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4247.54,-834.73 4242.94,-828.25 4242.5,-836.19 4247.54,-834.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4134.58,-1369.8 4134.58,-1392.6 4245.6,-1392.6 4245.6,-1369.8 4134.58,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="4137.58" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">根尺寸、属性和标签</text>
</g>
<!-- pipeline&#45;&gt;state -->
<g id="edge10" class="edge">
<title>pipeline&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2464.21,-2020.18C1905.03,-2000.82 276,-1925.49 276,-1705 276,-1705 276,-1705 276,-411.8 276,-316.78 347.25,-240.09 422.61,-185.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="423.8,-187.91 428.39,-181.43 420.76,-183.64 423.8,-187.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="276,-1047 276,-1069.8 352.01,-1069.8 352.01,-1047 276,-1047"/>
<text xml:space="preserve" text-anchor="start" x="279" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">显式会话类型</text>
</g>
<!-- pipeline&#45;&gt;nodes -->
<g id="edge5" class="edge">
<title>pipeline&#45;&gt;nodes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2650,-1936.87C2650,-1895.67 2650,-1846.56 2650,-1804.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2652.63,-1804.36 2650,-1796.86 2647.38,-1804.36 2652.63,-1804.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2650,-1854 2650,-1876.8 2761.02,-1876.8 2761.02,-1854 2650,-1854"/>
<text xml:space="preserve" text-anchor="start" x="2653" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">节点构造与能力顺序</text>
</g>
<!-- pipeline&#45;&gt;dom_schema -->
<g id="edge6" class="edge">
<title>pipeline&#45;&gt;dom_schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2787.96,-1936.88C2844.18,-1896.99 2907.65,-1847.01 2958,-1794 3046.63,-1700.69 3052.31,-1663.45 3120,-1554 3134.68,-1530.26 3149.85,-1504.23 3163.7,-1479.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3165.85,-1481.29 3167.25,-1473.46 3161.28,-1478.71 3165.85,-1481.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3084.06,-1692.6 3084.06,-1715.4 3200.51,-1715.4 3200.51,-1692.6 3084.06,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="3087.06" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">唯一 DOM 属性提取</text>
</g>
<!-- pipeline&#45;&gt;fields -->
<g id="edge7" class="edge">
<title>pipeline&#45;&gt;fields</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2464.07,-1999C2149.45,-1945.83 1504.24,-1802.24 1072.31,-1471.2 878.52,-1322.68 764.24,-1196.62 851,-968.4 870.28,-917.68 906.31,-870.97 942.9,-832.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="944.74,-834.85 948.11,-827.66 940.99,-831.18 944.74,-834.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1072.31,-1369.8 1072.31,-1392.6 1195,-1392.6 1195,-1369.8 1072.31,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="1075.31" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">子节点收集与逻辑路径</text>
</g>
<!-- pipeline&#45;&gt;contracts -->
<g id="edge9" class="edge">
<title>pipeline&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2835.82,-2014.44C3320.89,-1982.31 4588,-1881.49 4588,-1705 4588,-1705 4588,-1705 4588,-734.6 4588,-537.3 3185.27,-450.57 2619.46,-423.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2619.78,-420.99 2612.16,-423.26 2619.53,-426.24 2619.78,-420.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4588,-1208.4 4588,-1231.2 4652.34,-1231.2 4652.34,-1208.4 4588,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="4591" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">上下文类型</text>
</g>
<!-- layout&#45;&gt;values -->
<g id="edge28" class="edge">
<title>layout&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1274.08,-989.66C1301.59,-981.41 1329.83,-973.95 1357,-968.4 1421.51,-955.23 3335.2,-804.95 3991.57,-753.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3991.33,-756.3 3998.6,-753.09 3990.92,-751.06 3991.33,-756.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2313.96,-885.6 2313.96,-908.4 2378.3,-908.4 2378.3,-885.6 2313.96,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="2316.96" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">取值与颜色</text>
</g>
<!-- layout&#45;&gt;fields -->
<g id="edge27" class="edge">
<title>layout&#45;&gt;fields</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1080.85,-968.47C1076.61,-927.27 1071.56,-878.16 1067.2,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1069.83,-835.63 1066.45,-828.44 1064.6,-836.17 1069.83,-835.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1074.49,-885.6 1074.49,-908.4 1162.17,-908.4 1162.17,-885.6 1074.49,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1077.49" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">白名单与默认值</text>
</g>
<!-- layout&#45;&gt;contracts -->
<g id="edge29" class="edge">
<title>layout&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1191.88,-968.44C1347.24,-833.48 1631.27,-589.77 1687,-562.8 1833.76,-491.76 2013.99,-454.4 2154.82,-434.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2154.82,-437.51 2161.89,-433.89 2154.1,-432.31 2154.82,-437.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1572.76,-724.2 1572.76,-747 1660.44,-747 1660.44,-724.2 1572.76,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1575.76" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">布局字段与结果</text>
</g>
<!-- values&#45;&gt;contracts -->
<g id="edge32" class="edge">
<title>values&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4086.84,-645.72C4037.05,-614.23 3977.57,-581.89 3919,-562.8 3683.71,-486.1 2986.93,-442.39 2619.62,-424.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2619.76,-421.46 2612.14,-423.71 2619.5,-426.7 2619.76,-421.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3970.37,-562.8 3970.37,-585.6 4058.06,-585.6 4058.06,-562.8 3970.37,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="3973.37" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">属性与诊断类型</text>
</g>
<!-- nodes&#45;&gt;layout -->
<g id="edge14" class="edge">
<title>nodes&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2396.6,-1677.52C2082,-1642.21 1566.98,-1571.25 1404.32,-1471.2 1281.49,-1395.66 1189.23,-1253.22 1137.42,-1157.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.82,-1156.21 1133.96,-1150.84 1135.19,-1158.69 1139.82,-1156.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1404.32,-1369.8 1404.32,-1392.6 1492,-1392.6 1492,-1369.8 1404.32,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="1407.32" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">第一项布局能力</text>
</g>
<!-- nodes&#45;&gt;state -->
<g id="edge16" class="edge">
<title>nodes&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2903.27,-1620.24C2912.59,-1618.01 2921.86,-1615.91 2931,-1614 3518.08,-1491.09 3678.66,-1552 4273,-1471.2 4512.72,-1438.61 4810,-1624.12 4810,-1382.2 4810,-1382.2 4810,-1382.2 4810,-411.8 4810,-206.31 1581.41,-114.75 776.9,-95.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="776.98,-92.51 769.41,-94.95 776.85,-97.75 776.98,-92.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4810,-885.6 4810,-908.4 4897.68,-908.4 4897.68,-885.6 4810,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="4813" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">会话上下文类型</text>
</g>
<!-- nodes&#45;&gt;dom_schema -->
<g id="edge11" class="edge">
<title>nodes&#45;&gt;dom_schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2807.19,-1614.07C2883.08,-1571.12 2974.16,-1519.59 3051.16,-1476.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3052.13,-1478.5 3057.36,-1472.52 3049.54,-1473.93 3052.13,-1478.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2950.5,-1531.2 2950.5,-1554 3093.43,-1554 3093.43,-1531.2 2950.5,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="2953.5" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">确定类型的节点 Schema</text>
</g>
<!-- nodes&#45;&gt;contracts -->
<g id="edge15" class="edge">
<title>nodes&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2605.12,-1614.18C2577.37,-1551.1 2547,-1463.51 2547,-1382.2 2547,-1382.2 2547,-1382.2 2547,-734.6 2547,-653.46 2505.51,-571.77 2464.78,-511.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2467.14,-509.93 2460.75,-505.21 2462.8,-512.89 2467.14,-509.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2547,-1047 2547,-1069.8 2669.69,-1069.8 2669.69,-1047 2547,-1047"/>
<text xml:space="preserve" text-anchor="start" x="2550" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">节点字段与上下文类型</text>
</g>
<!-- nodes&#45;&gt;features -->
<g id="edge12" class="edge">
<title>nodes&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2402.99,-1614.07C2270.47,-1566.35 2108.5,-1508.04 1980.15,-1461.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1981.37,-1459.47 1973.42,-1459.4 1979.59,-1464.41 1981.37,-1459.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2231.22,-1531.2 2231.22,-1554 2388.91,-1554 2388.91,-1531.2 2231.22,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="2234.22" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">按节点类型固定顺序应用能力</text>
</g>
<!-- nodes&#45;&gt;schema -->
<g id="edge13" class="edge">
<title>nodes&#45;&gt;schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2696.05,-1614.06C2740.44,-1529.71 2810.59,-1400.05 2877.65,-1291.2 2905.33,-1246.26 2937.93,-1197.86 2966.34,-1156.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2968.47,-1158.5 2970.6,-1150.85 2964.16,-1155.5 2968.47,-1158.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2877.65,-1369.8 2877.65,-1392.6 2977,-1392.6 2977,-1369.8 2877.65,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="2880.65" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">唯一节点输入类型</text>
</g>
<!-- dom_schema&#45;&gt;values -->
<g id="edge18" class="edge">
<title>dom_schema&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3401.64,-1358.08C3580.94,-1333.63 3837.61,-1289.81 3919,-1231.2 4055.69,-1132.77 4138.76,-948.62 4179.41,-834.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4181.83,-835.95 4181.85,-828 4176.88,-834.2 4181.83,-835.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4121.97,-1047 4121.97,-1069.8 4209.65,-1069.8 4209.65,-1047 4121.97,-1047"/>
<text xml:space="preserve" text-anchor="start" x="4124.97" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">颜色与枚举解析</text>
</g>
<!-- dom_schema&#45;&gt;contracts -->
<g id="edge19" class="edge">
<title>dom_schema&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3401.39,-1353.51C3524.27,-1325.1 3677.01,-1266.92 3755,-1148.4 3798.97,-1081.57 3799.29,-1035.02 3755,-968.4 3502.19,-588.1 2938.54,-468.52 2619.25,-430.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2619.69,-428.37 2611.94,-430.12 2619.09,-433.59 2619.69,-428.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3710.34,-885.6 3710.34,-908.4 3763.01,-908.4 3763.01,-885.6 3710.34,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="3713.34" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">属性类型</text>
</g>
<!-- dom_schema&#45;&gt;schema -->
<g id="edge17" class="edge">
<title>dom_schema&#45;&gt;schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3166.82,-1291.27C3143.33,-1249.63 3115.28,-1199.92 3091.2,-1157.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3093.58,-1156.11 3087.61,-1150.87 3089.01,-1158.69 3093.58,-1156.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3131.93,-1208.4 3131.93,-1231.2 3207.94,-1231.2 3207.94,-1208.4 3131.93,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="3134.93" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">确定输出契约</text>
</g>
<!-- fields&#45;&gt;contracts -->
<g id="edge31" class="edge">
<title>fields&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1198.77,-645.77C1253.64,-615.06 1318.13,-583.25 1380.32,-562.8 1637.39,-478.27 1947.2,-441.56 2154.62,-425.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2154.74,-428.32 2162.02,-425.14 2154.35,-423.08 2154.74,-428.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1380.32,-562.8 1380.32,-585.6 1433,-585.6 1433,-562.8 1380.32,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1383.32" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">字段类型</text>
</g>
<!-- contracts&#45;&gt;state -->
<g id="edge33" class="edge">
<title>contracts&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2164.82,-371.98C1806.07,-307.69 1106.24,-182.26 776.73,-123.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="777.44,-120.67 769.59,-121.93 776.51,-125.84 777.44,-120.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1545.67,-240 1545.67,-262.8 1598.35,-262.8 1598.35,-240 1545.67,-240"/>
<text xml:space="preserve" text-anchor="start" x="1548.67" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">会话类型</text>
</g>
<!-- features&#45;&gt;layout -->
<g id="edge20" class="edge">
<title>features&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1547.46,-1311.11C1485.36,-1288.29 1418.09,-1261.02 1358.32,-1231.2 1313.62,-1208.9 1267.05,-1180.94 1225.51,-1154.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1226.98,-1151.93 1219.26,-1150.05 1224.12,-1156.33 1226.98,-1151.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1358.32,-1208.4 1358.32,-1231.2 1411,-1231.2 1411,-1208.4 1358.32,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1361.32" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">布局能力</text>
</g>
<!-- features&#45;&gt;values -->
<g id="edge23" class="edge">
<title>features&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1970.73,-1361.81C2364.93,-1327.14 3176.95,-1253.62 3235,-1231.2 3474.87,-1138.55 3468.88,-1000.34 3699,-885.6 3790.56,-839.95 3898.5,-805.91 3991.53,-781.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3992.09,-784.56 3998.71,-780.16 3990.79,-779.47 3992.09,-784.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3570.36,-1047 3570.36,-1069.8 3728.05,-1069.8 3728.05,-1047 3570.36,-1047"/>
<text xml:space="preserve" text-anchor="start" x="3573.36" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">文本、颜色、资源与错误报告</text>
</g>
<!-- features&#45;&gt;state -->
<g id="edge25" class="edge">
<title>features&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1547.22,-1299.79C1537.72,-1296.78 1528.28,-1293.9 1519,-1291.2 1227.47,-1206.47 1099.07,-1323.43 851,-1148.4 542.73,-930.9 560.96,-408.67 583.8,-189.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="586.37,-190.54 584.56,-182.8 581.15,-189.98 586.37,-190.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="629.4,-724.2 629.4,-747 740.42,-747 740.42,-724.2 629.4,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="632.4" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">异步资源登记与完成</text>
</g>
<!-- features&#45;&gt;fields -->
<g id="edge22" class="edge">
<title>features&#45;&gt;fields</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1669.43,-1291.49C1583.43,-1207.02 1449.22,-1077.02 1329,-968.4 1278.31,-922.6 1220.91,-873.32 1171.94,-832.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1173.9,-830.23 1166.47,-827.41 1170.52,-834.25 1173.9,-830.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1521.35,-1047 1521.35,-1069.8 1620.7,-1069.8 1620.7,-1047 1521.35,-1047"/>
<text xml:space="preserve" text-anchor="start" x="1524.35" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">启用字段与默认值</text>
</g>
<!-- features&#45;&gt;contracts -->
<g id="edge24" class="edge">
<title>features&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1770.18,-1291.56C1783.97,-1204.84 1812.94,-1071.17 1870,-968.4 1973,-782.87 2151.3,-611.08 2269.21,-509.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2270.62,-511.54 2274.59,-504.66 2267.2,-507.56 2270.62,-511.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1919.72,-885.6 1919.72,-908.4 2019.07,-908.4 2019.07,-885.6 1919.72,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1922.72" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">特性字段与上下文</text>
</g>
<!-- features&#45;&gt;images -->
<g id="edge21" class="edge">
<title>features&#45;&gt;images</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1860.74,-1291.27C1909.17,-1248.93 1967.15,-1198.26 2016.53,-1155.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2018.18,-1157.13 2022.1,-1150.22 2014.72,-1153.18 2018.18,-1157.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1953.5,-1208.4 1953.5,-1231.2 2041.19,-1231.2 2041.19,-1208.4 1953.5,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1956.5" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">图像合成与提交</text>
</g>
<!-- schema&#45;&gt;contracts -->
<g id="edge26" class="edge">
<title>schema&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2976.89,-968.52C2903.93,-863.22 2771.97,-686.5 2630,-562.8 2607.88,-543.52 2582.96,-525.18 2557.74,-508.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2559.42,-506.34 2551.71,-504.4 2556.53,-510.72 2559.42,-506.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2871.15,-724.2 2871.15,-747 2958.83,-747 2958.83,-724.2 2871.15,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="2874.15" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">持久化字段类型</text>
</g>
<!-- images&#45;&gt;contracts -->
<g id="edge30" class="edge">
<title>images&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2162.02,-968.59C2210.54,-848.94 2296.61,-636.68 2347.06,-512.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2349.41,-513.48 2349.8,-505.54 2344.55,-511.5 2349.41,-513.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2290.93,-724.2 2290.93,-747 2343.61,-747 2343.61,-724.2 2290.93,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="2293.93" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">颜色类型</text>
</g>
</g>
</svg>
`;case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1003pt" height="810pt"
 viewBox="0.00 0.00 1003.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- frontend -->
<g id="node1" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="542.65,-780 222.61,-780 222.61,-600 542.65,-600 542.65,-780"/>
<text xml:space="preserve" text-anchor="start" x="332.62" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">单一前端扩展</text>
</g>
<!-- toolkit -->
<g id="node2" class="node">
<title>toolkit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="542.65,-480 222.61,-480 222.61,-300 542.65,-300 542.65,-480"/>
<text xml:space="preserve" text-anchor="start" x="283.15" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit TypeScript 产品</text>
</g>
<!-- pure -->
<g id="node3" class="node">
<title>pure</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="765.25,-180 0,-180 0,0 765.25,0 765.25,-180"/>
<text xml:space="preserve" text-anchor="start" x="340.95" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">业务纯计算</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。</text>
</g>
<!-- canvas -->
<g id="node4" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="972.65,-780 652.61,-780 652.61,-600 972.65,-600 972.65,-780"/>
<text xml:space="preserve" text-anchor="start" x="742.6" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染产品</text>
</g>
<!-- frontend&#45;&gt;toolkit -->
<g id="edge1" class="edge">
<title>frontend&#45;&gt;toolkit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M344.55,-600.4C340.71,-565.73 340.35,-525.81 343.5,-490.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="346.1,-490.51 344.23,-482.79 340.88,-489.99 346.1,-490.51"/>
</g>
<!-- toolkit&#45;&gt;frontend -->
<g id="edge2" class="edge">
<title>toolkit&#45;&gt;frontend</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M420.72,-479.78C424.56,-514.46 424.9,-554.38 421.74,-589.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="419.13,-589.66 421,-597.38 424.36,-590.18 419.13,-589.66"/>
</g>
<!-- toolkit&#45;&gt;pure -->
<g id="edge3" class="edge">
<title>toolkit&#45;&gt;pure</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M382.63,-300.4C382.63,-265.73 382.63,-225.81 382.63,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="385.25,-190.3 382.63,-182.8 380,-190.3 385.25,-190.3"/>
</g>
</g>
</svg>
`;case`runtime`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1136pt" height="1110pt"
 viewBox="0.00 0.00 1136.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- configuration -->
<g id="node1" class="node">
<title>configuration</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="93.34" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">产品类型检查配置</text>
</g>
<!-- config -->
<g id="node2" class="node">
<title>config</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="85.01" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">配置来源抽象与实现</text>
</g>
<!-- pi_plugin -->
<g id="node3" class="node">
<title>pi_plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1080 430,-1080 430,-900 750.04,-900 750.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="499.43" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi Agent 插件启动入口</text>
</g>
<!-- mcp -->
<g id="node4" class="node">
<title>mcp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-780 430,-780 430,-600 750.04,-600 750.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="531.68" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">MCP 协议接入</text>
</g>
<!-- host -->
<g id="node5" class="node">
<title>host</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="541.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">工作区 Host</text>
</g>
<!-- project_model -->
<g id="node6" class="node">
<title>project_model</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="488.04,-180 168,-180 168,0 488.04,0 488.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="261.34" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">工程格式纯计算包</text>
</g>
<!-- script -->
<g id="node7" class="node">
<title>script</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1106.29,-180 597.75,-180 597.75,0 1106.29,0 1106.29,-180"/>
<text xml:space="preserve" text-anchor="start" x="777" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 纯计算包</text>
<text xml:space="preserve" text-anchor="start" x="617.81" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">数据合同与三层纯转换设计分开登记；转换函数不读取工程或拥有跨请求缓存，Host</text>
<text xml:space="preserve" text-anchor="start" x="758.25" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有缓存状态并传入完整语义依据</text>
</g>
<!-- configuration&#45;&gt;config -->
<!-- pi_plugin&#45;&gt;mcp -->
<g id="edge2" class="edge">
<title>pi_plugin&#45;&gt;mcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-900.4C590.02,-865.73 590.02,-825.81 590.02,-790.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-790.3 590.02,-782.8 587.4,-790.3 592.65,-790.3"/>
</g>
<!-- mcp&#45;&gt;host -->
<g id="edge3" class="edge">
<title>mcp&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-600.4C590.02,-565.73 590.02,-525.81 590.02,-490.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-490.3 590.02,-482.8 587.4,-490.3 592.65,-490.3"/>
</g>
<!-- host&#45;&gt;project_model -->
<g id="edge4" class="edge">
<title>host&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M512.12,-300.4C480.86,-264.84 444.74,-223.76 412.82,-187.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="414.99,-185.95 408.07,-182.05 411.05,-189.42 414.99,-185.95"/>
</g>
<!-- host&#45;&gt;script -->
<g id="edge5" class="edge">
<title>host&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M667.92,-300.4C699.18,-264.84 735.3,-223.76 767.22,-187.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="768.99,-189.42 771.97,-182.05 765.05,-185.95 768.99,-189.42"/>
</g>
</g>
</svg>
`;case`frontend`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="866pt" height="1110pt"
 viewBox="0.00 0.00 866.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- packaging -->
<g id="node1" class="node">
<title>packaging</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="85.01" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">扩展清单与构建入口</text>
</g>
<!-- tests -->
<g id="node2" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1080 430,-1080 430,-900 750.04,-900 750.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="498.34" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">前端行为与生命周期测试</text>
</g>
<!-- plugin -->
<g id="node3" class="node">
<title>plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-780 430,-780 430,-600 750.04,-600 750.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="468.86" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">VSCode 宿主与 Effect 组合根</text>
</g>
<!-- ui -->
<g id="node4" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="476.04,-480 156,-480 156,-300 476.04,-300 476.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="207.67" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">单页侧栏、配置区与展开日志</text>
</g>
<!-- host_client -->
<g id="node5" class="node">
<title>host_client</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="802.04,-180 482,-180 482,0 802.04,0 802.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="567.01" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">只读合同与配置计划</text>
</g>
<!-- tests&#45;&gt;plugin -->
<g id="edge1" class="edge">
<title>tests&#45;&gt;plugin</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-900.4C590.02,-865.73 590.02,-825.81 590.02,-790.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-790.3 590.02,-782.8 587.4,-790.3 592.65,-790.3"/>
</g>
<!-- tests&#45;&gt;ui -->
<g id="edge2" class="edge">
<title>tests&#45;&gt;ui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M471.8,-900.02C435.14,-866.42 398.29,-825.25 375.02,-780 328.36,-689.27 316.06,-571.99 313.91,-490.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="316.54,-490.18 313.76,-482.74 311.29,-490.3 316.54,-490.18"/>
</g>
<!-- tests&#45;&gt;host_client -->
<g id="edge3" class="edge">
<title>tests&#45;&gt;host_client</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M714.2,-900.07C750.47,-866.93 785.57,-826.03 805.02,-780 889.99,-578.91 778.61,-325.22 702.43,-188.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="704.91,-187.76 698.95,-182.52 700.34,-190.34 704.91,-187.76"/>
</g>
<!-- plugin&#45;&gt;ui -->
<g id="edge4" class="edge">
<title>plugin&#45;&gt;ui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M508.55,-600.4C475.86,-564.84 438.08,-523.76 404.7,-487.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="406.7,-485.75 399.7,-482 402.84,-489.3 406.7,-485.75"/>
</g>
<!-- plugin&#45;&gt;host_client -->
<g id="edge5" class="edge">
<title>plugin&#45;&gt;host_client</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M597.75,-600.12C607.28,-490.48 623.44,-304.62 633.38,-190.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="635.99,-190.6 634.03,-182.9 630.76,-190.14 635.99,-190.6"/>
</g>
<!-- ui&#45;&gt;host_client -->
<g id="edge6" class="edge">
<title>ui&#45;&gt;host_client</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M412.95,-300.4C452.17,-264.54 497.54,-223.07 537.51,-186.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="538.9,-188.82 542.67,-181.82 535.36,-184.94 538.9,-188.82"/>
</g>
</g>
</svg>
`;case`pure_functions`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="393pt" height="210pt"
 viewBox="0.00 0.00 393.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- canvas -->
<g id="node1" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="362.72,-180 0,-180 0,0 362.72,0 362.72,-180"/>
<text xml:space="preserve" text-anchor="start" x="111.34" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 四向转换</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">内联 Base64、内联 Hjson、Canvas 二进制与 HTML</text>
<text xml:space="preserve" text-anchor="start" x="118.85" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">视图之间的无状态转换</text>
</g>
</g>
</svg>
`;case`canvas`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="5173pt" height="2470pt"
 viewBox="0.00 0.00 5173.00 2470.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2454.65)">
<!-- renderer_tests -->
<g id="node1" class="node">
<title>renderer_tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="793.02,-2439.6 472.98,-2439.6 472.98,-2259.6 793.02,-2259.6 793.02,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="562.98" y="-2341.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染测试</text>
</g>
<!-- entry -->
<g id="node2" class="node">
<title>entry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1336.77,-2439.6 903.23,-2439.6 903.23,-2259.6 1336.77,-2259.6 1336.77,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="1036.65" y="-2361.6" font-family="Arial" font-size="20.00" fill="#eff6ff">字体就绪后的唯一入口</text>
<text xml:space="preserve" text-anchor="start" x="947" y="-2338.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasLayoutEngine.ts：initialRender 等待字体后执行</text>
<text xml:space="preserve" text-anchor="start" x="923.29" y="-2320.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">render；入口启动状态，驱动管线，将同步错误传给状态与错误报告。</text>
</g>
<!-- pipeline -->
<g id="node3" class="node">
<title>pipeline</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2826.95,-2116.8 2455.05,-2116.8 2455.05,-1936.8 2826.95,-1936.8 2826.95,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="2581.55" y="-2056.8" font-family="Arial" font-size="20.00" fill="#eff6ff">DOM 渲染管线</text>
<text xml:space="preserve" text-anchor="start" x="2485.92" y="-2033.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderPipeline.ts：createNodeByType</text>
<text xml:space="preserve" text-anchor="start" x="2475.11" y="-2015.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">创建节点，prepareTree 只准备当前节点，arrangeTree</text>
<text xml:space="preserve" text-anchor="start" x="2478.87" y="-1997.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">按层准备直属子节点并确定最终矩形后递归，renderTree</text>
<text xml:space="preserve" text-anchor="start" x="2534.73" y="-1979.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">统一投影样式并按固定顺序应用特性。</text>
</g>
<!-- layout -->
<g id="node4" class="node">
<title>layout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1274.32,-1148.4 905.68,-1148.4 905.68,-968.4 1274.32,-968.4 1274.32,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1031.66" y="-1088.4" font-family="Arial" font-size="20.00" fill="#eff6ff">布局计算与诊断</text>
<text xml:space="preserve" text-anchor="start" x="925.74" y="-1065.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderLayout.ts：LayoutRenderer.render</text>
<text xml:space="preserve" text-anchor="start" x="972.05" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">返回最终矩形，由节点原子提交 layout 与</text>
<text xml:space="preserve" text-anchor="start" x="931.58" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">resolvedLayoutSize；CanvasLayoutDiagnostics</text>
<text xml:space="preserve" text-anchor="start" x="989.98" y="-1011.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">记录失败输入，按需生成诊断快照。</text>
</g>
<!-- values -->
<g id="node5" class="node">
<title>values</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4418.45,-825.6 4001.55,-825.6 4001.55,-645.6 4418.45,-645.6 4418.45,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="4118.32" y="-765.6" font-family="Arial" font-size="20.00" fill="#eff6ff">属性解析与渲染基础能力</text>
<text xml:space="preserve" text-anchor="start" x="4032.86" y="-742.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRuntimeUtils.ts：RuntimeNodeParser 精确识别</text>
<text xml:space="preserve" text-anchor="start" x="4084.55" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">DOM 标签；CanvasEnumNameParser</text>
<text xml:space="preserve" text-anchor="start" x="4021.6" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">校验枚举；CanvasColorValue、RichTextParser、GuidUtils</text>
<text xml:space="preserve" text-anchor="start" x="4027.86" y="-688.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">分别处理颜色、文本与资源；CanvasRenderEntry 报告错误。</text>
</g>
<!-- state -->
<g id="node6" class="node">
<title>state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="771.67,-180 432.33,-180 432.33,0 771.67,0 771.67,-180"/>
<text xml:space="preserve" text-anchor="start" x="551.99" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">页面渲染状态</text>
<text xml:space="preserve" text-anchor="start" x="469.01" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderState.ts：RenderSession</text>
<text xml:space="preserve" text-anchor="start" x="452.38" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">先登记后启动任务，统一等待纹理加载与原生 Assets</text>
<text xml:space="preserve" text-anchor="start" x="483.23" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">卸载后结算；失败保留原因，终态不重置。</text>
</g>
<!-- nodes -->
<g id="node7" class="node">
<title>nodes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2894.45,-1794 2387.55,-1794 2387.55,-1614 2894.45,-1614 2894.45,-1794"/>
<text xml:space="preserve" text-anchor="start" x="2565.99" y="-1725" font-family="Arial" font-size="20.00" fill="#eff6ff">节点输入与能力顺序</text>
<text xml:space="preserve" text-anchor="start" x="2495.51" y="-1702" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasTypesNodes.ts：CanvasNodeModel</text>
<text xml:space="preserve" text-anchor="start" x="2407.61" y="-1684" font-family="Arial" font-size="15.00" fill="#bfdbfe">与八个节点构造器接收确定 Schema 输出；各节点持有唯一 DEFAULT，render</text>
<text xml:space="preserve" text-anchor="start" x="2590.99" y="-1666" font-family="Arial" font-size="15.00" fill="#bfdbfe">只顺序调用能力。</text>
</g>
<!-- dom_schema -->
<g id="node8" class="node">
<title>dom_schema</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3401.67,-1471.2 3032.33,-1471.2 3032.33,-1291.2 3401.67,-1291.2 3401.67,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="3115.31" y="-1402.2" font-family="Arial" font-size="20.00" fill="#eff6ff">DOM 严格 Schema 提取</text>
<text xml:space="preserve" text-anchor="start" x="3075.28" y="-1379.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasDomSchema.extract 以节点专属 Zod</text>
<text xml:space="preserve" text-anchor="start" x="3052.38" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">strictObject 校验属性并输出确定类型对象；可选属性成为</text>
<text xml:space="preserve" text-anchor="start" x="3113.64" y="-1343.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Option，未知属性与必选缺失报错。</text>
</g>
<!-- fields -->
<g id="node9" class="node">
<title>fields</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1300.85,-825.6 823.15,-825.6 823.15,-645.6 1300.85,-645.6 1300.85,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="995.32" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">白名单与统一取值</text>
<text xml:space="preserve" text-anchor="start" x="905.67" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderBase.ts：FeatureValues.resolve</text>
<text xml:space="preserve" text-anchor="start" x="843.21" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">按显式启用条件选取输入或节点默认值；不制造动态字段表，不修改节点输入。</text>
</g>
<!-- contracts -->
<g id="node10" class="node">
<title>contracts</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2609.23,-502.8 2164.77,-502.8 2164.77,-322.8 2609.23,-322.8 2609.23,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2320.32" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">特性与运行时契约</text>
<text xml:space="preserve" text-anchor="start" x="2289.88" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasTypesBase.ts：Fields</text>
<text xml:space="preserve" text-anchor="start" x="2184.83" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">只描述持久化属性；CanvasRuntimeNode、RenderNodeContext</text>
<text xml:space="preserve" text-anchor="start" x="2330.74" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">描述运行时上下文。</text>
</g>
<!-- features -->
<g id="node11" class="node">
<title>features</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1970.79,-1471.2 1547.21,-1471.2 1547.21,-1291.2 1970.79,-1291.2 1970.79,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1696.77" y="-1411.2" font-family="Arial" font-size="20.00" fill="#eff6ff">特性 DOM 应用</text>
<text xml:space="preserve" text-anchor="start" x="1581.84" y="-1388.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderNode.ts：特性 Renderer 消费单一 Fields</text>
<text xml:space="preserve" text-anchor="start" x="1567.27" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">与运行时只读快照；ChildLayoutRenderer 返回参数，由节点提交</text>
<text xml:space="preserve" text-anchor="start" x="1590.6" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">layoutParams。Spine 复制独立图层后释放 renderer 与</text>
<text xml:space="preserve" text-anchor="start" x="1734.4" y="-1334.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">stage。</text>
</g>
<!-- schema -->
<g id="node12" class="node">
<title>schema</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3291.94,-1148.4 2780.06,-1148.4 2780.06,-968.4 3291.94,-968.4 3291.94,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="2954.86" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">使用者节点 Schema</text>
<text xml:space="preserve" text-anchor="start" x="2889.7" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasViewSchema.ts：八种节点 Schema 与</text>
<text xml:space="preserve" text-anchor="start" x="2800.11" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasUISchemaOf 只向使用者公开持久化属性，不包含 DOM 与布局中间值。</text>
</g>
<!-- images -->
<g id="node13" class="node">
<title>images</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2326.53,-1148.4 1925.47,-1148.4 1925.47,-968.4 2326.53,-968.4 2326.53,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="2050.99" y="-1079.4" font-family="Arial" font-size="20.00" fill="#eff6ff">图像合成与异步提交</text>
<text xml:space="preserve" text-anchor="start" x="1980.93" y="-1056.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">CanvasRenderImage.ts：ImageRenderUtils</text>
<text xml:space="preserve" text-anchor="start" x="1952.62" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">处理图像尺寸、颜色乘法与图层清除；FourCornerGradient</text>
<text xml:space="preserve" text-anchor="start" x="1945.53" y="-1020.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">逐列计算双线性插值。资源任务由 RenderSession 统一收束。</text>
</g>
<!-- entry&#45;&gt;pipeline -->
<g id="edge1" class="edge">
<title>entry&#45;&gt;pipeline</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1336.71,-2302.89C1632.98,-2240.41 2160.1,-2129.23 2445.09,-2069.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2445.36,-2071.75 2452.16,-2067.63 2444.28,-2066.61 2445.36,-2071.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1926.11,-2176.8 1926.11,-2199.6 2013.79,-2199.6 2013.79,-2176.8 1926.11,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="1929.11" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">驱动三阶段管线</text>
</g>
<!-- entry&#45;&gt;layout -->
<g id="edge2" class="edge">
<title>entry&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M903.28,-2262.07C756.82,-2196.59 590,-2105.04 590,-2027.8 590,-2027.8 590,-2027.8 590,-1541.6 590,-1363.53 756.34,-1230.46 897.14,-1149.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="898.09,-1152.19 903.32,-1146.21 895.5,-1147.63 898.09,-1152.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590,-1692.6 590,-1715.4 642.68,-1715.4 642.68,-1692.6 590,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="593" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">诊断读取</text>
</g>
<!-- entry&#45;&gt;values -->
<g id="edge3" class="edge">
<title>entry&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1336.6,-2342.28C2157.64,-2316.9 5032,-2214.72 5032,-2027.8 5032,-2027.8 5032,-2027.8 5032,-1057.4 5032,-967.45 4998.75,-937.1 4925,-885.6 4845.97,-830.41 4608.59,-788.22 4428.84,-763.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4429.23,-760.45 4421.44,-762.02 4428.51,-765.65 4429.23,-760.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5032,-1531.2 5032,-1554 5143.02,-1554 5143.02,-1531.2 5032,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="5035" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">字体加载与错误报告</text>
</g>
<!-- entry&#45;&gt;state -->
<g id="edge4" class="edge">
<title>entry&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M903.54,-2276.71C884.79,-2270.8 866.08,-2265.03 848,-2259.6 473.77,-2147.3 0,-2418.52 0,-2027.8 0,-2027.8 0,-2027.8 0,-411.8 0,-218.37 245.04,-141.18 422.45,-110.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="422.76,-113.25 429.72,-109.41 421.89,-108.07 422.76,-113.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="0,-1208.4 0,-1231.2 87.68,-1231.2 87.68,-1208.4 0,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="3" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">启动与完成状态</text>
</g>
<!-- pipeline&#45;&gt;values -->
<g id="edge8" class="edge">
<title>pipeline&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2826.74,-1990.31C3180.34,-1911.39 3941.31,-1684.26 4237,-1148.4 4290.16,-1052.06 4269.82,-923.1 4245.03,-835.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4247.6,-834.76 4242.99,-828.28 4242.56,-836.22 4247.6,-834.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4133.91,-1369.8 4133.91,-1392.6 4244.93,-1392.6 4244.93,-1369.8 4133.91,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="4136.91" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">根尺寸、属性和标签</text>
</g>
<!-- pipeline&#45;&gt;state -->
<g id="edge10" class="edge">
<title>pipeline&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2455.42,-2020.09C1897.9,-2000.49 276,-1924.61 276,-1705 276,-1705 276,-1705 276,-411.8 276,-316.23 348.07,-239.61 424.43,-185.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="425.67,-187.58 430.31,-181.13 422.66,-183.28 425.67,-187.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="276,-1047 276,-1069.8 352.01,-1069.8 352.01,-1047 276,-1047"/>
<text xml:space="preserve" text-anchor="start" x="279" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">显式会话类型</text>
</g>
<!-- pipeline&#45;&gt;nodes -->
<g id="edge5" class="edge">
<title>pipeline&#45;&gt;nodes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2641,-1936.87C2641,-1895.67 2641,-1846.56 2641,-1804.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2643.63,-1804.36 2641,-1796.86 2638.38,-1804.36 2643.63,-1804.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2641,-1854 2641,-1876.8 2752.02,-1876.8 2752.02,-1854 2641,-1854"/>
<text xml:space="preserve" text-anchor="start" x="2644" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">节点构造与能力顺序</text>
</g>
<!-- pipeline&#45;&gt;dom_schema -->
<g id="edge6" class="edge">
<title>pipeline&#45;&gt;dom_schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2777.82,-1937.07C2834.17,-1897.04 2898.04,-1846.89 2949,-1794 3039.16,-1700.42 3045.91,-1663.43 3116,-1554 3131.21,-1530.26 3146.97,-1504.22 3161.39,-1479.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3163.57,-1481.23 3165.1,-1473.43 3159.04,-1478.57 3163.57,-1481.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3078.7,-1692.6 3078.7,-1715.4 3195.15,-1715.4 3195.15,-1692.6 3078.7,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="3081.7" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">唯一 DOM 属性提取</text>
</g>
<!-- pipeline&#45;&gt;fields -->
<g id="edge7" class="edge">
<title>pipeline&#45;&gt;fields</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2455.18,-1998.56C2142.01,-1944.85 1501.33,-1800.61 1072.31,-1471.2 878.66,-1322.51 762.88,-1196.1 851,-968.4 870.78,-917.28 907.67,-870.5 945.13,-832.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="946.53,-834.87 949.98,-827.72 942.82,-831.15 946.53,-834.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1072.31,-1369.8 1072.31,-1392.6 1195,-1392.6 1195,-1369.8 1072.31,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="1075.31" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">子节点收集与逻辑路径</text>
</g>
<!-- pipeline&#45;&gt;contracts -->
<g id="edge9" class="edge">
<title>pipeline&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2826.8,-2014.58C3313.47,-1982.73 4588,-1882.39 4588,-1705 4588,-1705 4588,-1705 4588,-734.6 4588,-537.3 3185.27,-450.57 2619.46,-423.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2619.78,-420.99 2612.16,-423.26 2619.53,-426.24 2619.78,-420.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4588,-1208.4 4588,-1231.2 4652.34,-1231.2 4652.34,-1208.4 4588,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="4591" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">上下文类型</text>
</g>
<!-- layout&#45;&gt;values -->
<g id="edge28" class="edge">
<title>layout&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1274.08,-989.66C1301.59,-981.41 1329.83,-973.95 1357,-968.4 1421.51,-955.23 3335.2,-804.95 3991.57,-753.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3991.33,-756.3 3998.6,-753.09 3990.92,-751.06 3991.33,-756.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2313.96,-885.6 2313.96,-908.4 2378.3,-908.4 2378.3,-885.6 2313.96,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="2316.96" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">取值与颜色</text>
</g>
<!-- layout&#45;&gt;fields -->
<g id="edge27" class="edge">
<title>layout&#45;&gt;fields</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1082.24,-968.47C1078.64,-927.27 1074.36,-878.16 1070.66,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1073.28,-835.69 1070.02,-828.45 1068.05,-836.14 1073.28,-835.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1076.84,-885.6 1076.84,-908.4 1164.52,-908.4 1164.52,-885.6 1076.84,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1079.84" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">白名单与默认值</text>
</g>
<!-- layout&#45;&gt;contracts -->
<g id="edge29" class="edge">
<title>layout&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1192.77,-968.45C1349.48,-833.52 1635.96,-589.84 1692,-562.8 1837.16,-492.77 2015.1,-455.42 2154.6,-435.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2154.93,-438.22 2162,-434.59 2154.21,-433.02 2154.93,-438.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1576.89,-724.2 1576.89,-747 1664.57,-747 1664.57,-724.2 1576.89,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1579.89" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">布局字段与结果</text>
</g>
<!-- values&#45;&gt;contracts -->
<g id="edge32" class="edge">
<title>values&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4086.84,-645.72C4037.05,-614.23 3977.57,-581.89 3919,-562.8 3683.71,-486.1 2986.93,-442.39 2619.62,-424.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2619.76,-421.46 2612.14,-423.71 2619.5,-426.7 2619.76,-421.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3970.37,-562.8 3970.37,-585.6 4058.06,-585.6 4058.06,-562.8 3970.37,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="3973.37" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">属性与诊断类型</text>
</g>
<!-- nodes&#45;&gt;layout -->
<g id="edge14" class="edge">
<title>nodes&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2387.73,-1677.14C2075.24,-1641.57 1565.49,-1570.47 1404.32,-1471.2 1281.54,-1395.58 1189.27,-1253.16 1137.44,-1157.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.84,-1156.18 1133.98,-1150.81 1135.21,-1158.66 1139.84,-1156.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1404.32,-1369.8 1404.32,-1392.6 1492,-1392.6 1492,-1369.8 1404.32,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="1407.32" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">第一项布局能力</text>
</g>
<!-- nodes&#45;&gt;state -->
<g id="edge16" class="edge">
<title>nodes&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2894.27,-1620.24C2903.59,-1618 2912.86,-1615.91 2922,-1614 3512.58,-1490.55 3674.12,-1552.2 4272,-1471.2 4512.17,-1438.66 4810,-1624.56 4810,-1382.2 4810,-1382.2 4810,-1382.2 4810,-411.8 4810,-206.58 1586.14,-114.84 782.02,-95.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="782.1,-92.52 774.54,-94.97 781.97,-97.77 782.1,-92.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4810,-885.6 4810,-908.4 4897.68,-908.4 4897.68,-885.6 4810,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="4813" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">会话上下文类型</text>
</g>
<!-- nodes&#45;&gt;dom_schema -->
<g id="edge11" class="edge">
<title>nodes&#45;&gt;dom_schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2800.68,-1614.07C2877.78,-1571.12 2970.31,-1519.59 3048.53,-1476.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3049.59,-1478.45 3054.86,-1472.5 3047.03,-1473.86 3049.59,-1478.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2946.27,-1531.2 2946.27,-1554 3089.2,-1554 3089.2,-1531.2 2946.27,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="2949.27" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">确定类型的节点 Schema</text>
</g>
<!-- nodes&#45;&gt;contracts -->
<g id="edge15" class="edge">
<title>nodes&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2600.18,-1614.12C2574.81,-1550.83 2547,-1463.02 2547,-1382.2 2547,-1382.2 2547,-1382.2 2547,-734.6 2547,-653.46 2505.51,-571.77 2464.78,-511.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2467.14,-509.93 2460.75,-505.21 2462.8,-512.89 2467.14,-509.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2547,-1047 2547,-1069.8 2669.69,-1069.8 2669.69,-1047 2547,-1047"/>
<text xml:space="preserve" text-anchor="start" x="2550" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">节点字段与上下文类型</text>
</g>
<!-- nodes&#45;&gt;features -->
<g id="edge12" class="edge">
<title>nodes&#45;&gt;features</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2396.49,-1614.07C2266.18,-1566.67 2107.11,-1508.81 1980.47,-1462.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1981.43,-1460.31 1973.48,-1460.21 1979.63,-1465.24 1981.43,-1460.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2226.45,-1531.2 2226.45,-1554 2384.14,-1554 2384.14,-1531.2 2226.45,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="2229.45" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">按节点类型固定顺序应用能力</text>
</g>
<!-- nodes&#45;&gt;schema -->
<g id="edge13" class="edge">
<title>nodes&#45;&gt;schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2689.37,-1614.27C2735.88,-1530.07 2809.05,-1400.5 2877.65,-1291.2 2905.77,-1246.4 2938.5,-1197.92 2966.89,-1156.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2969.03,-1158.46 2971.15,-1150.8 2964.72,-1155.46 2969.03,-1158.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2877.65,-1369.8 2877.65,-1392.6 2977,-1392.6 2977,-1369.8 2877.65,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="2880.65" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">唯一节点输入类型</text>
</g>
<!-- dom_schema&#45;&gt;values -->
<g id="edge18" class="edge">
<title>dom_schema&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3401.64,-1358.08C3580.94,-1333.63 3837.61,-1289.81 3919,-1231.2 4055.69,-1132.77 4138.76,-948.62 4179.41,-834.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4181.83,-835.95 4181.85,-828 4176.88,-834.2 4181.83,-835.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4121.97,-1047 4121.97,-1069.8 4209.65,-1069.8 4209.65,-1047 4121.97,-1047"/>
<text xml:space="preserve" text-anchor="start" x="4124.97" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">颜色与枚举解析</text>
</g>
<!-- dom_schema&#45;&gt;contracts -->
<g id="edge19" class="edge">
<title>dom_schema&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3401.39,-1353.51C3524.27,-1325.1 3677.01,-1266.92 3755,-1148.4 3798.97,-1081.57 3799.29,-1035.02 3755,-968.4 3502.19,-588.1 2938.54,-468.52 2619.25,-430.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2619.69,-428.37 2611.94,-430.12 2619.09,-433.59 2619.69,-428.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3710.34,-885.6 3710.34,-908.4 3763.01,-908.4 3763.01,-885.6 3710.34,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="3713.34" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">属性类型</text>
</g>
<!-- dom_schema&#45;&gt;schema -->
<g id="edge17" class="edge">
<title>dom_schema&#45;&gt;schema</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3166.82,-1291.27C3143.33,-1249.63 3115.28,-1199.92 3091.2,-1157.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3093.58,-1156.11 3087.61,-1150.87 3089.01,-1158.69 3093.58,-1156.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3131.93,-1208.4 3131.93,-1231.2 3207.94,-1231.2 3207.94,-1208.4 3131.93,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="3134.93" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">确定输出契约</text>
</g>
<!-- fields&#45;&gt;contracts -->
<g id="edge31" class="edge">
<title>fields&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1203.78,-645.79C1258.65,-615.08 1323.14,-583.27 1385.32,-562.8 1640.7,-478.73 1948.39,-441.93 2154.78,-425.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2154.85,-428.55 2162.13,-425.36 2154.45,-423.32 2154.85,-428.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1385.32,-562.8 1385.32,-585.6 1438,-585.6 1438,-562.8 1385.32,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1388.32" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">字段类型</text>
</g>
<!-- contracts&#45;&gt;state -->
<g id="edge33" class="edge">
<title>contracts&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2164.99,-371.9C1807.3,-307.62 1110.43,-182.38 781.76,-123.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="782.49,-120.77 774.65,-122.03 781.56,-125.94 782.49,-120.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1548.02,-240 1548.02,-262.8 1600.7,-262.8 1600.7,-240 1548.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="1551.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">会话类型</text>
</g>
<!-- features&#45;&gt;layout -->
<g id="edge20" class="edge">
<title>features&#45;&gt;layout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1547.46,-1311.11C1485.36,-1288.29 1418.09,-1261.02 1358.32,-1231.2 1313.62,-1208.9 1267.05,-1180.94 1225.51,-1154.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1226.98,-1151.93 1219.26,-1150.05 1224.12,-1156.33 1226.98,-1151.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1358.32,-1208.4 1358.32,-1231.2 1411,-1231.2 1411,-1208.4 1358.32,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1361.32" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">布局能力</text>
</g>
<!-- features&#45;&gt;values -->
<g id="edge23" class="edge">
<title>features&#45;&gt;values</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1970.73,-1361.81C2364.93,-1327.14 3176.95,-1253.62 3235,-1231.2 3474.87,-1138.55 3468.88,-1000.34 3699,-885.6 3790.56,-839.95 3898.5,-805.91 3991.53,-781.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3992.09,-784.56 3998.71,-780.16 3990.79,-779.47 3992.09,-784.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3570.36,-1047 3570.36,-1069.8 3728.05,-1069.8 3728.05,-1047 3570.36,-1047"/>
<text xml:space="preserve" text-anchor="start" x="3573.36" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">文本、颜色、资源与错误报告</text>
</g>
<!-- features&#45;&gt;state -->
<g id="edge25" class="edge">
<title>features&#45;&gt;state</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1547.22,-1299.79C1537.72,-1296.78 1528.28,-1293.9 1519,-1291.2 1227.47,-1206.47 1098.07,-1324.83 851,-1148.4 544.48,-929.53 564.66,-408.66 588.36,-190.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="590.94,-190.74 589.16,-182.99 585.72,-190.16 590.94,-190.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="631.25,-724.2 631.25,-747 742.27,-747 742.27,-724.2 631.25,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="634.25" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">异步资源登记与完成</text>
</g>
<!-- features&#45;&gt;fields -->
<g id="edge22" class="edge">
<title>features&#45;&gt;fields</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1668.79,-1291.33C1582.62,-1207.03 1448.53,-1077.4 1329,-968.4 1279.05,-922.85 1222.67,-873.6 1174.63,-832.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1176.38,-830.3 1168.99,-827.4 1172.96,-834.28 1176.38,-830.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1520.99,-1047 1520.99,-1069.8 1620.34,-1069.8 1620.34,-1047 1520.99,-1047"/>
<text xml:space="preserve" text-anchor="start" x="1523.99" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">启用字段与默认值</text>
</g>
<!-- features&#45;&gt;contracts -->
<g id="edge24" class="edge">
<title>features&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1770.18,-1291.56C1783.97,-1204.84 1812.94,-1071.17 1870,-968.4 1973,-782.87 2151.3,-611.08 2269.21,-509.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2270.62,-511.54 2274.59,-504.66 2267.2,-507.56 2270.62,-511.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1919.72,-885.6 1919.72,-908.4 2019.07,-908.4 2019.07,-885.6 1919.72,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1922.72" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">特性字段与上下文</text>
</g>
<!-- features&#45;&gt;images -->
<g id="edge21" class="edge">
<title>features&#45;&gt;images</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1860.74,-1291.27C1909.17,-1248.93 1967.15,-1198.26 2016.53,-1155.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2018.18,-1157.13 2022.1,-1150.22 2014.72,-1153.18 2018.18,-1157.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1953.5,-1208.4 1953.5,-1231.2 2041.19,-1231.2 2041.19,-1208.4 1953.5,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1956.5" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">图像合成与提交</text>
</g>
<!-- schema&#45;&gt;contracts -->
<g id="edge26" class="edge">
<title>schema&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2976.89,-968.52C2903.93,-863.22 2771.97,-686.5 2630,-562.8 2607.88,-543.52 2582.96,-525.18 2557.74,-508.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2559.42,-506.34 2551.71,-504.4 2556.53,-510.72 2559.42,-506.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2871.15,-724.2 2871.15,-747 2958.83,-747 2958.83,-724.2 2871.15,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="2874.15" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">持久化字段类型</text>
</g>
<!-- images&#45;&gt;contracts -->
<g id="edge30" class="edge">
<title>images&#45;&gt;contracts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2162.02,-968.59C2210.54,-848.94 2296.61,-636.68 2347.06,-512.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2349.41,-513.48 2349.8,-505.54 2344.55,-511.5 2349.41,-513.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2290.93,-724.2 2290.93,-747 2343.61,-747 2343.61,-724.2 2290.93,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="2293.93" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">颜色类型</text>
</g>
</g>
</svg>
`;case`tooling`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1801pt" height="1710pt"
 viewBox="0.00 0.00 1801.00 1710.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1695.05)">
<!-- tests -->
<g id="node1" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1194.52,-1680 874.48,-1680 874.48,-1500 1194.52,-1500 1194.52,-1680"/>
<text xml:space="preserve" text-anchor="start" x="984.49" y="-1582" font-family="Arial" font-size="20.00" fill="#eff6ff">自身回归测试</text>
</g>
<!-- testing -->
<g id="node2" class="node">
<title>testing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="868.52,-1380 548.48,-1380 548.48,-1200 868.52,-1200 868.52,-1380"/>
<text xml:space="preserve" text-anchor="start" x="640.15" y="-1282" font-family="Arial" font-size="20.00" fill="#eff6ff">真实 Git 审计夹具</text>
</g>
<!-- cli -->
<g id="node3" class="node">
<title>cli</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="993.76,-1080 585.23,-1080 585.23,-900 993.76,-900 993.76,-1080"/>
<text xml:space="preserve" text-anchor="start" x="729.48" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">CLI 与进程边界</text>
<text xml:space="preserve" text-anchor="start" x="605.29" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">项目特有检查与逐锚点检视；标准工具由 pnpm scripts 直接执行</text>
</g>
<!-- coding -->
<g id="node4" class="node">
<title>coding</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1312.52,-780 992.48,-780 992.48,-600 1312.52,-600 1312.52,-780"/>
<text xml:space="preserve" text-anchor="start" x="1095.26" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Java 风格规则</text>
</g>
<!-- architecture -->
<g id="node5" class="node">
<title>architecture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1090.52,-480 770.48,-480 770.48,-300 1090.52,-300 1090.52,-480"/>
<text xml:space="preserve" text-anchor="start" x="880.49" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">架构模型解析</text>
</g>
<!-- anchoring -->
<g id="node6" class="node">
<title>anchoring</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1253.52,-180 933.48,-180 933.48,0 1253.52,0 1253.52,-180"/>
<text xml:space="preserve" text-anchor="start" x="1035.15" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">规范与代码锚定</text>
</g>
<!-- hooks -->
<g id="node7" class="node">
<title>hooks</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="321,-1680 0,-1680 0,-1500 321,-1500 321,-1680"/>
<text xml:space="preserve" text-anchor="start" x="111.6" y="-1593" font-family="Arial" font-size="20.00" fill="#eff6ff">Git 钩子转发</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1570" font-family="Arial" font-size="15.00" fill="#bfdbfe">纯转发薄壳：零判定逻辑，全部判定经唯一入口 cli</text>
</g>
<!-- review_state -->
<g id="node8" class="node">
<title>review_state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1770.94,-1680 1304.06,-1680 1304.06,-1500 1770.94,-1500 1770.94,-1680"/>
<text xml:space="preserve" text-anchor="start" x="1440.81" y="-1602" font-family="Arial" font-size="20.00" fill="#eff6ff">当前 Git tree 的审计终态</text>
<text xml:space="preserve" text-anchor="start" x="1324.11" y="-1579" font-family="Arial" font-size="15.00" fill="#bfdbfe">SQLite 单文件，三方语义合并；令牌和未提交确认仅在 worktree 私有 Git</text>
<text xml:space="preserve" text-anchor="start" x="1525" y="-1561" font-family="Arial" font-size="15.00" fill="#bfdbfe">目录</text>
</g>
<!-- tests&#45;&gt;testing -->
<g id="edge1" class="edge">
<title>tests&#45;&gt;testing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M937.57,-1500.4C898.34,-1464.54 852.97,-1423.07 813.01,-1386.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="815.16,-1384.94 807.85,-1381.82 811.61,-1388.82 815.16,-1384.94"/>
</g>
<!-- tests&#45;&gt;cli -->
<g id="edge2" class="edge">
<title>tests&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1016.96,-1500.29C999.23,-1419.71 968.07,-1298.74 923.5,-1200 906.25,-1161.79 882.77,-1122.45 860.28,-1088.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="862.6,-1087.11 856.26,-1082.32 858.23,-1090.02 862.6,-1087.11"/>
</g>
<!-- tests&#45;&gt;coding -->
<g id="edge3" class="edge">
<title>tests&#45;&gt;coding</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1046.19,-1500.03C1068.35,-1331.37 1116.32,-966.29 1139.48,-790.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1142.06,-790.57 1140.44,-782.79 1136.86,-789.89 1142.06,-790.57"/>
</g>
<!-- tests&#45;&gt;architecture -->
<g id="edge4" class="edge">
<title>tests&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M874.75,-1574.88C747.98,-1554.32 578.41,-1503.84 493.5,-1380 288.7,-1081.33 640.75,-671.14 826.68,-487.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="828.38,-489.15 831.88,-482.01 824.7,-485.41 828.38,-489.15"/>
</g>
<!-- tests&#45;&gt;anchoring -->
<g id="edge5" class="edge">
<title>tests&#45;&gt;anchoring</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1159.06,-1500.01C1290.4,-1394.78 1478.5,-1206.46 1478.5,-991 1478.5,-991 1478.5,-991 1478.5,-689 1478.5,-485.41 1318.79,-296.01 1205.1,-186.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1207.12,-185.27 1199.88,-182 1203.5,-189.07 1207.12,-185.27"/>
</g>
<!-- testing&#45;&gt;cli -->
<g id="edge7" class="edge">
<title>testing&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M732.58,-1200.4C742.04,-1165.58 752.95,-1125.47 762.66,-1089.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="765.14,-1090.62 764.57,-1082.7 760.07,-1089.25 765.14,-1090.62"/>
</g>
<!-- cli&#45;&gt;coding -->
<g id="edge8" class="edge">
<title>cli&#45;&gt;coding</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M897.43,-900.4C941.19,-864.47 991.83,-822.9 1036.4,-786.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1037.89,-788.48 1042.02,-781.7 1034.56,-784.43 1037.89,-788.48"/>
</g>
<!-- cli&#45;&gt;architecture -->
<g id="edge9" class="edge">
<title>cli&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M810.45,-900.12C836.33,-790.37 880.22,-604.25 907.15,-490.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="909.68,-490.73 908.85,-482.83 904.57,-489.52 909.68,-490.73"/>
</g>
<!-- cli&#45;&gt;anchoring -->
<g id="edge10" class="edge">
<title>cli&#45;&gt;anchoring</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M748.07,-900.27C690,-761.71 603.35,-490.15 715.5,-300 760.98,-222.88 846.26,-172.23 924.32,-140.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="925.02,-142.69 931,-137.45 923.06,-137.82 925.02,-142.69"/>
</g>
<!-- coding&#45;&gt;architecture -->
<g id="edge11" class="edge">
<title>coding&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1086.49,-600.4C1060.11,-564.99 1029.65,-524.1 1002.69,-487.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1005.03,-486.65 998.44,-482.2 1000.82,-489.79 1005.03,-486.65"/>
</g>
<!-- coding&#45;&gt;anchoring -->
<g id="edge12" class="edge">
<title>coding&#45;&gt;anchoring</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1156.57,-600.13C1158.86,-521.01 1158.97,-402.29 1145.5,-300 1140.71,-263.64 1131.96,-224.47 1122.99,-189.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1125.55,-189.41 1121.1,-182.83 1120.48,-190.75 1125.55,-189.41"/>
</g>
<!-- architecture&#45;&gt;anchoring -->
<g id="edge13" class="edge">
<title>architecture&#45;&gt;anchoring</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M978.96,-300.4C998.17,-265.28 1020.32,-224.79 1039.99,-188.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1042.19,-190.27 1043.49,-182.43 1037.58,-187.75 1042.19,-190.27"/>
</g>
<!-- hooks&#45;&gt;cli -->
<g id="edge6" class="edge">
<title>hooks&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M226.3,-1500.05C289.74,-1417.41 390.97,-1293.39 493.5,-1200 538.34,-1159.15 591.39,-1119.43 640.11,-1085.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="641.33,-1088.12 646.03,-1081.71 638.36,-1083.79 641.33,-1088.12"/>
</g>
</g>
</svg>
`;case`repository`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="1110pt"
 viewBox="0.00 0.00 350.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- build -->
<g id="node1" class="node">
<title>build</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="90.55" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">pnpm 与依赖锁定</text>
</g>
<!-- instructions -->
<g id="node2" class="node">
<title>instructions</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">开发指引</text>
</g>
<!-- git -->
<g id="node3" class="node">
<title>git</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">版本控制</text>
</g>
<!-- editor -->
<g id="node4" class="node">
<title>editor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="118.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">编辑器配置</text>
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
<svg width="1210pt" height="1110pt"
 viewBox="0.00 0.00 1210.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- tooling -->
<g id="node1" class="node">
<title>tooling</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">治理契约</text>
</g>
<!-- layout -->
<g id="node2" class="node">
<title>layout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="110.01" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">文件布局契约</text>
</g>
<!-- development -->
<g id="node3" class="node">
<title>development</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">开发与协作契约</text>
</g>
<!-- runtime -->
<g id="node4" class="node">
<title>runtime</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="86.11" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit 运行时合同</text>
</g>
<!-- host_configuration -->
<g id="node5" class="node">
<title>host_configuration</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1080 430,-1080 430,-900 750.04,-900 750.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="513.89" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">保留 Host 配置合同</text>
</g>
<!-- bescript -->
<g id="node6" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-780 430,-780 430,-600 750.04,-600 750.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="515" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
</g>
<!-- canvas_render -->
<g id="node7" class="node">
<title>canvas_render</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="520" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染规范</text>
</g>
<!-- vscode_frontend -->
<g id="node8" class="node">
<title>vscode_frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="513.88" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">VS Code 前端职责</text>
</g>
<!-- canvas -->
<g id="node9" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-1080 860,-1080 860,-900 1180.04,-900 1180.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="933.33" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 四向转换合同</text>
</g>
<!-- preview -->
<g id="node10" class="node">
<title>preview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-780 860,-780 860,-600 1180.04,-600 1180.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="945.01" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">静态预览与发布合同</text>
</g>
<!-- tooling&#45;&gt;layout -->
<!-- layout&#45;&gt;development -->
<!-- development&#45;&gt;runtime -->
<!-- host_configuration&#45;&gt;bescript -->
<!-- bescript&#45;&gt;canvas_render -->
<!-- canvas_render&#45;&gt;vscode_frontend -->
<!-- canvas&#45;&gt;preview -->
</g>
</svg>
`;case`documentation`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="810pt"
 viewBox="0.00 0.00 350.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- manual -->
<g id="node1" class="node">
<title>manual</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="44.99" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">MechToolkit 发布与开发指南</text>
</g>
<!-- specs -->
<g id="node2" class="node">
<title>specs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">产品规范</text>
</g>
<!-- workflows -->
<g id="node3" class="node">
<title>workflows</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="93.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">ComfyUI 工作流</text>
</g>
<!-- manual&#45;&gt;specs -->
<!-- specs&#45;&gt;workflows -->
</g>
</svg>
`;case`legacy`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="510pt"
 viewBox="0.00 0.00 780.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- mcp -->
<g id="node1" class="node">
<title>mcp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">MCP 协议入口</text>
</g>
<!-- core -->
<g id="node2" class="node">
<title>core</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-180 215,-180 215,0 535.04,0 535.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="341.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">核心逻辑</text>
</g>
<!-- host -->
<g id="node3" class="node">
<title>host</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="509.99" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">VSCode Host 入口</text>
</g>
<!-- mcp&#45;&gt;core -->
<g id="edge1" class="edge">
<title>mcp&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M223.94,-300.4C249.49,-264.99 278.99,-224.1 305.11,-187.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="306.94,-189.85 309.2,-182.23 302.68,-186.78 306.94,-189.85"/>
</g>
<!-- host&#45;&gt;core -->
<g id="edge2" class="edge">
<title>host&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M526.1,-300.4C500.55,-264.99 471.05,-224.1 444.93,-187.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="447.36,-186.78 440.84,-182.23 443.1,-189.85 447.36,-186.78"/>
</g>
</g>
</svg>
`;case`legacy_core`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1640pt" height="1110pt"
 viewBox="0.00 0.00 1640.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- composition -->
<g id="node1" class="node">
<title>composition</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="110.01" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">核心服务装配</text>
</g>
<!-- analysis -->
<g id="node2" class="node">
<title>analysis</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">工程分析</text>
</g>
<!-- bescript -->
<g id="node3" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="102.78" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">BeScript 语法</text>
</g>
<!-- canvas -->
<g id="node4" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="106.67" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 数据</text>
</g>
<!-- infra -->
<g id="node5" class="node">
<title>infra</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1080 430,-1080 430,-900 750.04,-900 750.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="556.68" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">基础设施</text>
</g>
<!-- lint -->
<g id="node6" class="node">
<title>lint</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-780 430,-780 430,-600 750.04,-600 750.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="523.34" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">游戏工程静态检查</text>
</g>
<!-- persistence -->
<g id="node7" class="node">
<title>persistence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="548.35" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">工程持久化</text>
</g>
<!-- refactor -->
<g id="node8" class="node">
<title>refactor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="540.01" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">游戏逻辑重构</text>
</g>
<!-- sdk -->
<g id="node9" class="node">
<title>sdk</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-1080 860,-1080 860,-900 1180.04,-900 1180.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="980.01" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">平台 SDK</text>
</g>
<!-- search -->
<g id="node10" class="node">
<title>search</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-780 860,-780 860,-600 1180.04,-600 1180.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="986.68" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">工程检索</text>
</g>
<!-- tsview -->
<g id="node11" class="node">
<title>tsview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-480 860,-480 860,-300 1180.04,-300 1180.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="987.79" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">TS 视图</text>
</g>
<!-- worker -->
<g id="node12" class="node">
<title>worker</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="970.01" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">工作进程命令</text>
</g>
<!-- tests -->
<g id="node13" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-1080 1290,-1080 1290,-900 1610.04,-900 1610.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1416.68" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">核心回归</text>
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
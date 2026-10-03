var e=e=>{switch(e){case`index`:return`digraph {
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
    pure [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">业务纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。</FONT></TD></TR></TABLE>>,
        likec4_id=pure,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    specifications [height=2.5,
        label=<<FONT POINT-SIZE="20">工具链规范</FONT>>,
        likec4_id=specifications,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pure -> specifications [arrowhead=normal,
        likec4_id="4w9xau",
        minlen=1,
        style=dashed];
    product [height=2.5,
        label=<<FONT POINT-SIZE="20">Toolkit 产品源码参考文档</FONT>>,
        likec4_id=product,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    renderer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 渲染引擎</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">HTML 属性经显式 Option<BR/>解析为节点输入；节点按固定顺序应用特性，管线统一递归与排版，页面只有一次自动渲染。</FONT></TD></TR></TABLE>>,
        likec4_id=renderer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    product -> renderer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">渲染行为测试</FONT></TD></TR></TABLE>>,
        likec4_id="35shvg",
        style=dashed];
    documentation [height=2.5,
        label=<<FONT POINT-SIZE="20">产品规范与参考</FONT>>,
        likec4_id=documentation,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    product -> documentation [arrowhead=normal,
        likec4_id=basvxv,
        minlen=1,
        style=dashed];
    fixtures [height=2.5,
        label=<<FONT POINT-SIZE="20">跨组件夹具</FONT>>,
        likec4_id=fixtures,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    product -> fixtures [arrowhead=normal,
        likec4_id=d6khmb,
        style=dashed];
    resources [height=2.5,
        label=<<FONT POINT-SIZE="20">共享静态资源</FONT>>,
        likec4_id=resources,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    product -> resources [arrowhead=normal,
        likec4_id=h2jxnc,
        style=dashed];
    tools [height=2.5,
        label=<<FONT POINT-SIZE="20">自举检查工具</FONT>>,
        likec4_id=tools,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    repository [height=2.5,
        label=<<FONT POINT-SIZE="20">仓库工程基础</FONT>>,
        likec4_id=repository,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tools -> repository [arrowhead=normal,
        likec4_id="1mlvl37",
        style=dashed];
    tools -> specifications [arrowhead=normal,
        likec4_id="1d609m7",
        style=dashed];
    toolkit [height=2.5,
        label=<<FONT POINT-SIZE="20">Toolkit TypeScript 产品</FONT>>,
        likec4_id=toolkit,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> repository [arrowhead=normal,
        likec4_id="15fjhza",
        style=dashed];
    toolkit -> specifications [arrowhead=normal,
        likec4_id="1lqfw2y",
        style=dashed];
    toolkit -> fixtures [arrowhead=normal,
        likec4_id="1xxd1me",
        style=dashed];
    renderer -> resources [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">字体与样式资源</FONT></TD></TR></TABLE>>,
        likec4_id="1xbbocu",
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
    first [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BEScript 文本与局部 AST 转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Issue 45<BR/>的实现归属：唯一正文词法、控制结构、调用与反向序列化入口；依赖文本合同和局部<BR/>AST，不依赖 Host</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.script.conversion.first",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bescript [height=2.5,
        label=<<FONT POINT-SIZE="20">BEScript 内部格式</FONT>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    first -> bescript [arrowhead=normal,
        likec4_id=ciduwf,
        minlen=0,
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
    logic [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Host 生命周期与工程 IO</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">工作区读取、语义输入闭包与视图运行时缓存的唯一所有者；编排三层纯转换，缓存随 Host<BR/>生命周期释放</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.host.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    second [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Context 与官方 TS AST 业务转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Issue 46 的实现归属：引用身份、变量语义、平台方法和 Canvas<BR/>业务映射；仅消费 Context 与显式语义输入，不读取工程或缓存</FONT></TD></TR></TABLE>>,
        likec4_id="toolkit.script.conversion.second",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> second [arrowhead=normal,
        likec4_id=rgt9ql,
        style=dashed,
        weight=2];
    logic_1 [height=2.5,
        label=<<FONT POINT-SIZE="20">工程设置解析</FONT>>,
        likec4_id="toolkit.project_model.logic",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    logic -> logic_1 [arrowhead=normal,
        likec4_id=nupxrj,
        style=dashed,
        weight=2];
    tests [height=2.5,
        label=<<FONT POINT-SIZE="20">工程格式测试</FONT>>,
        likec4_id="toolkit.project_model.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tests -> logic_1 [arrowhead=normal,
        likec4_id="14dubtt",
        minlen=1,
        style=dashed,
        weight=3];
    bescript [height=2.5,
        label=<<FONT POINT-SIZE="20">BEScript 内部格式</FONT>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    second -> bescript [arrowhead=normal,
        likec4_id="1kn27s5",
        style=dashed];
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
`;case`core`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=core,
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
    pure [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">业务纯计算</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。</FONT></TD></TR></TABLE>>,
        likec4_id=pure,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    specifications [height=2.5,
        label=<<FONT POINT-SIZE="20">工具链规范</FONT>>,
        likec4_id=specifications,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pure -> specifications [arrowhead=normal,
        likec4_id="4w9xau",
        minlen=1,
        style=dashed];
    product [height=2.5,
        label=<<FONT POINT-SIZE="20">Toolkit 产品源码参考文档</FONT>>,
        likec4_id=product,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    renderer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 渲染引擎</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">HTML 属性经显式 Option<BR/>解析为节点输入；节点按固定顺序应用特性，管线统一递归与排版，页面只有一次自动渲染。</FONT></TD></TR></TABLE>>,
        likec4_id=renderer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    product -> renderer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">渲染行为测试</FONT></TD></TR></TABLE>>,
        likec4_id="35shvg",
        style=dashed];
    documentation [height=2.5,
        label=<<FONT POINT-SIZE="20">产品规范与参考</FONT>>,
        likec4_id=documentation,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    product -> documentation [arrowhead=normal,
        likec4_id=basvxv,
        minlen=1,
        style=dashed];
    fixtures [height=2.5,
        label=<<FONT POINT-SIZE="20">跨组件夹具</FONT>>,
        likec4_id=fixtures,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    product -> fixtures [arrowhead=normal,
        likec4_id=d6khmb,
        style=dashed];
    resources [height=2.5,
        label=<<FONT POINT-SIZE="20">共享静态资源</FONT>>,
        likec4_id=resources,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    product -> resources [arrowhead=normal,
        likec4_id=h2jxnc,
        style=dashed];
    tools [height=2.5,
        label=<<FONT POINT-SIZE="20">自举检查工具</FONT>>,
        likec4_id=tools,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    repository [height=2.5,
        label=<<FONT POINT-SIZE="20">仓库工程基础</FONT>>,
        likec4_id=repository,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tools -> repository [arrowhead=normal,
        likec4_id="1mlvl37",
        style=dashed];
    tools -> specifications [arrowhead=normal,
        likec4_id="1d609m7",
        style=dashed];
    toolkit [height=2.5,
        label=<<FONT POINT-SIZE="20">Toolkit TypeScript 产品</FONT>>,
        likec4_id=toolkit,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> repository [arrowhead=normal,
        likec4_id="15fjhza",
        style=dashed];
    toolkit -> specifications [arrowhead=normal,
        likec4_id="1lqfw2y",
        style=dashed];
    toolkit -> fixtures [arrowhead=normal,
        likec4_id="1xxd1me",
        style=dashed];
    renderer -> resources [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">字体与样式资源</FONT></TD></TR></TABLE>>,
        likec4_id="1xbbocu",
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
    vscode_plugin [height=2.5,
        label=<<FONT POINT-SIZE="20">VS Code 插件启动入口</FONT>>,
        likec4_id="toolkit.vscode_plugin",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    frontend [height=2.5,
        label=<<FONT POINT-SIZE="20">前端容器栈</FONT>>,
        likec4_id="toolkit.frontend",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vscode_plugin -> frontend [arrowhead=normal,
        likec4_id=an7aje,
        style=dashed];
    mcp [height=2.5,
        label=<<FONT POINT-SIZE="20">MCP 协议接入</FONT>>,
        likec4_id="toolkit.mcp",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vscode_plugin -> mcp [arrowhead=normal,
        likec4_id=hxy50q,
        style=dashed];
    host [height=2.5,
        label=<<FONT POINT-SIZE="20">工作区 Host</FONT>>,
        likec4_id="toolkit.host",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vscode_plugin -> host [arrowhead=normal,
        likec4_id=nvhn4k,
        style=dashed];
    pi_plugin [height=2.5,
        label=<<FONT POINT-SIZE="20">Pi Agent 插件启动入口</FONT>>,
        likec4_id="toolkit.pi_plugin",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pi_plugin -> mcp [arrowhead=normal,
        likec4_id="1hz4l2z",
        minlen=1,
        style=dashed];
    frontend -> host [arrowhead=normal,
        likec4_id="1vvahxg",
        style=dashed];
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
    dotnet [height=2.5,
        label=<<FONT POINT-SIZE="20">旧 .NET SDK 配置参考</FONT>>,
        likec4_id="repository.dotnet",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
    bescript [height=2.5,
        label=<<FONT POINT-SIZE="20">BEScript 内部格式</FONT>>,
        likec4_id="specifications.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    canvas_render [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 渲染规范</FONT>>,
        likec4_id="specifications.canvas_render",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bescript -> canvas_render [style=invis];
    canvas [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 四向转换合同</FONT>>,
        likec4_id="specifications.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    canvas_render -> canvas [style=invis];
}
`;case`product`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=product,
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
    mcp [height=2.5,
        label=<<FONT POINT-SIZE="20">MCP 协议入口</FONT>>,
        likec4_id="product.mcp",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    core [height=2.5,
        label=<<FONT POINT-SIZE="20">核心逻辑</FONT>>,
        likec4_id="product.core",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mcp -> core [arrowhead=normal,
        likec4_id="11oiiwf",
        minlen=1,
        style=dashed];
    host [height=2.5,
        label=<<FONT POINT-SIZE="20">VSCode Host 入口</FONT>>,
        likec4_id="product.host",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    host -> core [arrowhead=normal,
        likec4_id=pj0t0x,
        minlen=1,
        style=dashed];
    renderer_tests [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 渲染测试</FONT>>,
        likec4_id="product.renderer_tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    frontend [height=2.5,
        label=<<FONT POINT-SIZE="20">前端</FONT>>,
        likec4_id="product.frontend",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    frontend -> core [arrowhead=normal,
        likec4_id="1aiy73z",
        minlen=1,
        style=dashed];
}
`;case`product_core`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=product_core,
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
    composition [height=2.5,
        label=<<FONT POINT-SIZE="20">核心服务装配</FONT>>,
        likec4_id="product.core.composition",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis [height=2.5,
        label=<<FONT POINT-SIZE="20">工程分析</FONT>>,
        likec4_id="product.core.analysis",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    composition -> analysis [style=invis];
    bescript [height=2.5,
        label=<<FONT POINT-SIZE="20">BeScript 语法</FONT>>,
        likec4_id="product.core.bescript",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    analysis -> bescript [style=invis];
    canvas [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 数据</FONT>>,
        likec4_id="product.core.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bescript -> canvas [style=invis];
    infra [height=2.5,
        label=<<FONT POINT-SIZE="20">基础设施</FONT>>,
        likec4_id="product.core.infra",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint [height=2.5,
        label=<<FONT POINT-SIZE="20">游戏工程静态检查</FONT>>,
        likec4_id="product.core.lint",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    infra -> lint [style=invis];
    persistence [height=2.5,
        label=<<FONT POINT-SIZE="20">工程持久化</FONT>>,
        likec4_id="product.core.persistence",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lint -> persistence [style=invis];
    refactor [height=2.5,
        label=<<FONT POINT-SIZE="20">游戏逻辑重构</FONT>>,
        likec4_id="product.core.refactor",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    persistence -> refactor [style=invis];
    sdk [height=2.5,
        label=<<FONT POINT-SIZE="20">平台 SDK</FONT>>,
        likec4_id="product.core.sdk",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    search [height=2.5,
        label=<<FONT POINT-SIZE="20">工程检索</FONT>>,
        likec4_id="product.core.search",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    sdk -> search [style=invis];
    tsview [height=2.5,
        label=<<FONT POINT-SIZE="20">TS 视图</FONT>>,
        likec4_id="product.core.tsview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    search -> tsview [style=invis];
    worker [height=2.5,
        label=<<FONT POINT-SIZE="20">工作进程命令</FONT>>,
        likec4_id="product.core.worker",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tsview -> worker [style=invis];
    tests [height=2.5,
        label=<<FONT POINT-SIZE="20">核心回归</FONT>>,
        likec4_id="product.core.tests",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
    diagrams [height=2.5,
        label=<<FONT POINT-SIZE="20">架构展示资产</FONT>>,
        likec4_id="documentation.diagrams",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    specs -> diagrams [style=invis];
    workflows [height=2.5,
        label=<<FONT POINT-SIZE="20">ComfyUI 工作流</FONT>>,
        likec4_id="documentation.workflows",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    diagrams -> workflows [style=invis];
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
    canvas [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Canvas 四向转换</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">内联 Base64、内联 Hjson、Canvas 二进制与 HTML<BR/>视图之间的无状态转换</FONT></TD></TR></TABLE>>,
        likec4_id="pure.canvas",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3121pt" height="856pt"
 viewBox="0.00 0.00 3121.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- pure -->
<g id="node1" class="node">
<title>pure</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="765.25,-825.6 0,-825.6 0,-645.6 765.25,-645.6 765.25,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="340.95" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">业务纯计算</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。</text>
</g>
<!-- specifications -->
<g id="node2" class="node">
<title>specifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="916.65,-502.8 596.61,-502.8 596.61,-322.8 916.65,-322.8 916.65,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="714.95" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">工具链规范</text>
</g>
<!-- product -->
<g id="node3" class="node">
<title>product</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2256.65,-825.6 1936.61,-825.6 1936.61,-645.6 2256.65,-645.6 2256.65,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1997.72" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit 产品源码参考文档</text>
</g>
<!-- renderer -->
<g id="node4" class="node">
<title>renderer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2660.98,-502.8 2108.27,-502.8 2108.27,-322.8 2660.98,-322.8 2660.98,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2314.6" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染引擎</text>
<text xml:space="preserve" text-anchor="start" x="2306.69" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">HTML 属性经显式 Option</text>
<text xml:space="preserve" text-anchor="start" x="2128.33" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">解析为节点输入；节点按固定顺序应用特性，管线统一递归与排版，页面只有一次自动渲染。</text>
</g>
<!-- documentation -->
<g id="node5" class="node">
<title>documentation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3090.65,-502.8 2770.61,-502.8 2770.61,-322.8 3090.65,-322.8 3090.65,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2872.28" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">产品规范与参考</text>
</g>
<!-- fixtures -->
<g id="node6" class="node">
<title>fixtures</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1776.65,-502.8 1456.61,-502.8 1456.61,-322.8 1776.65,-322.8 1776.65,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1574.95" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">跨组件夹具</text>
</g>
<!-- resources -->
<g id="node7" class="node">
<title>resources</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2187.65,-180 1867.61,-180 1867.61,0 2187.65,0 2187.65,-180"/>
<text xml:space="preserve" text-anchor="start" x="1977.62" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">共享静态资源</text>
</g>
<!-- tools -->
<g id="node8" class="node">
<title>tools</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1195.65,-825.6 875.61,-825.6 875.61,-645.6 1195.65,-645.6 1195.65,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="985.62" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">自举检查工具</text>
</g>
<!-- repository -->
<g id="node9" class="node">
<title>repository</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1346.65,-502.8 1026.61,-502.8 1026.61,-322.8 1346.65,-322.8 1346.65,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1136.62" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">仓库工程基础</text>
</g>
<!-- toolkit -->
<g id="node10" class="node">
<title>toolkit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1625.65,-825.6 1305.61,-825.6 1305.61,-645.6 1625.65,-645.6 1625.65,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1366.15" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit TypeScript 产品</text>
</g>
<!-- pure&#45;&gt;specifications -->
<g id="edge1" class="edge">
<title>pure&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M486.31,-645.67C535.76,-603.25 594.99,-552.45 645.38,-509.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="646.78,-511.48 650.77,-504.6 643.37,-507.49 646.78,-511.48"/>
</g>
<!-- product&#45;&gt;renderer -->
<g id="edge2" class="edge">
<title>product&#45;&gt;renderer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2176.47,-645.67C2214.24,-603.6 2259.41,-553.28 2298,-510.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2299.8,-512.22 2302.86,-504.88 2295.89,-508.71 2299.8,-512.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2249.26,-562.8 2249.26,-585.6 2325.28,-585.6 2325.28,-562.8 2249.26,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2252.26" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">渲染行为测试</text>
</g>
<!-- product&#45;&gt;documentation -->
<g id="edge3" class="edge">
<title>product&#45;&gt;documentation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2256.55,-676.42C2381.88,-630.41 2560.42,-563.96 2715.63,-502.8 2730.41,-496.97 2745.73,-490.84 2761.07,-484.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2761.85,-487.14 2767.81,-481.88 2759.87,-482.27 2761.85,-487.14"/>
</g>
<!-- product&#45;&gt;fixtures -->
<g id="edge4" class="edge">
<title>product&#45;&gt;fixtures</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1952.32,-645.62C1921.53,-626.15 1889.34,-605.42 1859.63,-585.6 1823.12,-561.24 1784.09,-534.14 1748.22,-508.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1749.77,-506.67 1742.13,-504.48 1746.74,-510.95 1749.77,-506.67"/>
</g>
<!-- product&#45;&gt;resources -->
<g id="edge5" class="edge">
<title>product&#45;&gt;resources</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2077.57,-645.83C2069,-602.83 2059.51,-550.32 2053.63,-502.8 2040.45,-396.45 2033.8,-273.76 2030.54,-190.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2033.16,-190.07 2030.26,-182.67 2027.92,-190.27 2033.16,-190.07"/>
</g>
<!-- renderer&#45;&gt;resources -->
<g id="edge11" class="edge">
<title>renderer&#45;&gt;resources</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2285.66,-322.87C2238.55,-280.53 2182.15,-229.86 2134.12,-186.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2136.06,-184.91 2128.73,-181.85 2132.56,-188.82 2136.06,-184.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2216.83,-240 2216.83,-262.8 2304.51,-262.8 2304.51,-240 2216.83,-240"/>
<text xml:space="preserve" text-anchor="start" x="2219.83" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">字体与样式资源</text>
</g>
<!-- tools&#45;&gt;specifications -->
<g id="edge7" class="edge">
<title>tools&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M949.43,-645.87C931.04,-626.29 911.95,-605.46 894.63,-585.6 873.86,-561.8 852.14,-535.48 832.23,-510.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="834.47,-509.34 827.73,-505.13 830.38,-512.62 834.47,-509.34"/>
</g>
<!-- tools&#45;&gt;repository -->
<g id="edge6" class="edge">
<title>tools&#45;&gt;repository</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1077.49,-645.67C1097.04,-604.12 1120.39,-554.53 1140.45,-511.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1142.71,-513.27 1143.53,-505.37 1137.96,-511.04 1142.71,-513.27"/>
</g>
<!-- toolkit&#45;&gt;specifications -->
<g id="edge9" class="edge">
<title>toolkit&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1305.63,-662.21C1192.4,-610.97 1040.82,-542.39 925.63,-490.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="927.02,-488.02 919.11,-487.32 924.86,-492.8 927.02,-488.02"/>
</g>
<!-- toolkit&#45;&gt;fixtures -->
<g id="edge10" class="edge">
<title>toolkit&#45;&gt;fixtures</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1507.49,-645.67C1527.04,-604.12 1550.39,-554.53 1570.45,-511.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1572.71,-513.27 1573.53,-505.37 1567.96,-511.04 1572.71,-513.27"/>
</g>
<!-- toolkit&#45;&gt;repository -->
<g id="edge8" class="edge">
<title>toolkit&#45;&gt;repository</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1388.28,-645.67C1351.77,-603.68 1308.12,-553.49 1270.78,-510.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1272.77,-508.85 1265.87,-504.91 1268.81,-512.3 1272.77,-508.85"/>
</g>
</g>
</svg>
`;case`bescript_first_layer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1086pt" height="871pt"
 viewBox="0.00 0.00 1086.00 871.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 856.25)">
<g id="clust1" class="cluster">
<title>cluster_ast</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="593.6,-568 593.6,-833.2 977.6,-833.2 977.6,-568 593.6,-568"/>
<text xml:space="preserve" text-anchor="start" x="601.6" y="-820.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">局部 AST 层</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_text</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="155.6,-260 155.6,-541.2 985.6,-541.2 985.6,-260 155.6,-260"/>
<text xml:space="preserve" text-anchor="start" x="163.6" y="-528.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">原版文本层</text>
</g>
<!-- local_ast -->
<g id="node1" class="node">
<title>local_ast</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="945.62,-780 625.58,-780 625.58,-600 945.62,-600 945.62,-780"/>
<text xml:space="preserve" text-anchor="start" x="746.71" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">局部 AST</text>
</g>
<!-- code_file -->
<g id="node2" class="node">
<title>code_file</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="515.62,-480 195.58,-480 195.58,-300 515.62,-300 515.62,-480"/>
<text xml:space="preserve" text-anchor="start" x="311.69" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">.code 文件</text>
</g>
<!-- vocabulary -->
<g id="node3" class="node">
<title>vocabulary</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="945.62,-480 625.58,-480 625.58,-300 945.62,-300 945.62,-480"/>
<text xml:space="preserve" text-anchor="start" x="743.93" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">类型与转义</text>
</g>
<!-- first -->
<g id="node4" class="node">
<title>first</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="515.2,-180 0,-180 0,0 515.2,0 515.2,-180"/>
<text xml:space="preserve" text-anchor="start" x="132.57" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 文本与局部 AST 转换</text>
<text xml:space="preserve" text-anchor="start" x="229.25" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Issue 45</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">的实现归属：唯一正文词法、控制结构、调用与反向序列化入口；依赖文本合同和局部</text>
<text xml:space="preserve" text-anchor="start" x="200.51" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">AST，不依赖 Host</text>
</g>
<!-- bescript -->
<g id="node5" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="945.62,-180 625.58,-180 625.58,0 945.62,0 945.62,-180"/>
<text xml:space="preserve" text-anchor="start" x="710.58" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
</g>
<!-- local_ast&#45;&gt;code_file -->
<g id="edge2" class="edge">
<title>local_ast&#45;&gt;code_file</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M655.88,-600.06C627.74,-580.7 598.15,-560.29 570.6,-541.2 544.85,-523.36 517.41,-504.25 491.05,-485.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="492.67,-483.79 485.02,-481.65 489.67,-488.09 492.67,-483.79"/>
</g>
<!-- local_ast&#45;&gt;vocabulary -->
<g id="edge3" class="edge">
<title>local_ast&#45;&gt;vocabulary</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M785.6,-600.4C785.6,-565.73 785.6,-525.81 785.6,-490.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="788.23,-490.3 785.6,-482.8 782.98,-490.3 788.23,-490.3"/>
</g>
<!-- local_ast&#45;&gt;bescript -->
<g id="edge4" class="edge">
<title>local_ast&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M945.55,-614.56C972.49,-594.65 996.8,-570.35 1012.6,-541.2 1072.17,-431.33 1068.69,-371.68 1012.6,-260 998.48,-231.87 977.2,-207.24 953.24,-186.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="955.08,-184.23 947.68,-181.34 951.67,-188.21 955.08,-184.23"/>
</g>
<!-- code_file&#45;&gt;vocabulary -->
<g id="edge5" class="edge">
<title>code_file&#45;&gt;vocabulary</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M515.59,-390C548.89,-390 582.18,-390 615.48,-390"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="615.28,-392.63 622.78,-390 615.28,-387.38 615.28,-392.63"/>
</g>
<!-- code_file&#45;&gt;bescript -->
<g id="edge6" class="edge">
<title>code_file&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M483.74,-300.2C535.78,-264.13 595.99,-222.41 648.87,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="650.14,-188.07 654.81,-181.64 647.15,-183.76 650.14,-188.07"/>
</g>
<!-- vocabulary&#45;&gt;bescript -->
<g id="edge7" class="edge">
<title>vocabulary&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M785.6,-300.4C785.6,-265.73 785.6,-225.81 785.6,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="788.23,-190.3 785.6,-182.8 782.98,-190.3 788.23,-190.3"/>
</g>
<!-- first&#45;&gt;bescript -->
<g id="edge1" class="edge">
<title>first&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M515.16,-90C548.59,-90 582.01,-90 615.44,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="615.29,-92.63 622.79,-90 615.29,-87.38 615.29,-92.63"/>
</g>
</g>
</svg>
`;case`bescript_second_layer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1636pt" height="871pt"
 viewBox="0.00 0.00 1636.00 871.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 856.25)">
<g id="clust1" class="cluster">
<title>cluster_context</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-568 8,-833.2 392,-833.2 392,-568 8,-568"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-820.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">零件上下文层</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_ast</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-268 8,-533.2 392,-533.2 392,-268 8,-268"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-520.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">局部 AST 层</text>
</g>
<!-- device_context -->
<g id="node1" class="node">
<title>device_context</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-780 39.98,-780 39.98,-600 360.02,-600 360.02,-780"/>
<text xml:space="preserve" text-anchor="start" x="66.64" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">全局变量、零件元数据与零件上下文</text>
</g>
<!-- local_ast -->
<g id="node2" class="node">
<title>local_ast</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-480 39.98,-480 39.98,-300 360.02,-300 360.02,-480"/>
<text xml:space="preserve" text-anchor="start" x="161.1" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">局部 AST</text>
</g>
<!-- logic -->
<g id="node3" class="node">
<title>logic</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1176.11,-780 625.89,-780 625.89,-600 1176.11,-600 1176.11,-780"/>
<text xml:space="preserve" text-anchor="start" x="805.98" y="-702" font-family="Arial" font-size="20.00" fill="#eff6ff">Host 生命周期与工程 IO</text>
<text xml:space="preserve" text-anchor="start" x="645.95" y="-679" font-family="Arial" font-size="15.00" fill="#bfdbfe">工作区读取、语义输入闭包与视图运行时缓存的唯一所有者；编排三层纯转换，缓存随 Host</text>
<text xml:space="preserve" text-anchor="start" x="863.49" y="-661" font-family="Arial" font-size="15.00" fill="#bfdbfe">生命周期释放</text>
</g>
<!-- second -->
<g id="node4" class="node">
<title>second</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1110.28,-480 691.72,-480 691.72,-300 1110.28,-300 1110.28,-480"/>
<text xml:space="preserve" text-anchor="start" x="764.85" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">Context 与官方 TS AST 业务转换</text>
<text xml:space="preserve" text-anchor="start" x="711.78" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">Issue 46 的实现归属：引用身份、变量语义、平台方法和 Canvas</text>
<text xml:space="preserve" text-anchor="start" x="720.96" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">业务映射；仅消费 Context 与显式语义输入，不读取工程或缓存</text>
</g>
<!-- logic_1 -->
<g id="node5" class="node">
<title>logic_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1606.02,-480 1285.98,-480 1285.98,-300 1606.02,-300 1606.02,-480"/>
<text xml:space="preserve" text-anchor="start" x="1395.99" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">工程设置解析</text>
</g>
<!-- tests -->
<g id="node6" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1606.02,-780 1285.98,-780 1285.98,-600 1606.02,-600 1606.02,-780"/>
<text xml:space="preserve" text-anchor="start" x="1395.99" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">工程格式测试</text>
</g>
<!-- bescript -->
<g id="node7" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="686.02,-180 365.98,-180 365.98,0 686.02,0 686.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="450.98" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
</g>
<!-- device_context&#45;&gt;local_ast -->
<g id="edge5" class="edge">
<title>device_context&#45;&gt;local_ast</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M200,-600.4C200,-565.73 200,-525.81 200,-490.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="202.63,-490.3 200,-482.8 197.38,-490.3 202.63,-490.3"/>
</g>
<!-- device_context&#45;&gt;bescript -->
<g id="edge6" class="edge">
<title>device_context&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.43,-600.18C379.52,-580.73 402,-558.32 419,-533.2 489.05,-429.69 513.38,-285.2 521.75,-189.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="524.34,-190.43 522.35,-182.73 519.11,-189.99 524.34,-190.43"/>
</g>
<!-- local_ast&#45;&gt;bescript -->
<g id="edge7" class="edge">
<title>local_ast&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M296.93,-300.4C336.15,-264.54 381.52,-223.07 421.49,-186.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="422.88,-188.82 426.65,-181.82 419.34,-184.94 422.88,-188.82"/>
</g>
<!-- logic&#45;&gt;second -->
<g id="edge1" class="edge">
<title>logic&#45;&gt;second</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M901,-600.4C901,-565.73 901,-525.81 901,-490.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="903.63,-490.3 901,-482.8 898.38,-490.3 903.63,-490.3"/>
</g>
<!-- logic&#45;&gt;logic_1 -->
<g id="edge2" class="edge">
<title>logic&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1063.41,-600.2C1130.81,-563.34 1209.02,-520.58 1277.09,-483.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1278.22,-485.73 1283.54,-479.83 1275.7,-481.13 1278.22,-485.73"/>
</g>
<!-- second&#45;&gt;bescript -->
<g id="edge4" class="edge">
<title>second&#45;&gt;bescript</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M789.25,-300.2C744.14,-264.35 692.01,-222.92 646.1,-186.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="647.77,-184.41 640.27,-181.8 644.5,-188.52 647.77,-184.41"/>
</g>
<!-- tests&#45;&gt;logic_1 -->
<g id="edge3" class="edge">
<title>tests&#45;&gt;logic_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1446,-600.4C1446,-565.73 1446,-525.81 1446,-490.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1448.63,-490.3 1446,-482.8 1443.38,-490.3 1448.63,-490.3"/>
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
`;case`core`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3121pt" height="856pt"
 viewBox="0.00 0.00 3121.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- pure -->
<g id="node1" class="node">
<title>pure</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="765.25,-825.6 0,-825.6 0,-645.6 765.25,-645.6 765.25,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="340.95" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">业务纯计算</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">无状态纯函数。完整输入由调用者提供，同样输入产生同样结果，不读取文件、网络、配置、环境变量、当前时间或进程全局状态。</text>
</g>
<!-- specifications -->
<g id="node2" class="node">
<title>specifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="916.65,-502.8 596.61,-502.8 596.61,-322.8 916.65,-322.8 916.65,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="714.95" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">工具链规范</text>
</g>
<!-- product -->
<g id="node3" class="node">
<title>product</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2256.65,-825.6 1936.61,-825.6 1936.61,-645.6 2256.65,-645.6 2256.65,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1997.72" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit 产品源码参考文档</text>
</g>
<!-- renderer -->
<g id="node4" class="node">
<title>renderer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2660.98,-502.8 2108.27,-502.8 2108.27,-322.8 2660.98,-322.8 2660.98,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2314.6" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染引擎</text>
<text xml:space="preserve" text-anchor="start" x="2306.69" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">HTML 属性经显式 Option</text>
<text xml:space="preserve" text-anchor="start" x="2128.33" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">解析为节点输入；节点按固定顺序应用特性，管线统一递归与排版，页面只有一次自动渲染。</text>
</g>
<!-- documentation -->
<g id="node5" class="node">
<title>documentation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3090.65,-502.8 2770.61,-502.8 2770.61,-322.8 3090.65,-322.8 3090.65,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2872.28" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">产品规范与参考</text>
</g>
<!-- fixtures -->
<g id="node6" class="node">
<title>fixtures</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1776.65,-502.8 1456.61,-502.8 1456.61,-322.8 1776.65,-322.8 1776.65,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1574.95" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">跨组件夹具</text>
</g>
<!-- resources -->
<g id="node7" class="node">
<title>resources</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2187.65,-180 1867.61,-180 1867.61,0 2187.65,0 2187.65,-180"/>
<text xml:space="preserve" text-anchor="start" x="1977.62" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">共享静态资源</text>
</g>
<!-- tools -->
<g id="node8" class="node">
<title>tools</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1195.65,-825.6 875.61,-825.6 875.61,-645.6 1195.65,-645.6 1195.65,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="985.62" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">自举检查工具</text>
</g>
<!-- repository -->
<g id="node9" class="node">
<title>repository</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1346.65,-502.8 1026.61,-502.8 1026.61,-322.8 1346.65,-322.8 1346.65,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1136.62" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">仓库工程基础</text>
</g>
<!-- toolkit -->
<g id="node10" class="node">
<title>toolkit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1625.65,-825.6 1305.61,-825.6 1305.61,-645.6 1625.65,-645.6 1625.65,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1366.15" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit TypeScript 产品</text>
</g>
<!-- pure&#45;&gt;specifications -->
<g id="edge1" class="edge">
<title>pure&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M486.31,-645.67C535.76,-603.25 594.99,-552.45 645.38,-509.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="646.78,-511.48 650.77,-504.6 643.37,-507.49 646.78,-511.48"/>
</g>
<!-- product&#45;&gt;renderer -->
<g id="edge2" class="edge">
<title>product&#45;&gt;renderer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2176.47,-645.67C2214.24,-603.6 2259.41,-553.28 2298,-510.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2299.8,-512.22 2302.86,-504.88 2295.89,-508.71 2299.8,-512.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2249.26,-562.8 2249.26,-585.6 2325.28,-585.6 2325.28,-562.8 2249.26,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2252.26" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">渲染行为测试</text>
</g>
<!-- product&#45;&gt;documentation -->
<g id="edge3" class="edge">
<title>product&#45;&gt;documentation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2256.55,-676.42C2381.88,-630.41 2560.42,-563.96 2715.63,-502.8 2730.41,-496.97 2745.73,-490.84 2761.07,-484.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2761.85,-487.14 2767.81,-481.88 2759.87,-482.27 2761.85,-487.14"/>
</g>
<!-- product&#45;&gt;fixtures -->
<g id="edge4" class="edge">
<title>product&#45;&gt;fixtures</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1952.32,-645.62C1921.53,-626.15 1889.34,-605.42 1859.63,-585.6 1823.12,-561.24 1784.09,-534.14 1748.22,-508.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1749.77,-506.67 1742.13,-504.48 1746.74,-510.95 1749.77,-506.67"/>
</g>
<!-- product&#45;&gt;resources -->
<g id="edge5" class="edge">
<title>product&#45;&gt;resources</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2077.57,-645.83C2069,-602.83 2059.51,-550.32 2053.63,-502.8 2040.45,-396.45 2033.8,-273.76 2030.54,-190.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2033.16,-190.07 2030.26,-182.67 2027.92,-190.27 2033.16,-190.07"/>
</g>
<!-- renderer&#45;&gt;resources -->
<g id="edge11" class="edge">
<title>renderer&#45;&gt;resources</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2285.66,-322.87C2238.55,-280.53 2182.15,-229.86 2134.12,-186.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2136.06,-184.91 2128.73,-181.85 2132.56,-188.82 2136.06,-184.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2216.83,-240 2216.83,-262.8 2304.51,-262.8 2304.51,-240 2216.83,-240"/>
<text xml:space="preserve" text-anchor="start" x="2219.83" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">字体与样式资源</text>
</g>
<!-- tools&#45;&gt;specifications -->
<g id="edge7" class="edge">
<title>tools&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M949.43,-645.87C931.04,-626.29 911.95,-605.46 894.63,-585.6 873.86,-561.8 852.14,-535.48 832.23,-510.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="834.47,-509.34 827.73,-505.13 830.38,-512.62 834.47,-509.34"/>
</g>
<!-- tools&#45;&gt;repository -->
<g id="edge6" class="edge">
<title>tools&#45;&gt;repository</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1077.49,-645.67C1097.04,-604.12 1120.39,-554.53 1140.45,-511.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1142.71,-513.27 1143.53,-505.37 1137.96,-511.04 1142.71,-513.27"/>
</g>
<!-- toolkit&#45;&gt;specifications -->
<g id="edge9" class="edge">
<title>toolkit&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1305.63,-662.21C1192.4,-610.97 1040.82,-542.39 925.63,-490.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="927.02,-488.02 919.11,-487.32 924.86,-492.8 927.02,-488.02"/>
</g>
<!-- toolkit&#45;&gt;fixtures -->
<g id="edge10" class="edge">
<title>toolkit&#45;&gt;fixtures</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1507.49,-645.67C1527.04,-604.12 1550.39,-554.53 1570.45,-511.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1572.71,-513.27 1573.53,-505.37 1567.96,-511.04 1572.71,-513.27"/>
</g>
<!-- toolkit&#45;&gt;repository -->
<g id="edge8" class="edge">
<title>toolkit&#45;&gt;repository</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1388.28,-645.67C1351.77,-603.68 1308.12,-553.49 1270.78,-510.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1272.77,-508.85 1265.87,-504.91 1268.81,-512.3 1272.77,-508.85"/>
</g>
</g>
</svg>
`;case`tooling`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1161pt" height="1410pt"
 viewBox="0.00 0.00 1161.00 1410.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1395.05)">
<!-- tests -->
<g id="node1" class="node">
<title>tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="927.28,-1380 607.24,-1380 607.24,-1200 927.28,-1200 927.28,-1380"/>
<text xml:space="preserve" text-anchor="start" x="717.25" y="-1282" font-family="Arial" font-size="20.00" fill="#eff6ff">自身回归测试</text>
</g>
<!-- cli -->
<g id="node2" class="node">
<title>cli</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="408.53,-1080 0,-1080 0,-900 408.53,-900 408.53,-1080"/>
<text xml:space="preserve" text-anchor="start" x="144.25" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">CLI 与进程边界</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">项目特有检查与逐锚点检视；标准工具由 pnpm scripts 直接执行</text>
</g>
<!-- coding -->
<g id="node3" class="node">
<title>coding</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1060.28,-780 740.24,-780 740.24,-600 1060.28,-600 1060.28,-780"/>
<text xml:space="preserve" text-anchor="start" x="843.02" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Java 风格规则</text>
</g>
<!-- architecture -->
<g id="node4" class="node">
<title>architecture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="734.28,-480 414.24,-480 414.24,-300 734.28,-300 734.28,-480"/>
<text xml:space="preserve" text-anchor="start" x="524.25" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">架构模型解析</text>
</g>
<!-- anchoring -->
<g id="node5" class="node">
<title>anchoring</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="897.28,-180 577.24,-180 577.24,0 897.28,0 897.28,-180"/>
<text xml:space="preserve" text-anchor="start" x="678.92" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">规范与代码锚定</text>
</g>
<!-- hooks -->
<g id="node6" class="node">
<title>hooks</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="364.76,-1380 43.77,-1380 43.77,-1200 364.76,-1200 364.76,-1380"/>
<text xml:space="preserve" text-anchor="start" x="155.37" y="-1293" font-family="Arial" font-size="20.00" fill="#eff6ff">Git 钩子转发</text>
<text xml:space="preserve" text-anchor="start" x="63.82" y="-1270" font-family="Arial" font-size="15.00" fill="#bfdbfe">纯转发薄壳：零判定逻辑，全部判定经唯一入口 cli</text>
</g>
<!-- tests&#45;&gt;cli -->
<g id="edge1" class="edge">
<title>tests&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M607.44,-1204.4C536.98,-1167.11 453.93,-1123.15 381.57,-1084.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="382.88,-1082.57 375.02,-1081.38 380.42,-1087.21 382.88,-1082.57"/>
</g>
<!-- tests&#45;&gt;coding -->
<g id="edge2" class="edge">
<title>tests&#45;&gt;coding</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M787.03,-1200.12C811.44,-1090.37 852.84,-904.25 878.24,-790.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="880.77,-790.73 879.84,-782.84 875.65,-789.59 880.77,-790.73"/>
</g>
<!-- tests&#45;&gt;architecture -->
<g id="edge3" class="edge">
<title>tests&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M748.14,-1200.03C711.88,-1031.28 633.35,-665.93 595.5,-489.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="598.13,-489.53 593.98,-482.75 592.99,-490.64 598.13,-489.53"/>
</g>
<!-- tests&#45;&gt;anchoring -->
<g id="edge4" class="edge">
<title>tests&#45;&gt;anchoring</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M863.88,-1200.19C990.35,-1072.62 1187.89,-827.74 1115.26,-600 1062.87,-435.71 933.03,-281.87 840.17,-187.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="842.25,-185.6 835.11,-182.1 838.51,-189.28 842.25,-185.6"/>
</g>
<!-- cli&#45;&gt;coding -->
<g id="edge6" class="edge">
<title>cli&#45;&gt;coding</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M408.38,-901.6C510.87,-857.73 633.55,-805.2 730.76,-763.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="731.74,-766.01 737.6,-760.65 729.67,-761.19 731.74,-766.01"/>
</g>
<!-- cli&#45;&gt;architecture -->
<g id="edge7" class="edge">
<title>cli&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M259.26,-900.12C327.44,-789.93 443.25,-602.75 513.85,-488.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="515.96,-490.21 517.68,-482.45 511.5,-487.45 515.96,-490.21"/>
</g>
<!-- cli&#45;&gt;anchoring -->
<g id="edge8" class="edge">
<title>cli&#45;&gt;anchoring</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M202.02,-900.13C202.94,-758.96 223.54,-480.97 359.26,-300 411.36,-230.53 493.67,-181.15 568.2,-147.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="569.13,-150.35 574.94,-144.93 567.02,-145.54 569.13,-150.35"/>
</g>
<!-- coding&#45;&gt;architecture -->
<g id="edge9" class="edge">
<title>coding&#45;&gt;architecture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M803.34,-600.4C764.11,-564.54 718.74,-523.07 678.78,-486.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="680.92,-484.94 673.62,-481.82 677.38,-488.82 680.92,-484.94"/>
</g>
<!-- coding&#45;&gt;anchoring -->
<g id="edge10" class="edge">
<title>coding&#45;&gt;anchoring</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M876.04,-600.12C846.12,-490.37 795.39,-304.25 764.25,-190.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="766.79,-189.35 762.29,-182.8 761.73,-190.73 766.79,-189.35"/>
</g>
<!-- architecture&#45;&gt;anchoring -->
<g id="edge11" class="edge">
<title>architecture&#45;&gt;anchoring</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M622.73,-300.4C641.93,-265.28 664.09,-224.79 683.76,-188.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="685.96,-190.27 687.25,-182.43 681.35,-187.75 685.96,-190.27"/>
</g>
<!-- hooks&#45;&gt;cli -->
<g id="edge5" class="edge">
<title>hooks&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M204.26,-1200.4C204.26,-1165.73 204.26,-1125.81 204.26,-1090.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="206.89,-1090.3 204.26,-1082.8 201.64,-1090.3 206.89,-1090.3"/>
</g>
</g>
</svg>
`;case`runtime`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1484pt" height="1110pt"
 viewBox="0.00 0.00 1484.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<!-- vscode_plugin -->
<g id="node3" class="node">
<title>vscode_plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1024.04,-1080 704,-1080 704,-900 1024.04,-900 1024.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="771.21" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">VS Code 插件启动入口</text>
</g>
<!-- frontend -->
<g id="node4" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-780 430,-780 430,-600 750.04,-600 750.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="548.35" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">前端容器栈</text>
</g>
<!-- mcp -->
<g id="node5" class="node">
<title>mcp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1402.04,-780 1082,-780 1082,-600 1402.04,-600 1402.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="1183.68" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">MCP 协议接入</text>
</g>
<!-- host -->
<g id="node6" class="node">
<title>host</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1076.04,-480 756,-480 756,-300 1076.04,-300 1076.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="867.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">工作区 Host</text>
</g>
<!-- pi_plugin -->
<g id="node7" class="node">
<title>pi_plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1454.04,-1080 1134,-1080 1134,-900 1454.04,-900 1454.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1203.43" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi Agent 插件启动入口</text>
</g>
<!-- project_model -->
<g id="node8" class="node">
<title>project_model</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="814.04,-180 494,-180 494,0 814.04,0 814.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="587.34" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">工程格式纯计算包</text>
</g>
<!-- script -->
<g id="node9" class="node">
<title>script</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1432.29,-180 923.75,-180 923.75,0 1432.29,0 1432.29,-180"/>
<text xml:space="preserve" text-anchor="start" x="1103" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 纯计算包</text>
<text xml:space="preserve" text-anchor="start" x="943.81" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">数据合同与三层纯转换设计分开登记；转换函数不读取工程或拥有跨请求缓存，Host</text>
<text xml:space="preserve" text-anchor="start" x="1084.25" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">持有缓存状态并传入完整语义依据</text>
</g>
<!-- configuration&#45;&gt;config -->
<!-- vscode_plugin&#45;&gt;frontend -->
<g id="edge2" class="edge">
<title>vscode_plugin&#45;&gt;frontend</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M782.55,-900.4C749.86,-864.84 712.08,-823.76 678.7,-787.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="680.7,-785.75 673.7,-782 676.84,-789.3 680.7,-785.75"/>
</g>
<!-- vscode_plugin&#45;&gt;mcp -->
<g id="edge3" class="edge">
<title>vscode_plugin&#45;&gt;mcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M976.66,-900.2C1022.13,-864.35 1074.68,-822.92 1120.96,-786.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1122.59,-788.5 1126.85,-781.79 1119.34,-784.38 1122.59,-788.5"/>
</g>
<!-- vscode_plugin&#45;&gt;host -->
<g id="edge4" class="edge">
<title>vscode_plugin&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M871.75,-900.12C881.28,-790.48 897.44,-604.62 907.38,-490.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="909.99,-490.6 908.03,-482.9 904.76,-490.14 909.99,-490.6"/>
</g>
<!-- frontend&#45;&gt;host -->
<g id="edge6" class="edge">
<title>frontend&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M686.95,-600.4C726.17,-564.54 771.54,-523.07 811.51,-486.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="812.9,-488.82 816.67,-481.82 809.36,-484.94 812.9,-488.82"/>
</g>
<!-- mcp&#45;&gt;host -->
<g id="edge7" class="edge">
<title>mcp&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1145.09,-600.4C1105.87,-564.54 1060.5,-523.07 1020.53,-486.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1022.68,-484.94 1015.37,-481.82 1019.14,-488.82 1022.68,-484.94"/>
</g>
<!-- host&#45;&gt;project_model -->
<g id="edge8" class="edge">
<title>host&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M838.12,-300.4C806.86,-264.84 770.74,-223.76 738.82,-187.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="740.99,-185.95 734.07,-182.05 737.05,-189.42 740.99,-185.95"/>
</g>
<!-- host&#45;&gt;script -->
<g id="edge9" class="edge">
<title>host&#45;&gt;script</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M993.92,-300.4C1025.18,-264.84 1061.3,-223.76 1093.22,-187.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1094.99,-189.42 1097.97,-182.05 1091.05,-185.95 1094.99,-189.42"/>
</g>
<!-- pi_plugin&#45;&gt;mcp -->
<g id="edge5" class="edge">
<title>pi_plugin&#45;&gt;mcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1278.56,-900.4C1272.48,-865.58 1265.48,-825.47 1259.25,-789.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1261.91,-789.7 1258.03,-782.76 1256.73,-790.6 1261.91,-789.7"/>
</g>
</g>
</svg>
`;case`repository`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="1110pt"
 viewBox="0.00 0.00 780.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<!-- dotnet -->
<g id="node5" class="node">
<title>dotnet</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1080 430,-1080 430,-900 750.04,-900 750.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="496.67" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">旧 .NET SDK 配置参考</text>
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
<svg width="780pt" height="1110pt"
 viewBox="0.00 0.00 780.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<!-- bescript -->
<g id="node5" class="node">
<title>bescript</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1080 430,-1080 430,-900 750.04,-900 750.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="515" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">BEScript 内部格式</text>
</g>
<!-- canvas_render -->
<g id="node6" class="node">
<title>canvas_render</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-780 430,-780 430,-600 750.04,-600 750.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="520" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染规范</text>
</g>
<!-- canvas -->
<g id="node7" class="node">
<title>canvas</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="503.33" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 四向转换合同</text>
</g>
<!-- tooling&#45;&gt;layout -->
<!-- layout&#45;&gt;development -->
<!-- development&#45;&gt;runtime -->
<!-- bescript&#45;&gt;canvas_render -->
<!-- canvas_render&#45;&gt;canvas -->
</g>
</svg>
`;case`product`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1640pt" height="510pt"
 viewBox="0.00 0.00 1640.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="556.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">核心逻辑</text>
</g>
<!-- host -->
<g id="node3" class="node">
<title>host</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="509.99" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">VSCode Host 入口</text>
</g>
<!-- renderer_tests -->
<g id="node4" class="node">
<title>renderer_tests</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-480 1290,-480 1290,-300 1610.04,-300 1610.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="1380" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染测试</text>
</g>
<!-- frontend -->
<g id="node5" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-480 860,-480 860,-300 1180.04,-300 1180.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="1003.35" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">前端</text>
</g>
<!-- mcp&#45;&gt;core -->
<g id="edge1" class="edge">
<title>mcp&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M288.16,-300.2C340.2,-264.13 400.41,-222.41 453.29,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="454.56,-188.07 459.23,-181.64 451.57,-183.76 454.56,-188.07"/>
</g>
<!-- host&#45;&gt;core -->
<g id="edge2" class="edge">
<title>host&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-300.4C590.02,-265.73 590.02,-225.81 590.02,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-190.3 590.02,-182.8 587.4,-190.3 592.65,-190.3"/>
</g>
<!-- frontend&#45;&gt;core -->
<g id="edge3" class="edge">
<title>frontend&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M891.88,-300.2C839.84,-264.13 779.63,-222.41 726.75,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="728.47,-183.76 720.81,-181.64 725.48,-188.07 728.47,-183.76"/>
</g>
</g>
</svg>
`;case`product_core`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`documentation`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="1110pt"
 viewBox="0.00 0.00 350.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- manual -->
<g id="node1" class="node">
<title>manual</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="44.99" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">MechToolkit 发布与开发指南</text>
</g>
<!-- specs -->
<g id="node2" class="node">
<title>specs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">产品规范</text>
</g>
<!-- diagrams -->
<g id="node3" class="node">
<title>diagrams</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="110.01" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">架构展示资产</text>
</g>
<!-- workflows -->
<g id="node4" class="node">
<title>workflows</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="93.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">ComfyUI 工作流</text>
</g>
<!-- manual&#45;&gt;specs -->
<!-- specs&#45;&gt;diagrams -->
<!-- diagrams&#45;&gt;workflows -->
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
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
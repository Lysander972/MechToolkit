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
    specifications [height=2.5,
        label=<<FONT POINT-SIZE="20">工具链规范</FONT>>,
        likec4_id=specifications,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
    fixtures [height=2.5,
        label=<<FONT POINT-SIZE="20">跨组件夹具</FONT>>,
        likec4_id=fixtures,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> fixtures [arrowhead=normal,
        likec4_id="1xxd1me",
        style=dashed];
    product [height=2.5,
        label=<<FONT POINT-SIZE="20">Toolkit 产品源码参考文档</FONT>>,
        likec4_id=product,
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
        minlen=1,
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
    specifications [height=2.5,
        label=<<FONT POINT-SIZE="20">工具链规范</FONT>>,
        likec4_id=specifications,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
    fixtures [height=2.5,
        label=<<FONT POINT-SIZE="20">跨组件夹具</FONT>>,
        likec4_id=fixtures,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    toolkit -> fixtures [arrowhead=normal,
        likec4_id="1xxd1me",
        style=dashed];
    product [height=2.5,
        label=<<FONT POINT-SIZE="20">Toolkit 产品源码参考文档</FONT>>,
        likec4_id=product,
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
        minlen=1,
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
    renderer [height=2.5,
        label=<<FONT POINT-SIZE="20">Canvas 渲染</FONT>>,
        likec4_id="product.renderer",
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
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2070pt" height="510pt"
 viewBox="0.00 0.00 2070.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- tools -->
<g id="node1" class="node">
<title>tools</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="110.01" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">自举检查工具</text>
</g>
<!-- repository -->
<g id="node2" class="node">
<title>repository</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="540.01" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">仓库工程基础</text>
</g>
<!-- specifications -->
<g id="node3" class="node">
<title>specifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="118.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">工具链规范</text>
</g>
<!-- toolkit -->
<g id="node4" class="node">
<title>toolkit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="490.55" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit TypeScript 产品</text>
</g>
<!-- fixtures -->
<g id="node5" class="node">
<title>fixtures</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="978.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">跨组件夹具</text>
</g>
<!-- product -->
<g id="node6" class="node">
<title>product</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-480 1290,-480 1290,-300 1610.04,-300 1610.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="1351.11" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit 产品源码参考文档</text>
</g>
<!-- resources -->
<g id="node7" class="node">
<title>resources</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2040.04,-180 1720,-180 1720,0 2040.04,0 2040.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1830.01" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">共享静态资源</text>
</g>
<!-- documentation -->
<g id="node8" class="node">
<title>documentation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-180 1290,-180 1290,0 1610.04,0 1610.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1391.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">产品规范与参考</text>
</g>
<!-- tools&#45;&gt;repository -->
<g id="edge1" class="edge">
<title>tools&#45;&gt;repository</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M288.16,-300.2C340.2,-264.13 400.41,-222.41 453.29,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="454.56,-188.07 459.23,-181.64 451.57,-183.76 454.56,-188.07"/>
</g>
<!-- tools&#45;&gt;specifications -->
<g id="edge2" class="edge">
<title>tools&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-300.4C160.02,-265.73 160.02,-225.81 160.02,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="162.65,-190.3 160.02,-182.8 157.4,-190.3 162.65,-190.3"/>
</g>
<!-- toolkit&#45;&gt;repository -->
<g id="edge3" class="edge">
<title>toolkit&#45;&gt;repository</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-300.4C590.02,-265.73 590.02,-225.81 590.02,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-190.3 590.02,-182.8 587.4,-190.3 592.65,-190.3"/>
</g>
<!-- toolkit&#45;&gt;specifications -->
<g id="edge4" class="edge">
<title>toolkit&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.88,-300.2C409.84,-264.13 349.63,-222.41 296.75,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="298.47,-183.76 290.81,-181.64 295.48,-188.07 298.47,-183.76"/>
</g>
<!-- toolkit&#45;&gt;fixtures -->
<g id="edge5" class="edge">
<title>toolkit&#45;&gt;fixtures</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M718.16,-300.2C770.2,-264.13 830.41,-222.41 883.29,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="884.56,-188.07 889.23,-181.64 881.57,-183.76 884.56,-188.07"/>
</g>
<!-- product&#45;&gt;fixtures -->
<g id="edge6" class="edge">
<title>product&#45;&gt;fixtures</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1321.88,-300.2C1269.84,-264.13 1209.63,-222.41 1156.75,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1158.47,-183.76 1150.81,-181.64 1155.48,-188.07 1158.47,-183.76"/>
</g>
<!-- product&#45;&gt;resources -->
<g id="edge7" class="edge">
<title>product&#45;&gt;resources</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1578.16,-300.2C1630.2,-264.13 1690.41,-222.41 1743.29,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1744.56,-188.07 1749.23,-181.64 1741.57,-183.76 1744.56,-188.07"/>
</g>
<!-- product&#45;&gt;documentation -->
<g id="edge8" class="edge">
<title>product&#45;&gt;documentation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1450.02,-300.4C1450.02,-265.73 1450.02,-225.81 1450.02,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1452.65,-190.3 1450.02,-182.8 1447.4,-190.3 1452.65,-190.3"/>
</g>
</g>
</svg>
`;case`core`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2070pt" height="510pt"
 viewBox="0.00 0.00 2070.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- tools -->
<g id="node1" class="node">
<title>tools</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="110.01" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">自举检查工具</text>
</g>
<!-- repository -->
<g id="node2" class="node">
<title>repository</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="540.01" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">仓库工程基础</text>
</g>
<!-- specifications -->
<g id="node3" class="node">
<title>specifications</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="118.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">工具链规范</text>
</g>
<!-- toolkit -->
<g id="node4" class="node">
<title>toolkit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-480 430,-480 430,-300 750.04,-300 750.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="490.55" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit TypeScript 产品</text>
</g>
<!-- fixtures -->
<g id="node5" class="node">
<title>fixtures</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="978.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">跨组件夹具</text>
</g>
<!-- product -->
<g id="node6" class="node">
<title>product</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-480 1290,-480 1290,-300 1610.04,-300 1610.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="1351.11" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Toolkit 产品源码参考文档</text>
</g>
<!-- resources -->
<g id="node7" class="node">
<title>resources</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2040.04,-180 1720,-180 1720,0 2040.04,0 2040.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1830.01" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">共享静态资源</text>
</g>
<!-- documentation -->
<g id="node8" class="node">
<title>documentation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-180 1290,-180 1290,0 1610.04,0 1610.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1391.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">产品规范与参考</text>
</g>
<!-- tools&#45;&gt;repository -->
<g id="edge1" class="edge">
<title>tools&#45;&gt;repository</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M288.16,-300.2C340.2,-264.13 400.41,-222.41 453.29,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="454.56,-188.07 459.23,-181.64 451.57,-183.76 454.56,-188.07"/>
</g>
<!-- tools&#45;&gt;specifications -->
<g id="edge2" class="edge">
<title>tools&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-300.4C160.02,-265.73 160.02,-225.81 160.02,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="162.65,-190.3 160.02,-182.8 157.4,-190.3 162.65,-190.3"/>
</g>
<!-- toolkit&#45;&gt;repository -->
<g id="edge3" class="edge">
<title>toolkit&#45;&gt;repository</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-300.4C590.02,-265.73 590.02,-225.81 590.02,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-190.3 590.02,-182.8 587.4,-190.3 592.65,-190.3"/>
</g>
<!-- toolkit&#45;&gt;specifications -->
<g id="edge4" class="edge">
<title>toolkit&#45;&gt;specifications</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.88,-300.2C409.84,-264.13 349.63,-222.41 296.75,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="298.47,-183.76 290.81,-181.64 295.48,-188.07 298.47,-183.76"/>
</g>
<!-- toolkit&#45;&gt;fixtures -->
<g id="edge5" class="edge">
<title>toolkit&#45;&gt;fixtures</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M718.16,-300.2C770.2,-264.13 830.41,-222.41 883.29,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="884.56,-188.07 889.23,-181.64 881.57,-183.76 884.56,-188.07"/>
</g>
<!-- product&#45;&gt;fixtures -->
<g id="edge6" class="edge">
<title>product&#45;&gt;fixtures</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1321.88,-300.2C1269.84,-264.13 1209.63,-222.41 1156.75,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1158.47,-183.76 1150.81,-181.64 1155.48,-188.07 1158.47,-183.76"/>
</g>
<!-- product&#45;&gt;resources -->
<g id="edge7" class="edge">
<title>product&#45;&gt;resources</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1578.16,-300.2C1630.2,-264.13 1690.41,-222.41 1743.29,-185.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1744.56,-188.07 1749.23,-181.64 1741.57,-183.76 1744.56,-188.07"/>
</g>
<!-- product&#45;&gt;documentation -->
<g id="edge8" class="edge">
<title>product&#45;&gt;documentation</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1450.02,-300.4C1450.02,-265.73 1450.02,-225.81 1450.02,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1452.65,-190.3 1450.02,-182.8 1447.4,-190.3 1452.65,-190.3"/>
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
<svg width="1210pt" height="1110pt"
 viewBox="0.00 0.00 1210.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-1080 860,-1080 860,-900 1180.04,-900 1180.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="927.21" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">VS Code 插件启动入口</text>
</g>
<!-- mcp -->
<g id="node4" class="node">
<title>mcp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="854.04,-780 534,-780 534,-600 854.04,-600 854.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="635.68" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">MCP 协议接入</text>
</g>
<!-- host -->
<g id="node5" class="node">
<title>host</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1017.04,-480 697,-480 697,-300 1017.04,-300 1017.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="808.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">工作区 Host</text>
</g>
<!-- pi_plugin -->
<g id="node6" class="node">
<title>pi_plugin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1080 430,-1080 430,-900 750.04,-900 750.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="499.43" y="-982" font-family="Arial" font-size="20.00" fill="#eff6ff">Pi Agent 插件启动入口</text>
</g>
<!-- project_model -->
<g id="node7" class="node">
<title>project_model</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1017.04,-180 697,-180 697,0 1017.04,0 1017.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="790.34" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">工程格式纯计算包</text>
</g>
<!-- configuration&#45;&gt;config -->
<!-- vscode_plugin&#45;&gt;mcp -->
<g id="edge2" class="edge">
<title>vscode_plugin&#45;&gt;mcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M923.09,-900.4C883.87,-864.54 838.5,-823.07 798.53,-786.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="800.68,-784.94 793.37,-781.82 797.14,-788.82 800.68,-784.94"/>
</g>
<!-- vscode_plugin&#45;&gt;host -->
<g id="edge3" class="edge">
<title>vscode_plugin&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M995.79,-900.12C965.88,-790.37 915.15,-604.25 884.01,-490.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="886.55,-489.35 882.04,-482.8 881.48,-490.73 886.55,-489.35"/>
</g>
<!-- mcp&#45;&gt;host -->
<g id="edge5" class="edge">
<title>mcp&#45;&gt;host</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M742.48,-600.4C761.69,-565.28 783.84,-524.79 803.52,-488.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="805.71,-490.27 807.01,-482.43 801.11,-487.75 805.71,-490.27"/>
</g>
<!-- host&#45;&gt;project_model -->
<g id="edge6" class="edge">
<title>host&#45;&gt;project_model</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M857.02,-300.4C857.02,-265.73 857.02,-225.81 857.02,-190.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="859.65,-190.3 857.02,-182.8 854.4,-190.3 859.65,-190.3"/>
</g>
<!-- pi_plugin&#45;&gt;mcp -->
<g id="edge4" class="edge">
<title>pi_plugin&#45;&gt;mcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M620.94,-900.4C633.14,-865.43 647.21,-825.13 659.72,-789.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="662.05,-790.58 662.04,-782.63 657.09,-788.85 662.05,-790.58"/>
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
<svg width="350pt" height="1110pt"
 viewBox="0.00 0.00 350.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<!-- tooling&#45;&gt;layout -->
<!-- layout&#45;&gt;development -->
<!-- development&#45;&gt;runtime -->
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
<!-- renderer -->
<g id="node4" class="node">
<title>renderer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-480 1290,-480 1290,-300 1610.04,-300 1610.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="1396.67" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">Canvas 渲染</text>
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
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
# CreatAIManual

CreatAI(Machinist)平台开发知识库——Toolkit 各消费侧的文档源仓库。

## 相关链接

- CreatAI平台(Machinist) Steam链接 https://store.steampowered.com/app/1265510/Machinist/
- Toolkit仓库 https://github.com/2302680972/MechToolkit
- Toolkit使用教程 https://sx16dhdgjdw.feishu.cn/wiki/AdLGwxUuViJ3zpkt9CPcWhPznGf

## 目录结构

```
.
├── common/                 # 通用知识（两边共用）
│   └── README.md
├── external/               # 对外知识（打包 gzip 进插件）
│   ├── SKILL.md            # Skill 定义文档
│   ├── agents_claude.template.md  # AGENTS.md 模板
│   ├── assets/             # 代码模板
│   ├── references/         # 参考资料
│   └── agents/openai.yaml  # Skill 元数据
├── internal/               # 对内知识（打包进 Agent 被向量索引进 RAG）
│   └── README.md
├── LICENSE
└── README.md
```

## 三部分定位

| 目录 | 定位 | 消费方 |
|------|------|--------|
| `common/` | 平台通用知识，不区分使用者 | 插件 gzip 与 Agent RAG 均包含 |
| `external/` | 面向外部 Agent 的 Skill 内容与 AGENTS 模板 | 仅插件（打包 gzip） |
| `internal/` | 面向 Toolkit 自身 Agent 的内部知识 | 仅 Agent（向量索引进 RAG） |

## 快速开始

### AGENTS模板

`external/agents_claude.template.md` 是 AGENTS.md 的模板，提供了平台的重要注意事项。插件安装到用户工程时写入工程根 AGENTS.md / CLAUDE.md。

### 代码模板

位于 `external/assets/` 目录，按功能分类：

| 分类 | 说明 |
|------|------|
| `mech/` | 机械注册、对象池申请与回收 |
| `physics/` | 物理属性、碰撞层初始化 |
| `unit/` | 单位数据、属性计算、目标选择 |
| `danmu/` | 礼物处理、排行榜、结算逻辑 |
| `canvas/` | Canvas 引用、动画、缓动效果 |

使用方式：打开对应模板，将代码片段迁移到目标工程。

### 参考资料

位于 `external/references/` 目录：

- `concepts/` - 核心概念说明（Canvas 组件、事件机制、存档等）
- `tips/` - 实践技巧（动画机制、性能优化、调色板等）

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

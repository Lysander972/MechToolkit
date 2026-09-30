# Toolkit：发布信息与 Skills

Toolkit 面向 CreatAI（Machinist）平台游戏开发，提供便于 AI 编辑的视图、语法检查与重构能力。本仓库发布 VSCode 插件，并维护配套的 machinist Skill、参考资料和代码模板。

## 下载与安装

在 [Releases](https://github.com/Lysander972/MechToolkit/releases) 下载对应版本的 VSIX，通过 VSCode 的“从 VSIX 安装”命令安装。

| 文件 | 适用场景 |
|------|----------|
| `toolkit-bescript-suite-<版本>.vsix` | 全平台通用 |
| `toolkit-bescript-suite-<版本>-win-x64.vsix` | Windows x64 |
| `toolkit-bescript-suite-<版本>-linux-x64.vsix` | Linux x64 |

也可使用 VSCode 官方命令：

```sh
code --install-extension toolkit-bescript-suite-<版本>.vsix
```

插件 Host 依赖外部 .NET 运行时，安装后按插件内环境检查提示处理。具体功能和依赖以所下载版本的发布说明为准。

## 插件功能

- BeScript 语法高亮与 Lint 诊断。
- 手动与 MCP 重构入口。
- 自动同步的 TS、HTML 视图映射。
- MCP 视图补丁及修改草稿提交。
- 地图、机械、零件、脚本与布局查询。
- 环境和依赖检测、多平台配置。

## machinist Skill

入口是 [external/SKILL.md](external/SKILL.md)，用于辅助 Agent 编辑 BeScript 的 TS 视图、Canvas 的 HTML 视图，以及调用 MCP 工具开发 CreatAI 工程。

安装 Skill 时，将完整的 `external/` 目录作为 `machinist` 放入所用 Agent 的 Skills 目录，保留其中的相对路径。Agent 根据 Skill 指引阅读参考资料；插件负责视图维护与 MCP 能力，Skill 文档本身不执行这些操作。

| 内容 | 入口 |
|------|------|
| Skill 定义与工作流 | [external/SKILL.md](external/SKILL.md) |
| 平台概念、视图规则与实践 | [参考索引](external/references/index.md) |
| 机械、零件、物理、弹幕、UI 等代码模板 | [模板索引](external/assets/README.md) |
| 工程 Agent 指令模板 | [external/agents_claude.template.md](external/agents_claude.template.md) |

`common/` 保存共用资料，`external/` 保存对外 Skills 与模板，`internal/` 保存内部知识资料。

## 相关链接

- [CreatAI（Machinist）Steam 页面](https://store.steampowered.com/app/1265510/Machinist/)
- [Toolkit 使用教程](https://sx16dhdgjdw.feishu.cn/wiki/AdLGwxUuViJ3zpkt9CPcWhPznGf)

## 许可证

本仓库采用标准 [MIT License](LICENSE)。

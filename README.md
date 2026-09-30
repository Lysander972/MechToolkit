# Toolkit

面向 CreatAI（Machinist）的 AI 辅助游戏开发工具。

Toolkit 将 BeScript 脚本与 Canvas 布局转换为便于阅读和编辑的视图，在 VSCode 中提供语法检查、工程查询和重构能力，并通过 MCP 让 AI 助手参与游戏开发。

[下载插件](https://github.com/Lysander972/MechToolkit/releases/latest) · [使用教程](https://sx16dhdgjdw.feishu.cn/wiki/AdLGwxUuViJ3zpkt9CPcWhPznGf) · [开发指南](SKILL.md) · [问题反馈](https://github.com/Lysander972/MechToolkit/issues)

## 主要功能

- **AI 协作**：通过 MCP 查询工程、修改脚本与布局、执行重构。
- **脚本与布局视图**：用 TypeScript 视图理解 BeScript，用 HTML 视图查看 Canvas 结构，视图随工程变化同步更新。
- **语法检查**：提供 BeScript 语法高亮与 Lint 诊断，帮助定位开发中的常见错误。
- **工程查询与重构**：查找地图、机械、零件、脚本和布局，通过编辑器或 AI 助手完成重构操作。
- **配套开发知识**：提供平台概念、开发规范与代码模板，覆盖弹幕互动、物理、UI 动画和数据处理等场景。

## 快速开始

### 1. 安装插件

准备好 VSCode 和 CreatAI 游戏工程，在[下载页面](https://github.com/Lysander972/MechToolkit/releases/latest)选择安装包：

| 平台 | 安装包 |
|------|--------|
| Windows x64 | `toolkit-bescript-suite-<版本>-win-x64.vsix` |
| Linux x64 | `toolkit-bescript-suite-<版本>-linux-x64.vsix` |
| 通用包 | `toolkit-bescript-suite-<版本>.vsix` |

在 VSCode 命令面板中选择“扩展：从 VSIX 安装…”，打开下载的文件。也可以使用命令行安装：

```sh
code --install-extension toolkit-bescript-suite-<版本>.vsix
```

### 2. 打开工程

使用 VSCode 打开 CreatAI 游戏工程目录，按插件提示完成环境检查与配置。插件需要 .NET 运行时，具体要求见插件提示及对应版本的发布说明。

### 3. 开始开发

浏览脚本与布局视图，查看诊断结果，或使用工程查询和重构功能。接入支持 MCP 的 AI 助手后，可以让助手结合工程内容完成查询、修改与重构任务。配置步骤见[使用教程](https://sx16dhdgjdw.feishu.cn/wiki/AdLGwxUuViJ3zpkt9CPcWhPznGf)。

## AI 开发指南

配套的 **machinist Skill** 为 AI 助手提供 CreatAI 平台知识、工具使用指引与开发约束。使用前可阅读[开发指南](SKILL.md)，按任务查阅专题资料和代码模板。

- [平台概念与实践指南](references/index.md)：脚本事件、机械与零件、UI、存档、碰撞和性能。
- [代码模板](assets/README.md)：机械复用、物理交互、弹幕消息、排行榜、动画与数据表。
- [CreatAI 平台](https://store.steampowered.com/app/1265510/Machinist/)：平台介绍与下载。

## 问题反馈

遇到问题或有功能建议，欢迎提交 [Issue](https://github.com/Lysander972/MechToolkit/issues)。报告问题时请附上插件版本、操作系统、复现步骤和相关错误信息，便于定位。

## 许可证

[MIT 许可证](LICENSE)。

# Blackbox 黑盒测试剧本规则

> 适用对象：测试子 Agent。你经 `run_test` 接收测试任务，以图像识别黑盒方式驱动游戏客户端。
> 框架自动完成的事（你不需关心）：截图帧转发前端、PASS/FAIL/UNKNOWN 报告判定、事件流式输出、剧本库存取。

## 模式边界

| 模式 | 你做什么 | 框架做什么 |
|------|---------|-----------|
| auto | 实时截图观察 → 决策操作 → 断言 → 总结 | 转发事件与帧、出报告 |
| replay | 不参与（确定性重放，无 LLM 决策） | 按库存剧本逐步执行、判定、出报告 |

## auto 模式工作流

1. 给了设备 URI 且未连接 → 先 `connect_device`（URI 形如 `Windows:///?title_re=窗口标题正则`）
2. **每步操作前先 `blackbox_snapshot` 观察当前界面**，依据截图决策，禁止盲操作
3. 操作 → `blackbox_wait` 等待 → 再观察
4. 判定：**必须至少一次 `blackbox_assert_template`**；全过 = PASS，任一失败 = FAIL，没做断言 = UNKNOWN
5. 完成所有断言后用自然语言简短总结（不再调工具），触发报告

## 工具速查

| 工具 | 用途 | 关键参数 |
|------|------|---------|
| `connect_device` | 连接设备窗口 | `uri` |
| `blackbox_touch` | 坐标点击 | `pos`，格式 `"x,y"` |
| `blackbox_swipe` | 滑动 | `start` / `end` / `duration` |
| `blackbox_touch_template` | 模板图定位并点击中心 | `template`（模板图片路径） |
| `blackbox_send_keys` | 模拟键盘 | `keys`，如 `"{F5}"` `"{ENTER}"` `"^s"` |
| `blackbox_keyevent` | 平台按键名按键 | `key`，如 ENTER/BACK |
| `blackbox_wait` | 固定等待 | `timeout`（秒） |
| `blackbox_snapshot` | 截图（返回 base64） | — |
| `blackbox_assert_template` | 断言模板图存在 | `template` |
| `blackbox_launch` | 程序化启动客户端：启动 exe → 等窗口 → 连接 | `path` / `args` / `wait_title` / `timeout` |

- Windows 端键盘一律用 `blackbox_send_keys`（`{F5}` 这类功能键走 MaaFW 官方输入接口）；Ctrl+T 退出测试 = `blackbox_send_keys "^t"`
- `blackbox_touch_template` 定位失败返回 `[FAIL]`，等同一次失败断言

## replay 三输出

每次 replay 框架自动产出，你不需手动收集：

1. **断言判定**：PASS / FAIL / UNKNOWN（只统计 prelude/body 的断言步骤）
2. **日志错误条目数**：平台日志固定路径按监控区间切分，命中错误模式的行计数（错误模式大小写敏感，由环境配置指定）
3. **测试录屏**：全程主屏录屏 mp4，报告附产物路径

设备 URI、客户端启动路径、日志路径、错误模式、录屏目录都在环境配置中，不在剧本里。

## 剧本契约（replay 重放 / 录制产物的结构）

剧本 = **prelude 片段**（固定前置：登录、选工程、进地图）+ **body**（测试正文）+ **teardown 片段**（固定收尾：退出、归档）。

- prelude / teardown 是**命名片段，库存复用**，多组测试共享同一套；body 按测试目标编写
- **登录方式配置驱动**：选 prelude 片段即选定登录序列。客户端登录面板三入口：**steam（默认，零密钥零输入，一键点击）**/ 手机验证码（不可用）/ 游戏开发者（秘钥）——devkey 方式**必须先手动在客户端输入一次密钥**（客户端会记住并预填），重放只点确认，密钥不属于剧本内容
- 主体任意步骤失败即中止（已失败无需继续），但 **teardown 必定执行**
- 判定只统计 body/prelude 中的断言步骤；teardown 不计入判定

### 步骤原语（六类）

| 原语 | 字段 | 适用 |
|------|------|------|
| `touch_pos` | `x` `y` | 位置固定的入口（唯一待选工程入口可硬编码） |
| `touch_template` | `template` | 动态位置（地图入口；多工程挑选时每工程一张模板） |
| `send_keys` | `keys` | 功能键（如 F5 进入测试） |
| `wait` | `seconds` | 界面加载缓冲 |
| `assert_template` | `template` | 结算/界面判定，计入 PASS/FAIL |
| `log_mark` | `label` | 日志归属标记（串行运行时按时间段切分平台日志），不落设备 |
| `launch_app` | `path` `args` `wait_title` `timeout` | 程序化启动客户端（全程无手动的第一步） |

### 定位方式选择

- 工程筛选：候选唯一 → `touch_pos` 硬编码；多候选 → 每工程预截模板图走 `touch_template`
- **地图入口一律 `touch_template`**：入口在工程内 UI 中，位置随布局变，不因工程唯一而硬编码

### prelude 标准流程：进入 F5 测试模式

所有测试的前置（进 F5 测试模式）统一步骤，prelude 片段固定遵循，**不可跳步**：

1. `launch_app`：开发者路径启动客户端（`path` 来自环境配置）
2. 主页切开发者模式：`touch_pos`（入口坐标固定）或 `touch_template`（开发者模式入口）
3. 选目标格子：`touch_pos`（候选唯一硬编码）或 `touch_template`（多候选每格一张）
4. 选目标地图：`touch_template`（地图入口一律模板，位置随布局变）
5. `send_keys "{F5}"`：进入测试模式

进入 F5 测试模式后 body 才开始测目标逻辑；teardown 用 `blackbox_send_keys "^t"`（Ctrl+T）退出测试。auto 模式下每步操作前仍先 `blackbox_snapshot` 观察再决策，不盲操作。

## 模板图纪律

- 模板图必须预截于**钉死的分辨率/DPI 环境**；显示环境变更后旧模板全部失效，需重截
- 图像识别失配时优先怀疑分辨率/DPI/窗口缩放变化，不要先调匹配阈值
- 模板图裁剪到最小可区分区域（含稳定特征，避开动态背景与文本长度变化区）

## 禁令

- 禁止 Poco 或任何向游戏客户端注入 SDK 的手段，只用图像识别黑盒方式
- 禁止跳过断言直接宣布通过（未断言一律判 UNKNOWN）

# Claude SEO — 项目级安装

- 来源：https://github.com/AgriciDaniel/claude-seo
- 版本：2.5.0
- 固定提交：6be93f45064ffbadced572b5d5c95f55fd263af0
- 安装范围：本项目的 26 个 skills，供 Codex 发现和读取。
- 主入口：`seo/SKILL.md`；按任务使用其他 `seo-*` skills。
- 共享脚本、参考文档、数据、Schema 模板和 19 份 agent 角色说明位于 `seo/`。
- 原仓库的插件路径已改为本项目路径；命令需从项目根目录执行。
- agent 文件作为角色参考提供；没有注册 Claude Code 插件或 Codex 自定义 agent。
- 未配置外部 API、MCP 或可选扩展服务。`seo-dataforseo` 和 `seo-image-gen` 为上游核心目录中的扩展镜像。

在下一轮对话中使用 `$seo`、`$seo-technical`，或直接描述 SEO 任务。

## Python 工具（按需启用）

技能文件已安装。按上游要求，Python 虚拟环境和 Chromium 尚未初始化；
需要执行抓取、渲染等脚本时，显式运行 setup：

```powershell
python .agents/skills/seo/scripts/runtime.py setup
```

只读诊断：

```powershell
python .agents/skills/seo/scripts/runtime.py doctor --json
```

运行工具时始终经过同一 runtime：

```powershell
python .agents/skills/seo/scripts/runtime.py run fetch_page.py https://example.com --json
```

setup 会在 `seo/` 内建立隔离环境，不安装到全局 Python。
文档中的 `/seo ...` 是上游 Claude Code 的工作流示例，Codex 可用自然语言调用对应技能。
许可证保留在各技能的 `LICENSE.txt` 和 `seo/LICENSE` 中。

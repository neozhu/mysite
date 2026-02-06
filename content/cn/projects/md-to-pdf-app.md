---
title: 'Markdown 转 PDF 转换器'
image: /uploads/photos/md-to-pdf-app-preview.png
date: 2026-02-06 00:00:00
tags:
  - GitHub
  - Next.js
  - TypeScript
  - Markdown
  - PDF
  - AI
---

{{< brick_title >}}
{{< button "GitHub 仓库" "https://github.com/neozhu/md-to-pdf-app" >}}
{{< /brick_title >}}

一个现代化、功能完整的 Markdown 到 PDF Web 应用。项目基于 Next.js 16 构建，提供实时预览、语法高亮、专业级 PDF 渲染，以及双 Agent 协作的 AI 润色流程，适合文档导出、技术写作和内容发布场景。

---

## 核心特性

- **实时预览**：边写边看，支持 Markdown 语法高亮。
- **分栏工作台**：编辑器与预览并排显示，可调整面板宽度。
- **完整 GFM 支持**：表格、任务列表、代码块等 GitHub 风格 Markdown。
- **专业 PDF 输出**：高质量排版，支持样式定制。
- **多 Agent AI 审阅与润色**：先评审后改写，提升可读性与表达质量。
- **明暗主题切换**：支持深色/浅色模式与系统偏好。
- **历史记录管理**：追踪最近文档转换。
- **容器化部署**：开箱支持 Docker 与 Docker Compose。

## 技术栈

### 前端

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- CodeMirror 6
- React Markdown

### 后端与渲染

- Next.js API Routes
- Vercel AI SDK + @ai-sdk/openai
- Puppeteer（Headless Chrome）
- marked
- highlight.js

### 基础设施

- Docker / Docker Compose
- Google Chrome Stable（PDF 渲染引擎）
- pnpm

## 快速开始

```bash
git clone https://github.com/neozhu/md-to-pdf-app.git
cd md-to-pdf-app
pnpm install
pnpm dev
```

浏览器访问：`http://localhost:3000`

## Docker 部署

```bash
docker compose up -d
```

停止服务：

```bash
docker compose down
```

## AI 审阅流程（双 Agent）

1. **Review Pass**：分析文档结构、语气、清晰度和语法问题，并生成改进计划。
2. **Polish Pass**：在保持原意与结构的前提下，对 Markdown 进行受控改写。
3. **Live Progress**：前端实时展示阶段进度，完成后自动应用润色结果。

## 环境变量（示例）

```env
PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable
NODE_ENV=development

NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

OPENAI_API_KEY=
# OPENAI_MODEL=gpt-4o-mini
# OPENAI_BASE_URL=https://api.openai.com/v1
```

## 项目结构（节选）

```text
md-to-pdf-app/
├── app/
│   ├── api/ai-review/
│   ├── api/pdf/
│   └── page.tsx
├── components/
│   ├── md/
│   └── ui/
├── lib/
├── public/
├── Dockerfile
└── docker-compose.yml
```

## 适用场景

- 技术文档与说明书导出
- 博客草稿快速排版成 PDF
- 团队文稿的 AI 评审与润色
- 需要统一样式的 Markdown 批量输出

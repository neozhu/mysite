---
title: 'Botchat - AI 对话工作台'
image: /uploads/illustrations/cuate/botchat-showcase.png
date: 2026-09-19 00:00:00
tags:
  - GitHub
  - AI
  - Next.js
---

{{< brick_title >}}
{{< button "查看 GitHub 项目" "https://github.com/neozhu/botchat" >}}
{{< button "在线体验" "https://botchat.blazorserver.com" >}}
{{< /brick_title >}}

Botchat 是一个面向日常高效对话的开源 AI 工作台，支持专业角色、用户身份验证、独立工作空间、多会话管理、流式回复、文件附件，以及清晰的 Markdown 与代码块展示。

与只有单一通用助手的聊天应用不同，Botchat 可以为不同任务配置拥有独立系统提示词的专家角色。登录用户拥有彼此隔离的会话与消息记录，同时部署者可以维护全局共享的专家配置，为个人或团队提供一致的使用体验。

## 核心功能

- **专家角色：** 根据任务切换不同专家，每个专家拥有独立的指令和行为设定。
- **流式对话：** 模型生成内容时即时显示结果，减少等待感。
- **个人工作空间：** 内置注册、登录、密码修改、会话列表、标题和消息预览。
- **数据隔离：** 使用 Supabase Row Level Security，确保用户只能访问自己的会话与消息。
- **附件支持：** 可将图片或文件上传到 Supabase Storage 并随消息发送。
- **代码友好：** 支持 Markdown、语法高亮代码块和易读的长文本输出。
- **上下文压缩：** 可通过滚动摘要控制长会话上下文，减少重复发送完整历史记录。

## 架构与技术栈

Botchat 使用 **Next.js App Router** 构建页面和 API 路由，通过 **Vercel AI SDK** 实现模型的流式响应，并使用 **Supabase** 提供身份验证、PostgreSQL 数据存储、文件存储与访问控制。模型名称通过环境变量配置，不与代码绑定，方便适配不同的部署环境。

仓库同时提供 Docker 与 Docker Compose 生产部署配置。项目将聊天组件、AI UI 基础组件、公共工具和 Supabase 客户端清晰分离，便于继续扩展新的专家能力和业务场景。

## 开源使用

Botchat 可作为个人 AI 工作空间、企业内部专家助手或垂直领域聊天产品的基础。你可以在 GitHub 查看源码、本地运行，或根据自己的工作流程定制专家系统。

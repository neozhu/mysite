---
title: 'Botchat - AI Chat Workspace'
image: /uploads/illustrations/cuate/botchat-showcase.png
date: 2026-09-19 00:00:00
tags:
  - GitHub
  - AI
  - Next.js
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/botchat" >}}
{{< button "Live Demo" "https://botchat.blazorserver.com" >}}
{{< /brick_title >}}

Botchat is an open-source AI chat workspace designed for focused, everyday conversations with specialized expert personas. It combines a fast chat experience with authenticated personal workspaces, persistent sessions, streaming responses, file attachments, and readable Markdown and code rendering.

Instead of forcing every conversation through one generic assistant, Botchat lets users switch between experts with distinct system prompts. Each signed-in user gets an isolated conversation history, while shared expert definitions make it easy to provide consistent roles across a team or deployment.

## Key Features

- **Expert personas:** Switch between purpose-built experts, each with its own instructions and behavior.
- **Streaming conversations:** Responses appear progressively for a responsive chat experience.
- **Personal workspaces:** Authentication, session lists, generated titles, and message previews are built in.
- **Private chat history:** Supabase Row Level Security scopes sessions and messages to their owners.
- **Attachments:** Images and files can be stored in Supabase Storage and included with messages.
- **Developer-friendly answers:** Markdown, syntax-highlighted code blocks, and long-form responses remain easy to read.
- **Context compaction:** Optional rolling summaries keep longer conversations useful without sending the full history on every request.

## Architecture and Technology

Botchat uses **Next.js with the App Router** for the application and API routes, the **Vercel AI SDK** for streamed model responses, and **Supabase** for authentication, PostgreSQL persistence, Storage, and access control. The model is configured through environment variables rather than being hard-coded, making the application adaptable to different deployments.

The repository also includes Docker and Docker Compose configuration for production deployment. Its structure separates chat components, reusable AI-oriented UI elements, shared utilities, and Supabase clients so that the interface and data layer remain straightforward to extend.

## Open Source

Botchat is a practical foundation for personal AI workspaces, internal expert assistants, and domain-specific chat products. Explore the source code, run it locally, or adapt the expert system to your own workflow on GitHub.

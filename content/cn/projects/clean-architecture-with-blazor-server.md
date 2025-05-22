---
title: 'Blazor Server项目模板'
image: /uploads/illustrations/cuate/blazorserver.png
date: 2025-04-04 00:00:00
tags: 
  -
---

{{< brick_title >}}  
{{< button "查看 GitHub 项目" "https://github.com/neozhu/CleanArchitectureWithBlazorServer" >}}  
{{< /brick_title >}}


本项目是一款基于 Clean Architecture 架构设计的 Blazor Server 应用，拥有现代化的用户界面和高效的代码生成器。该应用采用 .NET 9 构建，旨在提供更卓越的性能、更高的开发效率以及更流畅的开发体验。

.NET 9 全面支持 Blazor Server，它将 C# 的强大功能与现代 Web 开发体验融为一体。这使得开发者无需在 JavaScript 和 C# 之间频繁切换，从而简化了开发流程，能够更轻松地构建响应迅速、交互性强的 Web 应用。结合 Blazor 的实时通信能力和 .NET 强大的生态系统，开发者可以快速打造功能丰富、可扩展且用户体验出色的系统。

{{< youtube "hCsHSNAs-70" "/uploads/youtube01.png" >}}


## 为什么选择 Blazor Server？

Blazor Server 是我个人偏爱的 Web 开发模式之一。它带来了高度专注的开发体验——整个前后端均可使用 C# 完成，避免了在 C# 与 JavaScript 间频繁切换的困扰，显著提升了开发效率，并使项目更易于维护。

依托 SignalR 技术，Blazor Server 支持实时 UI 更新，使其成为构建管理后台、工作流程系统、文档识别 (OCR) 应用、组织结构图等多种企业级应用的理想选择。此模板中还集成了 Hangfire（用于计划任务的可视化管理）以及多种 OAuth2 第三方登录选项。

## 主要特性

- Clean Architecture 架构分层：Domain / Application / Infrastructure / UI
- 内置多种第三方登录（Google、Facebook、Microsoft）
- 支持 Docker 和 Docker Compose，一键部署至生产环境
- Visual Studio 2022 扩展：**CleanArchitecture CodeGenerator** (代码生成器)
- 包含多个实际应用案例 (例如：数字产品护照 DPP、HSE 管理系统)
- 支持 PostgreSQL, MSSQL 及 SQLite 等多种数据库
- 已发布 NuGet 模板，方便快速创建新项目

## 演示地址

- **在线演示站点**：[architecture.blazorserver.com](https://architecture.blazorserver.com)

## Docker Compose 部署示例

```yml
version: '3.8'
services:
  blazorserverapp:
    image: blazordevlab/cleanarchitectureblazorserver:1.2.10
    environment:
      - UseInMemoryDatabase=${USE_IN_MEMORY_DATABASE}
      - ASPNETCORE_ENVIRONMENT=${ASPNETCORE_ENVIRONMENT}
      - ASPNETCORE_URLS=${ASPNETCORE_URLS}
      - ASPNETCORE_HTTP_PORTS=${ASPNETCORE_HTTP_PORTS}
      - ASPNETCORE_HTTPS_PORTS=${ASPNETCORE_HTTPS_PORTS}
      - AppConfigurationSettings__ApplicationUrl=${APP_URL}
      - AppConfigurationSettings__AppName=${APP_NAME}
      - DatabaseSettings__DBProvider=${DB_PROVIDER}
      - DatabaseSettings__ConnectionString=${DB_CONNECTION_STRING}
      - SmtpClientOptions__User=${SMTP_USER}
      - SmtpClientOptions__Port=${SMTP_PORT}
      - SmtpClientOptions__Server=${SMTP_SERVER}
      - SmtpClientOptions__Password=${SMTP_PASSWORD}
      - SmtpClientOptions__DefaultFromEmail=${SMTP_DEFAULT_FROM}
      - Authentication__Microsoft__ClientId=${MS_CLIENT_ID}
      - Authentication__Microsoft__ClientSecret=${MS_CLIENT_SECRET}
      - Authentication__Google__ClientId=${GOOGLE_CLIENT_ID}
      - Authentication__Google__ClientSecret=${GOOGLE_CLIENT_SECRET}
      - Minio__Endpoint=${MINIO_ENDPOINT}
      - Minio__AccessKey=${MINIO_ACCESS_KEY}
      - Minio__SecretKey=${MINIO_SECRET_KEY}
      - Minio__BucketName=${MINIO_BUCKET}
    ports:
      - "8014:80"
      - "8015:443"
```

提示：请将上述环境变量（如 `${SMTP_USER}`）替换为您的实际配置值。

## 授权许可

本项目基于 MIT 许可证（一种宽松的开源许可证）授权。您可以自由地使用、修改和分发本代码，无论是用于个人还是商业用途，前提是必须保留原始的许可证和版权声明。

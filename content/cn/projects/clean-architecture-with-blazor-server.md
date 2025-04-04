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


本项目是一个使用 Clean Architecture 架构设计的 Blazor Server 应用，具备现代化的用户界面和高效的代码生成器。该应用基于 .NET 9 构建，带来更出色的性能、更高的开发效率以及更平滑的开发体验。

Blazor Server 在 .NET 9 中得到了全面支持，它将 C# 的强大能力与现代 Web 开发体验相结合，让开发者无需频繁切换语言（例如 JavaScript 和 C#），从而简化开发流程，实现响应迅速、交互性强的现代 Web 应用。结合 Blazor 的实时通信能力和 .NET 的强大生态，开发者可以快速构建功能丰富、可扩展、用户体验卓越的系统。

{{< youtube "hCsHSNAs-70" "/uploads/youtube01.png" >}}


## 为什么选择 Blazor Server？

Blazor Server 是我最喜欢的 Web 开发方式之一。它让开发体验更加专注 —— 整个前后端开发均可使用 C# 编写，避免了在 C# 和 JavaScript 之间来回切换，提升了开发效率，也让项目更易于维护。

借助 SignalR，Blazor Server 支持实时 UI 更新，非常适用于管理后台、工作流程系统、文档识别（OCR）、组织结构图等企业应用场景。在本模板中，我还集成了 Hangfire 用于计划任务的可视化管理面板，以及多个 OAuth2 第三方登录方式。

## 主要特性

- Clean Architecture 架构分层：Domain / Application / Infrastructure / UI
- 内置多种第三方登录（Google、Facebook、Microsoft）
- 支持 Docker 和 Docker Compose，一键部署至生产环境
- Visual Studio 2022 扩展：**CleanArchitecture CodeGenerator**
- 包含多个实际案例（例如 DPP 数字产品护照、HSE 管理系统）
- 支持 PostgreSQL、MSSQL 和 SQLite 数据库
- 已发布 NuGet 模板，支持快速创建新项目

## 演示地址

- [在线演示站点 - architecture.blazorserver.com](https://architecture.blazorserver.com)

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

提示：请将环境变量（如 `${SMTP_USER}`）替换为你自己的实际配置值。

## 许可证

本项目基于 MIT 开源许可证发布，您可以自由使用、修改和分发。

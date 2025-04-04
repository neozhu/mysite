---
title: 'CleanAspire 项目模板'
image: /uploads/illustrations/cuate/blazorclient.jpg
date: 2025-04-04 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}  
{{< button "查看 GitHub 项目" "https://github.com/neozhu/cleanaspire" >}}  
{{< /brick_title >}}

CleanAspire 是一个基于 .NET 9 的前沿开源项目模板，旨在加速开发轻量级、高性能、易于维护的 Blazor WebAssembly 或渐进式 Web 应用（PWA）。它无缝集成了 Minimal APIs、Aspire 监控支持，以及 Scalar 现代化 API 文档生成方案。

本模板强调 Clean Architecture 架构和极致简洁的代码风格，开发者可以快速构建响应式、高可维护性的前端应用。同时还支持 Microsoft.Kiota 自动生成 API 客户端代码，确保项目结构的一致性与开发效率。

{{< youtube "STEoTyFvKag" "/uploads/youtube02.png" >}}

## 使用 Chat GPTs 自动生成代码

CleanAspire 搭配 Clean Code Generator，可以基于该模板自动生成后端应用逻辑与前端 Blazor 组件，显著提升开发效率，简化重复性任务。

![Chat GPT 示例图](/uploads/illustrations/cuate/gpts.png)

## Key Features

- 内置 Aspire 仪表板支持  
- 快速、极简的 .NET 9 Minimal APIs 架构  
- 极简设计，专注性能与可维护性  
- 集成 Blazor WebAssembly 与 PWA 支持  
- 简洁的 API 客户端生成机制（支持 Kiota）  
- 完整的 Clean Architecture 分层结构  
- 原生支持 Docker 云部署  
- 实时 Web Push 通知支持  
- 集成 CI/CD 自动部署流程  
- 离线使用模式支持  
 


## 演示

- [在线演示 - cleanaspire.blazorserver.com](https://cleanaspire.blazorserver.com/)

## Docker Compose Demployment
```yml
version: '3.8'
services:
  apiservice:
    image: blazordevlab/cleanaspire-api:0.0.85
    environment:
      - ASPNETCORE_ENVIRONMENT=${APISERVICE_ASPNETCORE_ENVIRONMENT}
      - AllowedHosts=${APISERVICE_AllowedHosts}
      - ASPNETCORE_URLS=${APISERVICE_ASPNETCORE_URLS}
      - ASPNETCORE_HTTP_PORTS=${APISERVICE_ASPNETCORE_HTTP_PORTS}
      - ASPNETCORE_HTTPS_PORTS=${APISERVICE_ASPNETCORE_HTTPS_PORTS}
      - DatabaseSettings__DBProvider=${APISERVICE_DatabaseSettings__DBProvider}
      - DatabaseSettings__ConnectionString=${APISERVICE_DatabaseSettings__ConnectionString}
      - ClientBaseUrl=${APISERVICE_ClientBaseUrl}
      - AllowedCorsOrigins=${APISERVICE_AllowedCorsOrigins}
      - SendGrid__ApiKey=${APISERVICE_SendGrid__ApiKey}
      - SendGrid__DefaultFromEmail=${APISERVICE_SendGrid__DefaultFromEmail}
      - Authentication__Google__ClientId=${APISERVICE_Authentication__Google__ClientId}
      - Authentication__Google__ClientSecret=${APISERVICE_Authentication__Google__ClientSecret}
      - Webpushr__Token=${APISERVICE_Webpushr__Token}
      - Webpushr__ApiKey=${APISERVICE_Webpushr__ApiKey}
      - Webpushr__PublicKey=${APISERVICE_Webpushr__PublicKey}
      - Minio__Endpoint=${APISERVICE_Minio__Endpoint}
      - Minio__AccessKey=${APISERVICE_Minio__AccessKey}
      - Minio__SecretKey=${APISERVICE_Minio__SecretKey}
      - Minio__BucketName=${APISERVICE_Minio__BucketName}
    ports:
      - "8037:80"
      - "8036:443"
  blazorweb:
    image: blazordevlab/cleanaspire-webapp:0.0.85
    environment:
      - ASPNETCORE_ENVIRONMENT=${BLAZORWEB_ASPNETCORE_ENVIRONMENT}
      - AllowedHosts=${BLAZORWEB_AllowedHosts}
      - ASPNETCORE_URLS=${BLAZORWEB_ASPNETCORE_URLS}
      - ASPNETCORE_HTTP_PORTS=${BLAZORWEB_ASPNETCORE_HTTP_PORTS}
      - ASPNETCORE_HTTPS_PORTS=${BLAZORWEB_ASPNETCORE_HTTPS_PORTS}
    ports:
      - "8035:80"
      - "8034:443"
  standalone:
    image: blazordevlab/cleanaspire-standalone:0.0.85
    ports:
      - "8032:80"
      - "8031:443"
```
温馨提示：请根据你自己的实际部署环境替换上方的环境变量（例如 `${APISERVICE_Authentication__Google__ClientId}`）。

## License
本项目使用 **MIT License** 开源协议。这是一种非常宽松的许可方式，允许你在保留原始版权信息的前提下，自由地使用、修改和分发本项目，无论是用于个人用途还是商业项目。
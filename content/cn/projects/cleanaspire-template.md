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

CleanAspire 结合 Clean Code Generator，能够基于此模板自动生成后端应用逻辑及前端 Blazor 组件，从而显著提升开发效率并简化重复性编码任务。

![Chat GPT 示例图](/uploads/illustrations/cuate/gpts.png)

## 主要特性

- **Aspire 仪表板集成**：内置 .NET Aspire 监控仪表板支持。
- **Minimal APIs 架构**：基于 .NET 9 Minimal APIs 构建，快速且极简。
- **性能与可维护性**：设计简洁，高度关注应用的性能表现和代码的可维护性。
- **Blazor Wasm & PWA**：全面集成 Blazor WebAssembly 与渐进式 Web 应用 (PWA) 支持。
- **API 客户端生成**：支持 Microsoft Kiota，实现简洁高效的 API 客户端代码自动生成。
- **Clean Architecture**：遵循完整的 Clean Architecture 分层设计原则。
- **Docker 支持**：原生支持 Docker 容器化，简化云端部署流程。
- **实时通知**：集成 Web Push 技术，支持实时向客户端推送通知。
- **CI/CD 流程**：预置 CI/CD (持续集成/持续部署) 自动化流程。
- **离线模式**：支持应用在离线状态下使用。

## 在线演示

- **演示站点**：[cleanaspire.blazorserver.com](https://cleanaspire.blazorserver.com/)

## Docker Compose 部署
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
温馨提示：请根据您的实际部署环境，替换上述 YAML 配置中的环境变量占位符 (例如 `${APISERVICE_Authentication__Google__ClientId}`)。

## 授权许可
本项目采用 **MIT License** 开源协议。这是一种非常宽松的许可协议，允许您在保留原始版权信息的前提下，自由地使用、修改和分发此项目代码，无论是个人用途还是商业项目。
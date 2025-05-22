---
title: 'CleanAspire Template'
image: /uploads/illustrations/cuate/blazorclient.jpg
date: 2025-04-04 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/cleanaspire" >}}
{{< /brick_title >}}

CleanAspire is a cutting-edge, open-source template built on .NET 9, designed to accelerate the development of lightweight, high-performance, and streamlined Blazor WebAssembly applications or Progressive Web Applications (PWA). It seamlessly integrates Minimal APIs, .NET Aspire for observability, and Scalar for modern API documentation.

Focusing on Clean Architecture principles and utmost code simplicity, CleanAspire equips developers to create responsive and maintainable web applications with minimal effort. The template also leverages Microsoft.Kiota to simplify API client generation, ensuring consistency and boosting productivity across projects.

{{< youtube "STEoTyFvKag" "/uploads/youtube02.png" >}}

## AI-Powered Code Generation with Chat GPTs

Leverage the Clean Code Generator, which automates the creation of clean, maintainable code based on the CleanAspire repository. It supports the generation of backend Application Layer features and Blazor front-end components, significantly accelerating development.

![Chat GPT](/uploads/illustrations/cuate/gpts.png)

## Key Features

- **Built-in .NET Aspire Support:** For enhanced observability and cloud-native orchestration.
- **.NET 9 Minimal APIs:** Fast, concise, and efficient backend development.
- **Optimized for Simplicity and Speed:** Core design philosophy emphasizing ease of use and high performance.
- **Blazor WebAssembly & PWA:** Seamless integration for modern frontend experiences and offline capabilities.
- **Streamlined API Client Generation:** Utilizes Microsoft Kiota for easy integration.
- **Clean Architecture Principles:** Ensures a maintainable, scalable, and testable codebase.
- **Cloud-Ready Deployment:** Includes Docker support for containerization and easy cloud deployment.
- **Real-Time Notifications:** Integrated Web Push for instant user engagement.
- **CI/CD Pipelines:** Pre-configured Continuous Integration/Continuous Deployment workflows.
- **Offline Mode Functionality:** Robust PWA capabilities for offline application access.

## Demos

- **Live Demo:** [cleanaspire.blazorserver.com](https://cleanaspire.blazorserver.com/)

## Docker Compose Deployment
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

Tip: Please replace the environment variable placeholders in the YAML configuration above (e.g., `${APISERVICE_Authentication__Google__ClientId}`) according to your actual deployment environment.

## License
This project is licensed under the MIT License, a permissive open-source license. You are free to use, modify, and distribute the code for personal or commercial purposes, provided the original license and copyright notice are included.
---
title: 'Clean Architecture With Blazor Server'
image: /uploads/illustrations/cuate/blazorserver.png
date: 2025-04-04 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/CleanArchitectureWithBlazorServer" >}}
{{< /brick_title >}}

This project showcases a Blazor Server application meticulously designed using Clean Architecture principles. It features a sophisticated user interface and an integrated, efficient code generator.

Built on .NET 9, the application benefits from enhanced performance, improved developer productivity, and a smoother development workflow. .NET 9's full support for Blazor Server combines the power of C# with a modern web development experience, eliminating the need to constantly switch between JavaScript and C#. This streamlined setup simplifies development, enabling the creation of fast, responsive, and highly interactive web applications. By leveraging Blazor’s real-time communication capabilities and the robust .NET ecosystem, developers can rapidly build feature-rich, scalable applications that offer a seamless user experience.

{{< youtube "hCsHSNAs-70" "/uploads/youtube01.png" >}}

## Why Blazor Server?

Blazor Server is my preferred approach to building web applications. It enables a focused development experience—writing everything in C# without constantly switching back and forth with JavaScript. This simplifies not just productivity, but also long-term maintainability.

Thanks to SignalR, Blazor Server supports real-time UI updates, which makes it perfect for admin dashboards, workflow systems, document OCR applications, and organizational charts. In this template, I have also included Hangfire for scheduled task dashboards and built-in OAuth2 login integrations.

## Key Features

- **Clean Architecture Design:** Adheres to clear separation of concerns with Domain, Application, Infrastructure, and UI layers.
- **Built-in Authentication:** Includes pre-configured authentication options for Google, Facebook, and Microsoft.
- **Containerization Support:** Offers Docker and Docker Compose configurations for production-ready deployments.
- **Visual Studio 2022 Extension:** **CleanArchitecture CodeGenerator** for rapid feature scaffolding.
- **Real-World Examples:** Includes practical examples such as Digital Product Passport (DPP) and HSE (Health, Safety, and Environment) management systems.
- **Database Flexibility:** Provides support for PostgreSQL, MSSQL, and SQLite databases.
- **NuGet Package Template:** Available as a NuGet template for quick project initialization.

## Demos

- **Live Demo:** [architecture.blazorserver.com](https://architecture.blazorserver.com)

## Docker Compose Deployment
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

Tip: Replace environment variables (like `${SMTP_USER}`) with your actual configuration values.

## License
This project is licensed under the MIT License, a permissive open-source license. You are free to use, modify, and distribute the code for personal or commercial purposes, provided the original license and copyright notice are included.
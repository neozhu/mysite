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

This repository hosts a Blazor Server application designed using Clean Architecture principles, featuring a sophisticated user interface and an efficient code generator. The application is built on .NET 9, which brings enhanced performance, improved developer productivity, and new features that make the development process smoother. Blazor Server, now supported on .NET 9, combines the power of C# with a modern web development experience, eliminating the need to switch between languages like JavaScript and C#. This setup simplifies development and enables fast, responsive, and highly interactive web applications. Leveraging Blazor’s real-time communication capabilities and .NET’s robust ecosystem, developers can rapidly create feature-rich, scalable applications with a seamless user experience.



{{< youtube "hCsHSNAs-70" "/uploads/youtube01.png" >}}

## Why Blazor Server?

Blazor Server is my preferred approach to building web apps. It enables a focused development experience — writing everything in C# without constantly switching back and forth with JavaScript. This simplifies not just productivity, but also long-term maintainability.

Thanks to SignalR, Blazor Server supports real-time UI updates, which makes it perfect for admin dashboards, workflow systems, document OCR, and organizational charts. In this template, I’ve also included Hangfire for scheduled task dashboards and built-in OAuth2 login integrations.

## Key Features

- Clean Architecture design: Domain / Application / Infrastructure / UI separation
- Built-in authentication (Google, Facebook, Microsoft)
- Docker & Docker Compose support for production-ready deployments
- Visual Studio 2022 Extension: **CleanArchitecture CodeGenerator**
- Multiple real-world examples (e.g., DPP, HSE management systems)
- Support for PostgreSQL, MSSQL, SQLite
- NuGet package template support


## Demos

- [Live Demo - architecture.blazorserver.com](https://architecture.blazorserver.com)

## Docker Compose Demployment
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

## License
This project is licensed under the MIT License, which is a permissive open-source license.
You are free to use, modify, and distribute the code for both personal and commercial purposes,
as long as the original license and copyright notice are included.
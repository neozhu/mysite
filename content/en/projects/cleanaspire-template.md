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

CleanAspire is a cutting-edge, open-source template built on .NET 9, designed to accelerate the development of lightweight, fast, and simple Blazor WebAssembly or Progressive Web Applications (PWA). It seamlessly integrates Minimal APIs, Aspire, and Scalar for modern API documentation.

With a focus on Clean Architecture and extreme code simplicity, CleanAspire provides developers with the tools to create responsive and maintainable web applications with minimal effort. The template also supports Microsoft.Kiota to simplify API client generation, ensuring consistency and productivity in every project.



{{< youtube "STEoTyFvKag" "/uploads/youtube02.png" >}}

## Auto-generate Code Using Chat GPTs

Clean Code Generator automates the creation of clean, maintainable code based on the CleanAspire repository. It supports generating backend Application features and Blazor front-end components for rapid development.

![Chat GPT](/uploads/illustrations/cuate/gpts.png)


## Key Features

- Built-in Aspire Support  
- Fast and Minimal .NET 9 Minimal APIs
- Designed for Simplicity and Speed
- Blazor WebAssembly and PWA Integration
- Streamlined API Client Integration
- Clean Architecture
- Cloud-Ready with Docker 
- Real-Time Web Push Notifications
- Integrated CI/CD Pipelines 
- Offline Mode Support
 


## Demos

- [Live Demo - cleanaspire.blazorserver.com](https://cleanaspire.blazorserver.com/)

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

## License
This project is licensed under the MIT License, which is a permissive open-source license.
You are free to use, modify, and distribute the code for both personal and commercial purposes,
as long as the original license and copyright notice are included.
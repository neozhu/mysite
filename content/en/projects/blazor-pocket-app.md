---
title: 'BlazorPocket App'
image: /uploads/illustrations/cuate/blazorpocket.jpg
date: 2025-04-04 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/BlazorPocketApp" >}}
{{< /brick_title >}}

BlazorPocket is a streamlined web application template utilizing .NET 9 Blazor WebAssembly and PocketBase for backend services. It's designed to simplify development and reduce repetitive coding, offering an efficient starting point for modern web applications. Its WebAssembly mode allows deployment on any server, providing flexible hosting options from free services to cloud platforms, enabling easy setup and operation anywhere.

{{< youtube "Pm2s6_oAgaw" "/uploads/youtube03.png" >}}

## Key Features

- **Blazor WebAssembly:** Leverages .NET 9 for client-side development, enabling rich and interactive user experiences.
- **PocketBase Integration:** Offers seamless integration with PocketBase, delivering a robust and scalable backend data solution.
- **Streamlined Development:** Minimizes repetitive coding tasks, facilitating faster development and deployment cycles for web applications.
- **Cross-Platform Deployment:** Thanks to WebAssembly, the application can be deployed on any standard server, offering versatile hosting options on both free services and cloud platforms.
- **Shared Codebase:** Features a shared project for code and models, promoting code reuse between client and server components.
- **Quick Start Template:** Offers a ready-to-use template, providing developers with a solid foundation to rapidly begin building web applications.

## Demos

- **Live Demo:** [blazorpocket.blazorserver.com](https://blazorpocket.blazorserver.com)

## Docker Compose Deployment
```yml
version: '3.8'
services:
  blazorpocketapp:
    image: blazordevlab/blazorpocketapp:0.0.36
    environment:
      - UseInMemoryDatabase=false
      - ASPNETCORE_ENVIRONMENT=Development
      - ASPNETCORE_URLS=http://+:80;https://+:443
      - ASPNETCORE_HTTP_PORTS=80
      - ASPNETCORE_HTTPS_PORTS=443
      - AppSetting__AppName='${AppName}'
      - AppSetting__Version='${Version}'
      - AppSetting__ProcketbaseUrl='${ProcketbaseUrl}'   
    ports:
      - "8023:80"
      - "8024:443"
  blazorpocketapp1:
    image: blazordevlab/blazorpocketapp:0.0.36
    environment:
      - UseInMemoryDatabase=false
      - ASPNETCORE_ENVIRONMENT=Development
      - ASPNETCORE_URLS=http://+:80;https://+:443
      - ASPNETCORE_HTTP_PORTS=80
      - ASPNETCORE_HTTPS_PORTS=443
      - AppSetting__AppName='${AppName}'
      - AppSetting__Version='${Version}'
      - AppSetting__ProcketbaseUrl=https://blazorpocketbase.blazors.app    
    ports:
      - "8026:80"
      - "8027:443"
  pocketbase:
    image: blazordevlab/blazorpocketbase:0.0.27
    ports:
      - "8025:8080"
    volumes:
      - pocketbase_data:/pb/pb_data 
volumes:
  pocketbase_data:
```

## License
This project is licensed under the MIT License, a permissive open-source license. You are free to use, modify, and distribute the code for personal or commercial purposes, provided the original license and copyright notice are included.
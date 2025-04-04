---
title: 'BlazorPocket App'
image: /uploads/illustrations/cuate/blazorpocket.jpg
date: 2025-04-04 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "前往 GitHub" "https://github.com/neozhu/BlazorPocketApp" >}}
{{< /brick_title >}}

BlazorPocket 是一个简化的 Web 应用模板，基于最新的 .NET 9.0 Blazor WebAssembly 构建，使用 PocketBase 作为后端数据存储。该模板旨在简化开发流程，减少重复编码，为构建现代 Web 应用提供一个快速高效的起点。
通过 WebAssembly 模式，BlazorPocket 应用可以部署在任何服务器上，支持灵活的托管选项，无论是免费托管服务还是云平台，都能轻松搭建和运行您的 Web 应用。



{{< youtube "Pm2s6_oAgaw" "/uploads/youtube03.png" >}}




## Key Features

- Blazor WebAssembly：基于 .NET 9.0 Blazor WebAssembly，实现客户端 Web 开发，带来丰富的交互体验。
- PocketBase 集成：与 PocketBase 无缝集成，提供强大且可扩展的数据存储方案。
- 开发流程简化：减少重复编码任务，加快 Web 应用的开发和部署速度。
- 跨平台部署：WebAssembly 模式支持部署在任意服务器，灵活选择托管方式。
- 共享代码库：包含客户端和服务器共享的代码与模型项目，便于代码复用。
- 快速入门模板：提供开箱即用的模板，为开发者构建 Web 应用打下坚实基础。
 


## 在线演示

- [在线演示 - blazorpocket.blazorserver.com](https://blazorpocket.blazorserver.com)

## Docker Compose Demployment
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
本项目采用 MIT 许可证开源。您可以自由地用于个人或商业项目，进行修改和分发，  
只需保留原始许可证和版权声明即可。
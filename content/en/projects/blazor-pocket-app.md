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

BlazorPocket is a streamlined web application template built with the latest .NET 9.0 Blazor WebAssembly and PocketBase for backend data storage. Designed to simplify the development process and reduce repetitive coding, BlazorPocket provides a quick and efficient starting point for building modern web applications. With its WebAssembly mode, the application can be deployed on any server, offering flexible hosting options, whether on free hosting services or cloud platforms. This makes it easy to set up and run your web applications anywhere.



{{< youtube "Pm2s6_oAgaw" "/uploads/youtube03.png" >}}




## Key Features

- Blazor WebAssembly: Utilizes .NET 9.0 Blazor WebAssembly for client-side web development, allowing for a rich, interactive user experience.
- PocketBase Integration: Seamlessly integrates with PocketBase for backend data storage, providing a robust and scalable data solution.
- Streamlined Development: Reduces repetitive coding tasks, enabling faster development and deployment of web applications.
- Cross-Platform Deployment: The WebAssembly mode allows the application to be deployed on any server, offering flexibility to host on free services or cloud platforms.
- Shared Codebase: Includes a shared code and models project, facilitating code reuse between the client and server parts of the application.
- Quick Start Template: Provides a ready-to-use template, helping developers get started quickly with a solid foundation for their web applications.
 


## Demos

- [Live Demo - blazorpocket.blazorserver.com](https://blazorpocket.blazorserver.com)

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
This project is licensed under the MIT License, which is a permissive open-source license.
You are free to use, modify, and distribute the code for both personal and commercial purposes,
as long as the original license and copyright notice are included.
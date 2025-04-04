---
title: 'Clean Architecture Solution For Razor Pages'
image: /uploads/illustrations/cuate/razorpage.png
date: 2025-04-04 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "前往 GitHub" "https://github.com/neozhu/RazorPageCleanArchitecture" >}}
{{< /brick_title >}}

这是一个基于 Clean Architecture 原则创建 ASP.NET Core Razor Page 应用的解决方案模板。你可以点击上方的“Use this template”按钮来基于该模板创建一个新项目，或者安装并运行相关 NuGet 包（详见下方的“快速开始”部分）。



## 技术栈  

* [ASP.NET Core 9](https://devblogs.microsoft.com/aspnet/announcing-asp-net-core-in-net-9/)  
* [Entity Framework Core 9](https://docs.microsoft.com/en-us/ef/core/)  
* [SmartAdmin - 响应式 Web 应用](https://wrapbootstrap.com/theme/smartadmin-responsive-webapp-WB0573SK0/)  
* [Razor Pages](https://docs.microsoft.com/zh-cn/aspnet/core/razor-pages/?view=aspnetcore-5.0&tabs=visual-studio)  
* [Jquery EasyUI](https://www.jeasyui.com/)  
* [MediatR](https://github.com/jbogard/MediatR)  
* [AutoMapper](https://automapper.org/)  
* [FluentValidation](https://fluentvalidation.net/)  
* [NUnit](https://nunit.org/)、[FluentAssertions](https://fluentassertions.com/)、[Moq](https://github.com/moq) 和 [Respawn](https://github.com/jbogard/Respawn)  
* [Docker](https://www.docker.com/)  


## 快速开始  

最快速的方式是安装该 [NuGet 包](https://www.nuget.org/packages/Clean.Architecture.Solution.Template) 并运行 `dotnet new ca-sln`：  

1. 安装最新的 [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)  
2. 运行 `dotnet new --install Clean.Architecture.Solution.Template` 来安装项目模板  
3. 为你的解决方案创建一个文件夹并进入该文件夹（模板将使用该文件夹名作为项目名）  
4. 运行 `dotnet new ca-sln` 来创建一个新项目  
5. 进入 `src/WebUI/ClientApp` 并运行 `npm install` 安装前端依赖  
6. 进入 `src/WebUI/ClientApp` 并运行 `npm start` 启动前端（Angular）  
7. 进入 `src/WebUI` 并运行 `dotnet run` 启动后端（ASP.NET Core Web API）  

## 授权许可  

本项目使用 MIT 开源许可证发布，这是一种宽松的开源许可协议。  
你可以自由地使用、修改和分发本代码，无论是用于个人还是商业用途，  
只需保留原始的许可声明和版权信息即可。

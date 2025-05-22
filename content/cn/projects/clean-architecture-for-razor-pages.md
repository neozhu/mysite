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

这是一个基于 Clean Architecture 原则创建 ASP.NET Core Razor Pages 应用的解决方案模板。您可以点击上方的“Use this template”按钮，基于此模板创建新项目，或通过安装运行相关的 NuGet 包（详见下方的“快速开始”部分）来开始。

## 技术栈

*   [.NET 9](https://dotnet.microsoft.com/download/dotnet/9.0) / [ASP.NET Core 9](https://devblogs.microsoft.com/aspnet/announcing-asp-net-core-in-net-9/)
*   [Entity Framework Core 9](https://docs.microsoft.com/en-us/ef/core/)
*   [Razor Pages](https://docs.microsoft.com/zh-cn/aspnet/core/razor-pages/?view=aspnetcore-5.0&tabs=visual-studio)
*   [SmartAdmin - Responsive WebApp](https://wrapbootstrap.com/theme/smartadmin-responsive-webapp-WB0573SK0/) (商业主题，模板中已集成示例)
*   [jQuery EasyUI](https://www.jeasyui.com/) (用于部分复杂界面的快速构建)
*   [MediatR](https://github.com/jbogard/MediatR) (实现请求/响应、命令、查询、通知和事件的简洁处理)
*   [AutoMapper](https://automapper.org/) (用于对象间的映射)
*   [FluentValidation](https://fluentvalidation.net/) (用于构建强类型的验证规则)
*   测试工具：[NUnit](https://nunit.org/), [FluentAssertions](https://fluentassertions.com/), [Moq](https://github.com/moq), [Respawn](https://github.com/jbogard/Respawn)
*   [Docker](https://www.docker.com/) (支持容器化部署)

## 快速开始

最快捷的上手方式是安装此 [NuGet 包](https://www.nuget.org/packages/Clean.Architecture.Solution.Template) 并执行 `dotnet new ca-sln` 命令：

1.  安装最新的 [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)。
2.  运行 `dotnet new --install Clean.Architecture.Solution.Template` 命令，安装项目模板。
3.  为您的解决方案新建一个文件夹，并进入该文件夹 (模板将使用此文件夹名作为项目名称)。
4.  运行 `dotnet new ca-sln` 命令，基于模板创建新项目。
5.  导航至 `src/WebUI` 目录。
6.  运行 `dotnet build` 命令，编译项目。
7.  运行 `dotnet run` 命令，启动应用 (ASP.NET Core Razor Pages)。您可以通过浏览器访问显示的 URL。

## 授权许可

本项目使用 MIT 开源许可证发布，这是一种宽松的开源许可协议。  
你可以自由地使用、修改和分发本代码，无论是用于个人还是商业用途，  
只需保留原始的许可声明和版权信息即可。

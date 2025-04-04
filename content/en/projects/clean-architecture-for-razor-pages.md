---
title: 'Clean Architecture Solution For Razor Pages'
image: /uploads/illustrations/cuate/razorpage.png
date: 2025-04-04 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/RazorPageCleanArchitecture" >}}
{{< /brick_title >}}

This is a solution template for creating a Razor Page App with ASP.NET Core following the principles of Clean Architecture. Create a new project based on this template by clicking the above Use this template button or by installing and running the associated NuGet package (see Getting Started for full details).



## Technologies

* [ASP.NET Core 9](https://devblogs.microsoft.com/aspnet/announcing-asp-net-core-in-net-9/)
* [Entity Framework Core 9](https://docs.microsoft.com/en-us/ef/core/)
* [SmartAdmin - Responsive WebApp](https://wrapbootstrap.com/theme/smartadmin-responsive-webapp-WB0573SK0/)
* [Razor Pages](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-5.0&tabs=visual-studio)
* [Jquery EasyUI](https://www.jeasyui.com/)
* [MediatR](https://github.com/jbogard/MediatR)
* [AutoMapper](https://automapper.org/)
* [FluentValidation](https://fluentvalidation.net/)
* [NUnit](https://nunit.org/), [FluentAssertions](https://fluentassertions.com/), [Moq](https://github.com/moq) & [Respawn](https://github.com/jbogard/Respawn)
* [Docker](https://www.docker.com/)


## Getting Started

The easiest way to get started is to install the [NuGet package](https://www.nuget.org/packages/Clean.Architecture.Solution.Template) and run `dotnet new ca-sln`:

1. Install the latest [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
2. Run `dotnet new --install Clean.Architecture.Solution.Template` to install the project template
3. Create a folder for your solution and cd into it (the template will use it as project name)
4. Run `dotnet new ca-sln` to create a new project
5. Navigate to `src/WebUI/ClientApp` and run `npm install`
6. Navigate to `src/WebUI/ClientApp` and run `npm start` to launch the front end (Angular)
7. Navigate to `src/WebUI` and run `dotnet run` to launch the back end (ASP.NET Core Web API)



## License
This project is licensed under the MIT License, which is a permissive open-source license.
You are free to use, modify, and distribute the code for both personal and commercial purposes,
as long as the original license and copyright notice are included.
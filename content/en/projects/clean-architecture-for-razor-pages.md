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

This solution template facilitates the creation of ASP.NET Core Razor Pages applications that adhere to Clean Architecture principles. You can initiate a new project using this template by selecting the "Use this template" button on GitHub or by installing and utilizing the associated NuGet package (refer to the "Getting Started" section below for comprehensive instructions).

## Technologies

*   **Core Framework**: [ASP.NET Core 9](https://devblogs.microsoft.com/aspnet/announcing-asp-net-core-in-net-9/) and [Entity Framework Core 9](https://docs.microsoft.com/en-us/ef/core/).
*   **UI**: [Razor Pages](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-5.0&tabs=visual-studio).
*   **Frontend Styling**: Integration with [SmartAdmin - Responsive WebApp](https://wrapbootstrap.com/theme/smartadmin-responsive-webapp-WB0573SK0/) (Commercial Theme) and [jQuery EasyUI](https://www.jeasyui.com/) for UI components.
*   **Application Design**:
    *   [MediatR](https://github.com/jbogard/MediatR) for implementing the mediator pattern.
    *   [AutoMapper](https://automapper.org/) for object-to-object mapping.
    *   [FluentValidation](https://fluentvalidation.net/) for strongly-typed validation rules.
*   **Testing**: [NUnit](https://nunit.org/), [FluentAssertions](https://fluentassertions.com/), [Moq](https://github.com/moq), and [Respawn](https://github.com/jbogard/Respawn) for comprehensive testing.
*   **Deployment**: [Docker](https://www.docker.com/) for containerization support.

## Getting Started

The most straightforward way to begin is by installing the [Clean.Architecture.Solution.Template NuGet package](https://www.nuget.org/packages/Clean.Architecture.Solution.Template) and using the `dotnet new` command:

1.  Ensure you have the latest [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0) installed.
2.  Install the project template by running the command: `dotnet new --install Clean.Architecture.Solution.Template`.
3.  Create a new directory for your solution and navigate into it using the command line. The template will use this directory's name for your project.
    ```bash
    mkdir YourSolutionName
    cd YourSolutionName
    ```
4.  Create the new project by running: `dotnet new ca-sln`.
5.  Navigate to the main web project directory, typically `src/WebUI`.
    ```bash
    cd src/WebUI 
    ```
6.  Build the project to restore dependencies and compile the code: `dotnet build`.
7.  Run the application: `dotnet run`.
    Your Razor Pages application should now be running. Access it via the URL displayed in the console (usually `https://localhost:XXXX` or `http://localhost:XXXX`).

## License
This project is licensed under the MIT License, a permissive open-source license. You are free to use, modify, and distribute the code for personal or commercial purposes, provided the original license and copyright notice are included.
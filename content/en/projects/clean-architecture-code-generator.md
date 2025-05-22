---
title: 'Code Generator for Clean Architecture'
image: /uploads/illustrations/cuate/code-generator.png
date: 2025-04-04 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/CleanArchitectureCodeGenerator" >}}
{{< /brick_title >}}

A Visual Studio extension designed to help you rapidly scaffold complete Create, Read, Update, and Delete (CRUD) functionalities for projects adhering to the Clean Architecture pattern.

> ⚡️ This tool is specially designed for use with the [CleanArchitectureWithBlazorServer](https://github.com/neozhu/CleanArchitectureWithBlazorServer) template and automates the creation of application-layer code in a consistent and maintainable structure.

{{< youtube "X1b4hFLs4vo" "/uploads/youtube04.png" >}}




## What It Does

This extension dramatically speeds up backend development by automatically generating:

- Application-layer commands (e.g., `Create`, `Update`, `Delete`, `Import`, `AddEdit`).
- Validators for each command.
- Data Transfer Objects (DTOs).
- Query handlers (e.g., `GetAll`, `Export`, `Pagination`).
- Domain event handlers (e.g., `Created`, `Updated`, `Deleted`).
- All generated files are organized within a consistent folder and namespace structure, promoting maintainability.

## How to Use

1.  Right-click on a target folder within your project in Visual Studio's Solution Explorer.
2.  From the context menu, select "Add New Feature (Clean Architecture)" or use the shortcut **`Shift+F2`**.
3.  In the prompt that appears, enter the name of your entity (e.g., `Product`).
4.  The relevant files are then automatically generated based on the specified entity and domain context.

## License
This project is licensed under the MIT License, a permissive open-source license. You are free to use, modify, and distribute the code for personal or commercial purposes, provided the original license and copyright notice are included.
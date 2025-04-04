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

A Visual Studio extension that helps you quickly scaffold complete CRUD features for projects following the Clean Architecture pattern.

> ⚡️ This tool is specially designed for use with the [CleanArchitectureWithBlazorServer](https://github.com/neozhu/CleanArchitectureWithBlazorServer) template and automates the creation of application-layer code in a consistent and maintainable structure.

{{< youtube "X1b4hFLs4vo" "/uploads/youtube04.png" >}}




## What It Does

This extension dramatically speeds up backend development by automatically generating:

- Application-layer commands (`Create`, `Update`, `Delete`, `Import`, `AddEdit`)
- Validators for each command
- DTOs
- Query handlers (`GetAll`, `Export`, `Pagination`)
- Domain event handlers (`Created`, `Updated`, `Deleted`)
- All files are placed under a consistent folder and namespace structure


 ## How to Use

1. Right-click on a folder in Solution Explorer  
2. Choose "Add New Feature (Clean Architecture)" or press **`Shift+F2`**
3. Enter the Entity Name (e.g., `Product`)
4. Files are automatically created based on the selected domain

## License
This project is licensed under the MIT License, which is a permissive open-source license.
You are free to use, modify, and distribute the code for both personal and commercial purposes,
as long as the original license and copyright notice are included.
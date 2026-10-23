---
title: 'Code Generator for Clean Architecture'
image: /uploads/illustrations/cuate/code-generator.png
date: 2025-04-04 00:00:00
tags: ["GitHub", "Clean Architecture", "Visual Studio", "代码生成"]
description: "面向 CleanArchitectureWithBlazorServer 模板的 Visual Studio 扩展，可按实体名称生成 CRUD 命令、验证器、DTO、查询及领域事件处理器，并保持一致的文件夹和命名空间结构。"
summary: "在 Visual Studio 中右键选择新增功能或按 Shift+F2，输入实体名称即可生成对应应用层文件。工具将重复的 CRUD 编码整理为符合模板约定的结构。"
seo:
  title: "Clean Architecture 代码生成器 | BlazorStudio"
  description: "查看 Clean Architecture 代码生成器如何在 Visual Studio 中生成 CRUD 命令、验证器、DTO、查询和领域事件处理器，了解适用的 Blazor Server 模板与使用步骤。"
slug: "code-generator-for-clean-architecture"
---

{{< brick_title >}}
{{< button "前往 GitHub" "https://github.com/neozhu/CleanArchitectureCodeGenerator" >}}
{{< /brick_title >}}

一个 Visual Studio 扩展，帮助你快速为遵循 Clean Architecture 模式的项目生成完整的 CRUD 功能代码。

> ⚡️ 该工具是专门为 [CleanArchitectureWithBlazorServer](https://github.com/neozhu/CleanArchitectureWithBlazorServer) 模板量身定制的，能够自动生成一致、易维护的应用层代码结构。


{{< youtube "X1b4hFLs4vo" "/uploads/youtube04.png" >}}




## 功能简介

该扩展大大加快了后端开发效率，自动生成以下内容：

- 应用层命令（`Create`、`Update`、`Delete`、`Import`、`AddEdit`）
- 每个命令的验证器（Validator）
- DTO 数据传输对象
- 查询处理器（`GetAll`、`Export`、`Pagination`）
- 域事件处理器（`Created`、`Updated`、`Deleted`）
- 所有文件均放置在一致的文件夹和命名空间结构下，便于维护和扩展

## 使用方法

1. 在 Visual Studio 的解决方案资源管理器中右键点击某个文件夹  
2. 选择 “Add New Feature (Clean Architecture)” 或按快捷键 **`Shift+F2`**
3. 输入实体名称（例如 `Product`）
4. 系统将根据你的选择自动生成相关代码文件

## 许可证

本项目采用MIT 开源许可证，这是一种宽松的开源协议。  
你可以自由地使用、修改和分发本项目代码，用于个人或商业用途，  
只需保留原始的许可证和版权声明即可。
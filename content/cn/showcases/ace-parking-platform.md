---
title: Ace Parking 停车管理平台
image: /uploads/photos/ace-parking-platform.png
date: 2025-10-26 00:00:00
tags:
  - 停车
  - Blazor
  - 多租户
  - CleanArchitecture
description: "Ace Parking 是基于 .NET 9 与 Blazor Server 的多租户停车管理平台，集中管理车场、车位、会员、车辆及计费规则，结合 SignalR 实时更新、后台任务和审计日志支持日常运营。"
summary: "从车场和车位分组到会员租赁及车辆绑定，平台以分层架构组织停车业务。CQRS、查询缓存、多数据库与文档导出能力为运营管理和后续扩展提供基础。"
seo:
  title: "Ace Parking 多租户停车管理平台 | BlazorStudio"
  description: "查看 Ace Parking 的停车场、会员租赁、车辆与计费管理功能，了解 .NET 9、Blazor Server、Clean Architecture、SignalR 和 Hangfire 组成的多租户架构。"
slug: "ace-parking-停车管理平台"
---

基于 .NET 9 与 Blazor Server 构建的 Clean Architecture、CQRS 驱动智能停车管理平台。

## 概述

Ace Parking 是一个支持多租户的停车场运营与管理系统。它提供车场、闸机、区域、车位分组、会员、车辆、计费规则、节假日、审计日志与系统日志等全套管理功能，并具备实时更新、后台任务、国际化与完善的可观测性能力。

## 核心特性

- 多租户领域模型（租户、租户用户）
- 业务实体：车场、区域、闸机、车位分组、会员、车辆、计费、节假日
- 会员与租赁管理（车辆绑定与分配）
- 基于 SignalR 的实时界面更新
- Hangfire 后台任务（`/jobs` 仪表盘）
- Serilog 强韧日志（文件 / 控制台 + 可选 DB / Seq 输出）
- MediatR + FluentValidation 构建 CQRS 与验证管道
- FusionCache 高性能缓存
- 资源文件驱动的本地化（Cookie 方式选择语言）
- PDF 生成（QuestPDF）与 Excel 导出（ClosedXML）
- 图片处理（ImageSharp）
- 基于 OpenSpec 的 AI 规范驱动开发流程（可审查提案、差异与任务协同）

## 架构说明

项目遵循 Clean Architecture 与垂直功能切片理念：

- `Domain` — 领域实体、值对象、领域事件、枚举
- `Application` — CQRS 处理器、验证器、管道行为、功能服务
- `Infrastructure` — EF Core、身份认证、持久化、集成、日志
- `Server.UI` — Blazor Server 前端、依赖注入、Middleware、终结点

跨领域模式包括：

- 基于 MediatR 的 CQRS 与验证/性能/缓存/失效管道行为
- EF Core 多数据库支持：SQL Server、PostgreSQL、SQLite
- ASP.NET Core Identity + 数据库存储 Data Protection
- Serilog 日志富化（用户信息、IP、User-Agent）与滚动文件

## 技术栈

- .NET 9 / ASP.NET Core Blazor Server (C#)
- Entity Framework Core 9（SQL Server / PostgreSQL / SQLite）
- MediatR、FluentValidation、Ardalis.Specification
- FusionCache、AutoMapper
- Serilog（文件、控制台、MSSQL、PostgreSQL、SQLite、Seq）
- Hangfire（默认内存模式）
- SignalR、MudBlazor UI
- QuestPDF、ImageSharp
- MailKit/MimeKit（SMTP）、Minio SDK（对象存储）

## 演示

- 在线演示：**[aceparking.blazorserver.com](https://aceparking.blazorserver.com/)**

[![查看 Ace Parking 演示](/uploads/photos/aceparking/01.png)](/uploads/photos/aceparking/01.png)

{{< gallery dir="/uploads/gallery/aceparking" >}}

> 让停车运维更智能：多租户、实时、高扩展与规范驱动的现代化平台。

---

{{< ctaform >}}

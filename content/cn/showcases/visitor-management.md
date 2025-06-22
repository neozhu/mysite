---
title: 访客管理平台
image: /uploads/photos/visitor-management.png
date: 2019-08-04 00:00:00
tags:
  - Visitor
  - Workflow
---

访客管理工作流系统是一款基于 Blazor Server 技术构建的企业内部审批平台。它旨在简化并规范访客接待、出入许可审批、物品出门授权、固定资产通行以及施工安全许可等关键流程的管理，从而显著提高企业在现场管理方面的效率与合规性水平。

本项目基于成熟的开源应用框架 [CleanArchitectureWithBlazorServer](https://github.com/neozhu/CleanArchitectureWithBlazorServer) 快速开发搭建，确保了系统拥有良好的代码可维护性、功能可扩展性，并严格遵循清晰的架构分层设计原则，非常适用于现代企业级应用的开发需求。

## 核心业务流程与表单

- **承包商工作许可申请 (Permit To Work, PTW)**：规范承包商在厂区内作业的安全许可流程。
- **访客来访申请**：管理外部访客的预约、审批与接待流程。
- **物品电子出门条申请 (E-Gate Pass)**：电子化管理公司物品（包括员工个人物品）的出门放行。
- **固定资产通行证申请**：针对需在厂区内外移动的固定资产，进行通行授权管理。
- **门禁权限变更申请**：员工或承包商的门禁卡权限开通、变更或取消审批。
- **钥匙/锁具领用与归还申请**：管理重要区域钥匙或锁具的领用、分发及归还流程。
- **视频监控查看/设备安装申请**：规范视频监控录像的回看、访问权限以及新增监控设备的安装审批。
- **员工工作时间外出申请**：管理员工在工作时段内因公或因私离厂的申请与审批。



## 技术栈

- **核心框架**：.NET 9
- **前端技术**：Blazor Server
- **ORM**：Entity Framework Core
- **UI 组件库**：MudBlazor
- **架构模式**：Clean Architecture
- **数据库**：SQL Server
- **容器化**：Docker (可选部署方案)
- **权限管理**：基于角色的访问控制 (RBAC)

## 在线演示环境

- **演示站点地址**：[hse.blazorserver.com](https://hse.blazorserver.com/)

[![访客管理工作流系统截图](/uploads/photos/workflow/01.png)](/uploads/photos/workflow/01.png)

{{< gallery dir="/uploads/gallery/workflow" >}}

> 我们致力于通过此高效、安全且可全面审计的审批系统，助力企业实现更高水平的智能化访客接待与现场安全管理。

---

{{< ctaform >}}
---
title: 访客管理平台
image: /uploads/photos/visitor-management.png
tags:
  - Visitor
  - Workflow
---

访客管理工作流系统是一个基于 Blazor Server 的企业内部审批平台，旨在简化访客接待、出入许可、物品出门、资产通行及施工安全等流程管理，提高企业现场管理效率与合规性。

本项目基于开源框架 [CleanArchitectureWithBlazorServer](https://github.com/neozhu/CleanArchitectureWithBlazorServer) 快速构建，具备良好的可维护性、可扩展性，并遵循清晰的架构分层原则，适用于企业级应用开发。


## 表单工作流

- 承包商工作申请单（Permit To Work, PTW）  
- 访客申请单（Visitor Request Form）  
- 物品电子出门单（E-Gate Pass Request Form）  
- 资产通行证申请单（Request for Permanent Property Form）  
- 门禁权限申请单（Door Access Request Form）  
- 钥匙/锁申请和发放单（Key/Lock Request & Issuance Form）  
- 视频回看/访问和安装申请单（Video Retrieval/Access & Installation Request Form）  
- 工作时间员工外出单（Working-Time Leave Company Pass）  



## 技术栈

- `.NET 9`  
- `Blazor Server`  
- `Entity Framework Core`  
- `MudBlazor`  
- `Clean Architecture`  
- `SQL Server`  
- `Docker（可选部署）`  
- `基于角色的权限控制`




## 在线演示

- 演示地址：[hse.blazorserver.com](https://hse.blazorserver.com/)



[![View Digital Product Passport Demo](/uploads/photos/workflow/01.png)](/uploads/photos/workflow/01.png)

{{< gallery dir="/uploads/gallery/workflow" >}}

> 通过此高效、安全、可审计的审批系统，助力企业实现智能化的访客与安全管理。

---

{{< ctaform >}}
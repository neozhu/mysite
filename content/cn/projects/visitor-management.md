---
title: '访客管理系统'
image: /uploads/illustrations/cuate/visitor-management-showcase.png
date: 2026-10-31 00:00:00
tags: ["GitHub", "访客管理", "门禁通行", "Blazor Server", "React", ".NET"]
description: "基于 .NET 10 (Blazor Server) 与 React 19 构建的开源企业级访客管理系统，提供多场景移动端预约登记、业务与区域并行审批、人员与车辆主档案复用、动态扩展表单以及门岗逐人进出厂核验。"
summary: "用移动端在线预约、业务与区域双线审批、可复用人员车辆档案及门岗实时进出厂工作台替代传统纸质登记本，支持普通访客、物流车辆与施工人员的全周期来访管理。"
seo:
  title: "开源企业访客管理系统 VMS (.NET 10 & React) | BlazorStudio"
  description: "了解基于 .NET 10 Blazor Server 与 React 19 的开源访客管理系统：涵盖移动端预登记、业务与区域多级审批、人员与车辆档案管理、门岗进出厂核验及在线演示。"
slug: "访客管理系统"
---

{{< brick_title >}}
{{< button "前往 GitHub" "https://github.com/neozhu/visitor-training-management" >}}
{{< button "管理后台演示" "https://visitor-training.blazorserver.com/" >}}
{{< button "访客移动端演示" "https://visitor-training-client.blazorserver.com/" >}}
{{< /brick_title >}}

**从到访前的在线预约，到门岗放行与离厂归档的数字化访客管理闭环。**

本开源**访客管理系统（Visitor Management System, VMS）**面向现代制造工厂、研发园区、仓储物流中心及企业办公楼宇，旨在用一套协同、可追溯的数字化流程取代低效的门卫纸质登记本与零散的线下审批。系统将**移动端提前预约、被访人与受访区域协同审批、来访人员与车辆主档案、入厂前准入准备以及门岗进出厂核验**整合在同一平台中。

系统采用前后端分离与双端协同架构：外部来访人员通过轻量级 **React 19 移动端网页门户**自助完成预约登记与状态查询；企业内部前台、被访员工、区域负责人与门岗安保则通过基于 **CleanBlazorServerPro（.NET 10 + Blazor Server + MudBlazor）** 的管理后台高效协同。

![企业访客管理系统：连接移动端在线预约、业务与区域审批以及门岗通行核验的完整流程](/uploads/photos/visitor-training/visitsafe-cover.png)

---

## 为什么需要新一代数字化访客管理系统？

传统的门岗手工登记或简单的电子登记表，往往只能记录“有人到了门口”，却无法解决企业现场管理的核心痛点：不同来访人群（商务访客、货运车辆、外部施工队）需要采集的信息不同；受控区域（如生产车间、实验室、仓库、机房）需要区域负责人独立把关；多人多车组团来访时，门岗难以快速核对每个人、每辆车的准入资格与实际离厂状态。

| 核心业务诉求 | 访客管理系统的设计实现 |
| --- | --- |
| **一张申请统管全要素** | 在同一张来访申请单（`VisitApplication`）中完整关联预约日期与时段、被访人、主访客与随行人员（`Participant`）、同行车辆（`Vehicle`）、受访区域（`VisitArea`）及动态业务扩展字段 |
| **多场景分类预约与动态表单** | 预置**普通访客、物流车辆、施工人员**三类标准场景，支持管理员灵活扩展来访类型（`VisitType`）、绑定动态字段组模板（`FieldGroupDefinition`）并配置车辆录入规则（必填/选填/隐藏） |
| **业务与区域双线并行审批** | 自动生成**业务审批任务**（由被访人或业务部门确认来访事由）与**区域审批任务**（由所选受访区域的责任人分别确认准入权限），审批责任清晰独立、全程留痕 |
| **人员与车辆主档案复用** | 按“姓名 + 手机号”自动归并维护来访人员主档案，按车牌号维护来访车辆主档案；常客或高频物流车辆再次预约时可自动关联历史档案，同时每张申请独立保存当次提交快照 |
| **门岗按人按车精准放行** | 门岗工作台支持按姓名、手机号、证件号、车牌或申请单号秒级检索预约单，逐人核对准入条件并分别记录每位随行人员与每辆车的实际进出厂时间及操作员 |
| **可选的入厂前准入准备** | 针对有安全或保密要求的工业园区，可在审批流中灵活挂载区域安全须知或入厂前准入准备任务，在门岗放行前自动校验就绪状态 |

---

## 全生命周期状态流转架构

系统通过严谨的状态机（`Draft` → `Submitted` → `Approved` / `Rejected` → `Active` → `Completed`）驱动每一次来访接待：

```
外部来访人员 / 物流司机 / 施工团队（或由企业内部授权人员代为预约）
  │
  ├─ 1. 选择来访类型（普通访客 / 物流车辆 / 施工人员）
  ├─ 2. 阅读确认《来访须知》，提交三步引导式预约单（状态：`Submitted`）
  │
  ├──────────────────────────────────────┬──────────────────────────────────────┐
  ▼                                      ▼                                      ▼
[业务审批任务 Business Approval]  [区域审批任务 Area Approval (1..N)]   [入厂前准入准备（可选配置）]
被访人 / 业务负责人确认接待事由     各受访区域负责人分别确认区域准入       确认区域安全须知及配套准入要求
  │                                      │                                      │
  └──────────────────┬───────────────────┘                                      │
                     ▼                                                          │
          整单审批通过（`Approved`）                                  个人准入就绪（`Entry Ready`）
       （任一任务驳回则整单 `Rejected`）                                         │
                     │                                                          │
                     └────────────────────────────┬─────────────────────────────┘
                                                  ▼
                              门岗进出厂登记工作台（Entry / Exit Registration）
                           [校验预约日期、整单审批状态与个人身份及准入条件]
                                                  │
                                                  ▼
                         首位随行人员确认进厂 -> 申请切换为在厂状态（`Active`）
                                                  │
                                                  ▼
                    所有已进厂人员及车辆全部确认离厂 -> 申请归档完结（`Completed`）
```

---

## 访客移动端门户（`React 19 + Ant Design Mobile`）

面向外部访客的移动端门户（[visitor-training-client.blazorserver.com](https://visitor-training-client.blazorserver.com/)）采用 **React 19 + TypeScript + Vite + Ant Design Mobile + Tailwind CSS** 构建，支持手机浏览器即开即用与中英文双语无缝切换。

<style>
.vt-mobile-grid {display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; max-width: 44rem; margin: 2rem auto;}
.vt-mobile-grid figure {margin: 0;}
.vt-mobile-grid img {width: 100%; height: auto; border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 0.75rem; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);}
.vt-mobile-grid figcaption {margin-top: 0.6rem; font-size: 0.85rem; line-height: 1.6; opacity: 0.85; text-align: center;}
@media (max-width: 640px) {.vt-mobile-grid {grid-template-columns: 1fr; max-width: 22rem;}}
</style>

### 1. 场景化预约入口与中英文双语切换

移动端首页按来访场景直观提供**普通访客**（商务拜访与参观交流）、**物流车辆**（送货、提货与厂内运输）、**施工人员**（设备维修、安装与改造作业）入口，底部导航支持随时查询本人来访申请记录。

<div class="vt-mobile-grid">
  <figure>
    <a href="/uploads/photos/visitor-training/client-01-home-cn.png" target="_blank" rel="noopener"><img src="/uploads/photos/visitor-training/client-01-home-cn.png" loading="lazy" alt="访客管理系统移动端中文首页"></a>
    <figcaption>移动端中文首页：按普通访客、物流车辆与施工人员分类引导预约</figcaption>
  </figure>
  <figure>
    <a href="/uploads/photos/visitor-training/client-02-home-en.png" target="_blank" rel="noopener"><img src="/uploads/photos/visitor-training/client-02-home-en.png" loading="lazy" alt="访客管理系统移动端英文首页"></a>
    <figcaption>移动端英文界面：一键切换中英文，满足跨国企业与外籍访客需求</figcaption>
  </figure>
</div>

### 2. 前置来访须知与三步引导式预约

访客点击对应入口后，首先阅读并勾选同意《来访须知》，随后进入**“① 登记信息 → ② 访问区域 → ③ 确认提交”**三步引导表单，便捷录入被访人、预约日期时段、来访单位、随行人员名单、车牌信息及目的区域。

<div class="vt-mobile-grid">
  <figure>
    <a href="/uploads/photos/visitor-training/client-04-visitor-notice-cn.png" target="_blank" rel="noopener"><img src="/uploads/photos/visitor-training/client-04-visitor-notice-cn.png" loading="lazy" alt="来访须知确认弹窗"></a>
    <figcaption>前置来访须知：明确园区管理要求、证件查验与注意事项</figcaption>
  </figure>
  <figure>
    <a href="/uploads/photos/visitor-training/client-05-visitor-registration-cn.png" target="_blank" rel="noopener"><img src="/uploads/photos/visitor-training/client-05-visitor-registration-cn.png" loading="lazy" alt="三步引导式访客预约表单"></a>
    <figcaption>三步引导式预约：支持被访人匹配、预约时段选择与多人多车同行填报</figcaption>
  </figure>
</div>

---

## 企业后台管理工作台（`CleanBlazorServerPro`）

企业内部管理平台（[visitor-training.blazorserver.com](https://visitor-training.blazorserver.com/)）基于 **CleanBlazorServerPro（.NET 10 + Blazor Server + MudBlazor）** 构建，围绕日常接待、审批、门岗放行与档案管理提供完整的后台工作区：

### 1. 实时来访运营看板（Operations Dashboard）

支持按受访区域和时间周期（今日、近 7 天、近 30 天、近 90 天）实时汇总**预约来访总数、今日预计到访、当前在厂人数、待处理审批数与当前在厂车辆数**，并通过可视化图表展示来访与入厂趋势、审批状态分布、来访类型占比及热门受访区域排行。

[![访客管理系统实时运营看板](/uploads/photos/visitor-training/admin-01-dashboard.png)](/uploads/photos/visitor-training/admin-01-dashboard.png)

### 2. 来访申请全周期管理（Visit Applications）

集中展示并管理所有来访预约单（如 `VA-21` 至 `VA-27`），一屏呈现来访类型、申请状态、预约日期时段、被访人、随行人数、同行车牌、受访区域、**业务与区域审批进度**以及**实际进出厂人数统计**，同时支持内部员工代客创建预约申请。

[![来访申请管理工作区](/uploads/photos/visitor-training/admin-02-visit-applications.png)](/uploads/photos/visitor-training/admin-02-visit-applications.png)

### 3. 业务与区域双线审批任务（Visit Approval Tasks）

将被访人业务审批（`Business approval`）与各受访区域准入审批（`Area approval`）拆分为独立任务队列，按责任人展示待办事项并分别记录审批结果、处理时间与审批意见。

[![来访审批任务工作区](/uploads/photos/visitor-training/admin-03-approval-tasks.png)](/uploads/photos/visitor-training/admin-03-approval-tasks.png)

### 4. 门岗进出厂登记工作台（Entry / Exit Registration）

专为门岗安保打造的快速放行与离厂登记界面，顶部实时显示今日预约数、在厂人数、待进厂人数与在厂车辆数。门岗人员可通过姓名、手机号、证件号、车牌或申请单号快速检索预约单，逐人核对准入条件并记录实际进厂与离厂时间。

[![门岗进出厂登记工作台](/uploads/photos/visitor-training/admin-04-gate-reception.png)](/uploads/photos/visitor-training/admin-04-gate-reception.png)

### 5. 来访人员与车辆主档案库（Participants & Vehicles）

自动归集并维护外部**来访人员主档案（Participants）**与**来访车辆主档案（Vehicles）**，支持按姓名、手机号、所属单位或车牌号快速检索历史来访次数与关联申请单。

[![来访人员主档案管理](/uploads/photos/visitor-training/admin-05-participants.png)](/uploads/photos/visitor-training/admin-05-participants.png)

[![来访车辆主档案管理](/uploads/photos/visitor-training/admin-06-vehicles.png)](/uploads/photos/visitor-training/admin-06-vehicles.png)

---

## 技术栈与容器化部署

| 系统层次 | 技术选型与容器产物 |
| --- | --- |
| **访客移动端门户** | React 19、TypeScript、Vite、Ant Design Mobile、Tailwind CSS（镜像：`ghcr.io/neozhu/visit-training-management-web:latest`） |
| **管理后台与服务端** | .NET 10、ASP.NET Core、Blazor Server、MudBlazor、Clean Architecture（镜像：`ghcr.io/neozhu/visit-training-management-backend:latest`） |
| **业务接口与领域层** | ASP.NET Minimal APIs（支持强 `ETag` / `If-Match` 乐观并发控制）、CQRS、AutoMapper、FluentValidation、Entity Framework Core |
| **数据库与权限安全** | SQL Server 2025、基于角色的访问控制（RBAC）、操作审计日志、Docker Compose（`docker-compose.ghcr.yml`） |

### 使用 Docker Compose 一键启动

项目前后端分别打包为独立的 GHCR 容器镜像，前端容器支持在启动时通过环境变量 `BACKEND_BASE_URL` 动态注入 `/runtime-config.js`，无需重新构建即可对接任意后端地址：

```bash
# 一键启动 SQL Server 2025、.NET 10 管理后台 (8080 端口) 与 React 访客移动端 (5173 端口)
docker compose -f docker-compose.ghcr.yml up -d
```

---

## 在线演示与开源仓库

- **管理后台在线演示：** [visitor-training.blazorserver.com](https://visitor-training.blazorserver.com/)
- **访客移动端在线演示：** [visitor-training-client.blazorserver.com](https://visitor-training-client.blazorserver.com/)
- **后端与管理平台源码：** [github.com/neozhu/visitor-training-management](https://github.com/neozhu/visitor-training-management)
- **移动端前端源码：** [github.com/neozhu/visitor-traning-client](https://github.com/neozhu/visitor-traning-client)

## 授权许可

本项目基于开源许可证发布。你可以自由地使用、修改和分发该代码，详情请参阅 GitHub 仓库中的许可声明。

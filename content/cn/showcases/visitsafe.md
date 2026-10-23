---
title: "VisitSafe：访客登记、安全培训与入厂管理的一体化平台"
description: "VisitSafe 将移动端来访登记、业务与区域审批、安全培训及逐人进出厂记录连接起来，为工厂、园区和仓储场景提供清晰、可追溯的访客管理流程。"
summary: "从手机预约到安全培训，再到逐人入厂与离场留痕，VisitSafe 以 React 访客端与 Blazor 管理端连接访客、接待、审批、安全和门岗工作。"
seo:
  title: "VisitSafe 访客管理与安全培训平台 | BlazorStudio"
  description: "了解 VisitSafe 如何连接访客预约、企业审批、安全培训与逐人入厂管理。查看 React 访客端、Blazor 管理平台、真实界面截图、完整流程图及项目源码入口。"
slug: visitsafe-visitor-safety-training
date: 2026-10-23T00:00:00+08:00
image: /uploads/showcases/visitsafe/cover.webp
tags: ["Visitor Management", "Safety Training", "React", "Blazor", "Workflow"]
---

**安全，从抵达厂门之前开始。**

一趟工厂来访，涉及的不只是前台登记。被访人需要确认来访目的，区域负责人需要审核访问范围，安全人员需要落实培训，门岗还需要判断每个人是否具备入厂条件。

VisitSafe 围绕这些彼此关联的工作，将**访客预约、业务与区域审批、安全培训、考试结果以及进出厂记录**组织成同一条业务流程。访客通过手机准备来访，内部人员在管理平台接续处理，让每一步都有明确的责任与下一步。

## 在线体验与项目入口

| 入口 | 地址与内容 |
| --- | --- |
| 访客与学习前端 | [visit-safe.blazorserver.com](https://visit-safe.blazorserver.com/)：体验移动端登记入口、培训任务查询与中英文界面 |
| 后端管理平台 | [visit-training.blazorserver.com](https://visit-training.blazorserver.com/)：查看运营看板，以及访客申请、审批、课程和培训记录等工作区 |
| 前端源码仓库 | [neozhu/visit-traning-client](https://github.com/neozhu/visit-traning-client) |
| 后端源码仓库 | [neozhu/visit-training-management](https://github.com/neozhu/visit-training-management) |

## 把分散的接待工作，连接成完整的来访流程

当来访信息、审批结果与培训记录分别保存在表格、消息和纸质记录中，接待与门岗需要反复核对：这次访问经过谁同意？这个人完成了哪些课程？上次的培训是否仍然有效？同行人员是否都可以入厂？

VisitSafe 的设计从这些具体问题出发：

- **一次申请承载完整来访信息。** 关联预约日期、访问区域、来访人员、车辆与业务信息，减少跨环节重复整理。
- **审批责任分别记录。** 业务审批与各访问区域的审批各自保留处理结果，便于确认责任与追溯决定。
- **培训要求跟随真实访问场景。** 根据登记类型与访问区域匹配课程，按人员记录学习进度和成绩有效期。
- **入厂判断落实到每个人。** 同一申请中，已经满足条件的人可以办理入厂，无需等待仍在学习的同行者。
- **离场记录与申请保持关联。** 保留进出厂时间、操作人员和当次来访资料，让后续查询有据可查。

## 从手机登记到离场留痕

### 1. 选择来访类型，填写本次申请

普通访客、物流车辆与施工人员使用适合自身场景的登记入口。登记类型决定适用表单、来访须知及车辆要求，访客按步骤填写预约、被访人、到访事由、人员和访问区域等信息。

除访客自行登记外，产品流程也支持授权员工代为创建申请。人员与车辆资料可以复用，而每次申请保留当次使用的信息，便于回看历史来访背景。

### 2. 审批与培训并行推进

申请提交后，业务审核与所选区域的审核分别进入对应责任人的任务，同时为来访人员匹配所需课程。

**等待审批的时间也可以用来完成培训。** 两条工作线并行推进，避免把“先审批、再通知学习”变成不必要的串行等待。培训也可以提前分配，不要求先创建来访申请。

### 3. 完成相关课程，保留成绩有效期

课程可以包含安全视频、辅助 PDF 资料，以及单选或多选考试。学习进度、考试尝试、成绩与有效期关联到具体人员和课程。

同一个人再次来访时，仍在有效期内的合格课程成绩可以复用；复用保留原有到期日，不会因为新建申请而重新延长。已过期或新增的必修课程则需要重新完成。

### 4. 按人核验入厂条件

门岗判断的是每个人的实际准备情况。流程设计综合检查本次申请的业务与区域审批、须知确认、预约日期，以及该人员当前必修培训是否完成且有效。

首次入厂须在预约日期当天，按工厂北京时间判断；预约时段用于登记与展示。同一申请下，每个人分别确认进厂与出厂，记录实际操作时间和操作人员。

### 5. 完成离场与记录归档

人员离场、已入厂车辆的离场及申请结束遵循各自的业务条件。来访资料快照、审批结果、考试记录与进出厂操作共同保留，为后续查询与问题追溯提供上下文。

## 真实界面：访客手机端与管理看板

以下截图采集自在线演示系统。移动端分别展示业务入口和本人培训任务查询；查询需要姓名与手机号同时匹配，查询本身不代表身份认证。

<style>
.vs-mobile-screens {display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; max-width: 46rem; margin: 2rem auto;}
.vs-mobile-screens figure {margin: 0;}
.vs-mobile-screens img {width: 100%; height: auto; border: 1px solid var(--borderLight); border-radius: .75rem;}
.vs-figure img {width: 100%; height: auto;}
.vs-figure figcaption, .vs-mobile-screens figcaption {margin-top: .65rem; font-size: .875rem; line-height: 1.7;}
@media (max-width: 600px) {.vs-mobile-screens {grid-template-columns: 1fr; max-width: 24rem;}}
</style>

<div class="vs-mobile-screens">
  <figure>
    <a href="/uploads/showcases/visitsafe/visitor-portal-cn.jpg" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/visitor-portal-cn.jpg" width="390" height="844" loading="lazy" alt="VisitSafe 中文移动端首页，包含学习培训、普通访客、物流车辆和施工人员入口"></a>
    <figcaption>访客端按办理事项组织入口，支持中英文切换与继续学习。</figcaption>
  </figure>
  <figure>
    <a href="/uploads/showcases/visitsafe/training-lookup-cn.jpg" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/training-lookup-cn.jpg" width="390" height="844" loading="lazy" alt="VisitSafe 中文安全培训查询页，通过登记姓名和手机号码查找已分配的课程"></a>
    <figcaption>通过登记姓名与手机号查找本人已分配的培训任务，接续未完成的学习。</figcaption>
  </figure>
</div>

管理端把预约来访、在厂人员、待处理审批、车辆及培训有效情况汇总到运营看板，并提供访问区域与时间范围筛选。管理人员可以从同一个工作入口了解来访准备与现场状态。

<figure class="vs-figure">
  <a href="/uploads/showcases/visitsafe/management-dashboard.jpg" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/management-dashboard.jpg" width="1430" height="993" loading="lazy" alt="VisitSafe 管理平台运营看板，展示预约来访、在厂人员、审批概览、访问趋势及培训有效情况"></a>
  <figcaption>在线管理看板实拍。页面中的人物、审批、成绩和运营数值均为虚构演示数据。</figcaption>
</figure>

## 一图理解 VisitSafe 的来访流程

中文长图将登记、任务生成、培训考试、入厂核验和离场记录串联起来。图中的题数、分数及具体审批角色为说明示例；实际规则由登记类型、访问区域和课程配置决定。

<figure class="vs-figure">
  <a href="/uploads/showcases/visitsafe/workflow-cn.png" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/workflow-cn.png" width="724" height="2172" loading="lazy" alt="VisitSafe 中文访客流程总览：选择登记类型、填写申请、生成审批和培训任务、学习考试、逐人核验入厂以及离场留痕"></a>
  <figcaption>VisitSafe 中文流程示意图。点击图片可查看原图。</figcaption>
</figure>

<details>
  <summary>查看英文流程全景图：从预约申请到进出厂与记录查询</summary>
  <div><div>
    <figure class="vs-figure">
      <a href="/uploads/showcases/visitsafe/workflow-en.png" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/workflow-en.png" width="1536" height="1024" loading="lazy" alt="VisitSafe 英文流程图，说明审批与培训并行、个人入厂条件、进出厂确认及历史记录查询"></a>
      <figcaption>英文流程全景图；培训题数、合格分数和审批角色为示意，实际以系统配置为准。</figcaption>
    </figure>
  </div></div>
</details>

## 连接不同角色，保留一致的业务上下文

| 使用角色 | 关注的问题 | 对应工作 |
| --- | --- | --- |
| 访客、承包商与物流司机 | 如何预约、需要学什么、是否已完成 | 手机登记、任务查询、视频学习、考试与结果查看 |
| 接待与运营人员 | 谁将到访、去哪些区域、有哪些随行人员和车辆 | 申请维护、代登记、人员车辆资料与预约信息管理 |
| 业务与区域审批人 | 来访目的和访问范围是否合适 | 按职责处理审核任务，分别记录审批结果 |
| 安全管理人员 | 课程如何匹配、培训是否仍有效 | 课程、题库、有效期、培训分配与记录管理 |
| 门岗人员 | 当前这个人是否满足入厂要求、何时离场 | 逐人核验、进出厂操作与时间留痕 |

## 技术架构与交付方式

VisitSafe 将面向外部人员的移动体验与面向内部管理人员的工作台分开，通过 API 共享同一套业务规则与数据。

| 层次 | 技术与职责 |
| --- | --- |
| 访客与学习前端 | React、TypeScript、Vite、Ant Design Mobile、Tailwind CSS，围绕手机浏览器设计登记与学习体验 |
| 企业管理端 | Blazor 与 CleanBlazorServerPro，承载业务管理、用户角色、权限与操作日志等工作 |
| 业务接口 | ASP.NET Minimal APIs，连接移动前端与管理端的业务能力 |
| 数据与部署 | SQL Server、Docker Compose 与 GHCR 镜像，支持前端、后端和数据库的组合部署 |

产品仍在持续迭代。本文结合项目文档与当前在线演示介绍产品设计，具体已开放功能及集成范围以实际部署版本和项目文档为准。封面为概念插画，界面部分为真实浏览器截图。

## 从一个清晰的来访场景开始

工厂接待、承包商进场、物流车辆来访与园区安全培训，都可以从“谁要来、去哪里、谁负责、需要完成哪些准备”这几个问题出发梳理流程。

VisitSafe 的价值在于让这些问题关联到同一次来访：访客知道下一步该做什么，责任人知道需要处理什么，门岗有依据地确认进出厂，管理人员能够回看完整记录。

**[体验访客与学习门户](https://visit-safe.blazorserver.com/) · [查看管理平台](https://visit-training.blazorserver.com/) · [前端源码](https://github.com/neozhu/visit-traning-client) · [后端源码](https://github.com/neozhu/visit-training-management)**

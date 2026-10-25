---
title: "VisitorTraining：企业访客合规管理平台"
description: "VisitorTraining 将访客登记、业务与区域审批、合规培训、资质有效期及逐人进出记录连接起来，帮助企业落实访客管理要求，保留可追溯的来访记录。"
summary: "从来访申请、访问授权与合规培训，到逐人入场核验和离场归档，VisitorTraining 通过微信小程序访客端与 Blazor 管理端连接企业访客合规管理的各个环节。"
seo:
  title: "VisitorTraining 企业访客合规管理平台 | BlazorStudio"
  description: "了解 VisitorTraining 如何连接访客预约、访问授权、合规培训、资质有效期和逐人入场核验，以完整记录支持企业访客合规管理。查看产品界面、流程与项目源码。"
slug: visitor-training-enterprise-visitor-compliance
aliases: ["/showcases/visitsafe-visitor-safety-training/"]
date: 2026-10-23T00:00:00+08:00
image: /uploads/showcases/visitsafe/cover.webp
tags: ["Visitor Management", "Compliance Training", "WeChat Mini Program", "Blazor", "Workflow"]
---

**访客合规管理，从来访之前开始。**

一次企业来访，需要明确来访目的、访问权限、人员资质和入场条件。被访人确认业务事由，区域负责人审核访问范围，合规与培训管理人员落实必修要求，门岗逐人核验是否具备入场资格，各环节的处理记录也需要保留。

VisitorTraining 围绕企业访客合规管理，将**访客预约、业务与区域审批、合规培训、考核结果、资质有效期以及进出记录**组织成同一条业务流程。面向国内使用场景，访客通过微信小程序完成来访登记、任务查询、课程学习与考核，内部人员在管理平台处理授权、培训和入场事项，按配置落实访客管理要求，并保留后续合规检查所需的依据。

## 在线体验与项目入口

| 入口 | 地址与内容 |
| --- | --- |
| 访客客户端网页演示 | [visitor-training-client.blazorserver.com](https://visitor-training-client.blazorserver.com/)：通过网页体验访客登记入口、合规培训任务查询与中英文界面 |
| 后端管理平台 | [visitor-training.blazorserver.com](https://visitor-training.blazorserver.com/)：查看运营看板，以及访客申请、审批、课程和培训记录等工作区 |
| 网页演示前端源码 | [neozhu/visitor-traning-client](https://github.com/neozhu/visitor-traning-client) |
| 后端源码仓库 | [neozhu/visitor-training-management](https://github.com/neozhu/visitor-training-management) |

## 让企业访客管理要求有据可查

当来访信息、审批结果与培训记录分别保存在表格、消息和纸质记录中，企业很难确认访客管理要求是否落实：来访目的与访问区域分别经过谁授权？每个人是否完成对应的合规课程？合格成绩是否仍然有效？同行人员是否分别满足入场条件？来访结束后，能否调取当时的处理依据？

VisitorTraining 将这些要求落实到五项相互衔接的工作中：

- **一次申请承载完整来访信息。** 关联预约日期、访问区域、来访人员、车辆与业务信息，减少跨环节重复整理。
- **审批责任分别记录。** 业务审批与各访问区域的审批各自保留处理结果，便于确认责任与追溯决定。
- **合规培训匹配来访要求。** 根据登记类型与访问区域匹配必修课程，按人员记录学习进度、考核结果和资质有效期。
- **入场条件逐人核验。** 结合申请审批和个人当前培训要求判断入场资格；同一申请中，符合条件的人可以先办理入场，其他人员继续完成必修任务。
- **管理依据随来访记录保留。** 将审批决定、培训成绩、进出时间、操作人员与当次来访资料关联，支持后续合规检查与责任追溯。

## 从微信小程序登记到离场留痕

### 1. 选择来访类型，填写本次申请

普通访客、物流车辆与施工人员在微信小程序中选择适合自身场景的登记入口。登记类型决定适用表单、来访须知及车辆要求，访客按步骤填写预约、被访人、到访事由、人员和访问区域等信息。

除访客自行登记外，产品流程也支持授权员工代为创建申请。人员与车辆资料可以复用，而每次申请保留当次使用的信息，便于回看历史来访背景。

### 2. 访问授权与合规培训并行推进

申请提交后，业务审核与所选区域的审核分别进入对应责任人的任务，同时根据登记类型和访问区域为来访人员匹配合规课程。两类审批分别记录，明确谁同意来访、谁授权访问相应区域。

**等待审批的时间也可以用来完成培训。** 两条工作线并行推进，避免把“先审批、再通知学习”变成不必要的串行等待。培训也可以提前分配，不要求先创建来访申请。

### 3. 完成相关课程，保留成绩有效期

课程可以包含合规培训视频、辅助 PDF 资料，以及单选或多选考试。学习进度、考试尝试、成绩与有效期关联到具体人员和课程，为核验必修要求是否完成、相关资质是否有效提供依据。

同一个人再次来访时，仍在有效期内的合格课程成绩可以复用；复用保留原有到期日，不会因为新建申请而重新延长。已过期或新增的必修课程则需要重新完成。

### 4. 按人核验入厂条件

门岗依据企业配置的入场条件逐人核验，综合检查本次申请的业务与区域审批、须知确认、预约日期，以及该人员当前必修合规培训是否完成且有效，让授权结果与个人资质共同成为入场判断的依据。

首次入厂须在预约日期当天，按工厂北京时间判断；预约时段用于登记与展示。同一申请下，每个人分别确认进厂与出厂，记录实际操作时间和操作人员。

### 5. 完成离场与记录归档

人员离场、已入厂车辆的离场及申请结束遵循各自的业务条件。来访资料快照、审批结果、考试记录与进出厂操作共同保留，便于企业在后续合规检查中回看：当时申请了什么、由谁批准、完成了哪些课程，以及每个人何时进入和离开。

## 真实界面：访客手机端与管理看板

下方两张移动端截图采集自微信开发者工具中的小程序模拟器，分别展示访客业务入口和本人培训与申请查询页；管理看板截图采集自在线演示系统。查询需要姓名与手机号同时匹配，查询本身不代表身份认证。上方保留客户端网页演示入口，便于直接了解相关功能。

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
    <a href="/uploads/showcases/visitsafe/visitor-portal-cn.jpg" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/visitor-portal-cn.jpg" width="546" height="1179" loading="lazy" alt="VisitorTraining 微信小程序首页，包含学习培训、普通访客、物流车辆和施工人员入口"></a>
    <figcaption>微信小程序首页实拍，按访客办理事项组织登记与学习入口。</figcaption>
  </figure>
  <figure>
    <a href="/uploads/showcases/visitsafe/training-lookup-cn.jpg" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/training-lookup-cn.jpg" width="546" height="1179" loading="lazy" alt="VisitorTraining 微信小程序本人培训与申请查询页，通过登记姓名和手机号码查找本人任务、来访申请和通过记录"></a>
    <figcaption>小程序本人培训与申请查询页，通过登记姓名与手机号查找本人任务、来访申请和通过记录。</figcaption>
  </figure>
</div>

管理端把预约来访、在厂人员、待处理审批、车辆及培训有效情况汇总到运营看板，并提供访问区域与时间范围筛选。管理人员可以从同一个工作入口了解来访准备与现场状态。

<figure class="vs-figure">
  <a href="/uploads/showcases/visitsafe/management-dashboard.jpg" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/management-dashboard.jpg" width="1430" height="993" loading="lazy" alt="VisitorTraining 管理平台运营看板，展示预约来访、在厂人员、审批概览、访问趋势及培训有效情况"></a>
  <figcaption>在线管理看板实拍。页面中的人物、审批、成绩和运营数值均为虚构演示数据。</figcaption>
</figure>

## 一图理解 VisitorTraining 的来访流程

中文长图将登记、任务生成、培训考试、入厂核验和离场记录串联起来。图中的题数、分数及具体审批角色为说明示例；实际规则由登记类型、访问区域和课程配置决定。

<figure class="vs-figure">
  <a href="/uploads/showcases/visitsafe/workflow-cn.png" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/workflow-cn.png" width="724" height="2172" loading="lazy" alt="VisitorTraining 中文访客流程总览：选择登记类型、填写申请、生成审批和培训任务、学习考试、逐人核验入厂以及离场留痕"></a>
  <figcaption>VisitorTraining 中文流程示意图。点击图片可查看原图。</figcaption>
</figure>

<details>
  <summary>查看英文流程全景图：从预约申请到进出厂与记录查询</summary>
  <div><div>
    <figure class="vs-figure">
      <a href="/uploads/showcases/visitsafe/workflow-en.png" target="_blank" rel="noopener"><img src="/uploads/showcases/visitsafe/workflow-en.png" width="1536" height="1024" loading="lazy" alt="VisitorTraining 英文流程图，说明审批与培训并行、个人入厂条件、进出厂确认及历史记录查询"></a>
      <figcaption>英文流程全景图；培训题数、合格分数和审批角色为示意，实际以系统配置为准。</figcaption>
    </figure>
  </div></div>
</details>

## 连接不同角色，保留一致的业务上下文

| 使用角色 | 关注的问题 | 对应工作 |
| --- | --- | --- |
| 访客、承包商与物流司机 | 如何预约、需要学什么、是否已完成 | 微信小程序登记、任务查询、视频学习、考试与结果查看 |
| 接待与运营人员 | 谁将到访、去哪些区域、有哪些随行人员和车辆 | 申请维护、代登记、人员车辆资料与预约信息管理 |
| 业务与区域审批人 | 来访目的和访问范围是否合适 | 按职责处理审核任务，分别记录审批结果 |
| 合规与培训管理人员 | 适用哪些学习要求、相关资质是否仍有效 | 课程、题库、有效期、培训分配与记录管理 |
| 门岗人员 | 当前这个人是否满足入厂要求、何时离场 | 逐人核验、进出厂操作与时间留痕 |

## 技术架构与交付方式

VisitorTraining 将面向访客的微信小程序与面向企业内部人员的管理工作台分开，通过 API 共享业务规则与数据。本文同时提供 React 网页演示，便于直接体验访客端流程。

| 层次 | 技术与职责 |
| --- | --- |
| 微信小程序访客端 | 面向国内访客，承载来访登记、合规培训、任务查询与考核结果查看 |
| 客户端网页演示 | React、TypeScript、Vite、Ant Design Mobile、Tailwind CSS，通过手机浏览器演示访客端流程 |
| 企业管理端 | Blazor 与 CleanBlazorServerPro，承载业务管理、用户角色、权限与操作日志等工作 |
| 业务接口 | ASP.NET Minimal APIs，连接访客端与管理端的业务能力 |
| 数据与部署 | SQL Server、Docker Compose 与 GHCR 镜像，支持前端、后端和数据库的组合部署 |

产品仍在持续迭代。本文结合项目文档、小程序界面与当前在线演示介绍产品设计，具体已开放功能及集成范围以实际部署版本和项目文档为准。封面为概念插画，移动端界面为微信开发者工具模拟器截图，管理看板为浏览器截图。

## 建立一致、可追溯的企业访客合规流程

工厂接待、承包商进场、物流车辆来访与园区访问，都需要回答同一组管理问题：谁要来、允许去哪些区域、需要谁批准、必须完成哪些合规培训，以及应该保留哪些处理记录。

VisitorTraining 将这些要求关联到同一次来访：访客清楚需要履行的事项，审批人按职责记录授权决定，门岗逐人核验入场资格，企业管理人员能够回看完整依据。由此形成职责明确、执行一致、记录可追溯的访客合规管理流程。

**[查看访客客户端网页演示](https://visitor-training-client.blazorserver.com/) · [查看管理平台](https://visitor-training.blazorserver.com/) · [网页演示前端源码](https://github.com/neozhu/visitor-traning-client) · [后端源码](https://github.com/neozhu/visitor-training-management)**

---
title: "HR HUB：让人员、工时与月度账单对得上"
slug: hr-hub-人力集成云
description: "HR HUB 连接用人单位、劳务供应商和人事团队，将用工需求、人员安排、已确认工时与月度账单关联起来，支持劳务外包业务协作与对账。"
summary: "谁在哪里上班、哪些工时已确认、月度费用如何汇总，都有记录可查。HR HUB 贯通用工、考勤与对账，保留每日费用明细及供应商和用人单位双方的独立费率。"
seo:
  description: "了解 HR HUB 如何连接用工需求、人员安排、考勤采集、工时确认和月度对账，保留每日结算依据，支持基于 .NET 10 的自行部署。"
  title: "HR HUB 用工、考勤与月度对账平台 | BlazorStudio"
date: 2026-10-24T00:00:00+08:00
lastmod: 2026-10-24T00:00:00+08:00
tags: ["Blazor", "NET10", "Docker", "人力资源", "劳务外包", "考勤管理"]
image: /uploads/photos/hrhub/hrhub-marketing.png
---

**人员安排清楚，工时确认有据，月底对账有底。**

HR HUB 面向用人单位、劳务供应商和人事团队，贯通从用工需求到月度账单的劳务外包业务。谁在哪里上班、哪些工时已经确认、相关费用如何汇总，都能找到对应的记录。

多家供应商同时供人、员工分布在不同现场时，月底的一个总数往往很难解释清楚。员工名单、打卡记录、班次规则和小时单价都会影响结果。HR HUB 将这些记录关联起来，让团队直接查看账单依据，减少在表格和聊天记录中反复查找、拼凑与核对。

{{< button "查看在线演示" "https://hrcloud.blazorserver.com//" >}}
{{< button2 "讨论您的用工场景" "/contact/" >}}

以下截图于 2026 年 10 月 24 日采集自在线系统，点击图片可查看原图。

## 让用人单位、供应商和人事围绕同一套记录协作

各方关注的业务不同，但依据来自同一段用工过程。用人单位要了解需求是否已满足，供应商要跟进员工安排，人事和财务则需要核对实际出勤与相关费用。

| 使用团队 | HR HUB 帮助回答的问题 |
| --- | --- |
| **用人单位与现场负责人** | 需要多少人、人员是否已安排、哪些工时和费用需要核对？ |
| **劳务供应商与人力资源服务机构** | 员工在哪里工作、用工变更进展如何、对账对应哪些考勤记录？ |
| **人事运营与财务团队** | 哪些记录需要处理、哪些工时已确认、每日费用如何汇总为月度账单？ |

这些记录的关联贯穿整个月的日常工作：调整员工安排时要查清用工关系，发现考勤异常时需要核查，核对账单金额时则要查看对应的每日明细。

运营概览集中展示当前派工人数、本账期已确认工时、待办事项、月度趋势和设备在线情况，帮助团队了解当前业务状态。

<figure>
  <a href="/uploads/photos/hrhub/dashboard-cn-20261024.jpg"><img src="/uploads/photos/hrhub/dashboard-cn-20261024.jpg" alt="HR HUB 中文运营概览，展示派工人数、已确认工时、待办事项、月度账单趋势和设备状态" width="2765" height="2109" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>运营概览：集中跟进人员安排、考勤待办与已确认工时。</figcaption>
</figure>

## 从用工需求到月度账单，贯通五个环节

<figure>
  <a href="/uploads/photos/hrhub/hrhub-business-overview-zh-CN.png"><img src="/uploads/photos/hrhub/hrhub-business-overview-zh-CN.png" alt="HR HUB 业务流程图：用工需求、人员安排、考勤采集、工时确认和月度账单五个环节" width="941" height="1671" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>业务流程总览：将用工需求、人员安排、考勤采集、工时确认与月度账单连接起来。</figcaption>
</figure>

### 1. 明确用工需求

创建用工需求，记录用人单位、部门、工种和需求人数，同时设置供应商侧与用人单位侧的小时单价，让双方费用都有明确的计费依据。

组织记录与审批流程将需求关联到负责安排人员和审核的团队，便于后续跟进。

### 2. 安排人员，保留用工记录

围绕需求管理员工档案、申请、审批和用工历史。用工变更通过相应的申请与记录跟进，帮助团队了解每次人员安排的变化过程。

附件、工种和宿舍记录支持员工日常管理；配置身份证 OCR 和人脸处理服务后，还可辅助人员资料录入。

### 3. 将设备打卡转换为每日工时

已对接的考勤设备提供打卡记录，HR HUB 结合班次计算每日工时，并将考勤异常交由相关人员核查。

每日考勤页面将员工、用人单位、班次、工种、上下班时间、计算工时和异常信息放在同一条记录中。团队可以按日期范围和异常状态筛选，并将记录导出为 Excel 继续核对。

<figure>
  <a href="/uploads/photos/hrhub/attendance-cn-20261024.jpg"><img src="/uploads/photos/hrhub/attendance-cn-20261024.jpg" alt="HR HUB 中文每日考勤按日期筛选，展示人员安排、班次、打卡时间、计算工时和高亮异常记录" width="1843" height="1062" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>每日考勤：核对人员安排、班次规则和打卡记录，并检查异常。</figcaption>
</figure>

### 4. 核查异常，确认结算工时

通过出勤补录申请和异常检查处理需要核实的记录，再确认用于后续结算的每日工时。确认时会记录确认人和确认时间。

这样，对账就有了明确的依据：已经核对并确认的每日考勤。

<figure>
  <a href="/uploads/photos/hrhub/hours-confirmation-cn-20261024.jpg"><img src="/uploads/photos/hrhub/hours-confirmation-cn-20261024.jpg" alt="HR HUB 中文工时确认页面展示待核对的每日考勤、工时、加班时长，以及确认后锁定记录的提示" width="1843" height="1122" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>工时确认：将核对后的每日考勤连接到月度账单。</figcaption>
</figure>

### 5. 形成月度账单

确认每日考勤会创建或更新对应员工的月度账单。已确认的工时与相关费用汇总到月度记录中，供团队核对和导出。

**每个月度总数都能回到每日明细：** 查清对应的员工、用人单位、供应商、已确认工时和相关费用。

## 一个月度总数，包含哪些结算依据？

账单保留理解费用来源所需的明细：

- 每日工时、加班时长和工种。
- 供应商侧与用人单位侧各自的小时单价和费用。
- 每日考勤的确认记录，包括确认人和确认时间。
- 月度工时总计及双方费用汇总。

当前结算周期为**上月 26 日至账单月份的 25 日**。例如，10 月账单对应 9 月 26 日至 10 月 25 日。

账单用于核对结算依据，实际付款由业务方另行处理。每日明细、确认记录和操作审计共同帮助团队核查有争议的金额，并解释业务变更。

<figure>
  <a href="/uploads/photos/hrhub/billing-cn-20261024.jpg"><img src="/uploads/photos/hrhub/billing-cn-20261024.jpg" alt="HR HUB 中文月度账单局部，展示每日工时、累计工时，以及供应商和用人单位各自的单价与费用汇总" width="2063" height="1143" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>月度账单局部：核对累计工时及双方各自的费率与费用。</figcaption>
</figure>

## 覆盖每次人员安排背后的日常工作

主流程之外，相关业务记录和管理功能支持日常运营。

| 业务领域 | 已有能力 |
| --- | --- |
| **用工协作** | 组织管理、用工需求、员工申请、审批流程、用工历史和变更申请。 |
| **员工管理** | 员工档案、附件、工种、宿舍记录，以及可配置的资料录入辅助服务。 |
| **考勤运营** | 设备对接、打卡日志、班次、每日考勤、异常检查和出勤补录申请。 |
| **账单与对账** | 工时确认、月度账单、每日费用明细、供应商与用人单位各自的费用和 Excel 导出。 |
| **运营监督** | 业务看板、角色权限、租户账号管理、操作审计、登录审计和接口日志。 |

## 支持自行部署的 .NET 应用

HR HUB 使用 **.NET 10、Blazor Server、MudBlazor 和 Entity Framework Core** 构建，支持 **SQLite、SQL Server 和 PostgreSQL**，仓库默认配置为 SQLite。

应用采用分层单体架构：**Domain** 定义业务模型，**Application** 组织业务用例，**Infrastructure** 实现数据访问与外部集成，**Server.UI** 承载交互界面和考勤设备接口。MediatR、FluentValidation、FusionCache 和 Hangfire 分别支持请求处理、校验、缓存与后台考勤检查。

容器部署可参考项目的 Dockerfile 和部署用 Compose 配置。数据库及所需的外部服务，包括 MinIO 文件存储、SMTP 邮件、身份证 OCR 和人脸处理，需要按目标环境分别配置。[系统架构图](/uploads/photos/hrhub/architecture.png)和[部署拓扑图](/uploads/photos/hrhub/deployment.png)展示了应用结构与服务连接关系。

[源代码仓库](https://github.com/neozhu/hrhub)提供本地运行说明和部署参考，项目采用 **GPL-3.0** 许可证。

## 从一个完整的业务周期开始体验

选择一家用人单位、一家劳务供应商、一组班次与工种，以及已对接的考勤设备。从一条需求出发，跟进入职申请和人员安排，查看每日考勤，处理异常，确认工时，再核对生成的月度账单。

沿着这条流程，可以了解 HR HUB 如何回答三个日常问题：**谁在哪里工作？哪些工时已经确认？账单上的费用是怎样算出来的？**

{{< button "查看在线演示" "https://hrcloud.blazorserver.com//" >}}
{{< button2 "讨论试点与部署方案" "/contact/" >}}

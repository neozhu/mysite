---
title: "HR HUB 人力集成云：让派遣、考勤与结算协同运转"
slug: hr-hub-人力集成云
description: "面向劳务外包与多组织用工的协同平台，连接用人单位、劳务供应商和人事团队，贯通需求、派遣、考勤、工时确认与月度账单，支持 Docker 部署。"
summary: "HR HUB 将用人单位、劳务供应商和人事团队连接到同一条业务链路，让用工安排有记录、工时确认有依据、月度对账可追溯。"
seo:
  description: "了解 HR HUB 的劳务外包协同场景、考勤到月度结算流程、.NET 10 分层架构，以及 Traefik、CrowdSec、MinIO 与识别服务组成的 Docker 部署方案。"
date: 2025-11-18 00:00:00
lastmod: 2026-10-05 00:00:00
tags: ["Blazor", "NET10", "Docker", "人力资源", "劳务外包", "考勤管理"]
image: /uploads/photos/hrhub/hrhub-marketing.png
---

让用人单位、劳务供应商和人事团队在同一平台协作，把人力需求、员工派遣、考勤记录和月度账单连接起来。

劳务外包的日常管理涉及多方交接：谁提出需求、谁安排员工、谁确认工时、费用如何计算。HR HUB 人力集成云将这些交接纳入有状态、有依据、可追溯的在线流程，帮助团队减少重复录入和月底反复核对。

{{< button "查看在线演示" "https://hrcloud.blazorserver.com/" >}}
{{< button2 "讨论您的用工场景" "/contact/" >}}

## 三方协同，让每一次交接都有依据

员工名单、打卡记录和结算表分散在不同系统中时，团队需要反复确认它们是否对应同一次用工。HR HUB 围绕同一组组织、员工、派遣和考勤数据组织业务，让参与者接续已有信息完成自己的工作。

- **用人单位：掌握需求与实际用工。** 提交人力需求、确认派遣安排、审核出勤补录，并确认进入结算的工时。
- **劳务供应商：集中管理人员与服务交付。** 维护员工档案、响应需求、安排派遣，并针对漏打卡等情况提交补录申请。
- **人事团队：统一维护规则与管理记录。** 管理组织、岗位、班别、设备和需求审批，通过账单与审计记录核对业务过程。

平台适合需要多方共同确认用工事实的劳务外包、人员派遣及多组织用工场景。对管理者而言，价值在于把“安排了谁、实际工作多久、按什么费率结算”连接到一起。

## 从人力需求到月度账单，贯通六个环节

1. **提出需求。** 用人单位明确岗位、人数和用工时间，人事完成需求审批。
2. **安排派遣。** 供应商选择员工响应需求，用人单位确认人员安排与对应班别。
3. **接入设备。** 平台通过设备接口同步人员指令，接收打卡照片和识别记录。
4. **归集工时。** 按已确认的员工安排与班别规则计算每日工时，集中查看异常记录。
5. **审核与确认。** 供应商提交出勤补录，用人单位审核，并确认用于结算的每日考勤。
6. **生成账单。** 已确认的每日考勤按记录的工时与费率生成或更新月度账单，为多方对账提供依据。

**工时确认是连接考勤与账单的关键节点。** 后续设备打卡不会覆盖已经确认的每日考勤，让团队能够基于确认后的记录开展结算核对。

## 产品界面：看清用工、工时与设备状态

以下为系统业务界面，点击图片可查看原图。

### 业务总览：集中查看组织与设备情况

首页汇总供应商、用人单位、已确认考勤人员和设备数量，并展示设备在线情况，便于管理人员了解当前的业务与设备状态。

<figure>
  <a href="/uploads/photos/hrhub/1.png"><img src="/uploads/photos/hrhub/1.png" alt="HR HUB 首页展示组织数量、考勤人员数量与设备在线状态" width="3837" height="1033" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>业务总览：将组织信息与设备状态集中呈现。</figcaption>
</figure>

### 每日考勤：从打卡记录到工时依据

在同一条记录中查看员工、用人单位、班别、岗位、上下班时间、工时和费率。筛选与 Excel 导出帮助团队开展日常核对。

<figure>
  <a href="/uploads/photos/hrhub/2.png"><img src="/uploads/photos/hrhub/2.png" alt="每日考勤列表展示员工、班别、上下班时间、工时与费率" width="3835" height="1261" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>每日考勤：保留工时计算所需的业务上下文。</figcaption>
</figure>

### 工时确认：把核对结果纳入月度结算

用人单位在确认页面核对每日考勤，确认后的记录进入月度账单。供应商与人事团队据此开展对账，减少重新整理原始打卡数据的工作。

<figure>
  <a href="/uploads/photos/hrhub/5.png"><img src="/uploads/photos/hrhub/5.png" alt="工时确认与结算页面，提示确认记录将纳入月度账单并锁定" width="3835" height="1146" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>工时确认与结算：确认后的每日考勤成为月度账单依据。</figcaption>
</figure>

### 设备管理：连接现场考勤与云端业务

设备档案记录所属用人单位、序列号、部门、安装位置和在线状态。配合接口日志及原始考勤记录，管理人员可以排查人员同步和打卡数据接入问题。

<figure>
  <a href="/uploads/photos/hrhub/11.png"><img src="/uploads/photos/hrhub/11.png" alt="考勤设备管理页面展示设备序列号、安装位置与在线状态" width="3835" height="1135" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>设备管理：为现场设备维护与接口排查提供入口。</figcaption>
</figure>

员工档案还可调用身份证 OCR 和人脸提取服务辅助资料录入；组织、班别、岗位、住宿、文档及员工变更等模块，为日常人事管理提供配套支持。

## 系统架构：围绕业务用例组织的分层单体

HR HUB 基于 **.NET 10、ASP.NET Core、Blazor Server 和 MudBlazor** 构建。交互界面、考勤设备 HTTP 接口、SignalR Hub 和 Hangfire 后台工作器运行在同一个 ASP.NET Core 宿主中，项目内部按 Clean Architecture 分离职责。

<figure>
  <a href="/uploads/photos/hrhub/architecture.png"><img src="/uploads/photos/hrhub/architecture.png" alt="HR HUB 架构图：浏览器和考勤设备连接界面宿主，经应用层和基础设施层访问领域模型、数据库、对象存储与邮件服务" width="2048" height="1320" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>系统架构图：复用项目 README 图示。点击原图查看各层职责与调用关系。</figcaption>
</figure>

- **Server.UI：交互与接入。** 承载 Blazor 页面、账户流程和设备接口，通过 SignalR 支持浏览器交互。
- **Application：业务用例。** 以 MediatR 命令与查询组织功能；FluentValidation 与管道行为统一处理校验、性能记录、查询缓存和命令后的缓存失效。
- **Domain：业务模型。** 定义员工、组织、派遣、班别、考勤、账单及相关领域事件。
- **Infrastructure：数据与外部服务。** 通过 EF Core 实现持久化，提供 Identity、审计、软删除、MinIO 文件上传、SMTP 邮件及 Excel/PDF 生成等适配。
- **Migrators：数据库迁移。** 支持 SQLite、SQL Server 和 PostgreSQL；当前仓库配置默认使用 SQLite。

这种组织方式让考勤接入、工时确认和账单生成沿用一致的应用处理流程，也使存储、邮件等外部依赖通过明确的服务接口接入。

### 权限、数据与后台任务

ASP.NET Core Identity 提供 Cookie 认证、角色与权限声明。租户身份管理和已实现的组织过滤共用同一数据库，具体业务查询按角色与组织限定访问范围。

设备通过 `/record/picture`、`/record/notice` 上传照片与打卡记录，通过 `/person/cmd`、`/person/result` 获取并回执人员指令。应用将记录关联到已知设备和已确认的员工安排，再按班别计算每日工时。

FusionCache 为适用查询提供进程内缓存；Hangfire 执行考勤检查。两者当前均采用内存存储。Serilog 日志、`/health` 健康检查和需授权访问的 `/jobs` 看板为运维提供观察入口。

## Docker 部署：连接公网入口、业务服务与现场设备

HR HUB 可采用 Docker 交付到企业自有服务器或云主机。README 的部署拓扑展示了应用、识别服务、对象存储与公网入口的配合方式；实际服务位置可按网络和运维要求确定。

<figure>
  <a href="/uploads/photos/hrhub/deployment.png"><img src="/uploads/photos/hrhub/deployment.png" alt="Docker 部署拓扑：浏览器和考勤终端经 Traefik 与 CrowdSec 访问 HR HUB，应用连接人脸处理、身份证 OCR、MinIO、数据库、SMTP 与 MaxMind" width="2048" height="1320" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>部署拓扑：图中以单台 Docker 主机和至少八台考勤终端说明连接关系，设备数量为示例规模。</figcaption>
</figure>

### 公网访问与入口防护

浏览器和考勤终端经 **Traefik** 进入应用。Traefik 终止 HTTPS，并转发 HTTP 请求及 Blazor 的 SignalR/WebSocket 连接。**CrowdSec** 分析入口访问日志，通过私有 LAPI 提供处置决策，由 Traefik 的 bouncer 中间件在入口执行。

应用与 MinIO 文件访问可使用独立域名。部署时配置指向服务器的 DNS 记录、Traefik 主机路由和 ACME 证书自动续期；采用 HTTP-01 验证时，需要确保域名解析正确且 80、443 端口可达。

### 服务连接与数据持久化

- **HR HUB 应用容器**运行界面、设备接口和后台工作器，并连接选定的关系数据库。
- **人脸处理与 PaddleOCR 容器**通过 Docker 服务网络提供人脸提取、图片压缩及身份证信息提取能力。
- **MinIO 容器**保存员工图片与附件，通过独立的 HTTPS 域名提供 S3/媒体访问；人脸服务返回的图片地址与存储配置需在联调时核对。
- **外部 SMTP 与 MaxMind 服务**分别用于邮件发送和登录 IP 的地理位置查询。

生产环境需要持久化应用数据库、MinIO 对象数据、Traefik 证书状态和 CrowdSec 状态，并建立备份恢复流程。若后台任务需要跨容器重启保留，还需为 Hangfire 配置持久化存储。

**仓库中的 Compose 文件配置了 HR HUB 应用及其集成参数，完整拓扑中的代理、防护、识别与存储服务需要配套部署。** GitHub Actions 提供 Docker 镜像自动构建与推送，服务器发布流程按实际环境安排。

## 从一个用工场景开始验证

试点可以选取一家用人单位、一家供应商、一组岗位与班别，以及少量考勤设备，跑通需求审批、人员派遣、打卡接入、异常补录、工时确认和月度对账。

业务团队重点核对班别、费率和审批职责；IT 团队确认设备协议、域名与网络、数据库、文件存储及备份安排。用一段真实业务周期检验数据是否衔接，再确定推广范围。

{{< button "查看在线演示" "https://hrcloud.blazorserver.com/" >}}
{{< button2 "讨论试点与部署方案" "/contact/" >}}

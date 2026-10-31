---
title: 'Wattlas - 全球能源机会雷达'
image: /uploads/illustrations/cuate/wattlas-showcase.png
date: 2026-09-19 00:00:00
tags: ["GitHub", "能源分析", "MapLibre", "Python", "Next.js", "数据管道"]
description: "Wattlas 是开源全球能源与基础设施机会雷达，将全球数据中心、水务、氢能、钢铁、水泥项目与发电资产整合到 MapLibre 交互式地球，通过可解释评分、区域电力平衡模型与受治理的数据快照分析 2026–2031 年电力供需变化。"
summary: "结合 Python + DuckDB 受治理数据管道与 Next.js + MapLibre 地球视图，覆盖全球 246 个国家/地区、3,229 个一阶行政区（ADM1）、12,069 个基础设施项目与 15.4 万座发电厂，提供透明可追溯的 2026–2031 年能源供需分析。"
seo:
  title: "Wattlas 全球能源机会雷达 | BlazorStudio"
  description: "深入了解 Wattlas 如何用 MapLibre 地球视图、Python + DuckDB 数据管道和可解释评分连接全球基础设施需求与区域电力平衡，查看国家洞察、资产浏览器、方法论公式及受治理数据源目录。"
slug: "wattlas-全球能源机会雷达"
---

{{< brick_title >}}
{{< button "查看 GitHub 项目" "https://github.com/neozhu/wattlas" >}}
{{< button "在线体验" "https://wattlas.blazorserver.com" >}}
{{< /brick_title >}}

**Wattlas** 是一个开源的**全球能源与基础设施机会雷达（Global Energy Opportunity Radar）**，旨在用公开、可验证的证据回答一个核心规划问题：*在 2026 至 2031 年间，数据中心、海水淡化与水务设施、绿氢生产、电弧炉炼钢以及水泥项目的增长，将在哪些地区带来最显著的电力需求、电网投资机会或系统约束？在运、在建、规划与退役发电厂又将如何改变区域电力供需平衡？*

与只给出单一黑盒分数的传统仪表盘不同，Wattlas 将自然地理风格的 **MapLibre GL** 交互式地球与国家级边界、全球 **3,229 个州/省（ADM1）行政区**、**334 个欧洲 NUTS-2 区域**、**12,069 个需求与网络设施**以及 **154,211 座公用事业级发电厂**整合在同一分析工作台中。每一个区域评分、用电增量估算和设施档案都完整公开其权重拆解、置信度、覆盖率、观测日期及原始证据链接。

![Wattlas 全球能源机会雷达总览视图](/uploads/photos/wattlas/01-opportunity-radar-overview.png)

---

## 双工作空间与四维分析视角

Wattlas 围绕不同分析任务设计了 **Opportunity Radar（机会雷达）** 与 **Asset Explorer（资产浏览器）** 两大顶层工作空间，并内置 **Country Intelligence（国家深度洞察）** 下钻面板与多区域横向对比抽屉。

### 1. 两大核心工作空间

| 工作空间 | 解决的核心问题 | 核心交互能力 |
| --- | --- | --- |
| **Opportunity Radar（机会雷达）** | *2026–2031 年哪些区域蕴含最大的基础设施机会或面临最紧迫的电网约束？* | 按四大分析视角对国家、ADM1 州/省及欧洲 NUTS-2 区域进行评分着色，支持 `2026`–`2031` 时间轴切换、评分趋势迷你折线图（Sparkline）与得分驱动因子拆解。 |
| **Asset Explorer（资产浏览器）** | *目标区域有哪些已建成、在建或规划中的用电设施与发电资产？* | 一键开启全部五类基础设施图层，顶部汇总全球及区域内按状态（`Operating`、`Under construction`、`Pre-construction`、`Announced`、`Retired`）分类的设施数量，支持按发电技术、装机容量（MW）区间与生命周期过滤，并可将当前筛选结果导出为 CSV。 |

### 2. 四大可解释决策视角（Lenses）

1. **01 · Infrastructure Demand（基础设施需求，主视角）：** 识别由新建或扩建数据中心、水务设施、电解水制氢、钢铁和水泥项目驱动的前瞻性电力需求热点。
2. **02 · Site Attractiveness（选址吸引力）：** 基于公开证据与区域条件，评估某地开发新型高载能基础设施的可行性与产业集聚度。
3. **03 · System Risk（系统风险）：** 揭示电网传输瓶颈、备用裕度不足、冷却水资源压力或需求激增可能引发的系统运行风险。
4. **04 · Power Balance（区域电力平衡图谱）：** 在全球 3,185 条 ADM1 省级能源序列上对比年度电力需求（`GWh`）与本地可靠发电量（`GWh` 及 `MW`）。当跨区输电交换数据未知时，严格区分“本地发电缺口（Local generation gap）”与“已确认的电力短缺”，绝不夸大或虚构缺电结论。

![Wattlas ADM1 省级电力平衡与 2026–2031 供需预测](/uploads/photos/wattlas/02-power-balance-energy-forecast.png)

---

## 深度透视：国家洞察、设施档案与可追溯证据

### 国家深度洞察（Country Intelligence）

在选中任意国家后点击 **Open country intelligence**，系统会将国家级权威电力统计（如 Ember 年度电力数据、ENTSO-E 欧洲月度实际负荷与分类型发电量）与省/州级自下而上的项目管道进行对齐汇总：

- **核心指标卡：** 清晰展示当年总用电需求（`GWh`）、本地总发电量（`GWh`）、供需差额以及规划新增装机容量（`MW`）。
- **2026–2031 逐年展望：** 以可视化对比条展示未来 6 年电力需求与本地发电的演化轨迹。
- **基础设施管线与发电结构：** 汇总工业负荷项目、氢能管网、数据中心、水务资产及退役机组数量，并计算光伏、风电、水电、核电、燃气、煤电、生物质与地热等发电技术占比。

![Wattlas 国家级电力洞察面板](/uploads/photos/wattlas/03-country-intelligence.png)

### 资产浏览器与设施级五维档案

在 **Asset Explorer** 模式下，用户可以自由开关并组合五类基础设施图层：

- **数据中心（`4,247` 座）：** 融合官方项目公告（`official_verified`）与通过 QLever 检索的 OpenStreetMap 社区测绘设施（`community_mapped`）。
- **水务基础设施（`101` 处）：** 涵盖海水淡化、污水处理、再生水厂及高耗电泵站/输水管线（水力发电与被动蓄水归入供应或背景图层，不重复计入需求）。
- **工业负荷项目（`7,694` 个）：** 包含绿氢生产、钢铁厂与水泥厂，满足预测门禁条件的项目会自动计算低/中/高三档年度用电需求区间。
- **氢能管网（`27` 处背景资产）：** 输氢管道、储氢设施、掺氢与终端仅作为空间背景展示，不会凭空产生用电增量。
- **发电厂（`154,211` 座）：** 覆盖 10 类颜色编码的发电技术（`Solar`、`Wind`、`Hydro`、`Nuclear`、`Gas`、`Coal`、`Oil`、`Biomass`、`Geothermal`、`Other`），配备装机容量（`MW`）滑块与项目生命周期筛选器。

点击地图上的任意设施或电站，底部会弹出紧凑的**项目摘要卡（Project Summary Card）**，右侧面板则按 **Identity（身份与业主）**、**Location（坐标与精度）**、**Operations（生命周期与投产时间）**、**Energy（申报功率与用电估算）** 和 **Sources（来源与外部标识）** 五个维度展示完整档案，并提供直达 GEM Wiki、Wikidata、OpenStreetMap 或官方公告页面的外部链接。

![Wattlas 资产浏览器与单设施深度档案](/uploads/photos/wattlas/05-asset-explorer-layers.png)

### 证据档案抽屉（Evidence Dossier）

点击任意区域的 **Open evidence dossier**，可以审查支撑该区域评分的所有公开数据源、观测日期、来源等级（`Tier A` 官方统计/电网机构、`Tier B` 权威研究追踪库、`Tier C` 社区开源测绘）、模型版本以及数据性质标签（`observed`、`reported`、`estimated`、`inherited` 或 `unavailable`）。

![Wattlas 区域评分证据档案与来源追溯](/uploads/photos/wattlas/04-evidence-dossier-and-drivers.png)

---

## 方法论与受治理的数据管道（Governed Data Pipeline）

### 工业项目用电需求换算公式

在 Wattlas 中，规划中的工业项目只有同时通过**坐标有效性、ADM1 行政区归属、2026–2031 投产年份、生命周期状态以及技术路线**五道验证门禁后，才会进入区域用电需求预测。每个合格项目都公开其带版本号的年度用电量换算公式，并输出低（Low）、中（Central）、高（High）三档区间：

- **氢能生产（电解槽）：** $\text{装机容量}_{\text{MWel}} \times 8.76\text{ GWh/(MW}\cdot\text{年)} \times \text{容量因子} \times \text{电网供电比例}$
- **钢铁行业（电弧炉 EAF / 直接还原铁 DRI）：** $\text{年产能}_{\text{kt/年}} \times \text{吨钢电耗强度}_{\text{MWh/t}}$
- **水泥与熟料：** $\text{年产能}_{\text{Mt/年}} \times 1,000 \times \text{吨水泥电耗强度}_{\text{MWh/t}}$

![Wattlas 方法论页面与工业负荷换算公式](/uploads/photos/wattlas/06-methodology-overview.png)

### 月度不可变快照架构

Wattlas 将数据采集、清洗建模与浏览器渲染彻底解耦。前端绝不直接请求外部上游接口，而是由 **Python 3.13 + DuckDB** 空间数据管道完成多源数据拉取、行政区空间关联、去重校验与评分计算，并以原子方式发布不可变的 JSON/GeoJSON 快照（由 `web/public/data/latest.json` 指向最新有效快照）：

```
上游公开数据源（共 68 个数据源族）
  ├─ 自动发布的开放许可接口（UN Geodata、GISCO、Eurostat、QLever/OSM、WorldPop）
  ├─ 运行时凭据连接器（ENTSO-E 欧洲电力透明平台、EIA 等，仅导出脱敏聚合指标）
  ├─ SHA-256 校验和锁定的手动快照（IEA 氢能、GEM 电力/钢铁/水泥、Ember、巴西 EPE）
  └─ 隔离区数据源（Quarantine，再分发授权不明确的数据源物理隔离，绝不影响公开地图与评分）
          │
          ▼
Python 3.13 + DuckDB 空间数据管道 (`pipeline/src/grid_scope/`)
  ├─ 实体标准化、全球 ADM1 / NUTS-2 空间连接与跨源去重
  ├─ 覆盖率阈值门禁（拒绝低于阈值的残缺抓取，自动回退至最近一次成功快照）
  └─ 可解释评分计算与 2026–2031 低/中/高区域电力平衡建模
          │
          ▼
不可变快照产物 (`web/public/data/snapshots/<timestamp>/`)
          │
          ▼
Next.js 16 + React 19 + MapLibre GL Web 应用 (`web/`)
```

数据管道严格执行三项治理原则：

1. **四类受控接入路径：** 开放许可接口自动更新；需要密钥的接口（如 `ENTSOE_SECURITY_TOKEN`）仅在刷新运行时读取，从不在快照中暴露密钥或原始高频报文；受表单/验证码保护的权威发布包通过 `scripts/import-source-snapshot.sh` 进行 SHA-256 校验和锁定后导入；授权不清晰的数据源保留在 `data/quarantine/` 物理隔离区。
2. **诚实的缺失值表达：** 缺失数据统一存储为 `null` 并在界面上明确标记为 `Unavailable`，**绝不将缺失数据静默当作零值处理**。对于 11 个缺乏省/州级分拆依据的国家（共 25 个 ADM1 缺口），系统显式采用“仅国家级（Country-level-only）”模式：所有省界仍可点击查看，但绝不捏造省级需求份额或电力平衡排名。
3. **月度更新与故障回退：** 托管工作流于每月 1 日欧洲柏林时间 `04:00` 通过 GitHub Actions 自动检查更新（支持随时手动触发）。页面明确标注 **Monthly refreshed** 而非虚假的“实时（Live）”；一旦某个上游连接器超时或返回残缺数据，系统继续服务最近一次验证通过的快照。

![Wattlas 68 个受治理数据源族目录](/uploads/photos/wattlas/07-methodology-source-catalog.png)

---

## 技术栈与仓库结构

| 层级 | 采用技术 |
| --- | --- |
| **前端 Web 应用** | Next.js 16 (App Router)、React 19、TypeScript 5、MapLibre GL JS 5.24、Zod 4 |
| **数据管道与空间分析** | Python 3.13、DuckDB 1.5 (Spatial 扩展)、Rasterio、Shapely 2.1、Pydantic 2.11、HTTPX、NumPy、OpenPyXL |
| **自动化测试** | Pytest (`pipeline/tests`)、Vitest + React Testing Library (`web/tests`)、Playwright 端到端测试 (`web/tests/e2e`) |
| **构建与容器化部署** | Node 22 Alpine 多阶段 Dockerfile、Docker Compose、GitHub Actions 月度快照工作流 |

```text
wattlas/
├── data/
│   ├── curated/            # 精选行政边界、数据源注册表、需求权重与换算假设
│   ├── manual-sources/     # 经 SHA-256 校验锁定的受控数据包（Ember、GEM、巴西 EPE、非洲电网等）
│   └── quarantine/         # 待明确再分发许可的物理隔离区
├── pipeline/               # Python 3.13 + DuckDB 数据采集、验证与评分核心包
│   ├── src/grid_scope/     # 30+ 数据源连接器、空间归属、供需平衡模型与快照发布器
│   └── tests/              # 完整的数据管道单元测试与连接器契约测试
├── scripts/                # 快照刷新、手动数据源导入与全球边界构建脚本
├── web/                    # Next.js 16 + React 19 + MapLibre GL 交互式分析前端
│   ├── app/                # App Router 页面（主页 / 与方法论页 /methodology）
│   ├── components/         # 地球地图、图层控制栏、实体检查器、国家洞察与对比抽屉
│   ├── lib/                # 快照 Schema 校验、全文检索索引、CSV 导出与地图样式表达式
│   └── public/data/        # 已发布的不可变 GeoJSON/JSON 快照及 latest.json 指针
├── Dockerfile              # 多阶段生产环境容器镜像构建文件
└── docker-compose.yml      # 带健康检查的本地一键容器化部署配置
```

---

## 快速开始与本地部署

### 本地开发运行

环境要求：**Python 3.13+** 与 **Node.js 22+**。

```bash
# 1. 克隆仓库
git clone https://github.com/neozhu/wattlas.git
cd wattlas

# 2. 创建 Python 虚拟环境并安装数据管道与前端依赖
make setup

# 3. （可选）运行数据管道生成最新快照
make refresh

# 4. 启动 Next.js 开发服务器（访问 http://127.0.0.1:3000）
make dev
```

执行完整验证（包含 Python 管道测试、前端组件测试、生产构建与 Playwright E2E 测试）：

```bash
make verify
```

### Docker Compose 容器化部署

```bash
docker compose up -d --build
```

容器内 Web 服务监听 `3000` 端口（`docker-compose.yml` 默认映射至宿主机 `http://127.0.0.1:48734`），并内置自动 HTTP 健康检查。

---

## 相关链接

- **在线演示网站：** [https://wattlas.blazorserver.com/](https://wattlas.blazorserver.com/)
- **方法论与数据源目录：** [https://wattlas.blazorserver.com/methodology](https://wattlas.blazorserver.com/methodology)
- **GitHub 源码仓库：** [https://github.com/neozhu/wattlas](https://github.com/neozhu/wattlas)

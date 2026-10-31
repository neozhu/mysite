---
title: 'Wattlas - Global Energy Opportunity Radar'
image: /uploads/illustrations/cuate/wattlas-showcase.png
date: 2026-09-19 00:00:00
tags: ["GitHub", "Energy", "MapLibre", "Python", "Next.js", "Data Visualization"]
description: "Wattlas maps infrastructure growth and electricity-system signals through an interactive MapLibre globe, explainable regional scores, asset exploration, and governed source evidence."
summary: "Explore where data centres, water infrastructure, hydrogen, steel, and cement projects may reshape electricity demand and regional power balance from 2026 to 2031, powered by a governed Python + DuckDB snapshot pipeline and a Next.js + MapLibre interface."
seo:
  title: "Wattlas Energy Opportunity Radar | BlazorStudio"
  description: "Explore Wattlas for global infrastructure and electricity-demand signals from 2026 to 2031, with MapLibre maps, regional power-balance comparisons, asset evidence, and a governed Python data pipeline."
slug: "wattlas-global-energy-opportunity-radar"
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/wattlas" >}}
{{< button "Live Demo" "https://wattlas.blazorserver.com" >}}
{{< /brick_title >}}

**Wattlas** is an open-source global **Energy & Infrastructure Opportunity Radar** designed to answer a critical planning question: *Where will rapid growth in data centres, water infrastructure, hydrogen production, green steel, and cement create the largest electricity demand, infrastructure opportunity, or grid constraint between 2026 and 2031—and how will operating, planned, and retiring power generation change the regional balance?*

Rather than presenting a black-box forecast or opaque single-number score, Wattlas combines a physical-geography **MapLibre GL** globe with national boundaries, **3,229 global ADM1 states/provinces**, **334 European NUTS-2 regions**, **12,069 demand & network facilities**, and **154,211 power generators**. Every regional score, demand increment, and facility record exposes its underlying arithmetic, confidence level, coverage percentage, observation date, and primary source dossier.

![Wattlas Opportunity Radar Global Overview](/uploads/photos/wattlas/01-opportunity-radar-overview.png)

---

## Core Workspaces & Four Analytical Lenses

Wattlas organizes global energy intelligence into two top-level workspaces—**Opportunity Radar** and **Asset Explorer**—along with a dedicated **Country Intelligence** drill-down and a side-by-side **Region Comparison Drawer**.

### 1. Two Interactive Workspaces

| Workspace | Primary Question | Capabilities |
| --- | --- | --- |
| **Opportunity Radar** | *Where are the strongest 2026–2031 infrastructure opportunities or grid constraints?* | Ranks countries, ADM1 states/provinces, and European NUTS-2 regions across four analytical lenses with year-by-year timeline scrubbing (`2026`–`2031`), score sparklines, and driver breakdowns. |
| **Asset Explorer** | *What demand facilities and power plants operate or are planned here?* | Activates all five infrastructure layers simultaneously, summarizes assets by category and lifecycle status (`Operating`, `Under construction`, `Pre-construction`, `Announced`, `Retired`), filters generators by fuel technology and MW capacity range, and supports filtered CSV export. |

### 2. Four Explainable Decision Lenses

1. **01 · Infrastructure Demand (Primary Signal):** Identifies regions where announced and under-construction data centres, desalination/water plants, electrolysers, electric-arc-furnace steel mills, and cement facilities are driving new electricity demand.
2. **02 · Site Attractiveness:** Evaluates delivery conditions, existing infrastructure clustering, and regional suitability for new energy-intensive projects based on public evidence.
3. **03 · System Risk:** Highlights exposure to grid constraints, tight reserve margins, cooling/water stress, or rapid demand growth relative to existing system size.
4. **04 · Power Balance (ADM1 Regional Atlas):** Compares projected regional electricity demand (`GWh`) against dependable local generation (`GWh` and `MW`) across 3,185 published subnational energy series—distinguishing local generation gaps from confirmed shortages when cross-border or inter-regional transmission flows are unknown.

![Wattlas ADM1 Power Balance & Regional Energy Forecast](/uploads/photos/wattlas/02-power-balance-energy-forecast.png)

---

## Deep Inspection: Country Intelligence, Facility Dossiers & Evidence

### Country Intelligence Drill-Down

Selecting any country and opening **Country Intelligence** reconciles national electricity controls (such as Ember Yearly Electricity Data and ENTSO-E monthly observations) with subnational ADM1 Bottom-Up project pipelines:

- **Headline KPIs:** Annual electricity demand (`GWh`), local generation (`GWh`), demand–generation gap, and planned generation capacity (`MW`).
- **2026–2031 Annual Outlook:** Year-by-year comparison bars tracking projected demand versus local supply across the six-year horizon.
- **Infrastructure Pipeline & Generation Mix:** Counts of industrial demand projects, hydrogen network assets, data centres, water assets, and retired generators, alongside the percentage breakdown of solar, wind, hydro, nuclear, gas, coal, biomass, and geothermal capacity.

![Wattlas Country Intelligence Drill-Down](/uploads/photos/wattlas/03-country-intelligence.png)

### Asset Explorer & Facility-Level Inspection

In **Asset Explorer** mode, users can toggle and filter five distinct infrastructure layers:

- **Data centres (`4,247` facilities):** Merged from curated project announcements (`official_verified`) and OpenStreetMap (`community_mapped`) queried via QLever.
- **Water infrastructure (`101` assets):** Desalination, wastewater treatment, water reuse, and electrically material pumping/pipelines.
- **Industrial demand (`7,694` projects):** Hydrogen production, iron & steel plants, and cement & concrete facilities with explicit low/central/high electricity conversion ranges.
- **Hydrogen network (`27` context assets):** Pipelines, storage, blending, and terminals kept as spatial context without fabricating electrical load.
- **Power generators (`154,211` plants):** Utility-scale generators across 10 colour-coded technologies (`Solar`, `Wind`, `Hydro`, `Nuclear`, `Gas`, `Coal`, `Oil`, `Biomass`, `Geothermal`, `Other`) with an interactive `MW` capacity slider and lifecycle status filters.

Selecting any facility or power plant opens a compact **Project Summary Card** on the map alongside a structured right-hand **Facility Inspector** grouped into **Identity**, **Location**, **Operations**, **Energy**, and **Sources**, complete with direct links to GEM Wiki pages, Wikidata, OSM elements, or official project announcements.

![Wattlas Asset Explorer & Facility Dossier](/uploads/photos/wattlas/05-asset-explorer-layers.png)

### Transparent Evidence Dossiers

Clicking **Open evidence dossier** on any region reveals the exact public sources, observation dates, source tiers (`Tier A` official grid/statistical agencies, `Tier B` research trackers, `Tier C` community mapping), model versions, and value kinds (`observed`, `reported`, `estimated`, `inherited`, or `unavailable`) backing that region's score.

![Wattlas Regional Evidence Dossier](/uploads/photos/wattlas/04-evidence-dossier-and-drivers.png)

---

## Methodology & Governed Data Pipeline

### Versioned Industrial Demand Formulas

Wattlas only allows planned industrial projects to affect the `2026`–`2031` regional demand forecast when they pass strict verification gates (confirmed coordinates, valid ADM1 assignment, supported commissioning year, eligible lifecycle status, and technology-specific conversion support). Every eligible project dossier exposes its reproducible annual electricity demand formula (`low`, `central`, and `high` range):

- **Hydrogen Production:** $\text{Capacity}_{\text{MWel}} \times 8.76\text{ GWh/MW-yr} \times \text{Capacity Factor} \times \text{Grid Share}$
- **Iron & Steel (EAF / DRI):** $\text{Capacity}_{\text{kt/yr}} \times \text{Electricity Intensity}_{\text{MWh/t}}$
- **Cement & Clinker:** $\text{Capacity}_{\text{Mt/yr}} \times 1,000 \times \text{Electricity Intensity}_{\text{MWh/t}}$

![Wattlas Methodology & Industrial Demand Formulas](/uploads/photos/wattlas/06-methodology-overview.png)

### Monthly Governed Snapshot Architecture

The browser never queries external upstream APIs directly. Instead, a **Python 3.13 + DuckDB** pipeline ingests, canonicalizes, validates, and scores multi-source geospatial datasets, then atomically publishes an immutable JSON/GeoJSON snapshot read by the Next.js frontend (`web/public/data/latest.json`).

```
Upstream Public Sources (68 Source Families)
  ├─ Auto-Published Public APIs (UN Geodata, GISCO, Eurostat, QLever/OSM, WorldPop)
  ├─ Credentialed Runtime Connectors (ENTSO-E Transparency Platform, EIA)
  ├─ Checksum-Verified Manual Releases (IEA Hydrogen, GEM Power/Steel/Cement, Ember, EPE)
  └─ Quarantined Sources (physically isolated when redistribution rights are unclear)
          │
          ▼
Python 3.13 + DuckDB Spatial Pipeline (`pipeline/src/grid_scope/`)
  ├─ Canonicalization, spatial ADM1/NUTS-2 join & deduplication
  ├─ Coverage threshold gates (rejects partial pulls, retains last-known-good capture)
  └─ Explainable scoring & 2026–2031 low/central/high energy balance modelling
          │
          ▼
Immutable Snapshot Artifacts (`web/public/data/snapshots/<timestamp>/`)
          │
          ▼
Next.js 16 + React 19 + MapLibre GL Web Application (`web/`)
```

Key data-governance rules enforced by the pipeline:

1. **Four Governed Access Paths:** Public open-licensed endpoints publish automatically; credentialed APIs (like ENTSO-E) read tokens only inside the isolated refresh runtime and publish compact aggregates; protected datasets enter via SHA-256 checksum-verified manual snapshots (`scripts/import-source-snapshot.sh`); sources with ambiguous licensing remain in physical quarantine.
2. **Truthful Missingness:** Missing evidence is stored as `null` and explicitly labelled `Unavailable`—never silently coerced to `0`. For the 11 countries (25 ADM1 gaps) where subnational disaggregation is unsupported, Wattlas operates in an explicit **country-level-only mode** rather than fabricating regional shares.
3. **Last-Known-Good Resilience:** Automated refreshes run monthly at `04:00 Europe/Berlin` via GitHub Actions (with manual dispatch support). If any upstream connector fails or falls below coverage thresholds, the pipeline preserves the previous validated capture so a broken upstream feed never erases the published map.

![Wattlas 68 Governed Source Families Catalog](/uploads/photos/wattlas/07-methodology-source-catalog.png)

---

## Technology Stack & Repository Structure

| Layer | Technologies |
| --- | --- |
| **Frontend Web App** | Next.js 16 (App Router), React 19, TypeScript 5, MapLibre GL JS 5.24, Zod 4 |
| **Data Pipeline** | Python 3.13, DuckDB 1.5 (Spatial), Rasterio, Shapely 2.1, Pydantic 2.11, HTTPX, NumPy, OpenPyXL |
| **Quality & Testing** | Pytest (`pipeline/tests`), Vitest + React Testing Library (`web/tests`), Playwright E2E (`web/tests/e2e`) |
| **Deployment** | Multi-stage Node 22 Alpine Dockerfile, Docker Compose, GitHub Actions monthly snapshot workflow |

```text
wattlas/
├── data/
│   ├── curated/            # Curated boundaries, source catalog, demand weights & assumptions
│   ├── manual-sources/     # Checksum-governed manual releases (Ember, GEM, EPE, Africa Grid)
│   └── quarantine/         # Physically isolated sources pending licence clearance
├── pipeline/               # Python 3.13 + DuckDB ingestion, validation & scoring package
│   ├── src/grid_scope/     # Connectors, spatial joins, demand/power-balance models & publisher
│   └── tests/              # Comprehensive unit & connector test suite
├── scripts/                # Snapshot refresh, manual import & boundary build scripts
├── web/                    # Next.js 16 + React 19 + MapLibre GL analytical web application
│   ├── app/                # App Router pages (/ and /methodology)
│   ├── components/         # Globe map, LayerRail, EntityInspector, CountryIntelligence, drawers
│   ├── lib/                # Snapshot schemas, search index, CSV export & map expressions
│   └── public/data/        # Immutable published GeoJSON/JSON snapshots & latest.json pointer
├── Dockerfile              # Multi-stage production container build
└── docker-compose.yml      # One-command local container deployment with healthcheck
```

---

## Quick Start & Deployment

### Run Locally

Requirements: **Python 3.13+** and **Node.js 22+**.

```bash
# 1. Clone the repository
git clone https://github.com/neozhu/wattlas.git
cd wattlas

# 2. Create Python virtualenv, install pipeline & web dependencies
make setup

# 3. (Optional) Refresh data snapshot from upstream/curated sources
make refresh

# 4. Start the Next.js development server at http://127.0.0.1:3000
make dev
```

To run the full verification suite (Python unit tests, Vitest component tests, production build, and Playwright E2E checks):

```bash
make verify
```

### Run with Docker Compose

```bash
docker compose up -d --build
```

The containerized web application listens on port `3000` inside the container (mapped to `http://127.0.0.1:48734` by default in `docker-compose.yml`) with an automated HTTP healthcheck.

---

## Links

- **Live Demo:** [https://wattlas.blazorserver.com/](https://wattlas.blazorserver.com/)
- **Methodology & Source Library:** [https://wattlas.blazorserver.com/methodology](https://wattlas.blazorserver.com/methodology)
- **GitHub Repository:** [https://github.com/neozhu/wattlas](https://github.com/neozhu/wattlas)

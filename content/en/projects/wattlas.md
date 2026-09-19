---
title: 'Wattlas - Global Energy Opportunity Radar'
image: /uploads/illustrations/cuate/wattlas-showcase.png
date: 2026-09-19 00:00:00
tags:
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/wattlas" >}}
{{< button "Live Demo" "https://wattlas.blazorserver.com" >}}
{{< /brick_title >}}

Wattlas is an open-source global opportunity radar for exploring where growth in data centres, water infrastructure, hydrogen, steel, and cement may create new electricity demand, opportunity, or constraint between 2026 and 2031. It also examines how operating, planned, and retiring generation could change the regional balance.

The application combines a MapLibre globe with national and regional boundaries, infrastructure assets, explainable scores, country intelligence, and evidence dossiers. Its goal is not to present a black-box forecast, but to make the assumptions, provenance, and limitations behind each signal visible.

## What Wattlas Provides

- **Global opportunity map:** Explore countries, states, provinces, and European NUTS-2 regions on an interactive globe.
- **Infrastructure demand lens:** Examine forward-looking demand signals from data centres, water, hydrogen, steel, and cement projects.
- **Multiple decision lenses:** Compare infrastructure demand, site attractiveness, system risk, and power-balance indicators.
- **Asset Explorer:** Inspect facilities, generators, grid context, lifecycle status, and available source evidence.
- **Country intelligence:** Drill into national controls and regional comparisons without inventing unavailable local estimates.
- **Explainable evidence:** Review source status, provenance, methodology, and project dossiers behind published signals.

## Governed Data Pipeline

Wattlas deliberately separates data collection from the browser. A Python pipeline retrieves permitted public sources, validates and scores records, and atomically publishes an immutable JSON and GeoJSON snapshot. The web application reads the latest successful snapshot, so a temporary connector failure cannot erase the last useful map.

Sources follow explicit access and licensing paths. Public reusable endpoints may publish automatically, credentialed sources run only when configured, protected releases enter through checksum-verified snapshots, and sources with unclear redistribution rights remain quarantined. Missing evidence is represented as missing—not silently converted to zero.

## Technology

The project combines a **Python data pipeline** with a modern **Node.js web application** and **MapLibre** geospatial visualization. Automated validation, reproducible snapshots, Docker support, and documented methodology make the system suitable for transparent analytical work rather than opaque dashboard scoring.

Wattlas is open source and intended as an evidence-led platform for understanding where infrastructure growth and electricity systems may intersect.

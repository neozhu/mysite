---
title: "Fabric Quotation CPQ for Paper Machine Fabric"
description: "A CPQ system for configuring, pricing, and quoting paper machine fabric, with engineering recommendations and approval workflows"
date: 2026-09-19 00:00:00
image: /uploads/illustrations/cuate/fabric-quotation-showcase.png
tags:
  - CPQ
  - Paper Machine Fabric
  - Quotation
  - Workflow
---

**A CPQ system for configuring and quoting paper machine fabric**

> Connect customer and machine master data with product selection, engineering recommendations, pricing, discounts, and traceable quotation versions.

---

## Overview

Fabric Quotation is a web-based CPQ (Configure, Price, Quote) system for configuring paper machine fabric and preparing customer quotations. It brings product selection, pricing, commercial work, and application engineering into one workflow while keeping the underlying product structure clear and maintainable.

The current foundation centers on quotation headers, quotation lines, product selection, version history, and configurable business attributes. The same architecture is designed to support later agreement, clause, and contract-related processes without duplicating the metadata model.

## Business Structure

The product catalog follows the real operating hierarchy:

```text
Customer
└── Mill
    └── Paper Machine
        └── Position
            └── Product
```

Each product is associated with a machine position and identified by a unique MMP number. Product Line is used as a practical grouping dimension so users can navigate the catalog by mill, machine, line, position, and product.

## Quotation Workflow

Each quotation record represents one version. Multiple versions share the same quotation number, preserving a clear history when commercial or technical details change.

A quotation line links a selected product with quantity, design information, pricing snapshots, requested discounts, approved discounts, remarks, and its current workflow state. Header-level information such as customer, seller, dates, language, and currency is shared across the quotation.

The workflow is designed around these stages:

1. Create a quotation and select products.
2. Submit quotation lines for application-engineering review.
3. Record the recommended product configuration and design parameters.
4. Calculate and snapshot the standard price.
5. Request and review discounts when required.
6. Preserve approval actions and status changes in workflow history.

## Dynamic Business Fields

Different paper machine fabric products and application scenarios require different technical parameters. Fabric Quotation uses a reusable dynamic-field framework instead of adding a new database table for every product family.

Administrators can define field templates, sections, reusable field definitions, validation rules, and picklists. Runtime values remain attached to the relevant business entity, while inactive definitions preserve historical quotation data.

## Technical Architecture

The application is built with **.NET 10**, **Blazor Server**, **MudBlazor**, and **Clean Architecture**. Domain, Application, Infrastructure, and UI concerns are separated, with Mediator-based use cases, FluentValidation, Mapster, Entity Framework Core, and multi-database support for SQL Server and PostgreSQL.

Docker deployment and automated tests support repeatable development and delivery. The focused domain model and reusable field framework provide a strong base for extending pricing, approvals, document generation, and contract workflows.

The project uses AI-assisted development to turn business requirements into clear, iterative tasks, helping updates to quotation rules, product parameters, and approval workflows move quickly from request to delivery.

## Live Demo

[fabric-quotation.blazorserver.com](https://fabric-quotation.blazorserver.com/)

## Source Code

The project is available on GitHub: **[neozhu/fabric-quotation](https://github.com/neozhu/fabric-quotation)**.

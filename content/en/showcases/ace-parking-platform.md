---
title: Ace Parking Platform
image: /uploads/photos/ace-parking-platform.png
date: 2025-10-26 00:00:00
tags:
  - Parking
  - Blazor
  - MultiTenant
---

# Ace Parking — Blazor Server

Clean Architecture, CQRS-driven parking management platform built with .NET 9 and Blazor Server.

## Overview

Ace Parking is a multi-tenant parking management system. It provides administration and operations for car parks, gates, zones, space groups, memberships, vehicles, charging rules, holidays, auditing, and system logs — with real-time updates, background jobs, localization, and strong observability.

## Key Features

- Multi-tenant domain model (Tenants, Tenant Users)
- Entities: Carparks, Zones, Gates, SpaceGroups, Members, Vehicles, Charges, Holidays
- Memberships and rentals with vehicle assignments
- Real-time UI updates via SignalR
- Background processing with Hangfire (dashboard at `/jobs`)
- Robust logging with Serilog (file/console + optional DB/Seq sinks)
- CQRS with MediatR, validation with FluentValidation
- Caching with FusionCache
- Localization with resource files (cookie-based culture selection)
- PDF generation (QuestPDF) and Excel exports (ClosedXML)
- Image processing (ImageSharp)
- AI spec-driven development workflows via OpenSpec (reviewable proposals, deltas, tasks)

## Architecture

The project follows Clean Architecture and vertical feature slices:

- `Domain` — entities, value objects, domain events, enums
- `Application` — CQRS handlers, validators, pipeline behaviors, feature services
- `Infrastructure` — EF Core, Identity, persistence, integrations, logging
- `Server.UI` — Blazor Server UI, DI wiring, middleware, endpoints

Cross-cutting patterns include:

- CQRS via MediatR with behaviors for validation, performance, caching, and cache invalidation
- EF Core with provider options: SQL Server, PostgreSQL, SQLite
- ASP.NET Core Identity with Data Protection stored in the database
- Serilog logging with enrichers (user info, IP, agent) and rolling file logs

## Tech Stack

- .NET 9 / ASP.NET Core Blazor Server (C#)
- Entity Framework Core 9 (SQL Server, PostgreSQL, SQLite)
- MediatR, FluentValidation, Ardalis.Specification
- FusionCache, AutoMapper
- Serilog (file, console, MSSQL, PostgreSQL, SQLite, Seq)
- Hangfire (in-memory by default)
- SignalR, MudBlazor UI
- QuestPDF, ImageSharp
- MailKit/MimeKit (SMTP), Minio SDK (object storage)

 ## Demo 

- **Live Demo:** [aceparking.blazorserver.com](https://aceparking.blazorserver.com/)

[![View Ace Parking Demo](/uploads/photos/aceparking/01.png)](/uploads/photos/aceparking/01.png)

{{< gallery dir="/uploads/gallery/aceparking" >}}



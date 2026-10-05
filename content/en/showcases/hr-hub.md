---
title: "HR HUB: Connect Staffing, Attendance and Billing"
slug: hr-hub-integrated-hr-cloud-platform
description: "A workforce collaboration platform for employers, staffing providers and HR teams, connecting requests, assignments, attendance, approved hours and monthly billing with Docker deployment."
summary: "HR HUB connects employers, staffing providers and HR teams in one workflow, giving assignments a clear record, approved hours a reliable basis and monthly reconciliation a traceable history."
seo:
  description: "Explore HR HUB for outsourced workforce operations: staffing, attendance and monthly billing, with a .NET 10 layered architecture and Docker deployment using Traefik, CrowdSec and MinIO."
date: 2025-11-18 00:00:00
lastmod: 2026-10-05 00:00:00
tags: ["Blazor", "NET10", "Docker", "Human Resources", "Staffing", "Attendance Management"]
image: /uploads/photos/hrhub/hrhub-marketing.png
---

Bring employers, staffing providers and HR teams into one platform, connecting workforce requests, employee assignments, attendance records and monthly billing.

Outsourced workforce operations depend on clear handoffs: who requested workers, who assigned them, who approved their hours and how charges were calculated. HR HUB gives these handoffs a recorded workflow, helping teams reduce duplicate entry and repeated checks at month end.

{{< button "Explore the live demo" "https://hrcloud.blazorserver.com/" >}}
{{< button2 "Discuss your workforce needs" "/contact/" >}}

## Give every handoff a shared record

When employee lists, clock-in records and settlement spreadsheets live in separate systems, teams spend time establishing whether they describe the same assignment. HR HUB organizes work around connected organization, employee, assignment and attendance records, so each participant can continue from information already captured.

- **Employers: manage demand and actual staffing.** Submit workforce requests, confirm assignments, review attendance corrections and approve the hours used for billing.
- **Staffing providers: coordinate workers and service delivery.** Maintain employee records, respond to requests, arrange assignments and submit corrections for missed punches.
- **HR teams: maintain rules and oversee operations.** Manage organizations, job types, shifts, devices and demand approvals, using billing and audit records to review the process.

The platform serves labor outsourcing, staffing and operations involving multiple organizations that need to agree on work performed. It connects three practical questions: who was assigned, how long they worked and which rates apply.

## Six steps from workforce demand to monthly billing

1. **Request workers.** The employer specifies roles, headcount and dates; HR reviews the request.
2. **Arrange assignments.** The provider selects employees, and the employer confirms staffing arrangements and shifts.
3. **Connect devices.** Device interfaces exchange personnel commands and receive punch photos and recognition records.
4. **Calculate hours.** The application matches confirmed assignments and shift rules to compile daily hours and surface exceptions.
5. **Review and confirm.** Providers submit attendance corrections; employers review them and confirm daily attendance for billing.
6. **Create billing statements.** Confirmed daily attendance creates or updates monthly statements using recorded hours and rates, giving all parties a basis for reconciliation.

**Attendance confirmation connects operational records to billing.** Later device punches do not overwrite confirmed daily attendance, so reconciliation can proceed from the agreed records.

## Product walkthrough: workforce, hours and devices

The screenshots below show the application's Chinese-language interface. Select an image to view it at full size.

### Operational overview

The home page summarizes staffing providers, employers, confirmed attendance personnel and registered devices, alongside device availability. Administrators can review organization and device status in one place.

<figure>
  <a href="/uploads/photos/hrhub/1.png"><img src="/uploads/photos/hrhub/1.png" alt="HR HUB dashboard showing organization counts, confirmed attendance personnel and device availability" width="3837" height="1033" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>Operational overview: organization information and device status in one view.</figcaption>
</figure>

### Daily attendance and calculated hours

Review the employee, employer, shift, role, punch times, work hours and rates in the same record. Filtering and Excel export support routine checks.

<figure>
  <a href="/uploads/photos/hrhub/2.png"><img src="/uploads/photos/hrhub/2.png" alt="Daily attendance list with employees, shifts, punch times, calculated work hours and rates" width="3835" height="1261" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>Daily attendance: keep the business context behind calculated hours.</figcaption>
</figure>

### Hours confirmation and billing

Employers review daily attendance before confirming it for monthly billing. Providers and HR teams can use these confirmed records for reconciliation, reducing the work of rebuilding totals from raw punches.

<figure>
  <a href="/uploads/photos/hrhub/5.png"><img src="/uploads/photos/hrhub/5.png" alt="Hours confirmation page explaining that confirmed attendance is locked and included in monthly billing" width="3835" height="1146" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>Hours confirmation: confirmed daily attendance becomes the basis for monthly statements.</figcaption>
</figure>

### Attendance device management

Device records capture the employer, serial number, department, installation location and availability. Interface logs and raw attendance records help administrators investigate personnel synchronization and punch ingestion issues.

<figure>
  <a href="/uploads/photos/hrhub/11.png"><img src="/uploads/photos/hrhub/11.png" alt="Attendance device management listing serial numbers, installation locations and online status" width="3835" height="1135" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>Device management: an entry point for field maintenance and integration troubleshooting.</figcaption>
</figure>

Employee forms can also call ID-card OCR and face-extraction services to assist data entry. Organization, shift, job type, accommodation, document and employment-change modules support related HR operations.

## System architecture: a layered monolith organized around use cases

HR HUB uses **.NET 10, ASP.NET Core, Blazor Server and MudBlazor**. One ASP.NET Core host runs the interactive UI, attendance-device HTTP endpoints, SignalR hubs and Hangfire worker. The projects separate responsibilities using Clean Architecture.

<figure>
  <a href="/uploads/photos/hrhub/architecture.png"><img src="/uploads/photos/hrhub/architecture.png" alt="HR HUB architecture: browsers and devices connect to Server.UI, with Application and Infrastructure linking domain models, a database, object storage and email" width="2048" height="1320" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>System architecture, reproduced from the project README. Open the full image to inspect responsibilities and connections.</figcaption>
</figure>

- **Server.UI: interaction and ingestion.** Hosts Blazor pages, account flows and device endpoints, with SignalR supporting browser interactions.
- **Application: business use cases.** MediatR commands and queries organize features. FluentValidation and pipeline behaviors provide shared validation, performance measurement, query caching and command-driven cache invalidation.
- **Domain: business models.** Defines employees, organizations, assignments, shifts, attendance, billing and related domain events.
- **Infrastructure: persistence and integrations.** Implements EF Core data access, Identity, auditing, soft deletion, MinIO uploads, SMTP email and Excel/PDF generation.
- **Migrators: database migrations.** Supports SQLite, SQL Server and PostgreSQL. SQLite is the current checked-in default.

This structure gives attendance ingestion, hours confirmation and billing a consistent application workflow, while storage and email integrations sit behind explicit service interfaces.

### Access, data and background processing

ASP.NET Core Identity provides cookie authentication, roles and permission claims. Tenant-aware identity and implemented organization filters use a shared database, with business queries applying role and organization scope where implemented.

Devices upload photos and punches through `/record/picture` and `/record/notice`, then poll and acknowledge personnel commands through `/person/cmd` and `/person/result`. The application matches a known device and a confirmed employee assignment before calculating daily hours against the applicable shift.

FusionCache provides in-process caching for eligible queries, while Hangfire runs attendance checks. Both currently use memory storage. Serilog logs, the `/health` endpoint and the authorized `/jobs` dashboard support operational monitoring.

## Docker deployment: connect the public entry point to field operations

HR HUB can be delivered with Docker on an organization's own server or cloud host. The README topology illustrates how the application, recognition services, object storage and public entry point work together; service placement can follow the target network and operational requirements.

<figure>
  <a href="/uploads/photos/hrhub/deployment.png"><img src="/uploads/photos/hrhub/deployment.png" alt="Docker topology: browsers and attendance terminals reach HR HUB through Traefik and CrowdSec, with face processing, ID-card OCR, MinIO, database, SMTP and MaxMind integrations" width="2048" height="1320" loading="lazy" style="width:100%;height:auto"></a>
  <figcaption>Deployment topology: an illustrative single Docker host with at least eight attendance terminals. The device count represents the example deployment.</figcaption>
</figure>

### Public access and entry-point protection

Browsers and attendance terminals reach the application through **Traefik**, which terminates HTTPS and forwards HTTP requests and Blazor SignalR/WebSocket connections. **CrowdSec** analyzes access logs and supplies remediation decisions through its private LAPI; Traefik's bouncer middleware enforces those decisions at the entry point.

The application and MinIO file access can use separate hostnames. Deployment includes DNS records pointing to the server, Traefik host routing and ACME certificate renewal. HTTP-01 validation requires correct DNS resolution and reachable ports 80 and 443.

### Service connections and persistence

- **The HR HUB container** hosts the UI, device endpoints and background worker, and connects to the selected relational database.
- **Face-processing and PaddleOCR containers** provide face extraction, image compression and ID-card field extraction over the Docker service network.
- **MinIO** stores employee images and attachments, with a separate HTTPS hostname for S3/media access. Verify returned image URLs and the face service's storage configuration during integration.
- **External SMTP and MaxMind services** provide email delivery and geographic lookup of login IP addresses respectively.

Production deployment needs persistent storage for the application database, MinIO objects, Traefik certificate state and CrowdSec state, together with a backup and restore procedure. If background jobs must survive container restarts, configure persistent Hangfire storage as well.

**The repository's Compose files configure HR HUB and its integration settings; the proxy, security, recognition and storage services in the full topology require accompanying deployment.** GitHub Actions automates Docker image builds and pushes. Server rollout follows the chosen environment's release process.

## Validate one workforce scenario first

A pilot can start with one employer, one staffing provider, a small set of roles and shifts, and a few attendance devices. Run the workflow through demand approval, assignment, punch ingestion, corrections, hours confirmation and monthly reconciliation.

Business teams verify shifts, rates and approval responsibilities. IT teams confirm device protocols, domains, networking, database selection, file storage and backups. Use a representative operating cycle to check that records connect correctly before expanding the rollout.

{{< button "Explore the live demo" "https://hrcloud.blazorserver.com/" >}}
{{< button2 "Discuss a pilot and deployment" "/contact/" >}}

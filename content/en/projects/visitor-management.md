---
title: 'Visitor Management System'
image: /uploads/illustrations/cuate/visitor-management-showcase.png
date: 2026-10-31 00:00:00
tags: ["GitHub", "Visitor Management", "Access Control", "Blazor Server", "React", ".NET"]
description: "An open-source enterprise Visitor Management System built with .NET 10 (Blazor Server) and React 19, featuring mobile pre-registration, dual-track business and area approvals, reusable visitor and vehicle directories, and per-person gate entry/exit logging."
summary: "Digitize campus and factory reception with scenario-based mobile pre-registration, parallel host and area approvals, reusable participant and vehicle master profiles, dynamic form templates, and real-time gate check-in and check-out tracking."
seo:
  title: "Open-Source Visitor Management System (.NET & React) | BlazorStudio"
  description: "Explore this open-source Visitor Management System built with .NET 10 Blazor Server and React 19: pre-registration, business and area approvals, visitor/vehicle profiles, and gate check-in/out."
slug: "visitor-management-system"
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/visitor-training-management" >}}
{{< button "Admin Demo" "https://visitor-training.blazorserver.com/" >}}
{{< button "Mobile Visitor Demo" "https://visitor-training-client.blazorserver.com/" >}}
{{< /brick_title >}}

**Modernize enterprise reception from pre-arrival booking to gate departure.**

This open-source **Visitor Management System (VMS)** streamlines how factories, R&D campuses, logistics parks, and corporate offices manage external visitors, delivery vehicles, and contractors. Instead of relying on paper visitor logbooks at the guardhouse or scattered approval emails, the system connects **mobile pre-registration, host and area approvals, visitor and vehicle directories, pre-entry readiness, and gate check-in/out logs** in one unified platform.

The architecture pairs a lightweight **React 19 mobile visitor portal** for external guests with a comprehensive **CleanBlazorServerPro (.NET 10 + Blazor Server + MudBlazor)** administration backend for receptionists, business sponsors, area managers, and gate security.

![Enterprise Visitor Management System: Connected flow from pre-registration and approvals to gate access](/uploads/photos/visitor-training/visitsafe-cover.png)

---

## Why Replace Paper Logbooks & Disconnected Workflows?

Traditional visitor reception suffers from recurring operational blind spots: security guards manually transcribe names at the gate, hosts are interrupted by phone calls to confirm appointments, restricted zones lack independent sign-off, and managers cannot easily tell how many external visitors or logistics trucks are still on site.

| Core Reception Requirement | How the Visitor Management System Solves It |
| --- | --- |
| **Centralized Visit Dossier** | Groups the appointment schedule, host, primary visitor, accompanying companions (`Participant`), vehicles (`Vehicle`), target areas (`VisitArea`), and custom fields under a single `VisitApplication` |
| **Scenario-Based Registration** | Supports **General Visitors, Logistics Vehicles, and Contractors** out of the box, with extensible `VisitType` definitions and dynamic form field-group templates (`FieldGroupDefinition`) |
| **Parallel Business & Area Approvals** | Generates independent **Business Approval** tasks (for the host/department) and **Area Approval** tasks (for each requested destination zone), preserving separate decisions and audit timestamps |
| **Reusable Visitor & Vehicle Profiles** | Automatically deduplicates returning visitors by normalized `Name + Phone` and vehicles by license plate while preserving an immutable snapshot of the data submitted for each individual visit |
| **Per-Person Gate Check-In & Check-Out** | Allows gate staff to verify eligibility and record entry/exit per individual and vehicle—so ready visitors in a group can enter immediately without waiting for delayed companions |
| **Optional Pre-Entry Safety Briefing** | For high-security or industrial zones, the workflow can optionally attach area-specific safety notices and pre-entry readiness checks before gate check-in |

---

## End-to-End Visitor Lifecycle & State Machine

Every visit application progresses through a clearly defined lifecycle (`Draft` → `Submitted` → `Approved` / `Rejected` → `Active` → `Completed`):

```
External Visitor / Driver / Contractor (or Internal Delegated Receptionist)
  │
  ├─ 1. Select VisitType (General Visitor / Logistics Vehicle / Contractor)
  ├─ 2. Acknowledge Visitor Notice & Submit 3-Step Booking (`Submitted`)
  │
  ├──────────────────────────────────────┬──────────────────────────────────────┐
  ▼                                      ▼                                      ▼
[Business Approval Task]        [Area Approval Tasks (1..N)]       [Pre-Arrival Preparation]
Host / Business Sponsor         Each Selected VisitArea Owner      Visitor Notice & Area Requirements
  │                                      │                                      │
  └──────────────────┬───────────────────┘                                      │
                     ▼                                                          │
          Application `Approved`                                    Participant `Entry Ready`
          (Any rejection -> `Rejected`)                                         │
                     │                                                          │
                     └────────────────────────────┬─────────────────────────────┘
                                                  ▼
                              Gate Reception Desk (Per-Person Check-In)
                         [Verify Appointment Date, Approvals & Identity]
                                                  │
                                                  ▼
                         First Visitor Check-In -> Application `Active`
                                                  │
                                                  ▼
                    All Entered Visitors & Vehicles Check Out -> `Completed`
```

---

## Mobile Visitor Portal (`React 19 + Ant Design Mobile`)

External guests interact with a responsive mobile web portal ([visitor-training-client.blazorserver.com](https://visitor-training-client.blazorserver.com/)) built with **React 19, TypeScript, Vite, Ant Design Mobile, and Tailwind CSS**, featuring instant **English / Chinese** language switching.

<style>
.vt-mobile-grid {display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; max-width: 44rem; margin: 2rem auto;}
.vt-mobile-grid figure {margin: 0;}
.vt-mobile-grid img {width: 100%; height: auto; border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 0.75rem; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);}
.vt-mobile-grid figcaption {margin-top: 0.6rem; font-size: 0.85rem; line-height: 1.6; opacity: 0.85; text-align: center;}
@media (max-width: 640px) {.vt-mobile-grid {grid-template-columns: 1fr; max-width: 22rem;}}
</style>

### 1. Scenario-Based Entry Cards & Bilingual UI

The mobile home screen presents dedicated registration entry points for **Visitors** (business meetings and tours), **Logistics** (delivery and pickup vehicles), and **Contractors** (on-site maintenance and construction), alongside a lookup portal to check booking status.

<div class="vt-mobile-grid">
  <figure>
    <a href="/uploads/photos/visitor-training/client-02-home-en.png" target="_blank" rel="noopener"><img src="/uploads/photos/visitor-training/client-02-home-en.png" loading="lazy" alt="Mobile Visitor Portal English Home"></a>
    <figcaption>English Mobile Portal: Scenario-based entry cards for Visitors, Logistics, and Contractors</figcaption>
  </figure>
  <figure>
    <a href="/uploads/photos/visitor-training/client-01-home-cn.png" target="_blank" rel="noopener"><img src="/uploads/photos/visitor-training/client-01-home-cn.png" loading="lazy" alt="Mobile Visitor Portal Chinese Home"></a>
    <figcaption>Chinese Mobile Portal: Built-in bilingual toggle for local and international guests</figcaption>
  </figure>
</div>

### 2. Visitor Notice & 3-Step Guided Pre-Registration

Selecting a visit type prompts the guest to read and accept the applicable **Visitor Notice**, followed by a three-step booking wizard (**1. Details → 2. Visit Areas → 3. Review & Submit**) that captures the host, appointment date/time slot, dynamic custom fields, accompanying visitors, vehicle plates, and destination areas.

<div class="vt-mobile-grid">
  <figure>
    <a href="/uploads/photos/visitor-training/client-04-visitor-notice-cn.png" target="_blank" rel="noopener"><img src="/uploads/photos/visitor-training/client-04-visitor-notice-cn.png" loading="lazy" alt="Visitor Notice Modal"></a>
    <figcaption>Pre-Registration Visitor Notice: Mandatory acknowledgement of site access rules</figcaption>
  </figure>
  <figure>
    <a href="/uploads/photos/visitor-training/client-05-visitor-registration-cn.png" target="_blank" rel="noopener"><img src="/uploads/photos/visitor-training/client-05-visitor-registration-cn.png" loading="lazy" alt="3-Step Visitor Pre-Registration Form"></a>
    <figcaption>3-Step Pre-Registration Wizard: Collects host, schedule, visitor roster, and vehicles</figcaption>
  </figure>
</div>

---

## Enterprise Administration Backend (`CleanBlazorServerPro`)

The internal management portal ([visitor-training.blazorserver.com](https://visitor-training.blazorserver.com/)) is built on **CleanBlazorServerPro (.NET 10 + Blazor Server + MudBlazor)** and organizes facility reception into dedicated operational workspaces:

### 1. Real-Time Operations Dashboard

Monitors **Scheduled Visits, Expected Today, People on Site, Pending Approvals, and Vehicles on Site**, with interactive filters by visit area and time range (`Today`, `7D`, `30D`, `90D`), 30-day attendance trend charts, approval status breakdowns, visit type distributions, and popular destination zones.

[![Visitor Management Operations Dashboard](/uploads/photos/visitor-training/admin-01-dashboard.png)](/uploads/photos/visitor-training/admin-01-dashboard.png)

### 2. Visit Applications & Delegated Booking Workspace

Provides a centralized table of all visit applications (`VA-21` to `VA-27`), showing the visit type, status, scheduled date and slot, host, visitor count, vehicle plates, destination areas, **business/area approval progress**, and **check-in/out counts**. Receptionists can also create bookings on behalf of VIP guests or external teams.

[![Visit Applications Management Workspace](/uploads/photos/visitor-training/admin-02-visit-applications.png)](/uploads/photos/visitor-training/admin-02-visit-applications.png)

### 3. Parallel Business & Area Approval Queues

Routes **Business Approval** tasks to hosts and **Area Approval** tasks to zone owners (Production Area, R&D Center, Warehouse & Logistics, Office Building, Utility Rooms). Each task is approved or rejected independently with full audit trails.

[![Visit Approval Tasks Workspace](/uploads/photos/visitor-training/admin-03-approval-tasks.png)](/uploads/photos/visitor-training/admin-03-approval-tasks.png)

### 4. Gate Entry / Exit Registration Desk

Gives security personnel a streamlined check-in/out console with live counters for today's appointments, people on site, visitors awaiting entry, and vehicles on site. Guards can search across appointments by name, phone, ID, vehicle plate, or booking code and log each visitor's exact entry and exit times.

[![Gate Entry and Exit Registration Desk](/uploads/photos/visitor-training/admin-04-gate-reception.png)](/uploads/photos/visitor-training/admin-04-gate-reception.png)

### 5. Reusable Participant & Vehicle Master Profiles

Maintains deduplicated master records for external **Participants** and **Vehicles**, enabling fast lookup of returning visitors, contractors, and logistics trucks along with their complete historical visit logs.

[![Participants Directory](/uploads/photos/visitor-training/admin-05-participants.png)](/uploads/photos/visitor-training/admin-05-participants.png)

[![Vehicles Directory](/uploads/photos/visitor-training/admin-06-vehicles.png)](/uploads/photos/visitor-training/admin-06-vehicles.png)

---

## Architecture, Tech Stack & Docker Deployment

| Layer | Technology Stack |
| --- | --- |
| **Mobile Visitor Frontend** | React 19, TypeScript, Vite, Ant Design Mobile, Tailwind CSS (`ghcr.io/neozhu/visit-training-management-web:latest`) |
| **Admin Backend & UI** | .NET 10, ASP.NET Core, Blazor Server, MudBlazor, Clean Architecture (`ghcr.io/neozhu/visit-training-management-backend:latest`) |
| **API & Application Layer** | ASP.NET Minimal APIs (with strong `ETag` / `If-Match` optimistic concurrency), CQRS, AutoMapper, FluentValidation, EF Core |
| **Database & Infrastructure** | SQL Server 2025, Role-Based Access Control (RBAC), Docker Compose (`docker-compose.ghcr.yml`), GitHub Container Registry (GHCR) |

### Quick Start with Docker Compose

Both the React visitor frontend and the .NET administration backend are published as container images on GitHub Container Registry (`GHCR`). The web container injects `BACKEND_BASE_URL` into `/runtime-config.js` at startup so it can connect to any backend endpoint without rebuilding:

```bash
# Launch SQL Server 2025, .NET 10 Admin Backend (port 8080), and React Mobile Portal (port 5173)
docker compose -f docker-compose.ghcr.yml up -d
```

---

## Demos & Repository Links

- **Management Platform Demo:** [visitor-training.blazorserver.com](https://visitor-training.blazorserver.com/)
- **Mobile Visitor Portal Demo:** [visitor-training-client.blazorserver.com](https://visitor-training-client.blazorserver.com/)
- **Backend & Admin Source Repository:** [github.com/neozhu/visitor-training-management](https://github.com/neozhu/visitor-training-management)
- **Mobile Client Source Repository:** [github.com/neozhu/visitor-traning-client](https://github.com/neozhu/visitor-traning-client)

## License

This project is released under a permissive open-source license. See the GitHub repository for full license details.

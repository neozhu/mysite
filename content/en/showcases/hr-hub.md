---
title: "HR HUB - Integrated HR Cloud Platform"
description: "One-Stop Labor Outsourcing HR Service Platform"
date: 2025-11-18 00:00:00
tags: ["Blazor", "NET10", "Docker", "Human Resources", "Attendance Management"]
image: /uploads/photos/hrhub/1.png
---



**One-Stop Labor Outsourcing HR Service Platform**

> Enabling collaboration between employers, suppliers, and HR management with integrated attendance, work hours, and billing in a seamless online closed loop.

---

## 1. Platform Highlights

* **Three-Party Collaboration**: Unified reconciliation between employers, suppliers, and HR
* **Full Digital Process**: HR demand → Dispatch → Attendance → Work hour confirmation → Billing → Payroll
* **Automated Face Recognition Attendance**: Real-time identification with original record retention
* **Standardized Exception Recording & Approval Process**
* **Transparent & Traceable Billing**: Every expense can be traced back to attendance and employees
* **APP + Cloud Management Portal**

---
## Demo

- Online Demo: **[hrcloud.blazorserver.com](https://hrcloud.blazorserver.com/)**

## 2. Home Page (Dashboard)

* Today's attendance, exception statistics, and headcount
* To-do reminders (approvals, record corrections, work hour confirmations)
* Quick access shortcuts
* Current billing status and project updates


![Home Page](/uploads/photos/hrhub/1.png)

---

## 3. Attendance Record Module

### 3.1 Attendance Records

* Automatic recording via face recognition clock-in
* Automatic calculation of effective work hours (excluding break time)
* Statistics by employee/position/supplier
* Core basis for payroll and billing


![Attendance Record](/uploads/photos/hrhub/2.png)

---

## 4. Billing Module

### 4.1 Monthly Bills

* Automatically generated after employer confirms work hours
* Automatic calculation by work hours × position rate
* Three-party reconciliation: employer, supplier, and HR
* HR issues payroll based on bills


![Billing](/uploads/photos/hrhub/3.png)

---

## 5. Employer Functions

### 5.1 HR Demand

* Create HR demand requests online
* Specify job type, headcount, and start date
* Specify authorized suppliers
* Automatic sync to attendance devices after confirming dispatched employees


![HR Demand](/uploads/photos/hrhub/4.png)

---

### 5.2 Work Hour Confirmation & Settlement

* Support daily/weekly/monthly confirmation
* Automatically generate bills after work hours are locked


![Work Hour Confirmation](/uploads/photos/hrhub/5.png)

---

### 5.3 Attendance Record Correction Approval

* Suppliers initiate correction requests
* Employers approve online
* Fix attendance exceptions after approval
* Retain audit records


![Correction Approval](/uploads/photos/hrhub/6.png)

---

## 6. Supplier Functions

### 6.1 Employee Management

* Input employee information
* Automatic ID card OCR recognition
* Upload face photos for recognition
* Employee status management


![Employee Management](/uploads/photos/hrhub/7.png)

---

### 6.2 HR Demand Response & Dispatch

* Automatically receive approved HR demand requests
* Select employees for dispatch
* Wait for employer confirmation after submission


![Employee Dispatch](/uploads/photos/hrhub/8.png)

---

### 6.3 Attendance Record Correction Request

* Initiate corrections for missed clock-ins or device failures
* Fill in reason and time period
* Pending employer approval


![Correction Request](/uploads/photos/hrhub/9.png)

---

## 7. HR Management Module

### 7.1 Shift Settings

* Clock-in and clock-out times
* Break rules
* Multiple shift support


![Shift Settings](/uploads/photos/hrhub/10.png)

---

### 7.2 Position Management

* Set hourly wages for different positions
* Support project-based wage rules


---

### 7.3 Dormitory Management

* Employee dormitory applications
* Bed management
* Automatic generation of dormitory fee deductions


---

### 7.4 Company & Organization Information

* Supplier archives
* Employer organizational structure
* Department/site/project management

---

### 7.5 HR Demand Approval

* Unified HR approval process
* Sync to suppliers after approval

---

## 8. Attendance Device Module

### 8.1 Device Management

* Face recognition device registration
* SN, location, online status
* Device binding to projects


![Device Management](/uploads/photos/hrhub/11.png)

---

### 8.2 Interface Logs

* Face synchronization
* Delete records
* Failure logs


![Interface Logs](/uploads/photos/hrhub/11.png)

---

### 8.3 Raw Attendance Records

* Save every clock-in data
* Including time, device, and face photo
* Basis for corrections and audits



---

## 9. Platform Usage Scenarios

### Scenario 1: New Project Requires Temporary Workers

1. Employer submits HR demand
2. HR approval
3. Supplier dispatches employees
4. Employer confirms and syncs to attendance devices

### Scenario 2: Employee Forgets to Clock In

1. Supplier initiates correction request
2. Employer approves
3. Automatically fix attendance
4. Work hours and billing sync updated

---

## 10. Technical Architecture & System Integration

HR HUB is built on **.NET 10 + Blazor Server + Docker** with containerized deployment and highly scalable architecture.

### 10.1 Technology Stack

* **.NET 10** (High performance + Stable)
* **Blazor Server** (Real-time interaction + Reduced front-end complexity)
* **Docker Containerization** (Scalable & Portable)
* **CI/CD Automated Deployment**
  * GitLab CI / GitHub Actions
  * Automatic image building
  * Automatic deployment to servers or Kubernetes

---

### 10.2 External System Integration

#### ✔ Face Recognition Attendance Devices

* Sync employee faces
* Receive employee clock-in records
* Device status monitoring

#### ✔ MinIO / S3 Network File Storage

* Employee photos
* Clock-in photos
* ID card photos
* Document/attachment materials

#### ✔ ID Card OCR (PaddleOCR)

* Automatically recognize name, ID number, gender
* Auto-fill employee information

#### ✔ DeepFace Face Processing

* Automatic photo cropping
* Quality detection (blur, obstruction, insufficient lighting)
* Duplicate face detection (extensible)

---

### 10.3 Technical Architecture Diagram
![Architecture Diagram](/uploads/photos/hrhub/13.png)
 

 
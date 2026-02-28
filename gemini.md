📘 Product Requirement Document (PRD)
Swachh – Smart Waste Management System

For Madurai City Corporation

1️⃣ Problem Statement
City Context

Madurai has:

5 Administrative Zones

30 Wards

Thousands of high-waste commercial establishments

Public toilets with poor maintenance

Unsegregated street-level waste

No real-time operational intelligence

Core Problems

Unstructured Commercial Waste Collection

Hotels, hostels, meat shops generate large waste volumes.

Waste is often dumped publicly.

No digital tracking or revenue transparency.

Overflowing Public Bins

No real-time monitoring.

Manual inspection based collection.

Poor Sanitary Waste Handling

Unsafe disposal of sanitary napkins & medical waste.

Public Toilet Mismanagement

Refill shortages (sanitizer, napkins)

Irregular cleaning

No accountability

Worker Performance Untracked

No task-level visibility.

No incentive system.

No Predictive Intelligence

Waste accumulation not forecasted.

No high-risk zone identification.

2️⃣ Solution Overview

Swachh is a real-time, AI-powered, IoT-integrated smart waste governance system designed for the Madurai City Corporation.

It digitizes:

Commercial waste pickup

Smart bin monitoring

Public toilet maintenance

Waste segregation

Worker tracking & incentives

Zone-level waste processing

It provides:

Real-time dashboards

Automated task routing

AI-powered predictions (Gemini API)

Revenue transparency

Performance analytics

3️⃣ User Roles & Permissions
1️⃣ Commissioner (Super Admin)

View city-wide analytics

Monitor zone performance

Access AI predictions

Revenue tracking

Worker leaderboard

Risk heatmaps

2️⃣ Zone Admin

Monitor assigned wards

Track processing centers

Approve disposal logs

View worker productivity

Monitor waste volume trends

3️⃣ Ward Admin

Receive shop waste requests

Receive smart bin alerts

Assign tasks to workers

Track task completion

Monitor public toilet alerts

4️⃣ Worker

View assigned tasks

Accept/Start tasks

Scan ID at pickup & disposal center

Complete tasks

View Green Points & salary summary

5️⃣ Shop Owner

Register shop

Request waste pickup

Pay collection fees

Download receipt

View pickup history

4️⃣ Core Features Per Role
🏛 Commissioner Dashboard

City Overview (Zone comparison)

Waste Heatmap (AI-clustered risk zones)

Revenue Analytics (commercial waste)

Worker Leaderboard

Public Toilet Monitoring Panel

Waste Forecast Graph (Gemini AI predictions)

Monthly Performance Reports

🏙 Zone Admin Dashboard

Ward-level waste metrics

Bio/Non-bio/Sanitary processing logs

Disposal confirmation panel

Worker efficiency tracking

Processing center volume reports

🏘 Ward Admin Dashboard

Incoming Shop Requests

Smart Bin Alerts

Public Toilet Alerts

Task Assignment Board

Worker allocation interface

Task tracking (Pending/In Progress/Completed)

👷 Worker App

Task List

Map navigation

Pickup scan confirmation

Disposal center scan

Task completion button

Green Points tracker

Monthly earnings dashboard

🏪 Shop Owner App

Request Pickup Form

Waste Type Selection

Estimated Weight Entry

Online Payment

Receipt Download

Status Tracking

5️⃣ Real-Time Workflow (Shop → Admin → Worker)

Shop Owner submits pickup request.

Firebase triggers task creation.

Ward Admin receives real-time notification.

Ward Admin assigns 4–5 workers.

Workers receive push notification.

Worker marks “Start Task.”

At pickup → Worker scans QR.

Waste loaded into vehicle.

At processing center → Worker scans ID.

Task auto-marked completed.

Green Points credited.

Receipt generated for shop.

6️⃣ Sensor Alert Workflow (Smart Bins & Toilets)
Smart Bin

IoT sensor simulation updates binFillLevel.

If fillLevel ≥ 80%:

Alert generated.

Task auto-created.

Ward Admin notified.

Task assigned to worker group.

Worker collects waste.

Disposal scan → task completed.

Public Toilet

Sensors simulate:

Dustbin fill level

Sanitizer refill level

Napkin stock

Cleaning interval timer

If:

Stock < 20%

Dustbin > 80%

Cleaning overdue

→ Task auto-created → Assigned → Completed.

7️⃣ Green Points & Salary Calculation
Points System
Task Type	Points
Small bin collection	5
Commercial pickup	15
Toilet maintenance	10
Emergency overflow	20
Bonus Rules

+5 bonus for early completion

+10 weekly performance bonus

Top 10% workers get 10% salary increment

Salary Formula

Monthly Salary =
Base Salary + (GreenPoints × ₹10) + Performance Bonus

Leaderboard resets monthly.

8️⃣ Firebase Collections Structure
users

userId

name

role (commissioner/zoneAdmin/wardAdmin/worker/shopOwner)

zoneId

wardId

greenPoints

baseSalary

zones

zoneId

name

totalWasteVolume

processingCenterId

wards

wardId

zoneId

population

activeWorkers

shops

shopId

wardId

type (hotel/meat/hostel)

avgWasteVolume

tasks

taskId

type (commercial/bin/toilet)

wardId

assignedWorkers

status (pending/in-progress/completed)

createdAt

completedAt

sensors

sensorId

locationType (bin/toilet)

locationId

fillLevel

lastUpdated

wasteProcessingLogs

logId

zoneId

wasteType

weight

processedAt

payments

paymentId

shopId

amount

taskId

receiptUrl

9️⃣ AI Features (Using Gemini API)
1️⃣ Waste Volume Prediction

Predict daily waste per ward

Identify high-generation shops

2️⃣ Overflow Risk Prediction

Predict when bin will overflow

Generate pre-emptive tasks

3️⃣ Garbage Heatmap Clustering

Identify illegal dumping zones

4️⃣ Worker Optimization

Suggest best worker allocation per ward

5️⃣ Public Toilet Usage Forecast

Predict refill frequency

Reduce stockouts

Gemini API used for:

Pattern analysis

Natural language reporting

Insight generation for Commissioner dashboard

🔟 Success Metrics
Operational Metrics

30% reduction in bin overflow

40% faster task completion

100% commercial pickup tracking

Financial Metrics

Increase commercial waste revenue

Transparent digital payment logs

Worker Metrics

25% productivity increase

Reduced absenteeism

Increased worker satisfaction

Public Health Metrics

Reduced open dumping

Improved sanitary disposal

Cleaner public toilets

🎯 Vision Statement

Swachh transforms Madurai into a data-driven, AI-powered sanitation ecosystem by combining:

IoT monitoring

Real-time governance

Worker incentives

AI predictions

Structured waste processing

It creates transparency, accountability, and sustainable urban cleanliness at scale.
---
id: patient-registration-tutorial
title: "Tutorial: Registering Patients & Ordering Lab Tests"
sidebar_label: Workflow Tutorial
description: Step-by-step guide for clinical administrative staff to register new patient profiles and submit laboratory requisitions.
---

# Tutorial: Registering Patients & Ordering Lab Tests

This step-by-step guide walks clinical laboratory staff and administrative users through registering a new patient profile and generating a laboratory test order using the Clinical Data REST API.

---

## Prerequisites

Before beginning this tutorial, ensure you have:
- An active API Authorization Token (`Bearer YOUR_API_TOKEN`).
- Access to an API testing client such as **Postman**, **cURL**, or an integrated EHR system.
- The target patient's full demographic information.

---

## Step 1: Verify Patient Non-Existence

To avoid duplicate entries in the clinical registry, query the system using the patient's full name or existing identifier.

```text
GET /v1/patients?limit=20 HTTP/1.1
Host: api.clinicalportal.org
Authorization: Bearer YOUR_API_TOKEN
```

Review the JSON response array. If no matching profile exists, proceed to Step 2.

---

## Step 2: Register the Patient Profile

Submit a `POST` request to `/v1/patients` containing the patient's core demographic data.

### Request

```text
POST /v1/patients HTTP/1.1
Host: api.clinicalportal.org
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json

{
  "full_name": "Amina Ali",
  "gender": "Female",
  "date_of_birth": "1991-04-12",
  "blood_type": "O+",
  "contact_number": "+252610000000"
}
```

### Response (`201 Created`)

```json
{
  "status": "success",
  "message": "Patient record registered successfully",
  "data": {
    "patient_id": "P-10029",
    "created_at": "2026-09-14T10:00:00Z"
  }
}
```

:::tip Important
Note down the generated `patient_id` (`P-10029`). You will need this key to attach laboratory orders and retrieve diagnostic findings.
:::

---

## Step 3: Create a Laboratory Test Requisition

Once the profile exists, submit a diagnostic lab order for the patient using their unique identifier.

### Request

```text
POST /v1/lab-orders HTTP/1.1
Host: api.clinicalportal.org
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json

{
  "patient_id": "P-10029",
  "ordering_physician": "Dr. Mohamed Said",
  "tests_requested": ["CBC-01", "MAL-02"],
  "priority": "Routine"
}
```

### Response (`201 Created`)

```json
{
  "status": "success",
  "message": "Lab order created successfully",
  "data": {
    "order_id": "ORD-88201",
    "patient_id": "P-10029",
    "status": "Pending Collection",
    "created_at": "2026-09-14T10:15:00Z"
  }
}
```

---

## Step 4: Verify Order Status & Retrieve Findings

After specimen collection and laboratory processing, query the findings endpoint to confirm completion:

```text
GET /v1/lab-results/P-10029 HTTP/1.1
Host: api.clinicalportal.org
Authorization: Bearer YOUR_API_TOKEN
```

When the `status` field returns `"Completed"`, the results are verified and ready for clinical review.
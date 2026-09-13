---
id: api-reference
title: Clinical Data API Reference
sidebar_label: API Reference
description: REST API reference for managing patient records, laboratory test orders, and diagnostic results.
---

# Clinical Data REST API

Welcome to the **Clinical Data REST API** reference. This API enables secure retrieval and management of patient demographic records, diagnostic test requests, and laboratory results.

:::info Base URL
All API requests must be directed to the following base endpoint:
`https://api.clinicalportal.org/v1`
:::

---

## Authentication

All API endpoints require a bearer token in the `Authorization` request header:

```http
Authorization: Bearer YOUR_API_TOKEN
```

---

## Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /patients | List all registered patients |
| GET | /patients/{id} | Retrieve a specific patient |
| POST | /patients | Register a new patient record |
| GET | /lab-results/{patient_id} | Fetch laboratory results |
| POST | /lab-orders | Create a new laboratory order |

---

## 1. Get All Patients

**GET** `/patients`

Retrieves a paginated list of registered patient records.

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| limit | integer | No | Maximum records to return (Default: 20) |
| offset | integer | No | Number of records to skip (Default: 0) |

### Response (200 OK)

```json
{
  "status": "success",
  "total": 2,
  "data": [
    {
      "patient_id": "P-10029",
      "full_name": "Amina Ali",
      "gender": "Female",
      "date_of_birth": "1991-04-12"
    },
    {
      "patient_id": "P-10030",
      "full_name": "Hassan Omar",
      "gender": "Male",
      "date_of_birth": "1988-09-25"
    }
  ]
}
```

---

## 2. Get Patient by ID

**GET** `/patients/{id}`

Retrieves clinical and demographic details for a single patient.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Unique patient identifier (e.g., P-10029) |

### Response (200 OK)

```json
{
  "status": "success",
  "data": {
    "patient_id": "P-10029",
    "full_name": "Amina Ali",
    "gender": "Female",
    "date_of_birth": "1991-04-12",
    "blood_type": "O+",
    "contact_number": "+252610000000"
  }
}
```

### Error Response (404 Not Found)

```json
{
  "status": "error",
  "code": "PATIENT_NOT_FOUND",
  "message": "No patient record found matching ID P-99999"
}
```

---

## 3. Register New Patient

**POST** `/patients`

Creates a new patient profile in the registry.

### Request Body

```json
{
  "full_name": "Farah Jama",
  "gender": "Male",
  "date_of_birth": "1995-11-03",
  "blood_type": "A+",
  "contact_number": "+252615555555"
}
```

### Response (201 Created)

```json
{
  "status": "success",
  "message": "Patient record registered successfully",
  "data": {
    "patient_id": "P-10031",
    "created_at": "2026-09-11T19:45:00Z"
  }
}
```

---

## 4. Get Laboratory Results

**GET** `/lab-results/{patient_id}`

Retrieves diagnostic laboratory findings for a specific patient.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| patient_id | string | Yes | Patient identifier code |

### Response (200 OK)

```json
{
  "status": "success",
  "patient_id": "P-10029",
  "results": [
    {
      "test_code": "CBC-01",
      "test_name": "Complete Blood Count",
      "status": "Completed",
      "result_value": "Normal",
      "completed_at": "2026-09-10T11:30:00Z"
    },
    {
      "test_code": "MAL-02",
      "test_name": "Malaria Rapid Diagnostic Test",
      "status": "Completed",
      "result_value": "Negative",
      "completed_at": "2026-09-10T11:45:00Z"
    }
  ]
}
```

---

## 5. Submit Laboratory Test Order

**POST** `/lab-orders`

Submits a new requisition order for diagnostic laboratory processing.

### Request Body

```json
{
  "patient_id": "P-10029",
  "ordering_physician": "Dr. Mohamed Said",
  "tests_requested": ["CBC-01", "MAL-02"],
  "priority": "Routine"
}
```

### Response (201 Created)

```json
{
  "status": "success",
  "message": "Lab order created successfully",
  "data": {
    "order_id": "ORD-88201",
    "patient_id": "P-10029",
    "status": "Pending Collection",
    "created_at": "2026-09-11T20:10:00Z"
  }
}
```
---
title: Clinical Data API Reference
sidebar_label: API Reference
---

# Clinical Data REST API

Welcome to the Clinical Data REST API reference. This API enables secure retrieval and management of patient demographic records, diagnostic test requests, and laboratory results.
## Base URL

All API requests must be directed to: https://api.clinicalportal.org/v1

## Authentication

All API endpoints require a bearer token in the Authorization request header.

Example: Authorization: Bearer YOUR_API_TOKEN
## Available Endpoints

The following five endpoints are available:

- GET /patients — List all registered patients
- GET /patients/patient-code — Retrieve a specific patient
- POST /patients — Register a new patient record
- GET /lab-results/patient-code — Fetch laboratory results
- POST /lab-orders — Create a new laboratory order
- ## 1. Get All Patients

Method: GET

Endpoint: /patients

Description: Retrieves a paginated list of registered patient records.

Parameters:
- limit — Maximum records to return. Default is 20.
- offset — Number of records to skip. Default is 0.

## 2. Get Patient by Code

Method: GET

Endpoint: /patients/patient-code

Description: Retrieves clinical and demographic details for a single patient using their unique patient code.

Parameters:
- patient-code — Unique patient reference code. Example: P-10029. Required.
- ## 3. Register New Patient

Method: POST

Endpoint: /patients

Description: Creates a new patient profile in the registry.

Required fields:
- full_name — Full name of the patient
- gender — Patient gender
- date_of_birth — Date of birth in YYYY-MM-DD format
- blood_type — Patient blood type
- contact_number — Patient contact number

## 4. Get Laboratory Results

Method: GET

Endpoint: /lab-results/patient-code

Description: Retrieves diagnostic laboratory findings for a specific patient using their patient code.

Parameters:
- patient-code — Unique patient reference code. Required.

## 5. Submit Laboratory Test Order

Method: POST

Endpoint: /lab-orders

Description: Submits a new requisition order for diagnostic laboratory processing.

Required fields:
- patient_code — Reference code of the patient
- ordering_physician — Name of the requesting physician
- tests_requested — List of test codes to order
- priority — Order priority level. Example: Routine or Urgent.
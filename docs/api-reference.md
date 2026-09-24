---
title: Clinical Data API Reference
sidebar_label: API Reference
sidebar_position: 4
---

# Supabase Clinical Data API Reference

This API reference documents the REST endpoints available for managing patient records in a clinical data management system built on Supabase. All endpoints interact with the `patients` table in your Supabase PostgreSQL database.

---

## Base URL

All API requests are directed to your Supabase project URL:

```
https://your-project-url.supabase.co/rest/v1
```

Replace `your-project-url` with your actual Supabase project reference found in **Settings > API** in your Supabase dashboard.

---

## Authentication

All API requests require two headers:

- `apikey` — your Supabase public anonymous key
- `Authorization` — your bearer token

Example:

```
apikey: your-public-anon-key
Authorization: Bearer your-jwt-token
```

You find both values in your Supabase dashboard under **Settings > API**.

If Row Level Security is enabled on your table — which it should be for patient data — you must pass a valid JWT token so Supabase can verify which records the user is allowed to access.

---

## Available Endpoints

The following five endpoints are available for the patients table:

- GET /rest/v1/patients — fetch all patient records
- GET /rest/v1/patients?patient_code=eq.P-10029 — fetch a specific patient
- POST /rest/v1/patients — register a new patient
- PATCH /rest/v1/patients — update an existing patient record
- DELETE /rest/v1/patients — delete a patient record

---

## 1. Fetch All Patients

Method: GET

Endpoint: /rest/v1/patients

Description: Retrieves all patient records from the database. Returns a list of all registered patients.

### cURL Example

```bash
curl -X GET https://your-project-url.supabase.co/rest/v1/patients \
  -H "apikey: your-public-anon-key" \
  -H "Authorization: Bearer your-jwt-token"
```

### Python Example

```python
import requests

url = "https://your-project-url.supabase.co/rest/v1/patients"

headers = {
    "apikey": "your-public-anon-key",
    "Authorization": "Bearer your-jwt-token"
}

response = requests.get(url, headers=headers)
print(response.json())
```

### Successful Response

```
[
  {
    "patient_code": "P-10029",
    "full_name": "Amina Ali",
    "gender": "Female",
    "date_of_birth": "1991-04-12",
    "contact_number": "+252610000000"
  },
  {
    "patient_code": "P-10030",
    "full_name": "Hassan Omar",
    "gender": "Male",
    "date_of_birth": "1988-09-25",
    "contact_number": "+252611111111"
  }
]
```

---

## 2. Fetch a Specific Patient

Method: GET

Endpoint: /rest/v1/patients?patient_code=eq.P-10029

Description: Retrieves the record of a single patient using their unique patient code. Replace P-10029 with the actual patient code you want to look up.

### cURL Example

```bash
curl -X GET "https://your-project-url.supabase.co/rest/v1/patients?patient_code=eq.P-10029" \
  -H "apikey: your-public-anon-key" \
  -H "Authorization: Bearer your-jwt-token"
```

### Python Example

```python
import requests

url = "https://your-project-url.supabase.co/rest/v1/patients"

headers = {
    "apikey": "your-public-anon-key",
    "Authorization": "Bearer your-jwt-token"
}

params = {
    "patient_code": "eq.P-10029"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

### Successful Response

```
[
  {
    "patient_code": "P-10029",
    "full_name": "Amina Ali",
    "gender": "Female",
    "date_of_birth": "1991-04-12",
    "contact_number": "+252610000000"
  }
]
```

### Error Response

```
[]
```

An empty list means no patient record was found matching that patient code.

---

## 3. Register a New Patient

Method: POST

Endpoint: /rest/v1/patients

Description: Creates a new patient record in the database. All required fields must be included in the request body.

### Required Fields

- full_name — full name of the patient
- gender — patient gender
- date_of_birth — date of birth in YYYY-MM-DD format
- contact_number — patient contact number

### cURL Example

```bash
curl -X POST https://your-project-url.supabase.co/rest/v1/patients \
  -H "apikey: your-public-anon-key" \
  -H "Authorization: Bearer your-jwt-token" \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Farah Jama",
    "gender": "Female",
    "date_of_birth": "1995-11-03",
    "contact_number": "+252615555555"
  }'
```

### Python Example

```python
import requests

url = "https://your-project-url.supabase.co/rest/v1/patients"

headers = {
    "apikey": "your-public-anon-key",
    "Authorization": "Bearer your-jwt-token",
    "Content-Type": "application/json"
}

data = {
    "full_name": "Farah Jama",
    "gender": "Female",
    "date_of_birth": "1995-11-03",
    "contact_number": "+252615555555"
}

response = requests.post(url, headers=headers, json=data)
print(response.status_code)
```

### Successful Response

A status code of 201 means the patient record was created successfully.

---

## 4. Update a Patient Record

Method: PATCH

Endpoint: /rest/v1/patients?patient_code=eq.P-10029

Description: Updates one or more fields in an existing patient record. Only include the fields you want to change in the request body.

### cURL Example

```bash
curl -X PATCH "https://your-project-url.supabase.co/rest/v1/patients?patient_code=eq.P-10029" \
  -H "apikey: your-public-anon-key" \
  -H "Authorization: Bearer your-jwt-token" \
  -H "Content-Type: application/json" \
  -d '{
    "contact_number": "+252619999999"
  }'
```

### Python Example

```python
import requests

url = "https://your-project-url.supabase.co/rest/v1/patients"

headers = {
    "apikey": "your-public-anon-key",
    "Authorization": "Bearer your-jwt-token",
    "Content-Type": "application/json"
}

params = {
    "patient_code": "eq.P-10029"
}

data = {
    "contact_number": "+252619999999"
}

response = requests.patch(url, headers=headers, params=params, json=data)
print(response.status_code)
```

### Successful Response

A status code of 204 means the record was updated successfully.

---

## 5. Delete a Patient Record

Method: DELETE

Endpoint: /rest/v1/patients?patient_code=eq.P-10029

Description: Permanently removes a patient record from the database. This action cannot be undone. Always confirm the patient code before deleting.

### cURL Example

```bash
curl -X DELETE "https://your-project-url.supabase.co/rest/v1/patients?patient_code=eq.P-10029" \
  -H "apikey: your-public-anon-key" \
  -H "Authorization: Bearer your-jwt-token"
```

### Python Example

```python
import requests

url = "https://your-project-url.supabase.co/rest/v1/patients"

headers = {
    "apikey": "your-public-anon-key",
    "Authorization": "Bearer your-jwt-token"
}

params = {
    "patient_code": "eq.P-10029"
}

response = requests.delete(url, headers=headers, params=params)
print(response.status_code)
```

### Successful Response

A status code of 204 means the record was deleted successfully.

---

## Status Codes

The following status codes indicate the result of each API request:

- 200 — Request was successful and data was returned
- 201 — New record was created successfully
- 204 — Request was successful but no content was returned
- 401 — Unauthorized. Your API key or token is missing or incorrect
- 403 — Forbidden. Your RLS policy is blocking access to this data
- 404 — The requested record was not found
---
title: Developer Guide
sidebar_label: Developer Guide
sidebar_position: 3
---

# Supabase Developer Guide

This guide is written for developers who are new to Supabase and want to integrate it into a web application. It is based on real developer experience building a patient appointment and diagnostic lab request tracking dashboard using Supabase.

You do not need to be a backend expert to follow this guide. However having a basic understanding of the following will help:

- Simple database concepts like tables, rows, and columns
- Basic JavaScript including how to fetch data
- Comfort running commands in a terminal

---

## What Is Supabase and Why Use It?

Supabase is an open-source backend platform that gives you a PostgreSQL database, automatically generated API endpoints, authentication, and file storage — all without having to build a custom backend from scratch.

For developers building healthcare or clinical data applications, Supabase removes the overhead of setting up a full server with Node.js, Express, and a custom database. You focus on building your application while Supabase handles the backend.

---

## Before You Write Any Code

This is the most important section in this guide. Skipping these steps causes the most common and frustrating errors developers face when starting with Supabase.

### Step 1: Create Your Database Tables

Before writing a single line of frontend code, set up your database tables in the Supabase Studio dashboard.

1. Open your browser and go to https://supabase.com
2. Sign in and open your project
3. Click **Table Editor** in the left sidebar
4. Click **New Table**
5. Give your table a name — for example `patients` or `lab_requests`
6. Add your columns — for example `full_name`, `date_of_birth`, `contact_number`
7. Click **Save**

### Step 2: Enable Row Level Security

Row Level Security — also called RLS — controls who can read, write, or delete data in your tables. This is the number one step developers skip and it causes serious problems.

Without RLS either nobody can access your data or everybody can — including people who should not have access to patient records.

To enable RLS:

1. Open your table in the Supabase Studio dashboard
2. Click **RLS disabled** at the top of the table
3. Click **Enable RLS**
4. Click **New Policy** to add a rule

For a basic policy that allows logged-in users to see only their own records paste this SQL rule:

```
auth.uid() = user_id
```

This tells Supabase: only show a row to the user whose ID matches the user_id column in that row.

Always set up RLS before connecting your frontend application. This protects your data from the start.

---

## Installing the Supabase JavaScript Client

The Supabase JavaScript client library — called `supabase-js` — is the tool you use to connect your frontend application to your Supabase database.

Install it in your project folder by running this command in your terminal:

```
npm install @supabase/supabase-js
```

---

## Connecting to Your Supabase Project

After installing the library, create a file called `supabaseClient.js` in your project and add the following:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project-url.supabase.co'
const supabaseKey = 'your-public-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)
```

Replace `your-project-url` and `your-public-anon-key` with the values from your Supabase project settings. You find these by going to **Settings > API** in your Supabase dashboard.

---

## Common Database Operations

These are the operations you will use most frequently when building with Supabase.

### Fetch All Records

Use this to retrieve and display all rows from a table:

```javascript
const { data, error } = await supabase
  .from('patients')
  .select('*')
```

### Fetch a Specific Record

Use this to retrieve a single row by a specific value:

```javascript
const { data, error } = await supabase
  .from('patients')
  .select('*')
  .eq('patient_code', 'P-10029')
```

The `.eq()` filter means "where this column equals this value."

### Insert a New Record

Use this when a user submits a form to add new data:

```javascript
const { data, error } = await supabase
  .from('patients')
  .insert([
    {
      full_name: 'Amina Ali',
      date_of_birth: '1991-04-12',
      contact_number: '+252610000000'
    }
  ])
```

### Update an Existing Record

Use this to update a specific row:

```javascript
const { data, error } = await supabase
  .from('patients')
  .update({ contact_number: '+252611111111' })
  .eq('patient_code', 'P-10029')
```

### Delete a Record

Use this to remove a row from your table:

```javascript
const { data, error } = await supabase
  .from('patients')
  .delete()
  .eq('patient_code', 'P-10029')
```

---

## Authentication

Supabase handles user login and registration without any custom backend code.

### Register a New User

```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword'
})
```

### Log In an Existing User

```javascript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securepassword'
})
```

### Log Out

```javascript
await supabase.auth.signOut()
```

Supabase uses JWT tokens to manage user sessions automatically. You do not need to handle token management yourself — the client library does this for you.

---

## What a Successful Integration Looks Like

You know your Supabase integration is working correctly when:

- A user can log in through your application
- A user can submit a form and the new record appears immediately on screen
- The same record appears inside the Supabase Studio dashboard
- Other users cannot see records that do not belong to them

---

## Troubleshooting Common Errors

### 401 Unauthorized

**What it means:** Your request is missing a valid authentication token.

**What to do:** Make sure the user is logged in before making database requests. Check that you are passing the correct API key in your Supabase client setup.

### 403 Forbidden

**What it means:** The user is logged in but your RLS policy is blocking access.

**What to do:** Go to your Supabase Studio dashboard, open the table, and review your RLS policies. Make sure the policy covers the operation you are trying to perform — select, insert, update, or delete.

### Docker Not Running

**What it means:** You ran `supabase start` but Docker Desktop is not active.

**What to do:** Open Docker Desktop and wait until the status shows Active. Then run `supabase start` again.

---

## What Is Next

Now that your Supabase integration is set up you are ready to:

- Build your first form and connect it to your database
- Set up user authentication for your application
- Explore the API Reference for available endpoints

Refer to the API Reference section for the full list of available endpoints and how to call them.
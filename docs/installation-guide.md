---
title: User & Installation Guide
sidebar_label: Installation & Setup
---

# Supabase User & Installation Guide

This guide walks you through setting up Supabase on your local computer. By the end you will have a fully working local Supabase environment ready for development and testing.

This guide assumes no prior experience with Supabase. Follow each step in order and do not skip ahead.

---

## What Is Supabase?

Supabase is an open-source backend platform that gives developers a database, authentication system, and API in one place. Think of it as the engine that stores and manages your application data securely.

---

## What You Need Before You Start

Before installing Supabase, make sure the following tools are already installed on your computer. Each one is free to download.

| Tool | Why You Need It | Minimum Version |
|------|----------------|-----------------|
| Docker Desktop | Runs the Supabase services on your computer | 20.10 or higher |
| Node.js | Required to run the Supabase CLI | 18.0.0 or higher |
| Git | Tracks and manages your project files | 2.30.0 or higher |

### How to Check If These Are Already Installed

Open your terminal and run each command below. If you see a version number the tool is already installed.

Check Docker:
```
docker --version
```

Check Node.js:
```
node -v
```

Check Git:
```
git --version
```

If any of these return an error visit the links below to download and install them:

- Docker Desktop: https://www.docker.com/products/docker-desktop
- Node.js: https://nodejs.org
- Git: https://git-scm.com

---

## Step 1: Install the Supabase CLI

The Supabase CLI is the tool you use to set up and manage your local Supabase environment.

Open your terminal and run the command for your operating system:

**Windows:**
```
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

**Mac:**
```
brew install supabase/tap/supabase
```

**Linux:**
```
npm install -g supabase
```

### Verify the Installation

Run this command to confirm Supabase CLI installed correctly:
```
supabase --version
```

You should see a version number appear. This means the installation was successful.

---

## Step 2: Set Up Your Project

Navigate to the folder where you want to create your Supabase project:
```
cd your-project-folder
```

Then run this command to set up the Supabase configuration files:
```
supabase init
```

This creates a new folder called `supabase` in your project containing three important files:

- `config.toml` — stores your local settings like ports and API keys
- `migrations` folder — stores your database changes over time
- `seed.sql` — a file for adding test data to your database

---

## Step 3: Start Supabase Locally

Before running this step make sure Docker Desktop is open and running on your computer. You will see the Docker icon in your system tray when it is active.

Start your local Supabase environment:
```
supabase start
```

This downloads the required files and starts your local services. The first time you run this it may take 2 to 3 minutes depending on your internet speed. Do not close the terminal while it is running.

When it finishes you will see something like this:

```
Started supabase local development environment.

API URL: http://127.0.0.1:54321
DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
Studio URL: http://127.0.0.1:54323
```

This means Supabase is running successfully on your computer.

---

## Step 4: Access Your Local Supabase Dashboard

Open your browser and go to:
```
http://127.0.0.1:54323
```

This opens the Supabase Studio — a visual dashboard where you can view your database tables, run queries, and manage your users without writing any code.

---

## Stopping and Restarting Supabase

To stop Supabase without losing your data:
```
supabase stop
```

To stop Supabase and reset your database back to its original state:
```
supabase stop --no-backup
```

Use the second command only when you want to start completely fresh.

---

## Troubleshooting Common Errors

### Docker is not running

**What you see:** Cannot connect to the Docker daemon.

**What to do:** Open Docker Desktop and wait until the status shows Active. Then run `supabase start` again.

### Port is already in use

**What you see:** Port 54321 is already in use.

**What to do:** Open `supabase/config.toml` and change the port number to an unused one such as 54325. Save the file and run `supabase start` again.

### Download failed or timed out

**What you see:** Failed to pull Docker image.

**What to do:** Check your internet connection is active. Then run this command to retry the download:
```
docker pull supabase/postgres
```

---

## What Is Next

Now that your local Supabase environment is running you are ready to:

- Connect your application to the local API
- Create your first database table in Studio
- Set up authentication for your users

Refer to the Developer Guide for next steps.

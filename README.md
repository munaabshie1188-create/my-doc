# Clinical Data Management (CDM) Portal

[![Docusaurus v3](https://img.shields.io/badge/Docusaurus-v3-green.svg)](https://docusaurus.io/)
[![GitHub Pages Deployment](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-blue.svg)](https://munaabshie1188-create.github.io/my-doc/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A technical documentation portal built with **Docusaurus v3** for **Clinical Data Management (CDM)**, diagnostic workflow standards, REST API specifications, and clinical laboratory system integration.

🌐 **Live Documentation Website:** [https://munaabshie1188-create.github.io/my-doc/](https://munaabshie1188-create.github.io/my-doc/)

---

## 📌 Project Overview

This portal serves as a comprehensive reference guide for clinical data specialists, health IT engineers, phlebotomists, and laboratory technicians. It covers end-to-end data pipelines—from patient demographic registration and diagnostic test ordering to automated payload validation and secure database persistence.

### Key Documentation Highlights

* **Introduction to CDM**: Overview of regulatory standards, data lifecycle stages, and clinical trial data integrity.
* **Key CDM Tools**: Software ecosystems used across clinical trials, Electronic Data Capture (EDC), and Laboratory Information Systems (LIS).
* **Data Quality & Validation**: Syntactic, semantic, and biological range validation rules enforcing data accuracy prior to storage.
* **Patient Registration & Ordering Tutorial**: Step-by-step workflow guide covering patient intake and diagnostic requisition creation.
* **Clinical Data REST API Reference**: Detailed specification for REST API endpoints handling patient profiles, test orders, and laboratory findings.
* **System Architecture & Data Flow**: Deep dive into multi-tier system topology, security protocols, and database schema mappings.
* **Technical Blog**: Insights on clinical data quality, validation rules, and health tech engineering best practices.

---

## 📁 Repository Structure

```text
my-docs/
├── blog/                      # Technical blog posts
│   └── 2026-09-13-clinical-data-quality.md
├── docs/                      # Core CDM documentation pages
│   ├── intro.md               # Getting Started & portal directory
│   ├── clinical-data-management.md
│   ├── cdm-tools.md
│   ├── data-quality.md
│   ├── patient-registration-tutorial.md
│   ├── api-reference.md
│   └── system-architecture.md
├── src/                       # Custom React components, styling, and pages
├── docusaurus.config.js       # Global site metadata, navbars, and plugin settings
├── sidebars.js                # Navigation sidebar layout configuration
├── package.json               # Node.js dependencies and operational scripts
└── README.md                  # Repository documentation
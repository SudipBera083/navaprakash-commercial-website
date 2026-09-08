# Navaprakash Commercial Private Limited — Corporate Website Concept

> **A modern, credible digital presence and commercial lead-generation platform concept for Navaprakash Commercial Private Limited (Kolkata, West Bengal, India).**

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-Concept%20Proposal-F59E0B?style=flat-square)](https://github.com/SudipBera083/navaprakash-commercial-website)

---

## 📌 Project Overview

This repository contains the source code for a polished corporate website concept built for **NAVAPRAKASH COMMERCIAL PRIVATE LIMITED**, based in Kolkata, West Bengal, India. 

Designed specifically as a private commercial proposal for the company leadership, this project demonstrates:
1. How an established Indian commercial business can establish a high-trust digital presence.
2. How prospective buyers can discover products through a structured catalogue experience.
3. How friction-free quote requests can convert website traffic into actionable commercial leads.
4. How the platform is architecturally prepared for future expansion into a full Django-powered business portal.

---

## 🛡️ Anti-Hallucination & Commercial Integrity Principles

To preserve total credibility with the company leadership, this website strictly adheres to zero-fabrication standards:
- **Verified Facts Only**: The company name (*Navaprakash Commercial Private Limited*) and geographic base (*Kolkata, West Bengal, India*) are featured factually.
- **No Fabricated Claims**: No fake founder stories, fake client logos, unverified ISO certifications, fake awards, fake years of operation, or fake physical infrastructure claims.
- **Customizable Framework**: Products are presented as a structured commercial framework with neutral demo categories clearly stamped as `DEMO CONTENT` and `<READY FOR OFFICIAL DATA>`, signaling that official inventory and specifications will be uploaded upon onboarding.
- **Frictionless Lead Capture**: Focuses on commercial conversion by requiring only **Name**, **Phone / WhatsApp**, and **Requirement Details** (no unnecessary hurdles like GSTIN for initial contact).
- **Zero SLA Promises**: Avoids inventing response times or SLAs, confirming inquiries with honest, transparent messaging.

---

## 🖥️ Key Pages & Features

- **Homepage (`/`)**:
  - Authoritative hero section with deep corporate navy (`#0B192C`) and warm gold accents (`#D97706`).
  - Clear positioning headline: *"Building Better Commercial Connections"*.
  - 4 digital value pillars: Professional Presence, Product Discovery, Direct Enquiries, and Lead Management Ready.
  - 4-card commercial catalogue preview marked `DEMO CONTENT`.
  - 6-step visual workflow (*From Website Visit to Business Enquiry*).
  - Scalability roadmap preview demonstrating future back-office lead administration.
  - High-impact quote call-to-action.
- **About Page (`/about`)**:
  - Grounded corporate overview with verified legal entity and location.
  - Transparent, editable placeholders for official registered address, CIN, phone, email, and business description.
- **Product Catalogue (`/products`)**:
  - Real-time instant search by keyword.
  - Interactive category filter tabs (`Sample Category A`, `Sample Category B`, etc.).
  - Responsive 1/2/4-column product grid with empty states.
  - Direct "Request Quote" buttons that pre-select products on the quote form.
- **Product Details (`/products/:slug`)**:
  - Multi-column layout with high-resolution imagery and product description.
  - Direct quote enquiry trigger.
  - Demonstrates where verified technical specifications, packaging details, applications, and availability will be presented.
- **Request a Quote (`/quote`)**:
  - Streamlined commercial enquiry form.
  - Automatic pre-fill of product and category from catalogue actions.
  - Live field validation and simulated enquiry confirmation modal.
- **Contact Page (`/contact`)**:
  - Verified Kolkata location details.
  - Placeholder cards for official address, telephone, email, and business hours.
  - Geographic map placeholder ready for official coordinates.
  - Direct embedded requirement submission form.
- **404 Not Found (`*`)**:
  - Clean corporate error page with quick links back to Home and Catalogue.

---

## 🛠️ Project Structure

```
navaprakash-commercial-website/
├── public/
│   ├── favicon.svg              # Geometric corporate gold "N" monogram
│   └── og-image.png
├── src/
│   ├── types/
│   │   └── index.ts             # Domain interfaces (Product, Category, Enquiry, CompanyInfo)
│   ├── data/
│   │   ├── company.ts           # Central config with verified data & graceful null fallbacks
│   │   └── products.ts          # Sample commercial demo categories and products
│   ├── services/
│   │   └── api.ts               # Async API bridge prepared for future Django REST backend
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navbar, wordmark, mobile drawer, quote CTA
│   │   │   └── Footer.tsx       # Verified Kolkata details, quick links, concept note
│   │   ├── common/
│   │   │   ├── Button.tsx       # Corporate action buttons
│   │   │   ├── SectionHeader.tsx# Editorial section headers
│   │   │   ├── Badge.tsx        # DEMO CONTENT and status tags
│   │   │   └── PlaceholderNotice.tsx # Elegant indicators for editable corporate data
│   │   ├── products/
│   │   │   ├── ProductCard.tsx  # Product card with "Request Quote" pre-fill
│   │   │   ├── ProductGrid.tsx  # Responsive grid layout with empty state
│   │   │   └── CategoryFilter.tsx # Category tabs and instant search
│   │   ├── enquiry/
│   │   │   ├── QuoteForm.tsx    # Frictionless lead generation form
│   │   │   └── SuccessModal.tsx # Honest submission confirmation modal
│   │   └── sections/
│   │       ├── HeroSection.tsx  # Corporate hero with dual high-contrast CTAs
│   │       ├── IntroSection.tsx # Honest company introduction
│   │       ├── CapabilitiesSection.tsx # 4 digital capabilities of the proposed site
│   │       ├── ProductPreview.tsx # 4 demo category cards marked DEMO CONTENT
│   │       ├── WorkflowSection.tsx # Customer-to-enquiry 6-step pipeline
│   │       ├── FutureDashboardSection.tsx # Scalable business platform preview
│   │       └── EnquiryCTA.tsx   # Direct commercial quote banner
│   ├── pages/
│   │   ├── Home.tsx             # Primary sales-demo landing page
│   │   ├── About.tsx            # Factual corporate overview & data placeholders
│   │   ├── Products.tsx         # Full catalogue with search & category filters
│   │   ├── ProductDetails.tsx   # Product layout with image, specs & quote trigger
│   │   ├── Contact.tsx          # Kolkata address placeholder & direct form
│   │   ├── RequestQuote.tsx     # Dedicated quote page with auto-fill from products
│   │   └── NotFound.tsx         # Corporate 404 page
│   ├── App.tsx                  # Client router configuration & layout shell
│   ├── main.tsx                 # React entry point
│   └── index.css                # Tailwind base directives & corporate typography
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) (version 9.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SudipBera083/navaprakash-commercial-website.git
   cd navaprakash-commercial-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

---

## 📈 Future Commercial Scalability (Phased Roadmap)

| Phase | Description | Deliverables |
| :--- | :--- | :--- |
| **Phase 1** | **Corporate Website Concept** *(Current)* | Responsive corporate website, customizable catalogue framework, frictionless lead capture. |
| **Phase 2** | **Full Product Catalogue** | Integration of verified company inventory, technical specifications, and category hierarchy. |
| **Phase 3** | **Django Admin & Lead Portal** | Centralized backend with PostgreSQL database for product management and quotation review. |
| **Phase 4** | **Business Automation** | Instant WhatsApp/Email lead routing, automated buyer acknowledgement, and CRM export. |

---

## 📄 License & Notice

This project is created as a bespoke commercial website concept prepared for **Navaprakash Commercial Private Limited** (Kolkata, West Bengal, India). 

All concept rights reserved © 2026.

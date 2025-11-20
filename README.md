# 🚀 InvoicePilot.ai

### **AI-Powered Invoice Automation & Smart Payment Reminder System (Ongoing Project)**

InvoicePilot.ai is a modern SaaS application designed for freelancers, agencies, and small businesses to streamline their invoicing workflow.  
Create invoices, send them instantly to clients, and let the system automatically follow up with smart reminders via **Email** and **WhatsApp**.

---

## 🧠 Why InvoicePilot.ai?

Most invoicing tools are bloated, expensive, or lack automated follow-up features.  
InvoicePilot focuses on **simplicity**, **automation**, and **real business value**:

- AI-assisted reminders
- Clean and intuitive UI
- Lightweight and fast
- Fully automated payment follow-ups
- Mobile-responsive dashboards
- PDF invoice generation
- Email + WhatsApp delivery

Built to be finished quickly, but impactful enough to ship as a real product.

---

## ✨ Features

### ✅ **Core Features**

- Create invoices with items, discounts, totals, and tax
- Save business profile (logo, address, phone, branding)
- Auto-generated invoice numbers (INV-0001, etc.)
- Export invoices as **PDF**
- Send invoices to clients via **Email** and **WhatsApp**
- Track the status of each invoice:
  - Sent
  - Viewed (optional future)
  - Paid
  - Overdue

### 🔔 **Automated Reminders**

- Daily Vercel Cron job checks overdue or due-soon invoices
- Automatically sends:
  - Email reminders (Resend)
  - WhatsApp reminders (CallMeBot / UltraMsg free tier)
- Stops sending once invoice is marked as paid

### 📊 **Dashboard**

- Shows total revenue, pending payments, and overdue invoices
- Clean mobile-responsive layout
- Filters for Paid / Unpaid / Overdue invoices

### 🔒 **Authentication**

- Email/password login (BetterAuth)
- Secure user-level invoice data

---

## 🏗️ Tech Stack

| Layer              | Technology                           |
| ------------------ | ------------------------------------ |
| **Frontend**       | Next.js 15                           |
| **Backend**        | Server Actions, Serverless Functions |
| **Database**       | PostgreSQL (Neon) + Prisma ORM       |
| **Email**          | Resend                               |
| **WhatsApp API**   | CallMeBot                            |
| **PDF Generation** | react-pdf                            |
| **Cron Jobs**      | Vercel Scheduled Functions           |
| **Deployment**     | Vercel                               |

---

## 📁 Project Structure (Initial Plan)

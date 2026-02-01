# Mini CRM – Client Lead Management System

A simple and functional **Mini CRM (Client Lead Management System)** built as part of an internship task.  
This project demonstrates how businesses can collect, track, and manage client leads from a website.

The application simulates a real-world admin dashboard used by freelancers, agencies, and startups to handle incoming leads efficiently.

---

## 🚀 Features

- Lead listing with **Name, Email, Source, and Status**
- Lead status workflow: **New → Contacted → Converted**
- Add and view **follow-up notes** for each lead
- **Dummy admin login** (for demonstration purposes)
- Contact form to add new leads
- Delete leads from the dashboard
- Clean and responsive CRM-style UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML, CSS, JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## 📂 Project Structure

mini-crm/
├── mini-crm-backend/
│ ├── server.js
│ ├── package.json
│ └── node_modules/
│
└── mini-crm-frontend/
├── src/
├── public/
└── package.json

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/mini-crm.git
cd mini-crm
### 2️⃣ Backend Setup
cd mini-crm-backend
npm install
node server.js


Backend runs on:

http://localhost:5000

### 3️⃣ Frontend Setup
cd ../mini-crm-frontend
npm install
npm start


Frontend runs on:
http://localhost:3000

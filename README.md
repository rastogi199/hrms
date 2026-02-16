---

# 🚀 HRMS Lite – Full Stack Coding Assignment

## 📌 Project Overview

HRMS Lite is a lightweight Human Resource Management System developed as a full-stack web application.

This project was built as part of a Full-Stack Coding Assignment to demonstrate end-to-end development capabilities including:

* Frontend development
* Backend API design
* Database modeling & persistence
* Server-side validation
* Error handling
* Production deployment

The application simulates a basic internal HR tool that allows an admin to manage employees and track daily attendance with a clean and professional interface.

---

# 🌐 Live Deployment

### 🔹 Frontend (Vercel)

👉 [https://hrms-liard-tau.vercel.app/](https://hrms-liard-tau.vercel.app/)

### 🔹 Backend API (Render)

👉 [https://hrms-lite-backend-xxuu.onrender.com/api/](https://hrms-lite-backend-xxuu.onrender.com/api/)



---

# 🛠 Tech Stack

## 🔹 Frontend

* JavaScript
* React (Create React App)
* React Router
* Axios
* React Data Table Component
* Custom Professional UI (CSS)

## 🔹 Backend

* Python
* Django
* Django REST Framework
* Gunicorn (Production WSGI Server)

## 🔹 Database

* SQLite (Local Development)
* PostgreSQL (Production on Render)

## 🔹 Deployment

* Frontend: Vercel
* Backend: Render
* Database: Render PostgreSQL

---

# 📂 Project Structure

```
HRMS-LITE/
│
├── hrms/                      # Django Backend
│   ├── manage.py
│   ├── requirements.txt
│   ├── db.sqlite3             # Local DB (dev only)
│   │
│   ├── hrms/                  # Django Project Config
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   │
│   └── employees/             # App Module
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
│       └── migrations/
│
├── hrms-frontend/             # React Frontend
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── api.js
│       ├── App.js
│       ├── components/
│       └── pages/
│
└── README.md
```

---

# ✨ Functional Requirements Implemented

---

## 1️⃣ Employee Management

* Add new employee
* Employee ID (unique)
* Full Name
* Email (validated format)
* Department
* View all employees
* Delete employee
* Prevent duplicate employee ID
* Prevent duplicate email

---

## 2️⃣ Attendance Management

* Mark attendance
* Select date
* Status: Present / Absent
* View attendance records
* Prevent duplicate attendance for same employee & date
* Meaningful validation message returned from backend

---

# 🧾 Backend & Database Requirements Fulfilled

✔ RESTful API implemented using Django REST Framework
✔ Data persisted in PostgreSQL (Production)
✔ Required field validation
✔ Email format validation
✔ Duplicate employee prevention
✔ Duplicate attendance prevention
✔ Proper HTTP status codes (200, 201, 400, 404)
✔ Meaningful error messages
✔ Graceful error handling

---

# 🎨 UI & UX Implementation

The frontend resembles a professional, production-ready interface:

* Clean layout
* Sidebar navigation
* Dashboard summary cards
* Consistent typography
* Proper spacing
* Reusable components
* Loading states
* Empty states
* Client-side filtering
* Responsive layout

---

# ⭐ Bonus Features Implemented

✔ Filter attendance by date
✔ Display total present & absent days per employee
✔ Dashboard summary (Total employees & attendance count)
✔ Search employees by name/department
✔ Professional UI theme

---

# 🖥 How to Run Locally

---

## 🔹 Backend Setup

```bash
cd hrms
python -m venv myenv
source myenv/bin/activate   # Windows: myenv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/api/
```

---

## 🔹 Frontend Setup

```bash
cd hrms-frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000/
```

---

# 🔐 Assumptions & Limitations

* Single admin user (no authentication required)
* No role-based access control
* No leave management or payroll module
* Client-side pagination used
* Basic dashboard analytics only

---

# 🧠 Engineering Considerations

* Modular folder structure
* Clear separation of concerns
* RESTful API standards
* Production-ready deployment
* Environment-based configuration
* Clean and maintainable code

---

# ✅ Deployment Confirmation

✔ Frontend publicly accessible
✔ Backend hosted and running
✔ Database configured in production
✔ Frontend connected to live backend
✔ Application runs without errors

---

# 🎯 Conclusion

This project demonstrates practical full-stack development skills including:

* Backend API design
* Database modeling
* Validation & error handling
* Professional frontend UI development
* Deployment to production
* Clean and structured codebase

The application is stable, functional, and production-ready as per assignment requirements.

---

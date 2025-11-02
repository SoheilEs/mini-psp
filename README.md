# Mini PSP Platform

A **mini Payment Service Provider (PSP)** system built with **NestJS (Node.js)**, **React**, and **Docker** — designed as a showcase for secure backend development, scalable API architecture, and clean front-end integration.

---

## 🧩 Project Overview

This project demonstrates a **banking/fintech-grade backend** with authentication, transaction handling, and service modularity.  
It is inspired by real-world PSP systems (like Behpardakht) and built for showcasing modern backend design principles and DevOps readiness.

### 🔧 Tech Stack
#### Backend
- **NestJS** (Node.js + TypeScript)
- **PostgreSQL** (as the main RDBMS)
- **Prisma ORM**
- **Docker** & **Docker Compose**
- **Clean Architecture + Repository Pattern**
- **JWT Authentication**
- **Class-validator & DTO layers**

#### Frontend
- **React (TypeScript)**
- **Axios** for API communication
- **React Query** for async data management
- **TailwindCSS** for UI
- **Dockerized setup** for deployment

---

## ⚙️ Features

✅ User authentication (JWT + bcrypt)  
✅ Role-based access control (Admin / User)  
✅ Transaction endpoints (create, list, status)  
✅ Prisma-based database models  
✅ Docker-based local development (Backend + Frontend + PostgreSQL)  
✅ Clean and scalable code structure following SOLID principles  

---

## 📦 Docker Setup

### Development Mode
```bash
docker compose -f docker-compose.dev.yml up --build
```

### Production Mode
```bash
docker compose up -d --build
```

After startup:
- Backend runs at → `http://localhost:5000`
- Frontend runs at → `http://localhost:3000`
- PostgreSQL runs at → `localhost:5432`

---

## 🧱 Folder Structure

```
mini-psp/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   ├── common/
│   │   ├── main.ts
│   │   └── app.module.ts
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── docker-compose.dev.yml
└── README.md
```

---

## 🧰 Environment Variables

### Backend `.env`
```
DATABASE_URL=postgresql://postgres:postgres@db:5432/psp_db
JWT_SECRET=mysecret
PORT=5000
```

### Frontend `.env`
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/mini-psp.git
cd mini-psp

# 2. Start containers
docker compose -f docker-compose.dev.yml up --build

# 3. Open browser
Frontend → http://localhost:3000
Backend  → http://localhost:5000/api
```

---

## 🧠 Design Patterns Used

- Repository Pattern  
- Dependency Injection (via NestJS providers)  
- DTO + Validation Layers  
- Layered Clean Architecture (Controller → Service → Repository)  
- Separation of Concerns (Frontend/Backend decoupled)  

---

## 🧑‍💻 Author
**Soheil Isazade**  
Full Stack Developer | Backend-focused (Node.js + NestJS)  
💼 [GitHub](https://github.com/) | [LinkedIn](https://linkedin.com)

---

## 🏁 License
This project is released under the MIT License.

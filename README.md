# StoreRate — Modern Store Rating & Governance Platform

A full-stack, enterprise-grade store rating and administrative governance platform built with **React 19**, **Express 5**, **Sequelize 6**, and **MySQL**.

---

## 🌟 Key Features

### 1. 🛡️ Role-Based Access Control (RBAC)
- **System Administrator**: Full platform governance, user management (create, search, filter, sort), store registry oversight, and executive analytics.
- **Store Owner**: Store dashboard displaying registered store information, average rating, total ratings, and customer rating breakdown.
- **Normal User / Shopper**: Browse stores, search by name or address, submit ratings (1–5 stars), and update previously submitted ratings.

### 2. 📊 Executive Admin Dashboard
- **Off-White Design Palette**: Built with a clean executive aesthetic (`#F8F9FA` background, `#FFFFFF` cards, `#E2E8F0` borders) plus a one-click dark mode toggle.
- **KPI Metrics Cards**: Total Users (Shoppers/Owners/Admins split), Total Stores (Rated vs. Unrated), Total Ratings (Overall Platform Average), and Review Coverage Rate with smooth count-up animations.
- **PowerPoint-Style Architecture & Process Flow Diagram**: Visual 4-stage pipeline (Discovery ➔ Submission ➔ Intelligence ➔ Governance).
- **Interactive Visualizations**:
  - **Store Rating Distribution Bar Chart**: Proportional breakdown (5★ Emerald, 4★ Teal, 3★ Indigo, 2★ Amber, 1★ Rose, Unrated).
  - **User Ecosystem Segmented Bar**: Visual share of Shoppers, Store Owners, and Admins.
  - **Top-Rated Stores Leaderboard**: Visual podium cards (#1, #2, #3) with average scores and rating progress indicators.
  - **Quick Action Hub**: Direct shortcuts to User Registry, Store Registry, and Security settings.

### 3. ⭐ Star Rating & Review Engine
- Interactive 5-star rating selector with hover preview and score labels.
- Live submission with instant recalculation of store average ratings.
- Automatic detection of prior ratings allowing users to seamlessly edit their rating.

### 4. 🔒 Strict Security & Validation
- **Name Constraints**: Exact range between 5 and 20 characters with live character counter UI.
- **Password Constraints**: 8 to 16 characters, requiring at least one uppercase letter and one special character (`!@#$%^&*`).
- **Email Validation**: RFC-compliant email formatting and uniqueness checks.
- **Address Constraints**: Maximum 400 characters.
- **Authentication**: JWT token authorization in `Bearer <token>` headers, bcrypt password hashing.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, Vite, React Router DOM, Axios, Lucide Icons, Pure CSS Design System |
| **Backend** | Node.js, Express 5, Sequelize 6 ORM |
| **Database** | MySQL / MariaDB |
| **Auth & Security** | JSON Web Tokens (JWT), bcryptjs, express-validator |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MySQL](https://www.mysql.com/) or [XAMPP](https://www.apachefriends.org/)

---

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your environment variables in `.env`:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASS=
   DB_NAME=storerate_db
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. Initialize the database and start the server:
   ```bash
   node server.js
   ```
   *The database schema and tables will be synchronized automatically via Sequelize on startup.*

---

### Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Automated Testing

The backend includes a comprehensive 38-scenario automated test suite verifying all business rules, role authorizations, validation constraints, and database transactions:

```bash
cd backend
node test_all_38_scenarios.js
```

All 38 test suites pass with 100% coverage across authentication, admin privileges, rating workflows, and user constraints.

---

## 👥 Default Roles & Test Credentials

| Role | Email | Password |
|---|---|---|
| **System Admin** | `admin@storerate.com` | `Admin@123` |
| **Normal User** | `shopper@storerate.com` | `Shopper@123` |
| **Store Owner** | `owner@storerate.com` | `Owner@123` |

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

# StoreRate — Store Rating Platform

StoreRate is a full-stack web application that allows users to browse registered stores and submit ratings from **1 to 5**.

The application uses a **single login system with role-based access control (RBAC)** for three user roles:

- System Administrator
- Normal User
- Store Owner

---

## Features

### System Administrator

The System Administrator can:

- Log in to the platform
- View dashboard statistics:
  - Total number of users
  - Total number of stores
  - Total number of submitted ratings
- Add new stores
- Add new normal users
- Add new admin users
- View all registered stores
- View normal users and administrators
- Search and filter users and stores
- View user details
- View a Store Owner's store rating
- Sort supported table fields
- Log out

### Normal User

Normal users can:

- Sign up
- Log in
- Update their password
- View all registered stores
- Search stores by name and address
- View:
  - Store Name
  - Address
  - Overall Rating
  - User's Submitted Rating
- Submit a rating from 1 to 5
- Modify their submitted rating
- Log out

### Store Owner

Store Owners can:

- Log in
- Update their password
- View their store's average rating
- View users who submitted ratings for their store
- Log out

---

## User Roles

| Role | Functionality |
|---|---|
| System Administrator | Manage users, stores and platform data |
| Normal User | Browse stores and submit/modify ratings |
| Store Owner | View store ratings and users who rated |

---

## Application Architecture

```text
React 19 Frontend
       |
       | Axios + REST API
       | JWT Bearer Token
       v
Express 5 Backend
       |
       +-- Authentication
       |
       +-- Validation
       |
       +-- Role-Based Authorization
       |
       +-- Controllers
       |
       v
Sequelize ORM
       |
       v
MySQL / MariaDB

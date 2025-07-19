# 📝 Feedback Collection Platform

A simple full-stack feedback collection platform with role-based access for **Admins** and **Customers**.

---

## 🌐 Tech Stack

- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express, MongoDB
- **Auth:** JWT-based authentication
- **Styling:** Tailwind CSS

---

## 🚀 Features

### 🔐 Authentication
- Register / Login
- JWT Token-based protected routes

### 🧑 Roles
- **Admin:**
  - Create new feedback forms
  - View responses for each form
  - Download responses as Excel
- **Customer:**
  - View and submit responses to assigned forms

### 📦 API Routes

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/forms/create` - Create new form (Admin)
- `GET /api/forms/:formId` - Get form by ID
- `POST /api/responses/:formId` - Submit feedback
- `GET /api/responses/:formId` - Get all responses (Admin)

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/feedback-platform.git
cd feedback-platform
```

### 2. Setup Server (Backend)

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Then start the backend:

```bash
npm run dev
```

### 3. Setup Client (Frontend)

```bash
cd client
npm install
npm start
```

---

## 🌍 Environment Variables

### `.env` in `/server`
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/feedbackDB
JWT_SECRET=yourSecretKey
```

---

## 📂 Folder Structure

```
Feedback_form/
│
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
│
└── README.md
```

---

## 🧠 Future Improvements

- Role-based dashboards
- Email notifications
- Pagination and search in responses
- Analytics for form responses

---

## 🧑‍💻 Author

- Sapna Vijay

---

## 📝 License

© 2025

# Interview Data Management – Final Version

A **MERN stack** web application for managing and tracking interview-related data.  
This project was developed as part of an interview assignment and demonstrates skills in **full-stack development**, **RESTful APIs**, and **secure authentication**.

---

## 📜 Table of Contents
1. [About the Project](#about-the-project)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Environment Variables](#environment-variables)
7. [Running the Application](#running-the-application)
8. [API Endpoints](#api-endpoints)
9. [Screenshots](#screenshots)
10. [Contributing](#contributing)
11. [License](#license)

---

## 📌 About the Project
The **Interview Data Management** system helps store, manage, and view interview-related details such as candidate information, interview schedules, and feedback.

The application allows:
- **Interviewers** to log candidate details and statuses.
- **HR/Admins** to monitor interview progress.
- **Authenticated users** to update and manage data securely.

---

## 🛠 Tech Stack

- **Frontend:** React.js, JS, Axios,  CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Token)
- **Other Tools:** Git/GitHub, dotenv, Postman

---

## ✨ Features

- **User Authentication**
  - Sign up, login, JWT-based sessions
- **Interview Data Management**
  - Create, update, delete interview records
- **Role-Based Access**
  - Only logged-in users can manage data
- **Search & Filter**
  - Quickly find candidates or interview details
- **Responsive Design**
  - Mobile-friendly UI for on-the-go access
- **Error Handling**
  - Clear API responses and frontend alerts

---

## 📂 Project Structure

Interview-project-final-version/
│
├── client/ # React frontend
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Pages like Login, Dashboard
│ │ ├── contexts/ # React Context for auth/data
│ │ ├── services/ # API request handlers
│ │ └── App.js
│ └── package.json
│
├── server/ # Node.js backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route definitions
│ ├── controllers/ # Logic for handling routes
│ ├── middlewares/ # Auth & validation
│ ├── config/ # DB connection
│ └── server.js
│
├── .env.example # Example environment variables
├── README.md
└── package.json 
[Installation](#installation)

---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/KanthTS/Interview-project-final-version.git
cd Interview-project-final-version
cd client
npm install
cd ../server
npm install

.env file
PORT=5000
MONGO_URI=mongodb://localhost:27017/interview_data
JWT_SECRET=your_jwt_secret

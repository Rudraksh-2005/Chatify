# 💬 Chatify – Real-Time Chat Application

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success?logo=mongodb)
![Socket.IO](https://img.shields.io/badge/Socket.IO-RealTime-black?logo=socketdotio)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?logo=tailwindcss)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-blue)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

<p align="center">

A modern Full Stack Real-Time Chat Application built using the **MERN Stack**, **Socket.IO**, **JWT Authentication**, **MongoDB Atlas**, **Cloudinary**, **Resend**, and **Tailwind CSS**.

</p>

---

# 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Project Architecture](#-project-architecture)
- [Folder Structure](#-folder-structure)
- [Tech Stack](#-tech-stack)
- [Installation Guide](#-installation-guide)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [Production Build](#-production-build)
- [API Documentation](#-api-documentation)
- [Socket.IO Workflow](#-socketio-workflow)
- [Authentication Flow](#-authentication-flow)

---

# 📌 Project Overview

**Chatify** is a modern full-stack messaging platform that enables users to communicate instantly using WebSockets.

The application combines **REST APIs** with **Socket.IO** to provide real-time messaging while ensuring secure authentication using **JWT**, encrypted passwords with **bcrypt**, and media storage through **Cloudinary**.

The project follows industry-standard software architecture and demonstrates concepts like:

- RESTful APIs
- JWT Authentication
- Socket.IO
- Protected Routes
- MongoDB Atlas
- Cloudinary Image Upload
- Responsive UI
- HTTP-only Cookies
- API Security
- Rate Limiting
- Email Integration

---

# ✨ Key Features

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- HTTP-only Cookies
- Logout
- Protected Routes
- Session Validation

---

## 💬 Real-Time Chat

- Instant Messaging
- Socket.IO Communication
- Live Message Updates
- Online / Offline Status
- Chat History

---

## 🖼 Image Sharing

- Profile Picture Upload
- Cloudinary Storage
- CDN Optimized Images

---

## 🔔 User Experience

- Message Notification Sound
- Keyboard Typing Sound
- Responsive Design
- Dark Theme
- Mobile Friendly UI

---

## 📧 Email Integration

- Welcome Email
- Transactional Emails
- Powered by Resend

---

## 🛡 Security Features

- JWT Authentication
- Password Hashing (bcrypt)
- Arcjet Rate Limiting
- HTTP-only Cookies
- Environment Variables
- Protected APIs

---

# 🏗 Project Architecture

```text
                        React Frontend
                               │
                    Axios + Socket.IO Client
                               │
                               ▼
                      Express REST API Server
                               │
          ┌────────────────────┴────────────────────┐
          │                                         │
          ▼                                         ▼
 JWT Authentication                        Socket.IO Server
          │                                         │
          ▼                                         ▼
  Protected REST APIs                 Real-Time Communication
          │                                         │
          └────────────────────┬────────────────────┘
                               ▼
                         MongoDB Atlas
                               │
                ┌──────────────┴──────────────┐
                ▼                             ▼
          Cloudinary                     Resend Email
```

---

# 📂 Folder Structure

```text
Chatify/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   ├── socket/
│   │   ├── utils/
│   │   └── index.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── hooks/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── package.json
```

---

# 🚀 Tech Stack

| Category | Technology |
|-----------|------------|
| Frontend | React.js |
| Styling | Tailwind CSS |
| UI Components | DaisyUI |
| Routing | React Router |
| State Management | Zustand |
| Backend | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT |
| Password Encryption | bcryptjs |
| Real-Time Communication | Socket.IO |
| Cloud Storage | Cloudinary |
| Email Service | Resend |
| Security | Arcjet |
| API Client | Axios |
| Environment Variables | dotenv |

---

# ⚙ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Rudraksh-2005/Chatify.git

cd Chatify
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd backend

npm install
```

---

## 3️⃣ Install Frontend Dependencies

Open another terminal

```bash
cd frontend

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside **backend**

```env
PORT=3000

NODE_ENV=development

CLIENT_URL=http://localhost:5173

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

RESEND_API_KEY=

ARCJET_KEY=

ARCJET_ENV=development
```

---

# ▶ Running the Project

## Terminal 1 (Backend)

```bash
cd backend

npm run dev
```

Expected Output

```text
Server is running on port 3000

MongoDB Connected Successfully
```

---

## Terminal 2 (Frontend)

```bash
cd frontend

npm run dev
```

Open your browser

```
http://localhost:5173
```

---

# 🏭 Production Build

## Build Frontend

```bash
cd frontend

npm run build
```

## Start Backend

```bash
cd backend

npm start
```

---

# 🐞 Common Errors

## MongoDB Connection Error

```
querySrv ECONNREFUSED
```

### Solution

- Verify MongoDB Atlas Connection String
- Check Network Access
- Verify DNS Configuration
- Verify Environment Variables
- Check Database User Credentials

---

## CORS Error

Ensure

```env
CLIENT_URL=http://localhost:5173
```

matches your frontend URL.

---

## JWT Error

Ensure

```env
JWT_SECRET
```

exists in the `.env` file.

---

## Cloudinary Error

Verify

- Cloud Name
- API Key
- API Secret

---

## Resend Email Error

Verify

```
RESEND_API_KEY
```

is correctly configured.

---


# 📡 API Documentation

The backend exposes REST APIs for authentication, profile management and real-time messaging.

**Base URL**

```
http://localhost:3000/api
```

---

# 🔐 Authentication APIs

| Method | Endpoint | Description | Authentication |
|---------|----------|-------------|----------------|
| POST | `/auth/signup` | Register a new user | ❌ |
| POST | `/auth/login` | Login user | ❌ |
| POST | `/auth/logout` | Logout current user | ✅ |
| PUT | `/auth/update-profile` | Update profile picture | ✅ |
| GET | `/auth/check` | Verify current logged-in user | ✅ |

---

## 🟢 User Signup

### Endpoint

```http
POST /api/auth/signup
```

### Request Body

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "_id": "665b2....",
  "fullName": "John Doe",
  "email": "john@example.com",
  "profilePic": "",
  "token": "JWT_TOKEN"
}
```

---

## 🔑 User Login

### Endpoint

```http
POST /api/auth/login
```

### Request

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "_id": "...",
  "fullName": "John Doe",
  "email": "john@example.com",
  "profilePic": ""
}
```

---

## 🚪 Logout

### Endpoint

```http
POST /api/auth/logout
```

### Response

```json
{
    "message":"Logged Out Successfully"
}
```

---

## 👤 Update Profile

### Endpoint

```http
PUT /api/auth/update-profile
```

### Request

```json
{
    "profilePic":"base64_or_image_url"
}
```

### Response

```json
{
    "profilePic":"https://res.cloudinary.com/...."
}
```

---

## ✅ Check Authentication

### Endpoint

```http
GET /api/auth/check
```

Returns currently logged in user.

---

# 💬 Message APIs

| Method | Endpoint | Description | Authentication |
|---------|----------|-------------|----------------|
| GET | `/messages/contacts` | Get all contacts | ✅ |
| GET | `/messages/chat` | Get chat partners | ✅ |
| GET | `/messages/:id` | Fetch conversation | ✅ |
| POST | `/messages/send/:id` | Send message | ✅ |

---

# 📥 Get Contacts

```http
GET /api/messages/contacts
```

### Response

```json
[
   {
      "_id":"...",
      "fullName":"Alex"
   },
   {
      "_id":"...",
      "fullName":"Emma"
   }
]
```

---

# 💬 Get Conversation

```http
GET /api/messages/:id
```

Returns all messages exchanged with the selected user.

Example Response

```json
[
   {
      "senderId":"...",
      "receiverId":"...",
      "text":"Hello",
      "createdAt":"..."
   }
]
```

---

# 📤 Send Message

```http
POST /api/messages/send/:id
```

### Request

```json
{
    "text":"Hello 👋"
}
```

### Response

```json
{
    "_id":"...",
    "senderId":"...",
    "receiverId":"...",
    "text":"Hello 👋",
    "createdAt":"..."
}
```

---

# 🔄 API Workflow

## 📝 Signup Flow

```
User
   │
   ▼
Signup Form
   │
Axios Request
   │
Express API
   │
Validate Input
   │
Hash Password
   │
MongoDB Atlas
   │
Generate JWT
   │
HTTP-only Cookie
   │
Send Welcome Email
   │
Return Success Response
```

---

## 🔐 Login Flow

```
User
   │
   ▼
Login Form
   │
Axios
   │
Backend
   │
Find User
   │
Compare Password
   │
Generate JWT
   │
Store Cookie
   │
Authenticated
```

---

## 💬 Chat Flow

```
User A
   │
Socket Emit
   │
Socket.IO Server
   │
Store Message
   │
MongoDB
   │
Emit to User B
   │
Notification Sound
   │
Display Message
```

---

# ⚡ Socket.IO Events

## Client → Server

| Event | Description |
|--------|-------------|
| connection | User Connected |
| sendMessage | Send Message |
| disconnect | User Disconnected |

---

## Server → Client

| Event | Description |
|--------|-------------|
| receiveMessage | Receive New Message |
| onlineUsers | Active Users |
| disconnect | User Left |

---

# ☁ Cloudinary Upload Flow

```
Choose Image
      │
      ▼
Frontend
      │
Axios Upload
      │
Backend
      │
Cloudinary
      │
Image URL
      │
MongoDB
      │
Profile Updated
```

---

# 📧 Resend Email Flow

```
Signup
   │
Backend
   │
Generate Email
   │
Resend API
   │
User Inbox
```

---

# 🛡 Arcjet Security

The backend uses **Arcjet** to provide:

- API Protection
- Rate Limiting
- Bot Detection
- Request Validation
- Abuse Prevention

Every request passes through Arcjet middleware before reaching protected routes.

---

# 🔐 Authentication Workflow

```
Login
   │
Generate JWT
   │
Store HTTP-only Cookie
   │
Protected Route
   │
Verify Token
   │
Allow Request
```

---

# 🍪 Cookie Based Authentication

Instead of storing JWT inside Local Storage,

Chatify stores authentication tokens inside

- HTTP-only Cookies
- Secure Cookies
- Protected Routes

Benefits

- XSS Protection
- Secure Sessions
- Stateless Authentication

---

# 📱 Responsive Design

The application supports

- Desktop
- Tablet
- Mobile

using

- Tailwind CSS
- DaisyUI
- Flexbox
- Responsive Components

---

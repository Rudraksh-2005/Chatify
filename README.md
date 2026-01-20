# Chatify 💬

Chatify is a **full-stack real-time chat application** designed to provide seamless, fast, and interactive communication between users. The project demonstrates the use of modern web technologies, real-time communication, authentication, and a responsive UI.

---

## 📌 Project Overview

Chatify allows users to:

* Register and log in securely
* Chat with other users in real time
* Send and receive messages instantly
* Experience audio/notification alerts for messages
* Use a modern, responsive user interface

The project follows a **client–server architecture** using a frontend for UI and a backend for business logic and real-time communication.

---

## 🏗️ Project Architecture

```
Chatify/
│
├── backend/        # Server-side code
├── frontend/       # Client-side UI
├── package.json    # Project dependencies
├── .gitignore
└── README.md
```

---

## 🚀 Platforms & Technologies Used

### 🌐 Frontend

* **React.js** – Component-based UI development
* **Tailwind CSS** – Utility-first CSS framework for styling
* **JavaScript (ES6+)** – Frontend logic

### 🖥️ Backend

* **Node.js** – JavaScript runtime environment
* **Express.js** – Backend framework for APIs
* **Socket.IO** – Real-time bidirectional communication

### 🗄️ Database

* **MongoDB** – NoSQL database for storing users and messages

### 🔐 Authentication

* **JWT (JSON Web Token)** – Secure user authentication

---

## 🧩 Tech Stack Breakdown (Categorized)

---

## 🖥️ Platform & Runtime

### 🟢 Node.js

**Category:** Backend Runtime

Purpose:

* Executes JavaScript on the server
* Handles asynchronous operations efficiently
* Supports scalable real-time applications

---

## 🌐 Backend Framework & Real-Time Communication

### 🟢 Express.js

**Category:** Backend Framework

Purpose:

* Builds RESTful APIs
* Handles routing and middleware
* Manages authentication and request validation

---

### 🟢 Socket.IO

**Category:** Real-Time Communication

Purpose:

* Enables instant messaging
* Maintains persistent WebSocket connections
* Handles online/offline user status

---

## 🗄️ Database & Cloud Storage

### 🟢 MongoDB Atlas

**Category:** Database Platform

Purpose:

* Stores user accounts and chat messages
* Cloud-hosted and scalable NoSQL database
* High availability and security

---

### 🟢 Cloudinary

**Category:** Media Storage Platform

Purpose:

* Stores profile images and media files
* Optimized image delivery via CDN
* Reduces server load

---

## 📧 External Services

### 🟢 Resend

**Category:** Email Service

Purpose:

* Sends welcome/verification emails during signup
* Reliable transactional email delivery

---

### 🟢 Arcjet

**Category:** Security Platform

Purpose:

* API protection and rate limiting
* Prevents abuse and malicious requests

---

## 🔐 Authentication & Security

### 🟢 JWT (JSON Web Token)

**Category:** Authentication

Purpose:

* Secure user sessions
* Token-based authorization
* Stateless authentication mechanism

---

### 🟢 bcryptjs

**Category:** Security Library

Purpose:

* Hashes user passwords
* Protects against password leaks

---

### 🟢 cookie-parser

**Category:** Middleware

Purpose:

* Reads JWT tokens from cookies
* Manages user sessions

---

## 🎨 Frontend Libraries & Styling

### 🟢 React.js

**Category:** Frontend Library

Purpose:

* Component-based UI development
* Efficient rendering using Virtual DOM
* Handles chat interface logic

---

### 🟢 Tailwind CSS

**Category:** Styling Framework

Purpose:

* Utility-first styling
* Responsive and clean UI design

---

### 🟢 DaisyUI

**Category:** UI Component Library

Purpose:

* Pre-built Tailwind components
* Consistent and modern UI

---

### 🟢 Lucide-react

**Category:** Icon Library

Purpose:

* Lightweight SVG icons
* Improves UI aesthetics

---

## 🧠 State Management & Routing

### 🟢 Zustand

**Category:** State Management

Purpose:

* Global state handling
* Manages user and chat state
* Avoids prop drilling

---

### 🟢 React Router

**Category:** Routing Library

Purpose:

* Client-side navigation
* Protected and public routes

---

## 🌍 Networking & Utilities

### 🟢 Axios

**Category:** HTTP Client

Purpose:

* Handles API requests
* Simplifies frontend-backend communication

---

### 🟢 CORS

**Category:** Security Middleware

Purpose:

* Allows cross-origin requests
* Prevents browser CORS issues

---

### 🟢 dotenv

**Category:** Configuration Utility

Purpose:

* Manages environment variables
* Keeps sensitive data secure

---

### 🟢 Toast Notifications

**Category:** UI Utility

Purpose:

* Displays success/error feedback
* Improves user experience

---

## ✨ Features & Functional Explanation

### 🔐 User Signup with Email Sending

* When a user signs up, an email is automatically sent using **Resend**
* Can be used for welcome or verification purposes

Purpose:

* Improve user trust
* Confirm successful registration

---

### 💬 Real-Time Messaging

* Messages are delivered instantly using **Socket.IO**
* No page refresh required

Functions:

* `sendMessage()` – Emits message to server
* `receiveMessage()` – Listens for incoming messages

---

### ⌨️ Keyboard Sound Feature

* Plays a typing sound when the user presses keys in the chat input

Purpose:

* Enhances chat realism
* Improves user interaction experience

---

### 🔔 Notification Sound

* Plays a sound when a new message is received

Purpose:

* Alerts user of new messages
* Works even when chat window is not focused

---

### 🟢 Online / Offline Status

* Tracks user connection using Socket.IO
* Shows real-time user availability

---

### 📱 Responsive UI

* Built using Tailwind CSS & DaisyUI
* Fully responsive across devices

---

### 💬 Real-Time Messaging

**Functionality:**

* Messages are sent instantly without refreshing the page
* Implemented using Socket.IO

**Core Functions:**

* `sendMessage()` – Emits message event to server
* `receiveMessage()` – Listens for incoming messages

---

### 🔔 Sound / Notification Feature

* Plays a sound when a new message is received
* Enhances user experience

Example logic:

```
new Audio(notificationSound).play();
```

---

### 🟢 Online / Offline Status

* Detects when a user connects or disconnects
* Helps show active users

---

### 📱 Responsive UI

* Works on desktop and mobile screens
* Tailwind CSS ensures responsiveness

---

## 🔄 API Flow (Backend–Frontend Communication)

This section explains **how APIs and real-time events flow inside Chatify**, step by step.

---

### 🧩 1. User Signup API Flow

**Flow:**

1. User enters name, email, and password on signup page
2. Frontend sends data using Axios to backend API
3. Backend validates input
4. Password is hashed using `bcryptjs`
5. User data is stored in MongoDB Atlas
6. JWT token is generated
7. Token is stored in HTTP-only cookie
8. Welcome email is sent using Resend
9. Success response is returned to frontend

**Purpose:**

* Secure account creation
* Email confirmation

---

### 🧩 2. User Login API Flow

**Flow:**

1. User enters email and password
2. Frontend sends credentials via Axios
3. Backend verifies email
4. Password is compared using `bcryptjs.compare()`
5. JWT token is generated
6. Token is stored in cookie
7. User is authenticated

---

### 🧩 3. Authentication Middleware Flow

**Flow:**

1. Client sends request to protected route
2. `cookie-parser` extracts JWT token
3. Token is verified using JWT secret
4. If valid → request proceeds
5. If invalid → access denied

---

### 🧩 4. Real-Time Chat (Socket.IO) Flow

**Flow:**

1. User connects to Socket.IO server after login
2. Server registers socket ID with user ID
3. User sends message
4. Message is emitted to server
5. Server broadcasts message to receiver
6. Receiver instantly receives message
7. Notification sound plays

---

### 🧩 5. Keyboard Sound Flow

**Flow:**

1. User types in chat input field
2. Keypress event is detected
3. Typing sound audio is triggered

---

### 🧩 6. Notification Sound Flow

**Flow:**

1. Incoming message event received
2. Audio notification is triggered
3. Message is displayed on UI

---

### 🧩 7. Image Upload Flow (Cloudinary)

**Flow:**

1. User selects image
2. Image is sent to backend
3. Backend uploads image to Cloudinary
4. Cloudinary returns image URL
5. URL is stored in database
6. Image is displayed in chat

---

### 🧩 8. Logout Flow

**Flow:**

1. User clicks logout
2. Backend clears authentication cookie
3. Socket connection is disconnected
4. User session ends

---

## ⚙️ Installation & Setup

### Frontend Setup

```bash
cd frontend
npm install
npm run build
```

### Backend Setup

```bash
cd backend
npm install
npm start
```
---

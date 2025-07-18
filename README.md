# 🚀 Full Stack Projects by Kunal

This repository includes **two full-stack web applications** built using the MERN stack (MongoDB, Express.js, React, Node.js):

- ✍️ [Research Paper Submission System](#1-research-paper-submission-system)
- 🧠 [Quiz Web App with Admin Panel](#2-quiz-web-app)

---

## 1. ✍️ Research Paper Submission System

### 📌 Description
A platform for students and researchers to submit their research papers for review. Admins can review submissions, approve, and manage submissions with ease.

### 🔧 Features
- Submit research paper form (title, author, content)
- Admin dashboard to view or approve papers
- View status of submitted papers (approved, pending)

### 🛠️ Tech Stack
- **Frontend**: React.js, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB


---

## 2. 🧠 Quiz Web App with Admin Panel

### 📌 Description
A fully dynamic quiz web app where users can take quizzes based on **category** and **difficulty**, view results, and track history. Admins can manage all quiz content.

### 🔧 Features

#### 👤 User Side
- Signup/Login (JWT-based)
- Take quizzes by selecting:
  - Category: Math, Science, Computer
  - Difficulty: Easy, Medium, Hard
- Timer for each quiz
- View results with score and correct answers
- Quiz history & performance tracking

#### 🛡️ Admin Side
- Role-based access with admin middleware
- Add new questions (with options, correct answer, explanation)
- Update or delete questions
- Filter questions by category/difficulty
- View all stored questions
- View all the signed up users
- Clean admin UI with controlled inputs

### 🛠️ Tech Stack
- **Frontend**: React.js, Context API, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Role-based Auth

### 🧠 Schema Structure (MongoDB)
```js
// User
{
  username: String,
  email: String,
  password: String (hashed),
  role: String ("user" or "admin")
}

// Question
{
  question: String,
  options: [String],
  correctAnswer: String or [String],
  category: String,
  difficulty: String,
  explanation: String
}

// Result
{
  userId: ObjectId,
  score: Number,
  category: String,
  difficulty: String,
  questionsAtempted: Number
}

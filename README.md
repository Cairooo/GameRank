# 🎮 GameRank

GameRank is a full-stack web application that allows users to create and manage a personal ranking of their favorite games.  
The project focuses on backend fundamentals such as CRUD operations, database persistence, API consumption, and server-side rendering.

---

## 📌 Features

- Create a ranking of games divided into categories (S, A, B, C)
- Fetch game cover images dynamically using the IGDB API
- Add new games to the ranking
- Edit existing games (update cover and rank)
- Delete games from the database
- Server-side rendering with EJS
- Persistent data storage using PostgreSQL

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- Axios

### Frontend
- EJS (Embedded JavaScript Templates)
- HTML5
- CSS3

### External API
- IGDB API (via Twitch OAuth Client Credentials)

---

## 🗂️ Project Structure

GameRank/
├── public/
│ └── style/
│ └── main.css
├── views/
│ ├── index.ejs
│ ├── ranking.ejs
│ └── edit.ejs
├── index.js
├── package.json
├── .env
└── README.md


---

## ⚙️ Environment Variables

This project uses environment variables to securely store API credentials.

Create a `.env` file in the root directory with the following variables:

TWITCH_CLIENT_ID=your_client_id_here
TWITCH_CLIENT_SECRET=your_client_secret_here


> ⚠️ The `.env` file must **not** be committed to GitHub.

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gamerank.git
Navigate into the project folder:

cd gamerank

Install dependencies:
npm install

Create the PostgreSQL database:
CREATE DATABASE gamerank;

Configure the .env file with your API credentials

Start the server:
nodemon index.js

Open the application in your browser:
http://localhost:3000

📚 What This Project Demonstrates

Full CRUD implementation with PostgreSQL

Backend routing and RESTful patterns using Express

Server-side rendering with EJS

Consumption of third-party APIs with OAuth authentication

Secure handling of sensitive data using environment variables

Error handling with try/catch blocks

Clear separation between frontend views and backend logic

Backend-driven navigation instead of file-based routing

🎯 Project Purpose

This project was developed during a career transition into web development.
The goal was to focus on backend fundamentals while keeping the frontend clean, simple, and functional.

The emphasis is on:

Code clarity

Correct backend logic

Real-world development practices

🔮 Possible Improvements

User authentication (JWT or sessions)

User-specific rankings

API response caching

Code refactoring to reduce repetition

Frontend refactor using React

Better error feedback on the UI

👤 Author

Developed by Cairo Estrella de Oliveira
Junior Full-Stack / Backend-focused Developer

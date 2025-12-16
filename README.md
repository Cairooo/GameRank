🎮 GameRank

GameRank is a full-stack web application that allows users to create and manage a personal ranking of their favorite games. The project demonstrates CRUD operations, server-side rendering, database persistence, and integration with an external API.

This project was built as part of a career transition into web development, focusing on learning back-end fundamentals while maintaining a clean and simple front-end.

🚀 Features

Create game rankings by category (S, A, B, C)

Edit existing game entries

Delete games from the ranking

Persistent data storage using PostgreSQL

Integration with the IGDB API to fetch game cover images

Server-side rendering with EJS

🛠️ Tech Stack
Front-end

HTML5

CSS3

EJS (Embedded JavaScript Templates)

Back-end

Node.js

Express.js

Axios

Database

PostgreSQL

External API

IGDB API (via Twitch OAuth authentication)

📂 Project Structure
GameRank/
├── public/            # Static assets (CSS, images)
├── views/             # EJS templates
│   ├── index.ejs
│   ├── ranking.ejs
│   └── edit.ejs
├── index.js           # Main server file
├── package.json
├── .env               # Environment variables (not committed)
└── README.md
⚙️ Environment Variables

This project uses environment variables to store sensitive credentials. Create a .env file in the root directory with the following values:

TWITCH_CLIENT_ID=your_client_id_here
TWITCH_CLIENT_SECRET=your_client_secret_here

⚠️ The .env file is ignored via .gitignore and should never be committed to GitHub.

🧠 How It Works

The user submits a game name and selects a rank category

The server requests an OAuth token from Twitch

The IGDB API is queried using the token

The game cover image URL is extracted

The data is stored in a PostgreSQL database

The ranking page is re-rendered with updated data

▶️ Running the Project Locally
Prerequisites

Node.js

PostgreSQL

Git

Steps
# Clone the repository
git clone https://github.com/your-username/gamerank.git


# Navigate into the project folder
cd gamerank


# Install dependencies
npm install


# Start the server
nodemon index.js

The application will run at:

http://localhost:3000
📌 What This Project Demonstrates

Understanding of RESTful routing

CRUD operations with PostgreSQL

API authentication using OAuth

Server-side rendering with EJS

Clean separation of concerns

Error handling using try/catch

🎯 Future Improvements

User authentication

Responsive UI improvements

Pagination or filtering

Refactoring repetitive routes

Front-end migration to React

👤 Author

Cairo Estrella de Oliveira
Aspiring Full-Stack Developer

📜 License

This project is for educational purposes only.

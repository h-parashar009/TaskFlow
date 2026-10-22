# TaskFlow — Full-Stack Task Manager

TaskFlow is a full-stack task management application built with React, Node.js, Express.js, and MongoDB. It provides a clean dashboard to create, organize, search, update, and track tasks.

## 🚀 Live Demo

**Live Website:** [Open TaskFlow](PASTE_YOUR_VERCEL_URL_HERE)

**GitHub Repository:** [TaskFlow](https://github.com/h-parashar009/TaskFlow)

## Features

- Create tasks with a title and description
- View all tasks in a dashboard
- Edit existing tasks
- Mark tasks as completed or pending
- Delete tasks
- Search tasks by title
- Persist task data in MongoDB Atlas
- Validate task input and handle API errors
- Responsive user interface

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, CSS, Lucide React |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| API | REST API |
| Version Control | Git, GitHub |

## Project Structure

```text
TaskFlow/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env                 # Create locally; not committed
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB Atlas account or MongoDB connection string
- Git

### 1. Clone the repository

```bash
git clone https://github.com/h-parashar009/TaskFlow.git
cd TaskFlow
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB connection string. Keep `.env` private and never commit database credentials to GitHub.

### 4. Start the backend

From the `backend` directory, run:

```bash
node server.js
```

The API will run at `http://localhost:5000` if port 5000 is available.

Check the backend health endpoint:

```text
http://localhost:5000/api/health
```

### 5. Start the frontend

Open a second terminal and run:

```bash
cd TaskFlow/frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check server and database status |
| GET | `/api/tasks` | Retrieve all tasks |
| GET | `/api/tasks/:id` | Retrieve a task by ID |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Example task object

```json
{
  "title": "Learn Full-Stack Development",
  "description": "Build the TaskFlow project",
  "completed": false
}
```

## Security Notes

- Store MongoDB credentials in `backend/.env`.
- Never publish `.env` or database passwords.
- Configure appropriate database network access and credentials in MongoDB Atlas.

## Future Improvements

- User authentication and authorization
- Task deadlines and priority levels
- Task filtering and sorting
- Deployment with a live demo

## License

This project was created for learning and educational purposes.

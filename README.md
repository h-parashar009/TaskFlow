# TaskFlow — Full-Stack Task Manager

TaskFlow is a full-stack task management application built with React, Node.js, Express.js, and MongoDB. It provides a clean, responsive dashboard to create, organize, search, update, and track tasks.

## 🚀 Live Demo

**Live Website:** [Open TaskFlow](https://task-flow-inky-rho.vercel.app/)

**GitHub Repository:** [h-parashar009/TaskFlow](https://github.com/h-parashar009/TaskFlow)

## ✨ Features

- Create tasks with titles and descriptions
- View all tasks in a centralized dashboard
- Edit existing tasks
- Mark tasks as completed or pending
- Delete tasks
- Search tasks by title
- Persist task data using MongoDB Atlas
- Validate task input and handle API errors
- Responsive user interface
- RESTful API for task management

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, CSS, Lucide React |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| API | REST API |
| Deployment | Vercel, Render |
| Version Control | Git, GitHub |

## 📁 Project Structure

```text
TaskFlow/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   └── package.json
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

## ⚙️ Getting Started

Follow these instructions to run TaskFlow locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- A MongoDB Atlas account or a valid MongoDB connection string

### 1. Clone the Repository

```bash
git clone https://github.com/h-parashar009/TaskFlow.git
cd TaskFlow
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

**Important:** Keep your `.env` file private. Never commit database credentials or passwords to GitHub.

### 4. Start the Backend

From the `backend` directory, run:

```bash
node server.js
```

The backend will run at:

```text
http://localhost:5000
```

To check the server and database status, open:

```text
http://localhost:5000/api/health
```

### 5. Start the Frontend

Open a second terminal from the project root and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

The frontend uses the configured API URL to communicate with the backend.

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check whether the API is running |
| GET | `/api/health` | Check server and database status |
| GET | `/api/tasks` | Retrieve all tasks |
| GET | `/api/tasks/:id` | Retrieve a task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Example Task Object

```json
{
  "title": "Learn Full-Stack Development",
  "description": "Build the TaskFlow project",
  "completed": false
}
```

## 🌐 Deployment

TaskFlow is deployed using the following services:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

The frontend communicates with the deployed backend API, which stores task data in MongoDB Atlas.

## 🔒 Security

- MongoDB credentials are stored in environment variables.
- The `.env` file is excluded from version control.
- Database credentials and passwords should never be published.
- MongoDB Atlas network access should be configured appropriately.

## 🔮 Future Improvements

- User authentication and authorization
- Task priorities and deadlines
- Task filtering and sorting
- Due-date reminders
- Improved task statistics and dashboard insights

## 📄 License

This project was created for learning and educational purposes.

---

**Built by [Harsh Parashar](https://github.com/h-parashar009)**

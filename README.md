# TaskFlow — Full-Stack Task Manager

TaskFlow is a full-stack task management application that allows users to create, view, edit, complete, delete, and search tasks.

## Features

- Create new tasks with a title and description
- View all tasks
- Edit existing tasks
- Mark tasks as completed or pending
- Delete tasks
- Search tasks by name
- Store tasks persistently in MongoDB
- Validate empty task titles

## Tech Stack

**Frontend**
- React
- Vite
- CSS
- Lucide React

**Backend**
- Node.js
- Express.js
- REST API

**Database**
- MongoDB Atlas
- Mongoose

## Project Structure

```text
taskflow/
├── backend/
│   ├── controllers/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   └── package.json
├── .gitignore
└── README.md
```

## Getting Started

### 1. Install dependencies

Open a terminal in the backend directory:

```bash
cd backend
npm install
```

Open another terminal in the frontend directory:

```bash
cd frontend
npm install
```

### 2. Configure environment variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB connection string. Never commit your `.env` file or share database credentials publicly.

### 3. Start the backend

From the backend directory, run:

```bash
npm start
```

If a `start` script is not configured in `package.json`, use:

```bash
node server.js
```

### 4. Start the frontend

From the frontend directory, run:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check server and database status |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a task by ID |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Testing

The following application flows have been manually tested:

- Task persistence after page refresh
- Task creation
- Task editing
- Completion status updates
- Search filtering
- Task deletion
- Empty-title validation

## License

This project is intended for learning and educational purposes.
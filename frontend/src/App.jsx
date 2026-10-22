
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Circle,
  ClipboardList,
  Clock3,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import "./App.css";

const API_URL = "https://taskflow-api-vmd8.onrender.com/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  async function fetchTasks() {
    try {
      setError("");
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Could not load tasks.");
      }

      const data = await response.json();
      setTasks(data);
    } catch {
      setError("Unable to connect to the backend. Check that your server is running on port 5000.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task title.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not save task.");
      }

      setTitle("");
      setDescription("");
      setEditingId(null);
      await fetchTasks();
    } catch (err) {
      setError(err.message || "Could not save task.");
    } finally {
      setSaving(false);
    }
  }

  function startEditing(task) {
    setEditingId(task._id);
    setTitle(task.title);
    setDescription(task.description || "");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function toggleTask(task) {
    try {
      setError("");

      const response = await fetch(`${API_URL}/${task._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });

      if (!response.ok) {
        throw new Error("Could not update task.");
      }

      await fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteTask(id) {
    if (!window.confirm("Delete this task permanently?")) return;

    try {
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Could not delete task.");
      }

      await fetchTasks();

      if (editingId === id) {
        resetForm();
      }
    } catch (err) {
      setError(err.message);
    }
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setEditingId(null);
    setError("");
  }

  const filteredTasks = tasks.filter((task) => {
    const query = search.toLowerCase();

    return (
      task.title.toLowerCase().includes(query) ||
      (task.description || "").toLowerCase().includes(query)
    );
  });

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;
  const progress = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#home">
          <span className="brand-icon">
            <ClipboardList size={24} />
          </span>
          <span>TaskFlow<span className="brand-dot">.</span></span>
        </a>

        <p className="nav-label">WORKSPACE</p>
        <a className="nav-item active" href="#tasks">
          <ClipboardList size={19} />
          <span>My Tasks</span>
          <span className="nav-count">{tasks.length}</span>
        </a>

        <div className="sidebar-bottom">
          <div className="sidebar-note">
            <div className="note-icon"><CheckCircle2 size={20} /></div>
            <h3>Small steps.</h3>
            <h3>Big progress.</h3>
            <p>Stay focused and keep moving forward.</p>
          </div>
          <p className="sidebar-footer">TASKFLOW © 2026</p>
        </div>
      </aside>

      <main className="main-content" id="home">
        <header className="topbar">
          <div>
            <p className="eyebrow">YOUR WORKSPACE</p>
            <h1>My Tasks</h1>
          </div>
          <div className="today-badge">
            <Clock3 size={16} />
            <span>Personal planner</span>
          </div>
        </header>

        <section className="welcome">
          <div className="welcome-content">
            <span className="welcome-tag">YOUR DAY, ORGANIZED</span>
            <h2>Make room for what matters.</h2>
            <p>Capture your tasks, track your progress, and get things done.</p>
          </div>
          <div className="welcome-art" aria-hidden="true">
            <div className="art-circle circle-one"></div>
            <div className="art-circle circle-two"></div>
            <div className="art-card">
              <CheckCircle2 size={33} />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-top">
              <span>Total tasks</span>
              <span className="stat-icon purple"><ClipboardList size={19} /></span>
            </div>
            <strong>{tasks.length}</strong>
            <p>Tasks in your workspace</p>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>To do</span>
              <span className="stat-icon orange"><Clock3 size={19} /></span>
            </div>
            <strong>{pendingCount}</strong>
            <p>Waiting for your attention</p>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>Completed</span>
              <span className="stat-icon green"><CheckCircle2 size={19} /></span>
            </div>
            <strong>{completedCount}</strong>
            <p>Tasks finished so far</p>
          </article>
        </section>

        <section className="progress-card">
          <div className="progress-heading">
            <div>
              <h3>Your progress</h3>
              <p>Every completed task counts.</p>
            </div>
            <strong>{progress}%</strong>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </section>

        <section className="task-workspace" id="tasks">
          <div className="section-heading">
            <div>
              <h2>{editingId ? "Edit task" : "Create a task"}</h2>
              <p>{editingId ? "Update your task details." : "What's on your mind today?"}</p>
            </div>
          </div>

          <form className="task-form" onSubmit={handleSubmit}>
            <label htmlFor="task-title">Task title</label>
            <input
              id="task-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. Finish my React project"
              maxLength={150}
              required
            />

            <label htmlFor="task-description">Description <span>(optional)</span></label>
            <textarea
              id="task-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Add a few details..."
              rows={3}
            />

            {error && <p className="error-message" role="alert">{error}</p>}

            <div className="form-actions">
              {editingId && (
                <button className="button-secondary" type="button" onClick={resetForm}>
                  <X size={17} /> Cancel
                </button>
              )}
              <button className="button-primary" type="submit" disabled={saving}>
                <Plus size={18} />
                {saving ? "Saving..." : editingId ? "Save changes" : "Add task"}
              </button>
            </div>
          </form>
        </section>

        <section className="task-list-section">
          <div className="list-heading">
            <div>
              <h2>All tasks <span>{tasks.length}</span></h2>
              <p>Your tasks, all in one place.</p>
            </div>
            <div className="search-box">
              <Search size={18} />
              <input
                aria-label="Search tasks"
                placeholder="Search tasks..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <div className="empty-state">Loading your tasks...</div>
          ) : filteredTasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon"><ClipboardList size={27} /></div>
              <h3>{search ? "No matching tasks" : "Nothing on your list yet"}</h3>
              <p>{search ? "Try a different search." : "Create your first task above and it will appear here."}</p>
            </div>
          ) : (
            <div className="task-list">
              {filteredTasks.map((task) => (
                <article className={`task-item ${task.completed ? "task-completed" : ""}`} key={task._id}>
                  <button
                    className="complete-button"
                    onClick={() => toggleTask(task)}
                    aria-label={task.completed ? "Mark as pending" : "Mark as completed"}
                    title={task.completed ? "Mark as pending" : "Mark as completed"}
                  >
                    {task.completed
                      ? <CheckCircle2 size={23} />
                      : <Circle size={23} />}
                  </button>

                  <div className="task-details">
                    <h3>{task.title}</h3>
                    {task.description && <p>{task.description}</p>}
                    <span className={`task-status ${task.completed ? "status-done" : "status-pending"}`}>
                      {task.completed ? "Completed" : "In progress"}
                    </span>
                  </div>

                  <div className="task-actions">
                    <button onClick={() => startEditing(task)} aria-label="Edit task" title="Edit task">
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(task._id)}
                      aria-label="Delete task"
                      title="Delete task"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <footer className="main-footer">
          <span>TaskFlow</span>
          <span>Built to help you focus on what matters.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;

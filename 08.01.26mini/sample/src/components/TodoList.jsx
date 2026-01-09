import { useState } from 'react';
import './FormStyles.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks(prev => [...prev, { id: Date.now(), text: newTask.trim() }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="form-container">
      <h2>Dynamic Todo List</h2>
      <form onSubmit={handleAddTask} className="form">
        <div className="form-group">
          <label htmlFor="task">Add Task:</label>
          <input
            type="text"
            id="task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
        </div>
        <button type="submit" className="submit-btn">Add Task</button>
      </form>

      <div className="todo-list">
        {tasks.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one above!</p>
        ) : (
          <ul>
            {tasks.map(task => (
              <li key={task.id} className="todo-item">
                <span>{task.text}</span>
                <button
                  onClick={() => handleRemoveTask(task.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoList;

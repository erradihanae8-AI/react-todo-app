import React from 'react';

function TaskItem({ task, tasks, setTasks }) {
  const toggleComplete = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="task-item">
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text} [{task.category}]
      </span>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default TaskItem;

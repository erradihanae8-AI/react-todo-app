import React, { useState } from 'react';

function Filter({ tasks, setTasks }) {
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return task.category === filter;
  });

  return (
    <div className="filter">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Completed</option>
        <option>Pending</option>
        <option>Work</option>
        <option>Study</option>
        <option>Personal</option>
      </select>

      <div className="filtered-tasks">
        {filteredTasks.map((task) => (
          <div key={task.id}>
            {task.text} [{task.category}] {task.completed ? '(Done)' : ''}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;

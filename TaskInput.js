import React, { useState } from 'react';

function TaskInput({ tasks, setTasks }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Work');

  const handleAdd = () => {
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text, category, completed: false }]);
    setText('');
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Work</option>
        <option>Study</option>
        <option>Personal</option>
      </select>
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
}

export default TaskInput;

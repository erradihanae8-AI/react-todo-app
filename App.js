import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Charger depuis localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // Sauvegarder dans localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <Filter tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Tasks.css';
import backButton from './images/back_button.png';
import { Link } from 'react-router-dom';

function Tasks() {
  const [tasks, setTasks] = useState(["Shower", "Meditation", "Drink Water", "Journal"]);
  const [date, setDate] = useState(new Date());

  const addTask = () => {
    const newTask = prompt("What task would you like to add?");
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div className="Tasks">
      <header className="Tasks-header">
        <Link to="/" onClick={() => { console.log("Tasks button clicked!") }}>
          <img src={backButton} alt="Back Button" className="back-button" />
        </Link>
        <p>Today is {date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <div className="task-grid">
          {tasks.map((task, index) => (
            <div key={index} className="task-box">{task}</div>
          ))}
          <div className="task-box add-task" onClick={addTask}>+</div>
        </div>
      </header>
    </div>
  );
}

export default Tasks;

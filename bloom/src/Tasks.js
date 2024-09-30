import React, { useState, useEffect } from 'react';
import './Tasks.css';
import backButton from './images/back_button.png';
import deleteIcon from './images/x_icon.png';
import counterBackground from './images/task_counter.png';
import gardenButton from './images/garden_button.png';
import { Link } from 'react-router-dom';

function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      { text: "Shower", isCompleted: false },
      { text: "Meditation", isCompleted: false },
      { text: "Drink Water", isCompleted: false },
      { text: "Journal", isCompleted: false }
    ];
  });

  const [date, setDate] = useState(new Date());
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const count = tasks.filter(task => task.isCompleted).length;
    setCompletedCount(count);
    
    const completionPercentage = tasks.length >= 3 ? (count / tasks.length) * 100 : 0;
    
    localStorage.setItem("completionPercentage", completionPercentage.toString());
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask = prompt("What task would you like to add?");
    if (newTask) {
      setTasks([...tasks, { text: newTask, isCompleted: false }]);
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="Tasks">
      <header className="Tasks-header">

        <Link to="/garden">
          <img src={gardenButton} alt="Garden Button" className="garden-button" />
        </Link>

        <Link to="/" onClick={() => { console.log("Tasks button clicked!") }}>
          <img src={backButton} alt="Back Button" className="back-button" />
        </Link>

        <p>Today is {date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="counter-container">
          <img src={counterBackground} alt="Counter Background" className="counter-background" />
          <span className="counter-text">{completedCount} / {tasks.length}</span>
        </div>
        
        <div className="task-grid">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`task-box ${task.isCompleted ? 'completed' : ''}`}
            >
              <span onClick={() => toggleTaskCompletion(index)}>
                {task.text}
              </span>
              <img
                src={deleteIcon}
                alt="Delete"
                className="delete-icon"
                onClick={() => deleteTask(index)}
              />
            </div>
          ))}
          <div className="task-box add-task" onClick={addTask}></div>
        </div>
      </header>
    </div>
  );
}

export default Tasks;

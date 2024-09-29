import React, { useState, useEffect } from 'react';
import './Tasks.css';
import backButton from './images/back_button.png';
import deleteIcon from './images/x_icon.png'; // Add an icon for delete button
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

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    const newTask = prompt("What task would you like to add?");
    if (newTask) {
      setTasks([...tasks, { text: newTask, isCompleted: false }]);
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
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
          <div className="task-box add-task" onClick={addTask}>+</div>
        </div>
      </header>
    </div>
  );
}

export default Tasks;
import React from 'react';
import './Tasks.css';
import backButton from './images/back_button.png';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; // Import BrowserRouter


function Tasks() {
  return (
    <div className="Tasks">
      <header className="Tasks-header">
        <Link to="/" onClick={() => { console.log("Tasks button clicked!") }}>
          <img src={backButton} alt="Back Button" style={{ width: '150px', height: 'auto', cursor: 'pointer', marginRight: 'auto', display: 'block'}} />
        </Link>
        <p>Figure out how we wanna keep track of just daily tasks</p>
       </header>
     </div>
  )
}

export default Tasks;
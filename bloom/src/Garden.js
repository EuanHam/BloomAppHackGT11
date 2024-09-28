import React from 'react';
import './Garden.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import backButton from './images/back_button.png';


function Garden() {
  return (
    <div className="Garden">
      <header className="Garden-header">
        <Link to="/" onClick={() => { console.log("Tasks button clicked!") }}>
          <img src={backButton} alt="Back Button" style={{ width: '150px', height: 'auto', cursor: 'pointer'}} />
        </Link>
      </header>
    </div>
  )
}

export default Garden;

import React, { useState } from 'react';
import './Garden.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import backButton from './images/back_button.png';
import potImage from './images/flower_pot.png';

function Garden() {

  const [pots, setPots] = useState([
    { id: 1, x: 700, y: 600, size: 300, flower: ''}, // Pot 1
    { id: 2, x: 300, y: 600, size: 300, flower: ''}, // Pot 2
    { id: 3, x: 1100, y: 600, size: 300,flower: '' }, // Pot 3 
  ]);

  const [selectedPot, setSelectedPot] = useState(null);

  const handlePotClick = (pot) => {
    setSelectedPot(pot);
  };

  const handleFlowerSelect = (flower) => {
    setPots((prevPots) =>
      prevPots.map((pot) =>
        pot.id === selectedPot.id ? { ...pot, flower } : pot
      )
    );
    setSelectedPot(null);
  };

  const flowers = ['Daisy', 'Tulip', 'Sunflower'];

  return (
    <div className="Garden">
      <header className="Garden-header">
        <Link to="/" onClick={() => { console.log("Tasks button clicked!") }}>
          <img src={backButton} alt="Back Button" style={{ width: '150px', height: 'auto', cursor: 'pointer'}} />
        </Link>

        {pots.map((pot, index) => (
          <div key={pot.id} style={{ position: 'absolute', left: `${pot.x}px`, top: `${pot.y}px` }}>
          <img 
          src={potImage}
          alt="Pot"
          className="pot"
          style={{
            width: `${pot.size}px`, 
            height: 'auto',
            cursor: 'pointer',
            position: 'absolute'
          }}
          onClick={() => handlePotClick(pot)}
          />
          </div>
        ))}

        {selectedPot && (
          <div className="popup" style={{ 
            position: 'absolute', 
            left: `${selectedPot.x + 50}px`, 
            top: `${selectedPot.y}px`
          }}>
            <p>Select a flower for this pot:</p>
            {flowers.map((flower) => (
              <button key={flower} onClick={() => handleFlowerSelect(flower)}>
                {flower}
              </button>
            ))}
          </div>
        )}
      </header>
    </div>
  )
}

export default Garden;

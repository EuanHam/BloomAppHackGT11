import React, { useState } from 'react';
import './Garden.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import backButton from './images/back_button.png';
import potImage from './images/flower_pot.png';

function Garden() {

  const [pots, setPots] = useState([
    { id: 1, position: '20%', size: 300, flower: ''}, // Pot 1 at 20%
    { id: 2, position: '50%', size: 300, flower: ''}, // Pot 2 at 50%
    { id: 3, position: '80%', size: 300, flower: '' }, // Pot 3 at 80%
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
          <img src={backButton} alt="Back Button" style={{ width: '150px', height: 'auto', cursor: 'pointer' }} />
        </Link>

        {/* Pot Container */}
        <div className="pot-container">
          {pots.map((pot) => (
            <div 
              key={pot.id} 
              style={{ 
                position: 'absolute', 
                left: pot.position, 
                bottom: '10px', 
                transform: 'translateX(-50%)'  // Center the pot at the percentage point
              }}>
              <img 
                src={potImage}
                alt="Pot"
                className="pot"
                style={{
                  width: `${pot.size}px`, 
                  height: 'auto',
                  cursor: 'pointer',
                }}
                onClick={() => handlePotClick(pot)}
              />
            </div>
          ))}
        </div>

        {selectedPot && (
          <div className="popup" style={{ 
            position: 'absolute', 
            left: `${selectedPot.position}`, 
            top: `${selectedPot.size + 10}px` /* Adjust popup positioning */
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
  );
}

export default Garden;

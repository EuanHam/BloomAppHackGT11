import React, { useState } from 'react';
import './Garden.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import backButton from './images/back_button.png';
import potImage from './images/flower_pot.png';
import stage1Image from './images/stage1.png';  // Example stage 1 image
import stage2Image from './images/stage2.png';  // Example stage 2 image
import stage25Image from './images/stage2.5.png';  // Example stage 2.5 image
import tulipHead from './images/tulipHead.png';
import sunflower from './images/sunflower.png';
import daisyHead from './images/daisyHead.png';

function Garden() {
  // Hardcode the level for testing
  const level = 2; // Change this value to test different levels

  const [pots, setPots] = useState([
    { id: 1, position: '20%', size: 300, flower: '', level }, // Pot 1
    { id: 2, position: '50%', size: 300, flower: '', level }, // Pot 2
    { id: 3, position: '80%', size: 300, flower: '', level }, // Pot 3
  ]);

  const [selectedPot, setSelectedPot] = useState(null);

  const handlePotClick = (pot) => {
    setSelectedPot(pot);
  };

  const handleFlowerSelect = (flower) => {
    setPots((prevPots) =>
      prevPots.map((pot) =>
        pot.id === selectedPot.id ? { ...pot, flower, level: 3 } : pot  // Set to level 3 for flowers
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
              {/* Pot */}
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
              
              {/* Conditionally render overlays based on level, positioned at the top of the pot */}
              {pot.level === 1 && (
                <img 
                  src={stage1Image}
                  alt="Stage 1"
                  style={{ width: `${pot.size}px`, height: 'auto', position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)' }} // Adjusted position
                />
              )}
              {pot.level === 2 && (
                <img 
                  src={stage2Image}
                  alt="Stage 2"
                  style={{ width: `${pot.size}px`, height: 'auto', position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)' }} // Adjusted position
                />
              )}
              {pot.level === 3 && (
                <>
                  <img 
                    src={stage25Image}
                    alt="Stage 2.5"
                    style={{ width: `${pot.size}px`, height: 'auto', position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)' }} // Adjusted position
                  />
                  {/* Conditionally render the flowers for each pot, constrained to the top of stage2.5.png and centered */}
                  {pot.flower === 'Tulip' && (
                    <img 
                      src={tulipHead}
                      alt="Tulip"
                      style={{ width: `${pot.size / 2}px`, height: 'auto', position: 'absolute', bottom: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)' }} // Centered above
                    />
                  )}
                  {pot.flower === 'Sunflower' && (
                    <img 
                      src={sunflower}
                      alt="Sunflower"
                      style={{ width: `${pot.size / 2}px`, height: 'auto', position: 'absolute', bottom: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)' }} // Centered above
                    />
                  )}
                  {pot.flower === 'Daisy' && (
                    <img 
                      src={daisyHead}
                      alt="Daisy"
                      style={{ width: `${pot.size / 2}px`, height: 'auto', position: 'absolute', bottom: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)' }} // Centered above
                    />
                  )}
                </>
              )}
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

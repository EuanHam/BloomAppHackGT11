import React, { useState, useEffect } from 'react';
import './Garden.css';
import { Link } from 'react-router-dom';
import backButton from './images/back_button.png';
import potImage from './images/flower_pot.png';
import stage1Image from './images/stage1.png';
import stage2Image from './images/stage2.png';
import stage25Image from './images/stage3.png';
import tulipHead from './images/tulipHead.png';
import sunflower from './images/sunflowerHead.png';
import daisyHead from './images/daisyHead.png';

function Garden() {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const completionPercentage = parseFloat(localStorage.getItem("completionPercentage") || "0");
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    
    if (tasks.length >= 3) {
      if (completionPercentage >= 100) {
        setLevel(3);
      } else if (completionPercentage >= 66) {
        setLevel(2);
      } else if (completionPercentage >= 33) {
        setLevel(1);
      } else {
        setLevel(0);
      }
    } else {
      setLevel(0);
    }
  }, []);

  const [pots, setPots] = useState([
    { id: 1, position: '20%', size: 300, flower: '', level },
    { id: 2, position: '50%', size: 300, flower: '', level },
    { id: 3, position: '80%', size: 300, flower: '', level },
  ]);

  useEffect(() => {
    setPots(prevPots => prevPots.map(pot => ({ ...pot, level })));
  }, [level]);

  const [selectedPot, setSelectedPot] = useState(null);

  const handlePotClick = (pot) => {
    setSelectedPot(pot);
  };

  const handleFlowerSelect = (flower) => {
    setPots((prevPots) =>
      prevPots.map((pot) =>
        pot.id === selectedPot.id ? { ...pot, flower, level: 3 } : pot
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

        <div className="pot-container">
          {pots.map((pot) => (
            <div 
              key={pot.id} 
              style={{ 
                position: 'absolute', 
                left: pot.position, 
                bottom: '10px', 
                transform: 'translateX(-50%)'
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
              
              {pot.level === 1 && (
                <img 
                  src={stage1Image}
                  alt="Stage 1"
                  style={{ width: `${pot.size}px`, height: 'auto', position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}
                />
              )}
              {pot.level === 2 && (
                <img 
                  src={stage2Image}
                  alt="Stage 2"
                  style={{ width: `${pot.size}px`, height: 'auto', position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}
                />
              )}
              {pot.level === 3 && (
                <>
                  <img 
                    src={stage25Image}
                    alt="Stage 2.5"
                    style={{ width: `${pot.size}px`, height: 'auto', position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}
                  />
                  {pot.flower === 'Tulip' && (
                    <img 
                      src={tulipHead}
                      alt="Tulip"
                      style={{ width: `${pot.size / 1.5}px`, height: 'auto', position: 'absolute', bottom: `calc(100% + ${pot.size}px + 5px)`, left: '50%', transform: 'translateX(-50%)' }}
                    />
                  )}
                  {pot.flower === 'Sunflower' && (
                    <img 
                      src={sunflower}
                      alt="Sunflower"
                      style={{ width: `${pot.size / 1.5}px`, height: 'auto', position: 'absolute', bottom: `calc(100% + ${pot.size}px + 5px)`, left: '50%', transform: 'translateX(-50%)' }}
                    />
                  )}
                  {pot.flower === 'Daisy' && (
                    <img 
                      src={daisyHead}
                      alt="Daisy"
                      style={{ width: `${pot.size / 1.5}px`, height: 'auto', position: 'absolute', bottom: `calc(100% + ${pot.size}px + 5px)`, left: '50%', transform: 'translateX(-50%)' }}
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
            top: `${selectedPot.size + 10}px`
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
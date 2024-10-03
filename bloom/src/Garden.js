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
import tasksButton from './images/tasks_button.png';
import sunflowerProgress0 from './images/sunflower_progress0.png';
import sunflowerProgress1 from './images/sunflower_progress1.png';
import sunflowerProgress2 from './images/sunflower_progress2.png';
import sunflowerProgress3 from './images/sunflower_progress3.png';

function Garden() {
  const [level, setLevel] = useState(0);
  const [progressBarImage, setProgressBarImage] = useState(sunflowerProgress0);

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

  useEffect(() => {
    // Update the progress bar image based on the level
    switch (level) {
      case 1:
        setProgressBarImage(sunflowerProgress1);
        break;
      case 2:
        setProgressBarImage(sunflowerProgress2);
        break;
      case 3:
        setProgressBarImage(sunflowerProgress3);
        break;
      default:
        setProgressBarImage(sunflowerProgress0);
    }
  }, [level]);

  const [pots, setPots] = useState([
    { id: 1, position: '20%', size: 300, flower: 'Sunflower', level },
    { id: 2, position: '50%', size: 300, flower: 'Tulip', level },
    { id: 3, position: '80%', size: 300, flower: 'Daisy', level },
  ]);

  useEffect(() => {
    setPots(prevPots => prevPots.map(pot => ({ ...pot, level })));
  }, [level]);

  return (
    <div className="Garden">
      <header className="Garden-header" style={{ position: 'relative', width: '100%' }}>
        
        {/* Progress Bar */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000
        }}>
          <img 
            src={progressBarImage} 
            alt="Progress Bar" 
            style={{ width: '200px', height: 'auto'}} 
          />
        </div>

        {/* Back Button */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1000
        }}>
          <Link to="/" onClick={() => { console.log("Back button clicked!") }}>
            <img 
              src={backButton} 
              alt="Back Button" 
              style={{ 
                width: '150px', 
                height: 'auto', 
                cursor: 'pointer'
              }} 
            />
          </Link>
        </div>

        {/* Tasks Button */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1000
        }}>
          <Link to="/tasks" onClick={() => { console.log("Tasks button clicked!") }}>
            <img 
              src={tasksButton} 
              alt="Tasks Button" 
              style={{ 
                width: '150px', 
                height: 'auto', 
                cursor: 'pointer'
              }} 
            />
          </Link>
        </div>

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
                }}
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
                    alt="Stage 3"
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
      </header>
    </div>
  );
}

export default Garden;

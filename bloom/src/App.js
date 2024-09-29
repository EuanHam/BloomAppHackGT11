import './App.css';
import logo from './images/bloomLogoV3.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import tasksButton from './images/tasks_button.png';
import gardenButton from './images/garden_button.png';

function App() {
  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} style={{ width: '900px', maxWidth: '90%', height: 'auto' }} alt="Logo" />
          <h1 style={{ marginTop: '20px' }}>Welcome to Our Website!</h1>
          <p style={{ marginBottom: '20px', backgroundColor: '#ffffff44' }}>Complete daily mental health tasks and grow your virtual garden.</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Link to="/tasks" onClick={() => { console.log("Tasks button clicked!") }}>
              <img src={tasksButton} alt="Tasks Button" style={{ width: '150px', height: 'auto', cursor: 'pointer' }} />
            </Link>
            <Link to="/garden" onClick={() => console.log("Garden button clicked!")}>
              <img src={gardenButton} alt="Garden Button" style={{ width: '150px', height: 'auto', cursor: 'pointer' }} />
            </Link>
          </div>
        </header>
      </div>
  );
}

export default App;
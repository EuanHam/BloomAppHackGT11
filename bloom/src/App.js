import './App.css';
import logo from './images/bloomLogoV3.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Tasks from './Tasks';
import tasksButton from './images/tasks_button.png';
import Garden from './Garden';
import gardenButton from './images/garden_button.png';


function App() {
  const handleClick = e => {
    e.preventDefault()
  }
  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} style={{ width: '900px', height: 'auto' }} alt="Logo" />
          <h1 style={{ marginTop: '20px' }}>Welcome to Our Website!</h1>
          <p style={{ marginBottom: '20px' }}>Complete daily mental health tasks and grow your virtual garden.</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Link to="/tasks" onClick={() => {console.log("Tasks button clicked!")}}>
              <button style={{ padding: '10px 20px' }}>Tasks</button>
            </Link>
            <Link to="/garden" onClick={() => console.log("Garden button clicked!")}>
              <button style={{ padding: '10px 20px' }}>Garden</button>
            </Link>

            {/* <Button onClick={handleClick}>Hi</Button> */}
          </div>
        </header>
      </div>);

      
      {/* <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/garden" element={<Garden />} />
      </Routes>
    </Router> */}
  
}


export default App;

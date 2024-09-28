import './App.css';
import logo from './images/bloomLogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{ width: '900px', height: 'auto' }} alt="Logo" />
        <h1 style={{ marginTop: '20px' }}>Welcome to Our Website!</h1>
        <p style={{ marginBottom: '20px' }}>Complete daily mental health tasks and grow your virtual garden.</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <button style={{ padding: '10px 20px' }}>Tasks</button>
          <button style={{ padding: '10px 20px' }}>Garden</button>
        </div>
      </header>
    </div>


  );
}

export default App;
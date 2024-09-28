import './App.css';
import publix from './images/publix.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heyyyy</h1>
        <img src={publix} style={{ width: '1800px', height: 'auto' }} />
      </header>
    </div>


  );
}

export default App;
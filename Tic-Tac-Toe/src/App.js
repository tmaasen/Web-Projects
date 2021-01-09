import React from 'react';
import logo from './logo.png';
import './App.css';
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code style={{ fontSize: "30px" }}>tic-tac-toe</code>
        <Game />
      </header>
    </div>
  );
}

export default App;

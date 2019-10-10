import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Login />
    </div>
  );
}

export default App;

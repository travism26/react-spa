import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/styles.css';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar title='title output' customMessage='hellowholeworld'/> 
      <Home title='Hacker News'/>
    </div>
  );
}

export default App;

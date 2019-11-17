import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/styles.css'

function App() {
  return (
    <div className="App">
      <nav className="nav-menu">
        <h2 className="logo"><a className="logo-link" href="#">Things to look at</a></h2>
        <ul>
          <li><a className="nav-menu__link" href="#">Python Scraper</a></li>
          <li><a className="nav-menu__link" href="#">NLP</a></li>
          <li><a className="nav-menu__link" href="#">Traveling</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

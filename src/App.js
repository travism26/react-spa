import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/styles.css';
import Navbar from './components/navbar';
import Home from './components/home';
import {BrowserRouter, Route} from 'react-router-dom';
import NLP from './components/nlp';
import Traveling from './components/traveling';
import PythonScraper from './components/pythonScraper';
import HackerNews from './components/hackerNews';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title='title output' customMessage='hellowholeworld'/>
        {/* <Route to="/"component={Home}/> */}
        <Route exact path="/" render={() => <Home title="Hacker News"/>}/>
        <Route path="/nlp" render={() => <NLP title="Learning NLP framework using python..."/>}/>
        <Route path="/traveling" render={() => <Traveling title="Where have i traveled"/>}/>
        <Route path="/pythonscraper" render={() => <PythonScraper title="Learning how to scape a webpage"/>}/>
        <Route path="/hackernews" render={() => <HackerNews title="Hacker News Here!"/>}/>
        {/* <Home title='Hacker News'/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

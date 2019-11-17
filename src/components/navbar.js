import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => (
    <nav className="nav-menu">
        <h2 className="logo"><a className="logo-link" href="#">{props.title}</a></h2>
        <ul>
            <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/pythonscraper">Python Scraper</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/nlp">NLP</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/traveling">Traveling</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/hackernews">Hacker News</NavLink></li>
        </ul>
      </nav>
);

export default Navbar;
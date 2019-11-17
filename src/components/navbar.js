import React from 'react';

const Navbar = (props) => (
    <nav className="nav-menu">
        <h2 className="logo"><a className="logo-link" href="#">{props.title}</a></h2>
        <ul>
          <li><a className="nav-menu__link" href="#">Python Scraper</a></li>
          <li><a className="nav-menu__link" href="#">NLP</a></li>
          <li><a className="nav-menu__link" href="#">Traveling</a></li>
          <li><a className="nav-menu__link" href="#">Hacker News</a></li>
        </ul>
      </nav>
);

export default Navbar;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../logo.svg';
import './header.css';

const Header = (props) => (
    <header className="header">
    <a href="/"><img src={logo} alt="Logo Space X" className="logo"/></a>
    <nav className="main-nav nav">
      <ul className="list">
        {props.rockets.map((item, i) => (
        <li key={i} className="item">
          <Link to='/rocket' onClick={e => {props.changeRocket(item)}} className="item-link">{item}
          </Link>
        </li>
        ))}
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item"><a href="/" className="item-link">Home</a></li>
        <li className="item"><a href="/calendar" className="item-link">Calendar</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
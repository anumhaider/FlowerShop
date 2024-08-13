import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/basket" className="nav-link">Basket</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

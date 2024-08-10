import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Flower Shop</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/basket">Basket</a>
      </nav>
    </header>
  );
};

export default Header;

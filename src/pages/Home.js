import React from 'react';
import FlowerList from '../components/FlowerList/FlowerList';
import flowers from '../constants/flowers';
import './Home.css';

const Home = ({ addToBasket }) => {

  return (
    <div>
      <h1>Flower Shop</h1>
      <FlowerList flowers={flowers} addToBasket={addToBasket} />
    </div>
  );
};

export default Home;

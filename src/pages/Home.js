import React from 'react';
import FlowerList from '../components/FlowerList/FlowerList';
import { toast } from 'react-toastify';
import  flowers  from '../constants/flowers';
import './Home.css';

const Home = ({ addToBasket }) => {
  const handleAddToBasket = (flower) => {
    addToBasket(flower);
    toast.success(`${flower.name} added to basket!`);
  };

  return (
    <div>
      <h1>Flower Shop</h1>
      <FlowerList flowers={flowers} addToBasket={handleAddToBasket} />
    </div>
  );
};

export default Home;

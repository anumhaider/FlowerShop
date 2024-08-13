import React, { useState } from 'react';
import FlowerList from '../components/FlowerList/FlowerList';
import { toast } from 'react-toastify';

const Home = ({ addToBasket }) => {
  const flowers = [
    { id: 1, name: 'Rose', price: 2.5, image: 'rose.jpg' },
    { id: 2, name: 'Tulip', price: 1.5, image: 'tulip.jpg' },
    { id: 3, name: 'Lily', price: 3.0, image: 'lily.jpg' },
    { id: 4, name: 'Sunflower', price: 1.75, image: 'sunflower.jpg' },
    { id: 5, name: 'Daffodil', price: 2.0, image: 'daffodil.jpg' },
    { id: 6, name: 'Orchid', price: 4.0, image: 'orchid.jpg' },
    { id: 7, name: 'Carnation', price: 1.25, image: 'carnation.jpg' },
    { id: 8, name: 'Daisy', price: 1.5, image: 'daisy.jpg' },
    { id: 9, name: 'Lavender', price: 3.5, image: 'lavender.jpg' },
    { id: 10, name: 'Peony', price: 2.75, image: 'peony.jpg' },
    { id: 11, name: 'Iris', price: 2.2, image: 'iris.jpg' },
    { id: 12, name: 'Marigold', price: 1.8, image: 'marigold.jpg' }
  ];

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

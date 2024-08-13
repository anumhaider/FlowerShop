import React from 'react';
import FlowerList from '../components/FlowerList/FlowerList';
import { toast } from 'react-toastify';
import { images } from '../constants/images';
import './Home.css';

const flowers = [
  { id: 1, name: 'Rose', price: 2.5, image: images.rose },
  { id: 2, name: 'Tulip', price: 1.5, image: images.tulip },
  { id: 3, name: 'Lily', price: 3.0, image: images.lily },
  { id: 4, name: 'Sunflower', price: 1.75, image: images.sunflower },
  { id: 5, name: 'Daffodil', price: 2.0, image: images.daffodil },
  { id: 6, name: 'Orchid', price: 4.0, image: images.orchid },
  { id: 7, name: 'Carnation', price: 1.25, image: images.carnation },
  { id: 8, name: 'Daisy', price: 1.5, image: images.daisy },
  { id: 9, name: 'Lavender', price: 3.5, image: images.lavender },
  { id: 10, name: 'Peony', price: 2.75, image: images.peony },
  { id: 11, name: 'Iris', price: 2.2, image: images.iris },
  { id: 12, name: 'Marigold', price: 1.8, image: images.marigold },
];

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

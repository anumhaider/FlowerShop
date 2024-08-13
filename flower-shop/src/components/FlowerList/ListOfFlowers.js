import React from 'react';
import FlowerItem from '../FlowerItem/FlowerItem';
import './ListOfFlowers.css';


const ListOfFlowers = ({ addToBasket }) => {
  const flowers = [
    { name: 'Rose', price: '$5.00', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Rose' },
    { name: 'Tulip', price: '$3.00', image: 'https://via.placeholder.com/150/FF7F50/FFFFFF?text=Tulip' },
    { name: 'Sunflower', price: '$4.00', image: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=Sunflower' },
    { name: 'Daisy', price: '$2.50', image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Daisy' },
    { name: 'Orchid', price: '$10.00', image: 'https://via.placeholder.com/150/DA70D6/FFFFFF?text=Orchid' },
    { name: 'Lily', price: '$6.50', image: 'https://via.placeholder.com/150/FFA07A/FFFFFF?text=Lily' },
    { name: 'Lavender', price: '$7.00', image: 'https://via.placeholder.com/150/E6E6FA/000000?text=Lavender' },
    { name: 'Peony', price: '$8.00', image: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Peony' },
    { name: 'Hydrangea', price: '$9.00', image: 'https://via.placeholder.com/150/B0E0E6/000000?text=Hydrangea' },
    { name: 'Carnation', price: '$4.50', image: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Carnation' },
  ];

  return (
    <div className="flower-list">
      {flowers.map((flower, index) => (
        <FlowerItem key={index} flower={flower} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default ListOfFlowers;

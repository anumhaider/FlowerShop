import React from 'react';
import FlowerCard from '../FlowerCard/FlowerCard';
import './FlowerList.css';

const FlowerList = ({ flower, addToBasket }) => (
  <div className="flower-list">
    {flower.map(flower => (
      <FlowerCard key={flower.id} flower={flower} addToBasket={addToBasket} />
    ))}
  </div>
);

export default FlowerList;

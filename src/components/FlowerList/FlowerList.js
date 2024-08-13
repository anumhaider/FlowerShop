import React from 'react';
import FlowerCard from '../FlowerCard/FlowerCard';

const FlowerList = ({ flowers, addToBasket }) => (
  <div className="flower-list">
    {flowers.map(flower => (
      <FlowerCard key={flower.id} flower={flower} addToBasket={addToBasket} />
    ))}
  </div>
);

export default FlowerList;

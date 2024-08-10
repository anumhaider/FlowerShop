import React from 'react';
import './FlowerItem.css';

const FlowerItem = ({ flower, addToBasket }) => {
  return (
    <div className="flower-item">
      <img src={flower.image} alt={flower.name} />
      <h3>{flower.name}</h3>
      <p>{flower.price}</p>
      <button onClick={() => addToBasket(flower)}>Add to Basket</button>
    </div>
  );
};

export default FlowerItem;
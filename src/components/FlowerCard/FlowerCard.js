import React from 'react';

const FlowerCard = ({ flower, addToBasket }) => (
  <div className="flower-card">
    <img src={flower.image} alt={flower.name} />
    <h3>{flower.name}</h3>
    <p>Price: £{flower.price}</p>
    <button onClick={() => addToBasket(flower)}>Add to Basket</button>
  </div>
);

export default FlowerCard;

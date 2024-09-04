import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlowerCard.css';

const FlowerCard = ({ flower, addToBasket }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/flower/${flower.id}`);
  };

  const handleAddToBasket = (e) => {
    e.stopPropagation(); // Prevent the card click event
    addToBasket(flower);
  };

  return (
    <div className="flower-card" onClick={handleCardClick}>
      <img src={flower.image} alt={flower.name} />
      <h3>{flower.name}</h3>
      <p>Price: £{flower.price}</p>
      <button onClick={handleAddToBasket}>Add to Basket</button>
    </div>
  );
};

export default FlowerCard;

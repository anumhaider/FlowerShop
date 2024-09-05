import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlowerCard.css';
import { images } from '../../constants/images';

const FlowerCard = ({ flower, addToBasket }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/flower/${flower.id}`);
  };

  const handleAddToBasket = (e) => {
    e.stopPropagation(); 
    addToBasket(flower);
  };

  return (
    <div className="flower-card" onClick={handleCardClick}>
      <img src={images[flower.name.toLowerCase()]} alt={flower.name} />
      <h3>{flower.name}</h3>
      <p>Price: £{flower.price}</p>
      <button onClick={handleAddToBasket}>Add to Basket</button>
    </div>
  );
};

export default FlowerCard;

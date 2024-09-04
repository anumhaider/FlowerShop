import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlowerCard.css';

const FlowerCard = ({ flower }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/flower/${flower.id}`);
  };

  return (
    <div className="flower-card" onClick={handleClick}>
      <img src={flower.image} alt={flower.name} />
      <h3>{flower.name}</h3>
      <p>Price: £{flower.price}</p>
    </div>
  );
};

export default FlowerCard;

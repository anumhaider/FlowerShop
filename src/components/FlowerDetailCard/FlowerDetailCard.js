import React from 'react';
import './FlowerDetailCard.css';

const FlowerDetailCard = ({ flower, addToBasket }) => {
  return (
    <div className="flower-detail-card">
      <div className="flower-detail-card__image">
        <img src={flower.image} alt={flower.name} />
      </div>
      <div className="flower-detail-card__info">
        <h2 className="flower-detail-card__name">{flower.name}</h2>
        <p className="flower-detail-card__description">{flower.description}</p>
        <p className="flower-detail-card__price">Price: £{flower.price}</p>
        <button 
          className="flower-detail-card__button"
          onClick={() => addToBasket(flower)}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default FlowerDetailCard;

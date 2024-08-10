import React from 'react';

const Basket = ({ basket, removeFromBasket }) => {
  return (
    <div>
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          {basket.map((flower, index) => (
            <div key={index} className="basket-item">
              <img src={flower.image} alt={flower.name} />
              <h3>{flower.name}</h3>
              <p>{flower.price}</p>
              <button onClick={() => removeFromBasket(index)}>Remove</button>
            </div>
          ))}
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Basket;

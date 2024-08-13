import React from 'react';
import './Basket.css';

const Basket = ({ basket, updateQuantity, removeFromBasket }) => {
  const totalAmount = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="basket">
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div className="basket-items">
          {basket.map((item) => (
            <div key={item.id} className="basket-item">
              <img src={item.image} alt={item.name} />
              <div className="basket-item-details">
                <h3>{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
                <div className="basket-item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <button onClick={() => removeFromBasket(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="basket-total">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;

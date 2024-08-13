import React from 'react';

const Basket = ({ basket, updateQuantity, removeFromBasket }) => {
  const total = basket.reduce((acc, flower) => acc + flower.price * flower.quantity, 0);

  return (
    <div>
      <h2>Your Basket</h2>
      {basket.length === 0 && <p>Your basket is empty</p>}
      {basket.map(flower => (
        <div key={flower.id}>
          <h4>{flower.name}</h4>
          <p>Price: £{flower.price}</p>
          <input
            type="number"
            value={flower.quantity}
            onChange={(e) => updateQuantity(flower.id, e.target.value)}
            min="1"
          />
          <button onClick={() => removeFromBasket(flower.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: £{total.toFixed(2)}</h3>
    </div>
  );
};

export default Basket;

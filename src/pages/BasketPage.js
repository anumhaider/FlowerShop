import React from 'react';
import Basket from '../components/Basket/Basket';

const BasketPage = ({ basket, updateQuantity, removeFromBasket }) => (
  <div>
    <h1>Basket</h1>
    <Basket basket={basket} updateQuantity={updateQuantity} removeFromBasket={removeFromBasket} />
  </div>
);

export default BasketPage;

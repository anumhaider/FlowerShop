import { useState } from 'react';
import { toast } from 'react-toastify';

const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (flower) => {
    setBasket((prevBasket) => {
      const existingFlower = prevBasket.find((item) => item.id === flower.id);
      if (existingFlower) {
        return prevBasket.map((item) =>
          item.id === flower.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevBasket, { ...flower, quantity: 1 }];
      }
    });
    toast.success(`${flower.name} added to basket!`);
  };

  const updateQuantity = (id, quantity) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const removeFromBasket = (id) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  return {
    basket,
    addToBasket,
    updateQuantity,
    removeFromBasket,
  };
};

export default useBasket;

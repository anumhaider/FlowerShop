import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BasketPage from './pages/BasketPage';
import FlowerDetailPage from './pages/FlowerDetail'; // Import the new detail page
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
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

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home addToBasket={addToBasket} />} />
        <Route path="/basket" element={<BasketPage basket={basket} updateQuantity={updateQuantity} removeFromBasket={removeFromBasket} />} />
        <Route path="/flower/:id" element={<FlowerDetailPage addToBasket={addToBasket} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;

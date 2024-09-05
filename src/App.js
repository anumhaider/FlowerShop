import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BasketPage from './pages/BasketPage';
import FlowerDetailPage from './pages/FlowerDetail';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import useBasket from './hooks/useBasket';

const App = () => {
  const { basket, addToBasket, updateQuantity, removeFromBasket } = useBasket();

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

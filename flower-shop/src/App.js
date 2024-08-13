import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Basket from './pages/Basket';
import './App.css';

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (flower) => {
    setBasket([...basket, flower]);
  };

  const removeFromBasket = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home addToBasket={addToBasket} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket basket={basket} removeFromBasket={removeFromBasket} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

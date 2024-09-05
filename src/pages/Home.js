import React from 'react';
import './Home.css';
import FlowerList from '../components/FlowerList/FlowerList';
import flowers from './../flowers.json';

const Home = ({ addToBasket }) => {
    return (
        <div>
            <h1>Flower Shop</h1>
            <FlowerList flower={flowers.flowers} addToBasket={addToBasket} />
        </div>
    );
};

export default Home;

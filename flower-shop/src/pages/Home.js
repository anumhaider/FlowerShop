import React from 'react';
import ListOfFlowers from '../components/FlowerList/ListOfFlowers';

const Home = ({ addToBasket }) => {
  return (
    <div>
      <h2>Welcome to the Flower Shop!</h2>
      <ListOfFlowers addToBasket={addToBasket} />
    </div>
  );
};

export default Home;

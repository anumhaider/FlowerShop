import React from 'react';
import './Home.css';
import FlowerList from '../components/FlowerList/FlowerList';
import myData from '../flowers.json';
import FlowerCard from '../components/FlowerCard/FlowerCard';
import flowers from './../flowers.json';

const Home = ({ addToBasket }) => {
    console.log(flowers)
    return (
        <div>
            <h1>Flower Shop</h1>
            <FlowerList flower={flowers.flowers} addToBasket={addToBasket} />
        </div>

        
    // <>
    //     <h1>Flower Shop</h1>
    //     <div className='flower-list'>
    //         {myData.flowers.map(flower => <FlowerCard flower={flower} addToBasket={addToBasket} />)}
    //     </div>
    // </>
    );
};

export default Home;

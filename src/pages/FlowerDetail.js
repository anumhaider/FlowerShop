import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FlowerDetailCard from '../components/FlowerDetailCard/FlowerDetailCard';
import FlowerList from '../flowers.json';

const FlowerDetailPage = ({ addToBasket }) => {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  
  const flower = FlowerList.flowers.find((flower) => flower.id === parseInt(id));

  if (!flower) {
    return <p>Flower not found</p>;
  }

  return (
    <div className="flower-detail-page">
      <button onClick={() => navigate(-1)}>Back</button>
      {<FlowerDetailCard flower={flower} addToBasket={addToBasket} />}
    </div>
  );
};

export default FlowerDetailPage;

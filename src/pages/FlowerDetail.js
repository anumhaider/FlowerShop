import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import flowers from '../constants/flowers';
import FlowerDetailCard from '../components/FlowerDetailCard/FlowerDetailCard';

const FlowerDetailPage = ({ addToBasket }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const flower = flowers.find((flower) => flower.id === parseInt(id));

  if (!flower) {
    return <p>Flower not found</p>;
  }

  return (
    <div className="flower-detail-page">
      <button onClick={() => navigate(-1)}>Back</button>
      <FlowerDetailCard flower={flower} addToBasket={addToBasket} />
    </div>
  );
};

export default FlowerDetailPage;

// src/components/Card.js
import React from 'react';
import './card.css';

const Card = ({ title, description, cost }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-cost">Cost: {cost} coins</p>
        <button className="card-button">Redeem</button>
      </div>
    </div>
  );
};

export default Card;

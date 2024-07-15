// src/components/RewardsList.js
import React from 'react';
import Card from './card';

const RewardsList = () => {
  const rewards = [
    { id: 1, title: 'Free Shipping', description: 'Get free shipping on your next order', cost: 50 },
    { id: 2, title: 'Gift Voucher', description: 'Receive a $10 gift voucher', cost: 100 },
    { id: 3, title: 'Exclusive Item', description: 'Get an exclusive item not available in stores', cost: 200 },
  ];

  return (
    <div className="rewards-list" style={{
       display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '20px'
    }}>
      {rewards.map(reward => (
        <Card key={reward.id} title={reward.title} description={reward.description} cost={reward.cost} />
      ))}
    </div>
  );
};

export default RewardsList;

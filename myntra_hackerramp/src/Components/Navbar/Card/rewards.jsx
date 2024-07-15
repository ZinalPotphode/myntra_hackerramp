// src/App.js
import React from 'react';
// import './App.css';
import RewardsList from './rewardlist.jsx';

const Rewards = () => {
  return (
    <div className="App" style={{
      textAlign: "center"
    }}>
      <header className="App-header"
       style={{
        backgroundColor: "#282c34",
        padding: "20px",
        color: "white"
       }}
      >
        <h1>Rewards Store</h1>
      </header>
      <main>
        <RewardsList />
      </main>
    </div>
  );
};

export default Rewards;

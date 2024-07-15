import React, { useEffect, useState } from 'react';

const CoinCounter = () => {
  const [coinCount, setCoinCount] = useState(3500);

  useEffect(() => {
   const savedCoinCount = localStorage.getItem('coinCount');

    if (savedCoinCount) {
      // Parse the count and increment it
      const newCount = parseInt(savedCoinCount, 10) + 1;
      setCoinCount(newCount);

      // Update the count in localStorage
      localStorage.setItem('coinCount', newCount);
    } else {
      // If no count is found, this is the user's first visit
      setCoinCount(1);

      // Set the initial count in localStorage
      localStorage.setItem('coinCount', 1);
    }
    // localStorage.removeItem('coinCount');
    // const savedCoinCount = localStorage.getItem('coinCount');
    // const lastVisit = localStorage.getItem('lastVisit');
    // const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // if (savedCoinCount) {
    //   if (lastVisit !== today) {
    //     // User is visiting for the first time today
    //     const newCount = parseInt(savedCoinCount, 10) + 1;
    //     setCoinCount(newCount);
    //     localStorage.setItem('coinCount', newCount);
    //     localStorage.setItem('lastVisit', today);
    //   } else {
    //     // User has already visited today
    //     setCoinCount(parseInt(savedCoinCount, 10));
    //   }
    // } else {
    //   // First visit ever
    //   setCoinCount(setCoinCount+1);
    //   localStorage.setItem('coinCount', 1);
    //   localStorage.setItem('lastVisit', today);
    // }
  }, []);

  return (
    <div>
       {coinCount}
    </div>
  );
};

export default CoinCounter;

import React, { useEffect, useState } from 'react';

const CheckInPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup
    setShowPopup(true);

    // Hide the popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Cleanup timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs once on component mount

  const popupStyles = {
    position: 'fixed',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // backgroundColor: 'rgba(247, 199, 228, 1)',
    // padding: '0.5rem',
    // borderRadius: '0.3rem',
    color: 'white',
    textAlign: 'center',
    zIndex: 1000,
  };

  const popupContentStyles = {
    background:  'rgba(255, 151, 214, 1)',
    padding: '0.5rem',
    borderRadius: '0.2rem',
  };

  return (
    <div>
      {showPopup && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <p>+1 point earned</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckInPopup;

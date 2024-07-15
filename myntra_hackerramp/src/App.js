import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Pop from './Components/popup.jsx'

function App() {
  return (
    <div className="App">
      <Pop></Pop>
      <AllRoutes />
    </div>
  );
}

export default App;
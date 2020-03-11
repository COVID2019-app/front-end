import React from 'react';
import './App.css';

import Home from "./components/Home"
import Home2 from "./components/Home2";
import USAChart from "./components/usa/USAChart";

function App() {
  return (
    <div className="App">
      <h1>Covid2019</h1>
      <Home2 />
      <USAChart />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import styled from "styled-components";

import Home from "./components/Home";
import USAChart from "./components/usa/USAChart";

function App() {
  return (
    <AppContainer>
      <h1 style={{textAlign:"center"}}>Covid2019</h1>
      <Home />
      <USAChart />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

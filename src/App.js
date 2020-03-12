import React from 'react';
import './App.css';
import styled from "styled-components";

import Header from "./components/Header";
import Routes from "./utils/Routes";

function App() {
  return (
    <AppContainer>
      <h1 style={{ textAlign: "center" }}>Covid2019</h1>
      <Header />
      <Routes />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

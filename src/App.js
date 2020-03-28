import React from 'react';
import './App.scss';
import Routes from './utils/Routes';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

function App() {
  return <Routes className="dark-mode"/>;
}

export default App;

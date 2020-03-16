import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore, applyMiddleware /*compose*/ } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer /*{ initialState }*/ from "./store/reducer";
//import { composeWithDevTools } from 'redux-devtools'
const store = createStore(
  rootReducer, 
 
  applyMiddleware(thunk, logger),

  
  );

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);



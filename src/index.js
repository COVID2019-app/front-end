import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer /*{ initialState }*/ from './store/reducer';
import { ThemeProvider } from 'styled-components'
import { lightTheme} from './themes/theme';
import { GlobalStyles } from './themes/global'
const logger = createLogger();
let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const store = createStore(
  rootReducer,

  compose(applyMiddleware(...middleware))

);

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
     <Router>
    <Provider store={store}>

      <App />

  </Provider>
  </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

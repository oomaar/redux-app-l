import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { Provider } from 'react-redux';
import store from './app/store';

render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);

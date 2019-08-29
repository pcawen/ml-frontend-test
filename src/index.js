import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import '../scss/main.scss';

const state = window.INITIAL_STATE;
delete window.INITIAL_STATE;
const store = configureStore(state);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
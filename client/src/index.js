import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './components/App.js';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
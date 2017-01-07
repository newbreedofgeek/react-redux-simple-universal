import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import App from './containers/App';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(counterApp, preloadedState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

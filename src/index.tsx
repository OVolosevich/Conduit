import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import state from '../store/state';

const app = (
  <Provider store={state}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.querySelector('#root'));

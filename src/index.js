import React from 'react';
import ReactDOM from 'react-dom';
import AbzApp from './AbzApp';
import './styles/index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AbzApp />
  </Provider>,
  document.getElementById('root')
);

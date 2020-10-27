import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


import App from './components/App/App';
import rootReducer from './reducers/RootReducer';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
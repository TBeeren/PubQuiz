import React from "react";
import {Provider} from 'react-redux';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

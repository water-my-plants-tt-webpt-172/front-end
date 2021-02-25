import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//const store = createStore({}, applyMiddleware(thunk));

const rootElement = document.getElementById('root')
ReactDOM.render(
  //<Provider store = { store }>
      <App />
  //</Provider>
  ,
  rootElement
);

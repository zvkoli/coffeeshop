import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux_toolkit/store';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.Fragment>
);
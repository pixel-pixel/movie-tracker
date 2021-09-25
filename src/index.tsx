import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"

import App from './App';
import { AuthProvider } from './tools/Auth';

import 'bootstrap/dist/css/bootstrap.css'
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

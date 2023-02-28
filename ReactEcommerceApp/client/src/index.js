import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

// Redux
//@deprecated import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import ErrorBoundary from './components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Create a store
//const store = createStore();
const store = configureStore({reducer: rootReducer, devTools: composeWithDevTools()});

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

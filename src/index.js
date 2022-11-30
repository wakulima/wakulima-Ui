import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    
    auth: authReducer,
    
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from './components/slices/Authslice';
import productsReducer from './components/products/slices/productSlice';
import { productsApi } from './components/products/slices/productApi';
import { researchpostApi } from './components/products/slices/rpostApi';
import research_infosReducer  from './components/products/slices/rpostSlice';
import cartReducer from './components/products/slices/cartSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({
  reducer: {
    
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    research_infos: research_infosReducer,
 
    [productsApi.reducerPath]: productsApi.reducer,
    [researchpostApi.reducerPath]: researchpostApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    (getDefaultMiddleware().concat(productsApi.middleware),
    getDefaultMiddleware().concat(researchpostApi.middleware)
    ),
});

// store.dispatch(productsFetch());
// store.dispatch(getTotals());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
 
);


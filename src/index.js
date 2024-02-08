import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "./features/productSlice";
import { productsApi } from "./features/productsApi";
import cartReducer from "./features/cartSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  // the middleware will add more functionality
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(productsApi.middleware);
  },
});
store.dispatch(productsFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./features/apiDataSlice";
import orderListReducer from "./features/orderListSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    orderList: orderListReducer,
    cart: cartReducer
  },
});

export default store;


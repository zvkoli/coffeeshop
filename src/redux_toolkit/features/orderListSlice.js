import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ordersListSlice = createSlice({
  name: "ordersList",
  initialState,
  reducers: {
    setOrdersList: (state, action) => {
      return action.payload;
    },
    addToOrderList: (state, action) => {
      state.push(action.payload);
    },
    removeFromOrderList: (state, action) => {
      const orderIndex = state.findIndex(item => item.name === action.payload);
      if (orderIndex !== -1) {
        state.splice(orderIndex, 1);
      }
    },
  },
});

export const { setOrdersList, addToOrderList, removeFromOrderList } = ordersListSlice.actions;
export default ordersListSlice.reducer;


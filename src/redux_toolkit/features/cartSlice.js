import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },                
  },
});

export const { setCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

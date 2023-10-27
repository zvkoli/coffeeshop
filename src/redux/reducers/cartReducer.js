import { SET_CART, REMOVE_FROM_CART } from "../actions/actionsType";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return action.payload;
    case REMOVE_FROM_CART:
      return state.filter((item) => item.name !== action.name);
    default:
      return state;
  }
};

export default cartReducer;

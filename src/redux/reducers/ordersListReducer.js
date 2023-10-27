import { SET_ORDERS_LIST, ADD_TO_ORDER_LIST, REMOVE_FROM_ORDER_LIST  } from "../actions/actionsType";

const initialState = [];

const ordersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS_LIST:
      return action.payload;
    case ADD_TO_ORDER_LIST:
      return [...state, action.payload];
    case REMOVE_FROM_ORDER_LIST:
      const orderIndex = state.findIndex(item => item.name === action.payload);
      if (orderIndex !== -1) {
        const updatedState = [...state];
        updatedState.splice(orderIndex, 1);
        return updatedState;
      }
      break;
    default:
      return state;
  }
};

export default ordersListReducer;

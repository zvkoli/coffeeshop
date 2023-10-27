import { ADD_TO_ORDER_LIST } from "./actionsType";

export const addToOrderList = (product) => ({
  type: ADD_TO_ORDER_LIST,
  payload: product,
});
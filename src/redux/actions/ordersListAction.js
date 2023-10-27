import { SET_ORDERS_LIST } from "./actionsType";

export const setOrdersList = (ordersList) => ({
  type: SET_ORDERS_LIST,
  payload: ordersList,
});

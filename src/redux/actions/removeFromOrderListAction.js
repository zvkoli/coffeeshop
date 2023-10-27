import { REMOVE_FROM_ORDER_LIST } from "./actionsType";

export const removeFromOrderList = (name) => ({
    type: REMOVE_FROM_ORDER_LIST,
    payload: name,
  });
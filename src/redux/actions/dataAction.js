import { SET_DATA } from "./actionsType";

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});
import { IS_TOKEN, USER_DATA } from "./actionTypes";

const init = { token: false, data: "" };
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case IS_TOKEN:
      return {...state, token: payload };
    case USER_DATA:
      return {...state, data: payload };
    default:
      return state;
  }
};
import { IS_TOKEN, USER_DATA } from "./actionTypes";

export const isToken = (data) => ({
  type: IS_TOKEN,
  payload: data,
});

export const userData = (data) => {
  return {
    type: USER_DATA,
    payload: data,
  };
};

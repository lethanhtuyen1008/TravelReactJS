import * as Types from "./constants";

export const signUp = info => {
  return {
    type: Types.SIGNUP,
    payload: info
  };
};

export const signUpSuccess = data => {
  return {
    type: Types.SIGNUP_SUCCESS,
    payload: data
  };
};

export const login = account => {
  // console.log(account);
  return {
    type: Types.LOGIN,
    payload: account
  };
};

export const loginSuccess = data => {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: data
  };
};

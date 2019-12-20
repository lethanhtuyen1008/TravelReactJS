import * as Types from "./constants";
import produce from "immer";
import { delCookie } from "base/helper/cookie";

const initialState = {
  checkLogin: null,
  checkSignUp: null
};

export default function AuthReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOGIN_SUCCESS: {
        draft.checkLogin = payload;
        break;
      }
      case Types.SIGNUP_SUCCESS: {
        draft.checkSignUp = payload;
        break;
      }
      case Types.LOGOUT: {
        delCookie("token");
        sessionStorage.removeItem("USER");
        localStorage.removeItem("ADDRESS");
        draft.authUser = null;
        break;
      }
    }
  });
}

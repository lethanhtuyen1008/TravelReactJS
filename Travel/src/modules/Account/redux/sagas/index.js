import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { loginSuccess, signUpSuccess } from "../actions";
import { showLoader, hideLoader } from "base/redux/General/GeneralAction";
import { setCookie, getCookie } from "base/helper/cookie";
import { loginFromApi, signUpFromApi } from "./api";

const MESS_ERR = "Lỗi hệ thống";

function* onLogin(action) {
  const { account } = action.payload;
  console.log(account);
  yield put(showLoader());
  try {
    //yield delay(500, true);
    const response = yield call(loginFromApi, account);
    //console.log(response.data.result);
    setCookie("user_info", JSON.stringify(response.data.data[0]));
    setCookie("token_user", response.data.accessToken, 1);
    yield put(loginSuccess(response.data.result));
  } catch (error) {
    yield put(hideLoader());
  }
}
function* onSinUp(action) {
  const { info } = action.payload;
  //console.log(info);
  const response = yield call(signUpFromApi, info);
  //console.log(response.data.result);
  yield put(signUpSuccess(response.data.result));
  yield put(showLoader());
  try {
    const response = yield call(loginFromApi, account);
    yield put(loginSuccess(response.data.result));
  } catch (error) {
    yield put(hideLoader());
  }
}

function* watchOnSingUp() {
  yield takeLatest(Types.SIGNUP, onSinUp);
}

function* watchOnLogin() {
  yield takeLatest(Types.LOGIN, onLogin);
}
export default function* rootSaga() {
  yield all([fork(watchOnLogin), fork(watchOnSingUp)]);
}

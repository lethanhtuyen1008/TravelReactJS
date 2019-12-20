import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListVesuccess } from "../actions";
import { showLoader, hideLoader } from "base/redux/General/GeneralAction";
import { setCookie, getCookie } from "base/helper/cookie";
import { getListVeFromApi } from "./api";

const MESS_ERR = "Lỗi hệ thống";

function* ongetListGiaVe() {
  //yield put(showLoader());
  try {
    const response = yield call(getListVeFromApi);
    console.log(response.data.data);
    yield put(getListVesuccess(response.data.data));
  } catch (error) {
    yield put(hideLoader());
  }
}

function* watchOngetListGiave() {
  console.log("vaof");
  yield takeLatest(Types.GET_LIST_GIA_VE, ongetListGiaVe);
}
export default function* rootSaga() {
  yield all([fork(watchOngetListGiave)]);
}

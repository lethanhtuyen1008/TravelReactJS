import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from '../constants';
import { onPaymentSuccess } from "../actions";
import {showLoadingBtn, hideLoadingBtn} from "base/redux/General/GeneralAction";
import { getCookie } from "base/helper/cookie";
import {paymentFromAPI} from "./api"
const MESS_ERR = "Lỗi hệ thống";

function* onPayment({payload}) {
  const {cbSuccess, cbError, data} = payload;
  console.log(payload)
  yield put(showLoadingBtn());
  try {
    yield delay(500, true);
    const response = yield call(paymentFromAPI, getCookie("token"), data);
    if (response.data.status_code === 200) {
      yield put(onPaymentSuccess(response.data.data));
      yield cbSuccess();
    } else {
      yield cbError();
    }
    yield put(hideLoadingBtn());
  } catch (error) {
    yield cbError(MESS_ERR);
    yield put(hideLoadingBtn());
  }
}

function* watchOnPayment() {
  yield takeLatest(Types.ON_PAYMENT, onPayment);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnPayment)
  ]);
}

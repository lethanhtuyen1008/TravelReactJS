import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { bookingsuccess } from "../actions";
import { showLoader, hideLoader } from "base/redux/General/GeneralAction";
import { setCookie, getCookie } from "base/helper/cookie";
import { bookingFromApi } from "./api";

const MESS_ERR = "Lỗi hệ thống";

function* onBooking(action) {
  const { data } = action.payload;

  yield put(showLoader());
  try {
    //yield delay(500, true);
    const response = yield call(bookingFromApi, data);
    console.log(response.data.result);
    yield put(bookingsuccess(response.data.result));
  } catch (error) {
    yield put(hideLoader());
  }
}

function* watchOnBooking() {
  yield takeLatest(Types.BOOKING, onBooking);
}
export default function* rootSaga() {
  yield all([fork(watchOnBooking)]);
}

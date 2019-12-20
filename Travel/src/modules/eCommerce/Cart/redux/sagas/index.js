import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from '../constants';
import { onUpdateQuantityItemCartSuccess } from "../actions";
import {showLoader, hideLoader} from "base/redux/General/GeneralAction";

function* onUpdateItemCart({data}) {
  yield put(showLoader())
    yield delay(300, true);
      yield put(onUpdateQuantityItemCartSuccess(data));
      yield put(hideLoader())
}

function* watchOnUpdateItemCart() {
  yield takeLatest(Types.UPDATE_QUANTITY_ITEM_CART, onUpdateItemCart);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnUpdateItemCart)
  ]);
}

import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from '../constants';
import { getProductListSuccess, getProductDetailSuccess } from "../actions";
import {showLoader, hideLoader} from "base/redux/General/GeneralAction";
import { getProductListFromApi, getProductDetailFromApi } from "./api";

function* onGetProductList() {
  yield put(showLoader())
  try {
    yield delay(500, true);
    const response = yield call(getProductListFromApi);
    if (response.data.status_code === 200) {
      yield put(getProductListSuccess(response.data.data));
      yield put(hideLoader())
    }
  } catch (error) {
    console.log("List Product", error);
  }
}

function* onGetProductDetail({id}) {
  yield put(showLoader())
  try {
    yield delay(500, true);
    const response = yield call(getProductDetailFromApi, id);
    if (response.data.status_code === 200) {
      yield put(getProductDetailSuccess(response.data.data));
      yield put(hideLoader())
    }
  } catch (error) {
    console.log("List Product", error);
  }
}

function* watchOnGetProductList() {
  yield takeLatest(Types.GET_PRODUCT_LIST, onGetProductList);
}
function* watchOnGetProductDetail() {
  yield takeLatest(Types.GET_PRODUCT_DETAIL, onGetProductDetail);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetProductList),
    fork(watchOnGetProductDetail)
  ]);
}

import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from '../constants';
import { getCategoryListSuccess } from "../actions";
import {showLoader, hideLoader} from "base/redux/General/GeneralAction";
import { getCategoryListFromApi } from "./api";

function* onGetCategoryList() {
  yield put(showLoader())
  try {
    yield delay(500, true);
    const response = yield call(getCategoryListFromApi);
    if (response.data.status_code === 200) {
      yield put(getCategoryListSuccess(response.data.data));
      yield put(hideLoader())
    }
  } catch (error) {
    console.log("Category error", error);
  }
}

function* watchOnGetCategoryList() {
  yield takeLatest(Types.GET_CATEGORY_LIST, onGetCategoryList);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetCategoryList)
  ]);
}

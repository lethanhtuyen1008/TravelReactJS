import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import { GET_SLIDE_LIST } from "../constants";
import { getSlideListSuccess } from "../actions";
import { getSlideListFromApi } from "./api";

function* onGetSlideList({payload}) {
  try {
    yield delay(500, true);
    const response = yield call(getSlideListFromApi);
    if (response.data.status_code === 200) {
      yield put(getSlideListSuccess(response.data.data));
    }
  } catch (error) {
    console.log("List slide", error);
    yield payload.onError()
  }
}

function* watchOnGetSlideList() {
  yield takeLatest(GET_SLIDE_LIST, onGetSlideList);
}

export default function* rootSaga() {
  yield all([fork(watchOnGetSlideList)]);
}

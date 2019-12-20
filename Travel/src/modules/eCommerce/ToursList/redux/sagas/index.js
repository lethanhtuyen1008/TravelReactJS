import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import {
  getToursListSuccess,
  getToursDetailSuccess,
  getDiaDiemSuccess,
  getListVesuccess
} from "../actions";
import { showLoader, hideLoader } from "base/redux/General/GeneralAction";
import {
  getTourListFromApi,
  getTourDetailFromApi,
  getListDiaDiemFromApi,
  getListVeFromApi
} from "./api";

function* onGetToursList() {
  yield put(showLoader());
  try {
    yield delay(500, true);
    const response = yield call(getTourListFromApi);
    //console.log(response.data.data);
    yield put(getToursListSuccess(response.data.data));
    yield put(hideLoader());
  } catch (error) {
    console.log("List Tours", error);
  }
}

function* onGetTourDetail({ id }) {
  yield put(showLoader());
  try {
    yield delay(500, true);
    const response = yield call(getTourDetailFromApi, id);
    //console.log(response.data.result);
    if (response.data.result === true) {
      yield put(getToursDetailSuccess(response.data.data));
      yield put(hideLoader());
    }
  } catch (error) {
    console.log("List Product", error);
  }
}

function* onGetListDiaDiem() {
  yield put(showLoader());
  try {
    yield delay(300, true);
    const response = yield call(getListDiaDiemFromApi);
    //console.log(response.data.data);
    yield put(getDiaDiemSuccess(response.data.data));
  } catch (error) {
    console.log("List DD", error);
  }
}

function* ongetListGiaVe() {
  
  //yield put(showLoader());
  try {

    const response = yield call(getListVeFromApi);
    yield put(getListVesuccess(response.data.data));
  } catch (error) {
    yield put(hideLoader());
  }
}

function* watchOngetListGiave() {
  yield takeLatest(Types.GET_LIST_GIA_VE, ongetListGiaVe);
}

function* watchOnGetToursList() {
  yield takeLatest(Types.GET_TOURS_LIST, onGetToursList);
}
function* watchOnGetTourDetail() {
  yield takeLatest(Types.GET_TOURS_DETAIL, onGetTourDetail);
}
function* watchOnGetListDiaDiem() {
  yield takeLatest(Types.GET_LIST_DIA_DIEM, onGetListDiaDiem);
}
export default function* rootSaga() {
  yield all([
    fork(watchOnGetToursList),
    fork(watchOnGetTourDetail),
    fork(watchOnGetListDiaDiem),
    fork(watchOngetListGiave)
  ]);
}

import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import axios from "axios";
import * as Types from './GerenalContanst';
import { getProvinceSuccess, getWardSuccess } from "./GeneralAction";

const getProvinceListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/shipping/province`
    })
    return response;
}

const getWardListFromApi = async (idProvince) => {
  const response = await axios({
      method: 'get',
      url: `${process.env.APP_URL}/shipping/districts?id=${idProvince}`
  })
  return response;
}

function* onGetProvinceList() {
  try {
    yield delay(500, true);
    const response = yield call(getProvinceListFromApi, "Vietnam");
    if (response.data.status_code === 200) {
      yield put(getProvinceSuccess(response.data.data));
    }
  } catch (error) {
    console.log("List Province", error);
  }
}
function* onGetWardList({idProvince}) {
  try {
    yield delay(500, true);
    const response = yield call(getWardListFromApi, idProvince);
    if (response.data.status_code === 200) {
      yield put(getWardSuccess(response.data.data));
    }
  } catch (error) {
    console.log("List ward", error);
  }
}


function* watchOnGetProvinceList() {
  yield takeLatest(Types.GET_PROVINCE, onGetProvinceList);
}

function* watchOnGetWardList() {
  yield takeLatest(Types.GET_WARD, onGetWardList);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetProvinceList),
    fork(watchOnGetWardList)
  ]);
}

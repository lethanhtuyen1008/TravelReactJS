import * as Types from "./constants";

export const getToursList = () => {
  return {
    type: Types.GET_TOURS_LIST
  };
};
export const getToursListSuccess = data => {
  return {
    type: Types.GET_TOURS_LIST_SUCCESS,
    payload: data
  };
};
export const getToursDetail = id => {
  return {
    type: Types.GET_TOURS_DETAIL,
    id
  };
};
export const getToursDetailSuccess = data => {
  return {
    type: Types.GET_TOURS_DETAIL_SUCCESS,
    payload: data
  };
};

export const getDiaDiem = () => {
  return {
    type: Types.GET_LIST_DIA_DIEM
  };
};
export const getDiaDiemSuccess = data => {
  return {
    type: Types.GET_LIST_DIA_DIEM_SUCCESS,
    payload: data
  };
};

export const getListVe = () => {
  return {
    type: Types.GET_LIST_GIA_VE
  };
};

export const getListVesuccess = data => {
  return {
    type: Types.GET_LIST_GIA_VE_SUUCESS,
    payload: data
  };
};

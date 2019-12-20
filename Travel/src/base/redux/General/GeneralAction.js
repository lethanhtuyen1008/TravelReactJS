import * as Types from "./GerenalContanst";

export const showModalDynamic = (nameModal, boolean) => {
  return {
    type: Types.SHOW_MODAL_DYNAMIC,
    meta: {
      isShow: boolean,
      nameModal
    }
  };
};

export const showNotificationDynamic = (name, boolean) => {
  return {
    type: Types.SHOW_NOTIFICATION_DYNAMIC,
    meta: {
      name,
      isShow: boolean
    }
  };
};

export const showLoader = () => {
  return {
    type: Types.ON_SHOW_LOADER
  };
};

export const hideLoader = () => {
  return {
    type: Types.ON_HIDE_LOADER
  };
};

export const showMessError = (mess) => {
  return {
    type: Types.SHOW_MESS_ERROR,
    payload: mess
  };
};

export const hideMessError = (mess) => {
  return {
    type: Types.HIDE_MESS_ERROR,
    payload: mess
  };
};

export const showMessSuccess = (mess) => {
  return {
    type: Types.SHOW_MESS_SUCCESS,
    payload: mess
  };
};

export const hideMessSuccess = (mess) => {
  return {
    type: Types.HIDE_MESS_SUCCESS,
    payload: mess
  };
};

export const showLoadingBtn = () => {
  return {
    type: Types.SHOW_LOADING_BTN
  };
};

export const hideLoadingBtn = () => {
  return {
    type: Types.HIDE_LOADING_BTN
  };
};

export const getWidthScreen = (payload) => {
  return {
    type: Types.GET_WIDTH,
    payload
  };
};

export const getProvince = () => {
  return {
    type: Types.GET_PROVINCE
  };
};

export const getProvinceSuccess = (payload) => {
  return {
    type: Types.GET_PROVINCE_SUCCESS,
    payload
  };
};

export const getWard = (idProvince) => {
  return {
    type: Types.GET_WARD,
    idProvince
  };
};

export const getWardSuccess = (payload) => {
  return {
    type: Types.GET_WARD_SUCCESS,
    payload
  };
};

export const resetWard = () => {
  return {
    type: Types.RESET_WARD
  };
};

import * as Types from "./constants";

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

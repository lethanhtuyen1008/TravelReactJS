import * as Types from "./constants";
import produce from "immer";

const initialState = {
  productList: [],
  productDetail: [],
  listDiaDiem: [],
  listGiaVe: []
};
export default function ProductReducer(state = initialState, action) {
  const { payload, active } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_TOURS_LIST_SUCCESS: {
        draft.productList = payload;
        break;
      }
      case Types.GET_TOURS_DETAIL_SUCCESS: {
        draft.productDetail = payload;
        break;
      }
      case Types.GET_LIST_DIA_DIEM_SUCCESS: {
        console.log(payload);
        draft.listDiaDiem = payload;
        break;
      }
      case Types.GET_LIST_GIA_VE_SUUCESS: {
        draft.listGiaVe = payload;
        break;
      }
    }
  });
}

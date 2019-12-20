import * as Types from "./constants";
import produce from "immer";

const initialState = {
  productList: [],
  productDetail: [],
  showSelect: false,
  productToBuy: null
};

export default function ProductReducer(state = initialState, action) {
  const { payload, active } = action;

  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_PRODUCT_LIST_SUCCESS: {
        draft.productList = payload;
        break;
      }
      case Types.GET_PRODUCT_DETAIL_SUCCESS: {
        draft.productDetail = payload;
        break;
      }
      case Types.SHOW_SELECT_PRICE: {
        draft.showSelect = active;
        break;
      }
      case Types.GET_PRODUCT_TO_BUY: {
        draft.productToBuy = payload;
        break;
      }
    }
  });
}

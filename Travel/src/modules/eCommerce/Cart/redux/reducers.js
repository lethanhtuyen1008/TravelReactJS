import * as Types from "./constants";
import produce from "immer";

const initialState = {
  carts: sessionStorage.getItem("CART") ? JSON.parse(sessionStorage.getItem("CART")) : [],
  flag: null
};

export default function ProductReducer(state = initialState, action) {
  const { payload } = action;

  return produce(state, draft => {
    switch (action.type) {
      case Types.ADD_TOCART: {
        draft.carts = payload;
        break;
      }
      case Types.DELETE_ITEM_CART: {
        const index = draft.carts.findIndex(obj => obj.product_id === payload.id && obj.typePrice === payload.typePrice);
        if(index !== -1){
          if(!!draft.flag) draft.flag++;
          else draft.flag = 1;
          draft.carts = draft.carts.filter((_, i) => i !== index)
        } else draft.flag = 0;
        sessionStorage.setItem("CART", JSON.stringify(draft.carts))
        break;
      }
      case Types.UPDATE_QUANTITY_ITEM_CART_SUCCESS: {
        const index = draft.carts.findIndex(obj => obj.product_id === payload.id && obj.typePrice === payload.typePrice);
        if(index !== -1){
          if(!!draft.flag) draft.flag++;
          else draft.flag = 1;
          draft.carts[index]['quantity'] = payload.quantity;
        } else draft.flag = 0;
        sessionStorage.setItem("CART", JSON.stringify(draft.carts))
      }
    }
  });
}

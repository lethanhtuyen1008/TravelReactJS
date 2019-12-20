import * as Types from "./constants";
import produce from "immer";

const initialState = {
  addressDeli: localStorage.getItem("ADDRESS") ? JSON.parse(localStorage.getItem("ADDRESS")) : {},
  payment: "COD"
};

export default function CheckOutReducer(state = initialState, action) {
  const { payload } = action;

  return produce(state, draft => {
    switch (action.type) {
      case Types.ADD_ADDRESS_DELI: {
        draft.addressDeli = payload;
        localStorage.setItem("ADDRESS", JSON.stringify(draft.addressDeli));
        break;
      }
      case Types.SELECT_PAYMENT_METHOD: {
        draft.payment = payload;
        break;
      }
    }
  });
}

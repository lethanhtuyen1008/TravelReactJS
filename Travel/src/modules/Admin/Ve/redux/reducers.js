import * as Types from "./constants";
import produce from "immer";

const initialState = {
  listGiaVe: []
};

export default function AuthReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_GIA_VE_SUUCESS: {
        draft.listGiaVe = payload;
        break;
      }
    }
  });
}

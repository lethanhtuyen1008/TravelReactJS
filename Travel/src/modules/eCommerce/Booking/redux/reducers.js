import * as Types from "./constants";
import produce from "immer";

const initialState = {
  checkBook: null
};

export default function AuthReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.BOOKING_SUCCESS: {
        draft.checkBook = payload;
        break;
      }
    }
  });
}

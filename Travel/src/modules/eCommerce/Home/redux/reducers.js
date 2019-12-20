import * as Types from './constants';
import produce from "immer";

const initialState = {
  slideList: []
}

export default function HomeReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_SLIDE_LIST_SUCCESS: {
        draft.slideList = payload
        break;
      }
    }
  })
}

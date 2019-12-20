import * as Types from './constants';
import produce from "immer";

const initialState = {
  categoryList: []
};

export default function CategoryReducer(state = initialState, action) {
  const { payload } = action;

  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_CATEGORY_LIST_SUCCSESS: {
        draft.categoryList = payload;
      }
    }
  });
}

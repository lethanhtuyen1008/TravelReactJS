import * as Types from './constants';

export const getCategoryList = () => {

  return {
    type: Types.GET_CATEGORY_LIST
  }

}

export const getCategoryListSuccess = (data) => {
  return {
    type: Types.GET_CATEGORY_LIST_SUCCSESS,
    payload: data
  }
}

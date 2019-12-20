import * as Types from './constants';

export const getSlideList = (payload) => {
    return {
        type: Types.GET_SLIDE_LIST,
        payload
    }
}

export const getSlideListSuccess = (data) => {
    return {
        type: Types.GET_SLIDE_LIST_SUCCESS,
        payload: data
    }
}

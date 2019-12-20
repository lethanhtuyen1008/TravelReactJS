import * as Types from './constants';

export const getProductList = () => {
    return {
        type: Types.GET_PRODUCT_LIST
    }
}

export const getProductListSuccess = (data) => {
    return {
        type: Types.GET_PRODUCT_LIST_SUCCESS,
        payload: data
    }
}

export const getProductDetail = (id) => {
    return {
        type: Types.GET_PRODUCT_DETAIL,
        id
    }
}

export const getProductDetailSuccess = (data) => {
    return {
        type: Types.GET_PRODUCT_DETAIL_SUCCESS,
        payload: data
    }
}

export const showSelectPrice = (boolean) => {
    return {
        type: Types.SHOW_SELECT_PRICE,
        active: boolean
    }
}

export const getProductToBuy = (data) => {
    return {
        type: Types.GET_PRODUCT_TO_BUY,
        payload: data
    }
}

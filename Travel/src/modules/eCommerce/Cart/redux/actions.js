import * as Types from './constants';

export const onAddToCart = (payload) => {
    return {
        type: Types.ADD_TOCART,
        payload
    }
}
export const onDeleteItemCart = (payload) => {
    return {
        type: Types.DELETE_ITEM_CART,
        payload
    }
}
export const onUpdateQuantityItemCart = (data) => {
    return {
        type: Types.UPDATE_QUANTITY_ITEM_CART,
        data
    }
}
export const onUpdateQuantityItemCartSuccess = (payload) => {
    return {
        type: Types.UPDATE_QUANTITY_ITEM_CART_SUCCESS,
        payload
    }
}

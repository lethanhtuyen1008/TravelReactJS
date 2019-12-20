import * as Types from './constants';

export const onAddAddressDeli = (payload) => {
    return {
        type: Types.ADD_ADDRESS_DELI,
        payload
    }
}
export const onSelectPaymentMethod = (payload) => {
    return {
        type: Types.SELECT_PAYMENT_METHOD,
        payload
    }
}
export const onPayment = (payload) => {
    return {
        type: Types.ON_PAYMENT,
        payload
    }
}
export const onPaymentSuccess = (payload) => {
    return {
        type: Types.ON_PAYMENT_SUCCESS,
        payload
    }
}
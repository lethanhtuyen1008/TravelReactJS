import axios from 'axios';

export const getProductListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/product`
    })
    return response;
}
export const searchProductListFromApi = async queryString => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/product?${queryString}`
    })
    return response;
}
export const getProductDetailFromApi = async id => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/product/detail?id=${id}`
    })
    return response;
}

import axios from 'axios';

export const paymentFromAPI = async (token, data) => {
    const response = await axios({
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${process.env.APP_URL}/order/create`,
        data
    })
    return response;
}

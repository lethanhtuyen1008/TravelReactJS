import axios from 'axios';
export const getCategoryListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/product/category`
    })
    return response;
}

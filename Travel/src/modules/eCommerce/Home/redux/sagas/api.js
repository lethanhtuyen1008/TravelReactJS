import axios from 'axios';

export const getSlideListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: `${process.env.APP_URL}/media/slider`
    })
    return response;
}

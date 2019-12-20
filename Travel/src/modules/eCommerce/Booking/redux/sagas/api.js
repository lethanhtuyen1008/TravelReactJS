import axios from "axios";
import { API } from "../../../../../../envAPI";
export const bookingFromApi = async data => {
  const request = await axios({
    method: "post",
    url: API + "tourdat/book",
    data
  });
  return request;
};

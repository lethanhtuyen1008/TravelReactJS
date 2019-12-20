import axios from "axios";
import { API } from "../../../../../../envAPI";
export const getListVeFromApi = async () => {
  const request = await axios({
    method: "get",
    url: API + "tourdat",
    data
  });
  return request;
};

import axios from "axios";
import { API } from "../../../../../../envAPI";
export const getTourListFromApi = async () => {
  const response = await axios({
    method: "get",
    url: API + "tour"
  });
  return response;
};
export const getTourDetailFromApi = async _id => {
  const response = await axios({
    method: "get",
    //url: API + "tour/" + _id
    url: API + "lichkhoihanh/tour/" + _id
  });
  return response;
};
export const getListDiaDiemFromApi = async () => {
  const response = await axios({
    method: "get",
    url: API + "diadiem"
  });
  return response;
};
export const getListVeFromApi = async () => {
  const response = await axios({
    method: "get",
    url: API + "tourdat"
  });
  return response;
};

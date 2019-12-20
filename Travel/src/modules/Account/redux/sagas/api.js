import axios from "axios";

export const signUpFromApi = async data => {
  console.log(data);
  const request = await axios({
    method: "post",
    url: "https://evening-refuge-27360.herokuapp.com/api/users",
    data
  });
  return request;
};

export const loginFromApi = async data => {
  //const req = await axios.post(`https://evening-refuge-27360.herokuapp.com/auth`)
  const request = await axios({
    method: "post",
    url: "https://evening-refuge-27360.herokuapp.com/api/login",
    data
  });
  return request;
};

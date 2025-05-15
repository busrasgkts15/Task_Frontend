import axios from "axios";
import { endpoints } from "../urlEndpoints/endpoints";

export const Login = (data) => {
  return axios.post(endpoints.authLogin, data).then((res) => {
    return res.data;
  });
};

export const getToken = () => {
  return localStorage.getItem("token");
};

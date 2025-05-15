import axios from "axios";
import { endpoints } from "../urlEndpoints/endpoints";
import { getToken } from "./AuthService";

axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;

export const GetAllProducts = () => {
  return axios.get(endpoints.getAllProducts).then((res) => {
    return res.data;
  });
};

export const GetProductById = (id) => {
  return axios.get(endpoints.GetProductById + id).then((res) => {
    return res.data;
  });
};

export const AddProduct = (product) => {
  return axios.post(endpoints.addProduct, product);
};

export const DeleteProductById = (id) => {
  return axios.delete(endpoints.deleteProductById + id);
};

export const UpsertProductById = (id) => {
  return axios.put(endpoints.upsertProductById + id).then((res) => {
    return res.data;
  });
};

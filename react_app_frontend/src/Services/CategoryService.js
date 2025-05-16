import axios from "axios";
import { endpoints } from "../urlEndpoints/endpoints";
import { getToken } from "./AuthService";
import { Alert } from "antd";

axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;

export const GetAllCategories = () => {
  return axios.get(endpoints.getAllCategories).then((res) => {
    return res.data;
  });
};

export const GetCategoryById = (id) => {
  return axios.get(endpoints.getCategoryById() + id).then((res) => {
    return res.data;
  });
};

export const AddCategory = (data) => {
  return axios.post(endpoints.addCategory, data);
};

export const DeleteCategoryById = (id) => {
  return axios.delete(endpoints.deleteCategoryById + id);
};

export const UpsertCategoryById = (id) => {
  return axios.put(endpoints.upsertCategoryById + id).then((res) => {
    return res.data;
  });
};

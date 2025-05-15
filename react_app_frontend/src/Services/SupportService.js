import axios from "axios";
import { endpoints } from "../urlEndpoints/endpoints";

export const GetAllSupport = () => {
  return axios.get(endpoints.getAllSupport).then((res) => {
    return res.data;
  });
};

export const SupportById = (id) => {
  return axios.get(endpoints.getSupportById + id).then((res) => {
    res.data;
  });
};

export const AddSupport = (support) => {
  return axios.post(endpoints.addSupport, support);
};

export const DeleteSupport = (id) => {
  return axios.delete(endpoints.deleteSupport + id);
};

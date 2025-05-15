import axios from "axios";
import { endpoints } from "../urlEndpoints/endpoints";

export const GetAllUser = () => {
  return axios.get(endpoints.getAllUser).then((res) => {
    return res.data;
  });
};

export const GetUserById = (id) => {
  return axios.get(endpoints.getUserById + id).then((res) => {
    return res.data;
  });
};

export const AddUser = (user) => {
  return axios.post(endpoints.addUser, user);
};

export const DeleteUserById = (id) => {
  return axios.delete(endpoints.deleteUser + id);
};

export const UpsertUserById = (id) => {
  return axios.put(endpoints.upsertUser + id).then((res) => {
    return res.data;
  });
};

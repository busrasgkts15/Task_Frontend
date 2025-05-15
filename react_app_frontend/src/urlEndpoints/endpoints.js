import { GetAllProducts, GetProductById } from "../Services/ProductService";
import { GetAllUser } from "../Services/UserService";

const api = "http://localhost:5108/api/";

export const endpoints = {
  authLogin: api + "Auth/Login",
  getAllCategories: api + "Category/GetAllCategories",
  getCategoryById: api + "Category/GetCategoryById/",
  addCategory: api + "Category/AddCategory",
  deleteCategoryById: api + "Category/DeleteCategory/",
  upsertCategoryById: api + "Category/ChangeCategory/",
  getAllProducts: api + "Product/GetAllProducts",
  GetProductById: api + "Product/GetProduct/",
  addProduct: api + "Product/AddProduct",
  deleteProductById: api + "Product/DeleteProduct/",
  upsertProductById: api + "Product/UpdateProduct/",
  getAllSupport: api + "Support/GetAllSupport",
  getSupportById: api + "Support/SupportById/",
  addSupport: api + "Support/AddSupport",
  deleteSupport: api + "Support/DeleteSupport/",
  getAllUser: api + "User/GetAllUsers",
  getUserById: api + "User/GetUserById/",
  addUser: api + "User/AddUser",
  deleteUser: api + "User/DeleteUser/",
  upsertUser: api + "User/ChangeUser/",
};

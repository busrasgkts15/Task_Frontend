import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FullLayout from "./components/Layout/FullLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import UserSetting from "./pages/UserSetting";
import CategorySetting from "./pages/CategorySetting";
import ProductSetting from "./pages/ProductSetting";
import SupportSetting from "./pages/SupportSetting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPage />} />
            <Route path="/admin/usersetting" element={<UserSetting />} />
            <Route
              path="/admin/categorysetting"
              element={<CategorySetting />}
            />
            <Route path="/admin/productsetting" element={<ProductSetting />} />
            <Route path="/admin/supportsetting" element={<SupportSetting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

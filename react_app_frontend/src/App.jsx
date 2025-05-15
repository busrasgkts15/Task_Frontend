import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FullLayout from "./components/Layout/FullLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginLayout from "./components/Layout/LoginLayout";

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
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer";

const FullLayout = () => {
  return (
    <>
      <div className="page-wrapper">
        <Headers />
        <div className="page-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default FullLayout;

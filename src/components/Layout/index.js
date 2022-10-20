import RightBar from "../RightBar";
import Sidebar from "../SideBar";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="w-100 main-cover d-flex align-items-center justify-content-between">
      <div className="left-container bg-white">
        <Sidebar />
      </div>
      <div className="content pt-4 px-3">{children}</div>
      <div className="right-container bg-white">
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;

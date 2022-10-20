import { BsGrid1X2Fill } from "react-icons/bs";
import { color } from "../../constant/color";
import "./style.css";

const Sidebar = ({}) => {
  return (
    <div className="">
      <div className="brand-cover px-3 pt-4 d-flex align-items-center">
        <div
          className="brand-icon d-flex text-white px-2 fw-bold shadow-sm rounded-2 mx-2 align-items-center justify-content-center"
          style={{
            background: color.primary,
          }}
        >
          L
        </div>
        <div className="brand-name fw-bold  mx-2">LingLee</div>
      </div>
      <div className="link-cover mt-5">
        <a
          href="/"
          className="px-4 link-item d-flex  py-1 my-4  text-decoration-none"
          style={{
            borderRight: `2px solid ${color.primary}`,
          }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <BsGrid1X2Fill size={16} color={color.primary} />
          </div>
          <div className="px-3 link-name text-dark">Dashboard</div>
        </a>
        <a
          href="/"
          className="px-4 link-item d-flex  py-1 my-4  text-decoration-none"
        >
          <div className="d-flex align-items-center justify-content-center">
            <BsGrid1X2Fill size={16} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Dashboard
          </div>
        </a>
        <a
          href="/"
          className="px-4 link-item d-flex  py-1 my-4  text-decoration-none"
        >
          <div className="d-flex align-items-center justify-content-center">
            <BsGrid1X2Fill size={16} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Dashboard
          </div>
        </a>
        <a
          href="/"
          className="px-4 link-item d-flex  py-1 my-4  text-decoration-none"
        >
          <div className="d-flex align-items-center justify-content-center">
            <BsGrid1X2Fill size={16} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Dashboard
          </div>
        </a>
        <a
          href="/"
          className="px-4 link-item d-flex  py-1 my-4  text-decoration-none"
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              position: "relative",
            }}
          >
            <div className="chat-icon text-white d-flex align-items-center justify-content-center">
              4
            </div>
            <BsGrid1X2Fill size={16} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Chat
          </div>
        </a>
        <a
          href="/"
          className="px-4 link-item d-flex  py-1 my-4  text-decoration-none"
        >
          <div className="d-flex align-items-center justify-content-center">
            <BsGrid1X2Fill size={16} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Dashboard
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

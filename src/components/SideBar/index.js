import { BsGrid1X2Fill } from "react-icons/bs";
import { color } from "../../constant/color";
import "./style.css";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiBlackBook } from "react-icons/gi";
import { BsChatLeft } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
// import UpgradeImg from "../../assets/png/upgradeimage.png";
import UpgradeImg from "../../assets/png/upgradeimg.png";

const Sidebar = ({}) => {
  return (
    <div className="">
      <div className="brand-cover px-3 pt-4 mt-2 d-flex align-items-center">
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
      <div className="link-cover mt-5 pt-1">
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
            <AiOutlineFolder size={19} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Classes
          </div>
        </a>
        <a
          href="/"
          className="px-4 link-item d-flex  py-1 my-4  text-decoration-none"
        >
          <div className="d-flex align-items-center justify-content-center">
            <GiBlackBook size={20} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Resources
          </div>
        </a>
        <a
          href="/"
          className="px-4 link-item d-flex  py-1 my-4  text-decoration-none"
        >
          <div className="d-flex align-items-center justify-content-center">
            <AiOutlineCalendar size={20} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Learning plan
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
            <BsChatLeft size={16} color={color.grey} />
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
            <IoSettingsOutline size={20} color={color.grey} />
          </div>
          <div
            className="px-3 link-name"
            style={{
              color: color.grey,
            }}
          >
            Settings
          </div>
        </a>
      </div>
      <div
        className="upgrade-container mx-3 px-3 rounded-3"
        style={{
          position: "relative",
          background: color.lightergrey,
        }}
      >
        <div className="upgrade-img">
          <img
            src={UpgradeImg}
            className="image-fluid upgrade-img"
            alt={"upgrade"}
          />
        </div>
        <div
          className="upgrade-text mt-5 pt-4"
          style={{
            color: color.grey,
          }}
        >
          Upgrade to <span className="text-black fw-bold">PRO</span> for
        </div>
        <div
          className="upgrade-text2"
          style={{
            color: color.grey,
          }}
        >
          {" "}
          more resources.
        </div>
        <div
          className="upgradebtn rounded-3 py-2 mt-4 fw-bold"
          style={{
            background: color.primary,
            color: color.lightgrey,
          }}
        >
          Upgrade
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

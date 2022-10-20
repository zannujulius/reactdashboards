import moment from "moment";
import { BsSearch } from "react-icons/bs";
import { color } from "../../constant/color";

const PageTitle = ({ title, date }) => {
  return (
    <div className="page-title d-flex align-items-center justify-content-between">
      <div className="fw-400">{title}</div>
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="mx-3"
          style={{
            color: color.grey,
            fontSize: "14px",
          }}
        >
          {moment(Date.now()).format("LLL")}
        </div>
        <div
          className="search-icon p-2 rounded-2 d-flex align-items-center justify-content-between"
          style={{
            background: color.fadedPrimary,
          }}
        >
          <BsSearch size={16} color={color.primary} />
        </div>
      </div>
    </div>
  );
};

export default PageTitle;

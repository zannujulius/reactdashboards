import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import { color } from "../../constant/color";
import "./style.css";
import { Select } from "antd";

const CardTopTitle = ({ title, action, btnText }) => {
  const { Option } = Select;
  return (
    <div className="d-flex justify-content-between">
      <div className="custom-card__title">{title}</div>
      {action == "view" && (
        <div className="d-flex">
          <Button
            text={btnText}
            textColor={color.black}
            bgColor={color.white}
          />
          <div className="mx-1">
            <BsArrowRight size={16} color={color.black} />
          </div>
        </div>
      )}
      {action == "option" && (
        <div className="d-flex">
          <Select
            placeholder="Select date"
            bordered={false}
            clearIcon
            style={{
              fontSize: "12px",
            }}
          >
            <Option
              value={"Today"}
              style={{
                fontSize: "12px",
              }}
            >
              Today
            </Option>
            <Option
              style={{
                fontSize: "12px",
              }}
              value={"This week"}
            >
              This week
            </Option>
            <Option
              style={{
                fontSize: "12px",
              }}
              value={"This month"}
            >
              This month
            </Option>
            <Option
              style={{
                fontSize: "12px",
              }}
              value={"This year"}
            >
              This year
            </Option>
          </Select>
        </div>
      )}
    </div>
  );
};

export default CardTopTitle;

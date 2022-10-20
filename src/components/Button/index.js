import { color } from "../../constant/color";
import "./style.css";

const Button = ({
  fontSize,
  fontWeight,
  loading,
  text,
  bgColor,
  textColor,
}) => {
  return (
    <button
      className="rounded-3"
      disabled={loading}
      style={{
        background: bgColor || color.primary,
      }}
    >
      <div
        style={{
          color: textColor || color.white,
          fontSize: fontSize || "14px",
          fontWeight: fontWeight || "400",
        }}
      >
        {text}
      </div>
    </button>
  );
};

export default Button;

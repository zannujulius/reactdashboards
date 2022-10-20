import "./style.css";
import { BsArrowRight } from "react-icons/bs";
import { color } from "../../constant/color";

const CourseCard = ({ bgColor, item }) => {
  return (
    <div
      className="course-card rounded-3 p-3 d-flex align-items-center justify-content-between"
      style={{
        background: item.color,
      }}
    >
      <div className="course-hint d-flex align-items-center justify-content-end">
        <div
          className="text-white rounded-3 d-flex align-items-center justify-content-center"
          style={{
            background: "#e5e9fa5d",
            width: 50,
            height: 50,
          }}
        >
          {item.hint}
        </div>
        <div className="mx-2">
          <div
            className="course-title text-start"
            style={{
              color: color.fadedPrimary,
            }}
          >
            {item.title}
          </div>
          <div className="course-subject text-start text-white pt-1 fw-bold">
            {item.subject}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-end mt-4">
        <BsArrowRight size={17} color={color.white} />
      </div>
    </div>
  );
};

export default CourseCard;

import React from "react";
import { color } from "../../constant/color";
import { AiOutlineLogout } from "react-icons/ai";
import ProfileImg2 from "../../assets/png/profilesettings.png"
import "./style.css"
import {IoAdd} from "react-icons/io5"
import ScoreCard from "../ScoreCard";
import RemindersCard from "../RemindersCard";

const RightBar = () => {
  const data = [
    {
      hint: "B2",
      subject: "English",
      course: "High Intermediate",
      // color: color.primary,
    },
    {
      hint: "C1",
      subject: "Spanish",
      course: "Advanced",
      // color: "#3b3b65",
    },
  ];
  return (
    <div>
      <div className="px-4 pt-4  d-flex align-items-center justify-content-between">
        <div className="fw-bold">Logout</div>
        <div
          className="fs-4"
          style={{
            color: color.grey,
          }}
        >
          <AiOutlineLogout />
        </div>
      </div>
      <div
        className="rightbar-profile mt-3 d-flex align-items-center justify-content-center"
        style={{
          position: "relative",
        }}
      >
        <img
          src={ProfileImg2}
          className="image-fluid rightbar-profileimg"
          alt="profile"
        />
        <div className="add-icon  text-white d-flex align-items-center justify-content-center">
          <IoAdd />
        </div>
      </div>
      <div>Ezinne Nnabugwu</div>
      <div>Student</div>

      <div className="score-details mt-3">
        {data.map((i, index) => (
          <div className="" key={index}>
            <ScoreCard bgColor={color.primary} item={i} />
          </div>
        ))}
      </div>

      <div className="reminders-content px-3 pt-3">
        <RemindersCard />
        {/* <div className="reminders-text  d-flex align-items-center justify-content-between">
          <div className="reminderstext1">Reminders</div>
          <div className="reminders-icon">icon</div>
        </div> */}

        {/* <div className="reminders-main">
          <div
            className="rounded-3 d-flex align-items-center justify-content-center"
            style={{
              background: "#e5e9fa5d",
              width: 45,
              height: 45,
            }}
          >
           logo
          </div>
          <div className="reminders-main-text">
            <div className="reminders-main-text-1"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RightBar;

import React from 'react'
import "./style.css";
import { BsArrowRight } from "react-icons/bs";
import { color } from "../../constant/color";

const ScoreCard = ({bgColor, item}) => {
  return (
    <div classname="">
      {/* <div className="px-3 score-card d-flex align-items-center justify-content-between">
        <div>{item.hint}</div>
        <div>
          <div>{item.subject}</div>
          <div>{item.course}</div>
        </div>
      </div> */}
      <div className="px-3">
        {[1].map((i, index) => (
          <div
            className="score-entry pb-3 d-flex pt-3 align-items-center justify-content-between"
            key={index}
          >
            <div className="result-right d-flex align-items-center">
              {/* <div className="right-result-title">{item.hint}</div> */}
              <div
                className="rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  background: "#e5e9fa5d",
                  width: 45,
                  height: 45,
                }}
              >
                {item.hint}
              </div>
              <div className="right-result-category">
                <div className="px-2 text-start" style={{}}>
                  {item.subject}
                </div>
                <div className="right-result px-2 text-start" style={{}}>
                  {item.course}
                </div>
              </div>
            </div>
            <div className="result-right d-flex align-items-center">
              <div
                className="rounded-4 right-progress-bar "
                style={{
                  background: color.fadedPrimary,
                }}
              >
                <div
                  className="progress-value"
                  style={{
                    // background: index % 2 == 0 ? color.primary : color.red,
                    background: color.primary,
                    width: index % 2 == 0 ? "65%" : "35%",
                  }}
                ></div>
              </div>
              {/* <div
              className="result-value mx-2 d-flex align-items-center"
              style={{
                color: index % 2 == 0 ? color.primary : color.red,
              }}
            >
              {index % 2 == 0 ? "75%" : "25%"}
            </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard


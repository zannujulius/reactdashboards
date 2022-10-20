import { color } from "../../../constant/color";
import CardTopTitle from "../../CardTopTitle";
import "./style.css";

const ResultCard = () => {
  return (
    <div className="bg-white rounded-3 p-3">
      <CardTopTitle btnText={"More"} action={"view"} title={"Latest result"} />
      {[1, 2, 3, 4, 5].map((i, index) => (
        <div
          className="result-entry pb-3 d-flex pt-3 align-items-center justify-content-between"
          key={index}
        >
          <div className="result-left d-flex align-items-center">
            <div className="result-title">Unit 5 -</div>
            <div className="result-category px-2" style={{}}>
              Technology
            </div>
          </div>
          <div className="result-right d-flex align-items-center">
            <div
              className="rounded-4 progress-bar "
              style={{
                background: color.fadedPrimary,
              }}
            >
              <div
                className="progress-value"
                style={{
                  background: index % 2 == 0 ? color.primary : color.red,
                  width: index % 2 == 0 ? "75%" : "25%",
                }}
              ></div>
            </div>
            <div
              className="result-value mx-2 d-flex align-items-center"
              style={{
                color: index % 2 == 0 ? color.primary : color.red,
              }}
            >
              {index % 2 == 0 ? "75%" : "25%"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultCard;

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import ProfileImg from "../../assets/png/learnedgirl.png";
import { color } from "../../constant/color";
import "./style.css";
import ResultCard from "../../components/Dasboard/ResultCard";
import TimeCharts from "../../components/Dasboard/Charts/TimeCharts";
import CardTopTitle from "../../components/CardTopTitle";
import CourseCard from "../../components/CourseCard";

const Dashboard = () => {
  const data = [
    {
      title: "Business English",
      subject: "Grammar",
      hint: "B2",
      color: color.primary,
    },
    {
      title: "Common English",
      subject: "Phrasal verbs",
      hint: "B2",
      color: "#3b3b65",
    },
    {
      title: "Business Spanish",
      subject: "Vocabulary",
      hint: "C1",
      color: color.red,
    },
  ];
  return (
    <Layout>
      <div className="container-fluid">
        <PageTitle title={"Dashboard"} />
        <div
          className="row px-2 py-4 rounded-3  mt-5"
          style={{
            background: color.fadedRed,
          }}
        >
          <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              <div
                className="text-start hero-title pb-3"
                style={{
                  color: color.red,
                }}
              >
                Welcome back Anna!
              </div>
              <div className="text-start hero-caption pb-1">
                You've learned <span className="fw-bold">80%</span> of your goal
                this week!
              </div>
              <div className="text-start hero-caption">
                Keep it up and improve your result!
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-6 col-xl-6 col-xxl-6"
            style={{
              position: "relative",
            }}
          >
            <div className="profile-img ">
              <img
                src={ProfileImg}
                className="image-fluid profile-image"
                alt={"profile"}
              />
            </div>
          </div>
        </div>
        <div className="row d-flex mt-4">
          <div className="col-6">
            <ResultCard />
          </div>
          <div className="col-6">
            <div
              className="bg-white rounded-3 p-2"
              style={{
                height: "315px",
              }}
            >
              <div className="pb-3">
                <CardTopTitle
                  action={"option"}
                  title="Time spent on learning"
                />
              </div>
              <TimeCharts />
            </div>
          </div>
        </div>
        <div className=" mt-3">
          <div className="pb-3">
            <CardTopTitle
              title={"Your courses"}
              btnText={"More"}
              action={"view"}
            />
          </div>
          <div className="row">
            {data.map((i, index) => (
              <div className="col-4" key={index}>
                <CourseCard bgColor={color.primary} item={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

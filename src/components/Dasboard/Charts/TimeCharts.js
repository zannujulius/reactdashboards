import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { color } from "../../../constant/color";

const TimeCharts = () => {
  return (
    <div
      className=""
      style={{
        height: "255px",
      }}
    >
      <Bar
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Vocabulary",
              backgroundColor: color.fadedPrimary,
              data: Array.from(Array(7)).map(
                (i) => Math.floor(Math.random() * 100) + 1
              ),
              barThickness: 5,
            },
            {
              label: "Grammar",
              backgroundColor: color.red,
              data: Array.from(Array(7)).map(
                (i) => Math.floor(Math.random() * 100) + 1
              ),
              barThickness: 5,
            },
            {
              label: "listening",
              backgroundColor: color.primary,
              data: Array.from(Array(7)).map(
                (i) => Math.floor(Math.random() * 100) + 1
              ),
              barThickness: 5,
            },
            {
              label: "Writing",
              backgroundColor: "#101041",
              data: Array.from(Array(7)).map(
                (i) => Math.floor(Math.random() * 100) + 1
              ),
              barThickness: 5,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: false,
              text: "",
            },
            legend: {
              labels: {
                usePointStyle: true,
                boxWidth: 6,
                boxHeight: 6,
              },
              display: true,
              position: "bottom",
            },
          },
          scales: {
            x: {
              display: true,
              position: "top",
              ticks: {
                color: "#afafcb",
              },
              grid: {
                display: false,
                drawBorder: false,
              },
              stacked: true,
            },
            y: {
              display: false,
              grid: {
                display: false,
                color: "#DEDEDE",
                borderDash: [10, 3],
              },
              stacked: true,
            },
          },
        }}
      />
    </div>
  );
};

export default TimeCharts;

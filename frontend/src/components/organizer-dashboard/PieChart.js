import React from "react";
// import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["Direct", "Referral", "Social"];
const data = {
  labels: labels,
  datasets: [
    {
      data: [55, 30, 15],
      backgroundColor:  ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)"
    },
  ],
};
 const options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  };
const PieChart = () => {
  return (
    <div style={{height:'300px',width:'auto'}}>
      <Pie data={data} options={options}/>
    </div>
  );
};
export default PieChart;

// [wJpaPbptqfqc444YYJSBGCigKmyhn28nGJD3blvPStZIqYcf39qVa87vPhak1mCE]
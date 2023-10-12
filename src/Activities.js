import React, { useState } from "react";
import {Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
)


const BarChart = () => {

  const data = {
    labels: ["","Week 1","", "Week 2","", "Week 3","", "Week 4",""],
    datasets: [
      {
        label: "User",
        backgroundColor: "#98D89E",
        borderColor: "#98D89E",
        borderRadius:4,
        data: [null,500,null,450,null,200,null,400,null],
       
      },
      {
        label: "Guest",
        backgroundColor: "#EE8484",
        borderColor: "#EE8484",
        borderRadius:4,
        data: [null,400,null,450,null,300,null,350,null],
        
      },
    ],
  };
  const options={
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
      },
    },
    maintainAspectRatio:false,
    scales : {
      x : {
          grid: {
              drawOnChartArea : false,
              drawTicks:false,
              drawBorder:false,
              lineWidth:0,
          }
          
      } ,
      y : {
        grid: {
          drawTicks:false,
      },
        min:0,
        max:500,
        ticks:{
          stepSize:100,
        }
    } 
  },
    categoryPercentage:1,
    barPercentage:0.4,
    maxBarThickness:38,
    barThickness:45,
  }
  return (
    <div>
      <div className="chartSection barChart">
      <h3 className="chartHeading">Activities</h3>
      <span className="chartDate">May - June 2021</span>
        <Bar width={932}
  height={226} data={data}  options={options}/>
      </div>
    </div>
  );
};

export default BarChart;
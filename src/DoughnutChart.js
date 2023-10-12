import React from "react";
import {Chart as ChartJS,
ArcElement,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
)
const DoughnutChart = () => {
  const data = {
    labels: ["Basic Tees","Custom Short Pants","Super Hoodies"],
    datasets: [
      {
        backgroundColor: ["#98D89E","#EE8484","#F6DC7D"],
        borderRadius:15,
        borderWisth:16,
        borderJoinStyle:'miter',
        data: ["55","31","14"],
      },
    ],
  };
  const options={
    maxBarThickness:16,
    barThickness:16,
  }
  return (
    <div>
        <Doughnut width={250}
  height={250} data={data}  options={options}/>
    </div>
  );
};

export default DoughnutChart;
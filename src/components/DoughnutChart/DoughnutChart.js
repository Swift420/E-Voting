


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut, HorizontalBar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function DoughnutChart({text}) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
 
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
    setChartData({
      labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
      datasets: [
        {
          label: "SRC Presidential Race",
          data: [500, 55, 34, 120, 720],
            backgroundColor:  [
                'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
            ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
          
        },
      ],
    });
    setChartOptions({
        indexAxis: 'y',
      responsive: true,
      plugins: {
        
        title: {
          display: true,
          text: {text},
          
        },
      },
    });
  }, []);

  return (
    <div  className='w-26'>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default DoughnutChart;

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import eve from "../eve.json";
import PieChart from "./PieChart";
import Bar_Chart from "./Bar_Chart";
const AlertLineChart = () => {
  const timestamps = eve.map((d) => new Date(d.timestamp).toLocaleString());
  const severities = eve.map((d, i) => d.alert && d.alert.severity);


  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "Alert Severity Over Time",
        data: severities,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Timestamp",
          
        },
      },
      y: {
        title: {
          display: true,
          text: "Severity",
          
        },
        ticks: {
          beginAtZero: true,
          stepSize: 3,
          max: 5,
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Alerts Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

const Charts = () => {
  return (
    <main className="flex-grow  p-3 ">
      <AlertLineChart data={eve} />
      <PieChart />

      <Bar_Chart />
    </main>
  );
};

export default Charts;

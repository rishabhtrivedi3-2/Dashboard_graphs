import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import eve from "../eve.json";

const PieChart = ({ data, title }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
      datalabels: {
        display: true,
        color: "white",
        font: {
          weight: "bold",
        },
        formatter: (value) => {
          return value;
        },
      },
    },
  };

  return <Pie data={chartData} options={options} plugins={[ChartDataLabels]} />;
};

const processData = (data, key) => {
  return data.reduce((acc, item) => {
    const value = key === "category" ? item.alert?.category : item[key];
    if (value) {
      acc[value] = (acc[value] || 0) + 1;
    }
    return acc;
  }, {});
};

const Dashboard = () => {
  const protocolData = processData(eve, "proto");
  const categoryData = processData(eve, "category");

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          {protocolData && Object.keys(protocolData).length > 0 && (
            <PieChart data={protocolData} title="Protocol Distribution" />
          )}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          {categoryData && Object.keys(categoryData).length > 0 && (
            <PieChart data={categoryData} title="Category Distribution" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

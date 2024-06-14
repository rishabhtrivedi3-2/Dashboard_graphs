import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import eve from "../eve.json";

const BarChart = ({ data, title, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

const processData = (data, key) => {
  const result = data.reduce((acc, item) => {
    const value = item[key];
    if (value) {
      acc[value] = (acc[value] || 0) + 1;
    }
    return acc;
  }, {});
  const sortedResult = Object.entries(result)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);
  return {
    labels: sortedResult.map(([k]) => k),
    data: sortedResult.map(([, v]) => v),
  };
};

const Bar_Chart = () => {
  const { labels: srcIpLabels, data: srcIpData } = processData(eve, "src_ip");
  const { labels: destPortLabels, data: destPortData } = processData(
    eve,
    "dest_port"
  );
  const { labels: descIpLabels, data: descIpData } = processData(
    eve,
    "dest_ip"
  );
  const { labels: srcPortLabels, data: srcPortData } = processData(
    eve,
    "src_port"
  );

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" mt->
        <div className="bg-gray-900 p-4 rounded-lg shadow mt-2 mb-3">
          {srcIpData.length > 0 && (
            <BarChart
              data={srcIpData}
              title="Top Source IPs"
              labels={srcIpLabels}
            />
          )}
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow">
          {destPortData.length > 0 && (
            <BarChart
              data={destPortData}
              title="Top Destination Ports"
              labels={destPortLabels}
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-4 rounded-lg shadow mt-2 mb-3">
          {srcIpData.length > 0 && (
            <BarChart
              data={descIpData}
              title="Top Destination IPs"
              labels={descIpLabels}
            />
          )}
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow mt-2 mb-3">
          {destPortData.length > 0 && (
            <BarChart
              data={srcPortData}
              title="Top Source Ports"
              labels={srcPortLabels}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Bar_Chart;

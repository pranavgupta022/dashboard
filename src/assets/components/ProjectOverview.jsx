import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectOverview = () => {
  const data = {
    labels: ["App Design", "Web Development", "Marketing"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["#F97316", "#6366F1", "#06B6D4"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md h-[350px] w-[100%]flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Projects Overview</h3>
        <button className="text-gray-400 hover:text-gray-600">...</button>
      </div>

      {/* Chart */}
      <div className="flex justify-center items-center h-[250px] relative">
        <Doughnut data={data} options={options} />
        <div className="absolute text-center">
          <span className="text-2xl font-bold">65%</span>
          <p className="text-gray-500 text-sm">App Design</p>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-center gap-4 text-sm font-medium text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-orange-500 rounded-full"></span> App Design
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-indigo-500 rounded-full"></span> Web Development
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-teal-500 rounded-full"></span> Marketing
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;

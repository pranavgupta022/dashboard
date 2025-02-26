import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ProjectStatistics = () => {
  const [selectedFilter, setSelectedFilter] = useState("12 Months");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Working Hours",
        data: [200, 250, 180, 220, 300, 350, 400, 380, 320, 280, 240, 260],
        backgroundColor: "#F97316",
        borderRadius: 6,
      },
      {
        label: "Projects",
        data: [100, 150, 130, 170, 200, 250, 290, 270, 230, 210, 190, 220],
        backgroundColor: "#A0AEC0",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true } 
    },
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md h-[90%]">
      {/* Header with Filter Options */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Project Statistics</h3>
        <div className="flex gap-3 text-sm text-gray-500">
          {['12 Months', '30 Days', '7 Days', '24 Hours'].map((filter) => (
            <button 
              key={filter} 
              className={`px-2 py-1 rounded-md ${selectedFilter === filter ? '' : 'hover:bg-orange-500 hover:text-white'}`} 
              onClick={() => setSelectedFilter(filter)}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[270px]">
        <Bar data={data} options={options} />
      </div>

      {/* Legend below the chart */}
      <div className="flex justify-center gap-6 mt-4 text-sm font-medium text-gray-600">
        <div className="flex items-center gap-2">
          {/* <span className="w-3 h-3 bg-orange-500 rounded-full"></span> Working Hours */}
        </div>
        <div className="flex items-center gap-2">
          {/* <span className="w-3 h-3 bg-gray-400 rounded-full"></span> Projects */}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatistics;

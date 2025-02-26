import React from "react";
import { FaUsers } from "react-icons/fa";

const ProjectSummary = () => {
  const projects = [
    { name: "Tiddo App", members: 19, icon: "🟠" },
    { name: "Homie SAAS Application", members: 24, icon: "🔵" },
  ];

  const statuses = [
    { label: "In Progress", count: 22, color: "text-yellow-500" },
    { label: "Completed", count: 10, color: "text-green-500" },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-full">
      <h2 className="text-lg font-semibold text-gray-700">Projects Summary</h2>
      <div className="mt-4 space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{project.icon}</span>
              <div>
                <p className="text-gray-700 font-medium">{project.name}</p>
                <p className="text-sm text-gray-500 flex items-center">
                  <FaUsers className="mr-1" /> {project.members} Members
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {statuses.map((status, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
          >
            <p className={"font-medium " + status.color}>{status.label}</p>
            <span className="font-semibold text-gray-700">{status.count} Projects</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSummary;

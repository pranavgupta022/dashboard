import React from "react";

const tasks = [
  {
    title: "Tiddo Mobile App Web Version",
    description: "We've to design a dashboard for DevignEdge Design Agency.",
    updated: "Updated 2 Hours ago",
    avatars: [
      { src: "", alt: "User 1" },
      { src: "/avatars/avatar2.png", alt: "User 2" },
    ],
    extraCount: 2,
  },
  {
    title: "Scrum Call Discussion",
    description: "We've to design a dashboard for DevignEdge Design Agency.",
    updated: "Updated 5 Hours ago",
    avatars: [
      { src: "/avatars/avatar3.png", alt: "User 3" },
      { src: "/avatars/avatar4.png", alt: "User 4" },
    ],
    extraCount: 8,
  },
];

export default function DailyTasks() {
  return (
    <div className="p-6 rounded-2xl shadow-lg bg-white w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Daily Tasks</h2>
        <button className="flex items-center gap-1 text-gray-600 text-sm font-medium bg-transparent border-none cursor-pointer">
          Today <span className="ml-1">▼</span>
        </button>
      </div>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">{task.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{task.description}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-400">{task.updated}</span>
              <div className="flex items-center -space-x-2">
                {task.avatars.map((avatar, i) => (
                  <img key={i} src={avatar.src} alt={avatar.alt} className="w-7 h-7 border-2 border-white shadow rounded-full" />
                ))}
                {task.extraCount > 0 && (
                  <span className="w-7 h-7 flex items-center justify-center bg-gray-300 text-xs font-medium rounded-full border-2 border-white shadow">
                    +{task.extraCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

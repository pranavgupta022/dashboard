import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Pending Projects", value: 44.75, color: "#FF7F50" },
  { name: "Done Projects", value: 46.27, color: "#8A2BE2" },
  { name: "New Projects", value: 25, color: "#00BFFF" },
];

const MonthlyTarget = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md  sm:w-[100%] ">
      <h3 className="text-lg font-semibold mb-4">Monthly Target</h3>
      <div className="flex justify-center">
        <PieChart width={250} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          {/* <Legend /> */}
        </PieChart>
      </div>
      <div className="mt-0 text-sm text-gray-800 flex gap-2">
        <p>
          <span className="inline-block w-3 h-3 rounded-full bg-[#FF7F50] mr-2"></span>
          Pending Projects: {data[0].value}%
        </p>
        <p>
          <span className="inline-block w-3 h-3 rounded-full bg-[#8A2BE2] mr-2"></span>
          Done Projects: {data[1].value}%
        </p>
        <p>
          <span className="inline-block w-3 h-3 rounded-full bg-[#00BFFF] mr-2"></span>
          New Projects: {data[2].value}%
        </p>
      </div>
    </div>
  );
};

export default MonthlyTarget;

import React from "react";
import Cards from "./Cards";
import MonthlyTarget from "./MonthlyTarget";
import ProjectStatistics from "./ProjectStatistics";
import ProjectSummary from "./ProjectSummary";
import ProjectOverview from "./ProjectOverview";
import DailyTask from "./DailyTask";

const Overview = () => {
  return (
    <div className="p-5 w-full text-gray-600 overflow-y-scroll">
      <h1 className="text-xl font-semibold mb-4">Dashboards &gt; Overview</h1>
      
      {/* Cards Section */}
      <Cards />

      {/* Monthly Target & Project Statistics */}
      <div className="flex w-full gap-6 mt-6">
        <div className="w-[30%]">
          <MonthlyTarget />
        </div>
        <div className="w-[70%]">
          <ProjectStatistics />
        </div>
      </div>

      {/* Project Summary, Project Overview & Daily Tasks */}
      <div className="flex h-[280px] w-full gap-6 mt-6">
        <div className="w-[30%]">
          <ProjectSummary />
        </div>
        <div className="flex w-[70%] gap-6">
          <div className="w-[50%]">
            <ProjectOverview />
          </div>
          <div className="w-[50%]">
            <DailyTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

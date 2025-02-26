import React from "react";
import Cards from "../components/Cards";
import MonthlyTarget from "../components/MonthlyTarget";
import ProjectStatistics from "../components/ProjectStatistics";
import ProjectSummary from "../components/ProjectSummary";
import ProjectOverview from "../components/ProjectOverview";
import DailyTask from "../components/DailyTask";

const Dashboard = () => {
  return (
    <div>
      <h1 className="">Dashboards &gt; Overview</h1>
      <Cards />

      <div className="flex w-full gap-6 mt-6">
        <div className="w-[30%]">
          <MonthlyTarget />
        </div>
        <div className="w-[70%]">
          <ProjectStatistics />
        </div>
      </div>

      <div className="flex h-[280px] w-full gap-6 ">
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

export default Dashboard;

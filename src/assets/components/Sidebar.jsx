import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeadset,
  FaColumns,
  FaFolderOpen,
  FaThLarge,
  FaRegCalendarAlt,
  FaChartPie,
  FaTicketAlt,
  FaProjectDiagram,
  FaTasks,
  FaCogs,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="w-64 h-screen bg-[#0F172A] text-white p-5 flex flex-col">
      {/* Logo Section */}
      <div className="text-4xl font-bold text-orange-500 mb-8">Panze</div>

      {/* Navigation Section */}
      <nav className="flex-1">
        <p className="text-white-400 uppercase text-sm mb-3 tracking-widest">
          Dashboards
        </p>
        <ul className="space-y-2">
          <li
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 text-white font-medium cursor-pointer"
            onClick={() => navigate("/overview")}
          >
            <FaChartPie className="text-lg" /> <span>Overview</span>
          </li>
          <li
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer"
            onClick={() => navigate("/calendar")}
          >
            <FaRegCalendarAlt className="text-lg" /> <span>Calendar</span>
          </li>
          <li
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer"
            onClick={() => navigate("/tickets")}
          >
            <FaTicketAlt className="text-lg" /> <span>Tickets</span>
          </li>
          <li
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer"
            onClick={() => navigate("/file-manager")}
          >
            <FaFolderOpen className="text-lg" /> <span>File Manager</span>
          </li>
          <li
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer"
            onClick={() => navigate("/employee")}
          >
            <FaColumns className="text-lg" /> <span>Employee</span>
          </li>
          <li
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            <FaProjectDiagram className="text-lg" /> <span>Projects</span>
          </li>
          <li
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer"
            onClick={() => navigate("/tasks")}
          >
            <FaTasks className="text-lg" /> <span>Tasks</span>
          </li>
        </ul>

        {/* Administrator Section */}
        <p className="400 uppercase text-sm mt-6 mb-3 tracking-widest">
          Administrator
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer">
            <FaUserShield className="text-lg" /> <span>Auth Pages</span>
          </li>
          <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer">
            <FaCogs className="text-lg" /> <span>Extra Pages</span>
          </li>
          <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer">
            <FaThLarge className="text-lg" /> <span>Layout</span>
          </li>
        </ul>
      </nav>

      {/* Bottom Section */}
      <div>
        <p className="400 uppercase text-sm mb-3 tracking-widest">Settings</p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer">
            <FaHeadset className="text-lg" /> <span>Support</span>
          </li>
          <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer">
            <FaCogs className="text-lg" /> <span>Settings</span>
          </li>
          <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-600 transition cursor-pointer">
            <FaSignOutAlt className="text-lg" /> <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

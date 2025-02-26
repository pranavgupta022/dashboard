import React from "react";
import { FaSearch, FaBell, FaMoon, FaWifi } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Header = () => {
  return (
    <div className="fixed top-0 left-64 w-[87%]  h-16  bg-white text-white flex items-center justify-between px-6 shadow-md">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-200 px-3 py-2 rounded-4xl">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search tasks..."
          className="bg-transparent outline-none text-gray-800 pl-3"
        />
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center space-x-6">
        <FaWifi className="text-gray-400 text-xl" />
        <FaMoon className="text-gray-400 text-xl cursor-pointer" />
        <FaBell className="text-gray-400 text-xl cursor-pointer" />
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
          <IoMdPerson className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;

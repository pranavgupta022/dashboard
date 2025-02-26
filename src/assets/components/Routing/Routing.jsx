import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Calendar from "../Calendar";  // Create this file
import Tickets from "../Tickets";    // Create this file
import Projects from "../Projects";  // Create this file
import Tasks from "../Tasks";        // Create this file
import Employee from "../Employee"; 

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
  );
};

export default Routing;

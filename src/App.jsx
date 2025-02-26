import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/components/Sidebar";
import Header from "./assets/components/Header";
import Overview from "./assets/components/Overview";
import Calendar from "./assets/components/Calender";
import Tickets from "./assets/components/Ticket";
import Projects from "./assets/components/Projects";
import Tasks from "./assets/components/Tasks";
import Employee from "./assets/components/Employee";

function App() {
  return (
    <Router>
      <div className="flex max-h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 h-16">
          <Header />

          <div className="p-5 mt-16 w-full text-gray-600 overflow-y-scroll">
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/employee" element={<Employee />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

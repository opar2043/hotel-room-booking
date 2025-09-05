import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBed, FaUsers, FaClipboardList, FaHome, FaCog, FaBars, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#1b1f2b] text-white p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-[#1b1f2b] text-white p-5 transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-8 ">Dashboard</h2>
        <nav className="space-y-4 min-h-screen">
          {/* <Link to="/dashboard" className="flex items-center gap-3 hover:text-blue-400">
            <FaHome /> Overview
          </Link> */}
          <Link to="/dashboard/allbooking" className="flex items-center gap-3 hover:text-blue-400">
            <FaClipboardList /> Bookings
          </Link>
          <Link to="/dashboard/room-admin" className="flex items-center gap-3 hover:text-blue-400">
            <FaBed /> Rooms
          </Link>
          <Link to="/dashboard/users" className="flex items-center gap-3 hover:text-blue-400">
            <FaUsers /> Users
          </Link>
          <Link to="/" className="flex rounded-md items-center gap-3 bg-red-500 hover:bg-red-400 p-2 px-4">
            <FaHome></FaHome> Home
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-0 mt-12 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

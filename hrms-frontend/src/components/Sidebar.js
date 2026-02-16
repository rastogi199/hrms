import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>HRMS Lite</h2>
      </div>

      <nav>
        <NavLink to="/" end className="sidebar-link">
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/employees" className="sidebar-link">
          <span>Employees</span>
        </NavLink>

        <NavLink to="/attendance" className="sidebar-link">
          <span>Attendance</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Dashboard() {
  const [employees, setEmployees] = useState(0);
  const [attendance, setAttendance] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      API.get("employees/"),
      API.get("attendance/")
    ])
      .then(([empRes, attRes]) => {
        setEmployees(empRes.data.length);
        setAttendance(attRes.data.length);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">
      <div
        className="dashboard-card blue"
        onClick={() => navigate("/employees")}
      >
        <div className="card-content">
          <div>
            <h4>Total Employees</h4>
            <h2>{employees}</h2>
          </div>
        </div>
      </div>

      <div
        className="dashboard-card green"
        onClick={() => navigate("/attendance")}
      >
        <div className="card-content">
          <div>
            <h4>Total Attendance Records</h4>
            <h2>{attendance}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

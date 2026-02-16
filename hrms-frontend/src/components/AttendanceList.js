import React, { useEffect, useState, useCallback } from "react";
import DataTable from "react-data-table-component";
import API from "../api";

function AttendanceList({ refresh }) {
  const [attendance, setAttendance] = useState([]);
  const [dateFilter, setDateFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAttendance = useCallback(() => {
    setLoading(true);

    let url = "attendance/";
    if (dateFilter) {
      url += `?date=${dateFilter}`;
    }

    API.get(url)
      .then(res => setAttendance(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [dateFilter]);

  useEffect(() => {
    fetchAttendance();
  }, [refresh, fetchAttendance]);

  const clearFilter = () => {
    setDateFilter("");
  };

  const columns = [
    {
      name: "Sr No",
      width: "80px",
      cell: (row) => attendance.indexOf(row) + 1
    },
    {
      name: "Employee Name",
      selector: row => row.employee_name,
      sortable: true,
      grow: 2
    },
    {
      name: "Date",
      selector: row => row.date,
      sortable: true
    },
    {
      name: "Status",
      cell: row => (
        <span
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
            color: "#fff",
            backgroundColor:
              row.status === "Present" ? "#16a34a" : "#dc2626"
          }}
        >
          {row.status}
        </span>
      )
    }
  ];

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (!loading && attendance.length === 0) {
    return (
      <div className="attendance-wrapper">
        <div className="attendance-top">
          <h2>Attendance Records</h2>
        </div>
        <div className="empty-state">
          No attendance records found.
        </div>
      </div>
    );
  }

  return (
    <div className="attendance-wrapper">
      <div className="attendance-top">
        <div>
          <h2>Attendance Records</h2>
        </div>

        <div className="filter-bar">
          <input
            type="date"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
          />
          <button onClick={fetchAttendance}>Filter</button>
          <button className="clear-btn" onClick={clearFilter}>
            Clear
          </button>
        </div>
      </div>

      <div className="datatable-card">
        <DataTable
          columns={columns}
          data={attendance}
          pagination
          highlightOnHover
          striped
          responsive
        />
      </div>
    </div>
  );
}

export default AttendanceList;

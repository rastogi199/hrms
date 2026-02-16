import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import API from "../api";

function EmployeeList({ refresh }) {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, [refresh]);

  const fetchEmployees = () => {
    setLoading(true);
    API.get("employees/")
      .then(res => setEmployees(res.data))
      .catch(() => alert("Error fetching employees"))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      API.delete(`employees/${id}/`)
        .then(() => fetchEmployees())
        .catch(() => alert("Error deleting employee"));
    }
  };

  const filteredEmployees = employees.filter(emp =>
    emp.full_name.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: "Sr No",
      width: "80px",
      cell: (row) => filteredEmployees.indexOf(row) + 1
    },
    {
      name: "Employee ID",
      selector: row => row.employee_id,
      sortable: true
    },
    {
      name: "Full Name",
      selector: row => row.full_name,
      sortable: true
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true
    },
    {
      name: "Department",
      selector: row => row.department,
      sortable: true
    },
    {
      name: "Total Present",
      selector: row => row.total_present,
      sortable: true
    },
    {
      name: "Total Absent",
      selector: row => row.total_absent,
      sortable: true
    },
    {
      name: "Action",
      cell: row => (
        <button
          style={{
            background: "#dc2626",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}
          onClick={() => handleDelete(row.id)}
        >
          Delete
        </button>
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

  if (!loading && employees.length === 0) {
    return (
      <div className="empty-state">
        No employees found. Please add an employee.
      </div>
    );
  }

  return (
    <div className="employee-wrapper">
      <div className="employee-top">
        <input
          type="text"
          placeholder="Search by name or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="datatable-card">
        <DataTable
          columns={columns}
          data={filteredEmployees}
          pagination
          highlightOnHover
          striped
          responsive
        />
      </div>
    </div>
  );
}

export default EmployeeList;

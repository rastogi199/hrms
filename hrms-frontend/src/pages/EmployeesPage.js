import React, { useState } from "react";
import AddEmployee from "../components/AddEmployee";
import EmployeeList from "../components/EmployeeList";

function EmployeesPage() {
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <div className="page-header">
        <h2>Employees</h2>

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "+ Add Employee"}
        </button>
      </div>

      {showForm && <AddEmployee onSuccess={reload} />}

      <EmployeeList refresh={refresh} />
    </div>
  );
}

export default EmployeesPage;

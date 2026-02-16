import React, { useEffect, useState } from "react";
import API from "../api";

function AttendanceForm({ refresh }) {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present"
  });

  useEffect(() => {
    API.get("employees/").then(res => setEmployees(res.data));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    API.post("attendance/", form)
      .then(() => {
        alert("Attendance Marked");
        refresh();
      })
      .catch(err => alert("Error: Duplicate or Invalid"));
  };

  return (
    <div className="card">
      <h2>Mark Attendance</h2>
      <form onSubmit={handleSubmit} className="flex">
        <select name="employee" onChange={handleChange} required>
          <option value="">Select Employee</option>
          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}
        </select>

        <input type="date" name="date" onChange={handleChange} required />

        <select name="status" onChange={handleChange}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <button type="submit">Mark</button>
      </form>
    </div>
  );
}

export default AttendanceForm;

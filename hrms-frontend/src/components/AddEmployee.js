import React, { useState } from "react";
import API from "../api";

function AddEmployee({ onSuccess }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("employees/", form)
      .then(() => {
        alert("Employee Added Successfully");
        onSuccess();
        setForm({
          employee_id: "",
          full_name: "",
          email: "",
          department: ""
        });
      })
      .catch(() => alert("Error adding employee"));
  };

  return (
    <div className="form-card">
      <h3 className="form-title">Add New Employee</h3>

      <form onSubmit={handleSubmit} className="form-grid">

        <div className="form-group">
          <label>Employee ID</label>
          <input
            type="text"
            name="employee_id"
            value={form.employee_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">Add Employee</button>
        </div>

      </form>
    </div>
  );
}

export default AddEmployee;


import React, { useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

function AttendancePage() {
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <div className="page-header">
        <h2>Attendance</h2>
      </div>

      <AttendanceForm refresh={reload} />
      <AttendanceList refresh={refresh} />
    </div>
  );
}

export default AttendancePage;

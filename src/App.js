import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DepartmentList from "./component/DepartmentList";
import DepartmentForm from "./component/DepartmentForm";
import EmployeeList from "./component/EmployeeList";
import EmployeeForm from "./component/EmployeeForm";
import LandingPage from "./component/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/departments/new" element={<DepartmentForm />} />
        <Route path="/departments/:id" element={<DepartmentForm />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/new" element={<EmployeeForm />} />
        <Route path="/employees/:id" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
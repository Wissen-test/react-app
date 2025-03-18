import React, { useEffect, useState } from "react";
import { getDepartments, deleteDepartment } from "../service/api";
import { Link } from "react-router-dom";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartment(id);
      fetchDepartments(); // Refresh the list
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };

  return (
    <div>
      <h2>Departments</h2>
      <Link to="/departments/new">Create New Department</Link>
      <ul>
        {departments.map((department) => (
          <li key={department.departmentID}>
            <Link to={`/departments/${department.departmentID}`}>
              {department.departmentName}
            </Link>
            <button onClick={() => handleDelete(department.departmentID)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
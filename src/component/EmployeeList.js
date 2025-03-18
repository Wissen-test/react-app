import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../service/api";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees(); // Refresh the list
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <h2>Employees</h2>
      <Link to="/employees/new">Create New Employee</Link>
      <ul>
        {employees.map((employee) => (
          <li key={employee.employeeID}>
            <Link to={`/employees/${employee.employeeID}`}>
             employeeID : { employee.employeeID } - employeeName: { employee.employeeName } - departmentId: { employee.departmentId } - managerId : { employee.managerId } - isDepartmentHead: { employee.isDepartmentHead ? "true" : "false" } - isCeo: { employee.isCeo ? "true" : "false"}  
            </Link>
            <button onClick={() => handleDelete(employee.employeeID)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
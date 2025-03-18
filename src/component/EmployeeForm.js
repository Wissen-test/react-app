import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, createEmployee, updateEmployee } from "../service/api";

const EmployeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeID: null,
    departmentId: null,
    managerId: null,
    isCeo: false,
    isDepartmentHead: false,
  });

  useEffect(() => {
    if (id) {
      fetchEmployee();
    }
  }, [id]);

  const fetchEmployee = async () => {
    try {
      const response = await getEmployeeById(id);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  };

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id != null) {
        await updateEmployee(id, employee);
      } else {
        await createEmployee(employee);
      }
      navigate("/employees");
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Employee" : "Create Employee"}</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="empId">Employee Id:
          <input
            id="empId"
            type="text"
            name="employeeID"
            value={employee.employeeID}
            onChange={handleChange}
          /></label>
        </div>
        <div>
          <label htmlFor="empName">Employee Name:
          <input
            id="empName"
            type="text"
            name="employeeName"
            value={employee.employeeName}
            onChange={handleChange}
          /></label>
        </div>
        <div>
          <label htmlFor="managerId">managerId:
          <input
            id="managerId"
            type="text"
            name="managerId"
            value={employee.managerId}
            onChange={handleChange}
          /></label>
        </div>
        <div>
          <label htmlFor="deptId">DepartmentId:
          <input
            id="deptId"
            type="text"
            name="departmentId"
            value={employee.departmentId}
            onChange={handleChange}
          /></label>
        </div>
        <div>
          <label htmlFor="isDeptHead">Is Department Head:
          <input
            id="isDeptHead"
            type="checkbox"
            name="isDepartmentHead"
            checked={employee.isDepartmentHead}
            value={employee.isDepartmentHead}
            onChange={handleChange}
          /></label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
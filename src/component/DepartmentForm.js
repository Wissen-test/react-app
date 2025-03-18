import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDepartmentById, createDepartment, updateDepartment } from "../service/api";

const DepartmentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState({
    departmentName: "",
    headID: null,
  });

  useEffect(() => {
    if (id) {
      fetchDepartment();
    }
  }, [id]);

  const fetchDepartment = async () => {
    try {
      const response = await getDepartmentById(id);
      setDepartment(response.data);
    } catch (error) {
      console.error("Error fetching department:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateDepartment(id, department);
      } else {
        await createDepartment(department);
      }
      navigate("/departments");
    } catch (error) {
      console.error("Error saving department:", error);
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Department" : "Create Department"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department Name:</label>
          <input
            type="text"
            name="departmentName"
            value={department.departmentName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default DepartmentForm;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {

  return (
    <div>
        <ui>
      <h2>Departments</h2>
      <Link to="/departments">Department Directory</Link>
      
      <h2>Employees</h2>
      <Link to="/employees">Employee Directory</Link>
      </ui>l
    </div>
  );
};

export default LandingPage;
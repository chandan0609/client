import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <nav class="navbar bg-dark">
        <h1>
          <a href="index.html">
            <i class="fas fa-code"></i> DevConnector
          </a>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Developers</a>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default header;

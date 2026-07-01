import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Fnavbar({ theme, toggleTheme }) {
  return (
    <div className="navbar">
      <p>
        <Link to="/" className="link">
          Home
        </Link>
      </p>
      <p>
        <Link to="/login" className="link">
          Login
        </Link>
      </p>
      <p>
        <Link to="/signup" className="link">
          Signup
        </Link>
      </p>
      <div className="theme">
        <label htmlFor="">Dark Mode: </label>
        <input type="checkbox" onChange={toggleTheme} />
      </div>
    </div>
  );
}

export default Fnavbar;

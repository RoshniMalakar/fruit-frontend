import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
function Navbar({ cart, theme, toggleTheme }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };
  return (
    <div className="navbar">
      <p>
        <Link to="/" className="link">
          Home
        </Link>
      </p>
      <p>
        <Link to="/cart" className="link">
          <i className="fa-solid fa-cart-shopping"></i> Cart
          <sup>{cart.length}</sup>
        </Link>
      </p>
      <div className="theme">
        <label htmlFor="">Dark Mode: </label>
        <input type="checkbox" onChange={toggleTheme} />
      </div>
      <button onClick={logout} className="logout">
        Logout
      </button>
    </div>
  );
}

export default Navbar;

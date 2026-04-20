import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return (
    <nav className="navbar navbar-light bg-dark px-3 w-screen flex flex col">
      <>
        <Link to="/dashboard" className="btn btn-primary">
          Dashboard
        </Link>
        <Link to="/profile" className="btn btn-danger">
          Profile
        </Link>
      </>

      {children}
    </nav>
  );
};

export default Navbar;

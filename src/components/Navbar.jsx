import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div className="container-fluid">
          <span className="navbar-brand">Hi</span>

          <div className="d-flex gap-2">
            <Link to="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>

            <Link to="/profile" className="btn btn-danger">
              Profile
            </Link>
          </div>
          <Link to="/projects" className="btn btn-success">
            Project
          </Link>
        </div>
      </nav>

      <div>{children}</div>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  LayoutDashboard,
  User,
  FolderKanban,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import "./Navbar.scss";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        // setUser(userData);
        const response = await axios.get(`https://dummyjson.com/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* LOGO */}
        <div className="navbar__logo">
          <div>
            <h3 className="navbar__title">HI {user?.username}</h3>
          </div>
        </div>

        <div
          className={`navbar__links ${menuOpen ? "navbar__links--active" : ""}`}
        >
          <Link to="/dashboard" className="navbar__link">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link to="/profile" className="navbar__link">
            <User size={18} />
            Profile
          </Link>

          <Link to="/projects" className="navbar__link">
            <FolderKanban size={18} />
            Destinations
          </Link>

          <Button
            text={`Logout`}
            onClick={() => {
              localStorage.removeItem("isAuthenticated");
              localStorage.removeItem("token");

              toast.info("You have been logged out.");

              navigate("/");
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

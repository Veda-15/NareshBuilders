import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Link className="navbar-brand" to="/home">
          <img className="logo" src={logo} alt="NareshBuilders" />
        </Link>
        <ul className="navlist">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

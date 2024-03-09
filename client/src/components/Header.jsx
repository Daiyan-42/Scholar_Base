import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import Collections from "../Browse/Collections";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Header() {
  // State to track whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav
        className="navbar navbar-light bg-dark"
        style={{
          height: 150,
          background: "linear-gradient(to right, black, white)",
          textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://cdn-jfdlp.nitrocdn.com/OtDgzXYtTkzOtrTkzurZLWwNFMSNvJQt/assets/images/optimized/rev-86a5b3b/www.altechmind.com/wp-content/uploads/2023/02/OJS-Logo-650x650.jpg"
              alt=" image ashena "
              width="80"
              height=""
              className="d-inline-block align-text-top"
              style={{ marginLeft: 40, width: 120, marginTop: 5 }}
            />
          </a>
          <div className="text-center">
            <h1
              style={{
                fontFamily: "Pacifico, cursive",

                fontWeight: "bold",
                color: "#f39c12",
                fontSize: "4rem",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              ONLINE JOURNAL
            </h1>
          </div>

          <div className="ml-auto">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle me-5"
                style={{ width: "200px" }}
                type="button"
                onClick={toggleDropdown}
              >
                Browse
              </button>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                style={{ width: 200, marginTop: 10, textAlign: "center" }}
              >
                <li>
                  <Link className="dropdown-item" to="/browseBypublishers">
                    Publishers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/browseBycategories">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/browseByauthors">
                    Authors
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/browseBycollections">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

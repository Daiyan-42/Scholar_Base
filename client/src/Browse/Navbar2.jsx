import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "../components/Register"; // Import the Register component

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // State for managing the modal

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div style={navbarFrameStyle}>
      <nav className="navbar navbar-light bg-white" style={{ height: "80px" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center ">
            <Link to="/" className="navbar-brand"> {/* Link to the home page */}
              <img src="https://patch.com/img/cdn/users/22848633/2015/10/raw/2015105617e0d11c033.png" alt="ScholarBase Logo" width="60" height="60" className="d-inline-block align-middle mb-2" />
            </Link>
            <p className="mb-0" style={{ fontFamily: "Liberation Mono, monospace", color: "#01428c", fontSize: "24px", fontWeight: "bold", marginLeft: "8px" }}> ScholarBase</p>
          </div>

          <div className="d-flex align-items-center" style={{marginRight:"20px"}}>
            <div className="dropdown me-2">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="navbarDropdown" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen ? "true" : "false"}>
                Browse
              </button>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                style={{ width: 200, marginTop: 10, textAlign: "center", marginLeft: "-10px" }} // Adjust the margin-left here
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
            <Link to="/AdvancedSearch" className="btn btn-outline-secondary me-2">Advanced Search</Link>
            {/* Open the Register modal */}
          </div>
        </div>
      </nav>
      {/* Render the Register component */}
      <Register isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
    </div>
  );
}

export default Navbar;

const navbarFrameStyle = {
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  marginBottom: "4px", // Adjust as needed
};


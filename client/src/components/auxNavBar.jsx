import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register"; // Import the Register component
import Login from "./Login"; // Import the Login component

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 
  const [searchText, setSearchText] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", searchText);
  };

  return (
    <div style={navbarFrameStyle}>
      <nav className="navbar navbar-light bg-white" style={{ height: "80px" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="navbar-brand">
              <img src="https://patch.com/img/cdn/users/22848633/2015/10/raw/2015105617e0d11c033.png" alt="ScholarBase Logo" width="60" height="60" className="d-inline-block align-middle mb-2" />
            </span>
            <p className="mb-0 me-4" style={{ fontFamily: "Liberation Mono, monospace", color: "#01428c", fontSize: "24px", fontWeight: "bold", marginLeft: "8px" }}> ScholarBase</p>
            <form
              className="d-flex align-items-left me-2"
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchChange}
              />
              <button type="submit" className="btn btn-outline-secondary">
                Search
              </button>
            </form>
          </div>
          <div className="d-flex align-items-center">
            <Link to="/AdvancedSearch" className="btn btn-outline-secondary me-2">Advanced Search</Link>
            <div className="dropdown me-2">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="navbarDropdown" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen ? "true" : "false"}>
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
              </ul>
            </div>
            {/* Open the Register modal */}
            <button className="btn btn-outline-primary me-2" onClick={openRegisterModal}>Register</button>
            {/* Open the Login modal */}
            <button className="btn btn-outline-success" onClick={openLoginModal}>Log in</button>
          </div>
        </div>
      </nav>
      {/* Render the Register modal */}
      <Register isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
      {/* Render the Login modal */}
      {isLoginModalOpen && <Login onClose={closeLoginModal} />}
    </div>
  );
}

export default Navbar;

const navbarFrameStyle = {
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  marginBottom: "4px",
};

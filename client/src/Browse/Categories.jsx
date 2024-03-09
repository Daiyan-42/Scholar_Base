import React, { useState } from "react";
import Works from "./Works";
import CategoryList from "../components/CategoryList";
import Navbar from "../components/Navbar";

function Categories() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <Navbar />
      <CategoryList />
    </div>
  );
}

export default Categories;

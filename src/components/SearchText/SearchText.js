import React, { useState } from "react";
import "./search.css";

export const SearchText = ({ searchText }) => {
  const [selectedOption, setSelectedOption] = useState(""); // State for the selected dropdown option

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Text on the left */}
        <div style={{ flex: 1, padding: "10px", color: "#f78431ff", fontWeight: '500px' }}>
          All Businesses
        </div>
        {/* Dropdown on the right */}
        <div style={{ padding: "10px", textAlign: "right" }}>
          <select value={selectedOption} onChange={handleDropdownChange}>
            <option value="option1">Registered</option>
            <option value="option2">Accredited</option>
            <option value="option3">Certified</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchText;

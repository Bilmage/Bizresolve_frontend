import React from "react";
import { Select, MenuItem } from "@mui/material";

const SearchCounty = () => {
  return (
    <div className="container">
    <div className="search-menu__dropdown">
      <label htmlFor="county" className="fw-bold">
        Select County
      </label>
      <Select id="county" fullWidth>
        <MenuItem value="Nairobi">Nairobi</MenuItem>
        <MenuItem value="Mombasa">Mombasa</MenuItem>
        {/* Add more counties here */}
      </Select>
    </div>
    </div>
  );
};

export default SearchCounty;

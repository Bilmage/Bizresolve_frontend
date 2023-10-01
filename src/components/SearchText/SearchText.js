import React from "react";
import "./search.css";

export const SearchText = ({ searchText }) => {
  return (
    <div className="container">
      <div className="search-text">
        <p className="text-wrapper">{searchText}</p>
      </div>
    </div>
  );
};

export default SearchText;

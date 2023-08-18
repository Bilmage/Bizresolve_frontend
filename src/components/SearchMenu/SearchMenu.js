import React from "react";
import "./search.css";


export const SearchMenu = ({ className }) => {
  return (
    <div className="container">
      <div className={`search-menu ${className}`}>
        <div id="searchUsers" className="instant-search">
          <div className="instant-search__input-container">
            <input
              className="instant-search__input"
              type="text"
              spellCheck="false"
              placeholder="Search for a business, charity, category..."
            />
            <i className="material-icons instant-search__icon">search</i>           
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchMenu;

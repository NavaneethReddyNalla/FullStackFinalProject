import "./SearchBar.css";
import React from "react";

function SearchBar({ setQuery }) {
  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="form-control w-50 mx-auto mb-5"
        placeholder="Search by username or full name..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;

import React, { useState } from "react";
import "./SearchBar.css"; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search shows or movies..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;


import React, { useState } from "react";

const SearchBar = ({ searchLocation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search-text"
        id="search-text"
        placeholder="Search location"
        onChange={(e) => {
            console.log('e target val: ', e.target.value)
            setSearchText(e.target.value)
        }}
        onKeyDown={(e) => e.key === "Enter" && searchLocation(searchText)}
      />
      <button type="button" className="color-primary" onClick={() => searchLocation(searchText)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

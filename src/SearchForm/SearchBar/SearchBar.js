import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="searchBar">
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" className="search" 
        value={props.SearchTerm}
        onChange={(e) => props.updateSearchTerm(e.target.value)} required/>
    </div>
  );
}

export default SearchBar;

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../styles/navbar.css"


const Search = ({ setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
const handleSubmit = (e) => {
    e.preventDefault()
}

return (
  <>
    <form id="quick-search" onSubmit={handleSubmit}>
      <div id="quick-search-container">
        <input
          id="quick-search-input"
          name="query"
          autoComplete="off"
          type="search"
          placeholder="Quick search" 
          onChange={handleChange}
        />
      </div>
    </form>
  </>
);
};

export default Search;

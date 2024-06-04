import React, { useState } from "react";
import "../css/base.css";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement the search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="grid-container">
      <div className="home-header">chatCode &lt;/&gt;</div>
      <div className="left">
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="middle">Column</div>
      <div className="right">Column</div>
      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const SearchType = ({ showDetails, handleCardBack }) => {
  return (
    <div className="search-type">
      <div
        className="th-btn"
        style={{ cursor: "pointer" }}
        onClick={showDetails ? handleCardBack : ""}
      >
        {showDetails ? "← Return to Overview" : "Explore opportunities →"}
      </div>
    </div>
  );
};

export default SearchType;

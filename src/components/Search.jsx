import React from "react";

function Search(props) {
  return (
    <div>
      <div className="container">
        <div className="search-content">
          <input
            type="text"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Search Movie..."
          />
        </div>
      </div>
    </div>
  );
}

export default Search;

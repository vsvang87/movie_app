import React from "react";

function Header(props) {
  return (
    <div>
      <div className="container">
        <div className="header-content">
          <h1>{props.movies}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;

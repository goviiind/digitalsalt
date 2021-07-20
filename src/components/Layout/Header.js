import React from "react";
import { Link } from "react-router-dom";
import "./LayoutStyles.css";

const Header = () => {
  return (
    <div className="header">
      <h2>
        {" "}
        <Link to="/">Header</Link>{" "}
      </h2>
      <ul className="navbar">
        <li>
          {" "}
          <Link to="/">First Component</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/second-component">Second Component</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;

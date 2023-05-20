import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <h1 className="Header-Title">Nathan Dinh</h1>
      <nav className="Header-Navigation">
        <a>Git</a>
        <a>LinkedIn</a>
      </nav>
    </header>
  );
};

export default Header;
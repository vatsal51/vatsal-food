import React from "react";
import brand from "../react-svgrepo-com.svg";
import search from '../search-svgrepo-com.svg'
const Header = () => {
  return (
<div className="container">
    <header>
      <div className="logo">
        <img src={brand}></img>
      </div>
      <div className="search-bar"><input type="text" className="search-input"></input><img src={search}></img> </div>
    </header>
      </div>
  );
};

export default Header;

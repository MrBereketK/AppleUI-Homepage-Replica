import React, { useState } from "react";
import logo from "./assets/images/icons/logo.png";
import searchIcon from "./assets/images/icons/search-icon.png";
import cartIcon from "./assets/images/icons/cart.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-container">
        <ul id="header-list" className={isMenuOpen ? "menu-open" : ""}>
          <li className="logo-item">
            <img src={logo} alt="Apple logo" />
          </li>
          <li>Mac</li>
          <li>iphone</li>
          <li>ipad</li>
          <li>watch</li>
          <li>tv</li>
          <li>Music</li>
          <li>Support</li>
          <li className="icon-item">
            <img src={searchIcon} alt="Search" />
          </li>
          <li className="icon-item">
            <img src={cartIcon} alt="Shopping cart" />
          </li>
        </ul>
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}
          ></span>
          <span
            className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}
          ></span>
          <span
            className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default Header;

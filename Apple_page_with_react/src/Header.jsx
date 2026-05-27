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
        {/* Mobile Top Bar - always visible on mobile */}
        <div className="nav-mobile-bar">
          <a href="#" className="mobile-logo-link">
            <img src={logo} alt="Apple logo" className="mobile-logo-img" />
          </a>
          <div className="nav-mobile-controls">
            <a href="#" className="mobile-cart-link">
              <img src={cartIcon} alt="Shopping cart" className="mobile-cart-img" />
            </a>
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
        </div>

        {/* Navigation list */}
        <ul id="header-list" className={isMenuOpen ? "menu-open" : ""}>
          {/* Logo only on desktop */}
          <li className="logo-item desktop-only">
            <img src={logo} alt="Apple logo" />
          </li>
          <li>Mac</li>
          <li>iphone</li>
          <li>ipad</li>
          <li>watch</li>
          <li>tv</li>
          <li>Music</li>
          <li>Support</li>
          <li className="icon-item desktop-only">
            <img src={searchIcon} alt="Search" />
          </li>
          <li className="icon-item desktop-only">
            <img src={cartIcon} alt="Shopping cart" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

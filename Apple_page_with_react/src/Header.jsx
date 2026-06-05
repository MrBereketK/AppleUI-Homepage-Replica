import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "./assets/images/icons/logo.png";
import searchIcon from "./assets/images/icons/search-icon.png";
import cartIcon from "./assets/images/icons/cart.png";

import "./Header.css";

/**
 * Header — demonstrates key React Router concepts:
 *
 * - NavLink (instead of Link): automatically adds an "active" class
 *   to the currently matched route's link.
 * - useLocation: detects route changes to auto-close the mobile menu.
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Auto-close mobile menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-container">
        {/* Mobile Top Bar */}
        <div className="nav-mobile-bar">
          <NavLink to="/" className="mobile-logo-link">
            <img src={logo} alt="Apple logo" className="mobile-logo-img" />
          </NavLink>

          <div className="nav-mobile-controls">
            <NavLink to="/cart" className="mobile-cart-link">
              <img
                src={cartIcon}
                alt="Shopping cart"
                className="mobile-cart-img"
              />
            </NavLink>

            <button
              className="hamburger-menu"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={
                  isMenuOpen ? "hamburger-line open" : "hamburger-line"
                }
              ></span>

              <span
                className={
                  isMenuOpen ? "hamburger-line open" : "hamburger-line"
                }
              ></span>

              <span
                className={
                  isMenuOpen ? "hamburger-line open" : "hamburger-line"
                }
              ></span>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul id="header-list" className={isMenuOpen ? "menu-open" : ""}>
          <li className="logo-item desktop-only">
            <NavLink to="/">
              <img src={logo} alt="Apple logo" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/macbook-pro">Mac</NavLink>
          </li>

          <li>
            <NavLink to="/iphone-11-pro">iPhone 11 Pro</NavLink>
          </li>

          <li>
            <NavLink to="/iphone-11">iPhone 11</NavLink>
          </li>

          <li>
            <NavLink to="/watch">Watch</NavLink>
          </li>

          <li>
            <NavLink to="/tv">TV</NavLink>
          </li>

          <li>
            <NavLink to="/music">Music</NavLink>
          </li>

          <li>
            <NavLink to="/support">Support</NavLink>
          </li>

          <li className="icon-item desktop-only">
            <NavLink to="/search">
              <img src={searchIcon} alt="Search" />
            </NavLink>
          </li>

          <li className="icon-item desktop-only">
            <NavLink to="/cart">
              <img src={cartIcon} alt="Shopping cart" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

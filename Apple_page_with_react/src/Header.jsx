import React from 'react'
import logo from './assets/images/icons/logo.png'
import searchIcon from './assets/images/icons/search-icon.png'
import cartIcon from './assets/images/icons/cart.png'
import './Header.css'

function Header() {
  return ( <nav className="navigation-bar">
                    <ul id="header-list">
                        <li><img src={logo} alt=""/></li>
                        <li>Mac</li>
                        <li>iphone</li>
                        <li>ipad</li>
                        <li>watch</li>
                        <li>tv</li>
                        <li>Music</li>
                        <li>Support</li>
                        <li><img src={searchIcon} alt=""/></li>
                        <li><img src={cartIcon} alt=""/></li>
                    </ul>
                </nav> 
                );
}

export default Header;
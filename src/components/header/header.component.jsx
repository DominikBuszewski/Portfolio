import React from "react";
import "./header.styles.scss";

import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";

const Header = ({ menuClickHandler }) => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">
        <a href="/">MyPortfolio</a>
      </div>
      <div className="spacer"></div>
      <div></div>
      <div className="hamburger-menu-container">
        <ul className="navbar-items">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Header;

import React, { useState } from "react";
import logo from "../../assets/R4 80.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  function closeMenu() {
    if (active === true) {
      setActive(false);
    } else {
      return;
    }
  }

  function toggleActive() {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <header>
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={logo} alt="R4 Resources Logo" />
        </Link>
        <nav>
          <ul
            className={active === true ? "nav-links nav-active" : "nav-links"}
          >
            <li onClick={closeMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/experience">Experience</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div onClick={toggleActive} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

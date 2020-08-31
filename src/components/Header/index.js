import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  function toggleClass() {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          R4 <span>Resources</span>
        </Link>
      </h1>

      <nav>
        <ul className={active === true ? "nav-links nav-active" : "nav-links"}>
          <li onClick={toggleClass}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleClass}>
            <Link to="/experience">Experience</Link>
          </li>
          <li onClick={toggleClass}>
            <Link to="/customers">Customers</Link>
          </li>
          <li onClick={toggleClass}>
            <Link to="/consultants">Consultants</Link>
          </li>
          <li onClick={toggleClass}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div onClick={toggleClass} className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;

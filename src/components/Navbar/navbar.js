/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navabr.css";
import { Link } from "react-router-dom";

const HeaderList = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Contact Us",
    url: "/contact_us",
  },
];

const Navbar = ({ setIsActive, isActive }) => {
  const [toggleScroll, setToggleScroll] = useState(false);
  const [scrollCount, setScrollCount] = useState();
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > scrollCount) {
      setIsActive(false);
      setToggleScroll(true);
    } else if (scrolled <= scrollCount) {
      setToggleScroll(false);
    }
    setScrollCount(scrolled);
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <header className={`header${toggleScroll ? " nav-open" : ""}`}>
        <nav className="navbar">
          <h1>
            <Link to="/" className="brand">
              Brand
            </Link>
          </h1>
          <ul className="desktop-menu">
            {HeaderList?.map((item, index) => (
              <li key={index} className="desktop-menu-item">
                <Link to={item?.url} className="desktop-menu-link">
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`ham${isActive ? " active" : ""}`}>
            <div
              className={`hamburger${isActive ? " toggle" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </nav>
        <ul className={`menu${isActive ? " active" : ""}`} id="menu">
          {HeaderList?.map((item, index) => (
            <li key={index} className="menu-item">
              <Link to={item?.url} className="menu-link">
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;

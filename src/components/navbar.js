import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/navbar.css";
function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="nav-bar">
        <AiOutlineMenu
          onClick={handleClick}
          className="menu-link"
          size="40px"
        />
        <Link to="/" className="homepagelink">
          San Antonio's Web Design
        </Link>
        {/* <Link to="" className="loginlink">
          Give us a call
        </Link> */}
      </nav>
      <div className={click ? "side-menu-container" : "side-menu-closed"}>
        <h1 onClick={handleClick} className="close-btn">
          X
        </h1>
        <h1 className="menu-h1">Menu</h1>
        <Link to="/" onClick={closeMobileMenu} className="menu-link-1">
          Home
        </Link>
        <Link to="/Profile" className="menu-link-1 link-mid">
          About
        </Link>
        <Link to="/" className="menu-link-1 link-mid">
          Blog
        </Link>
        <Link className="menu-link-1">Contact</Link>
      </div>
    </div>
  );
}

export default Nav;

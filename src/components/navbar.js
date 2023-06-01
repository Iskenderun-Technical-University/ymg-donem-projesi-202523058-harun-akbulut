import { menuItems } from "../pages/menuItems";
import MenuItems from "./MenuItems";
import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../images/logo.svg'

const Navbar = () => {
  const [active, setActive] = useState("menus");
  const navToggle = () => {
    active === "menus" ? setActive("menus nav_active") : setActive("menus");
  };

  return (
    <nav>
      <div className="baseDiv" style={{ marginTop: 30 }}>
        <div className="logoDiv col-lg-6">
          <Link to="/">
          <img src={logo} alt="" />
          </Link>
          <div className="navBar" style={{ marginTop: -5 }}>
            <ul className={active}>
              {" "}
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div onClick={navToggle} className="nav_toggler col-lg-6">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;

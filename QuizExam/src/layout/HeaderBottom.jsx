import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import "./headerbottom.css";

const HeaderBottom = () => {
  return (
    <div className="navbar">
      <header>
        <h1>
          COLO<span className="span">SHOP</span>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Shop"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Promotion"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Promotion
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Pages"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Blog"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Contact"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Add"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Add
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="icon">
          <IoMdSearch />
          <FaUserAlt />
          <SlBasket />
          <GiHamburgerMenu className="menu" />
        </div>
      </header>
    </div>
  );
};

export default HeaderBottom;

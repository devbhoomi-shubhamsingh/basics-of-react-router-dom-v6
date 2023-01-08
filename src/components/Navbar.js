import React from "react";
import { NavLink } from "react-router-dom";

// Note: classname and style (styling) doesn't work with Link (React Router DOM Link)
// that's why we need to use NavLink (React Router DOM NavLink).

// To Activate Link, we have two ways
// ***********************************
// First way by using .active class = VERY SIMPLE WAY TO MAKE A NAVLINK ACTIVATE
// =============================================================================
// .active class is by-default provided by React Router DOM's team and we need to just use it and
// give styling as per our choice.

// Second way - We need to use this code with every NavLink option = LENGTHY WAY
// ==============================================================================
// style={({ isActive }) => {
//   return { color: isActive ? "red" : "black" };
// }}

const Navbar = () => {
  return (
    <ul className="navbar">
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutUs">About Us</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact Us</Link>
      </li>
      <li>
        <Link to="/user/shubhamsingh">User</Link>
      </li> */}
      <li>
        <NavLink
          to="/"
          // style={{ background: "darkseagreen", padding: "6px",color:"blue" }}
          className="navbarLink"
          // style={({ isActive }) => {
          //   return { color: isActive ? "red" : "black" };
          // }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className="navbarLink"
          // style={({ isActive }) => {
          //   return { color: isActive ? "red" : "black" };
          // }}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className="navbarLink"
          // style={({ isActive }) => {
          //   return { color: isActive ? "red" : "black" };
          // }}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/user/shubhamsingh"
          className="navbarLink"
          // style={({ isActive }) => {
          //   return { color: isActive ? "red" : "black" };
          // }}
        >
          User
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/filter"
          className="navbarLink"
          // style={({ isActive }) => {
          //   return { color: isActive ? "red" : "black" };
          // }}
        >
          Filter
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;

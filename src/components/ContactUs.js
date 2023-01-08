import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1>This is my Contact Us Page</h1>
      <h3>
        Shubham Singh - 27 Years - 9041934079 - Dehradun, 248001, Uttarakhand,
        India
      </h3>
      <div>
        <h2>Our Other Services</h2>
        <ul className="contactus-navbar">
          <li>
            <Link to="communities">Communities</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default ContactUs;

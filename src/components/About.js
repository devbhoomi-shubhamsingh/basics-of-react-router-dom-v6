import React from "react";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log("useLocation Hook Data:: ", location);

  const { state } = location;
  console.log("Location State Data: ", state);

  /* OUTPUT */
  /*
  {
    "pathname": "/aboutUs",
    "search": "",
    "hash": "",
    "state": {
        "name": "Shubham Singh",
        "age": 27,
        "mobileNo": "+91-9041934079",
        "emailAddress": "devbhoomi.shubhamsingh@gmail.com",
        "address": "246, Purvi Patel Nagar, Dehradun 248001, Uttarakhand"
    },
    "key": "7fpu5h6p"
}
  */

  return (
    <div>
      <h1>This is the About Us Page of our Application</h1>
      <Link to={"/"}>
        <button>Go to Home </button>
      </Link>
    </div>
  );
};

export default About;

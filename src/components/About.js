import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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

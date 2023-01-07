import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the Home Page of our Application</h1>

      <Link to={"/aboutUs"}>
        <button>Go to About us Page </button>
      </Link>
    </div>
  );
};

export default Home;

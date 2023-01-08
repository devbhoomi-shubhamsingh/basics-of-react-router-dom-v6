import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToFilterPage = () => navigate("/filter");

  return (
    <div>
      <h1>This is the Home Page of our Application</h1>
      <Link to={"/aboutUs"}>Go to About us Page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/aboutUs")}>
        Go to About Us Page
      </button>{" "}
      &nbsp;&nbsp;
      <button onClick={redirectToFilterPage}>Go to Filter Page</button>
    </div>
  );
};

export default Home;

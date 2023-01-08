import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log("useLocation Hook Data:: ", location);
  /* OUTPUT =
  {
    "pathname": "/",
    "search": "",
    "hash": "",
    "state": null,
    "key": "default"
}
  */

  const [myProfile] = useState({
    name: "Shubham Singh",
    age: 27,
    mobileNo: "+91-9041934079",
    emailAddress: "devbhoomi.shubhamsingh@gmail.com",
    address: "246, Purvi Patel Nagar, Dehradun 248001, Uttarakhand",
  });

  const redirectToFilterPage = () => navigate("/filter");

  return (
    <div>
      <h1>This is the Home Page of our Application</h1>
      <Link to={"/aboutUs"} state={myProfile}>
        Go to About us Page
      </Link>
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

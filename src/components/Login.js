import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome to Shubham Singh's Website</h1>
      <label>Email Address: </label>
      <input type="email" placeholder="Enter Email Address" />
      <br />
      <br />
      <label>Password: </label>
      <input type="email" placeholder="Enter Password" />
      <br />
      <br />
      <button type="submit" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;

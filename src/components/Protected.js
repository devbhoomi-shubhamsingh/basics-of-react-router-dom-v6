import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    //Checking User is Logged In or Not.
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });

  const { Component } = props;
  return <div>{<Component />}</div>;
};

export default Protected;

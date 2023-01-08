import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [myAge, setMyAge] = useState("");
  const [myCity, setMyCity] = useState("");

  // http://localhost:3000/filter?age=27&city=Dehradun
  //   console.log(searchParams.get("age")); // 27
  //   console.log(searchParams.get("city")); // Dehradun

  const age = searchParams.get("age");
  const city = searchParams.get("city");

  const setQueryParams = (e) => {
    e.preventDefault();
    setSearchParams({ age: myAge, city: myCity });
    setMyAge("");
    setMyCity("");
  };
  return (
    <>
      <h1>Filter Page</h1>

      <div>
        <form>
          <label>Age: </label>
          <input
            type="number"
            value={myAge}
            onChange={(e) => setMyAge(e.target.value)}
          />
          <br />
          <label>City: </label>
          <input
            type="text"
            value={myCity}
            onChange={(e) => setMyCity(e.target.value)}
          />
          <br />
          <button type="submit" onClick={setQueryParams}>
            Add Query Params on URL
          </button>
        </form>
      </div>
      <br />
      <h2>
        The value of Age = {age || "N.A"} and the value of City ={" "}
        {city || "N.A"}
      </h2>
    </>
  );
};

export default Filter;

import React, { useState } from "react";
import "./five.css";
import Box from "./Box";

const Five = () => {
  const [cubes, setCubes] = useState([]);

  return (
    <>
      <div style={{ height: "50px", textAlign: "center", marginTop: "50px" }}>
        <button onClick={() => setCubes((val) => [...val, "redBlock"])}>
          ADD RED
        </button>
        <button onClick={() => setCubes((val) => [...val, "blueBlock"])}>
          ADD BLUE
        </button>
        <button onClick={() => setCubes([])}>RESET</button>
      </div>
      <div
        style={{
          height: "400px",
          textAlign: "center",
          marginTop: "50px",
          backgroundColor: "lightblue",
        }}
      >
        {console.log(cubes)}
        {cubes.map((cube, i) => (
          <Box key={i} col={cube} />
        ))}
      </div>
    </>
  );
};

export default Five;

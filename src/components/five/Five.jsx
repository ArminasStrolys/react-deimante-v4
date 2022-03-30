import React, { useState } from "react";
import './five.css'

const Five = () => {
  const [cubes, setCubes] = useState([]);

  return (
    <>
      <div style={{ height: "50px", textAlign: "center", marginTop: "50px" }}>
        <button onClick={()=> setCubes((prev) => [...prev, <div className="redBlock"></div>])}>ADD RED</button>
        <button onClick={()=> setCubes((nex) => [...nex, <div className="blueBlock"></div>])}>ADD BLUE</button>
        <button onClick={()=> [setCubes('')]}>RESET</button>
      </div>
      <div
        style={{
          height: "400px",
          textAlign: "center",
          marginTop: "50px",
          backgroundColor: "lightblue",
        }}
      >
      {[cubes]}
      </div>
    </>
  );
};

export default Five;

import React, { useState } from "react";
import "./cubeMaker.css";
import MiniCube from "./miniCube";

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Cubemaker = () => {
  const [clicks, setClicks] = useState([]);

  return (
    <div
      style={{
        height: "300px",
        backgroundColor: "mistyRose",
        textAlign: "center",
      }}
    >
      <button
        className="cuber"
        style={{
          borderRadius: "50%",
          marginTop: "20px",
          borderStyle: "none",
          padding: "10px",
        }}
        onClick={() =>
          setClicks((prev) => [...prev, rndNum(0,100)])
          }
      >
      {console.log(clicks)}
        ADD
      </button>
      <div>{clicks.map((e, i)=><MiniCube 
        key={i}
        cube={e}
      />)}</div>
      {console.log(clicks)}
    </div>
  );
};

export default Cubemaker;
import React, { useState } from "react";
import "./cubeMaker.css";

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Cubemaker = () => {
  const [cube, setCube] = useState("");
  const rnder = rndNum(50, 100);

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
          setCube( cube +
            console.log(<div style={{ width: `${rnder}px` }} className="mini"></div>)
          )
        }
      >
        ADD
      </button>
      <div>{cube}</div>
    </div>
  );
};

export default Cubemaker;

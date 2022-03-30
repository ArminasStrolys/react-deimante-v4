import React, { useState } from "react";
import "./cubeMaker.css";

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
          setClicks((arr) => [
            ...arr,
            <div key={arr} className="mini">
              <p className="mini2">{rndNum(0, 100)}</p>
            </div>,
          ])
        }
      >
        ADD
      </button>
      <div>{clicks}</div>
      {console.log(clicks)}
    </div>
  );
};

export default Cubemaker;

// setClicks(cuber.push('test')
// <div className="mini">TEST</div>

import React from "react";
import "./shapesAndNumbers.css";
import { useState } from "react";

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Shapesandnumbers = () => {
  const [shapes, setShapes] = useState(false);
  const [numb, setNumb] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "lightsteelblue",
        width: "100%",
        height: "400px",
        marginTop: "50px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <button
          style={{ textAlign: "center", margin: "20px", padding: "20px" }}
          onClick={() => setShapes(!shapes)}
        >
          <b>CHANGE ME</b>
        </button>

        <button
          style={{ textAlign: "center", padding: "20px" }}
          onClick={() => setNumb(!numb)}
        >
          <b>COUNT ME</b>
        </button>
      </div>
      {shapes ? (
        <div
          style={{
            margin: "auto",
            marginTop: "100px",
            width: "150px",
            height: "150px",
            backgroundColor: "slateBlue",
            textAlign: "center",
            position: "relative",
          }}
        >
          {numb ? (
            <p className="cent">{rndNum(5, 25)}</p>
          ) : (
            <p className="cent">{rndNum(5, 25)}</p>
          )}
        </div>
      ) : (
        <div
          style={{
            margin: "auto",
            marginTop: "100px",
            width: "150px",
            height: "150px",
            backgroundColor: "indianRed",
            textAlign: "center",
            position: "relative",
            borderRadius: "100%",
          }}
        >
          {numb ? (
            <p className="cent">{rndNum(5, 25)}</p>
          ) : (
            <p className="cent">{rndNum(5, 25)}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Shapesandnumbers;

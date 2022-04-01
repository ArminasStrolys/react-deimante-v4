import React from "react";
import "./shapesAndNumbers.css";
import { useState } from "react";
import Shapez from "./Shapez";

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Shapesandnumbers = () => {
  const [shapes, setShapes] = useState(0);
  // const [numb, setNumb] = useState(0);

  const changeForm = () => {
    shapes === 0 ? setShapes(100) : setShapes(0);
  };

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
          style={{ textAlign: "center", padding: "20px", margin: "20px" }}
          onClick={changeForm}
        >
          <b>CHANGE ME</b>
        </button>
      

        <button
          style={{ textAlign: "center", padding: "20px" }}
          onClick={() => setShapes(!shapes)}
        >
          <b>COUNT ME</b>
        </button>
      </div>
      {<Shapez shapeMe={shapes}/>}
      
    </div>
  );
};

export default Shapesandnumbers;

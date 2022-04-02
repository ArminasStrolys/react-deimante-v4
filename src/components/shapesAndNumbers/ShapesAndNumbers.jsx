import React from "react";
import "./shapesAndNumbers.css";
import { useState } from "react";
import Shapez from "./Shapez";

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Shapesandnumbers = () => {
  const [shapes, setShapes] = useState({
    form: 0,
    col: 'lightSalmon'
  });
  const [numb, setNumb] = useState(0);

  const changeForm = () => {
   if (shapes.form === 100) {
    setShapes((element) => ({...element, col:'lightSalmon'}))
    setShapes((element) => ({...element, form: 0}))
   } else {
    setShapes((element) => ({...element, col:'paleGreen'}))
    setShapes((element) => ({...element, form: 100}))
   }
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
          onClick={() => setNumb(rndNum(5,25))}
        >
          <b>COUNT ME</b>
        </button>
      </div>
      {<Shapez shapeMe={shapes.form} colorMe={shapes.col} countMe={numb}/>}
      
    </div>
  );
};

export default Shapesandnumbers;

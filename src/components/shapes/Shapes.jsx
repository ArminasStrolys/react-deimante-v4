import React from "react";
import { useState } from "react";

const Shapes = () => {
  let [shapeForm, setShapeForm] = useState(false);

  return (
    <>
      <div style={{ textAlign: "center", fontSize: "40px", marginTop: "30px" }}>
        SHAPES
      </div>
      <div style={{ textAlign: "center", fontSize: "40px", marginTop: "80px" }}>
        <button
          style={{
            padding: "30px",
            backgroundColor: "lightgrey",
            borderRadius: "20px",
          }}
          onClick={() => setShapeForm(!shapeForm)}
        >
          PRESS ME
        </button>
        {shapeForm && (
          <div
            style={{
              margin: "auto",
              marginTop: "100px",
              width: "100px",
              height: "100px",
              backgroundColor: "lightgreen",
              borderRadius: `100%`,
            }}
          ></div>
        )}
        {!shapeForm && (
          <div
            style={{
              margin: "auto",
              marginTop: "100px",
              width: "100px",
              height: "100px",
              backgroundColor: "lightcoral",
              borderRadius: `0%`,
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Shapes;

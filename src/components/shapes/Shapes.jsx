import React from "react";
import { useState } from "react";
import ShapeObject from "./ShapeObject";

const Shapes = () => {
  let [shapeForm, setShapeForm] = useState({
    num: 0,
    col: "blue",
  });

  const handleNums = () => {
    if (shapeForm.num === 100) {
      setShapeForm((shape) => ({ ...shape, num: 0 }));
      setShapeForm((color) => ({ ...color, col: "blue" }));
    } else {
      setShapeForm((shape) => ({ ...shape, num: 100 }));
      setShapeForm((color) => ({ ...color, col: "red" }));
    }
  };

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
          onClick={handleNums}
        >
          PRESS ME
        </button>
        <ShapeObject num={shapeForm.num} col={shapeForm.col} />
      </div>
    </>
  );
};

export default Shapes;

import React from "react";
import { useState } from "react";

const Counter = () => {
  const [addMe, setAddMe] = useState(0);

  return (
    <>
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <button onClick={() => setAddMe(addMe + 1)}>ADD + 1</button>
        <button onClick={() => setAddMe(addMe - 3)}>SUB - 3</button>
      </div>
      <div style={{ margin: "50px 0", textAlign: "center" }}>
        <p style={{ backgroundColor: "Tomato", width: "10%", margin: "auto" }}>
          {addMe}
        </p>
      </div>
    </>
  );
};

export default Counter;

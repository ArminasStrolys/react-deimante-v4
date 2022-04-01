import React from "react";

const Shapez = (props) => {
  return (
    <div style=
    {{
      margin: "auto",
      marginTop: "100px",
      width: "150px",
      height: "150px",
      backgroundColor: "indianRed",
      textAlign: "center",
      position: "relative",
      borderRadius: `${props.shapeMe}%`,
      transition: '0.2s',
    }}>
    </div>
  );
};

export default Shapez;

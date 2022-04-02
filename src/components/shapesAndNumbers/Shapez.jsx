import React from "react";

const Shapez = (props) => {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "100px",
        width: "150px",
        height: "150px",
        backgroundColor: `${props.colorMe}`,
        textAlign: "center",
        position: "relative",
        borderRadius: `${props.shapeMe}%`,
        transition: "0.2s",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: '100px'
        }}
      >
        {props.countMe}
      </div>
    </div>
  );
};

export default Shapez;

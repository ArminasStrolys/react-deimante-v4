import React from 'react';

const Shapeobject = (props) => {
    return (
        <div
        style={{
          margin: "auto",
          marginTop: "100px",
          width: "100px",
          height: "100px",
          backgroundColor: `${props.col}`,
          borderRadius: `${props.num}%`,
          transition: '0.2s',
        }}
      ></div>
    );
}

export default Shapeobject;

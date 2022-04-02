import React from 'react';
import './cubeMaker.css';

function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const Minicube = (props) => {
    return (
        <div className="mini">
        <p className="mini2">{props.cube}</p>
      </div>
    );
}

export default Minicube;

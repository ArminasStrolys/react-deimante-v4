import React from 'react';
import './CubeMaker.css';

function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const Minicube = () => {
    return (
        <div className="mini">
        <p className="mini2">{rndNum(0, 100)}</p>
      </div>
    );
}

export default Minicube;

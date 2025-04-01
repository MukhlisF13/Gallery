import React from 'react';
import './banner.css';


const Banner = ({ text }) => {
  return (
    <div className="banner">
      <h2>{text}</h2>
    </div>
  );
};

export default Banner;

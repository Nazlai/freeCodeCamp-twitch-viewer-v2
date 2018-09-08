import React from 'react';
import './index.css';


const Banner = (props) => {
  return (
    <header className="banner">
      <h1 className="title">{props.children}</h1>
    </header>
  );
};

export default Banner;


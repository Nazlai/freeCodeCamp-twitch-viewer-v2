import React from 'react';
import './index.css'

const Button = function({children, onClick, className, type}){
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
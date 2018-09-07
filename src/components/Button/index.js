import React from 'react';
import styles from './index.scss'

const Button = function({children, onClick, className, type}){
  return (
    <button
      onClick={onClick}
      className={styles[className]}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
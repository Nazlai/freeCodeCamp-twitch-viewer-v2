import React from 'react';
import styles from './index.scss';


const Banner = (props) => {
  return (
    <header className={styles.banner}>
      <h1 className={styles.title}>{props.children}</h1>
    </header>
  );
};

export default Banner;


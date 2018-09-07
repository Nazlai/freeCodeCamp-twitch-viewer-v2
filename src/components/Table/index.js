import React from 'react';
import Card from '../Card/index';
import styles from './index.scss';

const Table = function(props){
  return (
    <div className={styles.table}>
      {
        props.list.filter(check(props.status)).map((item) => {
          return <Card key={item._id} item={item} handleRemove={props.handleRemove}/>
        })
      }
    </div>
  );
}

function check(term){
  if (term === 'stream'){
    return function(target){
      return target.hasOwnProperty(term);
    };
  } else {
    return function(target){
      return !(target.stream) === !term
    }
  }
}

export default Table;
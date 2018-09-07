import React, {Component} from 'react';
import Button from '../Button/index';
import styles from './index.scss';

class Card extends Component{
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(){
    this.props.handleRemove(this.props.item._id)
  }
  render(){
    const {item} = this.props;
    return (
      <div className={styles.card}>
        <a
          className={styles.card__link} 
          href={item.url}
          target="_blank"
        >
            <img 
              src={item.logo} 
              alt={`logo of ${item.name}`}
              className={styles.card__img}
            />
            <h2 className={item.stream? styles["card__name--online"] : styles["card__name--offline"]}>
              {item.display_name}
            </h2>
          </a>
          <section className={styles.card__info}>
            <p>{item.game}</p>
            <p>{item.status}</p>
          </section>
        <Button 
          onClick={this.handleRemove}
          className={item.stream? "btn--card-online": "btn--card-offline"}
          type="button"
        >
          remove
        </Button>
      </div>
    );
  }
}

export default Card;
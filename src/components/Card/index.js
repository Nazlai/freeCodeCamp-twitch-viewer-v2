import React, {Component} from 'react';
import Button from '../Button/index';
import './index.css';

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
      <div className="card">
        <a
          className="card__link" 
          href={item.url}
          target="_blank"
        >
            <img 
              src={item.logo} 
              alt={`logo of ${item.name}`}
              className="card__img"
            />
            <h2 className={item.stream? "card__name--online": "card__name--offline"}>
              {item.display_name}
            </h2>
          </a>
          <section className="card__info">
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
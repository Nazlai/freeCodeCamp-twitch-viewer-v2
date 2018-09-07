import React, {Component} from 'react';
import Button from '../Button/index';
import styles from './index.scss';

class Form extends Component{
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
  }

  handleSearch(event){
    event.preventDefault();
    this.props.handleSearch(event.target.value);
  }

  fetchSearch(event){
    event.preventDefault();
    const ifValueExists = this.props.list.filter((obj) => obj.name.toLowerCase() === this.props.searchTerm.toLowerCase());
    console.log(ifValueExists);
    if (ifValueExists.length === 0){
      this.props.fetchSearch(this.props.searchTerm);
    }
  }

  render(){
    return (
      <form 
        className={styles.form}
        onSubmit={this.fetchSearch}
      >
        <input 
          type="text" 
          value={this.props.value}
          onChange={this.handleSearch}
          className={styles.form__input}
        />
        <Button
          className="btn--form"
          type="submit"
        >
          search
        </Button>
      </form>
    );
  }
}

export default Form;
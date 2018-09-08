import React, {Component} from 'react';
import './index.scss';

class Nav extends Component{
  constructor(props){
    super(props);
    this.checkAll = this.checkAll.bind(this);
    this.checkOffline = this.checkOffline.bind(this);
    this.checkOnline = this.checkOnline.bind(this);
  }
  checkAll(){
    this.props.statusCheck('stream');
  }
  checkOffline(){
    this.props.statusCheck(null);
  }
  checkOnline(){
    this.props.statusCheck(true);
  }
  render(){
    return (
      <nav>
        <ul className="navbar">
        <li>
          <button 
            className="navbar__item--online"
            onClick={this.checkOnline}
          >
          Online
          </button>
        </li>
        <li>
          <button 
            className="navbar__item"
            onClick={this.checkAll}
          >
          All
          </button>
        </li>
        <li>
          <button 
            className="navbar__item--offline"
            onClick={this.checkOffline}
          >
          Offline
          </button>
        </li>
        </ul>
      </nav>
    );
    }
}

export default Nav;
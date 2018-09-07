import React, {Component} from 'react';

import Banner from '../Banner/index';
import Nav from '../Nav/index';
import Form from '../Form/index';
import Table from '../Table/index';

import {
  DEFAULT_QUERY,
  PATH_BASE,
  PARAM_CHANNEL,
  PARAM_STREAM
} from '../../constants/index';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm : DEFAULT_QUERY,
      searchItem: '',
      list: [],
      status: 'stream'
    }
    
    this.fetchSearch = this.fetchSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.statusCheck = this.statusCheck.bind(this);
  }

  componentDidMount(){
    this.state.searchTerm.forEach(this.fetchSearch);
  }

  // remove streamer from table
  handleRemove(target){
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((value) => value._id !== target)
      }
    })
  }

  // sets searchItem state on change
  handleSearch(target){
    this.setState(() => {
      return {
        searchTerm: target,
        searchItem: target
      }
    })
    console.log(this.state);
  }

  setResult(obj){
    this.setState((prevState) => {
      return {
        list: prevState.list.concat(obj)
      }
    })
  }

  // fetches streamer based on state after submit
  fetchSearch(searchItem){
    const options = {
      headers: new Headers({'Client-ID': 'rkmd7lh8bo3efvoffoupar8zjzotyw'})
    }
    fetch(`${PATH_BASE}${PARAM_CHANNEL}${searchItem}`, options)
      .then((response) => {
        if (response.ok){
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((result) => {
        // fetch streamer status
        fetch(`${PATH_BASE}${PARAM_STREAM}${searchItem}`, options)
          .then((res) => res.json())
          .then((data) => {
            const obj = Object.assign({},result, data);
            this.setResult(obj);
            this.setState(() => {
              return {
                searchItem: '',
                searchTerm: ''
              }
            })
          })
      })
      .catch((error) => console.log(`Something went wrong`, error));
  }

  statusCheck(status){
    this.setState(() => {
      return {
        status: status
      }
    })
  }
  render(){
    return (
      <div>
        <Banner>
          Twitch Stream Viewer
        </Banner>
        <Nav statusCheck={this.statusCheck}/>
        <Form
          value={this.state.searchItem} 
          searchTerm = {this.state.searchTerm}
          handleSearch={this.handleSearch} 
          fetchSearch={this.fetchSearch}
          list={this.state.list}
        />
        <Table 
          handleRemove={this.handleRemove}
          list={this.state.list}
          status={this.state.status}
        />
      </div>
    );
  }
}

export default App;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../CSS/MinerSearch.css';
import {apiCalls} from '../apiCalls';
import {NavLink} from 'react-router-dom';

class MinerSearch extends Component {
  constructor(searchError, findMiner){
    super();
    this.state = {
      search: "",
    };
  };

  clearSearch = () => {
    this.props.findMiner(this.state.search.toLowerCase());
    this.setState({search: ""});
  };

  render(){
    return(
      <section className="search-container">
        <h2>Find a Miner</h2>
        <input className="search-input" type='text' value={this.state.search} onChange={(event) => this.setState({search: event.target.value})} alt="Please enter a Miner name or address" placeholder="Please enter a Miner name or address 🔍"/>
        <NavLink to={this.state.search}><button className="miner-search-btn" onClick={() => this.clearSearch()}>Find Miners</button></NavLink>
        <p>{this.props.searchError}</p>
      </section>
    );
  };
};

export default MinerSearch;

MinerSearch.propTypes = {
  searchError: PropTypes.bool,
  findMiner: PropTypes.func,
}

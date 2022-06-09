import React, {Component} from 'react'
import '../CSS/MinerSearch.css'
import {apiCalls} from '../apiCalls'
import {NavLink} from 'react-router-dom'

class MinerSearch extends Component {
  constructor(findMiner){
    super()
    this.state = {
      search:""
    }
  }

  clearSearch = () => {
    this.props.findMiner(this.state.search)
    this.setState({search: ""})
  }

  render(){
    return(
      <section className="search-container">
        <h2>Find a Miner</h2>
        <input className="search-input" type='text' value={this.state.search} onChange={(event) => this.setState({search: event.target.value})} alt="Please enter a Miner name or address" placeholder="Please enter a Miner name or address 🔍"/>
        <NavLink className="miner-search-btn" to={this.state.search}><button onClick={() => this.clearSearch()}>Find Miners</button></NavLink>
      </section>
    )
  }
}

export default MinerSearch;

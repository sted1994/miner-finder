import React, {Component} from 'react'
import '../CSS/MinerSearch.css'

class MinerSearch extends Component {
  constructor(){
    super()
    this.state = {
      search:""
    }
  }
  render(){
    return(
      <section className="search-container">
        <h2>Find a Miner</h2>
        <input className="search-input" type='text' value={this.state.search} onChange={(event) => this.setState({search: event.target.value})} alt="Please enter a Miner name or address" placeHolder="Please enter a Miner name or address 🔍"/>
        <button className="miner-search-btn">Find Miners</button>
      </section>
    )
  }
}

export default MinerSearch;

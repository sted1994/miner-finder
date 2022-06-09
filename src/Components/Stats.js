import React, {Component} from 'react'
import '../CSS/Stats.css'
import {apiCalls} from '../apiCalls';
import DropDown from './DropDown'

class Stats extends Component{
  constructor(){
    super();
    this.state = {
      stats: {},
      dataPoints: [],
      statsToShow: "Search Stats",
      dataToShow: "",
    }
  }

  componentDidMount = () => {
    Promise.all([apiCalls.getStats()])
    .then(res => {
      this.setState({stats: res[0].data.counts})
      this.setState({dataPoints: Object.keys(res[0].data.counts)})
      this.setState({stats: res[0].data.counts})
      })
  }



  onChangeHandler = (event) => {
    this.setState({statsToShow: event.target.value})
    this.setState({dataToShow: this.state.stats[event.target.value]})
  }

  render(){
    return(
      <div className="information-container">
        <h3>Stats</h3>
        <select onChange={(event) => this.onChangeHandler(event)}>
          <option value="">-- Select Stats --</option>
          <DropDown dataPoints={this.state.dataPoints}/>
        </select>
        <h4 className="stat-to-show">{this.state.statsToShow}:</h4>
        <p className="data-to-show">{this.state.dataToShow}</p>
      </div>
    )
  }
}

export default Stats

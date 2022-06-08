import React, {Component} from 'react'
import '../CSS/Stats.css'

class Stats extends Component{
  constructor(){
    super();
    this.state = {
      stats: {},
      statsToShow: "",
      dataToShow: "",
    }
  }

  componentDidMount = () => {
    this.setState({statsToShow: 'hello'})
  }

  onChangeHandler = (event) => {
    this.setState({statsToShow: event.target.value})
  }

  render(){
    return(
      <div className="information-container">
        <h3>Stats</h3>
        <select onChange={(event) => this.onChangeHandler(event)}>
          <option value="">-- Select Stats --</option>
          <option value="test" >test</option>
          <option value="test">test</option>
          <option value="test">test</option>
        </select>
        <h4 className="stat-to-show">{this.state.statsToShow}:</h4>
        <p className="data-to-show">{this.state.dataToShow}72397237</p>
      </div>
    )
  }
}

export default Stats

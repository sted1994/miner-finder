import React, {Component} from "react";
import '../CSS/App.css';
import Banner from './Banner';
import PriceChart from './PriceChart';
import Stats from './Stats';
import MinerSearch from './MinerSearch';
import MinerSummary from './MinerSummary'
import Error from './Error'
import {Route, Switch} from 'react-router-dom'
import {apiCalls} from '../apiCalls';

class App extends Component {
  constructor(){
    super()

    this.state = {
      marketValue: 0,
      oraclePrices: [],
      stats: {},
      minerSummary: [],
      minerAddress: "",
      minerRewards: 0,
      errors: false,
    }
  }

  componentDidMount = () => {
    Promise.all([apiCalls.getOraclePrice()])
    .then(res => {
      console.log("res", res)
      this.setState({oraclePrices: res[0]})
    })
  }

  findMiner = (input) => {
    return Promise.all([apiCalls.getMinerDetails(input)])
      .then(res => {
        this.setState({minerSummary: res[0], minerAddress: res[0].address})
        return res[0].address
      }).then(address => apiCalls.getRewards(address, "min_time=-1%20day&max_time=0%20day"))
      .then(rewards => this.setState({minerRewards: rewards.data.total, errors: false}))
      .catch(error => {
        this.setState({errors: true})
        return error
      })
    }

    updateRewards = (timeFrame) => {
      return timeFrame === 7 ? apiCalls.getRewards(this.state.minerAddress, "min_time=-7%20day&max_time=0%20day").then(res => this.setState({minerRewards: res.data.total})) :
       timeFrame === 14 ? apiCalls.getRewards(this.state.minerAddress, "min_time=-13%20day&max_time=-1%20day").then(res => this.setState({minerRewards: res.data.total})) :
       apiCalls.getRewards(this.state.minerAddress, "min_time=-30%20day&max_time=-1%20day").then(res => this.setState({minerRewards: res.data.total}))
    }

    renderSearch = (match, findMiner) => {
      return !this.state.errors ? <MinerSummary findMiner={this.findMiner} match={match} updateRewards={this.updateRewards} minerRewards={this.state.minerRewards} minerSummary={this.state.minerSummary}/> :
      <><Error/><MinerSearch searchError={this.state.errors} findMiner={findMiner}/></>
    }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        <Banner />
        <section className="information-bar">
          <PriceChart prices={this.state.oraclePrices}/>
          <Stats />
        </section>
        <Switch>
          <Route exact path='/' render={() => <MinerSearch searchError={this.state.errors} findMiner={this.findMiner}/> } />
          <Route  exact path='/:id' render={({match}) =>  this.renderSearch(match, this.findMiner) }/>
        </Switch>
        </header>
      </div>
    );
  }
}


export default App;

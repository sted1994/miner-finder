import React, {Component} from "react";
import '../CSS/App.css';
import Banner from './Banner';
import MarketPrice from './MarketPrice';
import PriceChart from './PriceChart';
import Stats from './Stats';
import MinerSearch from './MinerSearch';
import MinerSummary from './MinerSummary'
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
    }
  }

  componentDidMount = () => {
    Promise.all([apiCalls.getOraclePrice()])
    .then(res => this.setState({oraclePrices: res[0]}))
  }

  findMiner = (input) => {
    return Promise.all([apiCalls.getMinerDetails(input)])
      .then(res => {
        this.setState({minerSummary: res[0], minerAddress: res[0].address})
        return res[0].address
      }).then(address => apiCalls.getRewards(address, "min_time=-1%20day&max_time=0%20day"))
      .then(rewards => this.setState({minerRewards: rewards.data.total}))
    }

    updateRewards = (timeFrame) => {
      return timeFrame === 7 ? apiCalls.getRewards(this.state.minerAddress, "min_time=-7%20day&max_time=0%20day").then(res => this.setState({minerRewards: res.data.total})) :
       timeFrame === 14 ? apiCalls.getRewards(this.state.minerAddress, "min_time=-13%20day&max_time=-1%20day").then(res => this.setState({minerRewards: res.data.total})) :
       apiCalls.getRewards(this.state.minerAddress, "min_time=-30%20day&max_time=-1%20day").then(res => this.setState({minerRewards: res.data.total}))
    }


  render () {
    return (
      <div className="App">
        <header className="App-header">
        <Banner />
        <section className="information-bar">
          <MarketPrice price={this.state.marketValue}/>
          <PriceChart prices={this.state.oraclePrices}/>
          <Stats />
        </section>
        <Switch>
          <Route exact path="/" render={() => <MinerSearch findMiner={this.findMiner}/> } />
          <Route  path="/:id" render={({match}) => <MinerSummary findMiner={this.findMiner} match={match} updateRewards={this.updateRewards} minerRewards={this.state.minerRewards} minerSummary={this.state.minerSummary}/> } />
        </Switch>
        </header>
      </div>
    );
  }
}


export default App;

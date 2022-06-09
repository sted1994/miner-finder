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
    }
  }

  componentDidMount = () => {
    Promise.all([apiCalls.getOraclePrice()])
    .then(res => this.setState({oraclePrices: res[0]}))
  }

  findMiner = (input) => {
    Promise.all([apiCalls.getMinerDetails(input)])
    .then(res => this.setState({minerSummary: res[0]}))
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
          <Route exact path="/:searchParam" render={() => <MinerSummary minerSummary={this.state.minerSummary}/> } />
        </Switch>
        </header>
      </div>
    );
  }
}


export default App;

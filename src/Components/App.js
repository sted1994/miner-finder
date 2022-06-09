import React, {Component} from "react";
import '../CSS/App.css';
import Banner from './Banner';
import MarketPrice from './MarketPrice';
import PriceChart from './PriceChart';
import Stats from './Stats';
import MinerSearch from './MinerSearch';
import MinerSummary from './MinerSummary'
import {apiCalls} from '../apiCalls';

class App extends Component {
  constructor(){
    super()

    this.state = {
      marketValue: 0,
      oraclePrices: [],
      stats: {},
    }
  }

  componentDidMount = () => {
    Promise.all([apiCalls.getOraclePrice()])
    .then(res => this.setState({oraclePrices: res[0]}))
  }
//  <MinerSearch />
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

        <MinerSummary />
        </header>
      </div>
    );
  }
}


export default App;

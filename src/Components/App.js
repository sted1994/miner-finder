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
      stats: {
              tokenSupply: 0,
              hotSpotsOnline: 0,
              totalHotSpots: 0,
              countries: 0,
              cities: 0
             }
    }
  }

  componentDidMount = () => {
    apiCalls.getRewards()
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        <Banner />
        <section className="information-bar">
          <MarketPrice />
          <PriceChart />
          <Stats />
        </section>
        <MinerSearch />
        </header>
      </div>
    );
  }
}


export default App;

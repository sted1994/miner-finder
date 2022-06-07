import React, {Component} from "react"
import '../CSS/App.css';

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

  render () {
    return (
      <div className="App">
        <header className="App-header">
        
        </header>
      </div>
    );
  }
}


export default App;

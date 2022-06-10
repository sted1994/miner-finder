import React from 'react'
import '../CSS/PriceChart.css'
import { VictoryLine } from "victory";

const PriceChart = ({prices}) => {

const setChartPoints = () => {
  if(prices.length){
    const test2 = prices.map(price => {
      return {x: price.timestamp, y: price.price}
    })
    return test2.reverse()
  }
}

  return(
    <div className="information-container">
      <h3 className="price-chart_header">Oracle Price</h3>
      <VictoryLine className="price-chart"
    style={{
      data: { stroke: "#c43a31", strokeWidth: 5 },
      parent: { border: "none"},
    }}
    data={setChartPoints()}
  />
    </div>
  )
}

export default PriceChart

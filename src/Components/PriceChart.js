import React from 'react'
import '../CSS/PriceChart.css'
import { VictoryLine } from "victory";

const PriceChart = ({prices}) => {

const test = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 }
]

const setChartPoints = () => {
  if(prices.length){
    const test2 = prices.map(price => {
      console.log(price.timestamp)
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
      data: { stroke: "#c43a31", strokeWidth: 10 },
      parent: { border: "none"},
    }}
    data={setChartPoints()}
  />
    </div>
  )
}

export default PriceChart

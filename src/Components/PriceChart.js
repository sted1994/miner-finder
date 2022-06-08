import React from 'react'
import '../CSS/PriceChart.css'
import { VictoryLine } from "victory";

const PriceChart = (prices) => {

  


  return(
    <div className="information-container">
      <h3 className="price-chart_header">Price Chart</h3>
      <VictoryLine className="price-chart"
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "none"},
    }}
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 }
    ]}
  />
    </div>
  )
}

export default PriceChart

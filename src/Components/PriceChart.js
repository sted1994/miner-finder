import React from 'react'
import '../CSS/PriceChart.css'
import { VictoryLine } from "victory";

const PriceChart = ({prices}) => {

const setChartPoints = () => {
    const dataPoints = prices.map(price => {
      return {x: price.timestamp, y: price.price}
    })
    return dataPoints.reverse()
}

  const checkFetch = () => {
    if(!prices || !prices.length){
      return( <div className="information-container">
                <h3 className="price-chart_header">Oracle Price</h3>
                <h3 className="oracle-error">Were sorry, were not able to load prices at this time</h3>
              </div>
            )
    } else {
    return( <div className="information-container">
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
  }

  return(
    <>
      {checkFetch()}
    </>
  )
}

export default PriceChart

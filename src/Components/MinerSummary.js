import React from 'react';
import '../CSS/MinerSummary.css'
import { VictoryChart } from "victory";
import { VictoryBar } from "victory";
import { VictoryScatter } from "victory";

const MinerSummary = () =>{

  return(
    <section className="miner-summary">
      <section className="status">
        {true === true ? <article>🟢 Online</article> : <article>🔴 Offline</article>}
      </section>
      <h2 className="miner-name">Miner Name</h2>
      <section className="secondary-info">
        <p className="location">Location</p>
        <p className="scale-reward">Scale Reward: </p>
      </section>
      <VictoryChart
      style={{
        data: { stroke: "#c43a31", strokeWidth: 10 },
        parent: { height: "50%"},
      }}
      domainPadding={{ x: 8 }}
      >
        <VictoryBar
          style={{
            data: { fill: "#ffff" }
          }}
          data={[
        { x: 0, y: 2 },
        { x: 45, y: 3 },
        { x: 90, y: 5 },
        { x: 135, y: 4 },
        { x: 180, y: 7 }
      ]}
        />
        <VictoryScatter
        data={[
      { x: 0, y: 2 },
      { x: 45, y: 3 },
      { x: 90, y: 5 },
      { x: 135, y: 4 },
      { x: 180, y: 7 }
    ]}
        />
      </VictoryChart>
      <section className="rewards-filter">
        <button>last 7 days</button>
        <button>last 14 days</button>
        <button>last 30 days</button>
      </section>
    </section>
  )
}

export default MinerSummary;

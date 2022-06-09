import React from 'react';
import '../CSS/MinerSummary.css'
import { VictoryChart } from "victory";
import { VictoryBar } from "victory";
import { VictoryScatter } from "victory";

const MinerSummary = ({minerSummary}) =>{
  if(!Array.isArray(minerSummary)){
    const name = minerSummary.name.split("-").join(" ")
    const scaleReward = minerSummary.reward_scale.toFixed(2)
    return(
      <section className="miner-summary">
        <section className="status">
          {minerSummary.status.online=== "online" ? <article>🟢 Online</article> : <article>🔴 Offline</article>}
        </section>
        <h2 className="miner-name">{name}</h2>
        <section className="secondary-info">
          <p className="location">{minerSummary.geocode.long_city}, {minerSummary.geocode.short_state}</p>
          <p className="scale-reward">Scale Reward: {scaleReward}</p>
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

}

export default MinerSummary;

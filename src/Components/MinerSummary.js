import React from 'react';
import '../CSS/MinerSummary.css';
import MinerSearch from './MinerSearch';

const MinerSummary = ({searchError, minerSummary, minerRewards, match, updateRewards, findMiner}) =>{
  if(!Array.isArray(minerSummary)){
    const name = minerSummary.name.split("-").join(" ");
    const scaleReward = minerSummary.reward_scale.toFixed(2);
    const findStatus = () =>{
      return minerSummary.status.online=== "online" ? <article className="online">🟢 Online</article> : <article className="offline">🔴 Offline</article>
    };
    return(
      <section className="miner-summary">
        <section className="status">
          {findStatus()}
        </section>
        <h2 className="miner-name">{name}</h2>
        <section className="secondary-info">
          <p className="location">{minerSummary.geocode.long_city}, {minerSummary.geocode.short_state}</p>
          <p className="scale-reward">Scale Reward: {scaleReward}</p>
        </section>
        <p className="miner-total">{minerRewards}</p>
        <section className="rewards-filter">
          <button className="week"onClick={() => updateRewards(7)}>last 7 days</button>
          <button className="biWeekly" onClick={() => updateRewards(14)}>last 14 days</button>
          <button className="month" onClick={() => updateRewards(30)}>last 30 days</button>
        </section>
      </section>
    );
  }else{
    const minerName = match.url.split(" ").join("-").slice(1);
    findMiner(minerName);
  };
};

export default MinerSummary;

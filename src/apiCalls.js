const apiCalls = {
  getMarketPrice(){
    console.log('test')
  },

  getOraclePrice(){
    return (
      fetch('https://api.helium.io/v1/oracle/prices')
      .then(res => res.json())
      .then(data => data.data)
      .catch(error => console.log(error))
    )
  },

  getStats(){
    console.log('test')
  },

  getRewards(){
    console.log('test')
  },
}

export {apiCalls}

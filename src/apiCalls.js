const apiCalls = {
  getMarketPrice(){
  var requestOptions = {
    method: 'GET',
    headers: {'X-CMC_PRO_API_KEY': "614e8f0b-33df-4896-a10b-759472089473", "Accept": "*/*"},
    redirect: 'follow'
  };
  return fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=helium' + requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(data => data.data[5665].quote.USD.price)
    .catch(error => console.log('error', error));
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
    return (
      fetch('https://api.helium.io/v1/stats')
      .then(res => res.json())
      .then(data => data)
      .catch(error => error)
    )
  },

  getRewards(address, timeFrame){
    var requestOptions = {
      method: 'GET',
      headers: {'User-Agent': "uExLTAP2hb5pT3sieItstQMwggZKSj5t3qN3MPR672c", "Accept": "*/*"},
      redirect: 'follow'
    };
    return fetch(`https://api.helium.io/v1/hotspots/${address}/rewards/sum?${timeFrame}`)
            .then(res => res.json())
            .then(data => data)
      },

  getMinerDetails(input){
    let address = false
    input.split("").forEach(char => {
      if(parseInt(char)){
        address = true
      }
    })

    if(address === false){
      return fetch(`https://api.helium.io/v1/hotspots/name/${input.split(" ").join("-")}`)
        .then(res => res.json())
        .then(data => data.data[0])
        .catch(error => error)
    } else {
      return fetch(`https://api.helium.io/v1/hotspots/${input}`)
        .then(res => res.json())
        .then(data => data.data)
        .catch(error => error)
    }
  },

}

export {apiCalls}

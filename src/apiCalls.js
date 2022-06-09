const apiCalls = {
  getMarketPrice(){
  // var requestOptions = {
  //   method: 'GET',
  //   headers: {'X-CMC_PRO_API_KEY': "614e8f0b-33df-4896-a10b-759472089473", "Accept": "*/*"},
  //   redirect: 'follow'
  // };
  //
  // fetch("https://localhost:3001/marketValue")
  //   .then(response => response.text())
  //   .then(result => JSON.parse(result))
  //   .then(data => data.data[5665].quote.USD.price)
  //   .catch(error => console.log('error', error));
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
    return (
      fetch('https://api.helium.io/v1/stats')
      .then(res => res.json())
      .then(data => data)
      .catch(error => console.log(error))
    )
  },

  getRewards(){
    console.log('test')
  },
}

export {apiCalls}

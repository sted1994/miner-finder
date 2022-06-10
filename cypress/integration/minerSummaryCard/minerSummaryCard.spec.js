describe("Miner search bar component", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/name/tangy-burgundy-swift", {fixture: "minerSummary-1"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/name/beautiful-latte-tiger", {fixture: "minerSummary-2"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/112wEJZrhw6PSB16boXLQV1UjYjWh3FZhYjakC5pRTDHuxLizVqV/rewards/sum?min_time=-1%20day&max_time=0%20day", {fixture: "secondPersonaMinerRewards-1day"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/112wEJZrhw6PSB16boXLQV1UjYjWh3FZhYjakC5pRTDHuxLizVqV/rewards/sum?min_time=-7%20day&max_time=0%20day", {fixture: "minerRewards-7day"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/112wEJZrhw6PSB16boXLQV1UjYjWh3FZhYjakC5pRTDHuxLizVqV/rewards/sum?min_time=-13%20day&max_time=-1%20day", {fixture: "minerRewards-14day"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/112wEJZrhw6PSB16boXLQV1UjYjWh3FZhYjakC5pRTDHuxLizVqV/rewards/sum?min_time=-30%20day&max_time=-1%20day", {fixture: "minerRewards-30day"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/1122GmddTFY9voHgwL2kDSsMd1hsjMpF9NQwkgrHUTNJKmjSHXj/rewards/sum?min_time=-1%20day&max_time=0%20day", {fixture: "minerRewards-1day"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/1122GmddTFY9voHgwL2kDSsMd1hsjMpF9NQwkgrHUTNJKmjSHXj/rewards/sum?min_time=-7%20day&max_time=0%20day", {fixture: "minerRewards-7day"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/1122GmddTFY9voHgwL2kDSsMd1hsjMpF9NQwkgrHUTNJKmjSHXj/rewards/sum?min_time=-13%20day&max_time=-1%20day", {fixture: "minerRewards-14day"})
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/1122GmddTFY9voHgwL2kDSsMd1hsjMpF9NQwkgrHUTNJKmjSHXj/rewards/sum?min_time=-30%20day&max_time=-1%20day", {fixture: "minerRewards-30day"})
  })

  it("A user should be able to return to a bookmarked miner", () => {
    cy.visit("http://localhost:3000/tangy%20burgundy%20swift")
    cy.contains("tangy burgundy swift")
  })

  it("Should show a dynamic online status", () => {
    cy.visit("http://localhost:3000/tangy%20burgundy%20swift")
    cy.get(".online").should("exist")
    cy.visit("http://localhost:3000/beautiful%20latte%20tiger")
    cy.get(".offline").should("exist")
  })

  it("Should have a dynamic name", () => {
    cy.visit("http://localhost:3000/tangy%20burgundy%20swift")
    cy.get(".miner-name").should("have.text", "tangy burgundy swift")
    cy.visit("http://localhost:3000/beautiful%20latte%20tiger")
    cy.get(".miner-name").should("have.text", "beautiful latte tiger")
  })

  it("Should have a dynamic location", () => {
    cy.visit("http://localhost:3000/tangy%20burgundy%20swift")
    cy.get(".location").should("have.text", "Morrison, CO")
    cy.visit("http://localhost:3000/beautiful%20latte%20tiger")
    cy.get(".location").should("have.text", "Denver, CO")
  })

  it("Sould have dynamic scale reward", () => {
    cy.visit("http://localhost:3000/tangy%20burgundy%20swift")
    cy.get(".scale-reward").should("have.text", "Scale Reward: 0.43")
    cy.visit("http://localhost:3000/beautiful%20latte%20tiger")
    cy.get(".scale-reward").should("have.text", "Scale Reward: 0.05")
  })

  it("Should have a dynamic rewards total", () => {
    cy.visit("http://localhost:3000/tangy%20burgundy%20swift")
    cy.get(".miner-total").should("have.text", "3.85456953")
    cy.visit("http://localhost:3000/beautiful%20latte%20tiger")
    cy.get(".miner-total").should("have.text", "2.3")
  })

  it("Should display different totals based on timeframe selected", () => {
    cy.visit("http://localhost:3000/tangy%20burgundy%20swift")
    cy.get(".week").click()
    cy.get(".miner-total").should("have.text", "1.21241867")
    cy.get(".biWeekly").click()
    cy.get(".miner-total").should("have.text", "2.21620743")
    cy.get(".month").click()
    cy.get(".miner-total").should("have.text", "4.17095262")
  })

})

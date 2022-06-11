describe("Miner search bar component", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/name/tangy-burgundy-swift", {fixture: "minerSummary-1"});
    cy.intercept("GET", "https://api.helium.io/v1/hotspots/name/beautiful-latte-tiger", {fixture: "minerSummary-2"});
    cy.intercept("GET", "api.helium.io/v1/hotspots/112wEJZrhw6PSB16boXLQV1UjYjWh3FZhYjakC5pRTDHuxLizVqV/rewards/sum?min_time=-1%20day&max_time=0%20day", {fixture: "minerRewards-1day"});
    cy.intercept("GET", "api.helium.io/v1/hotspots/112wEJZrhw6PSB16boXLQV1UjYjWh3FZhYjakC5pRTDHuxLizVqV/rewards/sum?min_time=-7%20day&max_time=0%20day", {fixture: "minerRewards-7day"});
    cy.intercept("GET", "api.helium.io/v1/hotspots/112wEJZrhw6PSB16boXLQV1UjYjWh3FZhYjakC5pRTDHuxLizVqV/rewards/sum?min_time=-13%20day&max_time=-1%20day", {fixture: "minerRewards-14day"});
    cy.intercept("GET", "api.helium.io/v1/hotspots/112wEJZrhw6PSB16boXLQV1UjYjWh3FZhYjakC5pRTDHuxLizVqV/rewards/sum?min_time=-30%20day&max_time=-1%20day", {fixture: "minerRewards-30day"});
    cy.intercept("GET", "api.helium.io/v1/hotspots/1122GmddTFY9voHgwL2kDSsMd1hsjMpF9NQwkgrHUTNJKmjSHXj/rewards/sum?min_time=-1%20day&max_time=0%20day", {fixture: "minerRewards-1day"});
    cy.intercept("GET", "api.helium.io/v1/hotspots/1122GmddTFY9voHgwL2kDSsMd1hsjMpF9NQwkgrHUTNJKmjSHXj/rewards/sum?min_time=-7%20day&max_time=0%20day", {fixture: "minerRewards-7day"});
    cy.intercept("GET", "api.helium.io/v1/hotspots/1122GmddTFY9voHgwL2kDSsMd1hsjMpF9NQwkgrHUTNJKmjSHXj/rewards/sum?min_time=-13%20day&max_time=-1%20day", {fixture: "minerRewards-14day"});
    cy.intercept("GET", "api.helium.io/v1/hotspots/1122GmddTFY9voHgwL2kDSsMd1hsjMpF9NQwkgrHUTNJKmjSHXj/rewards/sum?min_time=-30%20day&max_time=-1%20day", {fixture: "minerRewards-30day"});
    cy.visit("http://localhost:3000/");
  });

  it("Landing page should display a search bar component", () => {
    cy.get(".search-container").should("exist");
  });

  it("A user should be able to type in input", () => {
    cy.get(".search-input").type("tangy burgundy swift");
  });

  it("A user should be able to search a valid miner name", () => {
    cy.get(".search-input").type("tangy burgundy swift");
    cy.get(".miner-search-btn").click();
    cy.url().should("equal", "http://localhost:3000/miner-finder/tangy%20burgundy%20swift");
    cy.contains("tangy burgundy swift");
  });

  it("Should show an error if invalid responce is given", () => {
    cy.get(".search-input").type("I am not a valid input");
    cy.get(".miner-search-btn").click();
    cy.get('.error-msg').should("have.text", "Were sorry we couldnt find a miner by that name. Please try again");
  });

  it("Following an incorect miner search if a valid miner is entered the error message should be removed", () => {
    cy.get(".search-input").type("I am not a valid input");
    cy.get(".miner-search-btn").click();
    cy.get('.error-msg').should("have.text", "Were sorry we couldnt find a miner by that name. Please try again");
    cy.get(".search-input").type("tangy burgundy swift");
    cy.get(".miner-search-btn").click();
    cy.get(".error-message").should("not.exist");
  });

  it("Users should be able to return home and search for a new Miner and see a different summary", () => {
    cy.get(".search-input").type("tangy burgundy swift");
    cy.get(".miner-search-btn").click();
    cy.url().should("equal", "http://localhost:3000/miner-finder/tangy%20burgundy%20swift");
    cy.contains("tangy burgundy swift");
    cy.get(".logo").click();
    cy.url().should("equal", "http://localhost:3000/miner-finder/");
    cy.get(".search-input").type("beautiful latte tiger");
    cy.get(".miner-search-btn").click();
    cy.url().should("equal", "http://localhost:3000/miner-finder/beautiful%20latte%20tiger");
    cy.contains("beautiful latte tiger");
  });
});

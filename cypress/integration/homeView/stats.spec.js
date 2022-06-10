describe("Stat container", () => {

  beforeEach(()=>{
    cy.intercept("GET", "https://api.helium.io/v1/stats", {fixture: "blockStats"})
    cy.visit("http://localhost:3000/")
  });

  it("A user should be able to see a component", () =>{
    cy.get(".information-container").last().should("exist")
    cy.get(".information-container").last().should("contain", "Stats")
    cy.get(".information-container").last().should("contain", "Search Stats:")
    cy.get("h3").last().should("have.text", "Stats")
    cy.get(".stat-selector").should("exist")
  });

  it("Should contain all the items for stats", () => {
    cy.get("option").should("have.length", 15)
  })

  it("User should be able to select an option in dropdown and see the stats", () => {
    cy.get(".information-container").last().should("contain", "Search Stats:")
    cy.get(".stat-selector").should("exist")
    cy.get("select").select(1)
    cy.get(".information-container").last().should("contain", "validators")
    cy.get(".data-to-show").should("exist")
    cy.get("select").select(2)
    cy.get(".information-container").last().should("contain", "transactions")
    cy.get(".data-to-show").should("have.text", "458687179")
  });

  it("should show an error msg if stats can not be fetched", () => {
    cy.intercept("GET", "https://api.helium.io/v1/stats", {
        statusCode: 500,
        body: {
          message: 'Server error. Please try again'
        }
      })
      cy.get(".information-container").should("contain", "Oh No").should("contain", "an error occured during loading try again")
  });

  it("should have no options to pick if server error occurs", () => {
    cy.intercept("GET", "https://api.helium.io/v1/stats", {
        statusCode: 500,
        body: {
          message: 'Server error. Please try again'
        }
      })
      cy.get("option").should("have.length", 1)
  })
})

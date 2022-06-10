describe("Oracle Price", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.helium.io/v1/oracle/prices",  {fixture: "oraclePrices"})
    cy.visit("http://localhost:3000/")
  });

  it("Price Chart component should be present", () => {
    cy.get(".information-container").first().should("exist")
    cy.get(".price-chart_header").should("exist")
  });

  it("Should contain a chart mapping oracle price", () => {
    cy.get(".VictoryContainer").should("exist")
  });

  it("Should show an error message if data cant be found", () => {
    cy.intercept("GET", "https://api.helium.io/v1/oracle/prices",  "Error")
    cy.get(".oracle-error").should("exist")
  })
})

describe("Register new user", function() {
  before("Navigate to home page", function() {
    cy.visit("/")
    cy.get(".se-pre-con").should("not.be.visible")
    cy.contains("Food&Drink")
  })

  it("Register new user", function() {
    cy.get('a[href="/register"').click()
    cy.get(".se-pre-con").should("not.be.visible")
    cy.get('input[id="name"')
  })
})

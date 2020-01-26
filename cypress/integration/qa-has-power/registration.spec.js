describe("user registration form", function() {
  before("navigate to home page", function() {
    cy.visit("/")
    cy.get(".se-pre-con").should("not.be.visible")
    cy.contains("Food&Drink")
  })

  beforeEach("go to registration page", function() {
    cy.get("a[href='/register'").click()
    cy.get(".se-pre-con").should("not.be.visible")
  })

  it("sends  empty registration form", function() {
    cy.get("form").submit()
    cy.get(".se-pre-con").should("not.be.visible")
    cy.contains(":nth-child(1) > .col-sm-3 > .invalid-feedback", "To pole powinno mieć od 5 do 50 znaków")
    cy.contains(":nth-child(2) > .col-sm-3 > .invalid-feedback", "To pole jest wymagane")
    cy.contains(":nth-child(3) > .col-sm-3 > .invalid-feedback", "To pole jest wymagane")
  })

  it("register new user", function() {
    cy.get("#name").type("Adam Kowalski")
    cy.get("#email").type("adam_kowalski" + Date.now() + "@wp.pl")
    cy.get("#password").type("AdamKowalski123!")
    cy.get("#confirm").type("AdamKowalski123!")
    cy.get("form").submit()
    cy.get(".se-pre-con").should("not.be.visible")
    cy.contains("Użytkownik został zarejestrowany")
  })
})

describe("logging In with different methods", function() {
  const email = "ala@ala.pl"
  const password = "AdamKowalski123!"
  //  Wczyatać  z  .env

  before("navigate to home page", function() {
    cy.visit("/")
    cy.get(".se-pre-con").should("not.be.visible")
    cy.contains("Food&Drink")
  })

  it("login by custom command", function() {
    cy.login(email, password)
    cy.visit("/")
    cy.get(".se-pre-con").should("not.be.visible")
    cy.contains("Food&Drink")
  })

  it("register user using fixtures", function() {
    cy.fixture("defaultUser").then(user => {
      cy.request({
        method: "POST",
        url: "/register",
        form: true,
        headers: {
          "content-type": "multipart/form-data"
        },
        body: user
      })
    })
  })
})

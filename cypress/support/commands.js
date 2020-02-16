Cypress.Commands.add("login", (user, message) => {
  return cy.request({
    method: "POST",
    url: "/login",
    form: true,
    body: user
  }).then((response) => {
    expect(response.body).to.contain(message)
  })
});

Cypress.Commands.add("test", () => {
  cy.log('Function works well')
});

describe('Sign in with different methods', function () {
  beforeEach('navigate to home page', function () {
    cy.visit('/login')
    cy.url().should('include', '.com/login')
    cy.get('.se-pre-con:hidden').as('loader')
    cy.get('@loader')
    cy.contains("Food&Drink")
  })
  it('login happy path', function () {
    cy.get('#email')
      .type('cypress123@automation.com')
      .should('have.value', 'cypress123@automation.com')
    cy.get('#password')
      .type('AdamKowalski123!')
      .should('have.value', 'AdamKowalski123!')
    cy.get('.btn')
      .should('have.value', 'Zaloguj')
      .click()
    cy.get('@loader')
    cy.url().should('include', '.com/dashboard')
    cy.get('[href="/edit_form"').should('be.visible')
  })
  it('login using fixtures', function () {
    cy.fixture('defaultUser').then((user) => {
      cy.get('#email')
        .type(user.email)
        .should('have.value', user.email)
      cy.get('#password')
        .type(user.password + '{enter}')
        .should('have.value', user.password)
    })
    cy.get('@loader')
    cy.contains('Zostałeś zalogowany')
  })
  it.only('login using custom command', function () {
    cy.fixture('defaultUser').then((user) => {
      cy.login(user)
    })
    cy.visit("/")
  })

})

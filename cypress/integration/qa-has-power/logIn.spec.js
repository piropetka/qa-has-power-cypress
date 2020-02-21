describe('Sign in with different methods', function() {
  beforeEach('navigate to home page', function() {
    cy.visit('/');
    cy.get('.se-pre-con').as('loader')
    cy.get('@loader').should('not.be.visible')
    cy.contains('Food&Drink')
  })

  it('simple login', function() {
    cy.get('[href="/login"]').click()
    cy.get('@loader').should('not.be.visible')
    cy.url().should('include', '.com/login')
    cy.get('#email').type('cypress123@automation.com')
    cy.get('#password').type('AdamKowalski123!')
    cy.get('form').submit()
    cy.get('@loader').should('not.be.visible')
    cy.url().should('include', '.com/dashboard')
    cy.contains('Zostałeś zalogowany')
  })

  it('login using fixtures', function() {
    cy.get('[href="/login"]').click()
    cy.get('@loader').should('not.be.visible')
    cy.url().should('include', '.com/login')
    cy.fixture('defaultUser').then((user) => {
      cy.get('#email').type(user.email)
      cy.get('#password').type(user.password + '{enter}')
    })
    cy.get('@loader').should('not.be.visible')
    cy.url().should('include', '.com/dashboard')
    cy.contains('Zostałeś zalogowany')
  })

  it('login using fixtures and custom command', function() {
    cy.fixture('defaultUser').then((user) => {
      cy.login(user, 'Zostałeś zalogowany')
    })
  })
})

describe('user registration form', function() {
  beforeEach('go to registration page', function() {
    cy.visit('/')
    cy.get('.se-pre-con').as('loader')
    cy.get('@loader').should('not.be.visible')
    cy.get('a[href="/register"').click()
    cy.get('@loader').should('not.be.visible')
  })

  it('sends  empty registration form', function() {
    cy.get('form').submit()
    cy.get('@loader').should('not.be.visible')
    cy.contains(':nth-child(1) > .col-sm-3 > .invalid-feedback', 'To pole powinno mieć od 5 do 50 znaków')
    cy.contains(':nth-child(2) > .col-sm-3 > .invalid-feedback', 'To pole jest wymagane')
    cy.contains(':nth-child(3) > .col-sm-3 > .invalid-feedback', 'To pole jest wymagane')
  })

  it('register new user', function() {
    cy.server()
    cy.route('POST', '/register').as('registration')
    cy.get('#name').type('Adam Kowalski')
    cy.get('#email').type('adam_kowalski' + Date.now() + '@wp.pl')
    cy.writeFile('cypress/fixtures/users.json', token)
    cy.get('#password').type('AdamKowalski123!')
    cy.get('#confirm').type('AdamKowalski123!{enter}')
    cy.get('@loader').should('not.be.visible')
    cy.url().should('include', '.com/login')
    cy.contains('Użytkownik został zarejestrowany')
  })
})

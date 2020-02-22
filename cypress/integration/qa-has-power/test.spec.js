describe('Test Cypress methods', function() {
    it('simple login', function() {
      cy.log('**Ready to automate!**')
      cy.visit('https://www.wikipedia.org/')
      cy.get('#searchInput').type('Elton John')
      cy.get('button').contains('Search').click()
      cy.url().schould('include', 'Elton_John') // true
    })
  })
  
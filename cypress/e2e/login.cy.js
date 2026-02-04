describe('Login', () => {
  it('Login Valido', () => {
    cy.visit('https://siteexemplo.com/login')
  
    cy.get('#username').type('usuario_teste')
    cy.get('#password').type('senha_teste')
    cy.get('#loginButton').click()
  cy.url().should('include', '/dashboard')
  })
  it('Login invalido', () => {
    cy.visit('https://siteexemplo.com/login')
  
    cy.get('#username').type('usuario_invalido')
    cy.get('#password').type('senha_invalida')
    cy.get('#loginButton').click()
  cy.get('.mensagem de erro').should('be.visible')
  })
})

describe('Login', () => {
  //TESTES DE LOGIN COMPLETOS
  it.only('Login Valido', () => {
    cy.visit('http://localhost:3000/login.html')
  
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('#login-btn').click()
  cy.url().should('include', '/dashboard')
  })
  it('Login invalido', () => {
    cy.visit('http://localhost:3000/login.html')
  
    cy.get('#email').type('usuario@aleatorio.com')
    cy.get('#password').type('senha_invalida')
    cy.get('#login-btn').click()
  cy.get('#alert-container').should('be.visible')
  })
})

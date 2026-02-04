describe('Funcionalidade Registro', () => {
    it('Registro Válido', () => {
        cy.visit('https://siteexemplo.com/registro')

        cy.get('#nome').type('Usuario Teste')
        cy.get('#email').type('usuario_teste@example.com')
        cy.get('#password').type('senha_segura123')
        cy.get('#confirmarPassword').type('senha_segura123')
        cy.get('#registroButton').click()
        cy.url().should('include', '/registro-com-sucesso')
    });
it('Registro Inválido - Senhas Não Correspondem', () => {
    cy.visit('https://siteexemplo.com/registro')

    cy.get('#nome').type('Usuario Teste')
    cy.get('#email').type('usuario_teste@example.com')
    cy.get('#password').type('senha_segura123')
    cy.get('#confirmarPassword').type('senha_diferente123')
    cy.get('#registroButton').click()
  cy.get('.mensagem de erro').should('be.visible')
});
it('Registro Inválido - Email Já Cadastrado', () => {
    cy.visit('https://siteexemplo.com/registro')
    cy.get('#nome').type('Usuario Teste')
    cy.get('#email').type('usuario_teste@example.com')
    cy.get('#password').type('senha_segura123')
    cy.get('#confirmarPassword').type('senha_segura123')
    cy.get('#registroButton').click()
  cy.get('.mensagem de erro').should('be.visible')
});
});
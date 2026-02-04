describe('Funcionaldade Pre Cadastro', () => {
    it('Pre Cadastro Válido', () => {
        cy.visit('https://siteexemplo.com/precadastro')

        cy.get('#nome').type('Usuario Teste')
        cy.get('#email').type('usuario_teste@example.com')
        cy.get('#telefone').type('1234567890')
        cy.get('#preCadastroButton').click()
        cy.url().should('include', '/pre-cadastro-com-sucesso')
    });

    it('Pre Cadastro Inválido - Email em Branco', () => {
        cy.visit('https://siteexemplo.com/precadastro')

        cy.get('#nome').type('Usuario Teste')
        cy.get('#telefone').type('1234567890')
        cy.get('#preCadastroButton').click()
      cy.get('.mensagem de erro').should('be.visible')
    });
    it('Pre Cadastro Inválido - Telefone em Branco', () => {
        cy.visit('https://siteexemplo.com/precadastro') 
        cy.get('#nome').type('Usuario Teste')
        cy.get('#email').type('usuario_teste@example.com')
        cy.get('#preCadastroButton').click()
      cy.get('.mensagem de erro').should('be.visible')
    });
});    
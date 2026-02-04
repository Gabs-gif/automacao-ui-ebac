describe('Funcionalidade Produtos', () => {
    it('Listagem de Produtos', () => {
        cy.visit('https://siteexemplo.com/produtos')
        cy.get('.produto-item').should('have.length.greaterThan', 24)
    cy.get('.produto-item').first().should('contain.text', 'Produto Exemplo 1')
    });

    it('Pesquisa por Produto', () => {
        cy.visit('https://siteexemplo.com/produtos')
        cy.get('#barraPesquisa').type('Produto Exemplo 5')
        cy.get('#botaoPesquisa').click()
    cy.get('.produto-item').should('have.length', 1)
    cy.get('.produto-item').first().should('contain.text', 'Produto Exemplo 5')
    });

    it('Filtro de Categoria', () => {
        cy.visit('https://siteexemplo.com/produtos')
        cy.get('#filtroCategoria').select('Eletrônicos')
        cy.get('.produto-item').should('contain.text', 'Produto Exemplo Eletronicos 1')
});
    it('Adição ao Carrinho', () => {
        cy.visit('https://siteexemplo.com/produtos')
        cy.get('.produto-item').first().within(() => {
            cy.get('.adicionar-ao-carrinho').click()
        });
        cy.get('#iconeCarrinho').click()
    cy.get('.item-carrinho').should('have.length', 1)
    cy.get('.item-carrinho').first().should('contain.text', 'Produto Exemplo 1')
    });
});
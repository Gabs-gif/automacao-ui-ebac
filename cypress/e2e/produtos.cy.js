//TESTES DE PRODUTOS COMPLETOS
describe('Funcionalidade Produtos', () => {
    it('Listagem de Produtos', () => {
        cy.visit('http://localhost:3000/catalog.html')
        cy.get('#results-count')
    cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-outline-info').should('be.visible')
    });

    it('Pesquisa por Produto', () => {
        cy.visit('http://localhost:3000/catalog.html')
        cy.get('#search-input').type('A menina que roubava livros')
         cy.get('#results-count').should('contain.text', 'Exibindo 1 de 1 livro')
    });

   
    it.only('Adição ao Carrinho', () => {
        cy.visit('http://localhost:3000/catalog.html')
        cy.get(':nth-child(1) > .card > .card-body')
            cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
            cy.get('.alert-success').should('be.visible')
      
        cy.get(':nth-child(2) > .nav-link').click()
    cy.get('.card-body > .row')
    
    });
});

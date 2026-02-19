import { faker } from '@faker-js/faker';
//TESTES DE REGISTRO COM SUCESSO 
describe('Funcionalidade Registro', () => {
    it('Registro Válido', () => {
        cy.visit('http://localhost:3000/register.html')

        cy.get('#name').type('Usuario Teste')
        cy.get('#email').type(faker.internet.email())
        cy.get('#password').type('senha_segura123')
        cy.get('#phone').type(faker.phone.number('##########'))
        cy.get('#confirm-password').type('senha_segura123')
       cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', '/dashboard.html')
    });
it('Registro Inválido - Senhas Não Correspondem', () => {
    cy.visit('http://localhost:3000/register.html')

    cy.get('#name').type('Usuario Teste')
    cy.get('#email').type(faker.internet.email())
    cy.get('#password').type('senha_segura123')
    cy.get('#confirm-password').type('senha_diferente123')
   cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
  cy.get(':nth-child(5) > .invalid-feedback').should('be.visible')
});
it('Registro Inválido - Email Já Cadastrado', () => {
    cy.visit('http://localhost:3000/register.html')
    cy.get('#name').type('Usuario Teste')
    cy.get('#email').type('usuario_teste@example.com')
    cy.get('#password').type('senha_segura123')
    cy.get('#confirm-password').type('senha_segura123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
  cy.get('#alert-container').should('be.visible')
});
});
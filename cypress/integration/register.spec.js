/// <reference types="cypress" />

context('Register', () => {
    beforeEach(() => {
        cy.visit('localhost:4200/register')
        sessionStorage.removeItem('user');
    })
    it('Sign up', () => {
        cy.get('#email').type('prova').should('have.value', 'prova');
        cy.get('#username').type('prova').should('have.value', 'prova');
        cy.get('#password').type('prova').should('have.value', 'prova');
        cy.get('#submit').click();
        // cy.server();
        // cy.route('GET', 'http://localhost:3000/user').as('LoginCall');
        cy.get('.title').should('have.text', "Benvenuto su CalcioStore");
    })
})
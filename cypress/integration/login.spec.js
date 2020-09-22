/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('localhost:4200')
        sessionStorage.removeItem('user');
    })
    it('Login success', () => {
        cy.get('#email').type('luca').should('have.value', 'luca');
        cy.get('#password').type('123').should('have.value', '123');
        cy.get('#submit').click();
        // cy.server();
        // cy.route('GET', 'http://localhost:3000/user').as('LoginCall');
        cy.get('.title').should('have.text', "Benvenuto su CalcioStore");
    })
    it('Login fail', () => {
        cy.get('#email').type('fail').should('have.value', 'fail');
        cy.get('#password').type('fail').should('have.value', 'fail');
        cy.get('#submit').click();
        cy.get('#error').should('have.text', 'Mail o password errate')
    })
})
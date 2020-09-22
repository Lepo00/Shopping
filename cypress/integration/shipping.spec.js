/// <reference types="cypress" />

context('Shipping', () => {
    beforeEach(() => {})
    it('Sign up with shipping saved', () => {
        sessionStorage.setItem('user', JSON.stringify({
            email: "prova",
            id: 1,
            password: "prova",
            shipping: {
                address: "Via di prova",
                cap: "23456",
                city: "prova",
                info: null,
                name: "prova",
                number: "12",
                phone: "3456789021",
                surname: "prova",
                username: "prova"
            },
            username: "prova"
        }));
        cy.visit('localhost:4200/shipping');
        cy.get('#name').should('have.value', 'prova');
        cy.get('#surname').should('have.value', 'prova');
        cy.get('#phone').should('have.value', '3456789021');
        cy.get('#city').should('have.value', 'prova');
        cy.get('#cap').should('have.value', '23456');
        cy.get('#address').should('have.value', 'Via di prova');
        cy.get('#num').should('have.value', '12');
        cy.get('#info').should('have.value', '');
        cy.get('#submit').click();
        cy.get('.title').should('have.text', "Checkout");
    })
    it('Sign up without shipping', () => {
        sessionStorage.setItem('user', JSON.stringify({
            email: "prova",
            id: 1,
            password: "prova",
            shipping: null,
            username: "prova"
        }));
        cy.visit('localhost:4200/shipping');
        cy.get('#name').should('have.value', '');
        cy.get('#surname').should('have.value', '');
        cy.get('#phone').should('have.value', '');
        cy.get('#city').should('have.value', '');
        cy.get('#cap').should('have.value', '');
        cy.get('#address').should('have.value', '');
        cy.get('#num').should('have.value', '');
        cy.get('#info').should('have.value', '');
    })
})
/// <reference types="cypress" />

context('Shipping', () => {
    beforeEach(() => {})
    it('Sign up with payment saved', () => {
        sessionStorage.setItem('user', JSON.stringify({
            email: "prova2",
            id: 1,
            password: "prova2",
            shipping: {
                address: "Via di prova2",
                cap: "23456",
                city: "prova2",
                info: null,
                name: "prova2",
                number: "12",
                phone: "3456789021",
                surname: "prova2",
                username: "prova2"
            },
            username: "prova2",
            payment: { method: "carta di debito", type: "mastercard", number: "1234 1234 1234 1234", cvv: "666" }
        }));
        cy.visit('localhost:4200/checkout');
        cy.get('.div10').should('have.text', 'prova2 prova2');
        cy.get('#method').should('have.value', 'carta di debito');
        cy.get('#type').should('have.value', 'mastercard');
        cy.get('#num').should('have.value', '1234 1234 1234 1234');
        cy.get('#cvv').should('have.value', '666');
        cy.get('#submit').click();
        cy.get('h1').should('have.text', 'Acquisto effettuato con successo');
        cy.get('.title').should('have.text', "Checkout");
    })

    it('Sign up without payment', () => {
        sessionStorage.setItem('user', JSON.stringify({
            email: "prova",
            id: 1,
            password: "prova",
            shipping: null,
            username: "prova",
            shipping: {
                address: "Via di prova2",
                cap: "23456",
                city: "prova2",
                info: null,
                name: "prova2",
                number: "12",
                phone: "3456789021",
                surname: "prova2",
                username: "prova2"
            }
        }));
        cy.visit('localhost:4200/checkout');
        cy.get('.div10').should('have.text', 'prova2 prova2');
        cy.get('#method').should('have.value', null);
        cy.get('#type').should('have.value', null);
        cy.get('#num').should('have.value', '');
        cy.get('#cvv').should('have.value', '');
    })
})
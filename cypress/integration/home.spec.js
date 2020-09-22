/// <reference types="cypress" />

context('Home', () => {
    beforeEach(() => {
        cy.visit('localhost:4200/home')
        sessionStorage.setItem('user', 'logged');
    })
    it('Home button customize 0', () => {
        cy.get('.title').should('have.text', "Benvenuto su CalcioStore");
        cy.get('#cust').click();
        cy.get('p.title').should('have.text', "Personalizza");
        cy.get('.button-label h1').first().should('have.text', 'inter');
    })
    it('Home button customize 1', () => {
        cy.get('.title').should('have.text', "Benvenuto su CalcioStore");
        cy.get('.carousel-control-next').click();
        cy.get('#cust').click();
        cy.get('p.title').should('have.text', "Personalizza");
        cy.get('.button-label h1').first().should('have.text', 'bayern');
    })
    it('Home button customize 2', () => {
        cy.get('.title').should('have.text', "Benvenuto su CalcioStore");
        cy.get('.carousel-control-next').click();
        cy.get('.carousel-control-next').click();
        cy.get('#cust').click();
        cy.get('p.title').should('have.text', "Personalizza");
        cy.get('.button-label h1').first().should('have.text', 'barça');
    })
    it('Home button customize 3', () => {
        cy.get('.title').should('have.text', "Benvenuto su CalcioStore");
        cy.get('.carousel-control-next').click();
        cy.get('.carousel-control-next').click();
        cy.get('.carousel-control-next').click();
        cy.get('#cust').click();
        cy.get('p.title').should('have.text', "Personalizza");
        cy.get('.button-label h1').first().should('have.text', 'psg');
    })
})
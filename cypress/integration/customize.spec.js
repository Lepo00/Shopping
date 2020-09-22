/// <reference types="cypress" />

context('Customize', () => {
    beforeEach(() => {
        cy.visit('localhost:4200/customize/0');
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
    })
    it('add to cart', () => {
        cy.get('p.title').should('have.text', "Personalizza");
        cy.get('.button-label').first().click();
        cy.get('.product-img img').invoke('attr', 'src').should('have.string', '../../../assets/img/inter.jpeg');
        cy.get('#check').click();
        cy.get('#inp').type('eriksen').should('have.value', 'eriksen');
        cy.get('#trasf').click();
        //cy.get('#dis').should('have.class', 'disabled');
        cy.get('#submit').click();
        cy.get('p.title').should('have.text', "Personalizza");
    })

    it('reset', () => {
        cy.get('#reset').click();
        cy.get('.button-label').should('have.value', '');
        cy.get('#check').should('have.value', 'on');
        cy.get('.button-label-2').should('have.value', '');
        cy.get('#dis').should('have.class', 'disabled');
        cy.get('p.title').should('have.text', "Personalizza");
    })
})
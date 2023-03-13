// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (userName, password) => {
    cy.visit('https://demoqa.com/login')
    cy.get('#userName').type(userName)
    cy.get('#password').type(password)
    cy.get('#login').click()
    cy.url().should('include', '/profile')
})

Cypress.Commands.add('logout', () => {
    cy.get('#submit').click({force:true})
    cy.url().should('include', '/login')
})
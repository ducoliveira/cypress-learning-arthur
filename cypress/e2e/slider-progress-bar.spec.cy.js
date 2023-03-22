/// <reference types = "cypress" />

describe('Slider automation test', () => {

    Cypress.on("uncaught:exception", () => {
        return false
    })

    it('Change the slider value', () => {

        cy.visit('https://demoqa.com/slider')

        cy.get('.range-slider.range-slider--primary').as('range').invoke('val', 90).trigger('change')

        // cy.get('@sliderButton').trigger('mousedown', {button: 0})

        // cy.get('@sliderButton').trigger('mousemove', {clientX: 484})

        // cy.get('@sliderButton').trigger('mouseup')


    })

    it('Check the progress bar', () => {

        cy.visit('https://demoqa.com/progress-bar')

        // Verifica que a barra de progresso está zerada
        cy.get('.progress-bar.bg-info').should('have.attr', 'aria-valuenow', '0')

        // Inicia a barra de progresso
        cy.get('#startStopButton').should('have.text', 'Start').click()

        // Espera até que a barra de progresso chegue em 70%
        cy.wait(4000)
        cy.get('.progress-bar.bg-info').should('have.attr', 'aria-valuenow', '70')

        // Verifica se a barra chegou em 100%
        cy.get('.progress-bar.bg-success').should('have.attr', 'aria-valuenow', '100')

        // Verifica se o botão reset está disponível e reseta a contagem
        cy.get('#resetButton').should('have.text', 'Reset').click()

    })

})
/// <reference types="cypress" />

describe('Download test', () => {

    Cypress.on("uncaught:exception", (e, runnable) => {
        return false
    })

    it.skip('Download the archive and verify if it exists', () => {

        cy.visit('https://demoqa.com/upload-download')
    
        cy.get('#downloadButton').click()
    
        cy.wait(2000)

        cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist')
    })

    it.skip('Delete the downloaded archive if it exists', () => {

        cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist')
        
        cy.exec('rm cypress/downloads/sampleFile.jpeg')

    })

    it('Validate the text of a .txt file', () => {

        cy.readFile('cypress/archives/test.txt').then((archive) => {

            expect(archive).to.contain('Validation text')
            
        })
    })

})
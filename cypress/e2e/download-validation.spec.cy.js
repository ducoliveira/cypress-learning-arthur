/// <reference types="cypress" />

describe('Download test', () => {

    Cypress.on("uncaught:exception", (e, runnable) => {
        return false
    })
    
    before('Verify if the archive exists and then delete it', () => {

        const filepath = 'cypress/downloads/sampleFile.jpeg'

        cy.exec('rm cypress/downloads/sampleFile.jpeg')
        cy.readFile(filepath).should('not.exist')

    })

    it('Download the archive and verify if it exists', () => {

        cy.visit('https://demoqa.com/upload-download')
    
        cy.get('#downloadButton').click()
    
        cy.wait(2000)

        cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist')

    })

    it('Validate the text of a .txt file and writes on it', () => {

        cy.readFile('cypress/archives/test.txt')
          .should('contain', 'Validation text')

        cy.writeFile('cypress/archives/test.txt', '\nWriting test', { flag: 'a+'})
        cy.readFile('cypress/archives/test.txt')
          .should('contain', 'Writing test')

    })

})
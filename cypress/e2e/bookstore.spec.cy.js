/// <reference types="cypress" />

// Importa as ações do bookStore
import bookStore from "../support/BookStoreObjects/bookStore"

describe('BookStore Aplication tests', () => {
    
    const bookstore = new bookStore()

    Cypress.on("uncaught:exception", (e, runnable) => {
        return false
    })

    beforeEach('Login', () => {
        // Carrega o json com login e senha
        cy.fixture('bookstore').then((bookstore) => {
            var userName = bookstore.userName
            var password = bookstore.password
            // Usa a função criada no commands para fazer o login
            cy.login(userName, password)
        })
    })

    afterEach('Logout', () => {
        // Faz o logout do site
        cy.logout()
    })

    it('Add a book to the collection', () => {
        
        bookstore.addToCollection('Git', 2)

    })

    it('Delete a book form the collection', () => {
        
        bookstore.deleteFromCollection('Git')

        bookstore.checkEmptyTable()

    })

    it('Delete multiple books from the collection', () => {

        bookstore.addToCollection('Git', 2)
        bookstore.addToCollection('Learning JavaScript', 2)
        bookstore.addToCollection('Programming JavaScript', 2)

        bookstore.deleteFromCollection('Learning JavaScript')
        bookstore.deleteFromCollection('Programming JavaScript')
        bookstore.deleteFromCollection('Git')

        bookstore.checkEmptyTable()

    })

    it('Verify if the "Delete all books" button is working properly', () => {
        
        bookstore.addToCollection('Git', 2)
        bookstore.addToCollection('Learning JavaScript', 2)
        bookstore.addToCollection('Programming JavaScript', 2)

        bookstore.deleteAllBooks()

        bookstore.checkEmptyTable()
    })

})
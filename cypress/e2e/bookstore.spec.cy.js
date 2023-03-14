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
        
        bookstore.addToCollection('Git')
        
        // const lists = new Lists()
        // const tables = new Tables()

        // // Vai para a loja
        // cy.get('#gotoStore').click()
        // cy.wait(2000)

        // // Encontra o elemento que contém "git" e clica nele
        // lists.clickElement('.rt-table', '.action-buttons', 'Git')
        // cy.wait(2000)

        // // Adiciona o elemento à coleção
        // cy.get('.text-right > #addNewRecordButton').click({force:true})
        // cy.on('window:alert',(txt)=>{
        //     expect(txt).to.contains('Book added')
        // })
        // cy.wait(2000)

        // // Volta ao perfil
        // cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click()

        // // Verifica se o elemento foi adicionado
        // tables.findCellInRowByPosition('.rt-table', '.rt-tr-group', '.rt-td', 2, 'Git')
        //       .should('contain', 'Git')

    })

    it('Delete a book form the collection', () => {
        
        bookstore.deleteFromCollection('Git')

        // const tables = new Tables()
        
        // cy.wait(2000)
        // // Clica no elemento específico da lista do elemento com o texto "Git"
        // tables.findCellInRowByPosition('.rt-table', '.rt-tr-group', '.rt-td', 5, 'Git')
        //       .find('#delete-record-undefined').click()
        // cy.wait(2000)

        // // Clica no "Ok" da janela de confirmação
        // cy.get('#closeSmallModal-ok').click()

        // // Valida mensagem de que o livro foi deletado
        // cy.on('window:alert',(txt)=>{
        //     expect(txt).to.contains('Book deleted.')
        // })
        // cy.wait(2000)

    })

    it('Add multiple books to the collection', () => {

        bookstore.addToCollection('Git')
        bookstore.addToCollection('Learning JavaScript')
        bookstore.addToCollection('Programming JavaScript')

    })

    it('Delete multiple books from the collection', () => {

        bookstore.deleteFromCollection('Learning JavaScript')
        bookstore.deleteFromCollection('Programming JavaScript')
        bookstore.deleteFromCollection('Git')

    })



})
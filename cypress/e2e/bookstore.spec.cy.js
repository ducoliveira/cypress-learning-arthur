/// <reference types="cypress" />

// Importa as funções de tabelas
import Lists from "../support/lists"
import Tables from "../support/tables"

describe('BookStore Aplication tests', () => {

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

    it('Add an item to the cart', () => {
        const lists = new Lists()
        const tables = new Tables()

        // Vai para a loja
        cy.get('#gotoStore').click()
        cy.wait(2000)

        // Encontra o elemento que contém "git" e clica nele
        lists.clickElement('.rt-table', '.action-buttons', 'Git')
        cy.wait(2000)

        // Adiciona o elemento à coleção
        cy.get('.text-right > #addNewRecordButton').click({force:true})
        cy.wait(2000)

        // Volta ao perfil
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click()

        // Verifica se o elemento foi adicionado
        tables.assertElement('.rt-table', '.rt-tr-group', '.rt-td', 2, 'Git')
    })

    it('Exclude an item form the cart', () => {
        const tables = new Tables()
        
        cy.wait(2000)
        // Clica no elemento específico da lista do elemento com o texto "Git"
        tables.clickSpecific('.rt-table', '.rt-tr-group', '.rt-td', 5, 'Git', '#delete-record-undefined')
        cy.wait(2000)

        // Clica no "Ok" da janela de confirmação
        cy.get('#closeSmallModal-ok').click()

        // Valida mensagem de que o livro foi deletado
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Book deleted.')
        })
        cy.wait(2000)
    })



})
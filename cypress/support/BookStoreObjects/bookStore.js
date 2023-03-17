import commonObjects from "../commonObjects";

// Classe BookStore que irá conter as ações dos testes
class bookStore extends commonObjects{

    // Cria os locators
    locators = {
            table : '.rt-table',
            row : '.rt-tr-group',
            column: '.rt-td',
            element : '.action-buttons',
            delete : '#delete-record-undefined',
            addBook: '.text-right > #addNewRecordButton',
            profile: ':nth-child(6) > .element-list > .menu-list > #item-3',
            modalOk: '#closeSmallModal-ok',
            deleteAll: '.buttonWrap > .text-right > #submit'
    }

    // Método para adicionar itens ao carrinho passando apenas o texto
    addToCollection(text, position){
        
        // Vai para a loja
        cy.get('#gotoStore').click()
        cy.wait(1000)
        
        // Encontra o elemento que contém o texto e clica nele
        this.lists.clickElement(this.locators.table, this.locators.element, text)
        cy.wait(1000)

        // Adiciona o elemento à coleção
        cy.get(this.locators.addBook).click({force:true})
        cy.wait(1000)

        // Volta ao perfil
        cy.get(this.locators.profile).click()

        // Verifica se o elemento foi adicionado
        this.tables.findCellInRowByPosition(this.locators.table, this.locators.row, this.locators.column, position, text).should('contain', text)
    }

    deleteFromCollection(text){
        
        cy.wait(1000)
        // Encontra elemento específico da lista do elemento com o texto
        this.tables.findCellInRowByPosition(this.locators.table, this.locators.row, this.locators.column, 5, text)
              .find(this.locators.delete).click()
        cy.wait(1000)

        // Clica no "Ok" da janela de confirmação
        cy.get(this.locators.modalOk).click()

        this.checkBook(text)
        
        cy.reload()
        cy.wait(1000)

    }

    deleteAllBooks(){
        // Clica no botão "Delete all books"
        cy.get(this.locators.deleteAll).click({force:true})
        // Fecha o modal clicando no "OK"
        cy.get(this.locators.modalOk).click()
    }

    checkEmptyTable(){
        // Checa se a tabela está vazia
        cy.get('.rt-noData').should('be.visible')
    }

    checkBook(text){
        // Checa se o livro está na coleção
        cy.get(this.locators.table).should('not.contain', text)
    }

}

    export default bookStore
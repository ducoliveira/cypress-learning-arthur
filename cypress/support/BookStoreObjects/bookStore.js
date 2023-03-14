import commonObjects from "../commonObjects";

// Classe BookStore que irá conter as ações dos testes
class bookStore extends commonObjects{

    // Construtor para inicializar o commonObjects e criar os locators
    constructor () {
        // Chamada super() para poder usar as classes filhas
        super()
        // Inicia o commonObjects
        this.commonobjects = new commonObjects()
        // Cria os locators
        this.locators = {
            table : '.rt-table',
            row : '.rt-tr-group',
            column: '.rt-td',
            element : '.action-buttons',
            delete : '#delete-record-undefined',
            addBook: '.text-right > #addNewRecordButton',
            profile: ':nth-child(6) > .element-list > .menu-list > #item-3',
            popUpOk: '#closeSmallModal-ok'
        }
    }

    // Método para adicionar itens ao carrinho passando apenas o texto
    addToCollection(text, position){
        
        // Vai para a loja
        cy.get('#gotoStore').click()
        cy.wait(1000)
        
        // Encontra o elemento que contém o texto e clica nele
        this.commonobjects.lists.clickElement(this.locators.table, this.locators.element, text)
        cy.wait(1000)

        // Adiciona o elemento à coleção
        cy.get(this.locators.addBook).click({force:true})
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Book added')
        })
        cy.wait(1000)

        // Volta ao perfil
        cy.get(this.locators.profile).click()

        // Verifica se o elemento foi adicionado
        this.commonobjects.tables.findCellInRowByPosition(this.locators.table, this.locators.row, this.locators.column, position, text).should('contain', text)
    }

    deleteFromCollection(text){
        
        cy.wait(1000)
        // Encontra elemento específico da lista do elemento com o texto
        this.commonobjects.tables.findCellInRowByPosition(this.locators.table, this.locators.row, this.locators.column, 5, text)
              .find(this.locators.delete).click()
        cy.wait(1000)

        // Clica no "Ok" da janela de confirmação
        cy.get(this.locators.popUpOk).click()

        // Valida mensagem de que o livro foi deletado
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Book deleted.')
        })
        cy.wait(1000)

    }


}

    export default bookStore
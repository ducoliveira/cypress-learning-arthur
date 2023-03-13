class Tables{
    
    /// Constructor com os locators vazios
    constructor(){
        this.tableLocator = ''
        this.rowLocator = ''
        this.columnLocator = ''
        this.columnPosition = ''
    }
    
    /// Método para nomear os locators
    setLocators(tableLocator, rowLocator, columnLocator, columnPosition){
        this.tableLocator = tableLocator
        this.rowLocator = rowLocator
        this.columnLocator = columnLocator
        this.columnPosition = columnPosition
    }
    
    /// Função para clicar no elemento
    clickElement(locator, row, column, position, text){
        this.findCellInRowByPosition(locator, row, column, position, text).click()
    }

    // Função de validação
    assertElement(locator, row, column, position, text){
        this.findCellInRowByPosition(locator, row, column, position, text).should('contain', text)
    }
    
    /// Funçao que encontra o texto na coluna e retorna a linha com o texto
    findRowByText(locator, row, column, text){
        return cy.get(locator)
                 .find(row)
                 .contains(column, text)
                 .parent()
    }
    
    /// Função que seleciona a célula retornada pela findRowByText
    findCellInRowByPosition(locator, row, column, position, text){
        return this.findRowByText(locator, row, column, text).find(column).eq(position - 1)
    }

    // Função para clicar em um elemento específico na posição desejada
    clickSpecific(locator, row, column, position, text, specific){
        this.findCellInRowByPosition(locator, row, column, position, text).find(specific).click()
    }
    
}
    export default Tables
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
    clickTable(locator, row, column, position, text){
        this.findByPosition(locator, row, column, position, text).click()
    }
    /// Clone para testes
    clickElement(locator, row, column, position, text){
        this.findCellInRowByPosition(locator, row, column, position, text).click()
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
    
    /// Função teste para encontrar o texto presente na coluna
    findByPosition(locator, row, column, position, text){
        return cy.get(locator)
                 .find(row)
                 .find(`${column}:nth-child(${position})`)
                 .contains(text)
    }

}
    export default Tables
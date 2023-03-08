class Tables{
    
    clickTable(locator, element, column, position, text){
        this.findCellInRowByPosition(locator, element, column, position, text).click()
    }

    findRowByText(locator, element, column, text){
        return cy.get(locator)
                 .find(element)
                 .contains(column, text)
                 .parent()
    }

    findCellInRowByPosition(locator, element, column, position, text){
        return this.findRowByText(locator, element, column, text).find(column).eq(position - 1)
    }
}

    export default Tables
    
    // findTable(locator, element, column, text){
    //     return cy.get(locator)
    //              .find(element)
    //              .find(column)
    //              .contains(text)
    // }
/*
class Lists{
    
    
    clickElement(list, element, text){
        cy.get(list)
          .find(element)
          this.findElement(list, text).click()
        
    }

    findElement(list, text){
        return cy.get(list).contains(text)
    }
}

    export default Lists

*/

class Lists{
    
    clickElement(list, element, text){
        this.findElement(list, element, text).click()
    }

    findElement(list, element, text){
        return cy.get(list).contains(element, text)
    }

    clickPosition(list, element, index){
        this.findPosition(list, element, index).click()
    }

    findPosition(list, element, index){
        return cy.get(list).find(element).eq(index)
    }
    
}

export default Lists


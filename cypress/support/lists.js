class Lists{
    
    // Clica no elemento com base no seu texto
    clickElement(list, element, text){
        this.findElement(list, element, text).click()
    }
    // Encontra o elemento com base no seu texto
    findElement(list, element, text){
        return cy.get(list).contains(element, text)
    }
    // Clica no elemento com base na sua posição
    clickPosition(list, element, index){
        this.findPosition(list, element, index).click()
    }
    // Encontra a posição do elemento
    findPosition(list, element, index){
        return cy.get(list).find(element).eq(index)
    }
    
}

export default Lists


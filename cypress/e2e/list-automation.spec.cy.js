/// <reference types = "cypress" /> 

import Lists from "../support/lists"
import Tables from "../support/tables"

describe('List automation', () => {

  Cypress.on("uncaught:exception", (e, runnable) => {
    return false
  })
  
  it.skip('Click on the element based on its text', () => {

    const lists = new Lists()
    
    cy.visit('https://demoqa.com/selectable')

    lists.clickElement('#verticalListContainer', 'li', 'Morbi leo risus')

    lists.clickPosition('#verticalListContainer', 'li', '0')

    cy.get('#demo-tab-grid').click()

    lists.clickElement('#gridContainer', 'li', 'Seven')

    lists.clickPosition('#gridContainer', 'li', '0')

    lists.clickPosition('#gridContainer', 'li', '5')

    lists.clickPosition('#gridContainer', 'li', '8')

  })

  it ('Find the desired name on the table', () => {

    const tables = new Tables()

    cy.visit('https://demoqa.com/webtables')

    tables.clickTable('.rt-table', '.rt-tr', '.rt-td', 2, 'Gentry')

  })

})
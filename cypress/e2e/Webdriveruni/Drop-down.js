/// <reference types = "Cypress" />

describe('Interact dropdown lists via webdriver uni', () => {
  it('Select specific values via select drop down list', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })
    //we can also select value and text from the given drop down
    cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#')
    cy.get('#dropdowm-menu-2').as('dropdown2')
    cy.get('@dropdown2').select('testng')
    cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

    cy.get('@dropdown2').select('maven').should('have.value', 'maven')
    cy.get('@dropdown2').select('TestNG').contains('TestNG')
  })
})

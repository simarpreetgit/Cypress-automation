/// <reference types = "Cypress" />

describe('Verify checkboxes via webdriver uni', () => {
  it('Check and validate checkbox', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    //cy.get('[type="checkbox"]').check()
    cy.get('#checkboxes > :nth-child(n) > input').check().should('be.checked')

    cy.get('#checkboxes > :nth-child(n) > input')
      .uncheck()
      .should('not.be.checked')
  })

  it('validate Check and uncheck checkbox', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    //cy.get('[type="checkbox"]').check()
    cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')
  })

  it.only('Check Mulitiple checkboxs', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('[type="checkbox"]').check().should('be.checked')
  })
})

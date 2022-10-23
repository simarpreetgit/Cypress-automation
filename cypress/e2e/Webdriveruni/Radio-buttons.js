/// <reference types = "Cypress" />

describe('Verify checkboxes via webdriver uni', () => {
  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })
  })

  it('Check and validate checkbox', () => {
    // using value
    //cy.get('[type="radio"]').check('blue')
    // using first function
    cy.get('#radio-buttons')
      .find('[type="radio"]')
      .first()
      .check()
      .should('be.checked')
    // using index select radio
    cy.get('#radio-buttons')
      .find('[type="radio"]')
      .eq(1)
      .check()
      .should('be.checked')
  })

  it('Validates the states of specific radio buttons', () => {
    cy.get('[value="lettuce"]').should('be.enabled')

    cy.get('[value="lettuce"]').should('not.be.checked')
    cy.get('[value="pumpkin"]').should('be.checked')
    cy.get('[value="cabbage"]').should('be.disabled')

    cy.get('[value="lettuce"]').check().should('be.checked')
  })
})

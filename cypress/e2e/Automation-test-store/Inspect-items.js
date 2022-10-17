/// <reference types="Cypress-xpath" />

describe('Inspect the automation test store using chain commmand ', () => {
  it('Click on the first item using text', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.prdocutname')
      .contains('Skinsheen Bronzer Stick')
      .click()
      .then(function (itemHeaderText) {
        cy.log('selcted item' + ' ' + itemHeaderText.text())
      })
  })
  it('Click on the first item using index', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.fixed_wrapper')
      .find('.prdocutname')
      .eq(0)
      .click()
      .then((itemHeaderText) => {
        console.log('selected item: ' + ' ' + itemHeaderText.text())
      })
    cy.wait(2000)
    cy.log('Test ends here')
  })
})

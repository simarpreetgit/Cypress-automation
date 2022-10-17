/// <reference types = "Cypress" />

describe('Handling Iframes And Models', () => {
  it('handle webdriver uni iframe and uni', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#iframe').invoke('removeAttr', 'target').click()
    cy.get('#frame').then(($iframe) => {
      const body = $iframe.contents().find('body')
      cy.wrap(body).as('iframe')
    })

    cy.get('@iframe').find('#button-find-out-more').click()

    cy.get('@iframe').find('#myModal').as('model')
    cy.get('@model').should(($expectedText) => {
      const text = $expectedText.text()
      expect(text).to.include(
        'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...',
      )
    })
    cy.get('@model').contains('Close').click()
  })
})

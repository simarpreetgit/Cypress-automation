/// <reference types="Cypress" />

describe('Adds multiple items to basket', () => {
  before(() => {
    cy.fixture('products').then((data) => {
      globalThis.data = data
    })
  })
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
  })

  it('Add specific item to basket', () => {
    globalThis.data.productName.forEach((element) => {
      cy.addToBasket(element)
    })
  })
})

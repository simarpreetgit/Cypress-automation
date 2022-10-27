/// <reference types="Cypress" />

describe('Iterate over elements', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']")
      .contains('Hair Care')
      .click({ force: true })
  })
  it('log info of all hair care products', () => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log('Index' + index + ' : ' + $el.text())
    })
  })

  it('add specific product to basket', () => {
    // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    //   if ($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
    //     cy.wrap($el).click()
    //   }
    // })

    // custom commmands
    cy.selectProduct('Eau Parfumee au The Vert Shampoo')
  })

  it('add specific product to basket', () => {
    cy.selectProduct('Seaweed Conditioner')
  })
  it('add specific product to basket', () => {
    cy.selectProduct('Curls to straight Shampoo')
  })
})

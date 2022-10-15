/// <reference types="Cypress" />

describe('Iterate over elements', () => {
  it('log info of all hair care products', () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log('Index' + index + ' : ' + $el.text())
    })
  })

  it('add specific product to basket', () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      if ($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
        cy.wrap($el).click()
      }
    })
  })
})

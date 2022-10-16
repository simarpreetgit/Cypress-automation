/// <reference types="Cypress" />

describe('Alias and invoke', () => {
  it('Validate a specific hair care product', () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

    cy.get('.fixed_wrapper .prdocutname')
      .eq(0)
      .invoke('text')
      .as('productThumbnail')
    cy.get('@productThumbnail').its('length').should('be.gt', 5)
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
  })

  it.only('Validate the home page with add to cart', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('homethumbnail')
    cy.get('@homethumbnail').should('have.length', 16)
    cy.get('@homethumbnail')
      .find('.productcart')
      .invoke('attr', 'title')
      .should('include', 'Add to Cart')
  })
})

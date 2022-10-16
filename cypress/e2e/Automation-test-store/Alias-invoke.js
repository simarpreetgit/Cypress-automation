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

  it('Validate the home page with add to cart', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('homethumbnail')
    cy.get('@homethumbnail').should('have.length', 16)
    cy.get('@homethumbnail')
      .find('.productcart')
      .invoke('attr', 'title')
      .should('include', 'Add to Cart')
  })

  it.only('Validate the home page with add to cart', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('homethumbnail')
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    var itemsTotal = 0
    cy.get('@itemPrice').then(($linkText) => {
      var itemPrice = $linkText.split('$')
      var itemPriceTotal = 0
      for (var i = 1; i < itemPrice.length; i++) {
        cy.log(itemPrice[i])
        itemPriceTotal += Number(itemPrice[i])
      }
      itemsTotal += itemPriceTotal
      cy.log('Non sale item price total' + ' ' + itemPriceTotal)
    })

    cy.get('@saleItemPrice')
      .then(($linkText) => {
        var saleItemPrice = $linkText.split('$')
        var saleItemPriceTotal = 0
        var count = 0
        for (var i = 1; i < saleItemPrice.length; i++) {
          count++
          cy.log(saleItemPrice[i])
          saleItemPriceTotal += Number(saleItemPrice[i])
        }
        count += 1
        itemsTotal += saleItemPriceTotal
        cy.log('sale item price total' + ' ' + saleItemPriceTotal + ' ' + count)
      })
      .then(() => {
        cy.log('The total of both the prices are' + ' ' + itemsTotal)
        expect(itemsTotal).to.eq(676.1)
      })
  })
})

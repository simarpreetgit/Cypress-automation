/// <reference types="Cypress" />

describe('Iterate over elements', () => {
  it('log info of all hair care products', () => {
    cy.visit('https://singh-restro.netlify.app/')
    cy.get('.card-body .card-title').each(($el, index, $list) => {
      cy.log('Index' + index + ' : ' + $el.text())
    })
  })
  it('log info of all hair care products', () => {
    cy.visit('https://badshah-altlandsberg.de/en/menu/613')
    cy.get("li[id='543770'] .bg-t1-primary-2").click()
  })

  it.only('log info of all hair care products', () => {
    cy.visit('https://singh-restro.netlify.app/')
    cy.contains('.card-body', 'Cheese Burger').find('.btn').click()
    cy.get('.swal-text').should(
      'have.text',
      'Your Cheese Burger added to cart!',
    )
  })
})

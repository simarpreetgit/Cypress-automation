/// <reference types = "Cypress" />

describe('Test mouse actions via webdriver uni', () => {
  it('Scroll elemenzs into view', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true })
  })

  it('It should be able to drag and drop a draggable items', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#draggable').trigger('mousedown', { which: 1 })

    cy.get('#droppable')
      .trigger('mousemove')
      .trigger('mouseup', { force: true })
  })

  it('It should be able to perform double mouse click', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#double-click').trigger('dblclick')
  })

  it('ir should be able to hold down left mouse click button on a given element', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#click-box')
      .trigger('mousedown', { which: 1 })
      .then(($element) => {
        expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
      })
  })

  //   it.only('ir should be able to hold down left mouse click button on a given element', () => {
  //     cy.visit('http://www.webdriveruniversity.com/')
  //     cy.get('#actions')
  //       .scrollIntoView()
  //       .invoke('removeAttr', 'target')
  //       .click({ force: true })

  //     cy.contains('Hover Over Me First!').trigger('mouseover')
  //     cy.get('.list-alert').trigger('click')
  //   })
})

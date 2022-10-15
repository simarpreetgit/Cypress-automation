/// <reference types="Cypress-xpath" />

describe('Verify variables,cypress command and jqery  ', () => {
  it('Navigating to specific product pages', () => {
    cy.visit('https://automationteststore.com/')
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains('Makeup')
    makeupLink.click()
    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains('Skincare')

    skincareLink.click()
  })

  it('Navigating to specific product pages', () => {
    cy.visit('https://automationteststore.com/')
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains('Makeup')
    makeupLink.click()
    cy.get('h1 .maintext').then((headerTexts) => {
      const headerText = headerTexts.text()
      cy.log(headerText)
      //asertion how done with varibales
      expect(headerText).is.eq('Makeup')
    })
  })

  it.only('validates of the properties of the contact us page', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact')

    // uses cypress command and chanining
    cy.contains('#ContactUsFrm', 'Contact Us Form')
      .find('#field_11')
      .should('contain', 'First name:')
    // jqery approch
    cy.contains('#ContactUsFrm', 'Contact Us Form').then((text) => {
      const firstNameText = text.find('#field_11').text()
      expect(firstNameText).to.contain('First name')

      // embedded commands (closure)

      cy.get('#field_11').then((Ftext) => {
        cy.log(Ftext.text())
        cy.log(Ftext)
      })
    })
  })
})

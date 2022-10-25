class HomePage_Po {
  visitHomepage() {
    cy.visit(Cypress.env('webdriver_uni'), { timeout: 60000 })
  }
  clickOn_ContactUs_Button() {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
  }
}

export default HomePage_Po

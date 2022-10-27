class Autostore_Homepage_Po {
  accessHomepage() {
    cy.visit('https://automationteststore.com/')
  }

  clickOn_Hair_Care_Link() {
    cy.get("a[href*='product/category&path=']")
      .contains('Hair Care')
      .click({ force: true })
  }
}

export default Autostore_Homepage_Po

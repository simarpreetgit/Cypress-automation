class Autostore_Clickproduct_basket_Po {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach((element) => {
      cy.addToBasket(element).then(() => {
        // debugger
      })
    })
    cy.get('.block_7').click()
  }
}

export default Autostore_Clickproduct_basket_Po

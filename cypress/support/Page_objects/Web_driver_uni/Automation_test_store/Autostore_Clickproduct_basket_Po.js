class Autostore_Clickproduct_basket_Po {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach((element) => {
      cy.addToBasket(element).then(() => {
        // debugger
      })
    })
    cy.get('.block_7').click().debug()
  }
}

export default Autostore_Clickproduct_basket_Po

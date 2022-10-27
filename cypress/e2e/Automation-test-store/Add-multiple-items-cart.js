/// <reference types="Cypress" />
import Autostore_Homepage_Po from '../../support/Page_objects/Web_driver_uni/Automation_test_store/Autostore_Homepage_Po'
import Autostore_Clickproduct_basket_Po from '../../support/Page_objects/Web_driver_uni/Automation_test_store/Autostore_Clickproduct_basket_Po'

describe('Adds multiple items to basket', () => {
  const autoStore_Homepage_Po = new Autostore_Homepage_Po()
  const autostore_Haircare_Po = new Autostore_Clickproduct_basket_Po()

  before(() => {
    cy.fixture('products').then((data) => {
      globalThis.data = data
    })
  })
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
    autoStore_Homepage_Po.accessHomepage()
    autoStore_Homepage_Po.clickOn_Hair_Care_Link()
  })

  it('Add specific item to basket', () => {
    autostore_Haircare_Po.addHairCareProductsToBasket()
  })
})

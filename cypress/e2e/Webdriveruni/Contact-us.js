/// <reference types="cypress" />
import Contact_Us_Po from '../../support/Page_objects/Web_driver_uni/Contact_Us_Po'
import Homepage_Po from '../../support/Page_objects/Web_driver_uni/Homepage_Po'

describe('Test Contact Us form via WebdriverUni', () => {
  const contact_us_po = new Contact_Us_Po()
  const homepage_po = new Homepage_Po()
  before(() => {
    cy.fixture('example').then((data) => {
      //this.data = data
      globalThis.data = data
    })
  })
  beforeEach(() => {
    homepage_po.visitHomepage()
    homepage_po.clickOn_ContactUs_Button()
  })
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.url().should('include', 'contactus')
    contact_us_po.contactForm_Submission(
      Cypress.env('first_name'),
      data.last_name,
      data.email,
      data.body,
      'h1',
      'Thank You for your Message!',
    )

    // cy.webdriverUni_Contact_Sub(
    //   Cypress.env('first_name'),
    //   data.last_name,
    //   data.email,
    //   data.body,
    //   'h1',
    //   'Thank You for your Message!',
    // )
  })

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    contact_us_po.contactForm_Submission(
      Cypress.env('first_name'),
      data.last_name,
      ' ',
      data.body,
      'body',
      'Error: Invalid email address',
    )

    // cy.webdriverUni_Contact_Sub(
    //   Cypress.env('first_name'),
    //   data.last_name,
    //   ' ',
    //   data.body,
    //   'body',
    //   'Error: Invalid email address',
    // )
  })
})

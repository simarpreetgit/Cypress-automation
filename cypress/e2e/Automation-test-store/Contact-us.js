/// <reference types="Cypress-xpath" />

describe('Test contact Us form via automation store', () => {
  it('Should be able to submit a succesful submition of contact us', () => {
    cy.visit('https://automationteststore.com')

    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'A place to practice your automation skills!')
    cy.url().should('include', '')
    cy.xpath("//a[contains(@href ,'contact')]")
      .click()
      .then((Textfromcontact) => {
        cy.log('showing the text:' + Textfromcontact.text())
      })
    cy.get('#ContactUsFrm_first_name').type('helloo')
    cy.get('#ContactUsFrm_email').type('abc@gmail.com')
    cy.get('#ContactUsFrm_enquiry').type(
      'learning from automation from udemy by gianni',
    )
    cy.xpath("//button[contains(@title,'Submit')]").click()
    cy.get('.mb40 > :nth-child(3)').should(
      'have.text',
      'Your enquiry has been successfully sent to the store owner!',
    )
  })
})


/// <reference types="Cypress" />

describe("Test contact Us form via Wbdriver uni",()=>{

    it("Should be able to submit a succesful submition of tablebooking ",()=>{

        // cypress code
  
        cy.visit('https://singh-restro.netlify.app/')
        cy.wait(3000)
        cy.get('.me-auto > .btn').click()
        cy.get('.form-row > :nth-child(1) > .form-control').type('Simarpreet Singh')  
        cy.get(':nth-child(2) > .form-control').type('09099')
        cy.get('#inputmessage4').type('table booking for 2 peron for today')
        //cy.get('.form-row > :nth-child(3) > .btn').click()

    })



})


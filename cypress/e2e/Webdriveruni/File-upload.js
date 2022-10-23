/// <reference types = "Cypress" />
describe('Test file upload via web driver uni', () => {
  it('Upload a file', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })

    cy.get('#myFile').selectFile('cypress/fixtures/Classicburger.jpg')
    cy.get('#submit-button').click()
    cy.on('window:alert', (str) => {
      expect(str).to.eq('Your file has now been uploaded!')
    })
  })

  it('Upload no file', () => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
    cy.get('#submit-button').click()
    cy.on('window:alert', (str) => {
      expect(str).to.eq('You need to select a file to upload!')
    })
  })
})

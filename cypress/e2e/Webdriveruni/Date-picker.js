/// <reference types="Cypress" />

describe('Test date picker via web driver uni', () => {
  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })
  })

  it('Select date from date picker', () => {
    // let date = new Date()
    // date.setDate(date.getDate())
    // cy.log(date.getDate()) // get current day ie 21
    // let date1 = new Date()
    // date1.setDate(date1.getDate() + 5)
    // cy.log(date1.getDate()) // get current day 21 +5
    cy.get('#datepicker').click()
    var date = new Date()
    date.setDate(date.getDate() + 365)

    var futureYear = date.getFullYear()
    var fututeMonth = date.toLocaleString('default', { month: 'long' })
    var futureDay = date.getDate()

    cy.log('future year to select' + futureYear)
    cy.log('future month to select' + fututeMonth)
    cy.log('future day to select' + futureDay)

    function selectMonthAndYear() {
      cy.get('.datepicker-dropdown')
        .find('.datepicker-switch')
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get('.next').first().click()
            selectMonthAndYear()
          }
        })
        .then(() => {
          cy.get('.datepicker-dropdown')
            .find('.datepicker-switch')
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(fututeMonth)) {
                cy.get('.next').first().click()
                selectMonthAndYear()
              }
            })
        })
    }

    function selectFutureDay() {
      cy.get("[class = 'day']").contains(futureDay).click()
    }

    selectMonthAndYear()
    selectFutureDay()
  })
})

/// <reference types="Cypress" />

describe('Hnadling data via web driver uni', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/')
    cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true })
  })
  it('calculate and assert the total of age of all users', () => {
    var userDeatils = []
    let numb = 0
    cy.get('#thumbnail-1 td')
      .each(($el, index, $list) => {
        userDeatils[index] = $el.text()
      })
      .then(() => {
        var i
        for (i = 0; i < userDeatils.length; i++) {
          //cy.log(userDeatils[i])
          if (Number(userDeatils[i])) {
            numb += Number(userDeatils[i])
          }
        }
        cy.log('found total age of ' + numb)
        expect(numb).to.eq(322)
      })
  })

  it.only('Calculate and assert the age of a given user based on last name', () => {
    cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
      // cy.log($el.text())
      const text = $el.text()
      if (text.includes('Woods')) {
        cy.get('#thumbnail-1 tr td:nth-child(2)')
          .eq(index)
          .next()
          .then((age) => {
            cy.log(age.text())
            const userAge = age.text()
            expect(userAge).to.eq('80')
          })
      }
    })
  })
})

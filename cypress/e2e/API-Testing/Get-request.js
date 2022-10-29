/// <reference types = "Cypress" />

describe('Get Request', () => {
  var result
  it('Validate status code of the /entries api', () => {
    result = cy.request('https://api.publicapis.org/entries')
    result.its('status').should('equal', 200)
  })

  it('Validate/ posts api contains the correct keys and values', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.publicapis.org/entries',
      headers: {
        accept: 'application/json',
      },
    }).then((response) => {
      const body = JSON.parse(JSON.stringify(response.body))
      cy.log(body)

      expect(body.entries[0]).has.property('API', 'AdoptAPet')

      expect(body.entries[1]).has.property(
        'Description',
        'Collection of axolotl pictures and facts',
      )

      body.entries.forEach((item) => {
        //cy.log(item)
        expect(item).to.have.all.keys(
          'API',
          'Description',
          'Auth',
          'HTTPS',
          'Cors',
          'Link',
          'Category',
        )
        // cy.log('Author:' + item['author'] + 'title:' + item['title'])
      })
    })
  })
})

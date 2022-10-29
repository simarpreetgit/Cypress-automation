/// <reference types='cypress' />

describe('Json Objects ', () => {
  it('Json Object Examples', () => {
    const exampleOject = { key: 'tim', key1: 'jonny' }
    const exampleArrayOFValues = ['sophie', 'Rose', 'Simar']
    const examArrayOFObjects = [
      {
        key2: 'sukhvinder',
        value: '30',
      },
      {
        key3: 'tintin',
        value: '31',
      },
      {
        key4: 'pinpin',
        value: '30',
      },
    ]
    const user = {
      first_Name: 'simar',
      Middel_Name: 'preet',
      Age: 32,
      Students: [
        {
          first_Name: 'tim',
          Middel_Name: 'blogs',
        },
        {
          first_Name: 'Sarah',
          Middel_Name: 'parker',
        },
      ],
    }
    cy.log(exampleOject['key']) //tim
    cy.log(exampleOject['key1']) // jonny
    cy.log(exampleOject.key1) //jonny

    cy.log(exampleArrayOFValues[0])
    cy.log(exampleArrayOFValues[1])
    cy.log(user.Students[0].Middel_Name)
    cy.log(examArrayOFObjects[0].key2)
  })
})

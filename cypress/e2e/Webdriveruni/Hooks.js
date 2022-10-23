/// <reference types = "Cypress" />

describe('hooks', function () {
  before(function () {
    cy.log('runs once before the all first test in this block before')
  })

  after(function () {
    cy.log('runs once after the all test in this block after')
  })

  beforeEach(function () {
    cy.log('runs before each test in this block Before each')
  })

  afterEach(function () {
    cy.log('runs after each test in this block after each')
  })

  it('Example test1', () => {
    cy.log('example test 1 !')
  })

  it('Example test2', () => {
    cy.log('example test 2 !')
  })
})

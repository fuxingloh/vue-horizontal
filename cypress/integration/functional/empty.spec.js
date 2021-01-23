/// <reference types="cypress" />

describe('empty', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/empty')
  })

  it('should contain only slotted container', () => {
    cy.get('.vue-horizontal').children()
      .should('have.length', 1)
      .should('have.class', 'v-hl-container');
  })
})

/// <reference types="cypress" />

describe('empty', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/empty')
  })

  it('should contain only slotted container', () => {
    cy.get('.vue-horizontal').children()
      .should('have.length', 1)
      .should('have.class', 'v-hl-container');
  })


  it('should match screenshot', function () {
    cy.viewport(1200, 800)
    cy.get('.should-be-empty').toMatchImageSnapshot({
      threshold: 0.001,
    })

    cy.viewport(800, 800)
    cy.get('.should-be-empty').toMatchImageSnapshot({
      threshold: 0.001,
    })

    cy.viewport(600, 600)
    cy.get('.should-be-empty').toMatchImageSnapshot({
      threshold: 0.001,
    })
  });
})

/// <reference types="cypress" />

describe('snapping', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/snapping')
    cy.viewport(1600, 800)
  })

  it('snap-true should snap back', function () {
    cy.get('.btn-100').click();
    cy.wait(1000);
    cy.get('.snap-true .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)
  });

  it('snap-true should snap forward', function () {
    cy.get('.btn-200').click();
    cy.wait(1000);
    cy.get('.snap-true .v-hl-container > :nth-child(2)')
      .should('to.be.left', 100)
  });

  it('snap-true should not snap', function () {
    cy.get('.btn-100').click();
    cy.wait(1000);
    cy.get('.snap-false .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100 - 100)
  });
})

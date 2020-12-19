/// <reference types="cypress" />

describe('snapping', () => {
  beforeEach(() => {
    cy.viewport(1600, 1600)
    cy.visit('http://localhost:8080/snapping')
  });

  ['start', 'end'].forEach(snap => {
    it(`snap-${snap}: should snap back`, function () {
      cy.get('.btn-100').click();
      cy.wait(1000)
      cy.get(`.snap-${snap} .v-hl-container > :nth-child(1)`)
        .should('to.be.left', 100)
    });

    it(`snap-${snap}: should snap forward`, function () {
      cy.get('.btn-200').click();
      cy.get(`.snap-${snap} .v-hl-container > :nth-child(2)`)
        .should('to.be.left', 100)
    });
  });

  it('snap-center: should snap', function () {
    cy.get('.btn-100').click();
    cy.get('.snap-center .v-hl-container > :nth-child(1)')
      .should('to.be.left', -78)
  });

  it('snap-center: should snap back', function () {
    cy.get('.btn-100').click();
    cy.wait(1000)
    cy.get('.btn-0').click();
    cy.wait(1000)
    cy.get('.snap-center .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)
  });

  it('snap-none: should not snap', function () {
    cy.get('.btn-100').click();
    cy.get('.snap-none .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100 - 100)
  });
})

/// <reference types="cypress" />

describe('move', () => {
  beforeEach(() => {
    cy.viewport(1600, 800)
    cy.visit('http://localhost:3000/move')
  })

  it('0.8: next should move 3, prev should move 4', function () {
    cy.get('.move-8 .v-hl-btn-next').click();
    cy.get('.move-8 .v-hl-container > :nth-child(4)')
      .should('to.be.left', 100)

    cy.get('.move-8 .v-hl-btn-next').click();

    cy.get('.move-8 .v-hl-container > :nth-child(7)')
      .should('to.be.left', 100)

    cy.get('.move-8 .v-hl-btn-prev').click();
    cy.get('.move-8 .v-hl-container > :nth-child(3)')
      .should('to.be.left', 100)

    cy.get('.move-8 .v-hl-btn-prev').click();
    cy.get('.move-8 .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)
  });

  it('0.5: next should move 2, prev should move 3', function () {
    cy.get('.move-5 .v-hl-btn-next').click();
    cy.get('.move-5 .v-hl-container > :nth-child(3)')
      .should('to.be.left', 100)

    cy.get('.move-5 .v-hl-btn-next').click();

    cy.get('.move-5 .v-hl-container > :nth-child(5)')
      .should('to.be.left', 100)

    cy.get('.move-5 .v-hl-btn-prev').click();
    cy.get('.move-5 .v-hl-container > :nth-child(3)')
      .should('to.be.left', 100)

    cy.get('.move-5 .v-hl-btn-prev').click();
    cy.get('.move-5 .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)
  });

  it('0.3: next should move 1, prev should move 2', function () {
    cy.get('.move-3 .v-hl-btn-next').click();
    cy.get('.move-3 .v-hl-container > :nth-child(2)')
      .should('to.be.left', 100)

    cy.get('.move-3 .v-hl-btn-next').click();
    cy.get('.move-3 .v-hl-container > :nth-child(3)')
      .should('to.be.left', 100)

    cy.get('.move-3 .v-hl-btn-next').click();
    cy.get('.move-3 .v-hl-container > :nth-child(4)')
      .should('to.be.left', 100)

    cy.get('.move-3 .v-hl-btn-prev').click();
    cy.get('.move-3 .v-hl-container > :nth-child(2)')
      .should('to.be.left', 100)

    cy.get('.move-3 .v-hl-btn-prev').click();
    cy.get('.move-3 .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)
  });
})

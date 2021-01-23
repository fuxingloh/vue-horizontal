/// <reference types="cypress" />

describe('scroll-to-index', () => {
  beforeEach(() => {
    cy.viewport(1600, 800)
    cy.visit('http://localhost:3000/scroll-to-index')
  })

  it('.normal should scroll to index', function () {
    cy.viewport(1200, 800)

    cy.get('.btn-1').click();
    cy.get('.normal .v-hl-container > :nth-child(2)')
      .should('to.be.left', 80)

    cy.get('.btn-3').click();
    cy.get('.normal .v-hl-container > :nth-child(4)')
      .should('to.be.left', 80)

    cy.get('.btn-10').click();
    cy.get('.normal .v-hl-container > :nth-child(11)')
      .should('to.be.left', 80)

    cy.get('.btn-19').click();
    // Go to 19 should not be possible.
    cy.get('.normal .v-hl-container > :nth-child(20)')
      .should('to.not.be.left', 80)

    cy.get('.normal .v-hl-container > :nth-child(17)')
      .should('to.be.left', 80)
  });

  it('.padded should scroll to index', function () {
    cy.viewport(1200, 800)

    cy.get('.btn-1').click();
    cy.get('.padded .v-hl-container > :nth-child(2)')
      .should('to.be.left', 320)

    cy.get('.btn-3').click();
    cy.get('.padded .v-hl-container > :nth-child(4)')
      .should('to.be.left', 320)

    cy.get('.btn-10').click();
    cy.get('.padded .v-hl-container > :nth-child(11)')
      .should('to.be.left', 320)

    cy.get('.btn-19').click();
    // Go to 19 should not be possible.
    cy.get('.padded .v-hl-container > :nth-child(20)')
      .should('to.not.be.left', 320)

    cy.get('.padded .v-hl-container > :nth-child(17)')
      .should('to.be.left', 320)
  });

  it('should not scroll to index', function () {
    cy.get('.btn-100').click();
    cy.wait(1000);
    cy.get('.normal .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)

    cy.get('.btn--1').click();
    cy.wait(1000);
    cy.get('.normal .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)

    cy.get('.btn-0').click();
    cy.wait(1000);
    cy.get('.normal .v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)
  });

  it('navigation: button should and should not appear', function () {
    cy.get('.normal .v-hl-btn-prev').should('not.exist');
    cy.get('.normal .v-hl-btn-next').should('exist');

    cy.get('.btn-1').click();
    cy.get('.normal .v-hl-btn-prev').should('exist');
    cy.get('.normal .v-hl-btn-next').should('exist');

    cy.get('.btn-19').click();
    cy.get('.normal .v-hl-btn-prev').should('exist');
    cy.get('.normal .v-hl-btn-next').should('not.exist');
  });

  it('navigation: next then scroll to index', function () {
    cy.get('.normal .v-hl-btn-next').click();
    cy.get('.normal .v-hl-btn-prev').should('exist');
    cy.get('.normal .v-hl-btn-next').should('exist');

    cy.get('.btn-10').click();
    cy.wait(1000);
    cy.get('.normal .v-hl-btn-prev').should('exist');
    cy.get('.normal .v-hl-btn-next').should('exist');

    cy.get('.normal .v-hl-btn-next').click();
    cy.wait(1000);
    cy.get('.normal .v-hl-btn-prev').should('exist');
    cy.get('.normal .v-hl-btn-next').should('exist');
  });
})

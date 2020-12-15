/// <reference types="cypress" />

describe('scroll-to-index', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/scroll-to-index')
    cy.viewport(1600, 800)
  })

  it('should scroll to index', function () {
    cy.viewport(1200, 800)

    cy.get('.btn-1').click();
    cy.get('.v-hl-container > :nth-child(2)')
      .should('to.be.left', 80)

    cy.get('.btn-3').click();
    cy.get('.v-hl-container > :nth-child(4)')
      .should('to.be.left', 80)

    cy.get('.btn-10').click();
    cy.get('.v-hl-container > :nth-child(11)')
      .should('to.be.left', 80)

    cy.get('.btn-19').click();
    // Go to 19 should not be possible.
    cy.get('.v-hl-container > :nth-child(20)')
      .should('to.not.be.left', 80)

    cy.get('.v-hl-container > :nth-child(17)')
      .should('to.be.left', 80)
  });

  it('should not scroll to index', function () {
    cy.viewport(1200, 800)

    cy.get('.btn-100').click();
    cy.wait(1000);
    cy.get('.v-hl-container > :nth-child(1)')
      .should('to.be.left', 80)

    cy.get('.btn--1').click();
    cy.wait(1000);
    cy.get('.v-hl-container > :nth-child(1)')
      .should('to.be.left', 80)

    cy.get('.btn-0').click();
    cy.wait(1000);
    cy.get('.v-hl-container > :nth-child(1)')
      .should('to.be.left', 80)
  });

  it('navigation: button should and should not appear', function () {
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.btn-1').click();
    cy.wait(1000);
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.btn-19').click();
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('not.exist');
  });

  it('navigation: next then scroll to index', function () {
    cy.get('.v-hl-btn-next').click();
    cy.wait(1000);
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.btn-10').click();
    cy.wait(1000);
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-next').click();
    cy.wait(1000);
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');
  });
})

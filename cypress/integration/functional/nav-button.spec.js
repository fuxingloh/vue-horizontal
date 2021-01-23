/// <reference types="cypress" />

describe('nav-button', () => {
  beforeEach(() => {
    cy.viewport(1200, 1600)
    cy.visit('http://localhost:3000/nav-button')
  })

  it('button-true: should have next but not prev but later have next', () => {
    cy.get('.button-true .v-hl-btn-prev').should('not.exist');
    cy.get('.button-true .v-hl-btn-next').should('exist');

    cy.get('.button-true .v-hl-btn-next').click()
    cy.get('.button-true .v-hl-btn-prev').should('exist');
    cy.get('.button-true .v-hl-btn-next').should('exist');
  })

  it('button-not-between: should have next but not prev but later have next', () => {
    cy.get('.button-not-between .v-hl-btn-prev').should('not.exist');
    cy.get('.button-not-between .v-hl-btn-next').should('exist');

    cy.get('.button-not-between .v-hl-btn-next').click()
    cy.get('.button-not-between .v-hl-btn-prev').should('exist');
    cy.get('.button-not-between .v-hl-btn-next').should('exist');
  })

  it('button-false: should not have button', function () {
    cy.get('.button-false .v-hl-btn-prev').should('not.exist');
    cy.get('.button-false .v-hl-btn-next').should('not.exist');
  });

  it('button-replaced: next prev', function () {
    cy.get('.button-replaced .v-hl-btn-prev').should('not.exist');
    cy.get('.button-replaced .v-hl-btn-next').should('exist');

    cy.get('.button-replaced .v-hl-btn-next').click()
    cy.get('.button-replaced .v-hl-btn-prev').should('exist');
    cy.get('.button-replaced .v-hl-btn-next').should('exist');

    cy.get('.button-replaced .v-hl-btn-prev').click()
    cy.get('.button-replaced .v-hl-btn-prev').should('not.exist');
    cy.get('.button-replaced .v-hl-btn-next').should('exist');
  });

  it('button-replaced-not-between: should have next but not prev but later have next', () => {
    cy.get('.button-replaced-not-between .v-hl-btn-prev').should('not.exist');
    cy.get('.button-replaced-not-between .v-hl-btn-next').should('exist');

    cy.get('.button-replaced-not-between .v-hl-btn-next').click()
    cy.get('.button-replaced-not-between .v-hl-btn-prev').should('exist');
    cy.get('.button-replaced-not-between .v-hl-btn-next').should('exist');
  })

  it('prevent-default: should not move', () => {
    cy.get('.prevent-default .v-hl-btn-prev').should('not.exist');
    cy.get('.prevent-default .v-hl-btn-next').should('exist');

    cy.get('.prevent-default .btn-prevent-default').click()
    cy.wait(1000)
    cy.get('.prevent-default .v-hl-btn-prev').should('not.exist');
    cy.get('.prevent-default .v-hl-btn-next').should('exist');
  })
})

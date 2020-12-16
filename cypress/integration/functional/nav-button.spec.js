/// <reference types="cypress" />

describe('nav-button', () => {
  beforeEach(() => {
    cy.viewport(1200, 800)
    cy.visit('http://localhost:8080/nav-button')
  })

  it('button-true: should have next but not prev but later have next', () => {
    cy.get('.button-true .v-hl-btn-prev').should('not.exist');
    cy.get('.button-true .v-hl-btn-next').should('exist');

    cy.get('.button-true .v-hl-btn-next').click()
    cy.get('.button-true .v-hl-btn-prev').should('exist');
    cy.get('.button-true .v-hl-btn-next').should('exist');
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
})

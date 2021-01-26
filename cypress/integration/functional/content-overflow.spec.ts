/// <reference types="cypress" />

describe('content-overflow', () => {
  beforeEach(() => {
    cy.viewport(1600, 800)
    cy.visit('http://localhost:8080/content-overflow')
  })

  it('next: should not jump item should half scroll', function () {
    cy.get('.v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)

    cy.get('.v-hl-btn-next').click();
    cy.wait(1000);

    cy.get('.v-hl-container > :nth-child(1)')
      .should('to.not.be.left', 100)
    cy.get('.v-hl-container > :nth-child(2)')
      .should('to.not.be.left', 100)

    cy.get('.v-hl-btn-next').click();
    cy.get('.v-hl-container > :nth-child(2)')
      .should('to.be.left', 100)
  });

  it('prev: should jump when half scroll', function () {
    cy.get('.v-hl-btn-next').click();
    cy.wait(1000);
    cy.get('.v-hl-btn-next').click();

    cy.get('.v-hl-container > :nth-child(2)')
      .should('to.be.left', 100)

    cy.get('.v-hl-btn-prev').click();
    cy.get('.v-hl-container > :nth-child(1)')
      .should('to.be.left', 100)
  });
})

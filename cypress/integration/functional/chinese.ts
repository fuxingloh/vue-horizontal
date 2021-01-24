/// <reference types="cypress" />

describe('chinese', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/chinese')
  })

  it('should have 3', () => {
    cy.viewport(900, 900)
    cy.get(`.v-hl-container > :nth-child(5)`)
      .invoke('position').its('left')
      .should('be.gt', 900);

    cy.get(`.v-hl-container > :nth-child(3)`)
      .invoke('outerWidth')
      .should('be.lt', 900);

    cy.get(`.v-hl-container > :nth-child(-n+3)`)
      .invoke('position').its('left')
      .should('be.lt', 900);
  });

  it('should have button', () => {
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-next').click()
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');
  })

  it('should not have button', () => {
    cy.get('.v-hl-btn-next').click()
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-prev').click()
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('exist');
  })
})

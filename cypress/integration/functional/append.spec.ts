/// <reference types="cypress" />

describe('append', () => {
  beforeEach(() => {
    cy.viewport(1600, 1000)
    cy.visit('http://localhost:8080/append')
  })

  it('should not exist before append', function () {
    cy.get('.v-hl-container > :nth-child(2)')
      .should('not.exist');

    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('not.exist');
  });

  it('should append 1', function () {
    cy.get('.v-hl-container > :nth-child(2)')
      .should('not.exist');
    cy.get('.append-1').click();
    cy.get('.v-hl-container > :nth-child(2)')
      .should('exist');
  });

  it('should append 1 + 1', function () {
    cy.get('.append-1').click();
    cy.get('.append-1').click();
    cy.get('.v-hl-container > :nth-child(3)')
      .should('exist');
  });

  it('should append 100', function () {
    cy.get('.append-100').click();
    cy.get('.v-hl-container > :nth-child(101)')
      .should('exist');
  });

  it('should not show nav button after append', function () {
    cy.get('.append-1').click();

    cy.get('.v-hl-container > :nth-child(2)').should('exist');
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('not.exist');
  });

  it('should show nav button after append', function () {
    cy.get('.append-1').click();
    cy.get('.append-10').click();

    cy.get('.v-hl-container > :nth-child(2)').should('exist');
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('exist');
  });

  it('should show nav button after append twice', function () {
    cy.get('.append-10').click();
    cy.get('.v-hl-btn-next').click();
    cy.wait(1500);
    cy.get('.v-hl-btn-next').click();


    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('not.exist');

    cy.get('.append-10').click();

    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');
  });

  it('should show nav button when between', function () {
    cy.get('.append-10').click();
    cy.get('.v-hl-btn-next').click();
    cy.get('.append-10').click();

    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');
  });
})

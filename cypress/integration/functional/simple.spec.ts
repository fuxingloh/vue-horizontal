/// <reference types="cypress" />
// aka generic test cases

describe('simple', () => {
  beforeEach(() => {
    cy.viewport(1200, 800)
    cy.visit('http://localhost:3000/simple')
  })

  it('root: should contain container and next', () => {
    cy.get('.vue-horizontal').children()
      .should('have.length', 2)
      .should('have.class', 'v-hl-container')
      .should('have.class', 'v-hl-btn-next')
  })

  it('container: should contain elements', function () {
    cy.get('.v-hl-container').children()
      .should('have.length', 20)
  });

  it('container: should start from 0', function () {
    cy.get('.v-hl-container > :nth-child(1)')
      .should('to.be.left', 80)
  });

  it('navigation: next next prev prev', function () {
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-next').click()
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-next').click()
    cy.wait(1000)
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-prev').click()
    cy.wait(1000)
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-prev').click()
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('exist');
  });
})

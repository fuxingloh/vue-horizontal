/// <reference types="cypress" />
// aka generic test cases

describe('simple', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/simple')
    cy.viewport(1200, 800)
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
    cy.viewport(1200, 800)
    cy.get('.v-hl-container > :nth-child(1)')
      .should('to.be.left', 80)
  });

  it('navigation: next next prev prev', function () {
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-next').click()
    cy.wait(500)
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-next').click()
    cy.wait(500)
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-prev').click()
    cy.wait(500)
    cy.get('.v-hl-btn-prev').should('exist');
    cy.get('.v-hl-btn-next').should('exist');

    cy.get('.v-hl-btn-prev').click()
    cy.get('.v-hl-btn-prev').should('not.exist');
    cy.get('.v-hl-btn-next').should('exist');
  });

  it('should match screenshot', function () {
    cy.get('.vue-horizontal').matchImageSnapshot()
  });

  it('should match screenshot 1200x800', function () {
    cy.viewport(1200, 800)
    cy.get('.vue-horizontal').matchImageSnapshot()
  });

  it('should match screenshot 800x800', function () {
    cy.viewport(800, 800)
    cy.get('.vue-horizontal').matchImageSnapshot()
  });

  it('should match screenshot 600x600', function () {
    cy.viewport(600, 600)
    cy.get('.vue-horizontal').matchImageSnapshot()
  });

  it('should match document', function () {
    cy.viewport(1200, 800)
    cy.document().matchImageSnapshot()
  });

  it('should match document after next', function () {
    cy.viewport(1200, 800)
    cy.get('.v-hl-btn-next').click()
    cy.wait(3000)

    cy.document().matchImageSnapshot()
  });
})

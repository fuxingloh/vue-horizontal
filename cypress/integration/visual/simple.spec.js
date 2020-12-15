/// <reference types="cypress" />
// aka generic test cases

describe('simple', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/simple')
    cy.viewport(1200, 800)
  })

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

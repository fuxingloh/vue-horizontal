/// <reference types="cypress" />
// aka generic test cases

describe('simple', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/simple')
  })

  it('should match screenshot 1200x800', function () {
    cy.viewport(1200, 800)

    cy.wait(1000)
    cy.get('.vue-horizontal').matchImageSnapshot()
  });

  it('should match screenshot 800x800', function () {
    cy.viewport(800, 800)

    cy.wait(1000)
    cy.get('.vue-horizontal').matchImageSnapshot()
  });

  it('should match screenshot 600x600', function () {
    cy.viewport(600, 600)

    cy.wait(1000)
    cy.get('.vue-horizontal').matchImageSnapshot()
  });

  it('should match document', function () {
    cy.viewport(1200, 800)

    cy.wait(1000)
    cy.document().matchImageSnapshot()
  });

  it('should match document after next', function () {
    cy.viewport(1200, 800)

    cy.get('.v-hl-btn-next').click()

    cy.wait(1000)
    cy.document().matchImageSnapshot()
  });
})

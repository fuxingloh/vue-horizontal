/// <reference types="cypress" />

describe('scroll-to-index', () => {
  beforeEach(() => {
    cy.viewport(1600, 800)
    cy.visit('http://localhost:3000/scroll-to-index')
  })

  it('should match document', function () {
    cy.get('.btn-2').click();
    cy.wait(1000)

    cy.document().matchImageSnapshot()
  });
})

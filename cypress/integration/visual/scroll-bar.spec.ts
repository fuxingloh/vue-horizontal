/// <reference types="cypress" />

describe('scroll-bar', () => {
  beforeEach(() => {
    cy.viewport(1600, 800)
    cy.visit('http://localhost:3000/scroll-bar')
  })

  it('should match document', function () {
    cy.wait(1000)

    cy.document().matchImageSnapshot()
  });
})

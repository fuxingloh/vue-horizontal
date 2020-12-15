/// <reference types="cypress" />

describe('scroll-to-index', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/scroll-to-index')
    cy.viewport(1600, 800)
  })

  it('should match screenshot', function () {
    cy.get('.btn-2').click();
    cy.wait(4000);

    cy.get('.vue-horizontal').matchImageSnapshot()
  });
})

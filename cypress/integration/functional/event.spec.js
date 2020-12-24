/// <reference types="cypress" />

describe('event', () => {
  beforeEach(() => {
    cy.viewport(1200, 800)
    cy.visit('http://localhost:8080/event')
  })

  it('scroll: should have no event', () => {
    cy.get('.scroll')
      .should('have.text', 'no-event')
  })

  it('scroll: should have event after click', () => {
    cy.get('.v-hl-btn-next').click()
    cy.get('.scroll')
      .should('not.have.text', 'no-event')

    cy.get('.scroll')
      .invoke('text')
      .should('match', /"left": [0-9]+/)
  });

  it('scroll-debounce: should have event', () => {
    cy.get('.scroll-debounce')
      .should('not.have.text', 'no-event')

      .invoke('text')
      .should('match', /"left": 0/)
      .should('match', /"containerWidth": [0-9]+/)
      .should('match', /"scrollWidth": [0-9]+/)
      .should('match', /"hasNext": true/)
      .should('match', /"hasPrev": false/)
  });

  it('scroll-debouce: should have event after click', () => {
    cy.get('.v-hl-btn-next').click()
    cy.get('.scroll-debounce')
      .should('not.have.text', 'no-event')

    cy.get('.scroll-debounce')
      .invoke('text')
      .should('match', /"left": [0-9]+/)
      .should('match', /"containerWidth": [0-9]+/)
      .should('match', /"scrollWidth": [0-9]+/)
      .should('match', /"hasNext": true/)
      .should('match', /"hasPrev": true/)
  });

  it('next: should have no event', () => {
    cy.get('.next')
      .should('have.text', 'no-event')
  })

  it('next: should have event after click', () => {
    cy.get('.v-hl-btn-next').click()
    cy.get('.next')
      .should('have.text', 'next')
  })

  it('prev: should have no event', () => {
    cy.get('.prev')
      .should('have.text', 'no-event')
  })

  it('prev: should have event after click', () => {
    cy.get('.v-hl-btn-next').click()
    cy.get('.v-hl-btn-prev').click()

    cy.get('.prev')
      .should('have.text', 'prev')
  })
})

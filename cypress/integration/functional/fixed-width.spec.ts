/// <reference types="cypress" />

function beSameWidth(select: string) {
  cy.get(`${select} .v-hl-container > :nth-child(1)`)
    .invoke('outerWidth')
    .then(lhs => {
      cy.get(`${select} .v-hl-container > :nth-child(2)`)
        .invoke('outerWidth')
        .then((rhs: any) => {
          expect(lhs).to.be.closeTo(rhs, 0.5);
        })
    })
}

describe('fixed-width', () => {
  beforeEach(() => {
    cy.viewport(1200, 800)
    cy.visit('http://localhost:3000/fixed-width')
  })

  it('should be all same width', function () {
    for (const i of [1, 2]) {
      cy.get(`.20-items .v-hl-container > :nth-child(${i})`)
        .invoke('outerWidth')
        .then(lhs => {
          cy.get(`.2-items .v-hl-container > :nth-child(${i})`)
            .invoke('outerWidth')
            .then((rhs: any) => {
              expect(lhs).to.be.closeTo(rhs, 0.5);
            })

          cy.get(`.fixed-content .v-hl-container > :nth-child(${i})`)
            .invoke('outerWidth')
            .then((rhs: any) => {
              expect(lhs).to.be.closeTo(rhs, 0.5);
            })
        })
    }
  });

  it('20-items: should be same width', function () {
    beSameWidth('.20-items')
  });

  it('2-items: should have same width', function () {
    beSameWidth('.2-items')
  });

  it('fixed-content: should have same width', function () {
    beSameWidth('.fixed-content')
  });

  it('20-items: should have next but not prev but later have next', () => {
    cy.get('.20-items .v-hl-btn-prev').should('not.exist');
    cy.get('.20-items .v-hl-btn-next').should('exist');

    cy.get('.20-items .v-hl-btn-next').click()
    cy.get('.20-items .v-hl-btn-next').should('exist');
    cy.get('.20-items .v-hl-btn-prev').should('exist');
  })
})

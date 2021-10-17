/// <reference types="cypress" />

function toBeDifferentWidth(select: string) {
  cy.get(`${select} .v-hl-container > :nth-child(1)`)
    .invoke('outerWidth')
    .then(lhs => {
      cy.get(`${select} .v-hl-container > :nth-child(2)`)
        .invoke('outerWidth')
        .then((rhs: any) => {
          expect(lhs).to.be.not.closeTo(rhs as number, 1);
        })

    })
}

describe('content-width', () => {
  beforeEach(() => {
    cy.viewport(1200, 800)
    cy.visit('http://localhost:3000/content-width')
  })

  it('20-items: should have different width', function () {
    toBeDifferentWidth('.20-items')
  });

  it('2-items: should have different width', function () {
    toBeDifferentWidth('.2-items')
  });

  it('fixed-content: should have different width', function () {
    toBeDifferentWidth('.fixed-content')
  });

  it('20-items: should have next but not prev but later have next', () => {
    cy.get('.20-items .v-hl-btn-prev').should('not.exist');
    cy.get('.20-items .v-hl-btn-next').should('exist');

    cy.get('.20-items .v-hl-btn-next').click()
    cy.get('.20-items .v-hl-btn-prev').should('exist');
    cy.get('.20-items .v-hl-btn-next').should('exist');
  })

  it('20-items: should not overscroll items that are not fully visible', function () {
    [2, 4, 7, 10, 13, 15, 17].forEach(index => {
      cy.get('.20-items .v-hl-btn-next').click()
      cy.get(`.20-items .v-hl-container > :nth-child(${index + 1})`)
        .should('to.be.left', 80)
    });
  });
})

/// <reference types="cypress" />

describe('responsive', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/responsive')
  })

  it('should have 1 for width: 480px', () => {
    cy.viewport(480, 800)
    cy.get('.v-hl-container > :nth-child(1)')
      .invoke('outerWidth')
      .should('be.lt', 480);

    cy.get('.v-hl-container > :nth-child(-n+1)')
      .invoke('position').its('left')
      .should('be.lt', 480);

    cy.get('.v-hl-container > :nth-child(3)')
      .invoke('position').its('left')
      .should('be.gt', 480);
  });

  [
    {number: 1, width: 400},
    {number: 1, width: 500},
    {number: 1, width: 600},
    {number: 2, width: 700},
    {number: 3, width: 800},
    {number: 3, width: 900},
    {number: 3, width: 1000},
    {number: 4, width: 1100},
    {number: 4, width: 1200},
    {number: 5, width: 1300},
    {number: 5, width: 1400},
    {number: 5, width: 1500},
    {number: 5, width: 1600},
  ].forEach(({number, width}) => {
    it(`should have ${number} for width: ${width}px`, function () {
      cy.viewport(width, width)

      cy.get(`.v-hl-container > :nth-child(${number + 2})`)
        .invoke('position').its('left')
        .should('be.gt', width);

      cy.get(`.v-hl-container > :nth-child(${number})`)
        .invoke('outerWidth')
        .should('be.lt', width);

      cy.get(`.v-hl-container > :nth-child(-n+${number})`)
        .invoke('position').its('left')
        .should('be.lt', width);
    });
  })
})

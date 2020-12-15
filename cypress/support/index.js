// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import 'cypress-plugin-snapshots/commands';

/**
 * Example that shows how to write a custom Chai assertion.
 *
 * @see https://www.chaijs.com/guide/helpers/
 * @example
 ```
 expect('foo').to.be.foo()
 expect('bar').to.not.be.foo()
 cy.wrap('foo').should('be.foo')
 cy.wrap('bar').should('not.be.foo')
 ```
 * */
const left = (_chai, utils) => {
  _chai.Assertion.addMethod('left', function (left) {
    const $el = utils.flag(this, 'object');
    const elLeft = $el[0].getBoundingClientRect().left
    this.assert(
      elLeft === left
      , 'expected #{exp} to have left #{act}'
      , 'expected #{exp} not to have left #{act}'
      , elLeft, left
    );
  });
}

chai.use(left)

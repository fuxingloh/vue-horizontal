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

import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  failureThreshold: 0.03,
  failureThresholdType: 'percent',
});

const left = (_chai, utils) => {
  _chai.Assertion.addMethod('left', function (left) {
    const $el = utils.flag(this, 'object');
    const elLeft = $el[0].getBoundingClientRect().left

    // Very inconsistent result also cross browser
    // Visually it looks fine tho
    this.assert(
      Math.abs(elLeft - left) < 2.0
      , 'expected #{exp} to have left #{act}'
      , 'expected #{exp} not to have left #{act}'
      , elLeft, left
    );
  });
}

chai.use(left)

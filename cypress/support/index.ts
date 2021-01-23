/// <reference types="cypress" />

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

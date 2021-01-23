/// <reference types="cypress" />

import {addMatchImageSnapshotPlugin} from "cypress-image-snapshot/plugin";

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};

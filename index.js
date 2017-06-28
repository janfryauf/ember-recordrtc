/* eslint-env node */
'use strict';

function isLegacyFastboot() {
  return process.env.EMBER_CLI_FASTBOOT === 'true';
}

module.exports = {
  name: 'ember-recordrtc',

  included(app) {
    this._super.included.apply(this, arguments);

    if (! isLegacyFastboot()) {
      this.importBrowserDependencies(app);
    }
  },

  importBrowserDependencies(app) {
    app.import(
      {
        development: app.bowerDirectory + '/recordrtc/RecordRTC.js',
        production: app.bowerDirectory + '/recordrtc/RecordRTC.min.js'
      },
      { prepend: true }
    );

  },
};

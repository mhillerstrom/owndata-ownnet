const to = require('./to');
const cryptographic = require('./cryptographic');
const misc = require('./misc');
const OptionsProxy = require('./options-proxy');
const removeRoute = require('./express-remove-route');

module.exports = {
  to,
  ...cryptographic,
  ...misc,
  OptionsProxy,
  removeRoute
};

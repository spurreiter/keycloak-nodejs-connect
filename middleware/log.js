const debug = require('debug');

module.exports = function (name) {
  return debug('keycloak-connect' + (name || ''));
};

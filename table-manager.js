/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 14:09
 */

/**
 * Prepare a separate table manager component to handle tables (table, row, cell), filters and services manage
 * their state. Please don't add external dependencies to this module! Try to keep it stand alone.
 *
 * @namespace table-manager
 * @memberOf panel-desk
 */
const ngModule = angular.module('panel-desk.table-manager', []);

// Load services
require('./services/services.js')(ngModule);

// Load directives
require('./directives/directives.js')(ngModule);

module.exports = ngModule;

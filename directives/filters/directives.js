/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 11:49
 */

'use strict';

/**
 *
 * @param {angular.Module} ngModule
 *
 * @namespace filters
 * @memberOf panel-desk.table-manager.directives
 */
export default (ngModule) => {
    require('./filter-sorting.directive.js')(ngModule);
};

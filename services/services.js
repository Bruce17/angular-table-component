/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 14:20
 */

'use strict';

/**
 *
 * @param {angular.Module} ngModule
 *
 * @namespace services
 * @memberOf panel-desk.table-manager
 */
export default (ngModule) => {
    require('./StateService.js')(ngModule);
    require('./FilterManager.service.js')(ngModule);
};

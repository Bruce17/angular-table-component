/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   29.01.2016 09:17
 */

'use strict';

import _ from 'lodash';

import TableManagerController from './controllers/TableManagerController.js'

/**
 *
 * @param {angular.Module} ngModule
 */
export default (ngModule) => {
    /**
     * This directives provides a base table element to add rows, columns and cells to.
     * The table manager also handles events from the underlying rows, columns and cells.
     * Filters are also registered in this component and managed.
     *
     * @alias table-manager
     * @memberOf panel-desk.table-manager.directives
     */
    ngModule.directive('tableManager', [
        function () {
            return {
                restrict: 'E',
                scope: {},
                bindToController: {
                    tableName: '@',
                    baseData: '='
                },
                controllerAs: 'TableManager',
                controller: TableManagerController,

                /**
                 *
                 * @param {angular.$scope}         $scope
                 * @param {angular.$element}       $element
                 * @param {object}                 $attrs
                 * @param {TableManagerController} tableManagerCtrl
                 */
                link: function ($scope, $element, $attrs, tableManagerCtrl) {
                    // Check if some needed attributes are given
                    if (_.isEmpty(tableManagerCtrl.baseData)) {
                        throw new Error(
                            'TableManager\tattribute "baseData" ' +
                            (_.isEmpty(tableManagerCtrl.tableName) ? '' : 'on table "' + tableManagerCtrl.tableName + '" ') +
                            'is empty or not defined!'
                        );
                    }
                }
            };
        }
    ]);
};

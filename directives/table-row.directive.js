/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   29.01.2016 14:36
 */

'use strict';

import TableRowController from './controllers/TableRowController.js';

/**
 *
 * @param {angular.Module} ngModule
 */
export default (ngModule) => {
    /**
     * Provide a table row as directive. The row registers itself at the table manager.
     *
     * @alias table-row
     * @memberOf panel-desk.table-manager.directives
     */
    ngModule.directive('tableRow', [
        function () {
            return {
                restrict: 'E',
                require: ['^tableManager', 'tableRow'],
                scope: {},
                bindToController: {},
                controllerAs: 'TableRow',
                controller: TableRowController,

                /**
                 *
                 * @param {angular.$scope}  $scope
                 * @param {angular.element} $element
                 * @param {Array}           $attrs
                 * @param {Array}           ctrls
                 */
                link: function ($scope, $element, $attrs, ctrls) {
                    /**
                     * @type {table-manager} tableManager
                     * @type {table-row}     tableRow
                     */
                    const tableManager = ctrls[0],
                          tableRow     = ctrls[1];

                    // Bind the table manager to the controller.
                    tableRow.tableManager = tableManager;
                    tableRow.$element = $element;

                    tableManager.addRow(tableRow);
                }
            };
        }
    ]);
};

/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   29.01.2016 14:35
 */

'use strict';

import TableCellController from './controllers/TableCellController.js';

/**
 *
 * @param {angular.Module} ngModule
 */
export default (ngModule) => {
    /**
     * Provide a table cell as directive. The cell registers itself at the table-column.
     *
     * @alias table-cell
     * @memberOf panel-desk.table-manager.directives
     */
    ngModule.directive('tableCell', [
        function () {
            return {
                restrict: 'E',
                require: ['^tableManager', '^tableRow', 'tableCell'],
                scope: {},
                bindToController: {},
                controllerAs: 'TableCell',
                controller: TableCellController,

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
                     * @type {table-cell}    tableCell
                     */
                    const tableManager = ctrls[0],
                          tableRow     = ctrls[1],
                          tableCell    = ctrls[2];

                    // Bind the table row to the controller.
                    tableCell.tableManager = tableManager;
                    tableCell.tableRow = tableRow;
                    tableCell.$element = $element;

                    tableRow.addCell(tableCell);
                }
            };
        }
    ]);
};

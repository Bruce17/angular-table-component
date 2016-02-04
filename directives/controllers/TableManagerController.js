/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 16:40
 */

'use strict';

/**
 *
 * @class TableManagerController
 * @alias TableManager
 * @memberOf panel-desk.table-manager.directives
 */
export default class TableManagerController {
    /**
     * Give the base table a name to identify it easier e.g. for filter states.
     *
     * @alias table-name
     * @name tableName
     * @memberOf TableManagerController
     * @type {string}
     */

    /**
     * The base data which will be displayed e.g. via an ng-repeat in the view itself.
     * This base data is needed for filters e.g. to sort data.
     *
     * @name baseData
     * @alias base-data
     * @memberOf TableManagerController
     * @type {Array}
     */

    /**
     * Define controller dependencies.
     *
     * @returns {string[]}
     */
    static get $inject() {
        return [
            '$scope',
            'FilterManager'
        ];
    }

    /**
     *
     * @param {angular.$scope} $scope
     * @param {FilterManager}  FilterManager
     */
    constructor($scope, FilterManager) {
        this.$scope = $scope;
        this.filterManager = FilterManager.createInstance();

        this.rows = [];
        this.filters = [];

        setTimeout(() => {
            this.dumpTable();
        }, 250);
    }

    /**
     * Add a row to the table manager.
     *
     * @param {panel-desk.table-manager.directives.table-row} row
     */
    addRow(row) {
        this.rows.push(row);
    }

    /**
     * Add a filter to the table manager.
     *
     * @param {*} filter
     */
    addFilter(filter) {
        this.filterManager.addFilter(filter);
    }

    /**
     * Dump table content for debugging purposes.
     */
    dumpTable() {
        console.group('table "%s"', this.tableName);

        // Prepare and dump table content
        var dumpData = [];

        this.rows.forEach(function (row) {
            dumpData.push(
                row.cells.map(function (cell) {
                    return cell.$element.text();
                })
            );
        });

        console.table(dumpData);

        // Dump filter information
        this.filterManager.dumpFilters();

        // Dump base data
        console.log('base data', this.baseData);

        console.groupEnd();
    }

    /**
     * Get the column number on for the passed tableCell.
     *
     * @param {TableCell} tableCell
     *
     * @returns {number}
     */
    getColumnFromCell(tableCell) {
        console.group('getColumnFromCell');
        console.log('tableCell', tableCell);

        let i, iLen;
        for (i = 0, iLen = this.rows.length; i < iLen; i++) {

        }

        console.groupEnd();
    }

    /**
     * Data bind via two-way binding has been changed.
     * Trigger an update in the $scop eitself to display the new data.
     */
    updateView() {
        this.$scope.$apply();
    }
}

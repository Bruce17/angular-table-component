/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 17:07
 */

'use strict';

/**
 *
 * @class TableRowController
 * @alias TableRow
 * @memberOf panel-desk.table-manager.directives
 */
export default class TableRowController {
    /**
     * @name tableManager
     * @memberOf TableRowController
     * @type {object}
     */

    /**
     * @name $element
     * @memberOf TableCellController
     * @type {angular.element}
     */

    /**
     * Define controller dependencies.
     *
     * @returns {string[]}
     */
    static get $inject() {
        return [];
    }

    constructor() {
        this.cells = [];
    }

    /**
     * Add a cell to the table row.
     *
     * @param {panel-desk.table-manager.directives.table-cell} cell
     */
    addCell(cell) {
        this.cells.push(cell);
    }
}

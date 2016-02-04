/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 11:51
 */

'use strict';

/**
 * @class AbstractFilterController
 * @abstract
 * @memberOf panel-desk.table-manager.directives.filters
 */
export default class AbstractFilterController {
    /**
     * @name tableCell
     * @memberOf AbstractFilterController
     * @type {TableCellController}
     */

    /**
     * @name filterManager
     * @memberOf AbstractFilterController
     * @type {FilterManager}
     */

    /**
     * @name tableManager
     * @memberOf AbstractFilterController
     * @type {TableManager}
     */

    /**
     * Define controller dependencies.
     *
     * @returns {string[]}
     */
    static get $inject() {
        return [
            '$log'
        ];
    }

    /**
     *
     * @param {angular.$log}   $log
     */
    constructor($log) {
        this.$log = $log;
    }

    /**
     * Returns this filter's name.
     *
     * @returns {string}
     */
    get name() {
        throw new Error('Cannot call getter "name" on AbstractFilterController!');
    }
}

/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 17:14
 */

'use strict';

/**
 * A filter manager instance to handle and organize filters and their events.
 *
 * @class FilterManagerInstance
 * @memberOf panel-desk.table-manager.services
 */
class FilterManagerInstance {
    /**
     * A list of filters managed by this instance.
     *
     * @name _filters
     * @memberOf FilterManagerInstance
     * @type {Array<AbstractFilterController>}
     */

    /**
     *
     * @param {StateService} stateService
     */
    constructor(stateService) {
        this.stateService = stateService;

        this._filters = [];
    }

    /**
     * Add a new filter to the filter manager.
     *
     * @param {AbstractFilterController|*} filter
     */
    addFilter(filter) {
        // Register filter manager itself on the filter for faster access.
        filter.filterManager = this;

        this._filters.push(filter);
    }

    /**
     * Dump a list of all filters.
     */
    dumpFilters() {
        console.group('dumpFilters');

        let i = this._filters.length;
        if (i === 0) {
            console.log('none');
        } else {
            while (--i >= 0) {
                console.log(
                    'filter "%s" on element:',
                    this._filters[i].name,
                    this._filters[i].tableCell.$element
                );
            }
        }

        console.groupEnd();
    }

    /**
     * Update changed state from a filter into the state service.
     */
    setFilterState(key, state) {
        this.stateService.setState(key, state);
    }

    /**
     * Remove all filters from filter manager.
     */
    removeAllFilters() {
        this._filters.length = 0;
    }
}

/**
 *
 * @param {angular.Module} ngModule
 */
export default (ngModule) => {
    /**
     * Filter manager registers and handlers all kind of filters for a given table.
     *
     * @name FilterManager
     * @memberOf panel-desk.table-manager.services
     */
    ngModule.service('FilterManager', [
        'StateService',
        /**
         *
         * @param {StateService} stateService
         *
         * @returns {object}
         */
        function (stateService) {
            return {
                /**
                 * Create and return a new filter manager instance.
                 *
                 * @returns {FilterManagerInstance}
                 */
                createInstance() {
                    return new FilterManagerInstance(stateService);
                }
            };
        }
    ]);
};

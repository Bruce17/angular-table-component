/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 11:54
 */

'use strict';

import _ from 'lodash';

import AbstractFilterController from './AbstractFilterController.js';
import SortUtils from 'utils/Sort.es6.js';

/**
 * @class SortingFilterController
 * @alias SortingFilter
 * @extends AbstractFilterController
 * @memberOf panel-desk.table-manager.directives.filters
 */
export default class SortingFilterController extends AbstractFilterController {
    /**
     * This is the attribute name of the entity list to check.
     *
     * @name filterSortingList
     * @memberOf SortingFilterController
     * @type {string}
     */

    /**
     * Change sort order of this field.
     *
     * @name filterSortingField
     * @memberOf SortingFilterController
     * @type {string}
     */

    /**
     * Define the sorting type. Available types: 'string', 'num'. Default: 'string'
     *
     * @name filterSortingType
     * @memberOf SortingFilterController
     * @type {string}
     */

    /**
     * Pass along some additional sorting options.
     * Parameters:
     *   - "swapOrder": swap the initial sort order (default: false)
     *   - "posNumbersOnly": do only sort positive numbers. Undefined or negative numbers will be sorted down in the list.
     *
     * @name filterSortingOptions
     * @memberOf SortingFilterController
     * @type {object}
     */

    constructor(...args) {
        super(...args);

        // Store some sorting information
        this.sorting = {};
    }

    /**
     * Returns this filter's name.
     *
     * @returns {string}
     */
    get name() {
        return 'SortingFilter';
    }

    /**
     * Trigger sorting data depending on the clicked column.
     */
    triggerSort() {
        const logPrefix = 'SortingFilterController.changeOrderBy()\t';

        if (_.isEmpty(this.filterSortingList)) {
            this.$log.warn(logPrefix + 'please define field "entityListName"');
            return;
        } else if (_.isEmpty(this.filterSortingField)) {
            this.$log.warn(logPrefix + 'please define field "field"');
            return;
        } else if (_.isUndefined(this.tableCell.tableManager.baseData)) {
            this.$log.warn(logPrefix + 'please sorting base data');
            return;
        }

        //TODO: read this data from the state service.
        //const sortingOptions = this.tableCell.tableManager.baseData.sorting;

        // Entity list or field name has changed -> reset sort order.
        if (this.sorting.entityList !== this.filterSortingList || this.sorting.field !== this.filterSortingField) {
            this.sorting.order = '';
        }

        let sortingType = this.filterSortingType;
        if (_.isEmpty(sortingType)) {
            sortingType = 'string';
        }

        let options = this.filterSortingOptions;
        if (_.isUndefined(options) || _.isPlainObject(options) === false) {
            options = {};
        }

        this.sorting.fnc = sortingType;
        this.sorting.entityList = this.filterSortingList;
        this.sorting.field = this.filterSortingField;
        this.sorting.options = options;

        // Swap the sorting order e.g. to start on a numerical sorting column with the largest value.
        if (options.swapOrder) {
            this.sorting.order = (this.sorting.order === 'desc' ? 'asc' : 'desc');
        } else {
            this.sorting.order = (this.sorting.order === 'asc' ? 'desc' : 'asc');
        }

        // Update class attribute onto this filter's table cell element.
        if (this.sorting.order === 'asc') {
            this.tableCell.$element
                .removeClass('desc')
                .addClass('asc');
        } else {
            this.tableCell.$element
                .removeClass('asc')
                .addClass('desc');
        }

        // Sort list by defined sort parameters
        this.tableCell.tableManager.baseData.data = SortUtils.sortArrayOfLists(
            this.tableCell.tableManager.baseData.data,
            this.sorting.fnc,
            this.sorting.entityList,
            this.sorting.field,
            this.sorting.order,
            this.sorting.options
        );

        // Trigger a view update to display the new (sorted) data.
        this.tableCell.tableManager.updateView();
    }
}

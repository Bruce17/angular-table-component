/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 17:11
 */

'use strict';

import SortingFilterController from './controllers/SortingFilterController.js';

/**
 * Directive to provide sorting on a table column.
 *
 * @param {angular.Module} ngModule
 *
 * @alias filter-sorting
 * @memberOf panel-desk.table-manager.directives.filters
 */
export default (ngModule) => {
    ngModule.directive('filterSorting', [
        function () {
            return {
                restrict: 'A',
                require: ['^tableManager', '^tableCell', '^filterSorting'],
                bindToController: {
                    filterSortingList: '@',
                    filterSortingField: '@',
                    filterSortingType: '@?',
                    filterSortingOptions: '=?'
                },
                controllerAs: 'SortingFilter',
                controller: SortingFilterController,

                /**
                 *
                 * @param {angular.$scope}  $scope
                 * @param {angular.element} $element
                 * @param {Array}           $attrs
                 * @param {Array}           ctrls
                 */
                link: function ($scope, $element, $attrs, ctrls) {
                    /**
                     * @type {TableManagerController}  tableManager
                     * @type {TableCellController}     tableCell
                     * @type {SortingFilterController} filterSorting
                     */
                    const tableManager  = ctrls[0],
                          tableCell     = ctrls[1],
                          filterSorting = ctrls[2];

                    // Register some dependencies into this filter.
                    filterSorting.tableCell = tableCell;

                    // Register filter on the table manager
                    tableManager.addFilter(filterSorting);

                    // Update class attribute onto this element.
                    $element.addClass('sortable');

                    // Register watchers/handlers
                    $element.on('click', () => {
                        filterSorting.triggerSort();
                    });

                    // Do some cleanup on view destroy.
                    $scope.$on('$destroy', function () {
                        $element.off('click');
                    });
                }
            };
        }
    ]);
};

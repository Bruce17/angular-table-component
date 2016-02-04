/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   29.01.2016 14:36
 */

'use strict';

export default (ngModule) => {
    /**
     * Mark a given "table row" as "header". This directive has direct access to that row and the same scope.
     *
     * @alias table-row-head
     * @memberOf panel-desk.table-manager.directives
     */
    ngModule.directive('tableRowHead', [
        function () {
            return {
                restrict: 'A',
                require: ['^tableRow'],

                /**
                 *
                 * @param {angular.$scope}  $scope
                 * @param {angular.element} $element
                 * @param {Array}           $attrs
                 * @param {Array}           ctrls
                 */
                link: function ($scope, $element, $attrs, ctrls) {
                    /**
                     * @type {table-row} tableRow
                     */
                    const tableRow = ctrls[0];
                    // NOTICE: here you're able to work on the row object "tableRow" directly.

                    // Mark this row as a header element
                    $element.data('row-head', true);
                }
            };
        }
    ]);
};

/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   29.01.2016 14:34
 */

'use strict';

/**
 * The table manager handles a complete table containing rows, columns and cells. Each element can be inherited and extend itself. Thus it's possible to create special kind of row, column and cell behaviour as needed.
 *
 * The table manager always knows its rows, the row always knows about its columns and so on. Events can be passed easily upwards from a table-cell to the table-manager as a last instance.
 *
 * @example
 * <table-manager>
 *     <table-row>
 *         <table-cell></table-cell>
 *         <table-cell></table-cell>
 *         <table-cell></table-cell>
 *         <table-cell></table-cell>
 *     </table-row>
 *     <table-row>
 *         <table-cell></table-cell>
 *         <table-cell></table-cell>
 *         <table-cell></table-cell>
 *         <table-cell></table-cell>
 *     </table-row>
 * </table-manager>
 *
 * @param {angular.Module} ngModule
 *
 * @namespace directives
 * @memberOf planet-music.table-manager
 *
 * @TODO: Update documentation, add a UML schema which display all relationships in this table manager component.
 */
export default (ngModule) => {
    require('./table-manager.directive.js')(ngModule);
    require('./table-row.directive.js')(ngModule);
    require('./table-row-head.directive.js')(ngModule);
    require('./table-cell.directive.js')(ngModule);

    // Import additional table manager filters
    require('./filters/directives.js')(ngModule);
};

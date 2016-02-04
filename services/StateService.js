/**
 * @author Michael Raith
 * @email  mia87@web.de
 * @date   01.02.2016 16:02
 */

'use strict';

import _ from 'lodash';

/**
 *
 * @param {angular.Module} ngModule
 */
export default (ngModule) => {
    /**
     * Simple service which gets/sets state to a local memory object.
     * Replace it with a LocalStorage solution to persist states.
     *
     * @name StateService
     * @memberOf panel-desk.table-manager.services
     */
    ngModule.factory('StateService', [
        function () {
            /**
             * Simple state model as an object in memory.
             *
             * @type {object}
             */
            let state = {};

            /**
             * A list of registered listeners.
             *
             * @type {Array}
             */
            const listeners = [];

            return {
                /**
                 * Get a state from the model.
                 *
                 * @param {string} key
                 *
                 * @returns {*}
                 *
                 * @function getState
                 * @memberOf StateService
                 */
                getState(key) {
                    return state[key];
                },

                /**
                 * Update or set state to the model.
                 *
                 * @param {string} key
                 * @param {*}      state
                 *
                 * @function setState
                 * @memberOf StateService
                 */
                setState(key, state) {
                    state[key] = state;

                    // Notify every listener of a state change.
                    this.triggerListeners(key, state);
                },

                /**
                 * Clear the complete state object.
                 *
                 * @function clearState
                 * @memberOf StateService
                 */
                clearState() {
                    state = {};
                },

                /**
                 * Trigger a state change on every listener with the "key" and the new state
                 *
                 * @param {string} key
                 * @param {*}      newState
                 *
                 * @function triggerListeners
                 * @memberOf StateService
                 */
                triggerListeners(key, newState) {
                    let i = listeners.length;

                    while (--i >= 0) {
                        listeners[i].fn(key, newState);
                    }
                },

                /**
                 * Add a new listener to the state service. A listeners gets triggered on every state change.
                 *
                 * @param {Function} fn Register this listener on every state change.
                 *
                 * @returns {Function} A function to de-register the added state listener.
                 *
                 * @function addListener
                 * @memberOf StateService
                 */
                addListener(fn) {
                    // Argument is not a function? Return immediately.
                    if (_.isFunction(fn) === false) {
                        return function () {};
                    }

                    /**
                     * Create a random integer.
                     *
                     * @type {number}
                     */
                    const id = Math.floor(Math.random() * 10e16);

                    /**
                     * Prepare a simple listener object holding the callback listener function and a randomly
                     * generated number to identify that object.
                     *
                     * @type {{fn: Function, id: number}}
                     */
                    const listenerObj = {fn: fn, id: id};

                    listeners.push(listenerObj);

                    // Return a method to de-register the newly added listener method.
                    return function deregisterListener() {
                        let i = listeners.length;

                        while (--i >= 0) {
                            if (listeners[i].id === id) {
                                // Remove listener object.
                                listeners.splice(i, 1);

                                break;
                            }
                        }
                    };
                }
            };
        }
    ]);
};

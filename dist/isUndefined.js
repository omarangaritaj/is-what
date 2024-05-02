import { getType } from './getType.js';
/**
 * Returns whether the payload is undefined
 *
 * @param {any} payload
 * @returns {payload is undefined}
 */
export function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs
    .filter(f => f != null) // filters our null, undefined
    .reduce((acc, f) => { // acc is the previous value of the array. f is the current. reduce((pre, curr))
      if (typeof f !== 'function') {
        throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
      }

      // for the first iteration where the initial value is null, return the next value
      // the array funcs has been filtered, removing all null `equating` values.
      if (acc === null) {
        return f;
      }

      return function chainedFunction(...args) {
        acc.apply(this, args);
        f.apply(this, args);
      };
    }, null); // null is the initial value. Passed has previous in the first operation.
}


export default createChainedFunction;

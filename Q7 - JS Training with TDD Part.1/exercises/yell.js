'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
//Your Code

function yell(string){
    return string.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
// End of tests */

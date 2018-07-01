'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
//Your Code :
    
function cutFirst(string){
   return string.substring(2, string.length);
}

function cutLast(string) {
    return string.substring(0, string.length-2);
}

function cutFirstLast(string) {
    return cutFirst(cutLast(string));
}

//* Begin of tests

const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)

// End of tests */

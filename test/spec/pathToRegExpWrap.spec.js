/*!
 * path-to-regexp-wrap spec
 * @author Andrew Teologov <teologov.and@gmail.com>
 */

/* global define, describe, beforeEach, afterEach, it, assert, sinon, teoBase  */

"use strict";

const path = require('../../')();    // options object could be passed as well 

describe('Testing path-to-regexp-wrap', () => {
	let route, match;
	
	beforeEach(() => {
		route = '/get/:id';
  	match = path(route);
	});

	afterEach(() => {
		route = match = null;
	})

	it('Should match the path and return parameters object', () => {
		assert.deepEqual(match('/get/1'), {id: '1'}, 'Should return matched parameters object');
	});

});
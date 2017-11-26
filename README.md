### path-to-regexp-wrap
[![Build Status](https://travis-ci.org/teologov/path-to-regexp-wrap.svg?branch=master)](https://travis-ci.org/teologov/path-to-regexp-wrap)

It's a simple wrapper of original [path-to-regexp] (https://github.com/pillarjs/path-to-regexp) module.

### Usage

```
const path = require('path-to-regexp-wrap')();    // options object could be passed as well 
const route = '/get/:id';
const match = path(route);

const params = match('/get/1');
// returns {'id': '1'}
console.log(params);
    
```
### Options

* **options.sensitive** Defaults to `false`, set this to true to make routes case sensitive
* **options.strict** Defaults to `false`, set this to true to make the trailing slash matter.
* **options.end** Defaults to `true`, set this to false to only match the prefix of the URL.

* Advanced options (use for non-pathname strings, e.g. host names):
    * **delimiter** The default delimiter for segments. (default: `'/'`)
    * **endsWith** Optional character, or list of characters, to treat as "end" characters.
    * **delimiters** List of characters to consider delimiters when parsing. (default: `'./'`)

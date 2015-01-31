# require-optional [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

## Usage

Install via npm:

```bash
$ npm install require-optional
```

Basic usage:

```javascript
var optDep = require('require-optional')('dep')
if (optDep) {
  /* do stuff with optDep */
}
```

`require-optional` can also return a default value:

```javascript
var optDep = require('require-optional')('dep', function(){})
optDep('processing')
```

Requiring relative files takes a bit of fugliness due to relative paths:

```javascript
var optDep = require('require-optional')(require, './dep')
```

There is an alternate call to make this look a bit more sane:

```javascript
var requireOptional = require('require-optional')(require)
var optDep = requireOptional('./dep')
```

[npm-image]: https://img.shields.io/npm/v/require-optional.svg?style=flat
[npm-url]: https://npmjs.org/package/require-optional
[travis-image]: https://img.shields.io/travis/fengb/require-optional.svg?style=flat
[travis-url]: https://travis-ci.org/fengb/require-optional

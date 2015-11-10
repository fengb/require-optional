# require-optional [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

## Usage

Install via npm:

```bash
$ npm install require-optional
```

Basic usage:

```javascript
var requireOptional = require('require-optional')
var optDep = requireOptional('dep')
if (optDep) {
  /* do stuff with optDep */
}
```

`require-optional` can return a default value:

```javascript
var optDep = requireOptional('dep', function () {})
optDep('processing')
```

`require-optional` accepts an error callback for when the module is not found:

```javascript
requireOptional('dep', null, function (err) {
  console.warn(err)
})
```

`require-optional` can also require relative modules:

```javascript
var optDep = requireOptional('./dep')
```

[npm-image]: https://img.shields.io/npm/v/require-optional.svg?style=flat
[npm-url]: https://npmjs.org/package/require-optional
[travis-image]: https://img.shields.io/travis/fengb/require-optional.svg?style=flat
[travis-url]: https://travis-ci.org/fengb/require-optional
